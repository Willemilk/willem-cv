import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../Nav";
import SiteEnd from "../SiteEnd";
import { projecten, vaardigheden } from "../content";

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
          { href: "#ai", label: "Werken met AI" },
          { href: "#vaardigheden", label: "Vaardigheden" },
        ]}
      />

      <div className="wrap">
        {/* ---------------- Kop ---------------- */}
        <header className="pageHead">
          <p className="label up">Development</p>
          <h1 className="pageTitle up" style={{ "--d": "60ms" } as React.CSSProperties}>
            Wat ik bouw
          </h1>
          <p
            className="pageIntro up"
            style={{ "--d": "180ms" } as React.CSSProperties}
          >
            Naast school maak ik websites en webshops met Next.js, React en
            PHP, van de voorkant tot de database. Een paar daarvan staan ook
            echt live.
          </p>
        </header>

        {/* ---------------- Projecten ---------------- */}
        <section className="section" id="projecten">
          <div className="reveal">
            <p className="label">Projecten</p>
            <h2 className="h2">Wat ik gebouwd heb</h2>
          </div>

          <div className="rows reveal">
            {projecten.map((p, i) => {
              const inner = (
                <>
                  <span className="rowNum">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="rowTitle">{p.titel}</h3>
                    <p className="rowStack">{p.stack}</p>
                  </div>
                  <p className="rowBody">{p.body}</p>
                  <span className="rowGo">
                    {p.link ? "Bekijk live ↗" : "School"}
                  </span>
                </>
              );

              return p.link ? (
                <a
                  className="row"
                  key={p.titel}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div className="row" key={p.titel}>
                  {inner}
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------------- Werken met AI ---------------- */}
        <section className="section band" id="ai">
          <div className="bandGrid">
            <div className="reveal">
              <p className="label">Werken met AI</p>
              <h2 className="h2" style={{ marginBottom: 0 }}>
                Claude Code hoort bij mijn gereedschap
              </h2>
            </div>
            <div className="bandText reveal">
              <p>
                Ik werk dagelijks met Claude en Claude Code en gebruik dat in
                vrijwel al mijn projecten. Bij Old Nine Spirits zet ik het in om
                nieuwe functies te bouwen, bugs op te sporen en de beveiliging
                van mijn database na te lopen.
              </p>
              <p>
                Ik laat er geen code door schrijven die ik zelf niet begrijp. Ik
                lees mee, controleer wat er verandert en werk met Git, zodat ik
                altijd terug kan naar een werkende versie. Zo gaat het
                routinewerk een stuk sneller en houd ik tijd over voor de dingen
                die er echt toe doen.
              </p>
            </div>
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
                    <span
                      className={
                        g.mark?.includes(item) ? "chip chipMark" : "chip"
                      }
                      key={item}
                    >
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
