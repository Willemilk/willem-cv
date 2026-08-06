# CV-site Willem de Wit

Next.js 15 (App Router, TypeScript). Donker, één pagina, scroll-animaties via
native CSS scroll-timelines. Geen animatiebibliotheek nodig.

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

- `app/page.tsx` — alle tekst en gegevens, bovenin als lijsten
- `app/globals.css` — kleuren, lettertypes, animaties (variabelen bovenaan)
- `public/` — foto en CV-PDF
