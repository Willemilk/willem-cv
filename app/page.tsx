/* eslint-disable @next/next/no-img-element */

const TELEFOON = "06 40764274";

const projecten = [
  {
    titel: "Old Nine Spirits",
    link: "https://old-nine.com",
    stack: "Next.js · Supabase · Vercel",
    body: "Een complete webshop voor een drankmerk, met inloggen, bestellen en een beheerpagina voor de eigenaar. Zelf ontworpen, gebouwd en online gezet op een eigen domein.",
  },
  {
    titel: "Groene Vingers",
    link: null,
    stack: "Next.js · schoolproject",
    body: "Een chatbot voor een tuincentrum, gemaakt als opdracht op school.",
  },
];

const traject = [
  {
    titel: "Software Development (MBO N4)",
    sub: "Summa ICT, Eindhoven · leerjaar 3",
    datum: "2023 — heden",
    body: "Programmeren met onder andere C#, PHP en databases, en werken aan echte projecten voor opdrachtgevers.",
  },
  {
    titel: "Software Developer (stage)",
    sub: "ABC E-Business, Eindhoven · beoordeling: goed",
    datum: "Sep 2025 — jan 2026",
    body: "Een app gebouwd voor Microsoft Dynamics 365 Business Central die klanten automatisch controleert tegen internationale sanctielijsten. Met API's de lijsten opgehaald en de controles automatisch laten verlopen.",
  },
  {
    titel: "Vakkenvuller",
    sub: "Albert Heijn",
    datum: "Aug 2022 — juli 2025",
    body: "Naast school gewerkt in de winkel. Hier leerde ik op tijd komen, doorwerken en samenwerken.",
  },
];

const vaardigheden = [
  {
    key: "Front-end",
    items: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    key: "Back-end",
    items: ["PHP", "Laravel", "Node.js", "C# / .NET", "REST API's"],
  },
  { key: "CMS & databases", items: ["WordPress", "Supabase", "MySQL"] },
  {
    key: "Tools",
    items: ["Git / GitHub", "Vercel", "VS Code", "Claude Code"],
    mark: ["Claude Code"],
  },
];

export default function Home() {
  return (
    <>
      <div className="progress" aria-hidden="true" />

      <nav className="nav">
        <span className="navName">Willem de Wit</span>
        <div className="navLinks">
          <a href="#projecten">Projecten</a>
          <a href="#ai">Werken met AI</a>
          <a href="#traject">Traject</a>
          <a href="#vaardigheden">Vaardigheden</a>
        </div>
        <a className="navMail" href="#contact">
          Contact
        </a>
      </nav>

      <div className="wrap">
        {/* ---------------- Hero ---------------- */}
        <header className="hero">
          <div className="heroTop">
            <span>Webdeveloper</span>
            <span>Eindhoven, NL</span>
          </div>

          <h1 className="heroName">
            <span>
              <b style={{ "--d": "80ms" } as React.CSSProperties}>Willem</b>
            </span>
            <span>
              <b style={{ "--d": "200ms" } as React.CSSProperties}>de Wit</b>
            </span>
          </h1>

          <div className="heroGrid">
            <div className="up" style={{ "--d": "480ms" } as React.CSSProperties}>
              <p className="heroRole">
                Student Software Development, derde jaar
              </p>
              <p className="heroText">
                Ik bouw websites en webshops met Next.js, React en PHP, van de
                voorkant tot de database. Een paar daarvan staan ook echt live.
                Ik leer het meeste door dingen gewoon te maken.
              </p>
              <div className="heroBtns">
                <a className="btn btnSolid" href="#projecten">
                  Bekijk mijn werk
                </a>
                <a className="btn btnLine" href="/cv-willem-de-wit.pdf" download>
                  Download cv
                </a>
              </div>
            </div>

            <div
              className="heroPhoto up"
              style={{ "--d": "380ms" } as React.CSSProperties}
            >
              <img src="/cvimage.jpg" alt="Portretfoto van Willem de Wit" />
            </div>
          </div>
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

        {/* ---------------- Traject ---------------- */}
        <section className="section" id="traject">
          <div className="reveal">
            <p className="label">Traject</p>
            <h2 className="h2">Opleiding en werkervaring</h2>
          </div>

          <div className="track">
            <span className="trackFill" aria-hidden="true" />
            {traject.map((t) => (
              <div className="stop reveal" key={t.titel}>
                <p className="stopDate">{t.datum}</p>
                <div>
                  <h3 className="stopTitle">{t.titel}</h3>
                  <p className="stopSub">{t.sub}</p>
                  <p className="stopBody">{t.body}</p>
                </div>
              </div>
            ))}
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
        </section>

        {/* ---------------- Contact ---------------- */}
        <section className="contact" id="contact">
          <div className="reveal">
            <p className="label">Contact</p>
            <a className="contactMail" href="mailto:wjpmdewit@icloud.com">
              wjpmdewit@icloud.com
            </a>
            <div className="contactMeta">
              <span>{TELEFOON}</span>
              <a
                href="https://github.com/Willemilk"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Willemilk
              </a>
              <a href="/cv-willem-de-wit.pdf" download>
                Download cv
              </a>
            </div>
          </div>
        </section>

        <div className="footMark">
          <span>Willem de Wit</span>
        </div>

        <footer className="foot">
          <span>Eindhoven, Nederland</span>
          <span>Gebouwd met Next.js</span>
        </footer>
      </div>
    </>
  );
}
