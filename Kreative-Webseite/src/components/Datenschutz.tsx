export function Datenschutz({ onNavigateToHome }: { onNavigateToHome: () => void }) {
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
          <h1 className="text-[var(--color-primary-green)] mb-8">Datenschutzerklärung</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-[var(--color-medium-green)] mb-3">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-[var(--color-medium-green)] mb-2 mt-4">Allgemeine Hinweise</h3>
              <p className="text-gray-700 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-[var(--color-medium-green)] mb-2">Datenerfassung auf dieser Website</h3>
              <p className="text-gray-700 mb-2">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>

              <p className="text-gray-700 mb-2">
                <strong>Wie erfassen wir Ihre Daten?</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann 
                es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-gray-700 mb-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
                durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, 
                Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>

              <p className="text-gray-700 mb-2">
                <strong>Wofür nutzen wir Ihre Daten?</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <p className="text-gray-700 mb-2">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              </p>
              <p className="text-gray-700">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
                Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, 
                die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-[var(--color-medium-green)] mb-3">2. Hosting</h2>
              <p className="text-gray-700 mb-2">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website 
                erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Hosting-Anbieter:</strong> [Name und Adresse des Hosting-Anbieters]
              </p>
              <p className="text-gray-700">
                Das Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen 
                und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, 
                schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen 
                Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-[var(--color-medium-green)] mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-[var(--color-medium-green)] mb-2 mt-4">Datenschutz</h3>
              <p className="text-gray-700 mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-[var(--color-medium-green)] mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-gray-700 mb-2">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="text-gray-700 mb-4 space-y-1">
                <p>[Name]</p>
                <p>[Straße und Hausnummer]</p>
                <p>[PLZ und Ort]</p>
                <p>Telefon: [Telefonnummer]</p>
                <p>E-Mail: [E-Mail-Adresse]</p>
              </div>
              <p className="text-gray-700">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder 
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen 
                Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </section>

            <section>
              <h2 className="text-[var(--color-medium-green)] mb-3">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-[var(--color-medium-green)] mb-2 mt-4">Anfrage per E-Mail oder Kontaktformular</h3>
              <p className="text-gray-700 mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="text-gray-700 mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die 
                Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an 
                uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className="text-gray-700">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns 
                zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck 
                für die Datenspeicherung entfällt.
              </p>
            </section>

            <section>
              <h2 className="text-[var(--color-medium-green)] mb-3">5. Ihre Rechte</h2>
              
              <h3 className="text-[var(--color-medium-green)] mb-2 mt-4">Auskunftsrecht</h3>
              <p className="text-gray-700 mb-4">
                Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen 
                Daten zu erhalten.
              </p>

              <h3 className="text-[var(--color-medium-green)] mb-2">Recht auf Berichtigung, Löschung und Einschränkung</h3>
              <p className="text-gray-700 mb-4">
                Sie haben das Recht, jederzeit die Berichtigung, Löschung oder Einschränkung der 
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>

              <h3 className="text-[var(--color-medium-green)] mb-2">Widerspruchsrecht</h3>
              <p className="text-gray-700 mb-4">
                Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.
              </p>

              <h3 className="text-[var(--color-medium-green)] mb-2">Beschwerderecht</h3>
              <p className="text-gray-700">
                Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der 
                Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
              </p>
            </section>

            <section className="mt-8 p-4 bg-[var(--color-light-green)] rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Hinweis:</strong> Diese Datenschutzerklärung ist ein Muster und muss an die 
                spezifischen Gegebenheiten Ihrer Website angepasst werden. Bei Unsicherheiten konsultieren 
                Sie bitte einen Rechtsanwalt oder Datenschutzbeauftragten.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
