/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Nav from "./Nav";
import SiteEnd from "./SiteEnd";
import { kwaliteiten, sportStats, traject } from "./content";

export default function Home() {
  return (
    <>
      <div className="progress" aria-hidden="true" />

      <Nav
        huidig="home"
        secties={[
          { href: "#over", label: "Over mij" },
          { href: "#sport", label: "Sport" },
          { href: "#traject", label: "Traject" },
          { href: "#meebrengen", label: "Wat ik meebreng" },
        ]}
      />

      <div className="wrap">
        {/* ---------------- Hero ---------------- */}
        <header className="hero">
          <div className="heroTop">
            <span>Student Software Development</span>
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
              <p className="heroRole">Student, sporter en aanpakker</p>
              <p className="heroText">
                Ik zit in het derde jaar van de opleiding Software Development
                in Eindhoven. Daarnaast sta ik drie tot vier keer per week in de
                sportschool en werkte ik bijna drie jaar in de winkel. Ik pak
                dingen graag aan en maak ze af.
              </p>
              <div className="heroBtns">
                <a className="btn btnSolid" href="#over">
                  Meer over mij
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

        {/* ---------------- Over mij ---------------- */}
        <section className="section" id="over">
          <div className="reveal">
            <p className="label">Over mij</p>
            <h2 className="h2">Wie ik ben</h2>
          </div>

          <div className="bandGrid reveal">
            <p className="proza">
              Ik ben Willem, ik woon in Eindhoven en ik zit in het derde jaar
              van de opleiding Software Development op Summa ICT. Daarnaast ben
              ik bijna drie jaar vakkenvuller geweest bij Albert Heijn. Daar
              leerde ik op tijd komen, doorwerken als het druk is en
              samenwerken met een team.
            </p>
            <p className="proza">
              Buiten school en werk ben ik veel in de sportschool te vinden. Ik
              hou van een vast ritme en van dingen die alleen met geduld beter
              worden. Datzelfde geldt voor mijn projecten: ik leer het meeste
              door iets gewoon te maken en het bij te schaven tot het klopt.
            </p>
          </div>
        </section>

        {/* ---------------- Sport ---------------- */}
        <section className="section" id="sport">
          <div className="reveal">
            <p className="label">Sport</p>
            <h2 className="h2">De sportschool hoort bij mijn week</h2>
          </div>

          <div className="reveal">
            <div className="bandGrid">
              <p className="proza">
                Sinds eind 2023 train ik drie tot vier keer per week. Wat begon
                als iets ernaast is een vaste gewoonte geworden. Ik plan het in,
                ik ga ook op de dagen dat ik er geen zin in heb, en juist daar
                zit voor mij de winst.
              </p>
              <p className="proza">
                Daarom spreekt werken in een sportschool me aan. Het is een
                omgeving die ik ken en waar veel verschillende mensen over de
                vloer komen. Ik weet nog goed hoe het is om er als beginner
                binnen te lopen, en ik help anderen graag op weg.
              </p>
            </div>

            <div className="stats">
              {sportStats.map((s) => (
                <div className="stat" key={s.num}>
                  <p className="statNum">{s.num}</p>
                  <p className="statLabel">{s.label}</p>
                </div>
              ))}
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

        {/* ---------------- Wat ik meebreng ---------------- */}
        <section className="section" id="meebrengen">
          <div className="reveal">
            <p className="label">Wat ik meebreng</p>
            <h2 className="h2">Waar je op kunt rekenen</h2>
          </div>

          <div className="reveal">
            {kwaliteiten.map((k) => (
              <div className="qual" key={k.key}>
                <p className="qualKey">{k.key}</p>
                <p className="qualBody">{k.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Naar de development pagina ---------------- */}
        <section className="section">
          <div className="teaserBox reveal">
            <p className="label">Ook goed om te weten</p>
            <h2 className="h2" style={{ marginBottom: 18 }}>
              Ik bouw ook websites
            </h2>
            <p className="proza teaserText">
              Naast school en de sportschool maak ik websites en webshops. Een
              paar daarvan staan echt online. Wil je dat zien, dan staat het op
              een eigen pagina.
            </p>
            <div className="heroBtns">
              <Link className="btn btnSolid" href="/development">
                Bekijk mijn projecten
              </Link>
            </div>
          </div>
        </section>

        <SiteEnd />
      </div>
    </>
  );
}
