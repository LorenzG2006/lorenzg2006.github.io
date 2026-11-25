---
title: "Einführung in das mathematische Arbeiten – Kompendium"
kuerzel: EIMA
lva_nr: "101.672"
typ: VU
semester: 2026W
ects: 0              # nicht belegt; LVA 2025W hatte 1 SWS
status: Selbststudium (nicht belegt)
tiss: "https://tiss.tuwien.ac.at/course/courseDetails.xhtml?courseNr=101672&semester=2025W"
excerpt: "EIMA ausführlich: Lernquellen, Lernplan und die komplette Stoffzusammenfassung mit allen Standardbeweisen."
math: true
unlisted: true       # Entwurf, parallel zur kurzen LVA-Seite
---

{% include toc title="Inhalt" %}

## Überblick

EIMA ist das Fundament für die Theoriefragen in **ADM** und **Analysis**: Was ist ein Beweis, wie funktionieren Logik, Mengen, Relationen und Funktionen, und wie baut man die natürlichen Zahlen samt Induktion sauber auf. Grundlage ist das Skript von **Harald Woracek, *Einführung in das mathematische Arbeiten***, 1. Auflage (2018 druckfehlerkorrigiert, 2019W/2022W ergänzt von M. Goldstern), 101 Seiten in 3 Kapiteln. Die Nummerierung unten folgt exakt diesem Skript (EIMA22).

Für das Wintersemester 2026/27 gibt es keine eigene LVA-Seite. Der Block (Anfang Oktober) ist vermutlich schon vorbei. Ob EIMA formal belegt ist oder das Skript nur im Selbststudium für ADM und Analysis dient, ist offen. Der Lernplan unten ist deshalb als Selbststudium parallel zu ADM und Analysis angelegt.
{: .notice--warning}

| **LVA** | VU 101.672 Einführung ins Mathematische Arbeiten, 1 SWS |
| **Zuletzt dokumentiert** | WS 2025/26, Praetorius/Hilbert: tägliche Vorlesung 02.–14.10., 2 Pflichtübungen in den Slots von LinAlg 1 und Analysis 1 |
| **Prüfung** | laut LVA-Seite keine Abschlussprüfung |
| **Skript zur LVA 2025W** | eigenes Skript Praetorius (Abschnitte 1–9); Woracek-Skript als Zusatzskript |

### Wofür ich welches Kapitel brauche

| EIMA-Kapitel | Wofür |
|---|---|
| 1.1 Logisches Schließen | ADM 1.3 (Aussagenlogik), GDS Aussagen- und Prädikatenlogik, jeder Beweis |
| 1.2 Mengenlehre | ADM 1.4 Mengen; Analysis (Supremum, Bild/Urbild) |
| 2.1–2.3 Relationen, Äquivalenz, Partitionen | ADM 1.5, Restklassen $$\mathbb Z_m$$, Nebenklassen |
| 2.4–2.5 Funktionen, Bijektivität | ADM 1.6–1.7 Mächtigkeit; Analysis Umkehrfunktion |
| 3.1–3.3 Peano, Induktion, Ordnung | ADM Induktionsaufgaben 1–24; Analysis rekursiv definierte Folgen |
| 3.4–3.5 Schubfach, endliche Mengen, Primzahlen | ADM Kombinatorik, Zahlentheorie |

## Teil A1 – Kostenlose Lernquellen

Primärquelle ist das Woracek-Skript selbst: Es zerlegt jede Definition und jeden Beweis Schritt für Schritt in eigenen „Analyse von …“-Kästen. Externe Quellen helfen vor allem dabei, Beweise selbst zu üben.

### Die Quellen

| Quelle | Sprache | Wofür |
|---|---|---|
| Woracek-Skript (EIMA22) | DE | Primärquelle: Definitionen und Beweisanalysen |
| EIMA-Seite Praetorius 2025W | DE | eigenes Skript (Abschnitte 1–9), 2 Übungsblätter, handschriftliche Notizen zu Peano/Rekursionssatz |
| Übungsblätter EIMA 2025W | DE | die einzigen offiziellen Übungsaufgaben (08.10. und 14.10.) |
| ADM-Aufgabensammlung Nr. 1–24, 77–158 | DE | Induktion, Logik, Mengen, Relationen, Funktionen auf Prüfungsniveau |
| [Serlo *Mathe für Nicht-Freaks*](https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks) – Grundlagen der Mathematik | DE | Logik, Beweise, Mengen, Relationen, Abbildungen, Induktion |
| [Edmund Weitz](https://weitz.de/) | DE | Videos und Skript (Logik, Mengen, Funktionen) |
| [Jörn Loviscach](https://www.youtube.com/@JoernLoviscach) | DE | Kurzvideos zu Induktion, Mengen, Abbildungen |

### Thema → Quellen

| Skript-Abschnitt | Deutsch | Übungsaufgaben |
|---|---|---|
| 1.1 Aussagen, Schlussregeln, Quantoren | Serlo (Logik, Aussagen negieren, Quantoren) | ADM 77–90 |
| 1.2 Mengenlehre | Serlo (Mengenlehre) | ADM 91–106 |
| 2.1–2.3 Relationen, Äquivalenzrelationen, Partitionen | Serlo (Äquivalenzrelation, Ordnungsrelation) | ADM 107–135 |
| 2.4–2.5 Funktionen, Komposition, Urbild, Bijektivität, Inverse | Serlo (Abbildungen), Weitz | ADM 136–150 |
| 3.1 Peano-Axiome, Rekursionssatz, Induktion | Praetorius-Notizen Abschnitt 9; Serlo (Vollständige Induktion) | ADM 1–24 |
| 3.2 Ordnung, Wohlordnung, starke Induktion | Serlo | ADM 18–21 |
| 3.3 Addition, Multiplikation, Induktionsvarianten | Praetorius-Notizen | – |
| 3.4 Schubfachprinzip, endliche Mengen, $$n!$$ | Loviscach | ADM 197–199 |
| 3.5 Teilbarkeit, Primzahlen | Weitz | ADM 25–30, 60 |

## Teil A2 – Lernplan

Das Skript empfiehlt selbst, es **dreimal** zu lesen: jetzt parallel zur Vorlesung, in den Weihnachtsferien und in den ersten Sommerferien. Der Plan legt den ersten Durchgang so, dass er vor den ADM- und Analysis-Tests fertig ist. Richtwert: **30–45 Minuten pro Werktag**, Beweise immer erst selbst versuchen, dann mit dem Skript vergleichen.

| Woche | Skript | Üben | Nutzen für |
|---|---|---|---|
| 09.–15.11. | 1.1–1.2 Logik, Quantoren, Mengen | Wahrheitstafeln, Negation von Quantorenaussagen; ADM 77–106 | ADM-Übung (Logik, Mengen) |
| 16.–22.11. | 2.1–2.3 Relationen, Äquivalenzrelationen, Partitionen | Satz 2.3.3 selbst beweisen; ADM 107–135 | ADM-Test 1 |
| 23.–29.11. | 2.4–2.5 Funktionen, Bijektivität, Inverse | Prop. 2.5.5 und Satz 2.5.10 beweisen; ADM 136–158 | ADM-Test 1 (02./07.12.) |
| 30.11.–06.12. | 3.1 Peano, Rekursionssatz, Induktion | Induktionsbeweise ADM 1–24 | Analysis: rekursive Folgen |
| 07.–13.12. | 3.2–3.3 Ordnung, Wohlordnung, starke Induktion, $$+$$ und $$\cdot$$ | starke Induktion; Satz 3.2.5 aus der Wohlordnung herleiten | ADM Rekursionen |
| 14.–20.12. | 3.4–3.5 Schubfach, endliche Mengen, $$n!$$, Primzahlen | Satz 3.4.5 und Satz 3.5.4 beweisen | ADM Kombinatorik, Zahlentheorie |
| Weihnachtsferien | 2. Durchgang komplett | [Beweisliste](#beweisliste) frei aufschreiben | Theoriefragen ADM + Analysis |
| Sommerferien 2027 | 3. Durchgang | – | Analysis 2, LinAlg |

**Wochenroutine**

- Pro Abschnitt jede Definition einmal in eigenen Worten und einmal formal aufschreiben.
- Jeden mit **B** markierten Satz einmal ohne Vorlage beweisen.
- Bei jedem Beweis die Technik benennen: direkt, Kontraposition, Widerspruch, Fallunterscheidung, Induktion.

## Teil B – Stoffzusammenfassung

Mit **(B)** markierte Sätze sind die Standardbeweise, die man ohne Vorlage können sollte. Die Beweise sind zum Aufklappen. Abschnitte mit „Ergänzung“ stehen so nicht im Skript, helfen aber beim Üben.

### Werkzeugkasten: Beweistechniken (Ergänzung)

| Ziel | Technik | Schema |
|---|---|---|
| $$A \Rightarrow B$$ | direkt | $$A$$ annehmen, Schritt für Schritt $$B$$ folgern |
| $$A \Rightarrow B$$ | Kontraposition | $$\neg B$$ annehmen, $$\neg A$$ folgern |
| $$A$$ | Widerspruch | $$\neg A$$ annehmen, einen Widerspruch $$C \wedge \neg C$$ herleiten |
| $$A \Leftrightarrow B$$ | zwei Richtungen | $$A \Rightarrow B$$ und $$B \Rightarrow A$$ getrennt |
| $$\forall x \in M: A(x)$$ | beliebiges Element | „Sei $$x \in M$$ beliebig.“ und dann $$A(x)$$ zeigen |
| $$\exists x: A(x)$$ | Konstruktion | ein konkretes $$x$$ angeben und $$A(x)$$ nachrechnen |
| $$M = N$$ (Mengen) | zwei Inklusionen | $$M \subseteq N$$ und $$N \subseteq M$$ |
| $$\forall n \in \mathbb N: A(n)$$ | Induktion | $$A(0)$$ und $$A(n) \Rightarrow A(n+1)$$ |
| Fälle | Fallunterscheidung | die Fälle müssen alles abdecken, z. B. $$x \in A$$ oder $$x \notin A$$ |

### 1.1 Logisches Schließen

**Aussage:** ein sprachliches Gebilde mit genau einem Wahrheitswert $$w(A) \in \{W, F\}$$. **Aussageform** $$A(x)$$: wird erst durch Einsetzen zur Aussage („$$x > 3$$“ ist keine Aussage, „$$5 > 3$$“ schon).

**Junktoren:** $$\neg A$$ (nicht), $$A \vee B$$ (oder, nicht exklusiv), $$A \wedge B$$ (und), $$A \Rightarrow B$$ (falsch nur bei $$W \Rightarrow F$$), $$A \Leftrightarrow B$$ (gleiche Wahrheitswerte).

| $$A$$ | $$B$$ | $$\neg A$$ | $$A \wedge B$$ | $$A \vee B$$ | $$A \Rightarrow B$$ | $$A \Leftrightarrow B$$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| W | W | F | W | W | W | W |
| W | F | F | F | W | F | F |
| F | W | W | F | W | W | F |
| F | F | W | F | F | W | W |

Die Implikation sagt nichts über Ursache und Wirkung. Aus einer falschen Voraussetzung folgt alles („ex falso quodlibet“): „Wenn $$1 = 2$$, dann bin ich der Papst“ ist wahr.
{: .notice--info}

**1.1.2 Allgemeingültige Aussageformen (Tautologien) und Schlussregeln:**

$$
\begin{aligned}
&A \vee \neg A && \text{(ausgeschlossenes Drittes)} && \neg(A \wedge \neg A) && \text{(Widerspruch)}\\
&\neg\neg A \Leftrightarrow A && \text{(doppelte Verneinung)} && (A \Rightarrow B) \Leftrightarrow (\neg B \Rightarrow \neg A) && \text{(Kontraposition)}\\
&A \wedge (A \Rightarrow B) \Rightarrow B && \text{(Modus Ponens)} && (A \Rightarrow B) \wedge \neg B \Rightarrow \neg A && \text{(Modus Tollens)}\\
&(A \Rightarrow B) \wedge (B \Rightarrow C) \Rightarrow (A \Rightarrow C) && \text{(Modus Barbara)} && A \wedge (B \vee C) \Leftrightarrow (A \wedge B) \vee (A \wedge C) && \text{(Distributiv)}\\
&\neg(A \wedge B) \Leftrightarrow \neg A \vee \neg B && \text{(De Morgan)} && \neg(A \vee B) \Leftrightarrow \neg A \wedge \neg B && \text{(De Morgan)}
\end{aligned}
$$

Dazu nützlich: $$(A \Rightarrow B) \Leftrightarrow (\neg A \vee B)$$ und $$\neg(A \Rightarrow B) \Leftrightarrow (A \wedge \neg B)$$. Die zweite Regel sagt, wie man ein Gegenbeispiel zu einer Implikation baut: $$A$$ wahr, $$B$$ falsch.

<details class="beweis" markdown="1">
<summary>Beweis der Kontraposition mit Wahrheitstafel</summary>

| $$A$$ | $$B$$ | $$A \Rightarrow B$$ | $$\neg B$$ | $$\neg A$$ | $$\neg B \Rightarrow \neg A$$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| W | W | W | F | F | W |
| W | F | F | W | F | F |
| F | W | W | F | W | W |
| F | F | W | W | W | W |

Die Spalten 3 und 6 stimmen in jeder Zeile überein, also ist die Äquivalenz eine Tautologie. Genauso zeigt man jede Zeile der Liste oben: Wahrheitstafel aufstellen, die beiden Seiten vergleichen.

</details>

**1.1.3 Quantoren.** $$\forall x: A(x)$$ („für alle“), $$\exists x: A(x)$$ („es gibt mindestens ein“). Negation:

$$
\neg\bigl(\forall x: A(x)\bigr) \Leftrightarrow \exists x: \neg A(x), \qquad \neg\bigl(\exists x: A(x)\bigr) \Leftrightarrow \forall x: \neg A(x)
$$

Die **Reihenfolge** gleichartiger Quantoren ist egal, die verschiedenartiger nicht: $$\forall x\, \exists y: A(x,y)$$ ist im Allgemeinen nicht dasselbe wie $$\exists y\, \forall x: A(x,y)$$.

**Beispiel.** In $$\mathbb N$$ ist $$\forall x\, \exists y: y > x$$ wahr (nimm $$y = x+1$$, das $$y$$ darf von $$x$$ abhängen). $$\exists y\, \forall x: y > x$$ ist falsch: Es gäbe eine größte Zahl, aber $$y > y$$ gilt nie. Allgemein gilt nur $$\exists y\, \forall x: A(x,y) \Rightarrow \forall x\, \exists y: A(x,y)$$.

**Kochrezept zum Negieren:** Quantoren von links nach rechts umdrehen ($$\forall \leftrightarrow \exists$$), Bereichseinschränkungen bleiben stehen, am Ende die innere Aussage negieren. Beispiel aus der Analysis ($$f$$ stetig in $$x_0$$):

$$
\begin{aligned}
&\forall \varepsilon > 0\ \exists \delta > 0\ \forall x: \lvert x - x_0\rvert < \delta \Rightarrow \lvert f(x) - f(x_0)\rvert < \varepsilon\\
\text{Negation: }&\exists \varepsilon > 0\ \forall \delta > 0\ \exists x: \lvert x - x_0\rvert < \delta \wedge \lvert f(x) - f(x_0)\rvert \ge \varepsilon
\end{aligned}
$$

**Stolperfallen**

- Die Negation von „alle Schwäne sind weiß“ ist „mindestens ein Schwan ist nicht weiß“, nicht „alle Schwäne sind nicht weiß“.
- Die Negation von $$x < y$$ ist $$x \ge y$$, nicht $$x > y$$.
- Eine Implikation wird nicht durch Umkehren bewiesen: Aus $$A \Rightarrow B$$ folgt nicht $$B \Rightarrow A$$.

### 1.2 Die Sprache der Mengenlehre

**Cantorscher Mengenbegriff:** Eine Menge ist eine Zusammenfassung wohlunterschiedener Objekte (Elemente) zu einem Ganzen. Zwei Mengen sind gleich, wenn sie dieselben Elemente haben (**Extensionalität**); Reihenfolge und Wiederholungen spielen keine Rolle: $$\{1,2,2\} = \{2,1\}$$. Schreibweisen: aufzählend $$\{1, 2, 3\}$$ oder beschreibend $$\{x \in M : A(x)\}$$.

**1.2.3 Operationen.** Für Mengen $$M, N$$:

$$
\begin{aligned}
M \subseteq N &:\Leftrightarrow \forall x: x \in M \Rightarrow x \in N, & M \cap N &= \{x : x \in M \wedge x \in N\},\\
M \cup N &= \{x : x \in M \vee x \in N\}, & M \setminus N &= \{x \in M : x \notin N\},\\
M \times N &= \{(x,y) : x \in M,\ y \in N\}, & \mathcal P(M) &= \{A : A \subseteq M\}.
\end{aligned}
$$

**Geordnete Paare:** $$(x,y) = (x',y') \Leftrightarrow x = x' \wedge y = y'$$. Anders als bei Mengen kommt es auf die Reihenfolge an: $$(1,2) \ne (2,1)$$, aber $$\{1,2\} = \{2,1\}$$.

**Gleichheit von Mengen** zeigt man über beide Inklusionen $$M \subseteq N$$ und $$N \subseteq M$$.

**Beispiel Potenzmenge.** $$\mathcal P(\{1,2\}) = \{\emptyset, \{1\}, \{2\}, \{1,2\}\}$$. Eine Menge mit $$n$$ Elementen hat $$2^n$$ Teilmengen (für jedes Element: drin oder nicht drin). Achtung: $$\emptyset \subseteq M$$ gilt für jede Menge, aber $$\emptyset \in M$$ nur, wenn die leere Menge selbst ein Element ist.

**Rechenregeln (Ergänzung).** Sie folgen direkt aus den logischen Regeln in 1.1.2, indem man „$$x \in$$“ davorschreibt:

$$
\begin{aligned}
A \cap (B \cup C) &= (A \cap B) \cup (A \cap C), & A \cup (B \cap C) &= (A \cup B) \cap (A \cup C),\\
M \setminus (A \cup B) &= (M \setminus A) \cap (M \setminus B), & M \setminus (A \cap B) &= (M \setminus A) \cup (M \setminus B).
\end{aligned}
$$

<details class="beweis" markdown="1">
<summary>Beweis von M ∖ (A ∪ B) = (M ∖ A) ∩ (M ∖ B) (Elementweise, beide Richtungen zugleich)</summary>

Für jedes $$x$$ gilt

$$
\begin{aligned}
x \in M \setminus (A \cup B) &\Leftrightarrow x \in M \wedge \neg(x \in A \vee x \in B)\\
&\Leftrightarrow x \in M \wedge x \notin A \wedge x \notin B \qquad \text{(De Morgan)}\\
&\Leftrightarrow (x \in M \wedge x \notin A) \wedge (x \in M \wedge x \notin B)\\
&\Leftrightarrow x \in (M \setminus A) \cap (M \setminus B).
\end{aligned}
$$

Weil jede Zeile eine Äquivalenz ist, sind beide Inklusionen gleichzeitig gezeigt. Wenn ein Schritt nur in eine Richtung gilt, muss man die Inklusionen getrennt beweisen.

</details>

### 2.1 Relationen

**2.1.1 Definition.** Eine Relation zwischen $$M$$ und $$N$$ ist eine Teilmenge $$R \subseteq M \times N$$; für $$M = N$$ eine Relation in $$M$$. Man schreibt $$xRy$$ für $$(x,y) \in R$$.

**Beispiele** in $$\mathbb N$$: $$\le$$, die Gleichheit $$\{(x,x) : x \in \mathbb N\}$$ (Diagonale), die Teilbarkeit $$\mid$$. In $$\mathbb Z$$ für festes $$m \ge 1$$: $$x \equiv y \pmod m :\Leftrightarrow m \mid (x - y)$$.

### 2.2 Äquivalenzrelationen

**2.2.1 Definition.** Eine Relation $$R$$ in $$M$$ heißt

$$
\begin{aligned}
&\text{reflexiv:} && \forall x \in M:\ (x,x) \in R\\
&\text{symmetrisch:} && \forall x,y \in M:\ (x,y) \in R \Rightarrow (y,x) \in R\\
&\text{transitiv:} && \forall x,y,z \in M:\ (x,y) \in R \wedge (y,z) \in R \Rightarrow (x,z) \in R
\end{aligned}
$$

Zum Vergleich (für 3.2.2 und Ordnungsrelationen in ADM): **antisymmetrisch** heißt $$xRy \wedge yRx \Rightarrow x = y$$. Reflexiv + antisymmetrisch + transitiv ergibt eine **Halbordnung** (z. B. $$\le$$, $$\subseteq$$, Teilbarkeit auf $$\mathbb N$$).

**2.2.3 Lemma.** $$R$$ symmetrisch $$\Leftrightarrow \forall x,y: (xRy \Leftrightarrow yRx)$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

„$$\Leftarrow$$“: Aus der Äquivalenz folgt insbesondere die Richtung $$xRy \Rightarrow yRx$$.
„$$\Rightarrow$$“: Seien $$x, y$$ beliebig. $$xRy \Rightarrow yRx$$ ist die Symmetrie für das Paar $$(x,y)$$, und $$yRx \Rightarrow xRy$$ ist die Symmetrie für das Paar $$(y,x)$$. Der Trick ist, die Definition mit vertauschten Rollen anzuwenden.

</details>

**2.2.4 Definition.** Eine **Äquivalenzrelation** ist reflexiv, symmetrisch und transitiv.

**Beispiel: Kongruenz modulo $$m$$ ist eine Äquivalenzrelation auf $$\mathbb Z$$.**

<details class="beweis" markdown="1">
<summary>Beweis</summary>

- *Reflexiv:* $$x - x = 0 = m \cdot 0$$, also $$m \mid (x - x)$$.
- *Symmetrisch:* Aus $$x - y = mk$$ folgt $$y - x = m(-k)$$.
- *Transitiv:* Aus $$x - y = mk$$ und $$y - z = ml$$ folgt $$x - z = (x - y) + (y - z) = m(k + l)$$.

</details>

**2.2.6 Lemma (B).** Sind $$R_1, R_2$$ Äquivalenzrelationen auf $$M$$, so auch $$R_1 \cap R_2$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Jede der drei Eigenschaften überträgt sich einzeln:

- *Reflexiv:* Für $$x \in M$$ ist $$(x,x) \in R_1$$ und $$(x,x) \in R_2$$, also $$(x,x) \in R_1 \cap R_2$$.
- *Symmetrisch:* $$(x,y) \in R_1 \cap R_2 \Rightarrow (x,y) \in R_1 \wedge (x,y) \in R_2 \Rightarrow (y,x) \in R_1 \wedge (y,x) \in R_2 \Rightarrow (y,x) \in R_1 \cap R_2$$.
- *Transitiv:* Sind $$(x,y), (y,z) \in R_1 \cap R_2$$, dann liegen beide Paare in $$R_1$$, also $$(x,z) \in R_1$$; genauso $$(x,z) \in R_2$$.

</details>

**Für $$R_1 \cup R_2$$ gilt das nicht**, weil die Transitivität verloren gehen kann. Gegenbeispiel auf $$M = \{1,2,3\}$$ mit der Diagonale $$\Delta = \{(1,1),(2,2),(3,3)\}$$:

$$
R_1 = \Delta \cup \{(1,2),(2,1)\}, \qquad R_2 = \Delta \cup \{(2,3),(3,2)\}.
$$

Beide sind Äquivalenzrelationen. In $$R_1 \cup R_2$$ liegen $$(1,2)$$ und $$(2,3)$$, aber nicht $$(1,3)$$.

### 2.3 Partitionen

**2.3.1 Definition.** $$Q \subseteq \mathcal P(M)$$ ist eine **Partition** von $$M$$, wenn

$$
\text{(Par1)}\ \forall x \in M\ \exists A \in Q: x \in A, \qquad \text{(Par2)}\ \forall A,B \in Q: A = B\ \vee\ A \cap B = \emptyset, \qquad \text{(Par3)}\ \forall A \in Q: A \ne \emptyset
$$

In Worten: Die Blöcke überdecken $$M$$, sind paarweise disjunkt und nicht leer.

**2.3.2 Definition.** Äquivalenzklasse $$[x]_R = \{y \in M : (x,y) \in R\}$$; Faktormenge $$M/R = \{[x]_R : x \in M\}$$; kanonische Projektion $$x \mapsto [x]_R$$.

**Beispiel.** Für $$\equiv \pmod 3$$ auf $$\mathbb Z$$ gibt es genau drei Klassen: $$[0] = \{\dots,-3,0,3,6,\dots\}$$, $$[1] = \{\dots,-2,1,4,\dots\}$$, $$[2] = \{\dots,-1,2,5,\dots\}$$. Die Faktormenge ist $$\mathbb Z_3 = \{[0],[1],[2]\}$$. Es gilt etwa $$[1] = [4] = [-2]$$: Eine Klasse hat viele Namen (Repräsentanten).

**Hilfslemma (Ergänzung).** Für eine Äquivalenzrelation $$R$$ und $$x, y \in M$$ sind gleichwertig: (a) $$xRy$$, (b) $$[x] = [y]$$, (c) $$[x] \cap [y] \ne \emptyset$$.

<details class="beweis" markdown="1">
<summary>Beweis (Ringschluss a ⇒ b ⇒ c ⇒ a)</summary>

*(a) ⇒ (b):* Sei $$z \in [y]$$, also $$yRz$$. Mit $$xRy$$ und Transitivität folgt $$xRz$$, also $$z \in [x]$$. Damit $$[y] \subseteq [x]$$. Wegen der Symmetrie gilt auch $$yRx$$, und dasselbe Argument liefert $$[x] \subseteq [y]$$.

*(b) ⇒ (c):* Wegen der Reflexivität ist $$x \in [x] = [y]$$, also $$x \in [x] \cap [y]$$.

*(c) ⇒ (a):* Sei $$z \in [x] \cap [y]$$, also $$xRz$$ und $$yRz$$. Symmetrie gibt $$zRy$$, Transitivität dann $$xRy$$.

</details>

**2.3.3 Satz (B).** (1) Ist $$R$$ eine Äquivalenzrelation auf $$M$$, so ist $$\{[x]_R : x \in M\}$$ eine Partition von $$M$$. (2) Ist $$Q$$ eine Partition von $$M$$, so ist

$$
R_Q = \{(x,y) \in M \times M:\ \exists A \in Q:\ x \in A \wedge y \in A\}
$$

eine Äquivalenzrelation auf $$M$$, deren Klassen genau die Elemente von $$Q$$ sind.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

**(1)** Sei $$Q = \{[x] : x \in M\}$$.

- *(Par1):* Für $$x \in M$$ ist $$x \in [x]$$ (Reflexivität), und $$[x] \in Q$$.
- *(Par3):* Jedes Element von $$Q$$ hat die Form $$[x]$$ und enthält $$x$$, ist also nicht leer.
- *(Par2):* Seien $$[x], [y] \in Q$$ mit $$[x] \cap [y] \ne \emptyset$$. Kernidee: Ist $$z \in [x] \cap [y]$$, so folgt mit Symmetrie und Transitivität $$xRy$$ und damit $$[x] = [y]$$ (Hilfslemma, c ⇒ a ⇒ b). Also gilt immer $$[x] = [y]$$ oder $$[x] \cap [y] = \emptyset$$.

**(2)** Sei $$Q$$ eine Partition.

- *Reflexiv:* Zu $$x$$ gibt es nach (Par1) ein $$A \in Q$$ mit $$x \in A$$; also $$(x,x) \in R_Q$$.
- *Symmetrisch:* Die Bedingung „$$x \in A \wedge y \in A$$“ ist symmetrisch in $$x$$ und $$y$$.
- *Transitiv:* Seien $$x, y \in A$$ und $$y, z \in B$$ mit $$A, B \in Q$$. Dann ist $$y \in A \cap B$$, also $$A \cap B \ne \emptyset$$ und nach (Par2) $$A = B$$. Somit $$x, z \in A$$ und $$(x,z) \in R_Q$$.
- *Klassen:* Sei $$x \in M$$ und $$A \in Q$$ der Block mit $$x \in A$$ (eindeutig wegen (Par2)). Dann ist $$y \in [x]_{R_Q}$$ genau dann, wenn $$x, y$$ in einem gemeinsamen Block liegen, also genau dann, wenn $$y \in A$$. Damit $$[x]_{R_Q} = A$$. Weil jeder Block nach (Par3) ein Element enthält, kommt jeder Block als Klasse vor.

</details>

### 2.4 Der Funktionsbegriff

**2.4.1 Definition.** Eine Funktion $$f: M \to N$$ ist eine Relation $$f \subseteq M \times N$$ mit

$$
\text{(Fun1)}\ \forall x \in M\ \exists y \in N: (x,y) \in f, \qquad \text{(Fun2)}\ \forall x \in M\ \forall y_1,y_2 \in N: (x,y_1) \in f \wedge (x,y_2) \in f \Rightarrow y_1 = y_2
$$

$$M$$ heißt Definitionsmenge, $$N$$ Zielmenge. (Fun1) heißt „überall definiert“, (Fun2) „eindeutig“. Zwei Funktionen $$f, g: M \to N$$ sind gleich, wenn $$f(x) = g(x)$$ für alle $$x \in M$$ (als Mengen von Paaren).

**Keine Funktionen** $$\mathbb R \to \mathbb R$$: $$\{(x,y) : y^2 = x\}$$ verletzt (Fun1) für $$x < 0$$ und (Fun2) für $$x > 0$$ (zwei Wurzeln). $$x \mapsto 1/x$$ verletzt (Fun1) bei $$x = 0$$.

**2.4.4 Definition.** Komposition $$(g \circ f)(x) = g(f(x))$$ (zuerst $$f$$, dann $$g$$); Identität $$\mathrm{id}_M(x) = x$$.

**2.4.6 Proposition (B).** $$(h \circ g) \circ f = h \circ (g \circ f)$$ sowie $$\mathrm{id}_N \circ f = f$$ und $$f \circ \mathrm{id}_M = f$$ für $$f: M \to N$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Seien $$f: M \to N$$, $$g: N \to P$$, $$h: P \to Q$$. Beide Seiten sind Funktionen $$M \to Q$$, also genügt es, die Werte zu vergleichen. Für jedes $$x \in M$$:

$$
\bigl((h \circ g) \circ f\bigr)(x) = (h \circ g)\bigl(f(x)\bigr) = h\Bigl(g\bigl(f(x)\bigr)\Bigr) = h\bigl((g \circ f)(x)\bigr) = \bigl(h \circ (g \circ f)\bigr)(x).
$$

Ebenso $$(\mathrm{id}_N \circ f)(x) = \mathrm{id}_N(f(x)) = f(x)$$ und $$(f \circ \mathrm{id}_M)(x) = f(x)$$.

</details>

**2.4.7 Definition.** Bild $$f(A) = \{f(x) : x \in A\}$$ für $$A \subseteq M$$; vollständiges Urbild $$f^{-1}(B) = \{x \in M : f(x) \in B\}$$ für $$B \subseteq N$$.

**Beispiel.** $$f: \mathbb Z \to \mathbb Z$$, $$f(x) = x^2$$. Dann $$f(\{-2,-1,0,1,2\}) = \{0,1,4\}$$, $$f^{-1}(\{4, 5\}) = \{-2, 2\}$$, $$f^{-1}(\{5\}) = \emptyset$$. Das Urbild $$f^{-1}(B)$$ existiert **immer**, auch wenn $$f$$ keine Umkehrfunktion hat. Die Schreibweise ist dieselbe, die Bedeutung nicht.

**2.4.8 Lemma.** $$(g \circ f)(A) = g(f(A))$$ und $$(g \circ f)^{-1}(C) = f^{-1}(g^{-1}(C))$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

$$z \in (g \circ f)(A) \Leftrightarrow \exists x \in A: z = g(f(x)) \Leftrightarrow \exists y \in f(A): z = g(y) \Leftrightarrow z \in g(f(A))$$.

$$x \in (g \circ f)^{-1}(C) \Leftrightarrow g(f(x)) \in C \Leftrightarrow f(x) \in g^{-1}(C) \Leftrightarrow x \in f^{-1}(g^{-1}(C))$$.

</details>

**Bild und Urbild mit Mengenoperationen (Ergänzung).** Das Urbild verträgt sich mit allem, das Bild nur mit der Vereinigung:

$$
\begin{aligned}
f^{-1}(B_1 \cup B_2) &= f^{-1}(B_1) \cup f^{-1}(B_2), & f^{-1}(B_1 \cap B_2) &= f^{-1}(B_1) \cap f^{-1}(B_2),\\
f(A_1 \cup A_2) &= f(A_1) \cup f(A_2), & f(A_1 \cap A_2) &\subseteq f(A_1) \cap f(A_2).
\end{aligned}
$$

Gegenbeispiel zur Gleichheit im letzten Fall: $$f(x) = x^2$$, $$A_1 = \{-1\}$$, $$A_2 = \{1\}$$. Links $$f(\emptyset) = \emptyset$$, rechts $$\{1\}$$. Für injektives $$f$$ gilt Gleichheit.

**2.4.9 Proposition.** Ist $$f(\tilde M) \subseteq \tilde N$$ für $$\tilde M \subseteq M$$, $$\tilde N \subseteq N$$, so ist $$\tilde f = f \cap (\tilde M \times \tilde N)$$ eine Funktion $$\tilde M \to \tilde N$$ (Einschränkung, für $$\tilde N = N$$ geschrieben $$f\restriction_{\tilde M}$$).

### 2.5 Bijektivität

**2.5.1 Definition.**

$$
\begin{aligned}
&f\ \text{injektiv:} && \forall x_1,x_2 \in M:\ x_1 \ne x_2 \Rightarrow f(x_1) \ne f(x_2)\\
&f\ \text{surjektiv:} && \forall y \in N\ \exists x \in M:\ y = f(x)\\
&f\ \text{bijektiv:} && \text{injektiv und surjektiv}
\end{aligned}
$$

**2.5.2 Lemma.** $$f$$ injektiv $$\Leftrightarrow \forall x_1,x_2: f(x_1) = f(x_2) \Rightarrow x_1 = x_2$$ (Kontraposition). In Beweisen ist diese Form fast immer praktischer.

| Funktion | injektiv | surjektiv |
|---|:-:|:-:|
| $$\mathbb N \to \mathbb N,\ n \mapsto n + 1$$ | ja | nein (0 fehlt) |
| $$\mathbb Z \to \mathbb Z,\ n \mapsto n + 1$$ | ja | ja |
| $$\mathbb Z \to \mathbb N,\ n \mapsto \lvert n\rvert$$ | nein | ja |
| $$\mathbb R \to \mathbb R,\ x \mapsto x^2$$ | nein | nein |
| $$[0,\infty) \to [0,\infty),\ x \mapsto x^2$$ | ja | ja |

Die letzten beiden Zeilen zeigen: Ob $$f$$ injektiv oder surjektiv ist, hängt von Definitions- und Zielmenge ab, nicht nur von der Formel.

**Beispiel (direkter Beweis).** $$f: \mathbb R \to \mathbb R$$, $$f(x) = 3x - 7$$ ist bijektiv. *Injektiv:* $$3x_1 - 7 = 3x_2 - 7 \Rightarrow x_1 = x_2$$. *Surjektiv:* Zu $$y \in \mathbb R$$ ist $$x = (y + 7)/3$$ ein Urbild, denn $$f(x) = y$$.

**2.5.5 Proposition (B).** Sind $$f: M \to N$$ und $$g: N \to P$$ injektiv (surjektiv, bijektiv), so auch $$g \circ f$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

*Injektiv:* Sei $$g(f(x_1)) = g(f(x_2))$$. Weil $$g$$ injektiv ist, folgt $$f(x_1) = f(x_2)$$; weil $$f$$ injektiv ist, folgt $$x_1 = x_2$$.

*Surjektiv:* Sei $$z \in P$$. Weil $$g$$ surjektiv ist, gibt es $$y \in N$$ mit $$g(y) = z$$. Weil $$f$$ surjektiv ist, gibt es $$x \in M$$ mit $$f(x) = y$$. Dann ist $$(g \circ f)(x) = z$$.

*Bijektiv:* Die beiden Fälle zusammen.

</details>

**Umkehrung, teilweise (Ergänzung).** Ist $$g \circ f$$ injektiv, so ist $$f$$ injektiv; ist $$g \circ f$$ surjektiv, so ist $$g$$ surjektiv. (Beweis: $$f(x_1) = f(x_2) \Rightarrow g(f(x_1)) = g(f(x_2)) \Rightarrow x_1 = x_2$$; und jedes $$z = g(f(x))$$ hat das Urbild $$f(x)$$ unter $$g$$.) Mehr gilt nicht: $$f: \{0\} \to \{0,1\}$$, $$g: \{0,1\} \to \{0\}$$ gibt $$g \circ f = \mathrm{id}_{\{0\}}$$, aber $$g$$ ist nicht injektiv und $$f$$ nicht surjektiv.

**2.5.6 Proposition.** Die Einschränkung einer injektiven Funktion ist injektiv; $$\tilde f$$ ist surjektiv $$\Leftrightarrow f(\tilde M) = \tilde N$$.

**2.5.7 Definition.** $$g: N \to M$$ heißt **Linksinverse** von $$f$$, wenn $$g \circ f = \mathrm{id}_M$$; **Rechtsinverse**, wenn $$f \circ g = \mathrm{id}_N$$; **Inverse**, wenn beides gilt.

**2.5.8 Lemma (B).** Ist $$g_l$$ Linksinverse und $$g_r$$ Rechtsinverse von $$f$$, so gilt $$g_l = g_r$$, und diese Funktion ist Inverse von $$f$$:

$$
g_l = g_l \circ \mathrm{id}_N = g_l \circ (f \circ g_r) = (g_l \circ f) \circ g_r = \mathrm{id}_M \circ g_r = g_r
$$

Jedes Gleichheitszeichen hat eine Begründung: 2.4.6 (Identität), Voraussetzung Rechtsinverse, 2.4.6 (Assoziativität), Voraussetzung Linksinverse, 2.4.6. Genau diese Begründungen werden in Prüfungen erwartet.

**2.5.9 Korollar.** $$f$$ hat höchstens eine Inverse, bezeichnet $$f^{-1}$$. (Zwei Inversen $$g, h$$: $$g$$ ist Links-, $$h$$ Rechtsinverse, also $$g = h$$ nach 2.5.8.)

**2.5.10 Satz (B).** Für nichtleere $$M, N$$ und $$f: M \to N$$ gilt:
(1) $$f$$ injektiv $$\Leftrightarrow$$ $$f$$ hat eine Linksinverse;
(2) $$f$$ surjektiv $$\Leftrightarrow$$ $$f$$ hat eine Rechtsinverse;
(3) $$f$$ bijektiv $$\Leftrightarrow$$ $$f$$ hat eine Inverse.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

**(1) „⇒“:** Wähle ein festes $$x_0 \in M$$ (geht, weil $$M \ne \emptyset$$). Für $$y \in f(M)$$ gibt es genau ein $$x$$ mit $$f(x) = y$$ (mindestens eins nach Definition von $$f(M)$$, höchstens eins wegen der Injektivität). Definiere

$$
g(y) = \begin{cases} \text{das eindeutige } x \text{ mit } f(x) = y, & y \in f(M),\\ x_0, & y \notin f(M). \end{cases}
$$

Formal ist $$g$$ die inverse Relation $$f^{-1} = \{(y,x) : (x,y) \in f\}$$ auf $$f(M)$$, außerhalb konstant $$x_0$$. Für $$x \in M$$ ist $$f(x) \in f(M)$$, also $$g(f(x)) = x$$. Somit $$g \circ f = \mathrm{id}_M$$.

**(1) „⇐“:** Sei $$g \circ f = \mathrm{id}_M$$ und $$f(x_1) = f(x_2)$$. Dann $$x_1 = g(f(x_1)) = g(f(x_2)) = x_2$$.

**(2) „⇒“:** Zu jedem $$y \in N$$ ist die Menge $$f^{-1}(\{y\})$$ nicht leer (Surjektivität). Wähle aus jeder ein Element $$x_y$$ und setze $$g(y) = x_y$$. (Das gleichzeitige Auswählen ist genau das **Auswahlaxiom**.) Dann $$f(g(y)) = f(x_y) = y$$, also $$f \circ g = \mathrm{id}_N$$.

**(2) „⇐“:** Sei $$f \circ g = \mathrm{id}_N$$ und $$y \in N$$. Dann ist $$x = g(y)$$ ein Urbild: $$f(x) = y$$.

**(3)** „⇒“: Nach (1) und (2) gibt es eine Links- und eine Rechtsinverse, nach 2.5.8 sind sie gleich und eine Inverse. „⇐“: Eine Inverse ist Links- und Rechtsinverse, also ist $$f$$ nach (1) und (2) injektiv und surjektiv.

</details>

**Beispiel.** $$S: \mathbb N \to \mathbb N$$, $$n \mapsto n + 1$$ ist injektiv, aber nicht surjektiv. Linksinversen gibt es viele: $$g(n) = n - 1$$ für $$n \ge 1$$ und $$g(0)$$ beliebig. Eine Rechtsinverse gibt es nicht, weil kein $$g$$ mit $$S(g(0)) = 0$$ existiert.

**2.5.14 Satz (B, Verfeinerung von 2.3.3).** Die Abbildung $$\Phi$$, die einer Äquivalenzrelation $$R$$ auf $$M$$ ihre Faktormenge $$\{[x]_R : x \in M\}$$ zuordnet, ist eine Bijektion von der Menge aller Äquivalenzrelationen auf die Menge aller Partitionen von $$M$$; ihre Inverse ist $$\Psi: Q \mapsto R_Q$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Nach 2.3.3 sind $$\Phi$$ und $$\Psi$$ wohldefiniert (sie landen in der richtigen Menge). Nach 2.5.10 (3) genügt es zu zeigen, dass $$\Psi$$ Inverse von $$\Phi$$ ist.

*$$\Psi \circ \Phi = \mathrm{id}$$:* Sei $$R$$ eine Äquivalenzrelation. $$(x,y) \in R_{M/R}$$ heißt: Es gibt eine Klasse $$[z]$$ mit $$x, y \in [z]$$, also $$zRx$$ und $$zRy$$, also $$xRy$$. Umgekehrt: Aus $$xRy$$ folgt $$x, y \in [x]$$. Somit $$R_{M/R} = R$$.

*$$\Phi \circ \Psi = \mathrm{id}$$:* Nach 2.3.3 (2) sind die Klassen von $$R_Q$$ genau die Blöcke von $$Q$$, also $$M/R_Q = Q$$.

</details>

**2.5.16 Definition.** Die **Transposition** $$\tau_{i,j}$$ vertauscht $$i$$ und $$j$$ und lässt alle anderen Elemente fest. $$\mathrm{Sym}(M)$$ ist die Menge der Bijektionen $$M \to M$$. Es gilt $$\tau_{i,j} \circ \tau_{i,j} = \mathrm{id}$$; Transpositionen sind also ihre eigene Inverse.

### 3.1 Der Zahlbegriff

**3.1.1 Definition (Peano-Axiome).** Ein Tripel $$\langle X, x_0, f \rangle$$ mit $$x_0 \in X$$ und $$f: X \to X$$ heißt **natürliche Zahlen**, wenn

$$
\begin{aligned}
&\text{(Nat1)}\ f\ \text{ist injektiv}, \qquad \text{(Nat2)}\ x_0 \notin f(X),\\
&\text{(Nat3)}\ \forall M \subseteq X:\ \bigl(x_0 \in M\ \wedge\ f(M) \subseteq M\bigr) \Rightarrow M = X \quad \text{(Induktionsaxiom)}
\end{aligned}
$$

Schreibweise: $$\langle \mathbb N, 0, S \rangle$$ mit der Nachfolgerfunktion $$S$$. In diesem Skript ist $$0 \in \mathbb N$$.

**Intuition.** (Nat1): Verschiedene Zahlen haben verschiedene Nachfolger, die Kette läuft nie in einen Kreis zurück. (Nat2): $$0$$ ist niemandes Nachfolger, die Kette hat einen Anfang. (Nat3): Außer dem, was man von $$0$$ aus durch Weiterzählen erreicht, gibt es nichts.

**3.1.2 Satz (Rekursionssatz, B).** Ist $$Y$$ eine Menge, $$y_0 \in Y$$ und $$g: Y \to Y$$, so gibt es genau eine Funktion $$\varphi: X \to Y$$ mit

$$
\varphi(x_0) = y_0, \qquad \varphi \circ f = g \circ \varphi
$$

Das ist die Rechtfertigung für jede rekursive Definition: $$\varphi(0) = y_0$$ und $$\varphi(n+1) = g(\varphi(n))$$ legt $$\varphi$$ eindeutig fest.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

**Existenz.** Nenne $$R \subseteq X \times Y$$ *zulässig*, wenn $$(x_0, y_0) \in R$$ und $$(x,y) \in R \Rightarrow (f(x), g(y)) \in R$$. Zulässige Relationen gibt es (z. B. $$X \times Y$$). Sei $$\varphi$$ der Durchschnitt aller zulässigen Relationen. $$\varphi$$ ist selbst zulässig (jede Bedingung gilt in jeder zulässigen Relation) und die kleinste zulässige Relation.

Zu zeigen ist, dass $$\varphi$$ eine Funktion ist. Sei $$M = \{x \in X : \text{es gibt genau ein } y \text{ mit } (x,y) \in \varphi\}$$. Wir zeigen $$M = X$$ mit (Nat3).

*$$x_0 \in M$$:* $$(x_0,y_0) \in \varphi$$. Angenommen, es gibt auch $$(x_0, y) \in \varphi$$ mit $$y \ne y_0$$. Dann ist $$\varphi' = \varphi \setminus \{(x_0, y)\}$$ noch zulässig: $$(x_0,y_0)$$ ist drin, und ein Paar der Form $$(f(x), g(y'))$$ ist nie $$(x_0, y)$$, weil $$x_0 \notin f(X)$$ (Nat2). Das widerspricht der Minimalität von $$\varphi$$.

*$$x \in M \Rightarrow f(x) \in M$$:* Sei $$y$$ das eindeutige Element mit $$(x,y) \in \varphi$$. Dann ist $$(f(x), g(y)) \in \varphi$$. Angenommen, $$(f(x), z) \in \varphi$$ mit $$z \ne g(y)$$. Setze $$\varphi' = \varphi \setminus \{(f(x), z)\}$$. $$(x_0,y_0) \in \varphi'$$, weil $$f(x) \ne x_0$$ (Nat2). Ist $$(x',y') \in \varphi'$$, so ist $$(f(x'), g(y')) \in \varphi$$; wäre es gleich $$(f(x), z)$$, dann $$f(x') = f(x)$$, also $$x' = x$$ (Nat1), also $$y' = y$$ (weil $$x \in M$$), also $$g(y') = g(y) \ne z$$, Widerspruch. Somit ist $$\varphi'$$ zulässig und kleiner als $$\varphi$$, Widerspruch.

Nach (Nat3) ist $$M = X$$, also $$\varphi: X \to Y$$ eine Funktion. Zulässigkeit heißt dann genau $$\varphi(x_0) = y_0$$ und $$\varphi(f(x)) = g(\varphi(x))$$.

**Eindeutigkeit.** Erfüllt auch $$\psi$$ beide Gleichungen, sei $$M = \{x : \varphi(x) = \psi(x)\}$$. Es gilt $$x_0 \in M$$, und aus $$x \in M$$ folgt $$\varphi(f(x)) = g(\varphi(x)) = g(\psi(x)) = \psi(f(x))$$. Nach (Nat3) ist $$M = X$$.

</details>

**3.1.3 Satz (Eindeutigkeit von $$\mathbb N$$).** Je zwei Modelle $$\langle X, x_0, f \rangle$$, $$\langle Y, y_0, g \rangle$$ der Peano-Axiome sind über das $$\varphi$$ aus 3.1.2 bijektiv aufeinander abgebildet.

<details class="beweis" markdown="1">
<summary>Beweisidee</summary>

Der Rekursionssatz liefert $$\varphi: X \to Y$$ und (mit vertauschten Rollen) $$\psi: Y \to X$$. Die Funktion $$\psi \circ \varphi: X \to X$$ erfüllt $$(\psi \circ \varphi)(x_0) = x_0$$ und $$(\psi \circ \varphi) \circ f = \psi \circ g \circ \varphi = f \circ (\psi \circ \varphi)$$. Dieselben Gleichungen erfüllt $$\mathrm{id}_X$$. Wegen der Eindeutigkeit im Rekursionssatz (mit $$Y = X$$, $$g = f$$) ist $$\psi \circ \varphi = \mathrm{id}_X$$; genauso $$\varphi \circ \psi = \mathrm{id}_Y$$. Also ist $$\varphi$$ bijektiv (2.5.10).

</details>

**3.1.5 Proposition.** $$\mathbb N = \{0\} \cup S(\mathbb N)$$, und jedes $$n$$ ist $$n = S^{(n)}(0)$$ ($$n$$-fach iterierter Nachfolger).

<details class="beweis" markdown="1">
<summary>Beweis des ersten Teils</summary>

Sei $$M = \{0\} \cup S(\mathbb N)$$. Dann $$0 \in M$$ und $$S(M) \subseteq S(\mathbb N) \subseteq M$$. Nach (Nat3) ist $$M = \mathbb N$$. Jede Zahl ist also $$0$$ oder ein Nachfolger.

</details>

**3.1.6 Satz (Vollständige Induktion, B).**

$$
\Bigl(A(0)\ \wedge\ \forall n \in \mathbb N:\ A(n) \Rightarrow A(S(n))\Bigr)\ \Longrightarrow\ \forall n \in \mathbb N: A(n)
$$

*Beweis:* $$M = \{n : A(n) \text{ wahr}\}$$ erfüllt $$0 \in M$$ und $$S(M) \subseteq M$$, also nach (Nat3) $$M = \mathbb N$$.

**Schema für Induktionsbeweise**

1. **Induktionsanfang (IA):** $$A(0)$$ nachrechnen (bzw. $$A(k)$$ beim Startwert $$k$$).
2. **Induktionsvoraussetzung (IV):** „Sei $$n \in \mathbb N$$ beliebig, und es gelte $$A(n)$$.“
3. **Induktionsschritt (IS):** $$A(n+1)$$ herleiten und die Stelle markieren, an der die IV verwendet wird.

**Beispiel (Gauß).** Für alle $$n \in \mathbb N$$ gilt $$\sum_{k=0}^{n} k = \frac{n(n+1)}{2}$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

*IA:* $$n = 0$$: links $$0$$, rechts $$\frac{0 \cdot 1}{2} = 0$$.

*IS:* Es gelte $$\sum_{k=0}^{n} k = \frac{n(n+1)}{2}$$. Dann

$$
\sum_{k=0}^{n+1} k = \sum_{k=0}^{n} k + (n+1) \overset{\text{IV}}{=} \frac{n(n+1)}{2} + (n+1) = \frac{(n+1)(n+2)}{2}.
$$

Das ist $$A(n+1)$$.

</details>

**Typische Fehler bei Induktion**

- IA vergessen: „$$A(n) \Rightarrow A(n+1)$$“ gilt etwa für $$A(n)$$: „$$n = n + 1$$“, trotzdem ist $$A$$ nie wahr.
- IV als Behauptung für alle $$n$$ formulieren („Es gelte $$A(n)$$ für alle $$n$$“). Das ist genau das, was man beweisen will.
- Im Schritt $$A(n+1)$$ annehmen und auf etwas Wahres zurückrechnen. Die Schlussrichtung muss von $$A(n)$$ zu $$A(n+1)$$ gehen.

**3.1.8 Lemma.** Rechenregeln für Iterierte $$f^{(k)}$$, u. a. $$f^{(l)} \circ f^{(k)} = f^{(l+k)}$$ (im Skript über $$S$$ notiert); Iterierte injektiver (surjektiver) Funktionen sind injektiv (surjektiv).

**3.1.9 Lemma.** Aus $$n = S^{(k)}(n)$$ folgt $$k = 0$$; aus $$S^{(k)}(n) = 0$$ folgt $$k = n = 0$$. (Erster indirekter Beweis bzw. Widerspruchsbeweis im Skript.)

### 3.2 Die Anordnung der natürlichen Zahlen

**3.2.1 Definition.** $$m \le n :\Leftrightarrow \exists l \in \mathbb N: n = S^{(l)}(m)$$; $$m < n :\Leftrightarrow m \le n \wedge m \ne n$$.

**3.2.2 Satz.** $$\le$$ ist reflexiv, antisymmetrisch und transitiv (und total: $$m \le n$$ oder $$n \le m$$); jedes $$a \ne 0$$ hat genau einen Vorgänger $$b$$ mit $$a = S(b)$$. **Wohlordnung (B):** Jede nichtleere Teilmenge von $$\mathbb N$$ hat ein kleinstes Element.

<details class="beweis" markdown="1">
<summary>Beweis der Wohlordnung</summary>

Sei $$A \subseteq \mathbb N$$ ohne kleinstes Element. Wir zeigen $$A = \emptyset$$. Dazu sei

$$
M = \{n \in \mathbb N : \forall m \le n:\ m \notin A\}.
$$

*$$0 \in M$$:* Sonst wäre $$0 \in A$$, und $$0$$ wäre kleinstes Element von $$A$$, weil $$0 \le a$$ für alle $$a$$.

*$$n \in M \Rightarrow n + 1 \in M$$:* Sei $$n \in M$$. Die $$m \le n + 1$$ sind die $$m \le n$$ und $$m = n + 1$$. Die ersten liegen nicht in $$A$$. Läge $$n + 1$$ in $$A$$, so wäre jedes $$a \in A$$ wegen $$a \not\le n$$ (Totalität) $$\ge n + 1$$, also $$n + 1$$ das kleinste Element. Widerspruch, also $$n + 1 \in M$$.

Nach Induktion ist $$M = \mathbb N$$. Jedes $$n$$ liegt also nicht in $$A$$ (wegen $$n \le n$$), d. h. $$A = \emptyset$$.

</details>

**3.2.5 Satz (Starke Induktion, B).**

$$
\Bigl(\forall n \in \mathbb N:\ \bigl(\forall m < n: A(m)\bigr) \Rightarrow A(n)\Bigr)\ \Longrightarrow\ \forall n \in \mathbb N: A(n)
$$

<details class="beweis" markdown="1">
<summary>Beweis (per Kontraposition mit der Wohlordnung)</summary>

Angenommen, $$M = \{n : A(n) \text{ falsch}\}$$ ist nicht leer. Nach der Wohlordnung hat $$M$$ ein kleinstes Element $$n_0$$. Für alle $$m < n_0$$ ist $$m \notin M$$, also gilt $$A(m)$$. Nach Voraussetzung gilt dann $$A(n_0)$$, im Widerspruch zu $$n_0 \in M$$.

Bemerkung: Ein separater Induktionsanfang ist nicht nötig. Für $$n = 0$$ ist „$$\forall m < 0: A(m)$$“ leer wahr, die Voraussetzung verlangt also schon $$A(0)$$.

</details>

### 3.3 Algebraische Operationen

**3.3.1 / 3.3.4 Definition.** $$m + n = S^{(n)}(m)$$ und $$m \cdot n = (S^{(m)})^{(n)}(0)$$; insbesondere $$S(n) = n + 1$$. Daraus folgen die rekursiven Gleichungen

$$
m + 0 = m, \quad m + S(n) = S(m + n), \qquad m \cdot 0 = 0, \quad m \cdot S(n) = m \cdot n + m.
$$

**3.3.2 / 3.3.5 Satz.** $$+$$ und $$\cdot$$ sind assoziativ und kommutativ, haben die neutralen Elemente $$0$$ bzw. $$1$$, erfüllen die Kürzungsregel (bei $$\cdot$$ für $$c \ne 0$$), und $$a \cdot 0 = 0$$.

<details class="beweis" markdown="1">
<summary>Beispielbeweis: Assoziativität der Addition (Induktion nach c)</summary>

Behauptung: $$(a + b) + c = a + (b + c)$$ für alle $$a, b, c$$.

*IA:* $$(a + b) + 0 = a + b = a + (b + 0)$$.

*IS:* Es gelte die Behauptung für $$c$$. Dann

$$
(a + b) + S(c) = S\bigl((a + b) + c\bigr) \overset{\text{IV}}{=} S\bigl(a + (b + c)\bigr) = a + S(b + c) = a + \bigl(b + S(c)\bigr).
$$

Jeder Schritt außer dem markierten ist die rekursive Gleichung $$m + S(n) = S(m + n)$$.

</details>

**3.3.6 Satz.** Distributivgesetz $$a(b + c) = ab + ac$$; Monotonie: $$a < b \Leftrightarrow a + c < b + c$$, und für $$c \ne 0$$: $$a < b \Leftrightarrow ac < bc$$.

**3.3.7–3.3.9 Korollare (Induktionsvarianten).**

- *Induktion ab einem Startwert $$k$$:* $$A(k)$$ und $$A(n) \Rightarrow A(n+1)$$ für $$n \ge k$$ liefern $$A(n)$$ für alle $$n \ge k$$.
- *Induktion mit $$k+1$$ Anfangswerten:* $$A(0), \dots, A(k)$$ und $$A(n) \wedge \dots \wedge A(n+k) \Rightarrow A(n+k+1)$$.
- *Starke Induktion ab $$k$$.*

**Beispiel (Startwert).** $$2^n > n^2$$ für alle $$n \ge 5$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

*IA:* $$2^5 = 32 > 25 = 5^2$$.

*IS:* Sei $$n \ge 5$$ mit $$2^n > n^2$$. Dann $$2^{n+1} = 2 \cdot 2^n > 2n^2$$. Es bleibt $$2n^2 \ge (n+1)^2$$ zu zeigen, also $$n^2 - 2n - 1 \ge 0$$, also $$(n-1)^2 \ge 2$$. Das gilt für $$n \ge 3$$, erst recht für $$n \ge 5$$.

(Für $$n = 2, 3, 4$$ ist die Aussage falsch: $$4 \not> 4$$, $$8 \not> 9$$, $$16 \not> 16$$. Der Startwert ist also wirklich nötig.)

</details>

**Beispiel (zwei Anfangswerte).** Für die Fibonacci-Zahlen $$F_0 = 0$$, $$F_1 = 1$$, $$F_{n+2} = F_{n+1} + F_n$$ gilt $$F_n < 2^n$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

*IA:* $$F_0 = 0 < 1$$ und $$F_1 = 1 < 2$$.

*IS:* Gelte $$F_n < 2^n$$ und $$F_{n+1} < 2^{n+1}$$. Dann $$F_{n+2} = F_{n+1} + F_n < 2^{n+1} + 2^n = 3 \cdot 2^n < 4 \cdot 2^n = 2^{n+2}$$.

Ein Anfangswert reicht hier nicht, weil der Schritt auf die beiden Vorgänger zugreift.

</details>

### 3.4 Das Schubfachprinzip

Sei $$M_n = \{k \in \mathbb N : k < n\} = \{0, 1, \dots, n-1\}$$, insbesondere $$M_0 = \emptyset$$.

**3.4.1 Satz (Schubfachprinzip, B).** Für $$m > n$$ gibt es keine injektive Funktion $$M_m \to M_n$$. („Verteilt man $$m$$ Gegenstände auf $$n < m$$ Schubladen, liegen in einer Schublade mindestens zwei.“)

<details class="beweis" markdown="1">
<summary>Beweis (Induktion nach n)</summary>

*IA $$n = 0$$:* Für $$m > 0$$ ist $$M_m \ne \emptyset$$, und es gibt überhaupt keine Funktion von einer nichtleeren Menge nach $$\emptyset$$.

*IS $$n \to n + 1$$:* Angenommen, $$f: M_m \to M_{n+1}$$ ist injektiv mit $$m > n + 1$$.

- Fall 1: $$n \notin f(M_m)$$. Dann ist $$f$$ eine injektive Funktion $$M_m \to M_n$$ mit $$m > n$$, Widerspruch zur IV.
- Fall 2: $$f(k) = n$$ für ein (wegen Injektivität eindeutiges) $$k$$. Setze $$h = f \circ \tau_{k,m-1}$$. Dann ist $$h$$ injektiv und $$h(m-1) = n$$. Für $$i < m - 1$$ ist $$h(i) \ne n$$, also bildet die Einschränkung von $$h$$ auf $$M_{m-1}$$ injektiv nach $$M_n$$ ab. Wegen $$m - 1 > n$$ widerspricht das der IV.

</details>

**Anwendung (Ergänzung).** Unter 13 Personen haben zwei im selben Monat Geburtstag. Unter beliebigen $$n + 1$$ ganzen Zahlen haben zwei denselben Rest modulo $$n$$, ihre Differenz ist also durch $$n$$ teilbar.

**3.4.3 Definition.** $$M$$ ist **endlich**, wenn es $$n \in \mathbb N$$ und eine Bijektion $$M \to M_n$$ gibt; dann $$\lvert M\rvert = n$$. Das ist wohldefiniert nach 3.4.1: Gäbe es Bijektionen auf $$M_n$$ und $$M_m$$ mit $$m > n$$, so ergäbe ihre Verkettung eine injektive Funktion $$M_m \to M_n$$. Sonst heißt $$M$$ **unendlich**.

**3.4.5 Satz (B).** Für endliches $$M$$ und $$f: M \to M$$ gilt: $$f$$ injektiv $$\Leftrightarrow$$ $$f$$ surjektiv. Für unendliche Mengen ist das falsch: $$S: \mathbb N \to \mathbb N$$ ist injektiv, aber nicht surjektiv.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Über eine Bijektion $$M \to M_n$$ darf man $$M = M_n$$ annehmen (Komposition mit Bijektionen erhält Injektivität und Surjektivität, 2.5.5).

**Injektiv ⇒ surjektiv**, Induktion nach $$n$$. *IA:* $$n = 0$$, die leere Funktion ist surjektiv. *IS:* Sei $$f: M_{n+1} \to M_{n+1}$$ injektiv. Setze $$g = \tau_{f(n),n} \circ f$$. Dann ist $$g$$ injektiv mit $$g(n) = n$$, und für $$i < n$$ ist $$g(i) \ne n$$. Die Einschränkung von $$g$$ auf $$M_n$$ ist eine injektive Funktion $$M_n \to M_n$$, nach IV also surjektiv. Zusammen mit $$g(n) = n$$ ist $$g$$ surjektiv auf $$M_{n+1}$$. Dann ist $$f = \tau_{f(n),n} \circ g$$ als Verkettung surjektiver Funktionen surjektiv.

**Surjektiv ⇒ injektiv:** Ist $$f$$ surjektiv, hat es nach 2.5.10 eine Rechtsinverse $$g$$ mit $$f \circ g = \mathrm{id}$$. Also hat $$g$$ die Linksinverse $$f$$ und ist injektiv, nach dem ersten Teil also bijektiv. Aus $$f \circ g = \mathrm{id}$$ folgt $$f = f \circ g \circ g^{-1} = g^{-1}$$, also ist $$f$$ bijektiv und insbesondere injektiv.

</details>

**3.4.6 Lemma.** Es gibt genau eine Funktion $$n \mapsto n!$$ mit $$0! = 1$$ und $$(n+1)! = (n+1) \cdot n!$$ (Anwendung des Rekursionssatzes auf Paare $$(n, n!)$$, weil der Schritt auch $$n$$ selbst braucht).

**3.4.7 Satz.** $$\lvert \mathrm{Sym}(M_n)\rvert = n!$$.

<details class="beweis" markdown="1">
<summary>Beweisidee</summary>

Induktion nach $$n$$. Eine Bijektion $$\sigma$$ von $$M_{n+1}$$ ist festgelegt durch den Wert $$\sigma(n)$$ ($$n+1$$ Möglichkeiten) und eine Bijektion der restlichen $$n$$ Elemente auf die restlichen $$n$$ Werte ($$n!$$ Möglichkeiten nach IV). Zusammen $$(n+1) \cdot n! = (n+1)!$$.

</details>

### 3.5 Teilbarkeit und Primzahlen

**3.5.1 Definition.** Für $$m, n \in \mathbb N \setminus \{0\}$$: $$m \mid n :\Leftrightarrow \exists l \in \mathbb N: n = m \cdot l$$.

**3.5.2 Definition.** $$p$$ heißt **Primzahl**, wenn $$p \ge 2$$ und $$p$$ keine Teiler außer $$1$$ und $$p$$ hat; $$\mathbb P$$ ist die Menge der Primzahlen. ($$1$$ ist keine Primzahl, sonst wäre die Zerlegung in 3.5.3 nicht eindeutig.)

**3.5.3 Satz (B).** Jedes $$n \ge 2$$ ist ein Produkt von (nicht notwendig verschiedenen) Primzahlen:

$$
n = \prod_{i=0}^{k} p_i
$$

<details class="beweis" markdown="1">
<summary>Beweis (starke Induktion ab 2)</summary>

Sei $$n \ge 2$$, und die Aussage gelte für alle $$m$$ mit $$2 \le m < n$$.

- Ist $$n$$ prim, ist $$n$$ selbst das Produkt (mit $$k = 0$$).
- Sonst hat $$n$$ einen Teiler $$a$$ mit $$1 < a < n$$, also $$n = a \cdot b$$ mit $$1 < b < n$$. Nach IV sind $$a$$ und $$b$$ Produkte von Primzahlen. Hängt man die beiden Produkte aneinander, ist auch $$n$$ eines.

</details>

Das Skript beweist nur die **Existenz** der Zerlegung. Die **Eindeutigkeit** (bis auf Reihenfolge) kommt in ADM als Fundamentalsatz der Arithmetik.
{: .notice--info}

**3.5.4 Satz (Euklid, B).** Es gibt unendlich viele Primzahlen.

<details class="beweis" markdown="1">
<summary>Beweis (indirekt)</summary>

Angenommen, $$\mathbb P = \{p_1, \dots, p_N\}$$ ist endlich. Setze $$n = 1 + p_1 p_2 \cdots p_N$$. Wegen $$n \ge 2$$ hat $$n$$ nach 3.5.3 einen Primteiler $$p$$, und $$p = p_i$$ für ein $$i$$. Dann teilt $$p$$ sowohl $$n$$ als auch $$p_1 \cdots p_N$$, also auch die Differenz $$n - p_1 \cdots p_N = 1$$. Das ist unmöglich, weil $$p \ge 2$$.

</details>

Der Beweis sagt **nicht**, dass $$1 + p_1 \cdots p_N$$ selbst prim ist: $$2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 + 1 = 30031 = 59 \cdot 509$$. Er sagt nur, dass seine Primteiler in der Liste fehlen.
{: .notice--warning}

## Beweisliste

Alle mit (B) markierten Sätze auf einen Blick, für den zweiten Durchgang in den Weihnachtsferien: jeden einmal ohne Vorlage aufschreiben.

| Nr. | Aussage | Technik | Kernidee |
|---|---|---|---|
| 2.2.6 | Schnitt von Äquivalenzrelationen | direkt | jede Eigenschaft einzeln in beiden Relationen |
| 2.3.3 | Äquivalenzrelationen ↔ Partitionen | direkt, je drei Axiome | gemeinsames Element ⇒ gleiche Klasse |
| 2.4.6 | Assoziativität der Komposition | punktweise Gleichheit | Werte einsetzen |
| 2.5.5 | Verkettung erhält inj./surj./bij. | direkt | Injektivität zweimal anwenden; Urbilder hintereinander holen |
| 2.5.8 | Links- = Rechtsinverse | Gleichungskette | $$g_l = g_l \circ f \circ g_r = g_r$$ |
| 2.5.10 | inj./surj./bij. ⇔ Links-/Rechts-/Inverse | zwei Richtungen | inverse Relation plus $$x_0$$; Urbild auswählen |
| 2.5.14 | Bijektion Äquivalenzrelationen ↔ Partitionen | Inverse angeben | $$\Psi \circ \Phi = \mathrm{id}$$, $$\Phi \circ \Psi = \mathrm{id}$$ |
| 3.1.2 | Rekursionssatz | kleinste zulässige Relation, Induktion | Minimalität + (Nat1), (Nat2) |
| 3.1.6 | Vollständige Induktion | (Nat3) | Menge der wahren $$n$$ |
| 3.2.2 | Wohlordnung | Induktion | $$M = $$ „nichts $$\le n$$ liegt in $$A$$“ |
| 3.2.5 | Starke Induktion | Kontraposition, Wohlordnung | kleinstes Gegenbeispiel |
| 3.4.1 | Schubfachprinzip | Induktion, Fallunterscheidung | Transposition schiebt das Urbild von $$n$$ ans Ende |
| 3.4.5 | endlich: injektiv ⇔ surjektiv | Induktion + 2.5.10 | Fixpunkt erzwingen, auf $$M_n$$ einschränken |
| 3.5.3 | Primfaktorzerlegung existiert | starke Induktion | prim oder $$n = ab$$ |
| 3.5.4 | unendlich viele Primzahlen | Widerspruch | $$1 + p_1 \cdots p_N$$ |

## Selbsttest

<details class="beweis" markdown="1">
<summary>1. Negiere: „Jede Zahl n ≥ 2 hat einen Primteiler.“</summary>

Formal: $$\forall n \ge 2\ \exists p \in \mathbb P: p \mid n$$. Negation: $$\exists n \ge 2\ \forall p \in \mathbb P: p \nmid n$$, also „Es gibt eine Zahl $$n \ge 2$$, die durch keine Primzahl teilbar ist.“

</details>

<details class="beweis" markdown="1">
<summary>2. Ist „x ~ y, falls x und y höchstens Abstand 1 haben“ auf ℝ eine Äquivalenzrelation?</summary>

Nein. Reflexiv und symmetrisch ja, aber nicht transitiv: $$0 \sim 1$$ und $$1 \sim 2$$, aber $$0 \not\sim 2$$.

</details>

<details class="beweis" markdown="1">
<summary>3. Wie viele Äquivalenzrelationen gibt es auf {1, 2, 3}?</summary>

Nach 2.5.14 so viele wie Partitionen: $$\{\{1,2,3\}\}$$, drei Partitionen der Form $$\{\{a,b\},\{c\}\}$$ und $$\{\{1\},\{2\},\{3\}\}$$. Also **5** (die Bell-Zahl $$B_3$$).

</details>

<details class="beweis" markdown="1">
<summary>4. Gib eine surjektive, nicht injektive Funktion ℕ → ℕ und eine Rechtsinverse dazu an.</summary>

$$f(n) = \lfloor n/2 \rfloor$$ ist surjektiv ($$f(2k) = k$$) und nicht injektiv ($$f(0) = f(1)$$). Rechtsinverse: $$g(k) = 2k$$, denn $$f(g(k)) = k$$. Auch $$g(k) = 2k + 1$$ funktioniert, Rechtsinversen sind also nicht eindeutig.

</details>

<details class="beweis" markdown="1">
<summary>5. Wo steckt der Fehler? „Alle Pferde haben dieselbe Farbe: Induktion über die Anzahl n der Pferde …“</summary>

Im Schritt von $$n = 1$$ auf $$n = 2$$: Man nimmt die Pferde $$1, \dots, n$$ und $$2, \dots, n+1$$, die nach IV jeweils gleichfarbig sind, und schließt über ein gemeinsames Pferd. Für $$n = 1$$ sind die Gruppen $$\{1\}$$ und $$\{2\}$$ disjunkt, es gibt kein gemeinsames Pferd. Der Schritt gilt also nicht für **alle** $$n$$.

</details>

## Offene Punkte

- In TISS klären, ob EIMA 2026W belegt ist und ob es eine Leistungsfeststellung gibt.
- Übungsblätter EIMA 2025W von der LVA-Seite laden.
- Vorschlag für den Einstieg: mit 2.3–2.5 (Äquivalenzrelationen, Partitionen, Bijektivität) anfangen, weil das direkt in ADM-Test 1 kommt.

## Quellen

- Harald Woracek, *Einführung in das mathematische Arbeiten* (EIMA22)
- EIMA-LVA-Seite Praetorius, WS 2025/26
- ADM-Aufgabensammlung
- [Serlo *Mathe für Nicht-Freaks*](https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks)
