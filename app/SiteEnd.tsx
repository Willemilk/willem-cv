import { EMAIL, GITHUB, TELEFOON } from "./content";

export default function SiteEnd() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="reveal">
          <p className="label">Contact</p>
          <a className="contactMail" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <div className="contactMeta">
            <span>{TELEFOON}</span>
            <a href={GITHUB} target="_blank" rel="noreferrer">
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
    </>
  );
}
