import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../Nav";
import SiteEnd from "../SiteEnd";
import { GITHUB, OLDNINE, vaardigheden } from "../content";

export const metadata: Metadata = {
  title: "Development — Willem de Wit",
  description:
    "Websites en webshops die ik bouw met Next.js, React en PHP, en de tools waar ik mee werk.",
};

export default function Development() {
  return (
    <>
      <div className="progress" aria-hidden="true" />

      <Nav
        huidig="dev"
        secties={[
          { href: "#projecten", label: "Projecten" },
          { href: "#vaardigheden", label: "Vaardigheden" },
        ]}
      />

      <div className="wrap">
        {/* ---------------- Kop ---------------- */}
        <header className="pageHead">
          <p className="label up">Development</p>
          <h1
            className="pageTitle up"
            style={{ "--d": "60ms" } as React.CSSProperties}
          >
            Wat ik bouw
          </h1>
          <p
            className="pageIntro up"
            style={{ "--d": "180ms" } as React.CSSProperties}
          >
            Ik maak websites en webshops met Next.js, React en PHP.
          </p>
        </header>

        {/* ---------------- Projecten ---------------- */}
        <section className="section" id="projecten">
          <div className="reveal">
            <p className="label">Projecten</p>
            <h2 className="h2">Wat ik gebouwd heb</h2>
            <p className="proza">
              Mijn projecten staan op{" "}
              <a
                className="tekstLink"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                github.com/Willemilk
              </a>
              .
            </p>
            <p className="proza">
              Een webshop die ik gebouwd heb staat op{" "}
              <a
                className="tekstLink"
                href={OLDNINE}
                target="_blank"
                rel="noreferrer"
              >
                old-nine-next.vercel.app
              </a>
              .
            </p>
          </div>
        </section>

        {/* ---------------- Vaardigheden ---------------- */}
        <section className="section" id="vaardigheden">
          <div className="reveal">
            <p className="label">Vaardigheden</p>
            <h2 className="h2">Waar ik mee werk</h2>
          </div>

          <div className="reveal">
            {vaardigheden.map((g) => (
              <div className="skillRow" key={g.key}>
                <p className="skillKey">{g.key}</p>
                <div className="chips">
                  {g.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="backWrap">
            <Link className="backLink" href="/">
              ← Terug naar de startpagina
            </Link>
          </p>
        </section>

        <SiteEnd />
      </div>
    </>
  );
}
