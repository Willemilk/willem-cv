# CV-site Willem de Wit

Next.js (App Router, TypeScript). Twee pagina's, scroll-animaties via native
CSS scroll-timelines. Geen animatiebibliotheek nodig.

- `/` is de persoonlijke pagina: over mij en traject.
- `/development` is de pagina met een verwijzing naar mijn GitHub en de
  vaardigheden.

## Terminal (VS Code)

```bash
npm install
npm run dev
```

Open http://localhost:3000

Voor je pusht even controleren of alles bouwt:

```bash
npm run build
```

## Naar Vercel

```bash
git init
git add .
git commit -m "CV site"
git branch -M main
git remote add origin https://github.com/Willemilk/willem-cv.git
git push -u origin main
```

Daarna op vercel.com de repo importeren. Verder niks instellen, Vercel
herkent Next.js zelf. Elke push naar `main` deployt automatisch.

## Waar staat wat

- `app/content.ts` — alle gegevens: telefoon, e-mail, GitHub, Old Nine-link,
  traject en vaardigheden. Tekst aanpassen doe je hier.
- `app/page.tsx` — de startpagina
- `app/development/page.tsx` — de development pagina
- `app/Nav.tsx` — de balk bovenin, gedeeld door beide pagina's
- `app/SiteEnd.tsx` — de gegevenslijst onderaan, gedeeld door beide pagina's
- `app/not-found.tsx` — de 404-pagina
- `app/layout.tsx` — lettertypes (via next/font, zonder verzoeken naar Google) en metadata
- `app/globals.css` — kleuren en animaties (variabelen bovenaan)
- `public/` — foto en CV-PDF
- `cv/cv.html` — bron van het CV-PDF. Na een aanpassing opnieuw printen:

```bash
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --no-pdf-header-footer --print-to-pdf="public/cv-willem-de-wit.pdf" "file:///$(pwd -W)/cv/cv.html"
```
