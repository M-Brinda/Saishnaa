const {
  getManualIssue
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
  const page = req.query.page;

  if (!code || !page) {
    res.status(400).json({ error: "Missing parameters" });
    return;
  }

  const manualIssue = getManualIssue(code, page);
  if (manualIssue) {
    res.status(200).json(manualIssue);
    return;
  }

  res.status(200).json({
    title: `${code} Archive`,
    papers: [],
    message: "Archive records for this issue will be updated by the SSSL editorial office."
  });
};
