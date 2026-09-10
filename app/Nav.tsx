import Link from "next/link";

type SectieLink = { href: string; label: string };

export default function Nav({
  huidig,
  secties = [],
}: {
  huidig?: "home" | "dev";
  secties?: SectieLink[];
}) {
  return (
    <nav className="nav">
      <Link className="navName" href="/">
        <span className="navNameLang">Willem de Wit</span>
        <span className="navNameKort">Willem</span>
      </Link>

      <div className="navLinks">
        {secties.map((s) => (
          <a key={s.href} href={s.href}>
            {s.label}
          </a>
        ))}
      </div>

      <div className="navRight">
        <div className="navPages">
          <Link
            className={huidig === "home" ? "navPage navPageOn" : "navPage"}
            href="/"
          >
            Start
          </Link>
          <Link
            className={huidig === "dev" ? "navPage navPageOn" : "navPage"}
            href="/development"
          >
            Development
          </Link>
        </div>
        <a className="navMail" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}
