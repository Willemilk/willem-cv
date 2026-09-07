import { EMAIL, GITHUB, TELEFOON } from "./content";

const gegevens = [
  { key: "Naam", waarde: "Willem de Wit" },
  { key: "Woonplaats", waarde: "Eindhoven" },
  { key: "Telefoon", waarde: TELEFOON },
];

export default function SiteEnd() {
  return (
    <section className="contact" id="contact">
      <div className="reveal">
        <p className="label">Contact</p>

        <div className="dataLijst">
          {gegevens.map((g) => (
            <div className="dataRij" key={g.key}>
              <p className="dataKey">{g.key}</p>
              <p className="dataVal">{g.waarde}</p>
            </div>
          ))}

          <div className="dataRij">
            <p className="dataKey">E-mail</p>
            <p className="dataVal">
              <a className="tekstLink" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
          </div>

          <div className="dataRij">
            <p className="dataKey">GitHub</p>
            <p className="dataVal">
              <a
                className="tekstLink"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                github.com/Willemilk
              </a>
            </p>
          </div>

          <div className="dataRij">
            <p className="dataKey">Cv</p>
            <p className="dataVal">
              <a className="tekstLink" href="/cv-willem-de-wit.pdf" download>
                Download cv
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
