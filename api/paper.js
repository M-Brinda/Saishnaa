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
  const id = req.query.id;
  
  if (!code || !id) {
    res.status(400).json({ error: "Missing parameters" });
    return;
  }

  const targetUrl = `https://internationaljournalssrg.org/${code}/paper-details?Id=${id}`;
  fetchHtml(targetUrl, (err, html) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    try {
      const pdfMatch = html.match(/id="articlePdf"[^>]*href="([^"]+)"/i) || 
                       html.match(/href="([^"]+)"[^>]*id="articlePdf"/i) ||
                       html.match(/href="([^"]+\.pdf)"/i);
      let pdfUrl = pdfMatch ? pdfMatch[1].replace(/\s+/g, "").trim() : "";
      if (pdfUrl && !pdfUrl.startsWith("http")) {
        pdfUrl = pdfUrl.replace(/^\/?\.\.\//, "/");
        pdfUrl = "https://internationaljournalssrg.org" + pdfUrl;
      }

      const titleMatch = html.match(/<h1[^>]*class="h3"[^>]*>([\s\S]*?)<\/h1>/i) || 
                         html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "";

      const authorsMatch = html.match(/<h2[^>]*class="fw-bold"[^>]*>([\s\S]*?)<\/h2>/i) || 
                           html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
      const authors = authorsMatch ? authorsMatch[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "";

      const citationMatch = html.match(/id="citation"[^>]*>([\s\S]*?)<\/section>/i) ||
                            html.match(/id="citation"[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
      let citation = "";
      if (citationMatch) {
        const pMatch = citationMatch[1].match(/<p[^>]*>([\s\S]*?)<\/p>/i);
        citation = pMatch ? pMatch[1].trim() : citationMatch[1].trim();
        citation = citation.replace(/<b>Citation\s*:\s*<\/b>/i, "").replace(/Citation\s*:\s*/i, "");
      }

      const abstractMatch = html.match(/id="abstract"[^>]*>([\s\S]*?)<\/section>/i) ||
                            html.match(/id="abstract"[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
      let abstract = "";
      if (abstractMatch) {
        const pMatch = abstractMatch[1].match(/<p[^>]*>([\s\S]*?)<\/p>/i);
        abstract = pMatch ? pMatch[1].trim() : abstractMatch[1].trim();
        abstract = abstract.replace(/<b>Abstract\s*<\/b>/i, "").replace(/Abstract/i, "");
      }

      const keywordsMatch = html.match(/id="keywords"[^>]*>([\s\S]*?)<\/section>/i) ||
                            html.match(/id="keywords"[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
      let keywords = "";
      if (keywordsMatch) {
        const pMatch = keywordsMatch[1].match(/<p[^>]*>([\s\S]*?)<\/p>/i);
        keywords = pMatch ? pMatch[1].trim() : keywordsMatch[1].trim();
        keywords = keywords.replace(/<b>Keywords\s*<\/b>/i, "").replace(/Keywords/i, "");
      }

      const referencesMatch = html.match(/id="references"[^>]*>([\s\S]*?)<\/section>/i);
      let referencesHtml = "";
      if (referencesMatch) {
        referencesHtml = referencesMatch[1].trim();
        referencesHtml = referencesHtml.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/i, "");
        referencesHtml = referencesHtml.replace(/<style>[\s\S]*?<\/style>/gi, "");
      }

      const metaMatch = html.match(/<small style="font-size:13px">([\s\S]*?)<\/small>/i);
      const metaText = metaMatch ? metaMatch[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() : "";

      res.status(200).json({ title, authors, pdfUrl, citation, abstract, keywords, references: referencesHtml, metaText });
    } catch (ex) {
      res.status(500).json({ error: "Failed to parse content: " + ex.message });
    }
  });
};
