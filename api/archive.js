const https = require("https");

function fetchHtml(urlStr, callback) {
  const url = new URL(urlStr);
  const options = {
    hostname: url.hostname,
    path: url.pathname + url.search,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
  };
  https.get(options, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      let redirectUrl = res.headers.location;
      if (!redirectUrl.startsWith("http")) {
        redirectUrl = url.origin + redirectUrl;
      }
      return fetchHtml(redirectUrl, callback);
    }
    if (res.statusCode !== 200) {
      callback(new Error(`Failed to load page: status code ${res.statusCode}`));
      return;
    }
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      callback(null, data);
    });
  }).on("error", (err) => {
    callback(err);
  });
}

module.exports = (req, res) => {
  // Set CORS headers for Vercel serverless functions
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const code = req.query.code;
  const page = req.query.page;
  
  if (!code || !page) {
    res.status(400).json({ error: "Missing parameters" });
    return;
  }

  const targetUrl = `https://internationaljournalssrg.org/${code}/archive_details?page=${page}`;
  fetchHtml(targetUrl, (err, html) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    try {
      const titleMatch = html.match(/<h1[^>]*class="[^"]*h4[^"]*"[^>]*>([\s\S]*?)<\/h1>/i) || 
                         html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "";
      
      const papers = [];
      const parts = html.split(/<div[^>]*class="card shadow-sm border-1 position-relative w-100/i);
      for (let i = 1; i < parts.length; i++) {
        const cardHtml = parts[i].split(/<div[^>]*class="card shadow-sm border-1 position-relative w-100/i)[0];
        
        const idMatch = cardHtml.match(/<strong>([^<]+)<\/strong>/i) || 
                        cardHtml.match(/itemprop="identifier"[^>]*content="([^"]+)"/i);
        let id = idMatch ? (idMatch[1].includes("doi.org") ? idMatch[1].split("/").pop() : idMatch[1].trim()) : "";

        const sectionMatch = cardHtml.match(/itemprop="articleSection">([^<]+)<\/span>/i) || 
                             cardHtml.match(/articleSection">([^<]+)<\/span>/i);
        const section = sectionMatch ? sectionMatch[1].trim() : "Research Article";

        const linkMatch = cardHtml.match(/href="[^"]*paper-details\?Id=(\d+)"/i);
        const paperId = linkMatch ? linkMatch[1].trim() : "";

        const titleMatchCard = cardHtml.match(/itemprop="headline"[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i) || 
                               cardHtml.match(/headline"[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i) ||
                               cardHtml.match(/<h2[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i);
        const paperTitle = titleMatchCard ? titleMatchCard[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "";

        const authorMatch = cardHtml.match(/itemprop="author">([\s\S]*?)<\/span>/i) || 
                            cardHtml.match(/author">([\s\S]*?)<\/span>/i);
        const authors = authorMatch ? authorMatch[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "";

        if (paperTitle && paperId) {
          papers.push({ id, section, paperId, title: paperTitle, authors });
        }
      }
      res.status(200).json({ title, papers });
    } catch (ex) {
      res.status(500).json({ error: "Failed to parse content: " + ex.message });
    }
  });
};
