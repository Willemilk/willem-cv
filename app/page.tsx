/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Nav from "./Nav";
import SiteEnd from "./SiteEnd";
import { kwaliteiten, traject } from "./content";

export default function Home() {
  return (
    <>
      <div className="progress" aria-hidden="true" />

      <Nav
        huidig="home"
        secties={[
          { href: "#over", label: "Over mij" },
          { href: "#traject", label: "Traject" },
          { href: "#meebrengen", label: "Wat ik meebreng" },
        ]}
      />

      <div className="wrap">
        {/* ---------------- Hero ---------------- */}
        <header className="hero">
          <div className="heroTop">
            <span>Eindhoven, NL</span>
            <span>Summa ICT</span>
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
                Derdejaars student Software Development
              </p>
              <p className="heroText">
                Naast school werkte ik bijna drie jaar als vakkenvuller bij
                Albert Heijn. Ik bouw ook websites en webshops.
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
              ik bijna drie jaar vakkenvuller geweest bij Albert Heijn.
            </p>
            <p className="proza">
              Sinds eind 2023 train ik drie tot vier keer per week in de
              sportschool.
            </p>
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
            <h2 className="h2">In het kort</h2>
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
              Naast school maak ik websites en webshops. Een paar daarvan staan
              online.
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
