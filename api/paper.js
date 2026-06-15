const {
  getManualPaper
} = require("../journal-data-manual/manual-articles");

module.exports = (req, res) => {
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

  const manualPaper = getManualPaper(code, id);
  if (manualPaper) {
    res.status(200).json(manualPaper);
    return;
  }

  res.status(200).json({
    title: `${code} Article Record`,
    authors: "SSSL Editorial Office",
    citation: `${code}. Article details are being prepared for publication in the SSSL local archive.`,
    abstract: "The full article record is currently being cataloged by the SSSL editorial office. Complete abstract, keywords, citation details, references, and PDF access will be updated after editorial verification.",
    keywords: "SSSL Journals, Open Access, Research Article, Editorial Catalog",
    references: "",
    metaText: `Article ID: ${id} | Status: Cataloging in Progress`,
    pdfUrl: ""
  });
};
