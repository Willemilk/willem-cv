# CV-site Willem de Wit

Next.js (App Router, TypeScript). Twee pagina's, scroll-animaties via native
CSS scroll-timelines. Geen animatiebibliotheek nodig.

- `/` is de persoonlijke pagina: wie ik ben, sport, traject en wat ik meebreng.
- `/development` is de pagina met de projecten, het werken met AI en de
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

- `app/content.ts` — alle gegevens: telefoon, e-mail, traject, projecten,
  vaardigheden, sportcijfers en kwaliteiten. Tekst aanpassen doe je hier.
- `app/page.tsx` — de startpagina
- `app/development/page.tsx` — de development pagina
- `app/Nav.tsx` — de balk bovenin, gedeeld door beide pagina's
- `app/SiteEnd.tsx` — contact, naamblok en footer, gedeeld door beide pagina's
- `app/globals.css` — kleuren, lettertypes, animaties (variabelen bovenaan)
- `public/` — foto en CV-PDF
