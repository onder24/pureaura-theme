/**
 * Inhalte fuer die im Theme verlinkten Pages und Collections.
 *
 * Brand Voice: duzen, warm, poetisch, ehrlich. Kein "Jetzt kaufen",
 * kein "Angebot", kein "guenstig", keine Ausrufezeichen-Ketten.
 *
 * ACHTUNG — die Rechtstexte (impressum, datenschutz, agb, widerrufsrecht,
 * cookies) sind Gerueste. Jede Stelle in [[doppelten Klammern]] muss vor
 * dem Livegang ersetzt und das Ganze anwaltlich geprueft werden.
 */

export const COLLECTIONS = [
  {
    handle: 'signature',
    title: 'Signature-Düfte',
    description:
      '<p>Die Sets, mit denen alles anfängt. Du wählst neun Öle aus Kopf-, Herz- und Basisnoten — und mischst dir daraus zuhause deinen eigenen Duft.</p>'
  },
  {
    handle: 'date-night-set',
    title: 'Date-Night-Set',
    description:
      '<p>Zwei Flakons, ein Abend. Ihr mischt nebeneinander, jeder seinen eigenen Duft — und riecht am Ende, was der andere an sich mag.</p>'
  }
];

export const PAGES = [
  {
    handle: 'ueber-uns',
    title: 'Über uns',
    body: `
<p>Atramenti ist eine Nischenparfümerie für zuhause. Wir verkaufen kein fertiges Parfüm. Wir verkaufen den Abend, an dem du deins machst.</p>

<h2>Woher das kommt</h2>
<p>Es gibt diese Workshops, in denen du für 150 Euro pro Person in ein Atelier gehst und unter Anleitung deinen eigenen Duft mischst. Schöne Sache — nur dass du dafür einen Termin brauchst, eine Anfahrt und einen Raum voller Fremder.</p>
<p>Wir haben den Workshop in eine Box gepackt und schicken ihn dir nach Hause. Dein Tisch, deine Musik, deine Leute.</p>

<h2>Was drin steckt</h2>
<p>Du wählst online neun Öle aus einem kuratierten Sortiment — Kopfnoten, Herznoten, Basisnoten. Die Box kommt mit allen Ölen vorverdünnt, einem 50-ml-Flakon, Pipetten, Messbecher, Alkohol, einer Anleitungskarte und einer Recipe Card.</p>
<p>Auf der Recipe Card notierst du deine Formel. Wenn der Flakon leer ist, mischst du sie einfach nach.</p>

<h2>Wer dahintersteckt</h2>
<p>Atramenti kommt aus Duisburg. Hinter der Marke steht eine Person, kein Konzern — was bedeutet, dass hier niemand sitzt, der dir einen Duft andreht, den er selbst nicht mag. Aus 76 getesteten Ölen haben es 28 ins Sortiment geschafft.</p>

<h2>Wohin das geht</h2>
<p>Atramenti ist der Anfang von etwas Größerem: Erlebnisse, für die man sonst das Haus verlassen müsste, gebracht in die eigenen vier Wände.</p>
`
  },
  {
    handle: 'about',
    title: 'About Atramenti',
    body: `
<p>Atramenti is a niche perfumery for your own home. We don't sell finished perfume. We sell the evening you spend making yours.</p>

<h2>The idea</h2>
<p>Perfume workshops exist. They cost around 150 euros per person, they happen in a studio across town, and you share the room with strangers. The experience is lovely. Everything around it is not.</p>
<p>So we put the workshop in a box and send it to you. Your table, your music, your people.</p>

<h2>How it works</h2>
<p>You pick nine oils online — top notes, heart notes, base notes — from a curated range. The box arrives with every oil pre-diluted, a 50 ml flacon, pipettes, a measuring beaker, alcohol, an instruction card and a recipe card.</p>
<p>You write your formula on the recipe card. When the flacon runs empty, you simply mix it again.</p>

<h2>Behind it</h2>
<p>Atramenti is based in Duisburg, Germany. There's a person behind the brand, not a corporation — which means nobody here is selling you a scent they wouldn't wear. Of 76 oils tested, 28 made it into the range.</p>

<p><a href="/pages/ueber-uns">Diese Seite auf Deutsch lesen</a></p>
`
  },
  {
    handle: 'konfigurator',
    title: 'Der Konfigurator',
    body: `
<p>Neun Öle, deine Reihenfolge, deine Intensität. So entsteht ein Duft, den sonst niemand trägt.</p>

<h2>Neun Öle wählen</h2>
<p>Du stellst dir dein Set aus Kopf-, Herz- und Basisnoten zusammen. Jedes Öl darfst du bis zu dreimal wählen — dreimal Vanille geht also, viermal nicht. So bleibt Raum für einen Schwerpunkt, ohne dass der Duft eindimensional wird.</p>

<h3>Kopfnoten</h3>
<p>Das, was du zuerst riechst, und das, was zuerst verfliegt. Zitrisch (Bergamotte, Zitrone, Grapefruit, Mandarine, Orange), frisch (Grüner Tee, Gurke, Galbanum), krautig (Basilikum, Rosmarin, Thymian, Ingwer) oder fruchtig (Apfel, Cassis, Himbeere, Kirsche, Pfirsich, Mango).</p>

<h3>Herznoten</h3>
<p>Der Charakter. Blumig (Rose, Jasmin, Gardenie, Geranie, Neroli, Ylang, Tuberose, Iris), würzig (Kardamom, Zimt, Nelke, Muskat, Schwarzer Pfeffer, Safran), grün-aromatisch (Lavendel, Heu, Eichenmoos) oder gourmand (Schokolade, Kaffee, Honig, Kokos).</p>

<h3>Basisnoten</h3>
<p>Was bleibt. Holzig (Zeder, Sandelholz, Vetiver, Weiße Eiche), orientalisch (Oud, Patchouli, Benzoe, Vanille), Moschus (Cashmere, Weißer Moschus, Powdery), balsamisch (Cognac, Tabak), Leder oder rauchig.</p>

<h2>Intensität bestimmen</h2>
<p>Wie stark dein Duft wird, entscheidest du über die Zahl der Pipetten:</p>
<ul>
<li><strong>Büro</strong> — 12 bis 15 % Duftölanteil, etwa 43 bis 54 Pipetten. Nah an der Haut.</li>
<li><strong>Alltag</strong> — 15 bis 18 %, etwa 54 bis 65 Pipetten. Der mittlere Weg.</li>
<li><strong>Ausgang</strong> — 25 %, 90 Pipetten. Alle Öle leer, volle Präsenz.</li>
</ul>

<h2>Mischen</h2>
<p>Kopfnote zuerst, dann Herz, zuletzt Basis — die Reihenfolge steht auf jeder Flasche (K, H, B). Alles in den Flakon, mit Alkohol auf 50 ml auffüllen, verschließen, 30 Sekunden schütteln. Dann 24 bis 48 Stunden ruhen lassen: In dieser Zeit verbinden sich die Noten, und aus neun Ölen wird ein Duft.</p>

<p><a href="/collections/signature">Zu den Sets</a></p>
`
  },
  {
    handle: 'workshops',
    title: 'Workshops',
    body: `
<p>Der Parfüm-Workshop, den es sonst nur im Atelier gibt — bei dir zuhause, ohne Termin.</p>

<h2>Wie ein Abend abläuft</h2>
<p>Ihr packt die Box aus. Neun Fläschchen, ein Flakon, Pipetten, Messbecher, Alkohol, Anleitungskarte, Recipe Card. Ihr entscheidet, wie kräftig euer Duft werden soll, und fangt an zu pipettieren — Kopfnote, Herznote, Basisnote, in dieser Reihenfolge.</p>
<p>Ihr zählt mit, füllt auf, schüttelt. Dann kommt der schwierigste Teil: 24 bis 48 Stunden warten. Am nächsten Abend riecht ihr etwas, das es vorher nicht gab.</p>

<p>Rechnet mit ein bis zwei Stunden. Es gibt nichts zu lernen und nichts falsch zu machen.</p>

<h2>Welches Set zu wem passt</h2>
<ul>
<li><strong>Solo — 69 €.</strong> Ein Flakon, ein Abend, du.</li>
<li><strong>Date Night — 99 €.</strong> Zwei Flakons. Ihr mischt nebeneinander und riecht am Ende, was der andere an sich mag.</li>
<li><strong>Friends Night — 149 €.</strong> Drei Flakons.</li>
<li><strong>Group Experience — 189 €.</strong> Vier Flakons. Günstiger als zwei Date-Night-Sets.</li>
</ul>

<h2>Als Geschenk</h2>
<p>Ein Set ist ein Geschenk, das man nicht allein auspackt. Wenn du willst, legen wir eine handgeschriebene Karte dazu — schreib uns einfach nach der Bestellung.</p>

<p><a href="/pages/kurs-buchen">Termin für einen begleiteten Workshop anfragen</a></p>
`
  },
  {
    handle: 'kurs-buchen',
    title: 'Kurs buchen',
    body: `
<p>Die Sets funktionieren ohne uns — die Anleitung reicht. Manchmal ist es aber schöner, wenn jemand dabei ist, der die Öle kennt.</p>

<h2>Begleiteter Workshop</h2>
<p>Wir führen live durch den Abend: von der Auswahl der Noten über die Intensität bis zum fertigen Flakon. Du brauchst nur dein Set und einen Tisch.</p>
<ul>
<li><strong>Online</strong> — für einzelne Personen oder Paare, etwa 90 Minuten.</li>
<li><strong>Vor Ort</strong> — für Gruppen ab sechs Personen, im Raum Duisburg und Umgebung. Für Firmenfeiern siehe <a href="/pages/firmenevents">Firmenevents</a>, für Hochzeiten siehe <a href="/pages/hochzeit">Hochzeit</a>.</li>
</ul>

<h2>Anfragen</h2>
<p>Schreib uns, mit wie vielen Personen ihr seid, welcher Zeitraum euch passt und ob online oder vor Ort. Wir melden uns mit einem Vorschlag und dem Preis zurück.</p>

<p><a href="/pages/contact">Zum Kontaktformular</a></p>
`
  },
  {
    handle: 'hochzeit',
    title: 'Hochzeit',
    body: `
<p>Ein Duft, den es vorher nicht gab und den danach zwei Menschen tragen. Das ist eine ziemlich gute Erinnerung an einen Tag.</p>

<h2>Euer Duft zu zweit</h2>
<p>Ihr mischt vor der Hochzeit euren eigenen Duft — jeder seinen, oder einen gemeinsamen. Die Formel steht auf eurer Recipe Card und lässt sich jedes Jahr nachmischen. Zum Jahrestag riecht ihr wieder genau danach.</p>

<h2>Als Geschenk für die Gäste</h2>
<p>Für Junggesellinnenabschiede und kleine Runden vor der Feier: Jede Person mischt ihren Duft, alle nehmen ihren Flakon mit nach Hause. Statt eines Gastgeschenks, das in der Schublade landet, etwas, das aufgebraucht wird.</p>

<h2>Als Programmpunkt</h2>
<p>Für größere Gruppen kommen wir vor Ort und führen durch den Abend. Ab sechs Personen, im Raum Duisburg und Umgebung; für weitere Wege sprecht uns an.</p>

<h2>Vorlauf</h2>
<p>Plant etwa vier Wochen ein — für die Abstimmung, den Versand und die 24 bis 48 Stunden, die der fertige Duft ruhen muss.</p>

<p><a href="/pages/contact">Anfrage stellen</a></p>
`
  },
  {
    handle: 'firmenevents',
    title: 'Firmenevents',
    body: `
<p>Teamabende haben ein Problem: Entweder sitzt man beim Essen und redet über Arbeit, oder man macht etwas, das sich nach Pflicht anfühlt.</p>
<p>Ein Duft-Workshop löst das, weil alle mit den Händen beschäftigt sind und niemand gut oder schlecht darin sein kann.</p>

<h2>Wie es abläuft</h2>
<p>Jede Person bekommt ein Set und mischt ihren eigenen Duft. Wir führen durch Kopf-, Herz- und Basisnoten, erklären die Intensitätsskala und begleiten das Pipettieren. Rechnet mit ein bis zwei Stunden.</p>
<p>Am Ende nimmt jede Person einen 50-ml-Flakon mit — und die Formel, um ihn nachzumischen.</p>

<h2>Formate</h2>
<ul>
<li><strong>Vor Ort</strong> — in euren Räumen, ab sechs Personen. Raum Duisburg und Umgebung; weitere Wege auf Anfrage.</li>
<li><strong>Remote</strong> — wir schicken die Sets an die Privatadressen und führen per Video durch den Abend. Funktioniert auch für verteilte Teams.</li>
<li><strong>Nur die Boxen</strong> — ihr macht es selbst, die Anleitung reicht.</li>
</ul>

<h2>Anfragen</h2>
<p>Schreib uns Teamgröße, Wunschtermin und Format. Wir melden uns mit Vorschlag und Angebot zurück. Für Rechnungen mit ausgewiesener Umsatzsteuer nenne uns bitte die Rechnungsanschrift.</p>

<p><a href="/pages/contact">Zum Kontaktformular</a></p>
`
  },
  {
    handle: 'nachhaltigkeit',
    title: 'Nachhaltigkeit',
    body: `
<p>Wir halten wenig von Nachhaltigkeitsseiten, die gut klingen und nichts sagen. Deshalb hier, was stimmt — und was noch nicht.</p>

<h2>Was der Ansatz schon mitbringt</h2>
<p>Ein Atramenti-Flakon ist nachfüllbar. Deine Formel steht auf der Recipe Card, die Öle kannst du einzeln nachbestellen. Statt einen neuen Flakon zu kaufen, mischst du den alten wieder voll — das ist der Unterschied zu einem Parfüm, dessen Flakon nach dem letzten Sprüher Müll ist.</p>
<p>Du mischst außerdem genau den Duft, den du willst. Ungetragene Parfüms sind eine erstaunlich große Verschwendung, und dagegen hilft vor allem, dass man das Ergebnis vorher selbst bestimmt.</p>

<h2>Verpackung</h2>
<p>Die Box ist so gebaut, dass sie ohne Plastikfüllung auskommt. Glas und Karton lassen sich trennen und regulär recyceln.</p>

<h2>Was wir noch nicht können</h2>
<p>Wir sind ein kleines Unternehmen am Anfang. Es gibt keine CO₂-Bilanz, keine Zertifizierung und keinen klimaneutralen Versand — sobald das mehr wäre als ein gekaufter Aufkleber, sagen wir hier Bescheid.</p>

<p>Wenn dir etwas auffällt, das besser ginge: <a href="/pages/contact">Schreib uns</a>. Das ist ernst gemeint.</p>
`
  },
  {
    handle: 'faq',
    title: 'Häufige Fragen',
    body: `
<h2>Zum Mischen</h2>

<h3>Brauche ich Vorkenntnisse?</h3>
<p>Nein. Die Anleitungskarte führt dich in sechs Schritten durch den Abend. Du kannst nichts kaputt machen — im schlimmsten Fall gefällt dir das Ergebnis nicht, und dann mischst du beim nächsten Mal anders.</p>

<h3>Wie lange dauert es?</h3>
<p>Ein bis zwei Stunden für das Mischen. Danach muss der Duft 24 bis 48 Stunden ruhen, damit sich die Noten verbinden. Vorher riecht er noch nicht nach sich selbst.</p>

<h3>Warum die Reihenfolge Kopf, Herz, Basis?</h3>
<p>Weil sich die Noten so sauber schichten. Auf jeder Flasche steht K, H oder B — du arbeitest die Buchstaben einfach der Reihe nach ab.</p>

<h3>Wie stark wird mein Duft?</h3>
<p>Das entscheidest du über die Zahl der Pipetten. 43 bis 54 ergeben einen zurückhaltenden Duft fürs Büro, 54 bis 65 einen für den Alltag, 90 einen für den Abend. Mehr Details im <a href="/pages/konfigurator">Konfigurator</a>.</p>

<h3>Was, wenn mir das Ergebnis nicht gefällt?</h3>
<p>Dann kannst du nachjustieren, solange noch Öl da ist — ein paar Pipetten mehr von der Basisnote verändern viel. Geöffnete Öle und gemischte Flakons können wir aus hygienischen Gründen allerdings nicht zurücknehmen, siehe <a href="/pages/rueckgabe">Rückgabe</a>.</p>

<h2>Zum Duft</h2>

<h3>Wie lange hält er?</h3>
<p>Das hängt von deiner Mischung ab. Basisnoten wie Sandelholz, Oud oder Vanille halten am längsten, Zitrusnoten verfliegen zuerst. Wer lange Haltbarkeit will, gewichtet die Basis stärker.</p>

<h3>Wie lange ist er haltbar?</h3>
<p>Ein fertig gemischter Flakon hält kühl und dunkel gelagert etwa zwei Jahre. Direkte Sonne ist der größte Feind.</p>

<h3>Kann ich meine Formel nachbestellen?</h3>
<p>Ja. Notier sie auf der Recipe Card, dann mischst du sie jederzeit nach.</p>

<h2>Zu Verträglichkeit und Sicherheit</h2>

<h3>Sind die Öle hautverträglich?</h3>
<p>Die Öle sind vorverdünnt und für die Anwendung auf der Haut vorgesehen. Wie jedes Parfüm können sie bei empfindlicher Haut reizen. Teste den fertigen Duft zuerst in der Armbeuge und warte einen Tag ab. Die vollständige Inhaltsstoffliste findest du über den QR-Code am Flakon.</p>

<h3>Ist das etwas für Kinder?</h3>
<p>Nein. Die Sets enthalten Alkohol und sind nichts für Kinderhände. Bewahre sie außerhalb ihrer Reichweite auf.</p>

<h3>Sind die Öle entzündlich?</h3>
<p>Ja, sie enthalten Alkohol. Nicht in der Nähe offener Flammen mischen, und die Fläschchen nicht in der Sonne stehen lassen.</p>

<h2>Zu Bestellung und Versand</h2>

<h3>Wie lange dauert die Lieferung?</h3>
<p>Siehe <a href="/pages/versand">Versand</a>.</p>

<h3>Liefert ihr auch nach Österreich und in die Schweiz?</h3>
<p>Ja. Die Konditionen stehen auf der <a href="/pages/versand">Versandseite</a>.</p>

<p>Deine Frage war nicht dabei? <a href="/pages/contact">Schreib uns</a>.</p>
`
  },
  {
    handle: 'contact',
    title: 'Kontakt',
    body: `
<p>Schreib uns — zu deiner Bestellung, zu einer Formel, die nicht so riecht wie gedacht, oder zu einem Workshop für deine Gruppe.</p>

<h2>Per E-Mail</h2>
<p><a href="mailto:[[E-Mail-Adresse eintragen]]">[[E-Mail-Adresse eintragen]]</a></p>
<p>Wir antworten in der Regel innerhalb von zwei Werktagen. Wenn es um eine Bestellung geht, halte bitte deine Bestellnummer bereit.</p>

<h2>Postanschrift</h2>
<p>
[[Firmierung]]<br>
[[Straße und Hausnummer]]<br>
[[PLZ Ort]]<br>
Deutschland
</p>

<h2>Anfragen für Gruppen</h2>
<p>Für <a href="/pages/firmenevents">Firmenevents</a>, <a href="/pages/hochzeit">Hochzeiten</a> und <a href="/pages/kurs-buchen">begleitete Workshops</a> schreib uns bitte Gruppengröße, Wunschtermin und ob online oder vor Ort.</p>

<h2>Widerruf</h2>
<p>Für einen Widerruf genügt eine formlose Nachricht an die obige Adresse. Die Einzelheiten stehen in der <a href="/pages/widerrufsrecht">Widerrufsbelehrung</a>.</p>
`
  },
  {
    handle: 'versand',
    title: 'Versand',
    body: `
<h2>Bearbeitung</h2>
<p>Wir packen jede Box von Hand. Bestellungen, die bis [[Uhrzeit, z. B. 14:00]] Uhr eingehen, gehen in der Regel am selben Werktag raus, alle anderen am nächsten.</p>

<h2>Laufzeiten und Kosten</h2>
<table>
<thead>
<tr><th>Ziel</th><th>Laufzeit</th><th>Kosten</th></tr>
</thead>
<tbody>
<tr><td>Deutschland</td><td>[[1–3]] Werktage</td><td>[[Betrag]] €</td></tr>
<tr><td>Österreich</td><td>[[2–5]] Werktage</td><td>[[Betrag]] €</td></tr>
<tr><td>Schweiz</td><td>[[3–7]] Werktage</td><td>[[Betrag]] €</td></tr>
</tbody>
</table>
<p>Ab einem Bestellwert von [[Betrag]] € liefern wir innerhalb Deutschlands versandkostenfrei.</p>
<p>Versandpartner ist [[DHL / Versanddienstleister]]. Sobald dein Paket unterwegs ist, bekommst du eine E-Mail mit Sendungsnummer.</p>

<h2>Schweiz: Zoll und Einfuhr</h2>
<p>Bei Lieferungen in die Schweiz können Einfuhrabgaben und Zollgebühren anfallen. Diese trägt die empfangende Person und sie sind nicht im Preis enthalten.</p>

<h2>Warum die Sets besonders verpackt sind</h2>
<p>Die Sets enthalten Alkohol und werden als entsprechend gekennzeichnete Sendung verschickt. Das ist der Grund, warum wir keine Expresszustellung in jedes Land anbieten können.</p>

<h2>Wenn etwas beschädigt ankommt</h2>
<p>Melde dich mit einem Foto der Sendung, bevor du etwas entsorgst. Wir schicken Ersatz. <a href="/pages/contact">Zum Kontakt</a></p>
`
  },
  {
    handle: 'rueckgabe',
    title: 'Rückgabe',
    body: `
<p>Wenn ein Set nicht zu dir passt, nehmen wir es zurück. Ein paar Einschränkungen gibt es, und die haben mit Hygiene zu tun, nicht mit Kulanz.</p>

<h2>Was zurückgehen kann</h2>
<p>Ungeöffnete Sets innerhalb von 14 Tagen nach Erhalt. Die Versiegelung der Ölfläschchen muss unversehrt sein.</p>

<h2>Was nicht zurückgehen kann</h2>
<p>Geöffnete Ölfläschchen und gemischte Flakons. Sobald die Versiegelung gebrochen ist, handelt es sich um ein Kosmetikprodukt, dessen Rücknahme aus Gründen des Gesundheitsschutzes und der Hygiene ausgeschlossen ist (§ 312g Abs. 2 Nr. 3 BGB).</p>
<p>Das gilt auch für individuell konfigurierte Sets, sobald sie für dich zusammengestellt wurden.</p>

<h2>Wie eine Rückgabe abläuft</h2>
<ol>
<li>Schreib uns mit deiner Bestellnummer an [[E-Mail-Adresse eintragen]].</li>
<li>Du bekommst von uns eine Rücksendeadresse [[und ein Rücksendelabel / bzw. Hinweis, wer die Kosten trägt]].</li>
<li>Schick das Set in der Originalverpackung zurück.</li>
<li>Sobald es bei uns ist, erstatten wir den Betrag innerhalb von 14 Tagen über das ursprüngliche Zahlungsmittel.</li>
</ol>

<h2>Beschädigte Ware</h2>
<p>Ist etwas auf dem Transportweg kaputtgegangen, gelten diese Einschränkungen nicht. Melde dich mit einem Foto, wir schicken Ersatz.</p>

<p>Dein gesetzliches Widerrufsrecht bleibt davon unberührt — die Einzelheiten stehen in der <a href="/pages/widerrufsrecht">Widerrufsbelehrung</a>.</p>
`
  },
  {
    handle: 'impressum',
    title: 'Impressum',
    body: `
<p><strong>[[GERÜST — vor dem Livegang vollständig ausfüllen und prüfen lassen.]]</strong></p>

<h2>Angaben gemäß § 5 DDG</h2>
<p>
[[Firmierung, z. B. Vor- und Nachname bzw. Unternehmensname]]<br>
[[Straße und Hausnummer]]<br>
[[PLZ Ort]]<br>
Deutschland
</p>

<h2>Vertreten durch</h2>
<p>[[Name der vertretungsberechtigten Person]]</p>

<h2>Kontakt</h2>
<p>
Telefon: [[Telefonnummer]]<br>
E-Mail: [[E-Mail-Adresse]]
</p>

<h2>Registereintrag</h2>
<p>[[Registergericht und Registernummer — entfällt bei Einzelunternehmen ohne Handelsregistereintrag]]</p>

<h2>Umsatzsteuer-Identifikationsnummer</h2>
<p>Gemäß § 27 a Umsatzsteuergesetz: [[USt-IdNr.]]</p>
<p>[[Falls Kleinunternehmerregelung nach § 19 UStG: hier stattdessen den entsprechenden Hinweis aufnehmen.]]</p>

<h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
<p>
[[Name]]<br>
[[Anschrift]]
</p>

<h2>Verantwortliche Person nach EU-Kosmetikverordnung</h2>
<p>
[[Name und Anschrift der verantwortlichen Person gemäß Art. 4 VO (EG) Nr. 1223/2009]]
</p>

<h2>EU-Streitschlichtung</h2>
<p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a></p>
<p>Wir sind [[nicht bereit / bereit]], an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
`
  },
  {
    handle: 'datenschutz',
    title: 'Datenschutzerklärung',
    body: `
<p><strong>[[GERÜST — dieser Text ersetzt keine Rechtsberatung. Vor dem Livegang von einer fachkundigen Person prüfen und an die tatsächlich eingesetzten Dienste anpassen.]]</strong></p>

<h2>1. Verantwortliche Stelle</h2>
<p>
[[Firmierung]]<br>
[[Anschrift]]<br>
E-Mail: [[E-Mail-Adresse]]
</p>
<p>[[Falls ein Datenschutzbeauftragter benannt ist, hier dessen Kontaktdaten ergänzen.]]</p>

<h2>2. Hosting und Shop-System</h2>
<p>Dieser Shop wird auf der Plattform von Shopify betrieben (Shopify International Limited, Victoria Buildings, 1–2 Haddington Road, Dublin 4, D04 XN32, Irland). Shopify verarbeitet in unserem Auftrag die Daten, die für den Betrieb des Shops erforderlich sind. Grundlage ist ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.</p>
<p>Beim Aufruf der Seiten werden Server-Logfiles erhoben (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp, Betriebssystem). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO — unser berechtigtes Interesse am sicheren und stabilen Betrieb.</p>

<h2>3. Bestellungen</h2>
<p>Für die Abwicklung deiner Bestellung verarbeiten wir Name, Rechnungs- und Lieferanschrift, E-Mail-Adresse sowie die Angaben zur Zahlung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO — die Erfüllung des Kaufvertrags.</p>
<p>Wir geben diese Daten weiter an [[Versanddienstleister]] zur Zustellung und an [[Zahlungsdienstleister]] zur Abwicklung der Zahlung. Handels- und steuerrechtliche Aufbewahrungsfristen von bis zu zehn Jahren bleiben unberührt.</p>

<h2>4. Kundenkonto</h2>
<p>[[Falls ein Kundenkonto angeboten wird: Beschreibung ergänzen. Sonst diesen Abschnitt streichen.]]</p>

<h2>5. Newsletter</h2>
<p>Wenn du dich für unseren Newsletter anmeldest, verarbeiten wir deine E-Mail-Adresse auf Grundlage deiner Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Die Anmeldung erfolgt im Double-Opt-in-Verfahren. Du kannst die Einwilligung jederzeit widerrufen, etwa über den Abmeldelink in jeder E-Mail.</p>
<p>Versanddienst: [[Name des Newsletter-Dienstes]].</p>

<h2>6. Cookies</h2>
<p>Welche Cookies wir einsetzen und wie du deine Auswahl änderst, steht in unseren <a href="/pages/cookies">Cookie-Hinweisen</a>.</p>

<h2>7. Weitere Dienste</h2>
<p>[[Hier alle tatsächlich eingesetzten Dienste ergänzen — z. B. Analyse-Tools, Werbe-Pixel, eingebettete Videos, Schriftarten von Drittanbietern — jeweils mit Zweck, Anbieter, Rechtsgrundlage und Übermittlung in Drittländer.]]</p>

<h2>8. Deine Rechte</h2>
<p>Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen Verarbeitungen, die auf berechtigtem Interesse beruhen (Art. 21 DSGVO). Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen.</p>
<p>Wende dich dafür an [[E-Mail-Adresse]].</p>

<h2>9. Beschwerderecht</h2>
<p>Du kannst dich bei einer Datenschutz-Aufsichtsbehörde beschweren. Zuständig ist die Behörde deines Wohnsitzes oder die für uns zuständige Stelle: [[zuständige Aufsichtsbehörde, für NRW: Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen]].</p>

<h2>10. Stand</h2>
<p>[[Datum der letzten Änderung]]</p>
`
  },
  {
    handle: 'agb',
    title: 'Allgemeine Geschäftsbedingungen',
    body: `
<p><strong>[[GERÜST — vor dem Livegang anwaltlich prüfen lassen. Fehlerhafte AGB sind abmahnfähig.]]</strong></p>

<h2>§ 1 Geltungsbereich</h2>
<p>Diese Bedingungen gelten für alle Bestellungen, die Verbraucherinnen und Verbraucher sowie Unternehmen über diesen Shop bei [[Firmierung]] aufgeben. Verbraucher ist, wer das Geschäft zu Zwecken abschließt, die überwiegend weder der gewerblichen noch der selbständigen beruflichen Tätigkeit zugerechnet werden können.</p>

<h2>§ 2 Vertragspartner und Vertragsschluss</h2>
<p>Der Kaufvertrag kommt zustande mit [[Firmierung, Anschrift]].</p>
<p>Die Darstellung der Produkte im Shop ist kein bindendes Angebot, sondern eine Aufforderung zur Bestellung. Mit dem Absenden der Bestellung gibst du ein verbindliches Angebot ab. Der Vertrag kommt zustande, sobald wir die Annahme bestätigen oder die Ware versenden. Eine automatische Eingangsbestätigung ist noch keine Annahme.</p>

<h2>§ 3 Preise und Versandkosten</h2>
<p>Alle Preise enthalten die gesetzliche Umsatzsteuer. [[Falls Kleinunternehmerregelung: stattdessen den Hinweis nach § 19 UStG aufnehmen.]] Zusätzlich fallen die auf der Seite <a href="/pages/versand">Versand</a> genannten Versandkosten an.</p>

<h2>§ 4 Zahlung</h2>
<p>Es stehen die im Bestellvorgang angezeigten Zahlungsarten zur Verfügung: [[Zahlungsarten auflisten]]. Die Zahlung ist mit Vertragsschluss fällig.</p>

<h2>§ 5 Lieferung</h2>
<p>Wir liefern nach [[Lieferländer]]. Die Lieferzeiten stehen auf der Seite <a href="/pages/versand">Versand</a>. Bei Lieferungen in Nicht-EU-Länder können zusätzliche Zölle und Einfuhrabgaben anfallen, die die empfangende Person trägt.</p>

<h2>§ 6 Eigentumsvorbehalt</h2>
<p>Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.</p>

<h2>§ 7 Widerrufsrecht</h2>
<p>Verbraucherinnen und Verbrauchern steht ein Widerrufsrecht zu. Die Einzelheiten stehen in der <a href="/pages/widerrufsrecht">Widerrufsbelehrung</a>.</p>
<p>Das Widerrufsrecht besteht nicht bei versiegelten Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn die Versiegelung nach der Lieferung entfernt wurde — das betrifft geöffnete Ölfläschchen und gemischte Flakons. Ebenso entfällt es bei Waren, die nach Kundenspezifikation angefertigt oder eindeutig auf persönliche Bedürfnisse zugeschnitten sind.</p>

<h2>§ 8 Gewährleistung</h2>
<p>Es gilt das gesetzliche Mängelhaftungsrecht.</p>

<h2>§ 9 Hinweise zur Anwendung</h2>
<p>Die Sets enthalten Alkohol und Duftöle. Sie sind nicht für Kinder bestimmt und von offenen Flammen fernzuhalten. Bei empfindlicher Haut empfehlen wir einen Verträglichkeitstest in der Armbeuge vor der ersten vollflächigen Anwendung. Die Inhaltsstoffe sind über den QR-Code am Flakon einsehbar.</p>

<h2>§ 10 Streitbeilegung</h2>
<p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a>. Wir sind [[nicht bereit / bereit]], an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

<h2>§ 11 Schlussbestimmungen</h2>
<p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Bei Verbrauchern gilt diese Rechtswahl nur, soweit dadurch der Schutz zwingender Vorschriften des Staates des gewöhnlichen Aufenthalts nicht entzogen wird.</p>

<p>Stand: [[Datum]]</p>
`
  },
  {
    handle: 'widerrufsrecht',
    title: 'Widerrufsbelehrung',
    body: `
<p><strong>[[GERÜST — die gesetzliche Muster-Widerrufsbelehrung muss exakt und vollständig übernommen werden. Vor dem Livegang prüfen lassen.]]</strong></p>

<h2>Widerrufsrecht</h2>
<p>Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
<p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem du oder eine von dir benannte dritte Person, die nicht der Beförderer ist, die letzte Ware in Besitz genommen hast bzw. hat.</p>
<p>Um dein Widerrufsrecht auszuüben, musst du uns</p>
<p>
[[Firmierung]]<br>
[[Anschrift]]<br>
Telefon: [[Telefonnummer]]<br>
E-Mail: [[E-Mail-Adresse]]
</p>
<p>mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Du kannst dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
<p>Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.</p>

<h2>Folgen des Widerrufs</h2>
<p>Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass du eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt hast), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf dieses Vertrags bei uns eingegangen ist.</p>
<p>Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte berechnet.</p>
<p>Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis du den Nachweis erbracht hast, dass du die Waren zurückgesandt hast, je nachdem, welches der frühere Zeitpunkt ist.</p>
<p>Du hast die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem du uns über den Widerruf dieses Vertrags unterrichtest, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn du die Waren vor Ablauf der Frist von vierzehn Tagen absendest.</p>
<p>Du trägst die unmittelbaren Kosten der Rücksendung der Waren. [[Alternativ: Wir tragen die Kosten der Rücksendung — dann diesen Satz entsprechend ändern.]]</p>
<p>Du musst für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</p>

<h2>Ausschluss des Widerrufsrechts</h2>
<p>Das Widerrufsrecht besteht nicht bei Verträgen</p>
<ul>
<li>zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde (§ 312g Abs. 2 Nr. 3 BGB) — dies betrifft geöffnete Ölfläschchen und gemischte Flakons;</li>
<li>zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch dich maßgeblich ist oder die eindeutig auf deine persönlichen Bedürfnisse zugeschnitten sind (§ 312g Abs. 2 Nr. 1 BGB).</li>
</ul>

<h2>Muster-Widerrufsformular</h2>
<p><em>Wenn du den Vertrag widerrufen willst, fülle dieses Formular aus und sende es zurück.</em></p>
<p>
An [[Firmierung, Anschrift, E-Mail-Adresse]]:<br><br>
Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)<br><br>
Bestellt am (*) / erhalten am (*)<br><br>
Name des/der Verbraucher(s)<br><br>
Anschrift des/der Verbraucher(s)<br><br>
Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)<br><br>
Datum<br><br>
(*) Unzutreffendes streichen.
</p>
`
  },
  {
    handle: 'cookies',
    title: 'Cookie-Hinweise',
    body: `
<p><strong>[[GERÜST — an die tatsächlich gesetzten Cookies anpassen. Die Liste unten muss mit dem übereinstimmen, was der Shop wirklich setzt.]]</strong></p>

<h2>Was Cookies hier tun</h2>
<p>Cookies sind kleine Textdateien, die dein Browser speichert. Manche brauchen wir, damit der Shop überhaupt funktioniert — etwa damit dein Warenkorb beim Weiterklicken nicht leer ist. Andere setzen wir nur, wenn du zustimmst.</p>

<h2>Notwendige Cookies</h2>
<p>Diese sind für den Betrieb erforderlich und werden ohne Einwilligung gesetzt (§ 25 Abs. 2 TDDDG). Shopify verwendet dafür unter anderem:</p>
<ul>
<li><code>_secure_session_id</code> — hält deine Sitzung, Laufzeit 24 Stunden</li>
<li><code>cart</code>, <code>cart_ts</code>, <code>cart_sig</code> — merken sich den Warenkorb, Laufzeit bis zu 2 Wochen</li>
<li><code>_shopify_m</code>, <code>_shopify_tm</code>, <code>_shopify_tw</code> — verwalten deine Datenschutzeinstellungen</li>
<li><code>keep_alive</code> — merkt sich deine Region, Laufzeit 2 Wochen</li>
</ul>

<h2>Analyse und Marketing</h2>
<p>[[Hier die tatsächlich eingesetzten Analyse- und Marketing-Cookies auflisten, jeweils mit Anbieter, Zweck und Laufzeit. Falls keine gesetzt werden, diesen Abschnitt durch einen entsprechenden Satz ersetzen.]]</p>
<p>Diese Cookies setzen wir nur mit deiner Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.</p>

<h2>Deine Auswahl ändern</h2>
<p>[[Falls ein Cookie-Banner im Einsatz ist: hier beschreiben, wie die Auswahl nachträglich geändert wird.]]</p>
<p>Unabhängig davon kannst du Cookies jederzeit in den Einstellungen deines Browsers löschen oder blockieren. Notwendige Cookies zu blockieren kann dazu führen, dass Teile des Shops nicht mehr funktionieren.</p>

<h2>Mehr dazu</h2>
<p>Wie wir mit personenbezogenen Daten umgehen, steht in der <a href="/pages/datenschutz">Datenschutzerklärung</a>.</p>

<p>Stand: [[Datum]]</p>
`
  }
];
