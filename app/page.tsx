/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Nav from "./Nav";
import SiteEnd from "./SiteEnd";
import { traject } from "./content";

export default function Home() {
  return (
    <>
      <div className="progress" aria-hidden="true" />

      <Nav
        huidig="home"
        secties={[
          { href: "#over", label: "Over mij" },
          { href: "#traject", label: "Traject" },
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
                Vierdejaars student Software Development
              </p>
              <p className="heroText">Ik bouw websites en webshops.</p>
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

            <p className="proza">
              Ik ben Willem, ik woon in Eindhoven en ik zit in het vierde jaar
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

        {/* ---------------- Naar de development pagina ---------------- */}
        <section className="section">
          <p className="proza reveal">
            Wat ik bouw staat op de{" "}
            <Link className="tekstLink" href="/development">
              developmentpagina
            </Link>
            .
          </p>
        </section>

        <SiteEnd />
      </div>
    </>
  );
}
