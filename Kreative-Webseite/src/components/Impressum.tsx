export function Impressum({ onNavigateToHome }: { onNavigateToHome: () => void }) {
  return (
    <div className="bg-gradient-to-b from-white to-[var(--color-light-green)] min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <button
          onClick={onNavigateToHome}
          className="mb-8 text-[var(--color-medium-green)] hover:text-[var(--color-primary-green)] transition-colors flex items-center gap-2"
        >
          <span>←</span> Zurück zur Startseite
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h1 className="text-[var(--color-primary-green)] mb-8">Impressum</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-[var(--color-medium-green)] mb-3">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-1 text-gray-700">
                <p>[Name des Betreibers]</p>
                <p>[Straße und Hausnummer]</p>
                <p>[PLZ und Ort]</p>
              </div>
            </section>

            <section>
              <h3 className="text-[var(--color-medium-green)] mb-3">Kontakt</h3>
              <div className="space-y-1 text-gray-700">
                <p>Telefon: [Telefonnummer]</p>
                <p>E-Mail: [E-Mail-Adresse]</p>
              </div>
            </section>

            <section>
              <h3 className="text-[var(--color-medium-green)] mb-3">Umsatzsteuer-ID</h3>
              <p className="text-gray-700">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [USt-IdNr. falls vorhanden, sonst entfernen]
              </p>
            </section>

            <section>
              <h3 className="text-[var(--color-medium-green)] mb-3">Hinweis zur Webseite</h3>
              <p className="text-gray-700">
                einzigArtig ist ein Hobby-Projekt. Alle Keramik- und Töpferwaren werden hobbymäßig 
                gefertigt. Die Objekte können nach Vereinbarung in Tecklenburg im Hobby-Schränkchen 
                besichtigt und abgeholt werden.
              </p>
            </section>

            <section>
              <h3 className="text-[var(--color-medium-green)] mb-3">EU-Streitschlichtung</h3>
              <p className="text-gray-700">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--color-medium-green)] hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h3 className="text-[var(--color-medium-green)] mb-3">
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </h3>
              <p className="text-gray-700">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h3 className="text-[var(--color-medium-green)] mb-3">Haftung für Inhalte</h3>
              <p className="text-gray-700 text-sm">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h3 className="text-[var(--color-medium-green)] mb-3">Haftung für Links</h3>
              <p className="text-gray-700 text-sm">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h3 className="text-[var(--color-medium-green)] mb-3">Urheberrecht</h3>
              <p className="text-gray-700 text-sm">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
