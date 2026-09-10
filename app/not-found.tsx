import type { Metadata } from "next";
import Link from "next/link";
import Nav from "./Nav";
import SiteEnd from "./SiteEnd";

export const metadata: Metadata = {
  title: "Pagina niet gevonden — Willem de Wit",
};

export default function NotFound() {
  return (
    <>
      <Nav />

      <div className="wrap">
        <header className="pageHead">
          <p className="label">404</p>
          <h1 className="pageTitle">Pagina niet gevonden</h1>
          <p className="pageIntro">Deze pagina bestaat niet.</p>
          <p className="backWrap">
            <Link className="backLink" href="/">
              ← Terug naar de startpagina
            </Link>
          </p>
        </header>

        <SiteEnd />
      </div>
    </>
  );
}
