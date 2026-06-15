# Manual Journal Data

Use this folder for article details that are added manually instead of scraped from the external journal site.

Connected data file:

```text
journal-data-manual/
  manual-articles.js
```

Add each article inside the `manualArticles` array in `manual-articles.js`.

Each article should keep these fields:

```js
{
  code: "IJCSE",
  issuePage: "Volume13-Issue5-2026",
  id: "IJCSE-V13I5P101",
  section: "Research Article",
  paperId: "IJCSE-V13I5P101",
  title: "Article title",
  authors: "Author One, Author Two",
  pdfUrl: "journal-papers/IJCSE/2026/volume-13/issue-5/IJCSE-V13I5P101.pdf",
  abstract: "Article abstract...",
  keywords: "keyword one, keyword two",
  citation: "Citation text...",
  references: "References text or HTML...",
  metaText: "Volume 13 | Issue 5 | Year 2026 | Article Id. IJCSE-V13I5P101"
}
```
