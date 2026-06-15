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

  res.status(404).json({
    error: "Paper details are not available in the SSSL local archive yet."
  });
};
