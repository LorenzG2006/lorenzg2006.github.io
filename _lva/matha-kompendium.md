---
title: "Mathematisches Arbeiten für Informatik und Wirtschaftsinformatik – Kompendium"
kuerzel: MathA
lva_nr: "104.631"
typ: VU
semester: 2026W
ects: 2
sws: 2.5
status: laufend
tiss: "https://tiss.tuwien.ac.at/course/courseDetails.xhtml?courseNr=104631&semester=2026W"
excerpt: "MathA ausführlich: Organisation, Lernquellen, Lernplan und eine Stoffzusammenfassung der zehn Themen mit vielen eigenen Beispielen."
math: true
unlisted: true       # Entwurf, parallel zur kurzen LVA-Seite
---

{% include toc title="Inhalt" %}

## Überblick

MathA ist das Handwerkszeug für alle anderen Mathe-LVAs: mathematische Texte genau lesen, Aussagen formalisieren, Definitionen auf Wohldefiniertheit prüfen, Gleichungen und Ungleichungen sauber umformen und Beweise lesbar aufschreiben. Eine Abschlussprüfung im klassischen Sinn gibt es nicht. Bewertet wird, ob ich regelmäßig in der Übung war und bei den Hausübungen genug Punkte gesammelt habe.

### Organisation (laut LVA-Information)

| **LVA** | VU 104.631, 2.5 SWS, 2 ECTS |
| **Aufbau** | 10 Themen bzw. Kapitel, zu jedem Thema eine Vorlesung und eine Übungseinheit |
| **Vorlesung** | stellt das Thema der Woche vor; Skriptum spätestens zu Vorlesungsbeginn in TUWEL; Livestream und Aufzeichnung über LectureTube |
| **Übung** | in Präsenz, Beispiele zum Thema der Woche werden gelöst; Vorbereitung (Vorlesung oder Skriptum) ist nötig |
| **Anwesenheit** | mindestens 8 von 10 Übungseinheiten; zwei Fehltermine ohne Begründung |
| **Hausübungen** | 3 Blätter in TUWEL, je ca. eine Woche Zeit, je maximal 10 Punkte; abgeschriebene Lösungen 0 Punkte |
| **Beurteilung** | „mit Erfolg teilgenommen“ oder „ohne Erfolg teilgenommen“ |
| **Termine** | Vorlesung laut Wochenplan Fr 9–10 Uhr; Übungstermine je nach Gruppe in TISS |

**Positiv heißt:** bei mindestens **8 von 10** Übungseinheiten anwesend **und** aus den Hausübungen mindestens **10 von 30** Punkten. Fehlt eine der beiden Bedingungen, gibt es „ohne Erfolg teilgenommen“.
{: .notice--info}

Weitere Regeln aus der LVA-Information:

- Wer eine Übung versäumt, arbeitet die Präsenzbeispiele selbst durch. Die Angaben kommen nach der Übungsstunde in TUWEL.
- Drei oder mehr Fehltermine gehen nur in Ausnahmefällen (z. B. Krankheit) mit schriftlicher Begründung, etwa einer ärztlichen Bestätigung. Der Stoff der dritten versäumten Einheit wird dann mündlich über eines der Präsenzbeispiele beim Übungsgruppenleiter nachgeholt, ebenso für jede weitere.
- Hausübungen dürfen als Scan handschriftlicher Lösungen abgegeben werden (leserlich!) oder mit LaTeX. Es gibt eine LaTeX-Vorlage der LVA.
- Fragen zum Stoff am besten in der Übungsgruppe oder im anonymen TUWEL-Forum, Organisatorisches per E-Mail an den LVA-Leiter.
- Ummelden in eine andere Übungsgruppe ist nach Ende der Anmeldefrist praktisch nicht möglich.

### Wofür ich welches Kapitel brauche

| Kapitel | Wofür |
|---|---|
| 1 Sprache der Mathematik | jede Vorlesung: Definitionen, Sätze und Beweise lesen |
| 2 Aussagenlogik | ADM (Logik), GDS (Aussagenlogik, Schaltungen), Programmieren (Bedingungen) |
| 3 Prädikate, Quantoren, Wohldefiniertheit | Analysis (Grenzwert, Stetigkeit), ADM (Teilbarkeit), Definitionen prüfen |
| 4 Mengen | ADM (Mengen, Relationen), Datenbanken, Analysis (Intervalle) |
| 5 Funktionen | ADM (Bijektionen, Mächtigkeit), Analysis (Umkehrfunktion), Programmieren |
| 6 Gleichungen | Analysis, Lineare Algebra, jede Rechenaufgabe |
| 7 Ungleichungen und Beträge | Analysis (Epsilon-Abschätzungen, Konvergenz) |
| 8 Direkte und indirekte Beweise | Theoriefragen in ADM und Analysis |
| 9 Induktion | ADM (Induktionsaufgaben, Rekursionen), Algorithmen (Korrektheit, Laufzeit) |
| 10 Mathematisches Schreiben und LaTeX | Hausübungen, Protokolle, später die Bachelorarbeit |

## Teil A1 – Kostenlose Lernquellen

Primärquelle ist das **Skriptum der LVA** in TUWEL, ein Kapitel pro Thema. Die LVA-Information empfiehlt zusätzlich mehrere Bücher. Nicht alle sind kostenlos. Ich markiere unten, was frei oder über die TU-Bibliothek erreichbar ist.

### Die Quellen

| Quelle | Sprache | Wofür |
|---|---|---|
| Skriptum der LVA (TUWEL), Aufzeichnung (LectureTube) | DE | Primärquelle, Notation, Woche für Woche |
| Präsenzbeispiele der Übung (TUWEL, nach der Übung) | DE | genau die Aufgabentypen der LVA |
| H. Schichl, R. Steinbauer: *Einführung in das mathematische Arbeiten*, 3. Aufl., Springer 2018, mit Webseite und Videos | DE | ausführliches Lehrbuch; über die TU-Bibliothek eventuell als E-Book |
| H. Woracek: *Einführung in das mathematische Arbeiten*, TU-Skriptum (PDF) | DE | Logik, Mengen, Funktionen, Induktion in der Tiefe; zusammengefasst im [EIMA-Kompendium](/tuwien/eima-kompendium/) |
| M. Goldstern: *Die Sprache der Mathematik* | DE | Notation, Lesen und Schreiben von Mathematik |
| A. Beutelspacher: *Das ist o.B.d.A. trivial!*, 9. Aufl. | DE | mathematische Sprache und Notation (Buch) |
| D. Grieser: *Mathematisches Problemlösen und Beweisen*, 2. Aufl. | DE | Problemlösen und Beweisen (Buch) |
| [Serlo *Mathe für Nicht-Freaks*](https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks) | DE | Logik, Mengen, Abbildungen, Beweise, Induktion, Ungleichungen |

### Thema → Quellen

| Thema | Primär | Zusätzlich |
|---|---|---|
| 1 Sprache der Mathematik | Skriptum | Goldstern; Beutelspacher |
| 2 Aussagenlogik | Skriptum | [EIMA 1.1](/tuwien/eima-kompendium/) |
| 3 Prädikate, Quantoren, Wohldefiniertheit | Skriptum Kap. 3, Übung 3 | Serlo (Quantoren) |
| 4 Mengen | Skriptum | EIMA 1.2 |
| 5 Funktionen | Skriptum | EIMA 2.4–2.5 |
| 6 Gleichungen | Skriptum | Schichl/Steinbauer; Serlo |
| 7 Ungleichungen und Beträge | Skriptum | Serlo (Ungleichungen, Betrag) |
| 8 Direkte und indirekte Beweise | Skriptum | Polya; Grieser |
| 9 Induktion | Skriptum | EIMA 3.1 |
| 10 Mathematisches Schreiben, LaTeX | Skriptum, LaTeX-Vorlage der LVA | Beutelspacher; Overleaf |

Die Zuordnung der Themen 1–2 und 4–10 zu Skriptum-Kapiteln ist von mir geschätzt. Belegt ist nur Woche 3 = Skriptum Kapitel 3.
{: .notice--warning}

## Teil A2 – Lernplan

Stand: Mitte November 2026, Übung 3 ist vorbei. Die Termine stehen in TISS. Ich gehe von etwa einem Thema pro Woche aus und plane die Weihnachtsferien als Puffer. Wo die LVA anders taktet, verschiebe ich die Zeilen.

| Woche | Thema (geschätzt) | Vorbereiten vor der Übung | Danach |
|---|---|---|---|
| 16.–22.11. | 4 Mengen | Skriptum lesen, Mengenoperationen an Beispielen | Präsenzbeispiele nachrechnen |
| 23.–29.11. | 5 Funktionen | injektiv/surjektiv an fünf eigenen Beispielen | Hausübung, falls ausgegeben |
| 30.11.–06.12. | 6 Gleichungen | Äquivalenzumformungen, Probe | „Wo ist der Fehler?“-Aufgaben |
| 07.–13.12. | 7 Ungleichungen und Beträge | Fallunterscheidung bei Beträgen | Lösungsmengen als Intervalle |
| 14.–20.12. | 8 Direkte und indirekte Beweise | je einen Beweis pro Technik selbst schreiben | Hausübung |
| Weihnachtsferien | Wiederholung 1–8 | [Beweisliste](#beweisliste) frei aufschreiben | eine Lösung in LaTeX setzen |
| 07.–17.01. | 9 Induktion | drei Summenformeln, eine Teilbarkeit, eine Ungleichung | Schema auswendig |
| 18.–31.01. | 10 Mathematisches Schreiben, LaTeX | eigene Lösung in LaTeX setzen | letzte Hausübung, Anwesenheit prüfen |

**Wochenroutine**

- Vor der Übung das Skriptum-Kapitel lesen oder die Aufzeichnung schauen. Ohne Vorbereitung bringt die Präsenzübung wenig.
- Nach der Übung jedes Präsenzbeispiel ohne Mitschrift noch einmal lösen.
- Hausübungen früh anfangen, sauber aufschreiben (Kapitel 10) und **nie** abschreiben.
- In TUWEL mitzählen: Anwesenheiten (Ziel 10, mindestens 8) und Hausübungspunkte (mindestens 10 von 30).

## Teil B – Stoffzusammenfassung

Jedes Kapitel hat Definitionen, eigene durchgerechnete Beispiele, Stolperfallen und „Wo ist der Fehler?“-Aufgaben. Mit **(B)** markierte Sätze sind kleine Standardbeweise, die ich ohne Vorlage können will. Beweise und Lösungen sind zum Aufklappen. Wo das [EIMA-Kompendium](/tuwien/eima-kompendium/) ein Thema ausführlich hat, halte ich mich kurz und verweise dorthin.

Der Stoff ist nicht mit Folien und Skriptum abgeglichen. Belegt ist nur Kapitel 3 (Prädikate, Quantoren, Formalisieren, Wohldefiniertheit) aus Übung 3. Die Themen 1–2 und 4–10 sind eine plausible Schätzung. Notation und Reihenfolge mit dem Skriptum abgleichen.
{: .notice--warning}

**Konvention hier:** $$\mathbb N = \{0, 1, 2, \dots\}$$. Ob $$0 \in \mathbb N$$ gilt, legt die LVA selbst fest. Im Zweifel schreibe ich $$\mathbb N_0$$ oder $$\mathbb N_{\ge 1}$$ dazu.

### 1 Die Sprache der Mathematik

Mathematische Texte sind dicht. Jedes Wort hat eine feste Bedeutung, und vieles, was im Alltag mitgemeint ist, gilt in der Mathematik nicht. Dieses Kapitel sammelt die Bausteine, die ich zum Lesen jedes Skriptums brauche.

#### Textbausteine

| Baustein | Bedeutung |
|---|---|
| **Definition** | führt einen neuen Begriff ein; kann nicht „falsch“ sein, höchstens unbrauchbar oder nicht wohldefiniert (Kapitel 3) |
| **Satz / Theorem** | wichtige Aussage, die bewiesen wird |
| **Lemma** | Hilfssatz, vor allem als Baustein für einen anderen Beweis |
| **Korollar / Folgerung** | folgt mit wenig Aufwand aus einem Satz |
| **Proposition** | Satz mittlerer Wichtigkeit |
| **Beweis** | lückenlose Begründung aus Definitionen, Axiomen und schon bewiesenen Sätzen; Ende oft mit $$\square$$ oder „q.e.d.“ |
| **Bemerkung / Beispiel** | Erklärung, nicht Teil der logischen Kette |

**Aufbau eines Satzes:** Voraussetzung und Behauptung. „Sei $$n \in \mathbb N$$ gerade. Dann ist $$n^2$$ gerade.“ Voraussetzung: $$n$$ gerade. Behauptung: $$n^2$$ gerade. Beim Lesen markiere ich beides getrennt, dann sehe ich, was ich verwenden darf und was ich zeigen muss.

#### Symbole, die man sofort lesen können muss

| Symbol | gelesen | Beispiel |
|---|---|---|
| $$:=$$ | „ist definiert als“ (links steht das Neue) | $$f(x) := x^2 + 1$$ |
| $$:\Leftrightarrow$$ | „ist per Definition äquivalent zu“ | $$n$$ gerade $$:\Leftrightarrow \exists k \in \mathbb Z: n = 2k$$ |
| $$\Rightarrow$$, $$\Leftrightarrow$$ | „daraus folgt“, „genau dann, wenn“ | $$x = 2 \Rightarrow x^2 = 4$$ |
| $$\in$$, $$\notin$$ | „ist Element von“ | $$3 \in \mathbb N$$, $$-3 \notin \mathbb N$$ |
| $$\forall$$, $$\exists$$, $$\exists!$$ | „für alle“, „es gibt (mindestens) ein“, „es gibt genau ein“ | Kapitel 3 |
| $$\mid$$ | „teilt“ | $$3 \mid 12$$ |
| $$\sum$$, $$\prod$$ | Summe, Produkt | siehe unten |

**Zahlenbereiche:** $$\mathbb N \subseteq \mathbb Z \subseteq \mathbb Q \subseteq \mathbb R \subseteq \mathbb C$$. Natürliche, ganze, rationale, reelle, komplexe Zahlen. Teilmengen wie $$\mathbb R_{>0}$$ oder $$\mathbb Z_{\ge 2}$$ schreibt man oft mit Index.

#### Sprachregeln

- **„oder“** ist immer einschließend: „$$x > 0$$ oder $$x < 5$$“ ist für $$x = 3$$ wahr. Das exklusive „entweder … oder“ wird ausdrücklich so gesagt.
- **„ein“** heißt in der Mathematik meistens „mindestens ein“, nicht „genau ein“. „$$f$$ hat eine Nullstelle“ schließt zwei Nullstellen nicht aus.
- **„genau dann, wenn“** bedeutet zwei Richtungen. „Wenn“ allein ist nur eine Richtung.
- **„notwendig“ und „hinreichend“:** Bei $$A \Rightarrow B$$ ist $$A$$ hinreichend für $$B$$ und $$B$$ notwendig für $$A$$. Beispiel: „durch 4 teilbar“ ist hinreichend für „gerade“, „gerade“ ist notwendig für „durch 4 teilbar“.
- **„o.B.d.A.“** (ohne Beschränkung der Allgemeinheit) darf man nur schreiben, wenn die übrigen Fälle wirklich genauso gehen, etwa durch Vertauschen der Namen.
- **„trivial“** heißt „folgt unmittelbar“. In einer Hausübung schreibe ich lieber den einen Satz Begründung dazu.

#### Summen und Produkte

$$
\sum_{k=1}^{n} a_k := a_1 + a_2 + \dots + a_n, \qquad \prod_{k=1}^{n} a_k := a_1 \cdot a_2 \cdots a_n
$$

Die leere Summe ($$n = 0$$) ist $$0$$, das leere Produkt ist $$1$$. Der Laufindex ist eine **gebundene Variable**: $$\sum_{k=1}^{n} k = \sum_{j=1}^{n} j$$.

**Beispiel (Indexverschiebung).** Setze $$j = k + 1$$:

$$
\sum_{k=0}^{n-1} (k+1)^2 = \sum_{j=1}^{n} j^2 .
$$

Die Grenzen verschieben sich mit: aus $$k = 0$$ wird $$j = 1$$, aus $$k = n-1$$ wird $$j = n$$.

**Beispiel (Teleskopsumme).** Wegen $$\frac{1}{k(k+1)} = \frac1k - \frac1{k+1}$$ heben sich alle Zwischenglieder weg:

$$
\sum_{k=1}^{n} \frac{1}{k(k+1)} = \Bigl(1 - \tfrac12\Bigr) + \Bigl(\tfrac12 - \tfrac13\Bigr) + \dots + \Bigl(\tfrac1n - \tfrac1{n+1}\Bigr) = 1 - \frac{1}{n+1}.
$$

**Rechenregeln:** $$\sum (a_k + b_k) = \sum a_k + \sum b_k$$ und $$\sum c \cdot a_k = c \sum a_k$$. Aber $$\sum a_k b_k \ne \bigl(\sum a_k\bigr)\bigl(\sum b_k\bigr)$$ im Allgemeinen: Für $$n = 2$$, $$a = b = (1,1)$$ ist links $$2$$, rechts $$4$$.

#### Wo ist der Fehler?

<details class="beweis" markdown="1">
<summary>1. „Eine Zahl heißt groß, wenn sie größer als jede kleine Zahl ist. Eine Zahl heißt klein, wenn sie nicht groß ist.“</summary>

Die beiden Definitionen verweisen aufeinander. Um „groß“ zu prüfen, braucht man „klein“, und dafür wieder „groß“. Eine Definition darf nur bereits bekannte Begriffe verwenden. Das ist ein Zirkelschluss in der Definition.

</details>

<details class="beweis" markdown="1">
<summary>2. „Es gilt n ≥ 0 oder n ≤ 0, also ist n = 0.“</summary>

„Oder“ ist einschließend, aber es heißt nicht „und“. Aus $$n \ge 0 \vee n \le 0$$ folgt gar nichts Besonderes, das gilt für jede reelle Zahl. Erst $$n \ge 0 \wedge n \le 0$$ ergibt $$n = 0$$.

</details>

<details class="beweis" markdown="1">
<summary>3. „x = 2 ist hinreichend für x² = 4, also ist x² = 4 hinreichend für x = 2.“</summary>

Hinreichend dreht sich nicht um. Aus $$x^2 = 4$$ folgt nur $$x = 2$$ oder $$x = -2$$. Richtig: $$x^2 = 4$$ ist **notwendig** für $$x = 2$$.

</details>

### 2 Aussagenlogik

Kurzfassung. Ausführlich mit allen Tautologien und Beweisen steht das im [EIMA-Kompendium, Abschnitt 1.1](/tuwien/eima-kompendium/).
{: .notice--info}

**Aussage:** ein Satz, der entweder wahr (W) oder falsch (F) ist. „$$7$$ ist prim“ ist eine Aussage, „$$x > 3$$“ nicht (erst nach Einsetzen), „Mach die Tür zu!“ auch nicht.

#### Junktoren und Wahrheitstafel

| $$A$$ | $$B$$ | $$\neg A$$ | $$A \wedge B$$ | $$A \vee B$$ | $$A \Rightarrow B$$ | $$A \Leftrightarrow B$$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| W | W | F | W | W | W | W |
| W | F | F | F | W | F | F |
| F | W | W | F | W | W | F |
| F | F | W | F | F | W | W |

Die Implikation ist nur dann falsch, wenn die Voraussetzung wahr und die Folgerung falsch ist. Ein Versprechen „Wenn es regnet, nehme ich den Schirm“ ist nur gebrochen, wenn es regnet und ich keinen Schirm habe.

#### Wichtige Äquivalenzen

$$
\begin{aligned}
\neg(A \wedge B) &\Leftrightarrow \neg A \vee \neg B, & \neg(A \vee B) &\Leftrightarrow \neg A \wedge \neg B,\\
(A \Rightarrow B) &\Leftrightarrow \neg A \vee B, & \neg(A \Rightarrow B) &\Leftrightarrow A \wedge \neg B,\\
(A \Rightarrow B) &\Leftrightarrow (\neg B \Rightarrow \neg A), & (A \Leftrightarrow B) &\Leftrightarrow (A \Rightarrow B) \wedge (B \Rightarrow A).
\end{aligned}
$$

Eine **Tautologie** ist in jeder Zeile der Wahrheitstafel wahr, ein **Widerspruch** in keiner. Zwei Formeln sind **äquivalent**, wenn ihre Spalten in der Wahrheitstafel übereinstimmen.

**Beispiel (Wahrheitstafel).** Ist $$(A \Rightarrow B) \Rightarrow (B \Rightarrow A)$$ eine Tautologie?

| $$A$$ | $$B$$ | $$A \Rightarrow B$$ | $$B \Rightarrow A$$ | gesamt |
|:-:|:-:|:-:|:-:|:-:|
| W | W | W | W | W |
| W | F | F | W | W |
| F | W | W | F | **F** |
| F | F | W | W | W |

Nein, die dritte Zeile ist falsch. Aus einer Implikation folgt nicht ihre Umkehrung.

#### Umgangssprache formalisieren

Mit $$R$$ = „es regnet“, $$S$$ = „ich nehme den Schirm“, $$H$$ = „ich bleibe zu Hause“:

| Satz | Formel |
|---|---|
| Wenn es regnet, nehme ich den Schirm. | $$R \Rightarrow S$$ |
| Ich nehme den Schirm nur, wenn es regnet. | $$S \Rightarrow R$$ |
| Ich nehme den Schirm genau dann, wenn es regnet. | $$S \Leftrightarrow R$$ |
| Es regnet, aber ich nehme keinen Schirm. | $$R \wedge \neg S$$ |
| Entweder ich bleibe zu Hause oder ich nehme den Schirm. | $$(H \vee S) \wedge \neg(H \wedge S)$$ |
| Wenn es regnet, bleibe ich zu Hause, außer ich nehme den Schirm. | $$R \wedge \neg S \Rightarrow H$$ |

„**Nur wenn**“ ist die häufigste Falle: „$$A$$ nur, wenn $$B$$“ heißt $$A \Rightarrow B$$. Und „aber“ ist logisch einfach „und“.
{: .notice--warning}

**Satz (B).** $$(A \Rightarrow B) \Leftrightarrow (\neg A \vee B)$$ ist eine Tautologie.

<details class="beweis" markdown="1">
<summary>Beweis mit Wahrheitstafel</summary>

| $$A$$ | $$B$$ | $$A \Rightarrow B$$ | $$\neg A$$ | $$\neg A \vee B$$ |
|:-:|:-:|:-:|:-:|:-:|
| W | W | W | F | W |
| W | F | F | F | F |
| F | W | W | W | W |
| F | F | W | W | W |

Spalte 3 und Spalte 5 stimmen überein, also ist die Äquivalenz in jeder Zeile wahr.

</details>

**Satz (B).** $$\neg(A \Rightarrow B) \Leftrightarrow A \wedge \neg B$$.

<details class="beweis" markdown="1">
<summary>Beweis durch Umformen</summary>

$$
\neg(A \Rightarrow B) \Leftrightarrow \neg(\neg A \vee B) \Leftrightarrow \neg\neg A \wedge \neg B \Leftrightarrow A \wedge \neg B .
$$

Erst der vorige Satz, dann De Morgan, dann doppelte Verneinung. Genau so sieht ein Gegenbeispiel zu einer Implikation aus: Voraussetzung erfüllt, Behauptung verletzt.

</details>

#### Wo ist der Fehler?

<details class="beweis" markdown="1">
<summary>1. „Die Negation von ‚Wenn es regnet, wird die Straße nass‘ ist ‚Wenn es nicht regnet, wird die Straße nicht nass‘.“</summary>

Die Negation einer Implikation ist keine Implikation. Richtig: „Es regnet, und die Straße wird nicht nass.“ ($$R \wedge \neg N$$).

</details>

<details class="beweis" markdown="1">
<summary>2. „Die Negation von ‚x ist gerade und positiv‘ ist ‚x ist ungerade und negativ‘.“</summary>

De Morgan: $$\neg(G \wedge P) \Leftrightarrow \neg G \vee \neg P$$. Also „$$x$$ ist ungerade **oder** nicht positiv“. Außerdem ist „nicht positiv“ nicht dasselbe wie „negativ“, weil $$0$$ weder positiv noch negativ ist.

</details>

<details class="beweis" markdown="1">
<summary>3. „Ich habe A ⇒ B bewiesen und weiß, dass B wahr ist. Also ist A wahr.“</summary>

Das ist der Schluss auf die Voraussetzung, kein gültiger Schluss. In der Wahrheitstafel ist $$A \Rightarrow B$$ auch für $$A$$ = F, $$B$$ = W wahr. Gültig wäre nur Modus Tollens: aus $$A \Rightarrow B$$ und $$\neg B$$ folgt $$\neg A$$.

</details>

### 3 Prädikate, Quantoren, Formalisieren und Wohldefiniertheit

Dieses Kapitel ist belegt: Übung 3 (Skriptum Kapitel 3) behandelt Prädikate formalisieren, Wohldefiniertheit von Funktionen sowie Quadratzahlen, Dreieckszahlen und quadratfreie Zahlen. Alle Beispiele unten sind eigene, nicht die Präsenzaufgaben.
{: .notice--info}

#### Prädikate

Ein **Prädikat** (eine Aussageform) ist ein Ausdruck mit freien Variablen, der erst durch Einsetzen zur Aussage wird. Man gibt ihm einen Namen und definiert ihn mit $$:\Leftrightarrow$$:

$$
T(n) :\Leftrightarrow \exists k\ n = 3 \cdot k \qquad \text{(}n\text{ ist durch 3 teilbar)}
$$

$$T(12)$$ ist wahr ($$k = 4$$), $$T(7)$$ ist falsch. $$T(n)$$ allein ist weder wahr noch falsch, solange $$n$$ frei ist.

Ich schreibe hier, wie im Skriptum, Quantoren ohne Doppelpunkt: $$\exists k\ n = 3 \cdot k$$. Wenn nichts anderes gesagt ist, laufen die Variablen über $$\mathbb N$$ (bzw. den im Kapitel festgelegten Bereich). Ob $$0 \in \mathbb N$$ gilt, hängt von der LVA-Festlegung ab und kann Ergebnisse ändern.
{: .notice--info}

**Freie und gebundene Variablen.** In $$\exists k\ n = 3k$$ ist $$k$$ durch den Quantor **gebunden**, $$n$$ ist **frei**. Gebundene Variablen darf man umbenennen, ohne die Bedeutung zu ändern: $$\exists k\ n = 3k$$ und $$\exists j\ n = 3j$$ sind dasselbe. Freie Variablen darf man nicht einfach umbenennen.

**Gültigkeitsbereich.** Ein Quantor gilt bis zum Ende der Klammer, in der er steht. Zwei getrennte Gültigkeitsbereiche dürfen denselben Variablennamen verwenden. Lesbarer sind verschiedene Namen:

$$
\forall n\ \bigl(T(n) \Rightarrow T(n+3)\bigr) \quad\text{ausgeschrieben}\quad \forall n\ \bigl(\exists k\ n = 3k \Rightarrow \exists l\ n + 3 = 3l\bigr).
$$

Hier wäre $$\exists k\ n + 3 = 3k$$ rechts auch korrekt, weil das erste $$k$$ nur bis zum $$\Rightarrow$$ gilt. Mit $$l$$ sieht man aber sofort, dass es eine neue Zahl ist (nämlich $$l = k + 1$$).

#### Quantoren

| Formel | gelesen | wahr, wenn |
|---|---|---|
| $$\forall x\ A(x)$$ | für alle $$x$$ gilt $$A(x)$$ | kein Gegenbeispiel existiert |
| $$\exists x\ A(x)$$ | es gibt (mindestens) ein $$x$$ mit $$A(x)$$ | ein Beispiel existiert |
| $$\exists! x\ A(x)$$ | es gibt genau ein $$x$$ mit $$A(x)$$ | $$\exists x\ \bigl(A(x) \wedge \forall y\ (A(y) \Rightarrow y = x)\bigr)$$ |

**Eingeschränkte Quantoren** sind Abkürzungen:

$$
\forall x \in M\ A(x) \;\Leftrightarrow\; \forall x\ (x \in M \Rightarrow A(x)), \qquad \exists x \in M\ A(x) \;\Leftrightarrow\; \exists x\ (x \in M \wedge A(x)).
$$

Beim „für alle“ kommt ein $$\Rightarrow$$ hinein, beim „es gibt“ ein $$\wedge$$. Vertauscht man das, wird es falsch: $$\exists x\ (x \in M \Rightarrow A(x))$$ ist schon wahr, sobald irgendein $$x$$ außerhalb von $$M$$ existiert.
{: .notice--warning}

**Negation.** Quantor umdrehen, Einschränkung stehen lassen, innen negieren:

$$
\neg \forall x \in M\ A(x) \Leftrightarrow \exists x \in M\ \neg A(x), \qquad \neg \exists x \in M\ A(x) \Leftrightarrow \forall x \in M\ \neg A(x).
$$

**Reihenfolge.** Gleiche Quantoren darf man vertauschen, verschiedene nicht. Über $$\mathbb Z$$: $$\forall x\ \exists y\ x + y = 0$$ ist wahr ($$y = -x$$ hängt von $$x$$ ab). $$\exists y\ \forall x\ x + y = 0$$ ist falsch (ein einziges $$y$$ für alle $$x$$ gibt es nicht). Mehr dazu im [EIMA-Kompendium](/tuwien/eima-kompendium/).

#### Formalisieren: mit und ohne Hilfsprädikat

Ein Hilfsprädikat macht eine lange Formel lesbar. Ausgeschrieben sieht man, was wirklich dasteht. Beide Formen sollte ich können. Eigene Beispiele mit $$T(n)$$ von oben und $$d \mid n :\Leftrightarrow \exists m\ d \cdot m = n$$:

| Satz | mit Prädikat | ausgeschrieben |
|---|---|---|
| 27 ist durch 3 teilbar. | $$T(27)$$ | $$\exists k\ 27 = 3k$$ |
| Ist $$n$$ durch 3 teilbar, dann auch $$n^2$$. | $$\forall n\ (T(n) \Rightarrow T(n^2))$$ | $$\forall n\ (\exists k\ n = 3k \Rightarrow \exists l\ n^2 = 3l)$$ |
| Von drei aufeinanderfolgenden Zahlen ist eine durch 3 teilbar. | $$\forall n\ (T(n) \vee T(n+1) \vee T(n+2))$$ | $$\forall n\ (\exists k\ n = 3k \vee \exists k\ n+1 = 3k \vee \exists k\ n+2 = 3k)$$ |
| 12 hat einen echten Teiler, der durch 3 teilbar ist. | $$\exists d\ (d \mid 12 \wedge T(d) \wedge d \ne 12)$$ | $$\exists d\ (\exists m\ d \cdot m = 12 \wedge \exists k\ d = 3k \wedge d \ne 12)$$ |
| Es gibt keine größte durch 3 teilbare Zahl. | $$\neg \exists n\ (T(n) \wedge \forall m\ (T(m) \Rightarrow m \le n))$$ | Prädikat zweimal einsetzen |

In der dritten Zeile kommt $$k$$ dreimal vor, in drei getrennten Gültigkeitsbereichen. Das ist korrekt. Mit $$k_1, k_2, k_3$$ wäre es klarer.

**Primzahl als Prädikat.**

$$
P(n) :\Leftrightarrow n \ge 2 \wedge \forall d\ \bigl(d \mid n \Rightarrow d = 1 \vee d = n\bigr)
$$

Damit wird „Es gibt unendlich viele Primzahlen“ zu $$\forall n\ \exists p\ (p > n \wedge P(p))$$: Über jeder Schranke liegt noch eine Primzahl. Die Goldbach-Vermutung „Jede gerade Zahl größer 2 ist Summe zweier Primzahlen“ wird zu

$$
\forall n\ \bigl(n > 2 \wedge \exists k\ n = 2k \;\Rightarrow\; \exists p\ \exists q\ (P(p) \wedge P(q) \wedge n = p + q)\bigr).
$$

**Rezept zum Formalisieren**

1. Welche Objekte? Bereich der Variablen festlegen ($$\mathbb N$$, $$\mathbb Z$$, $$\mathbb R$$).
2. Signalwörter übersetzen: „jede/alle/beliebig“ wird $$\forall$$, „es gibt/ein/manche“ wird $$\exists$$, „kein“ wird $$\neg\exists$$ oder $$\forall \dots \neg$$.
3. Bedingungen einbauen: bei $$\forall$$ mit $$\Rightarrow$$, bei $$\exists$$ mit $$\wedge$$.
4. Prädikate ausschreiben und dabei für jeden neuen Quantor einen frischen Namen wählen.
5. Rückübersetzen: Lese ich die Formel laut, kommt der ursprüngliche Satz heraus?

#### Wohldefiniertheit

Eine Definition „$$f(x) := \dots$$“ oder „$$y = f(x) :\Leftrightarrow \dots$$“ liefert nur dann eine **Funktion** $$f: A \to B$$, wenn für **jedes** $$x \in A$$ **genau ein** $$y \in B$$ herauskommt. Das nennt man **wohldefiniert**. Drei Dinge können schiefgehen:

1. **Existenz:** Für manche $$x$$ gibt es gar kein passendes $$y$$.
2. **Eindeutigkeit:** Für manche $$x$$ gibt es mehrere $$y$$.
3. **Vertreterabhängigkeit:** Die Vorschrift benutzt eine Darstellung von $$x$$ (z. B. einen Bruch $$\frac pq$$), und verschiedene Darstellungen desselben $$x$$ liefern verschiedene Werte.

Bei Definitionen mit $$\max$$ oder $$\min$$ steckt Punkt 1 drin: Das Maximum muss existieren. Eine nach oben unbeschränkte Menge hat kein Maximum, eine nach unten unbeschränkte kein Minimum. Die leere Menge hat weder noch.

**Eigene Beispiele** für Funktionen $$\mathbb R \to \mathbb R$$ bzw. $$\mathbb Q \to \mathbb Z$$:

| Definition | wohldefiniert? | Begründung |
|---|---|---|
| $$g_1(x) := \min\{k \in \mathbb Z : k \ge x\}$$ | ja | Die Menge ist nichtleer und nach unten durch $$x$$ beschränkt; ganze Zahlen haben dann ein kleinstes Element. Das ist das Aufrunden $$\lceil x \rceil$$. |
| $$g_2(x) := \max\{k \in \mathbb Z : k \ge x\}$$ | nein | Die Menge ist nach oben unbeschränkt, ein Maximum existiert für kein $$x$$. |
| $$y = g_3(x) :\Leftrightarrow y^3 = x$$ | ja | Jede reelle Zahl hat genau eine reelle dritte Wurzel, weil $$y \mapsto y^3$$ streng monoton und surjektiv ist. |
| $$y = g_4(x) :\Leftrightarrow y^4 = x$$ | nein | Für $$x < 0$$ kein $$y$$, für $$x > 0$$ zwei ($$\pm\sqrt[4]{x}$$). Reparatur: Definitionsbereich $$x \ge 0$$ und zusätzlich $$y \ge 0$$ verlangen. |
| $$g_5(x) := \min\{x^2, 1\}$$ | ja | Minimum von zwei Zahlen existiert immer. |
| $$h\bigl(\tfrac pq\bigr) := p$$ für $$p \in \mathbb Z$$, $$q \in \mathbb N_{\ge 1}$$ | nein | $$\tfrac12 = \tfrac24$$, aber $$h$$ liefert $$1$$ bzw. $$2$$. |
| $$h'\bigl(\tfrac pq\bigr) := p$$ mit $$\tfrac pq$$ vollständig gekürzt, $$q \ge 1$$ | ja | Die gekürzte Darstellung mit positivem Nenner ist eindeutig. |

<details class="beweis" markdown="1">
<summary>Warum g₁ wohldefiniert ist (ausführlich)</summary>

Sei $$x \in \mathbb R$$ und $$M_x := \{k \in \mathbb Z : k \ge x\}$$.

*Nichtleer:* Es gibt eine ganze Zahl größer als $$x$$ (archimedisches Prinzip), also $$M_x \ne \emptyset$$.

*Nach unten beschränkt:* Jedes $$k \in M_x$$ erfüllt $$k \ge x$$. Wähle eine ganze Zahl $$m \le x$$ (wieder archimedisch, angewendet auf $$-x$$). Dann ist $$k \ge m$$ für alle $$k \in M_x$$.

*Minimum:* Die Menge $$\{k - m : k \in M_x\}$$ ist eine nichtleere Teilmenge von $$\mathbb N$$ und hat nach dem Wohlordnungsprinzip ein kleinstes Element $$k_0 - m$$. Dann ist $$k_0$$ das kleinste Element von $$M_x$$. Ein Minimum ist eindeutig, weil von zwei kleinsten Elementen jedes kleiner gleich dem anderen ist.

Also gibt es zu jedem $$x$$ genau einen Wert $$g_1(x)$$.

</details>

**Beispiel aus der Restklassenrechnung.** Auf $$\mathbb Z_5$$ ist $$[a] \mapsto [a^2]$$ wohldefiniert: Aus $$a \equiv b \pmod 5$$ folgt $$a^2 - b^2 = (a-b)(a+b)$$ durch $$5$$ teilbar. Dagegen ist $$[a]_5 \mapsto [a]_3$$ nicht wohldefiniert: $$[0]_5 = [5]_5$$, aber $$[0]_3 \ne [5]_3$$.

#### Quadratzahlen, Dreieckszahlen, quadratfreie Zahlen

Diese drei Prädikate über $$\mathbb N$$ sind gute Übungsobjekte, weil man sie formal definieren und dann Eigenschaften beweisen kann.

$$
Q(n) :\Leftrightarrow \exists k\ n = k \cdot k, \qquad D(n) :\Leftrightarrow \exists m\ 2n = m(m+1), \qquad QF(n) :\Leftrightarrow \neg \exists k\ \bigl(k > 1 \wedge k \cdot k \mid n\bigr).
$$

| $$n$$ | 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 10 | 12 | 15 | 16 | 18 | 21 | 25 | 28 | 30 | 36 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $$Q(n)$$ | W | W | F | F | W | F | F | W | F | F | F | W | F | F | W | F | F | W |
| $$D(n)$$ | W | W | F | W | F | W | F | F | W | F | W | F | F | W | F | W | F | W |
| $$QF(n)$$ | F | W | W | W | F | W | F | F | W | F | W | F | F | W | F | F | W | F |

$$0$$ ist nicht quadratfrei, weil $$4 \mid 0$$. Die Dreieckszahlen sind $$T_m = \frac{m(m+1)}{2}$$: $$0, 1, 3, 6, 10, 15, 21, 28, 36, \dots$$ ($$36$$ ist zugleich Quadrat- und Dreieckszahl.)

**Satz (B).** Für jede Quadratzahl $$n$$ ist der Rest von $$n$$ bei Division durch $$3$$ gleich $$0$$ oder $$1$$.

<details class="beweis" markdown="1">
<summary>Beweis (Fallunterscheidung nach dem Rest von k)</summary>

Sei $$n = k^2$$. Jedes $$k$$ hat die Form $$3j$$, $$3j+1$$ oder $$3j+2$$.

- $$k = 3j$$: $$k^2 = 9j^2 = 3 \cdot 3j^2$$, Rest $$0$$.
- $$k = 3j+1$$: $$k^2 = 9j^2 + 6j + 1 = 3(3j^2 + 2j) + 1$$, Rest $$1$$.
- $$k = 3j+2$$: $$k^2 = 9j^2 + 12j + 4 = 3(3j^2 + 4j + 1) + 1$$, Rest $$1$$.

Folgerung: Eine Zahl mit Rest $$2$$ modulo $$3$$ (z. B. $$2, 5, 8, 11, \dots$$) ist nie eine Quadratzahl.

</details>

**Satz (B).** Ist $$n$$ eine Dreieckszahl, dann auch $$9n + 1$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Sei $$2n = m(m+1)$$. Setze $$m' := 3m + 1$$. Dann

$$
m'(m'+1) = (3m+1)(3m+2) = 9m^2 + 9m + 2 = 9 \cdot m(m+1) + 2 = 9 \cdot 2n + 2 = 2(9n + 1).
$$

Also gilt $$D(9n+1)$$ mit Zeuge $$m'$$. Beispiel: $$n = 3$$ ($$m = 2$$) liefert $$28 = T_7$$.

</details>

**Satz (B).** Die Summe zweier aufeinanderfolgender Dreieckszahlen ist eine Quadratzahl: $$T_{m-1} + T_m = m^2$$ für $$m \ge 1$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

$$
T_{m-1} + T_m = \frac{(m-1)m}{2} + \frac{m(m+1)}{2} = \frac{m\bigl((m-1) + (m+1)\bigr)}{2} = \frac{m \cdot 2m}{2} = m^2 .
$$

Beispiel: $$T_4 + T_5 = 10 + 15 = 25$$.

</details>

**Satz (B).** Ist $$n$$ quadratfrei und $$d \mid n$$, dann ist auch $$d$$ quadratfrei.

<details class="beweis" markdown="1">
<summary>Beweis (Kontraposition)</summary>

Angenommen, $$d$$ ist nicht quadratfrei. Dann gibt es $$k > 1$$ mit $$k^2 \mid d$$, also $$d = k^2 a$$. Wegen $$d \mid n$$ ist $$n = d b = k^2 (ab)$$, also $$k^2 \mid n$$. Damit ist $$n$$ nicht quadratfrei. Das ist die Kontraposition der Behauptung.

</details>

**Bemerkung.** Für $$QF$$ genügt es, Quadrate von **Primzahlen** zu testen: Teilt $$k^2$$ die Zahl $$n$$ mit $$k > 1$$, dann auch $$p^2$$ für jeden Primteiler $$p$$ von $$k$$. So sieht man schnell: $$30 = 2 \cdot 3 \cdot 5$$ ist quadratfrei, $$90 = 2 \cdot 3^2 \cdot 5$$ nicht. Das Produkt zweier quadratfreier Zahlen muss nicht quadratfrei sein: $$6 \cdot 10 = 60 = 2^2 \cdot 15$$.

#### Wo ist der Fehler?

<details class="beweis" markdown="1">
<summary>1. „Alle Studierenden in Hörsaal 1 haben ein Notebook“ formalisiert als ∀x (H(x) ∧ N(x)).</summary>

Das sagt „jeder ist in Hörsaal 1 und hat ein Notebook“, also über alle Menschen. Richtig ist $$\forall x\ (H(x) \Rightarrow N(x))$$. Beim Allquantor wird die Einschränkung mit $$\Rightarrow$$ angehängt.

</details>

<details class="beweis" markdown="1">
<summary>2. „f(x) := die Zahl y mit y² = x + 1 ist eine Funktion ℝ → ℝ, weil man y ausrechnen kann.“</summary>

Für $$x < -1$$ gibt es kein reelles $$y$$, für $$x > -1$$ gibt es zwei. Existenz und Eindeutigkeit sind beide verletzt. „Man kann es ausrechnen“ ist keine Begründung für Wohldefiniertheit.

</details>

<details class="beweis" markdown="1">
<summary>3. „Negation von ∀n ∃k n = 3k: ∀n ∀k n ≠ 3k.“</summary>

Beim Negieren dreht sich **jeder** Quantor um. Richtig: $$\exists n\ \forall k\ n \ne 3k$$ („Es gibt eine Zahl, die nicht durch 3 teilbar ist“). Die falsche Version behauptet, dass keine Zahl durch 3 teilbar ist.

</details>

<details class="beweis" markdown="1">
<summary>4. „Weil 4 und 9 Quadratzahlen sind, ist Q(n) ⇒ Q(n + 5) wahr.“</summary>

Ein Beispiel beweist keine Allaussage. Gegenbeispiel: $$n = 1$$ ist Quadratzahl, $$6$$ nicht.

</details>

### 4 Mengen

Kurzfassung mit Rechenbeispielen. Beweise der Mengenregeln und Potenzmengen ausführlich im [EIMA-Kompendium, Abschnitt 1.2](/tuwien/eima-kompendium/).
{: .notice--info}

#### Schreibweisen

- **aufzählend:** $$A = \{2, 3, 5, 7\}$$
- **beschreibend:** $$A = \{n \in \mathbb N : n < 10 \wedge P(n)\}$$ mit dem Primzahlprädikat aus Kapitel 3
- **als Bild:** $$\{n^2 : n \in \mathbb N\} = \{0, 1, 4, 9, \dots\}$$, die Menge der Quadratzahlen
- **Intervalle:** $$[a, b] = \{x \in \mathbb R : a \le x \le b\}$$, $$(a, b]$$, $$[a, \infty)$$ usw.

Zwei Mengen sind gleich, wenn sie dieselben Elemente haben. Reihenfolge und Wiederholung zählen nicht: $$\{3, 1, 3\} = \{1, 3\}$$.

#### Operationen

$$
\begin{aligned}
A \subseteq B &:\Leftrightarrow \forall x\ (x \in A \Rightarrow x \in B), & A \cap B &= \{x : x \in A \wedge x \in B\},\\
A \cup B &= \{x : x \in A \vee x \in B\}, & A \setminus B &= \{x : x \in A \wedge x \notin B\},\\
A \times B &= \{(a, b) : a \in A,\ b \in B\}, & \mathcal P(A) &= \{X : X \subseteq A\}.
\end{aligned}
$$

Die Mengenoperationen sind die Junktoren aus Kapitel 2, angewendet auf „$$x \in \dots$$“. Deshalb übertragen sich De Morgan und das Distributivgesetz direkt.

**Durchgerechnetes Beispiel.** $$A = \{1, 2, 3, 4\}$$, $$B = \{3, 4, 5\}$$, $$C = \{1, 5\}$$:

| Ausdruck | Ergebnis |
|---|---|
| $$A \cap B$$ | $$\{3, 4\}$$ |
| $$A \cup B$$ | $$\{1, 2, 3, 4, 5\}$$ |
| $$A \setminus B$$ | $$\{1, 2\}$$ |
| $$B \setminus A$$ | $$\{5\}$$ |
| $$(A \cup B) \setminus C$$ | $$\{2, 3, 4\}$$ |
| $$(A \setminus C) \cup (B \setminus C)$$ | $$\{2, 3, 4\}$$ (gleich, Distributivität der Differenz) |
| $$C \times \{0\}$$ | $$\{(1, 0), (5, 0)\}$$ |
| $$\mathcal P(C)$$ | $$\{\emptyset, \{1\}, \{5\}, \{1, 5\}\}$$ |

**Intervalle schneiden.** $$[0, 3) \cap (1, 5] = (1, 3)$$, $$[0, 3) \cup (1, 5] = [0, 5]$$, $$[0, 3) \setminus (1, 5] = [0, 1]$$.

#### Element oder Teilmenge?

| Aussage | wahr? | warum |
|---|---|---|
| $$1 \in \{1, \{2\}\}$$ | ja | $$1$$ ist ein Element |
| $$2 \in \{1, \{2\}\}$$ | nein | Element ist $$\{2\}$$, nicht $$2$$ |
| $$\{2\} \in \{1, \{2\}\}$$ | ja | |
| $$\{1\} \subseteq \{1, \{2\}\}$$ | ja | jedes Element von $$\{1\}$$ liegt drin |
| $$\emptyset \subseteq A$$ | ja, für jedes $$A$$ | „für alle $$x \in \emptyset$$“ ist leer wahr |
| $$\emptyset \in \{1, 2\}$$ | nein | $$\emptyset$$ ist kein Element |

**Satz (B).** $$A \subseteq B \Leftrightarrow A \cap B = A$$.

<details class="beweis" markdown="1">
<summary>Beweis (zwei Richtungen)</summary>

„$$\Rightarrow$$“: Sei $$A \subseteq B$$. Immer gilt $$A \cap B \subseteq A$$. Umgekehrt: Ist $$x \in A$$, dann wegen $$A \subseteq B$$ auch $$x \in B$$, also $$x \in A \cap B$$. Damit $$A \subseteq A \cap B$$ und insgesamt Gleichheit.

„$$\Leftarrow$$“: Sei $$A \cap B = A$$ und $$x \in A$$. Dann $$x \in A \cap B$$, also $$x \in B$$. Damit $$A \subseteq B$$.

</details>

**Satz (B).** $$A \times (B \cup C) = (A \times B) \cup (A \times C)$$.

<details class="beweis" markdown="1">
<summary>Beweis (Äquivalenzkette)</summary>

$$
\begin{aligned}
(a, x) \in A \times (B \cup C) &\Leftrightarrow a \in A \wedge (x \in B \vee x \in C)\\
&\Leftrightarrow (a \in A \wedge x \in B) \vee (a \in A \wedge x \in C)\\
&\Leftrightarrow (a, x) \in (A \times B) \cup (A \times C).
\end{aligned}
$$

Der mittlere Schritt ist das Distributivgesetz der Aussagenlogik.

</details>

#### Wo ist der Fehler?

<details class="beweis" markdown="1">
<summary>1. „A ∖ (B ∖ C) = (A ∖ B) ∖ C, weil Differenz wie Subtraktion ist.“</summary>

Gegenbeispiel: $$A = B = C = \{1\}$$. Links: $$B \setminus C = \emptyset$$, also $$A \setminus \emptyset = \{1\}$$. Rechts: $$A \setminus B = \emptyset$$, also $$\emptyset$$. Die Differenz ist nicht assoziativ. Auch bei Zahlen gilt übrigens $$a - (b - c) \ne (a - b) - c$$.

</details>

<details class="beweis" markdown="1">
<summary>2. „Um A = B zu zeigen, nehme ich x ∈ A und zeige x ∈ B. Fertig.“</summary>

Das zeigt nur $$A \subseteq B$$. Für die Gleichheit fehlt die Richtung $$B \subseteq A$$, außer jeder Schritt war eine Äquivalenz.

</details>

### 5 Funktionen

Kurzfassung. Komposition, Inverse und die Sätze über Links- und Rechtsinverse ausführlich im [EIMA-Kompendium, Abschnitte 2.4–2.5](/tuwien/eima-kompendium/).
{: .notice--info}

Eine **Funktion** $$f: A \to B$$ ordnet jedem $$x \in A$$ genau ein $$f(x) \in B$$ zu. Zur Funktion gehören **Definitionsmenge** $$A$$, **Zielmenge** $$B$$ und Vorschrift. Dieselbe Vorschrift mit anderer Definitions- oder Zielmenge ist eine andere Funktion (und kann andere Eigenschaften haben). Dass die Zuordnung eindeutig ist, ist genau die Wohldefiniertheit aus Kapitel 3.

$$
f(X) := \{f(x) : x \in X\} \ \text{(Bild)}, \qquad f^{-1}(Y) := \{x \in A : f(x) \in Y\} \ \text{(Urbild)}.
$$

Das Urbild $$f^{-1}(Y)$$ ist für jede Funktion definiert, auch wenn $$f$$ keine Umkehrfunktion hat.

#### Injektiv, surjektiv, bijektiv

$$
\begin{aligned}
f \text{ injektiv} &:\Leftrightarrow \forall x, x' \in A\ \bigl(f(x) = f(x') \Rightarrow x = x'\bigr),\\
f \text{ surjektiv} &:\Leftrightarrow \forall y \in B\ \exists x \in A\ f(x) = y,\\
f \text{ bijektiv} &:\Leftrightarrow f \text{ injektiv und surjektiv}.
\end{aligned}
$$

**Ein Beispiel, vier Varianten.** Vorschrift $$x \mapsto x^2$$:

| Funktion | injektiv | surjektiv | Grund |
|---|---|---|---|
| $$\mathbb R \to \mathbb R$$ | nein | nein | $$(-1)^2 = 1^2$$; $$-1$$ hat kein Urbild |
| $$\mathbb R \to [0, \infty)$$ | nein | ja | jedes $$y \ge 0$$ hat $$\sqrt y$$ |
| $$[0, \infty) \to \mathbb R$$ | ja | nein | aus $$x^2 = x'^2$$ und $$x, x' \ge 0$$ folgt $$x = x'$$ |
| $$[0, \infty) \to [0, \infty)$$ | ja | ja | Umkehrfunktion $$y \mapsto \sqrt y$$ |

**Beispiel Bild und Urbild.** $$f: \mathbb R \to \mathbb R$$, $$f(x) = x^2$$. Dann $$f([-1, 2]) = [0, 4]$$, $$f^{-1}([1, 4]) = [-2, -1] \cup [1, 2]$$, $$f^{-1}(\{-1\}) = \emptyset$$.

**Satz (B).** $$f: \mathbb R \to \mathbb R$$, $$f(x) = 3x - 7$$ ist bijektiv.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

*Injektiv:* Aus $$3x - 7 = 3x' - 7$$ folgt $$3x = 3x'$$, also $$x = x'$$.

*Surjektiv:* Sei $$y \in \mathbb R$$. Setze $$x := \frac{y + 7}{3}$$. Dann $$f(x) = 3 \cdot \frac{y+7}{3} - 7 = y$$.

Die Umkehrfunktion ist $$f^{-1}(y) = \frac{y+7}{3}$$. Den Kandidaten für $$x$$ findet man, indem man $$y = 3x - 7$$ nach $$x$$ auflöst. Im Beweis reicht es dann, ihn einzusetzen.

</details>

**Satz (B).** Sind $$f: A \to B$$ und $$g: B \to C$$ injektiv, so ist $$g \circ f$$ injektiv.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Seien $$x, x' \in A$$ mit $$g(f(x)) = g(f(x'))$$. Weil $$g$$ injektiv ist, folgt $$f(x) = f(x')$$. Weil $$f$$ injektiv ist, folgt $$x = x'$$.

</details>

#### Wo ist der Fehler?

<details class="beweis" markdown="1">
<summary>1. „f(x) = x³ − x ist injektiv auf ℝ, weil x³ streng wächst.“</summary>

$$x^3$$ wächst streng, aber $$x^3 - x$$ nicht: $$f(-1) = f(0) = f(1) = 0$$. Eigenschaften einzelner Summanden übertragen sich nicht automatisch.

</details>

<details class="beweis" markdown="1">
<summary>2. „Injektiv heißt: x = x′ ⇒ f(x) = f(x′).“</summary>

Diese Richtung gilt für **jede** Funktion, sie ist gerade die Wohldefiniertheit. Injektivität ist die Umkehrung: aus gleichen Werten folgen gleiche Argumente.

</details>

### 6 Gleichungen umformen

Eine Gleichung lösen heißt, die **Lösungsmenge** $$L = \{x \in G : \text{Gleichung gilt}\}$$ in einer Grundmenge $$G$$ zu bestimmen. Jeder Rechenschritt ist eine Aussage über die Lösungsmengen, und genau da passieren die meisten Fehler.

#### Äquivalenz- und Folgerungsumformungen

| Umformung | Art | Bedingung |
|---|---|---|
| auf beiden Seiten dieselbe Zahl addieren | $$\Leftrightarrow$$ | keine |
| beide Seiten mit $$c$$ multiplizieren | $$\Leftrightarrow$$ | nur wenn $$c \ne 0$$ |
| durch einen Term $$t(x)$$ dividieren | $$\Leftrightarrow$$ | nur wenn $$t(x) \ne 0$$; sonst gehen Lösungen verloren |
| mit einem Term $$t(x)$$ multiplizieren | $$\Rightarrow$$ | kann Lösungen dazubringen (dort, wo $$t(x) = 0$$) |
| beide Seiten quadrieren | $$\Rightarrow$$ | kann Lösungen dazubringen |
| Wurzel ziehen | $$x^2 = a \Leftrightarrow x = \sqrt a \vee x = -\sqrt a$$ | $$a \ge 0$$; nicht nur $$+\sqrt a$$ |
| eine streng monotone Funktion anwenden ($$e^x$$, $$\ln$$ auf $$(0, \infty)$$, $$x^3$$) | $$\Leftrightarrow$$ | im Definitionsbereich bleiben |

Nach $$\Rightarrow$$-Schritten ist eine **Probe** Pflicht: Sie ist dann Teil des Lösungswegs, nicht bloß Kontrolle.
{: .notice--warning}

**Beispiel 1 (Wurzelgleichung).** $$\sqrt{x + 7} = x + 1$$ über $$\mathbb R$$, Definitionsbereich $$x \ge -7$$.

$$
\begin{aligned}
\sqrt{x+7} = x + 1 &\Rightarrow x + 7 = x^2 + 2x + 1\\
&\Leftrightarrow x^2 + x - 6 = 0\\
&\Leftrightarrow (x + 3)(x - 2) = 0\\
&\Leftrightarrow x = -3 \vee x = 2 .
\end{aligned}
$$

Probe: $$x = 2$$: $$\sqrt 9 = 3 = 2 + 1$$ stimmt. $$x = -3$$: $$\sqrt 4 = 2$$, aber $$-3 + 1 = -2$$, falsch. Also $$L = \{2\}$$. Das Quadrieren hat $$-3$$ eingeschleppt, weil es auch $$\sqrt{x+7} = -(x+1)$$ löst.

**Beispiel 2 (Division durch einen Term).** $$x^3 = 4x$$.

$$
x^3 = 4x \Leftrightarrow x^3 - 4x = 0 \Leftrightarrow x(x-2)(x+2) = 0 \Leftrightarrow x \in \{-2, 0, 2\}.
$$

Teilt man stattdessen durch $$x$$, erhält man $$x^2 = 4$$ und verliert $$x = 0$$. Richtig wäre: „Fall $$x = 0$$: Lösung. Fall $$x \ne 0$$: Division erlaubt, $$x^2 = 4$$.“

**Beispiel 3 (Bruchgleichung).** $$\frac{x}{x - 1} = \frac{1}{x - 1} + 2$$, Definitionsbereich $$x \ne 1$$. Multiplizieren mit $$x - 1 \ne 0$$ ist dann eine Äquivalenz: $$x = 1 + 2(x - 1) \Leftrightarrow x = 1$$. Aber $$1$$ liegt nicht im Definitionsbereich, also $$L = \emptyset$$.

**Beispiel 4 (Parameter).** Für welche $$a \in \mathbb R$$ hat $$a x = a^2$$ welche Lösungen? Fall $$a \ne 0$$: $$x = a$$, genau eine Lösung. Fall $$a = 0$$: $$0 = 0$$, jedes $$x \in \mathbb R$$ ist Lösung. Ohne Fallunterscheidung übersieht man den zweiten Fall.

**Satz (B).** Für reelle $$a, b$$ gilt $$a \cdot b = 0 \Leftrightarrow a = 0 \vee b = 0$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

„$$\Leftarrow$$“: $$0 \cdot b = 0$$ und $$a \cdot 0 = 0$$.

„$$\Rightarrow$$“: Sei $$ab = 0$$. Ist $$a = 0$$, sind wir fertig. Sonst existiert $$a^{-1}$$, und $$b = a^{-1}(ab) = a^{-1} \cdot 0 = 0$$.

Dieser Satz ist der Grund, warum man Gleichungen auf die Form „Produkt $$= 0$$“ bringt.

</details>

#### Wo ist der Fehler?

<details class="beweis" markdown="1">
<summary>1. Ein „Beweis“, dass 1 = 2.</summary>

Sei $$a = b \ne 0$$. Dann $$a^2 = ab$$, also $$a^2 - b^2 = ab - b^2$$, also $$(a+b)(a-b) = b(a-b)$$. Kürzen ergibt $$a + b = b$$, also $$2b = b$$, also $$2 = 1$$.

Fehler: Gekürzt wurde durch $$a - b$$, und das ist $$0$$. Division durch $$0$$ ist keine erlaubte Umformung.

</details>

<details class="beweis" markdown="1">
<summary>2. „Aus x² = 9 folgt x = 3.“</summary>

Es folgt $$x = 3$$ oder $$x = -3$$. Die Wurzel $$\sqrt 9 = 3$$ ist eine Zahl, aber die Gleichung hat zwei Lösungen.

</details>

<details class="beweis" markdown="1">
<summary>3. „Ich rechne 2 = 2 aus, also stimmt meine Ausgangsgleichung.“</summary>

Wer von der Behauptung ausgeht und bei etwas Wahrem landet, hat nichts bewiesen, außer alle Schritte waren Äquivalenzen. Aus $$-1 = 1$$ folgt durch Quadrieren $$1 = 1$$. Richtig ist, vom Bekannten zur Behauptung zu rechnen oder ausdrücklich $$\Leftrightarrow$$ zu begründen.

</details>

### 7 Ungleichungen und Beträge

Ungleichungen sind das tägliche Werkzeug der Analysis: Jeder Grenzwertbeweis ist eine Kette von Abschätzungen. Die Regeln sind einfach, aber eine einzige vergessene Vorzeichenbedingung macht das Ergebnis falsch.

#### Rechenregeln

Für reelle Zahlen $$a, b, c$$:

| Regel | Bedingung |
|---|---|
| $$a < b \Rightarrow a + c < b + c$$ | keine |
| $$a < b \Rightarrow ac < bc$$ | $$c > 0$$ |
| $$a < b \Rightarrow ac > bc$$ | $$c < 0$$ (Zeichen dreht sich um) |
| $$a < b \wedge b < c \Rightarrow a < c$$ | Transitivität |
| $$a < b \wedge c < d \Rightarrow a + c < b + d$$ | Ungleichungen gleicher Richtung darf man addieren, **nicht** subtrahieren |
| $$0 < a < b \Rightarrow \frac1a > \frac1b$$ | beide gleiches Vorzeichen |
| $$0 \le a < b \Rightarrow a^2 < b^2$$ | beide nichtnegativ |
| $$x^2 \ge 0$$ | immer; Grundlage fast aller Abschätzungen |

**Multiplizieren mit einem Term**, dessen Vorzeichen man nicht kennt, ist verboten. Entweder Fallunterscheidung oder alles auf eine Seite bringen und das Vorzeichen eines Produkts bzw. Quotienten bestimmen.
{: .notice--warning}

#### Betrag

$$
\lvert x\rvert := \begin{cases} x, & x \ge 0,\\ -x, & x < 0, \end{cases} \qquad \text{gleichwertig } \lvert x\rvert = \max\{x, -x\} = \sqrt{x^2}.
$$

$$\lvert x - a\rvert$$ ist der **Abstand** von $$x$$ und $$a$$ auf der Zahlengeraden. Damit liest man viele Ungleichungen geometrisch:

$$
\lvert x - a\rvert < r \Leftrightarrow a - r < x < a + r, \qquad \lvert x - a\rvert \ge r \Leftrightarrow x \le a - r \vee x \ge a + r \quad (r > 0).
$$

**Satz (Dreiecksungleichung, B).** Für alle $$x, y \in \mathbb R$$ gilt $$\lvert x + y\rvert \le \lvert x\rvert + \lvert y\rvert$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Es gilt $$-\lvert x\rvert \le x \le \lvert x\rvert$$ und $$-\lvert y\rvert \le y \le \lvert y\rvert$$. Addieren (gleiche Richtung) ergibt

$$
-(\lvert x\rvert + \lvert y\rvert) \le x + y \le \lvert x\rvert + \lvert y\rvert .
$$

Mit $$r := \lvert x\rvert + \lvert y\rvert \ge 0$$ heißt das $$-r \le x + y \le r$$, also $$\lvert x + y\rvert \le r$$.

</details>

**Folgerung (umgekehrte Dreiecksungleichung).** $$\bigl\lvert \lvert x\rvert - \lvert y\rvert \bigr\rvert \le \lvert x - y\rvert$$. Beweis: $$\lvert x\rvert = \lvert (x - y) + y\rvert \le \lvert x - y\rvert + \lvert y\rvert$$, und dasselbe mit vertauschten Rollen.

#### Durchgerechnete Beispiele

**Beispiel 1.** $$\lvert 2x - 3\rvert \le 5 \Leftrightarrow -5 \le 2x - 3 \le 5 \Leftrightarrow -2 \le 2x \le 8 \Leftrightarrow -1 \le x \le 4$$. Also $$L = [-1, 4]$$.

**Beispiel 2 (zwei Beträge).** $$\lvert x - 1\rvert + \lvert x + 2\rvert \le 5$$. Die Knickstellen sind $$-2$$ und $$1$$, also drei Fälle:

| Fall | Betrag aufgelöst | Ungleichung | Teillösung |
|---|---|---|---|
| $$x < -2$$ | $$(1 - x) + (-x - 2) = -2x - 1$$ | $$-2x - 1 \le 5 \Leftrightarrow x \ge -3$$ | $$[-3, -2)$$ |
| $$-2 \le x < 1$$ | $$(1 - x) + (x + 2) = 3$$ | $$3 \le 5$$ immer | $$[-2, 1)$$ |
| $$x \ge 1$$ | $$(x - 1) + (x + 2) = 2x + 1$$ | $$2x + 1 \le 5 \Leftrightarrow x \le 2$$ | $$[1, 2]$$ |

Vereinigung: $$L = [-3, 2]$$. Kontrolle geometrisch: Summe der Abstände zu $$1$$ und $$-2$$ ist mindestens $$3$$ und wächst außerhalb von $$[-2, 1]$$ mit Steigung $$2$$.

**Beispiel 3 (Bruch).** $$\frac{x + 1}{x - 2} > 2$$, $$x \ne 2$$.

- Fall $$x > 2$$ (Nenner positiv): $$x + 1 > 2x - 4 \Leftrightarrow x < 5$$. Teillösung $$(2, 5)$$.
- Fall $$x < 2$$ (Nenner negativ, Zeichen dreht): $$x + 1 < 2x - 4 \Leftrightarrow x > 5$$. Widerspruch zu $$x < 2$$, keine Lösung.

Also $$L = (2, 5)$$.

**Beispiel 4 (quadratisch).** $$x^2 - x - 6 < 0 \Leftrightarrow (x - 3)(x + 2) < 0$$. Ein Produkt ist negativ, wenn die Faktoren verschiedene Vorzeichen haben: $$-2 < x < 3$$.

**Satz (B, arithmetisches und geometrisches Mittel).** Für $$a, b \ge 0$$ gilt $$\sqrt{ab} \le \frac{a + b}{2}$$, mit Gleichheit genau für $$a = b$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

$$
0 \le (\sqrt a - \sqrt b)^2 = a - 2\sqrt{ab} + b \quad\Leftrightarrow\quad 2\sqrt{ab} \le a + b .
$$

Gleichheit gilt genau dann, wenn $$\sqrt a - \sqrt b = 0$$, also $$a = b$$. Der Trick „starte mit einem Quadrat $$\ge 0$$“ funktioniert bei sehr vielen Ungleichungen. Den Startpunkt findet man, indem man auf einem Schmierzettel rückwärts rechnet.

</details>

#### Wo ist der Fehler?

<details class="beweis" markdown="1">
<summary>1. „1/x < 1, also 1 < x.“</summary>

Multipliziert wurde mit $$x$$ ohne Vorzeichen zu kennen. Für $$x < 0$$ ist $$\frac1x < 1$$ auch wahr. Richtig: $$L = (-\infty, 0) \cup (1, \infty)$$.

</details>

<details class="beweis" markdown="1">
<summary>2. „Aus a < b folgt a² < b².“</summary>

Gegenbeispiel $$a = -3$$, $$b = 1$$: $$9 > 1$$. Quadrieren erhält die Ordnung nur für nichtnegative Zahlen.

</details>

<details class="beweis" markdown="1">
<summary>3. „Aus a < b und c < d folgt a − c < b − d.“</summary>

Gegenbeispiel $$a = 0$$, $$b = 1$$, $$c = 0$$, $$d = 5$$: $$0 < -4$$ ist falsch. Subtrahieren entspricht dem Addieren von $$-d < -c$$, und das zeigt in die andere Richtung.

</details>

### 8 Direkte und indirekte Beweise

Ein Beweis ist eine Kette von Schritten, die jeweils durch eine Definition, einen bekannten Satz oder eine logische Regel gerechtfertigt sind. Welche Technik passt, hängt von der Form der Behauptung ab. Die Übersichtstabelle steht im [EIMA-Kompendium](/tuwien/eima-kompendium/) (Werkzeugkasten).

#### Die Techniken an je einem Beispiel

**Direkter Beweis.** Voraussetzung annehmen, Definitionen einsetzen, umformen bis zur Behauptung.

**Satz (B).** Die Summe zweier ungerader Zahlen ist gerade.

<details class="beweis" markdown="1">
<summary>Beweis (direkt)</summary>

Seien $$m, n$$ ungerade, also $$m = 2a + 1$$ und $$n = 2b + 1$$ mit $$a, b \in \mathbb Z$$. Dann

$$
m + n = 2a + 2b + 2 = 2(a + b + 1),
$$

und $$a + b + 1 \in \mathbb Z$$. Also ist $$m + n$$ gerade. Wichtig: verschiedene Namen $$a, b$$, sonst hätte ich stillschweigend $$m = n$$ angenommen.

</details>

**Kontraposition.** Statt $$A \Rightarrow B$$ zeige ich $$\neg B \Rightarrow \neg A$$. Lohnt sich, wenn $$\neg B$$ eine handlichere Voraussetzung ist.

**Satz (B).** Ist $$n^2$$ gerade, so ist $$n$$ gerade.

<details class="beweis" markdown="1">
<summary>Beweis (Kontraposition)</summary>

Zu zeigen: Ist $$n$$ ungerade, so ist $$n^2$$ ungerade. Sei $$n = 2k + 1$$. Dann $$n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$$, also ungerade.

Direkt wäre es mühsam: Aus $$n^2 = 2m$$ kommt man nicht ohne Weiteres an $$n$$.

</details>

**Widerspruchsbeweis.** Ich nehme $$\neg$$Behauptung an und leite etwas Falsches her.

**Satz (B).** $$\sqrt 2$$ ist irrational.

<details class="beweis" markdown="1">
<summary>Beweis (Widerspruch)</summary>

Angenommen, $$\sqrt 2 = \frac pq$$ mit $$p, q \in \mathbb N$$, $$q \ge 1$$, vollständig gekürzt. Dann $$p^2 = 2q^2$$, also ist $$p^2$$ gerade und nach dem vorigen Satz auch $$p$$, etwa $$p = 2r$$. Einsetzen: $$4r^2 = 2q^2$$, also $$q^2 = 2r^2$$, also ist auch $$q$$ gerade. Dann sind $$p$$ und $$q$$ beide durch $$2$$ teilbar, im Widerspruch zu „vollständig gekürzt“.

</details>

**Fallunterscheidung.** Die Fälle müssen zusammen alles abdecken.

**Satz (B).** Für jedes $$n \in \mathbb Z$$ ist $$n^3 - n$$ durch $$6$$ teilbar.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

$$n^3 - n = (n - 1)\,n\,(n + 1)$$ ist ein Produkt von drei aufeinanderfolgenden ganzen Zahlen. Unter zwei aufeinanderfolgenden ist eine gerade, also teilt $$2$$ das Produkt. Für den Faktor $$3$$ eine Fallunterscheidung nach dem Rest von $$n$$ modulo $$3$$: Rest $$0$$: $$3 \mid n$$. Rest $$1$$: $$3 \mid n - 1$$. Rest $$2$$: $$3 \mid n + 1$$. In jedem Fall teilt $$3$$ das Produkt. Weil $$2$$ und $$3$$ teilerfremd sind, teilt auch $$6$$ das Produkt.

</details>

**Existenzbeweis.** Ein konkretes Objekt angeben und nachrechnen (konstruktiv). Beispiel: „Es gibt eine Primzahl $$p$$, sodass $$p + 2$$ und $$p + 4$$ auch prim sind.“ Zeuge $$p = 3$$: $$3, 5, 7$$.

**Gegenbeispiel.** Eine Allaussage widerlegt ein einziges Gegenbeispiel. „$$n^2 + n + 41$$ ist für alle $$n \in \mathbb N$$ prim“ stimmt für $$n = 0, \dots, 39$$, aber $$n = 40$$ gibt $$1600 + 40 + 41 = 1681 = 41^2$$.

**Äquivalenz.** Zwei Richtungen getrennt zeigen, beide sauber beschriften („$$\Rightarrow$$“, „$$\Leftarrow$$“).

#### Struktur, die jeder Beweis haben sollte

1. Behauptung in Formeln: Was ist Voraussetzung, was ist zu zeigen?
2. Technik ansagen: „Wir zeigen die Kontraposition“, „Angenommen, …“.
3. Variablen einführen: „Sei $$n \in \mathbb Z$$ beliebig“ bei Allaussagen, nie ein konkretes Beispiel.
4. Jeder Schritt mit Begründung, wenn er nicht offensichtlich ist.
5. Schluss: „Das ist ein Widerspruch.“ oder „Also gilt …“.

#### Wo ist der Fehler?

<details class="beweis" markdown="1">
<summary>1. „Behauptung: Jede durch 4 teilbare Zahl ist durch 8 teilbar. Beweis: 8, 16 und 24 sind durch 4 und durch 8 teilbar.“</summary>

Beispiele beweisen keine Allaussage. Die Aussage ist außerdem falsch: $$4$$ ist durch $$4$$, aber nicht durch $$8$$ teilbar.

</details>

<details class="beweis" markdown="1">
<summary>2. „Sei n gerade, also n = 2k, und m gerade, also m = 2k. Dann ist n + m = 4k durch 4 teilbar.“</summary>

Der Name $$k$$ wurde zweimal vergeben, dadurch wurde stillschweigend $$n = m$$ angenommen. Mit $$n = 2k$$, $$m = 2l$$ gilt nur $$n + m = 2(k + l)$$, und das ist im Allgemeinen nicht durch $$4$$ teilbar ($$2 + 4 = 6$$).

</details>

<details class="beweis" markdown="1">
<summary>3. „Widerspruchsbeweis: Angenommen, die Behauptung gilt. Dann folgt 0 = 0. Also stimmt sie.“</summary>

Ein Widerspruchsbeweis nimmt das **Gegenteil** an und leitet etwas **Falsches** her. Aus der Behauptung etwas Wahres zu folgern, beweist gar nichts (Kapitel 2: aus $$B$$ wahr folgt nicht $$A$$ wahr).

</details>

### 9 Vollständige Induktion

Induktion beweist Aussagen der Form $$\forall n \ge n_0\ A(n)$$. Die Begründung über die Peano-Axiome steht im [EIMA-Kompendium, Abschnitt 3.1](/tuwien/eima-kompendium/). Hier geht es ums Handwerk.
{: .notice--info}

#### Schema

1. **Induktionsanfang (IA):** $$A(n_0)$$ nachrechnen.
2. **Induktionsvoraussetzung (IV):** „Für ein beliebiges, aber festes $$n \ge n_0$$ gelte $$A(n)$$.“
3. **Induktionsschritt (IS):** Aus $$A(n)$$ die Aussage $$A(n + 1)$$ herleiten. Dabei muss die IV **verwendet** werden, sonst war die Induktion unnötig.
4. **Schluss:** Nach dem Induktionsprinzip gilt $$A(n)$$ für alle $$n \ge n_0$$.

Bei **Summen** hilft fast immer: $$\sum_{k=1}^{n+1} a_k = \sum_{k=1}^{n} a_k + a_{n+1}$$, dann IV auf die erste Summe anwenden.

**Satz (B, Gauß).** $$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$$ für alle $$n \ge 1$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

*IA $$n = 1$$:* links $$1$$, rechts $$\frac{1 \cdot 2}{2} = 1$$.

*IS:* Es gelte die Formel für $$n$$. Dann

$$
\sum_{k=1}^{n+1} k = \sum_{k=1}^{n} k + (n + 1) \overset{\text{IV}}{=} \frac{n(n+1)}{2} + (n+1) = \frac{(n+1)(n+2)}{2}.
$$

Das ist die Formel für $$n + 1$$. Die Zahl $$\frac{n(n+1)}{2}$$ ist übrigens die Dreieckszahl $$T_n$$ aus Kapitel 3.

</details>

**Satz (B).** $$\sum_{k=1}^{n} (2k - 1) = n^2$$: Die Summe der ersten $$n$$ ungeraden Zahlen ist eine Quadratzahl.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

*IA $$n = 1$$:* $$1 = 1^2$$.

*IS:* $$\sum_{k=1}^{n+1} (2k-1) = n^2 + (2(n+1) - 1) = n^2 + 2n + 1 = (n+1)^2$$, mit der IV im ersten Schritt.

</details>

**Satz (B, Teilbarkeit).** $$3 \mid 4^n - 1$$ für alle $$n \in \mathbb N$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

*IA $$n = 0$$:* $$4^0 - 1 = 0 = 3 \cdot 0$$.

*IS:* Nach IV ist $$4^n - 1 = 3m$$. Dann

$$
4^{n+1} - 1 = 4 \cdot 4^n - 1 = 4(3m + 1) - 1 = 12m + 3 = 3(4m + 1).
$$

Trick: $$4^n$$ aus der IV ausdrücken ($$4^n = 3m + 1$$) und einsetzen.

</details>

**Satz (B, Bernoulli).** Für $$x \ge -1$$ und $$n \in \mathbb N$$ gilt $$(1 + x)^n \ge 1 + nx$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

*IA $$n = 0$$:* $$1 \ge 1$$.

*IS:* Wegen $$1 + x \ge 0$$ darf man die IV mit $$1 + x$$ multiplizieren, ohne dass sich das Zeichen dreht:

$$
(1+x)^{n+1} = (1+x)^n (1+x) \ge (1 + nx)(1 + x) = 1 + (n+1)x + nx^2 \ge 1 + (n+1)x .
$$

Im letzten Schritt wurde $$nx^2 \ge 0$$ weggelassen. Hier sieht man, wofür die Bedingung $$x \ge -1$$ gebraucht wird.

</details>

**Satz (B, späterer Start).** $$2^n > n^2$$ für alle $$n \ge 5$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

*IA $$n = 5$$:* $$32 > 25$$.

*IS:* Sei $$n \ge 5$$ und $$2^n > n^2$$. Dann $$2^{n+1} = 2 \cdot 2^n > 2n^2$$. Es bleibt $$2n^2 \ge (n+1)^2$$, also $$n^2 - 2n - 1 \ge 0$$, also $$(n-1)^2 \ge 2$$. Das gilt für $$n \ge 3$$, insbesondere für $$n \ge 5$$.

Für $$n = 2, 3, 4$$ ist die Aussage falsch ($$4 = 4$$, $$8 < 9$$, $$16 = 16$$). Darum startet die Induktion bei $$5$$.

</details>

**Starke Induktion.** In der IV darf man $$A(k)$$ für **alle** $$n_0 \le k \le n$$ verwenden. Typisch bei „jedes $$n \ge 2$$ ist ein Produkt von Primzahlen“ (Beweis im EIMA-Kompendium, 3.5.3) oder bei Rekursionen, die auf mehrere Vorgänger zurückgreifen.

#### Wo ist der Fehler?

<details class="beweis" markdown="1">
<summary>1. „Behauptung: n = n + 1 für alle n. IS: Gilt n = n + 1, dann auch n + 1 = n + 2 (auf beiden Seiten 1 addieren).“</summary>

Der Schritt ist korrekt, aber der Induktionsanfang fehlt, und er ist für kein $$n$$ wahr. Ohne IA beweist ein IS nichts.

</details>

<details class="beweis" markdown="1">
<summary>2. „IS: Ich nehme an, dass A(n + 1) gilt, und forme um, bis ich A(n) erhalte.“</summary>

Das ist die falsche Richtung. Zu zeigen ist $$A(n) \Rightarrow A(n+1)$$. Aus $$A(n+1)$$ etwas Wahres herzuleiten, zeigt nichts (Kapitel 8, Fehler 3).

</details>

<details class="beweis" markdown="1">
<summary>3. „Alle Pferde haben dieselbe Farbe.“</summary>

Der IS funktioniert nicht von $$n = 1$$ auf $$n = 2$$: Die beiden Gruppen mit je einem Pferd überlappen nicht. Ausführlich im [EIMA-Kompendium](/tuwien/eima-kompendium/), Selbsttest 5.

</details>

### 10 Mathematisches Schreiben und LaTeX

Eine Hausübung wird von einem Menschen korrigiert, der nur sieht, was dasteht. Ein richtiger Gedanke, der nicht lesbar aufgeschrieben ist, bringt keine Punkte. Laut LVA-Information darf ich handschriftlich (leserlicher Scan) oder mit LaTeX abgeben. Für LaTeX gibt es eine Vorlage der LVA.

#### Regeln für einen guten mathematischen Text

1. **Ganze Sätze.** Formeln sind Teil des Satzes, mit Satzzeichen. „Sei $$n \in \mathbb N$$ gerade. Dann gibt es ein $$k$$ mit $$n = 2k$$.“
2. **Jede Variable einführen**, bevor sie benutzt wird, und sagen, woher sie kommt: „Sei … beliebig“, „Wähle …“, „Nach Voraussetzung gibt es …“.
3. **Pfeile nicht als Satzverbinder missbrauchen.** $$\Rightarrow$$ ist eine logische Implikation, kein „und dann rechne ich weiter“. Zwischen Rechenschritten stehen Gleichheitszeichen oder Wörter wie „also“, „daraus folgt“.
4. **Kein Satz beginnt mit einer Formel.** Statt „$$x$$ ist positiv“ lieber „Die Zahl $$x$$ ist positiv“.
5. **Begründen, was nicht offensichtlich ist,** und die Quelle nennen: „nach IV“, „nach der Dreiecksungleichung“, „nach Definition von $$\mid$$“.
6. **Struktur sichtbar machen:** Behauptung, Beweis, Fälle nummerieren, Richtungen „$$\Rightarrow$$“ und „$$\Leftarrow$$“ beschriften, Ende markieren.
7. **Notation konsistent halten.** Ein Symbol bedeutet im ganzen Text dasselbe.
8. **Nicht zu viel, nicht zu wenig.** Rechnungen, die jeder nachvollzieht, nicht in zehn Schritten zerlegen. Aber den einen entscheidenden Schritt nicht als „trivial“ abtun.

**Vorher – nachher (eigenes Beispiel).**

*Schlecht:* „n gerade ⇒ n=2k ⇒ n²=4k² ⇒ gerade“

*Besser:* „Sei $$n$$ gerade. Dann gibt es ein $$k \in \mathbb Z$$ mit $$n = 2k$$. Es folgt $$n^2 = 4k^2 = 2 \cdot (2k^2)$$, und wegen $$2k^2 \in \mathbb Z$$ ist $$n^2$$ gerade.“

#### LaTeX in einer Minute

LaTeX ist das Standardwerkzeug für mathematische Texte. Ohne Installation geht es im Browser mit Overleaf. Für Hausübungen nehme ich die Vorlage der LVA. Ein minimales eigenes Dokument:

```latex
\documentclass[a4paper,11pt]{article}
\usepackage[ngerman]{babel}
\usepackage{amsmath,amssymb,amsthm}
\newtheorem{satz}{Satz}

\begin{document}
\section*{Hausübung 1, Aufgabe 2}

\begin{satz}
Für alle $n \in \mathbb{N}$ gilt $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$.
\end{satz}

\begin{proof}
Induktion nach $n$. \emph{Anfang:} \dots
\begin{align*}
  \sum_{k=1}^{n+1} k &= \sum_{k=1}^{n} k + (n+1) \\
                     &= \frac{n(n+1)}{2} + (n+1) = \frac{(n+1)(n+2)}{2}.
\end{align*}
\end{proof}
\end{document}
```

| Ich will | LaTeX |
|---|---|
| Formel im Text / abgesetzt | `$…$` / `\[ … \]` |
| mehrzeilige Rechnung, ausgerichtet | `align*` mit `&` und `\\` |
| Bruch, Wurzel, Potenz, Index | `\frac{a}{b}`, `\sqrt{x}`, `x^{2n}`, `a_{k+1}` |
| Summe, Produkt | `\sum_{k=1}^{n}`, `\prod_{k=1}^{n}` |
| Mengen, Zahlbereiche | `\{1,2\}`, `\mathbb{N}`, `\in`, `\subseteq`, `\cup`, `\cap`, `\setminus` |
| Logik | `\forall`, `\exists`, `\neg`, `\wedge`, `\vee`, `\Rightarrow`, `\Leftrightarrow` |
| Fallunterscheidung | `\begin{cases} … \end{cases}` |
| Betrag, Teilbarkeit | `\lvert x \rvert`, `a \mid b` |
| Text in einer Formel | `\text{für alle}` |

**Typische LaTeX-Fehler:** `{` und `}` vergessen (`x^10` setzt nur die 1 hoch, richtig `x^{10}`), Umlaute ohne `babel`/UTF-8, `\{` für Mengenklammern vergessen (sonst verschwinden die Klammern), Text in Formeln ohne `\text`.

#### Wo ist der Fehler?

<details class="beweis" markdown="1">
<summary>1. „Beweis: Sei n = 5. Dann ist n² + n = 30 gerade. Also ist n² + n immer gerade.“</summary>

Bei einer Allaussage darf man kein konkretes $$n$$ wählen. Richtig: „Sei $$n \in \mathbb Z$$ beliebig. Dann ist $$n^2 + n = n(n+1)$$ ein Produkt zweier aufeinanderfolgender Zahlen, von denen eine gerade ist.“

</details>

<details class="beweis" markdown="1">
<summary>2. „x² − 1 = 0 ⇒ (x−1)(x+1) ⇒ x = ±1“</summary>

Der mittlere Ausdruck ist keine Aussage, also kann nichts aus ihm folgen. Richtig: $$x^2 - 1 = 0 \Leftrightarrow (x-1)(x+1) = 0 \Leftrightarrow x = 1 \vee x = -1$$.

</details>

## Beweisliste

Alle mit (B) markierten Sätze auf einen Blick. In den Weihnachtsferien schreibe ich jeden einmal ohne Vorlage auf.

| Kap. | Aussage | Technik | Kernidee |
|---|---|---|---|
| 2 | $$(A \Rightarrow B) \Leftrightarrow (\neg A \vee B)$$ | Wahrheitstafel | Spalten vergleichen |
| 2 | $$\neg(A \Rightarrow B) \Leftrightarrow A \wedge \neg B$$ | Umformen | vorige Regel, De Morgan |
| 3 | Quadratzahlen haben Rest 0 oder 1 modulo 3 | Fallunterscheidung | $$k = 3j, 3j+1, 3j+2$$ |
| 3 | $$D(n) \Rightarrow D(9n+1)$$ | Zeuge angeben | $$m' = 3m + 1$$ |
| 3 | $$T_{m-1} + T_m = m^2$$ | Rechnen | $$m$$ ausklammern |
| 3 | Teiler quadratfreier Zahlen sind quadratfrei | Kontraposition | $$k^2 \mid d \mid n$$ |
| 3 | Aufrunden ist wohldefiniert | Existenz + Eindeutigkeit | nichtleer, nach unten beschränkt, Wohlordnung |
| 4 | $$A \subseteq B \Leftrightarrow A \cap B = A$$ | zwei Richtungen | Element verfolgen |
| 4 | $$A \times (B \cup C) = (A \times B) \cup (A \times C)$$ | Äquivalenzkette | Distributivgesetz der Logik |
| 5 | $$3x - 7$$ ist bijektiv | injektiv + surjektiv | Urbild durch Auflösen finden |
| 5 | Komposition injektiver Funktionen ist injektiv | direkt | Injektivität zweimal anwenden |
| 6 | $$ab = 0 \Leftrightarrow a = 0 \vee b = 0$$ | Fallunterscheidung | mit $$a^{-1}$$ multiplizieren |
| 7 | Dreiecksungleichung | Abschätzen | $$-\lvert x\rvert \le x \le \lvert x\rvert$$ addieren |
| 7 | arithmetisches ≥ geometrisches Mittel | Quadrat ≥ 0 | $$(\sqrt a - \sqrt b)^2 \ge 0$$ |
| 8 | ungerade + ungerade = gerade | direkt | zwei verschiedene Namen |
| 8 | $$n^2$$ gerade ⇒ $$n$$ gerade | Kontraposition | $$(2k+1)^2$$ |
| 8 | $$\sqrt 2$$ irrational | Widerspruch | gekürzter Bruch, beide gerade |
| 8 | $$6 \mid n^3 - n$$ | Faktorisieren, Fälle | drei aufeinanderfolgende Zahlen |
| 9 | Gauß-Summe | Induktion | letzten Summanden abspalten |
| 9 | Summe der ersten $$n$$ ungeraden Zahlen | Induktion | $$n^2 + 2n + 1$$ |
| 9 | $$3 \mid 4^n - 1$$ | Induktion | $$4^n = 3m + 1$$ einsetzen |
| 9 | Bernoulli | Induktion | mit $$1 + x \ge 0$$ multiplizieren |
| 9 | $$2^n > n^2$$ ab $$n = 5$$ | Induktion | $$(n-1)^2 \ge 2$$ |

## Selbsttest

<details class="beweis" markdown="1">
<summary>1. Formalisiere: „Jede Quadratzahl größer 1 hat einen Teiler, der keine Quadratzahl ist.“</summary>

Mit $$Q(n) :\Leftrightarrow \exists k\ n = k \cdot k$$ und $$d \mid n :\Leftrightarrow \exists m\ d \cdot m = n$$:

$$
\forall n\ \bigl(Q(n) \wedge n > 1 \Rightarrow \exists d\ (d \mid n \wedge \neg Q(d))\bigr).
$$

Die Aussage ist wahr: $$n = k^2$$ mit $$k \ge 2$$, und $$k$$ hat einen Primteiler $$p$$, der $$n$$ teilt und keine Quadratzahl ist.

</details>

<details class="beweis" markdown="1">
<summary>2. Ist f: ℝ → ℤ, f(x) := max{k ∈ ℤ : k < x} wohldefiniert?</summary>

Ja. Die Menge ist nichtleer und nach oben durch $$x$$ beschränkt, also hat sie als Menge ganzer Zahlen ein größtes Element. Achtung: Für ganzzahliges $$x$$ ist $$f(x) = x - 1$$, nicht $$x$$, weil die Ungleichung strikt ist.

</details>

<details class="beweis" markdown="1">
<summary>3. Löse die Betragsungleichung mit Abstand von x zu 3 größer 1.</summary>

$$\lvert x - 3\rvert > 1 \Leftrightarrow x < 2 \vee x > 4$$, also $$L = (-\infty, 2) \cup (4, \infty)$$. Geometrisch: alle Punkte, die weiter als $$1$$ von $$3$$ entfernt sind.

</details>

<details class="beweis" markdown="1">
<summary>4. Welche Beweistechnik für: „Ist 3n + 2 ungerade, dann ist n ungerade“?</summary>

Kontraposition: Ist $$n = 2k$$ gerade, dann ist $$3n + 2 = 6k + 2 = 2(3k + 1)$$ gerade. Direkt kommt man von „$$3n + 2$$ ungerade“ schwer an $$n$$.

</details>

<details class="beweis" markdown="1">
<summary>5. Wo steckt der Fehler? „Aus √(x+2) = x folgt x² − x − 2 = 0, also x ∈ {−1, 2}.“</summary>

Quadrieren ist nur eine Folgerung. Probe: $$x = 2$$ passt ($$\sqrt 4 = 2$$), $$x = -1$$ nicht ($$\sqrt 1 = 1 \ne -1$$). Also $$L = \{2\}$$.

</details>

## Offene Punkte

- Reihenfolge und Titel der Themen 1–2 und 4–10 mit dem Skriptum in TUWEL abgleichen; Kapitelnummern hier anpassen.
- Notation des Skriptums übernehmen (Quantoren ohne Doppelpunkt, $$0 \in \mathbb N$$ oder nicht).
- Termine der Übungen und Abgabefristen der drei Hausübungen in TISS/TUWEL nachtragen.
- Anwesenheit mitzählen: Ziel mindestens 8 von 10.
- Hausübungspunkte mitzählen: Ziel mindestens 10 von 30.
- LaTeX-Vorlage der LVA herunterladen und einmal ausprobieren, bevor die erste Hausübung fällig ist.

## Quellen

- LVA-Information 104.631 (Organisation, Beurteilung, Literatur, FAQ), WS 2026/27
- Präsenzaufgaben Übung 3 (Skriptum Kapitel 3), Stand 09.11.2026, nur als Themenquelle
- H. Schichl, R. Steinbauer: *Einführung in das mathematische Arbeiten*, 3. Aufl., Springer 2018
- H. Woracek: *Einführung in das mathematische Arbeiten*, Skriptum TU Wien; dazu das [EIMA-Kompendium](/tuwien/eima-kompendium/)
- M. Goldstern: *Die Sprache der Mathematik*
- A. Beutelspacher: *Das ist o.B.d.A. trivial!*, 9. Aufl., Vieweg+Teubner 2009
- G. Polya: *How to Solve It*, 2nd ed., Princeton University Press 1957
- D. Grieser: *Mathematisches Problemlösen und Beweisen*, 2. Aufl., Springer 2017
- [Serlo *Mathe für Nicht-Freaks*](https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks)
