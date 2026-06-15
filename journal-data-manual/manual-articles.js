const manualArticles = [
  /*
  {
    code: "IJCSE",
    issuePage: "Volume13-Issue5-2026",
    id: "IJCSE-V13I5P101",
    section: "Research Article",
    paperId: "IJCSE-V13I5P101",
    title: "Article title here",
    authors: "Author One, Author Two",
    pdfUrl: "journal-papers/IJCSE/2026/volume-13/issue-5/IJCSE-V13I5P101.pdf",
    abstract: "Article abstract here.",
    keywords: "keyword one, keyword two",
    citation: "Citation text here.",
    references: "References text here.",
    metaText: "Volume 13 | Issue 5 | Year 2026 | Article Id. IJCSE-V13I5P101"
  }
  */
];

function sameCode(article, code) {
  return String(article.code || "").toUpperCase() === String(code || "").toUpperCase();
}

function getManualIssue(code, page) {
  const papers = manualArticles
    .filter((article) => sameCode(article, code) && article.issuePage === page)
    .map(({ id, section, paperId, title, authors }) => ({
      id,
      section,
      paperId,
      title,
      authors
    }));

  if (!papers.length) {
    return null;
  }

  return {
    title: page.replace(/-/g, " "),
    papers
  };
}

function getManualPaper(code, id) {
  return manualArticles.find((article) => (
    sameCode(article, code) &&
    (article.paperId === id || article.id === id)
  )) || null;
}

function mergeManualPapers(remotePapers, manualPapers) {
  const existingIds = new Set(remotePapers.map((paper) => paper.paperId || paper.id));
  const newManualPapers = manualPapers.filter((paper) => !existingIds.has(paper.paperId || paper.id));
  return [...newManualPapers, ...remotePapers];
}

module.exports = {
  getManualIssue,
  getManualPaper,
  mergeManualPapers
};

