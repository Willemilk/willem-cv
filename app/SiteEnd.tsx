import { EMAIL, GITHUB, TELEFOON } from "./content";

type Gegeven = { key: string; waarde: string; href?: string; extern?: boolean; download?: boolean };

const gegevens: Gegeven[] = [
  { key: "Naam", waarde: "Willem de Wit" },
  { key: "Woonplaats", waarde: "Eindhoven" },
  { key: "Telefoon", waarde: TELEFOON },
  { key: "E-mail", waarde: EMAIL, href: `mailto:${EMAIL}` },
  { key: "GitHub", waarde: "github.com/Willemilk", href: GITHUB, extern: true },
  { key: "Rijbewijs", waarde: "Ja" },
  { key: "Talen", waarde: "Nederlands (vloeiend), Engels (vloeiend)" },
  { key: "Cv", waarde: "Download cv", href: "/cv-willem-de-wit.pdf", download: true },
];

export default function SiteEnd() {
  return (
    <section className="contact" id="contact">
      <div className="reveal">
        <p className="label">Gegevens</p>

        <div className="dataLijst">
          {gegevens.map((g) => (
            <div className="dataRij" key={g.key}>
              <p className="dataKey">{g.key}</p>
              <p className="dataVal">
                {g.href ? (
                  <a
                    className="tekstLink"
                    href={g.href}
                    {...(g.extern ? { target: "_blank", rel: "noreferrer" } : {})}
                    {...(g.download ? { download: true } : {})}
                  >
                    {g.waarde}
                  </a>
                ) : (
                  g.waarde
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
