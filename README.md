# Saishnaa Website

This repository contains the Saishnaa Software Solution Limited website and academic journals portal.

It is not a React/Vite application. The current project is built with plain HTML, CSS, and JavaScript, with a small Node/Vercel API layer for journal archive and paper-detail lookups.

## Project Structure

- `index.html` - Main/about page.
- `index.css` - Shared site styling.
- `our-services.html`, `training-courses.html`, `our-projects.html`, `pricing.html`, `careers.html`, `contact-us.html` - Company website pages.
- `journals.html` / `academic-journals.html` - Academic journals listing page.
- `journal-details.html` - Dynamic journal detail page driven by a `code` query parameter.
- `archive-details.html` - Issue archive page that loads article lists from the API.
- `paper-details.html` - Article detail page that loads paper metadata from the API.
- `js/components.js` - Shared navbar, footer, and newsletter UI injection.
- `js/chatbot.js` - Floating Sai Assistant chatbot.
- `js/journal-data.js` - Journal detail database.
- `js/global-guidelines.js` - Shared publication ethics, author, editor, and reviewer guidelines.
- `api/archive.js` - Vercel serverless endpoint for issue archive data.
- `api/paper.js` - Vercel serverless endpoint for paper detail data.
- `server.js` - Local development server and local API equivalent.
- `vercel.json` - Vercel clean URL rewrites.

## Local Development

Start the local server:

```bash
node server.js
```

Then open:

```text
http://localhost:8080/
```

If port `8080` is already in use, the server automatically tries the next port.

## Journal Flow

1. The user opens `journals.html`.
2. Selecting a journal opens `journal-details.html?code=IJCSE` or another journal code.
3. `journal-details.html` reads journal information from `js/journal-data.js`.
4. Archive links open `archive-details.html`, which calls `/api/archive`.
5. Paper links open `paper-details.html`, which calls `/api/paper`.

## Encoding

Source files should be saved as UTF-8. The local Node server sends UTF-8 charsets for text assets so symbols such as smart quotes, bullets, rupee signs, and registered trademarks render correctly.
