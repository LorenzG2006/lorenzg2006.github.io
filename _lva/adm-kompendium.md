---
title: "Algebra und Diskrete Mathematik für Informatik und Wirtschaftsinformatik – Kompendium"
kuerzel: ADM
lva_nr: "104.633"
typ: VU
semester: 2026W
ects: 9
sws: 6.0
status: laufend
tiss: "https://tiss.tuwien.ac.at/course/courseDetails.xhtml?courseNr=104633&semester=2026W"
excerpt: "ADM ausführlich: Lernquellen, Lernplan und die komplette Stoffzusammenfassung von Zahlentheorie bis Codierungstheorie mit Standardbeweisen und durchgerechneten Beispielen."
math: true
unlisted: true       # Entwurf, parallel zur kurzen LVA-Seite
---

{% include toc title="Inhalt" %}

## Überblick

ADM ist die große Mathe-LVA im ersten Semester: Zahlentheorie, Logik und Beweise, Mengen, Relationen und Funktionen, Kombinatorik, Differenzengleichungen, Graphentheorie, algebraische Strukturen, lineare Algebra und ein erster Blick auf algebraische Codierungstheorie. Ziel ist, einfache Beweise selbst zu führen, Rechenverfahren (Euklid, Chinesischer Restsatz, Gauß, Dijkstra, Rekursionen) sicher anzuwenden und die Begriffe so zu verstehen, dass man Theoriefragen beantworten kann.

| **LVA** | VU 104.633 Algebra und Diskrete Mathematik für Informatik und Wirtschaftsinformatik, 6 SWS, 9 ECTS |
| **Vortragender** | Gittenberger; [LVA-Seite](https://dmg.tuwien.ac.at/gittenberger/adm.html) |
| **Vorlesung** | Di/Do 8:15–9:45, Fr 8:15–9:00, AudiMax; Tafelvortrag gestreamt und aufgezeichnet (Link in TUWEL); letzte VO ca. Di 19.01. |
| **Buch** | Drmota, Gittenberger, Karigl, Panholzer: *Mathematik für Informatik*, Heldermann, 4. Aufl. 2014. ADM = Kapitel 1–3 (ohne Linearcodes, Tensoren) und Abschnitte 7.1–7.2 |
| **1. Test (45 min)** | im Rahmen der 7. Übungseinheit: Mi 02.12. bzw. Mo 07.12.2026; Stoff der Übungen 1–6 sowie der dazugehörende VO-Stoff |
| **2. Test (45 min)** | Übung 11: Mo 25.01. bzw. Mi 27.01.2027, Stoff der Übungen 7–10 und Grundlagen |
| **Prüfung** | 03.02.2027 (Montagsgruppen) bzw. 04.03.2027 (Mittwochsgruppen); TISS-Anmeldung im Jänner. 100 min, meist 3 praktische und 2 theoretische Aufgaben, keine Hilfsmittel |
| **Punkte** | VO 50 + UE max. 12 (Kreuzerl 1, Tafel 2, besserer Test 9) |
| **Zulassung zur Prüfung** | mindestens 60 % angekreuzt, Tafelleistung positiv, UE mindestens 5 Punkte |
| **Genügend** | ab 30 Gesamtpunkten |
| **Übungsabgabe** | angesagte Aufgaben in TUWEL bis 06:55 Uhr am Übungstag |

Der Prüfungsstoff umfasst ausdrücklich auch Themen, die in der Übung nicht drankommen, etwa die letzte Vorlesungswoche. Ob ich in einer Montags- oder Mittwochsgruppe bin, bestimmt Test- und Prüfungstermin.
{: .notice--info}

Die Stoffzusammenfassung ist nicht mit den Vorlesungsfolien abgeglichen. Gesichert ist die Buchzuordnung oben; Unterabschnittsnummern und Notation können abweichen. Offenes steht unter [Offene Punkte](#offene-punkte).
{: .notice--warning}

### Wofür ich welches Kapitel brauche

| Kapitel | Wofür |
|---|---|
| 1 Zahlentheorie | ADM-Test 1, RSA in Security-LVAs, modulare Arithmetik beim Hashing, Prüfziffern |
| 2 Logik und Beweise | jeder Beweis, Induktionsaufgaben 1–24, GDS Aussagenlogik |
| 3 Mengen, Relationen, Funktionen | ADM-Test 1, Datenbanken (Relationen), Algorithmen (Ordnungen, Mächtigkeit) |
| 4 Kombinatorik | Laufzeitanalyse, Wahrscheinlichkeitstheorie, Zählargumente |
| 5 Differenzengleichungen | Rekursionen in Algorithmen (Laufzeit von Divide and Conquer, Fibonacci) |
| 6 Graphentheorie | Algorithmen und Datenstrukturen, Netzwerke |
| 7 Algebraische Strukturen | Kryptographie, Codierungstheorie, Boolesche Algebra in GDS |
| 8 Lineare Algebra | Computergrafik, Machine Learning, Codierungstheorie, Analysis |
| 9 Codierungstheorie | Fehlererkennung und Fehlerkorrektur, Bezug zu GDS Kapitel 2 |

### Kapitel im Buch

Abgeglichen mit dem Inhaltsverzeichnis von Drmota, Gittenberger, Karigl, Panholzer: *Mathematik für Informatik*, 4. Auflage 2014.

| Kapitel hier | Buchabschnitte | Aufgabensammlung |
|---|---|---|
| 1 Zahlentheorie | 1.1 Zahlen, 1.2 Elementare Zahlentheorie | 1–76 |
| 2 Logik und Beweise | 1.3 Elementare Aussagenlogik (Induktion in 1.1) | 1–24, 77–90 |
| 3 Mengen, Relationen, Funktionen | 1.4 Mengen, 1.5 Relationen und Funktionen | 91–158 |
| 4 Kombinatorik | 2.1 Kombinatorik | 159–220 |
| 5 Differenzengleichungen | 7.1 Einführung, 7.2 erster Ordnung (7.3 zweiter Ordnung als Ergänzung) | 221–281 |
| 6 Graphentheorie | 2.2 Graphentheorie | 282–333 |
| 7 Algebraische Strukturen | 2.3 Algebraische Strukturen | 334–463 |
| 8 Lineare Algebra | 3.1–3.4, 3.6–3.8 (Vektoren bis Skalarprodukte) | 464–614 |
| 9 Codierungstheorie | 3.5 Gruppen- und Linearcodes, laut LVA nicht Stoff | – |

## Teil A1 – Kostenlose Lernquellen

Primärquellen sind Vorlesung, Folien und die Aufgabensammlung. Die externen Quellen helfen beim Verstehen und liefern zusätzliche Übungsaufgaben mit Lösungen.

### Die Quellen

| Quelle | Sprache | Wofür |
|---|---|---|
| Aufgabensammlung „ADM.pdf“ | DE | Übungsaufgaben auf Prüfungsniveau |
| [Serlo *Mathe für Nicht-Freaks*](https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks) | DE | Grundlagen, Induktion, lineare Algebra auf Deutsch |
| Modler, Kreh: *Tutorium Analysis 1 und Lineare Algebra 1* und *Tutorium Analysis 2 und Lineare Algebra 2* (Springer) | DE | lineare Algebra von Studierenden für Studierende erklärt, viele Beispiele |
| [EIMA-Kompendium](/tuwien/eima-kompendium/) | DE | Logik, Mengen, Relationen, Funktionen, Induktion ausführlich mit Beweisen |
| [GDS-Kompendium](/tuwien/gds-kompendium/) | DE | Codierungstheorie, Hamming-Abstand, Boolesche Logik |

### Thema → Quellen

| Kapitel | Quellen | Übungsaufgaben |
|---|---|---|
| 1 Zahlentheorie | Serlo | ADM 25–76 |
| 2 Logik und Beweise | EIMA-Kompendium, Serlo | ADM 1–24, 77–90 |
| 3 Mengen, Relationen, Funktionen | EIMA-Kompendium | ADM 91–158 |
| 4 Kombinatorik | Serlo | ADM 159–220 |
| 5 Differenzengleichungen | Serlo | ADM 221–281 |
| 6 Graphentheorie | Serlo | ADM 282–333 |
| 7 Algebraische Strukturen | Serlo (Algebra) | ADM 334–463 |
| 8 Lineare Algebra | Serlo (Lineare Algebra) | ADM 464–614 |
| 9 Codierungstheorie | GDS-Kompendium Kap. 2 | – (Zusatzstoff) |

## Teil A2 – Lernplan

Der Plan folgt der Reihenfolge der Aufgabensammlung (Nummern in Klammern). Zahlentheorie (Aufgaben 52–76) sowie Logik, Mengen und Relationen (77–135) liegen vor dem 16.11. Ziel ist, jede Woche den Übungsstoff vollständig anzukreuzen; ab 85 % gibt es volle Kreuzerlpunkte. Richtwert: **etwa 1 Stunde pro Werktag** plus ein Probetest am Wochenende. Weicht die Vorlesung ab, verschiebe ich Zeilen nach den in TUWEL angesagten Aufgabennummern.

| Woche | Stoff (Kapitel hier) | Aufgaben | Meilenstein |
|---|---|---|---|
| 16.–22.11. | 3 Funktionen, Mächtigkeit | 136–158 | – |
| 23.–29.11. | 4 Kombinatorik; Probetest 45 min | 159–220 | – |
| 30.11.–06.12. | Wiederholung Übungen 1–6 (Kap. 1–4) | gemischt | **ADM-Test 1** Mi 02.12. |
| 07.–13.12. | 5 Rekursionen, Differenzengleichungen | 221–281 | **ADM-Test 1** Mo 07.12. |
| 14.–20.12. | 6 Graphentheorie, Kruskal, Dijkstra | 282–333 | – |
| 21.12.–06.01. | 7 Permutationen, Gruppen; Ringe, Körper, Verbände | 334–420, 421–463 | Beweisliste bis Kap. 7 |
| 07.–17.01. | 8 Vektorräume, lineare Abbildungen, LGS, Determinanten, Eigenwerte | 464–614 | – |
| 18.–24.01. | Lineare Algebra wiederholen; Probetest | Fehlerliste | – |
| 25.–29.01. | Wiederholung Übungen 7–10 | gemischt | **ADM-Test 2** Mo 25. bzw. Mi 27.01. |
| 30.01.–03.02. | Altprüfungen unter 100 min, Theorieliste | Altprüfungen | **Prüfung** 03.02. (Montagsgruppen) |
| bis 04.03. | wöchentlich eine Altprüfung | Altprüfungen | **Prüfung** 04.03. (Mittwochsgruppen) |

**Wochenroutine**

- Montag bis Mittwoch: Kapitel lesen, jede Definition einmal in eigenen Worten aufschreiben, Beispiele selbst nachrechnen.
- Donnerstag und Freitag: Aufgaben aus der Aufgabensammlung ohne Lösung rechnen.
- Wochenende: einen **(B)**-Beweis ohne Vorlage aufschreiben und das Quiz zum Kapitel machen.

## Teil B – Stoffzusammenfassung

Mit **(B)** markierte Sätze sind Standardbeweise, die man ohne Vorlage können sollte. Beweise und längere Rechnungen sind zum Aufklappen. Alle Beispiele sind selbst gewählt und mit dem Computer nachgerechnet.

Der Stoff ist nicht mit den Folien der LVA 2026W abgeglichen. Die Kapitelreihenfolge folgt dem üblichen ADM-Aufbau. Notation (z. B. $$\mathbb N$$ mit oder ohne $$0$$) kann in der Vorlesung anders sein.
{: .notice--info}

### 1 Zahlentheorie

Zahlentheorie ist der Einstieg in ADM und der Kern von ADM-Test 1. Fast alles baut auf zwei Werkzeugen auf: der Division mit Rest und dem erweiterten euklidischen Algorithmus.

#### Teilbarkeit und Division mit Rest

**Definition.** Für $$a, b \in \mathbb Z$$ heißt $$a$$ **Teiler** von $$b$$, geschrieben $$a \mid b$$, wenn es ein $$k \in \mathbb Z$$ gibt mit $$b = k a$$. Sonst schreibt man $$a \nmid b$$.

**Rechenregeln.** Für alle $$a, b, c, x, y \in \mathbb Z$$:

$$
\begin{aligned}
&a \mid a, \qquad 1 \mid a, \qquad a \mid 0, \qquad 0 \mid a \Leftrightarrow a = 0,\\
&a \mid b \wedge b \mid c \Rightarrow a \mid c \qquad \text{(transitiv)},\\
&a \mid b \wedge a \mid c \Rightarrow a \mid (bx + cy) \qquad \text{(Linearkombinationen)},\\
&a \mid b \wedge b \mid a \Rightarrow a = \pm b, \qquad a \mid b \wedge b \ne 0 \Rightarrow \lvert a\rvert \le \lvert b\rvert.
\end{aligned}
$$

<details class="beweis" markdown="1">
<summary>Beweis der Regel für Linearkombinationen</summary>

Aus $$a \mid b$$ und $$a \mid c$$ gibt es $$k, l \in \mathbb Z$$ mit $$b = ka$$ und $$c = la$$. Dann ist $$bx + cy = kax + lay = (kx + ly)\, a$$ mit $$kx + ly \in \mathbb Z$$, also $$a \mid bx + cy$$. Diese Regel ist das Arbeitspferd fast aller Teilbarkeitsbeweise.

</details>

**Satz (Division mit Rest) (B).** Zu $$a \in \mathbb Z$$ und $$b \in \mathbb N$$, $$b \ge 1$$, gibt es eindeutige $$q, r \in \mathbb Z$$ mit

$$
a = q b + r, \qquad 0 \le r < b.
$$

Man schreibt $$q = a \operatorname{div} b$$ und $$r = a \bmod b$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

**Existenz.** Die Menge $$M = \{a - qb : q \in \mathbb Z\} \cap \mathbb N_0$$ ist nicht leer (für $$q = -\lvert a\rvert$$ ist $$a - qb = a + \lvert a\rvert b \ge 0$$). Nach dem Wohlordnungsprinzip hat $$M$$ ein kleinstes Element $$r = a - qb \ge 0$$. Wäre $$r \ge b$$, dann läge auch $$r - b = a - (q+1)b \ge 0$$ in $$M$$ und wäre kleiner als $$r$$. Widerspruch, also $$0 \le r < b$$.

**Eindeutigkeit.** Sei $$a = qb + r = q'b + r'$$ mit $$0 \le r, r' < b$$. Dann ist $$(q - q')b = r' - r$$, also $$b \mid r' - r$$. Wegen $$-b < r' - r < b$$ geht das nur für $$r' - r = 0$$. Dann ist $$(q - q')b = 0$$ und wegen $$b \ne 0$$ auch $$q = q'$$.

</details>

**Beispiel.** $$-17 = (-4) \cdot 5 + 3$$, also $$-17 \bmod 5 = 3$$. Der Rest ist nie negativ. Viele Programmiersprachen liefern mit `%` dagegen $$-2$$.

#### Größter gemeinsamer Teiler und euklidischer Algorithmus

**Definition.** $$d = \operatorname{ggT}(a, b)$$ ist der größte gemeinsame Teiler von $$a$$ und $$b$$ (nicht beide $$0$$). Gleichwertig: $$d \ge 0$$, $$d \mid a$$, $$d \mid b$$, und jeder gemeinsame Teiler $$t$$ erfüllt $$t \mid d$$. Gilt $$\operatorname{ggT}(a,b) = 1$$, heißen $$a, b$$ **teilerfremd**. Das **kgV** ist das kleinste gemeinsame positive Vielfache; für $$a, b \ge 1$$ gilt $$\operatorname{ggT}(a,b) \cdot \operatorname{kgV}(a,b) = ab$$.

**Lemma (B).** Für $$b \ge 1$$ gilt $$\operatorname{ggT}(a, b) = \operatorname{ggT}(b, a \bmod b)$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Sei $$a = qb + r$$. Ist $$t$$ ein gemeinsamer Teiler von $$a$$ und $$b$$, dann teilt $$t$$ auch $$r = a - qb$$ (Linearkombination). Ist umgekehrt $$t$$ ein gemeinsamer Teiler von $$b$$ und $$r$$, dann teilt $$t$$ auch $$a = qb + r$$. Die beiden Paare haben also **dieselben** gemeinsamen Teiler und damit denselben größten.

</details>

**Euklidischer Algorithmus.** Setze $$r_0 = a$$, $$r_1 = b$$ und rechne $$r_{k+1} = r_{k-1} \bmod r_k$$, bis ein Rest $$0$$ entsteht. Der letzte Rest ungleich $$0$$ ist der ggT. Der Algorithmus endet, weil die Reste streng fallen und nicht negativ sind.

**Satz von Bézout (B).** Zu $$a, b \in \mathbb Z$$ gibt es $$x, y \in \mathbb Z$$ mit

$$
\operatorname{ggT}(a,b) = xa + yb.
$$

Insbesondere sind $$a, b$$ genau dann teilerfremd, wenn $$xa + yb = 1$$ lösbar ist.

<details class="beweis" markdown="1">
<summary>Beweis über den erweiterten Algorithmus</summary>

Man führt zu jedem Rest $$r_k$$ Koeffizienten $$s_k, t_k$$ mit, sodass immer $$r_k = s_k a + t_k b$$ gilt. Start: $$r_0 = 1 \cdot a + 0 \cdot b$$ und $$r_1 = 0 \cdot a + 1 \cdot b$$. Mit $$q_k = r_{k-1} \operatorname{div} r_k$$ gilt

$$
r_{k+1} = r_{k-1} - q_k r_k = (s_{k-1} - q_k s_k)\, a + (t_{k-1} - q_k t_k)\, b,
$$

also bleibt die Invariante mit $$s_{k+1} = s_{k-1} - q_k s_k$$ und $$t_{k+1} = t_{k-1} - q_k t_k$$ erhalten (Induktion über $$k$$). Für den letzten Rest $$r_n = \operatorname{ggT}(a,b)$$ liefert sie die gesuchte Darstellung.

</details>

**Beispiel 1 (erweiterter Euklid als Tabelle).** $$\operatorname{ggT}(252, 198)$$. In Zeile $$k$$ steht $$q_k = r_{k-1} \operatorname{div} r_k$$; die nächste Zeile entsteht als „vorletzte Zeile minus $$q_k$$ mal letzte Zeile“.

| $$k$$ | $$r_k$$ | $$q_k$$ | $$s_k$$ | $$t_k$$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 252 | – | 1 | 0 |
| 1 | 198 | 1 | 0 | 1 |
| 2 | 54 | 3 | 1 | −1 |
| 3 | 36 | 1 | −3 | 4 |
| 4 | **18** | 2 | **4** | **−5** |
| 5 | 0 | | | |

Also $$\operatorname{ggT}(252, 198) = 18 = 4 \cdot 252 - 5 \cdot 198 = 1008 - 990$$. Probe in jeder Zeile: $$54 = 252 - 198$$, $$36 = -3 \cdot 252 + 4 \cdot 198 = -756 + 792$$.

**Beispiel 2 (Inverses modulo 43).** Gesucht ist $$x$$ mit $$17x \equiv 1 \pmod{43}$$.

| $$k$$ | $$r_k$$ | $$q_k$$ | $$s_k$$ | $$t_k$$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 43 | – | 1 | 0 |
| 1 | 17 | 2 | 0 | 1 |
| 2 | 9 | 1 | 1 | −2 |
| 3 | 8 | 1 | −1 | 3 |
| 4 | **1** | 8 | 2 | **−5** |
| 5 | 0 | | | |

$$1 = 2 \cdot 43 - 5 \cdot 17$$, also $$17 \cdot (-5) \equiv 1 \pmod{43}$$ und $$17^{-1} \equiv -5 \equiv 38 \pmod{43}$$. Probe: $$17 \cdot 38 = 646 = 15 \cdot 43 + 1$$.

#### Primzahlen und Fundamentalsatz

**Definition.** $$p \in \mathbb N$$ heißt **Primzahl**, wenn $$p \ge 2$$ und die einzigen positiven Teiler $$1$$ und $$p$$ sind. $$1$$ ist **keine** Primzahl.

**Lemma von Euklid (B).** Ist $$p$$ prim und $$p \mid ab$$, dann gilt $$p \mid a$$ oder $$p \mid b$$. Allgemeiner: Aus $$m \mid ab$$ und $$\operatorname{ggT}(m, a) = 1$$ folgt $$m \mid b$$.

<details class="beweis" markdown="1">
<summary>Beweis mit Bézout</summary>

Allgemeine Form: Wegen $$\operatorname{ggT}(m,a) = 1$$ gibt es $$x, y$$ mit $$xm + ya = 1$$. Multiplikation mit $$b$$ ergibt $$b = xmb + y(ab)$$. Beide Summanden sind durch $$m$$ teilbar ($$m \mid ab$$), also $$m \mid b$$.

Primzahlform: Gilt $$p \nmid a$$, dann ist $$\operatorname{ggT}(p, a) = 1$$, weil $$p$$ nur die Teiler $$1$$ und $$p$$ hat. Nach der allgemeinen Form folgt $$p \mid b$$.

</details>

**Fundamentalsatz der Arithmetik (B).** Jede natürliche Zahl $$n \ge 2$$ ist ein Produkt von Primzahlen, und diese Darstellung ist bis auf die Reihenfolge eindeutig:

$$
n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}, \qquad p_1 < p_2 < \dots < p_k \text{ prim},\ e_i \ge 1.
$$

<details class="beweis" markdown="1">
<summary>Beweis von Existenz und Eindeutigkeit</summary>

**Existenz (starke Induktion).** Für $$n = 2$$ ist $$n$$ selbst prim. Sei $$n > 2$$ und die Aussage für alle $$2 \le m < n$$ bewiesen. Ist $$n$$ prim, sind wir fertig. Sonst ist $$n = ab$$ mit $$2 \le a, b < n$$. Nach Induktionsvoraussetzung sind $$a$$ und $$b$$ Produkte von Primzahlen, also auch $$n$$.

**Eindeutigkeit (Induktion über die Anzahl der Faktoren).** Angenommen $$n = p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s$$ mit Primzahlen $$p_i, q_j$$ (mit Wiederholungen). Dann gilt $$p_1 \mid q_1 \cdots q_s$$. Durch wiederholtes Anwenden des Lemmas von Euklid teilt $$p_1$$ einen der Faktoren, etwa $$q_j$$. Da $$q_j$$ prim und $$p_1 \ge 2$$ ist, folgt $$p_1 = q_j$$. Kürzen ergibt

$$
p_2 \cdots p_r = q_1 \cdots q_{j-1} q_{j+1} \cdots q_s,
$$

ein Produkt mit einem Faktor weniger. Nach Induktionsvoraussetzung stimmen die restlichen Faktoren bis auf die Reihenfolge überein, also auch die ursprünglichen. Der Induktionsanfang $$r = 1$$: Dann ist $$n = p_1$$ prim, und ein Produkt $$q_1 \cdots q_s$$ mit $$s \ge 2$$ wäre nicht prim, also $$s = 1$$ und $$q_1 = p_1$$.

Ohne das Lemma von Euklid bricht der Beweis zusammen. Genau deshalb ist Bézout so wichtig.

</details>

**Satz von Euklid (B).** Es gibt unendlich viele Primzahlen.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Angenommen, es gibt nur endlich viele Primzahlen $$p_1, \dots, p_N$$. Setze $$m = p_1 p_2 \cdots p_N + 1 \ge 2$$. Nach dem Fundamentalsatz hat $$m$$ einen Primteiler, also $$p_i \mid m$$ für ein $$i$$. Wegen $$p_i \mid p_1 \cdots p_N$$ folgt $$p_i \mid m - p_1 \cdots p_N = 1$$. Widerspruch. Achtung: $$m$$ selbst muss nicht prim sein ($$2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 + 1 = 30031 = 59 \cdot 509$$).

</details>

**ggT und kgV über Primfaktoren.** Mit $$a = \prod p^{\alpha_p}$$, $$b = \prod p^{\beta_p}$$ gilt $$\operatorname{ggT}(a,b) = \prod p^{\min(\alpha_p, \beta_p)}$$ und $$\operatorname{kgV}(a,b) = \prod p^{\max(\alpha_p, \beta_p)}$$. Beispiel: $$252 = 2^2 \cdot 3^2 \cdot 7$$, $$198 = 2 \cdot 3^2 \cdot 11$$, also $$\operatorname{ggT} = 2 \cdot 3^2 = 18$$ und $$\operatorname{kgV} = 2^2 \cdot 3^2 \cdot 7 \cdot 11 = 2772$$. Probe: $$18 \cdot 2772 = 49896 = 252 \cdot 198$$.

**Primzahltest per Probedivision.** Ist $$n$$ zusammengesetzt, hat $$n$$ einen Primteiler $$p \le \sqrt n$$. Für $$n = 221$$ reicht es also, $$2, 3, 5, 7, 11, 13$$ zu testen: $$221 = 13 \cdot 17$$.

#### Kongruenzen und Restklassen

**Definition.** Für $$m \ge 1$$ heißt $$a$$ **kongruent** $$b$$ modulo $$m$$,

$$
a \equiv b \pmod m \quad :\Leftrightarrow \quad m \mid a - b \quad \Leftrightarrow \quad a \bmod m = b \bmod m.
$$

**Satz (B).** Die Kongruenz modulo $$m$$ ist eine Äquivalenzrelation auf $$\mathbb Z$$ und mit $$+$$ und $$\cdot$$ verträglich: Aus $$a \equiv a'$$ und $$b \equiv b' \pmod m$$ folgt

$$
a + b \equiv a' + b', \qquad a b \equiv a' b', \qquad a^k \equiv a'^k \pmod m.
$$

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Reflexiv: $$m \mid 0$$. Symmetrisch: $$m \mid a - b \Rightarrow m \mid b - a$$. Transitiv: $$m \mid a - b$$ und $$m \mid b - c$$ ergibt $$m \mid (a-b) + (b-c) = a - c$$.

Verträglichkeit: $$(a + b) - (a' + b') = (a - a') + (b - b')$$ ist Summe zweier Vielfacher von $$m$$. Für das Produkt schiebt man einen Mischterm ein:

$$
ab - a'b' = ab - a'b + a'b - a'b' = (a - a')\, b + a'(b - b').
$$

Beide Summanden sind Vielfache von $$m$$. Die Potenzregel folgt per Induktion aus der Produktregel.

</details>

**Restklassenring.** Die Äquivalenzklassen $$[a]_m = \{a + km : k \in \mathbb Z\}$$ bilden $$\mathbb Z_m = \{[0], [1], \dots, [m-1]\}$$ mit $$[a] + [b] = [a+b]$$ und $$[a] \cdot [b] = [ab]$$. Wohldefiniert ist das genau wegen des Satzes oben: Das Ergebnis hängt nicht vom gewählten Vertreter ab.

**Praktische Folge:** Man darf in jedem Zwischenschritt reduzieren. Beispiel: $$3^{100} \bmod 7$$. Es ist $$3^6 = 729 = 104 \cdot 7 + 1$$, also $$3^6 \equiv 1$$ und $$3^{100} = (3^6)^{16} \cdot 3^4 \equiv 81 \equiv 4 \pmod 7$$.

**Teilbarkeitsregeln aus Kongruenzen.** Wegen $$10 \equiv 1 \pmod 9$$ ist eine Zahl kongruent zu ihrer Quersumme modulo $$9$$ (und modulo $$3$$). Wegen $$10 \equiv -1 \pmod{11}$$ ist sie kongruent zur alternierenden Quersumme modulo $$11$$ (von der Einerstelle aus mit $$+$$ beginnend). Beispiel $$2026$$: Quersumme $$10$$, also $$2026 \equiv 1 \pmod 9$$; alternierend $$6 - 2 + 0 - 2 = 2$$, also $$2026 \equiv 2 \pmod{11}$$.

#### Inverse und lineare Kongruenzen

**Satz (B).** $$[a]$$ ist in $$\mathbb Z_m$$ genau dann invertierbar, wenn $$\operatorname{ggT}(a, m) = 1$$. Das Inverse liefert der erweiterte Euklid.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

„$$\Leftarrow$$“: Nach Bézout gibt es $$x, y$$ mit $$xa + ym = 1$$, also $$xa \equiv 1 \pmod m$$, und $$[x]$$ ist das Inverse.

„$$\Rightarrow$$“: Aus $$xa \equiv 1 \pmod m$$ folgt $$xa - 1 = km$$, also $$1 = xa - km$$. Jeder gemeinsame Teiler von $$a$$ und $$m$$ teilt diese Linearkombination, also $$1$$. Damit ist $$\operatorname{ggT}(a,m) = 1$$.

</details>

**Folgerung.** $$\mathbb Z_m$$ ist genau dann ein Körper, wenn $$m$$ eine Primzahl ist. Die invertierbaren Klassen bilden die Einheitengruppe $$\mathbb Z_m^* = \{[a] : \operatorname{ggT}(a,m) = 1\}$$.

**Satz (lineare Kongruenz) (B).** Sei $$d = \operatorname{ggT}(a, m)$$. Die Kongruenz $$ax \equiv b \pmod m$$ ist genau dann lösbar, wenn $$d \mid b$$. Dann gibt es modulo $$m$$ genau $$d$$ Lösungen, nämlich

$$
x \equiv x_0 + k \cdot \frac{m}{d} \pmod m, \qquad k = 0, 1, \dots, d-1,
$$

wobei $$x_0$$ die eindeutige Lösung von $$\frac{a}{d} x \equiv \frac{b}{d} \pmod{\frac{m}{d}}$$ ist.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

**Notwendig.** Ist $$ax - b = km$$, dann ist $$b = ax - km$$ eine Linearkombination von $$a$$ und $$m$$, also $$d \mid b$$.

**Hinreichend.** Schreibe $$a = d a'$$, $$b = d b'$$, $$m = d m'$$ mit $$\operatorname{ggT}(a', m') = 1$$. Es gilt

$$
m \mid ax - b \Leftrightarrow d m' \mid d(a'x - b') \Leftrightarrow m' \mid a'x - b'.
$$

Weil $$a'$$ modulo $$m'$$ invertierbar ist, gilt das genau für $$x \equiv x_0 := a'^{-1} b' \pmod{m'}$$. Die Zahlen $$x_0 + k m'$$ mit $$k = 0, \dots, d-1$$ sind modulo $$m = d m'$$ paarweise verschieden und decken alle Lösungen modulo $$m$$ ab.

</details>

**Beispiel 3.** $$6x \equiv 4 \pmod{10}$$. Hier ist $$d = \operatorname{ggT}(6, 10) = 2$$ und $$2 \mid 4$$, also gibt es $$2$$ Lösungen. Durch $$2$$ kürzen: $$3x \equiv 2 \pmod 5$$. Das Inverse von $$3$$ modulo $$5$$ ist $$2$$ ($$3 \cdot 2 = 6 \equiv 1$$), also $$x \equiv 4 \pmod 5$$. Modulo $$10$$: $$x \in \{4, 9\}$$. Probe: $$6 \cdot 4 = 24 \equiv 4$$, $$6 \cdot 9 = 54 \equiv 4$$. Dagegen ist $$6x \equiv 3 \pmod{10}$$ unlösbar, weil $$2 \nmid 3$$.

#### Chinesischer Restsatz

**Satz (B).** Seien $$m_1, \dots, m_k$$ paarweise teilerfremd und $$M = m_1 \cdots m_k$$. Dann hat das System

$$
x \equiv a_1 \pmod{m_1}, \quad \dots, \quad x \equiv a_k \pmod{m_k}
$$

modulo $$M$$ genau eine Lösung. Konstruktion: $$M_i = M / m_i$$, $$y_i \equiv M_i^{-1} \pmod{m_i}$$ und

$$
x \equiv \sum_{i=1}^{k} a_i M_i y_i \pmod M.
$$

<details class="beweis" markdown="1">
<summary>Beweis</summary>

**Existenz.** $$M_i$$ ist zu $$m_i$$ teilerfremd (alle anderen $$m_j$$ sind es), also existiert $$y_i$$. Für $$j \ne i$$ ist $$m_j \mid M_i$$, also $$M_i y_i \equiv 0 \pmod{m_j}$$. Modulo $$m_j$$ bleibt in der Summe nur der Summand $$a_j M_j y_j \equiv a_j \cdot 1 = a_j$$.

**Eindeutigkeit.** Sind $$x, x'$$ zwei Lösungen, dann gilt $$m_i \mid x - x'$$ für alle $$i$$. Weil die $$m_i$$ paarweise teilerfremd sind, folgt (Fundamentalsatz oder induktiv mit dem Lemma von Euklid) $$M \mid x - x'$$, also $$x \equiv x' \pmod M$$.

</details>

**Beispiel 4.** $$x \equiv 1 \pmod 4$$, $$x \equiv 2 \pmod 5$$, $$x \equiv 3 \pmod 7$$, also $$M = 140$$.

| $$i$$ | $$m_i$$ | $$a_i$$ | $$M_i$$ | $$M_i \bmod m_i$$ | $$y_i$$ | $$a_i M_i y_i$$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | 4 | 1 | 35 | 3 | 3 | 105 |
| 2 | 5 | 2 | 28 | 3 | 2 | 112 |
| 3 | 7 | 3 | 20 | 6 | 6 | 360 |

Summe $$577 = 4 \cdot 140 + 17$$, also $$x \equiv 17 \pmod{140}$$. Probe: $$17 = 4 \cdot 4 + 1 = 3 \cdot 5 + 2 = 2 \cdot 7 + 3$$.

**Alternative: schrittweise einsetzen.** Aus $$x = 1 + 4t$$ und $$1 + 4t \equiv 2 \pmod 5$$ folgt $$4t \equiv 1$$, also $$t \equiv 4 \pmod 5$$ und $$x = 17 + 20u$$. Dann $$17 + 20u \equiv 3 \pmod 7$$, also $$6u \equiv 0$$, $$u \equiv 0 \pmod 7$$, und wieder $$x \equiv 17 \pmod{140}$$. Bei zwei Kongruenzen ist das oft schneller.

Sind die Moduln nicht teilerfremd, kann das System unlösbar sein ($$x \equiv 0 \pmod 2$$, $$x \equiv 1 \pmod 4$$) oder die Lösung ist nur modulo des kgV eindeutig.
{: .notice--warning}

#### Eulersche Phi-Funktion, Euler und Fermat

**Definition.** $$\varphi(m) = \#\{a \in \{1, \dots, m\} : \operatorname{ggT}(a, m) = 1\} = \#\mathbb Z_m^*$$.

**Formeln.** Für eine Primzahl $$p$$ ist $$\varphi(p) = p - 1$$ und $$\varphi(p^e) = p^e - p^{e-1}$$ (man streicht die $$p^{e-1}$$ Vielfachen von $$p$$). Für teilerfremde $$m, n$$ gilt $$\varphi(mn) = \varphi(m)\varphi(n)$$ (Chinesischer Restsatz). Zusammen:

$$
\varphi(n) = n \prod_{p \mid n} \left(1 - \frac 1p\right).
$$

**Beispiel.** $$360 = 2^3 \cdot 3^2 \cdot 5$$, also $$\varphi(360) = 360 \cdot \frac12 \cdot \frac23 \cdot \frac45 = 96$$. Und $$\varphi(143) = \varphi(11)\varphi(13) = 10 \cdot 12 = 120$$.

**Satz von Euler (B).** Ist $$\operatorname{ggT}(a, m) = 1$$, dann gilt $$a^{\varphi(m)} \equiv 1 \pmod m$$.

**Kleiner Satz von Fermat.** Für eine Primzahl $$p$$ und $$p \nmid a$$ gilt $$a^{p-1} \equiv 1 \pmod p$$, und für alle $$a$$ gilt $$a^p \equiv a \pmod p$$.

<details class="beweis" markdown="1">
<summary>Beweis des Satzes von Euler</summary>

Seien $$r_1, \dots, r_n$$ mit $$n = \varphi(m)$$ die zu $$m$$ teilerfremden Reste in $$\{1, \dots, m\}$$. Betrachte $$a r_1, \dots, a r_n$$ modulo $$m$$.

- Jedes $$a r_i$$ ist teilerfremd zu $$m$$ (Produkt teilerfremder Zahlen).
- Sie sind paarweise verschieden modulo $$m$$: Aus $$a r_i \equiv a r_j$$ folgt durch Multiplikation mit $$a^{-1}$$, dass $$r_i \equiv r_j$$, also $$i = j$$.

Also sind $$a r_1, \dots, a r_n$$ modulo $$m$$ nur eine Umordnung von $$r_1, \dots, r_n$$. Die Produkte stimmen überein:

$$
a^n \, r_1 \cdots r_n \equiv r_1 \cdots r_n \pmod m.
$$

Das Produkt $$r_1 \cdots r_n$$ ist teilerfremd zu $$m$$, also invertierbar. Kürzen ergibt $$a^n \equiv 1 \pmod m$$. Fermat ist der Spezialfall $$m = p$$, $$\varphi(p) = p - 1$$; die Form $$a^p \equiv a$$ folgt durch Multiplikation mit $$a$$ (und ist für $$p \mid a$$ trivial).

Kürzer mit Gruppentheorie (Kapitel 7): Die Ordnung von $$[a]$$ teilt nach Lagrange die Gruppenordnung $$\varphi(m)$$.

</details>

**Beispiel 5.** $$2^{1000} \bmod 13$$: Nach Fermat ist $$2^{12} \equiv 1$$. Wegen $$1000 = 83 \cdot 12 + 4$$ folgt $$2^{1000} \equiv 2^4 = 16 \equiv 3 \pmod{13}$$. Der Trick: **Exponent modulo $$\varphi(m)$$ reduzieren**, nicht modulo $$m$$.

**Schnelles Potenzieren (Square and Multiply).** $$a^e \bmod m$$ berechnet man über die Binärdarstellung von $$e$$: wiederholt quadrieren und nur bei den Einsen multiplizieren. Das braucht etwa $$2 \log_2 e$$ Multiplikationen statt $$e$$.

#### RSA

**Schlüsselerzeugung.** Wähle verschiedene Primzahlen $$p, q$$, setze $$n = pq$$ und $$\varphi(n) = (p-1)(q-1)$$. Wähle $$e$$ mit $$\operatorname{ggT}(e, \varphi(n)) = 1$$ und berechne $$d \equiv e^{-1} \pmod{\varphi(n)}$$ mit dem erweiterten Euklid. Öffentlich ist $$(n, e)$$, geheim ist $$d$$ (und $$p, q$$).

**Verschlüsseln:** $$c = m^e \bmod n$$. **Entschlüsseln:** $$m = c^d \bmod n$$.

**Satz (Korrektheit) (B).** Für $$0 \le m < n$$ gilt $$(m^e)^d \equiv m \pmod n$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Es ist $$ed = 1 + k\varphi(n) = 1 + k(p-1)(q-1)$$ für ein $$k \ge 0$$. Zeige $$m^{ed} \equiv m$$ modulo $$p$$ und modulo $$q$$, dann folgt es nach dem Chinesischen Restsatz modulo $$n = pq$$.

Modulo $$p$$: Gilt $$p \mid m$$, sind beide Seiten $$\equiv 0$$. Sonst ist nach Fermat $$m^{p-1} \equiv 1$$, also

$$
m^{ed} = m \cdot \left(m^{p-1}\right)^{k(q-1)} \equiv m \cdot 1 = m \pmod p.
$$

Modulo $$q$$ genauso. Der Fall $$p \mid m$$ zeigt, warum man hier nicht einfach Euler modulo $$n$$ verwenden kann: Euler verlangt $$\operatorname{ggT}(m, n) = 1$$.

</details>

**Beispiel 6 (Spielzeug-RSA).** $$p = 11$$, $$q = 13$$, $$n = 143$$, $$\varphi(n) = 120$$, $$e = 7$$. Erweiterter Euklid: $$120 = 17 \cdot 7 + 1$$, also $$1 = 120 - 17 \cdot 7$$ und $$d \equiv -17 \equiv 103 \pmod{120}$$. Probe: $$7 \cdot 103 = 721 = 6 \cdot 120 + 1$$. Nachricht $$m = 9$$: $$9^2 = 81$$, $$9^4 = 6561 \equiv 126$$, $$9^7 = 9^4 \cdot 9^2 \cdot 9 \equiv 126 \cdot 81 \cdot 9 \equiv 48 \pmod{143}$$. Also $$c = 48$$, und $$48^{103} \bmod 143 = 9$$ (nachgerechnet).

Die Sicherheit beruht darauf, dass man aus $$n$$ ohne Faktorisierung $$\varphi(n)$$ und damit $$d$$ nicht effizient berechnen kann. In der Praxis sind $$p, q$$ mehrere hundert Stellen lang.
{: .notice--info}

#### g-adische Darstellung

**Satz.** Zu jeder Basis $$g \ge 2$$ hat jedes $$n \in \mathbb N$$ eine eindeutige Darstellung

$$
n = \sum_{i=0}^{k} a_i g^i, \qquad a_i \in \{0, \dots, g-1\},\ a_k \ne 0.
$$

Die Ziffern erhält man durch fortgesetzte Division mit Rest: $$a_0 = n \bmod g$$, dann mit $$n \operatorname{div} g$$ weiter. Die Ziffern werden **von unten nach oben** gelesen. Existenz und Eindeutigkeit folgen per Induktion aus der Division mit Rest.

**Beispiel 7.** $$2026$$ zur Basis $$16$$: $$2026 = 126 \cdot 16 + 10$$, $$126 = 7 \cdot 16 + 14$$, $$7 = 0 \cdot 16 + 7$$. Also $$2026 = (7EA)_{16}$$, da $$A = 10$$ und $$E = 14$$. Binär (jede Hex-Ziffer in 4 Bit): $$(0111\,1110\,1010)_2 = (11111101010)_2$$. Zur Basis $$3$$: $$(2210001)_3$$, Probe $$2 \cdot 729 + 2 \cdot 243 + 81 + 1 = 2026$$.

**Rückweg mit Horner.** $$(7EA)_{16} = (7 \cdot 16 + 14) \cdot 16 + 10 = 126 \cdot 16 + 10 = 2026$$.

#### Stolperfallen

- $$1$$ ist keine Primzahl, sonst wäre die Primfaktorzerlegung nicht eindeutig.
- Kürzen in Kongruenzen ist nur mit invertierbaren Faktoren erlaubt: $$2 \cdot 3 \equiv 2 \cdot 8 \pmod{10}$$, aber $$3 \not\equiv 8 \pmod{10}$$. Richtig: $$ka \equiv kb \pmod m \Rightarrow a \equiv b \pmod{m / \operatorname{ggT}(k, m)}$$.
- Exponenten reduziert man modulo $$\varphi(m)$$ und nur bei $$\operatorname{ggT}(a,m) = 1$$, die Basis modulo $$m$$.
- Das Inverse modulo $$m$$ immer als Zahl in $$\{0, \dots, m-1\}$$ angeben und mit einer Probe kontrollieren.
- Beim Chinesischen Restsatz zuerst prüfen, ob die Moduln paarweise teilerfremd sind.
- Bei RSA ist $$d$$ das Inverse modulo $$\varphi(n)$$, nicht modulo $$n$$.

**Typische Aufgaben:** ggT mit Bézout-Darstellung als Tabelle; Inverses in $$\mathbb Z_m$$; lineare Kongruenz mit allen Lösungen; Kongruenzsystem lösen; große Potenzen modulo $$m$$; letzte Ziffer(n) einer Potenz; RSA-Schlüssel und eine Ver- und Entschlüsselung; Teilbarkeitsaussagen wie $$6 \mid n^3 - n$$ beweisen; Zahlen zwischen Basen umrechnen.

### 2 Logik und Beweise

Dieses Kapitel ist bewusst kurz. Logik, Quantoren, Mengen und Induktion stehen mit allen Beweisen ausführlich im [EIMA-Kompendium](/tuwien/eima-kompendium/). Hier steht das, was ich für ADM-Aufgaben direkt brauche.

#### Aussagenlogik

Eine **Aussage** hat genau einen Wahrheitswert. Junktoren: $$\neg A$$, $$A \wedge B$$, $$A \vee B$$, $$A \Rightarrow B$$ (falsch nur bei $$W \Rightarrow F$$), $$A \Leftrightarrow B$$. Eine Formel heißt **Tautologie**, wenn sie bei jeder Belegung wahr ist, und **erfüllbar**, wenn sie bei mindestens einer Belegung wahr ist. Zwei Formeln sind **äquivalent**, wenn sie dieselbe Wahrheitstafel haben.

| $$A$$ | $$B$$ | $$A \wedge B$$ | $$A \vee B$$ | $$A \Rightarrow B$$ | $$A \Leftrightarrow B$$ | $$A \oplus B$$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| W | W | W | W | W | W | F |
| W | F | F | W | F | F | W |
| F | W | F | W | W | F | W |
| F | F | F | F | W | W | F |

**Wichtige Äquivalenzen:**

$$
\begin{aligned}
&A \Rightarrow B \equiv \neg A \vee B, && \neg(A \Rightarrow B) \equiv A \wedge \neg B,\\
&A \Rightarrow B \equiv \neg B \Rightarrow \neg A \ \text{(Kontraposition)}, && A \Leftrightarrow B \equiv (A \Rightarrow B) \wedge (B \Rightarrow A),\\
&\neg(A \wedge B) \equiv \neg A \vee \neg B, && \neg(A \vee B) \equiv \neg A \wedge \neg B \ \text{(De Morgan)}.
\end{aligned}
$$

**Beispiel 1 (Tautologie prüfen).** Ist $$\bigl((A \Rightarrow B) \wedge (B \Rightarrow C)\bigr) \Rightarrow (A \Rightarrow C)$$ eine Tautologie? Statt 8 Zeilen sucht man eine Gegenbelegung: Die Implikation ist nur falsch, wenn $$A \Rightarrow C$$ falsch ist, also $$A = W$$, $$C = F$$. Dann müsste $$A \Rightarrow B$$ wahr sein, also $$B = W$$, und $$B \Rightarrow C$$ wahr, also $$B = F$$. Widerspruch, es gibt keine Gegenbelegung: Tautologie (Kettenschluss).

#### Quantoren

$$\forall x: A(x)$$ und $$\exists x: A(x)$$. Negation durch Umdrehen der Quantoren und Negieren der inneren Aussage:

$$
\neg\bigl(\forall x\, \exists y: A(x,y)\bigr) \equiv \exists x\, \forall y: \neg A(x,y).
$$

**Beispiel 2.** „Jede gerade Zahl größer als 2 ist Summe zweier Primzahlen“: $$\forall n \in 2\mathbb N, n > 2\ \exists p, q \in \mathbb P: n = p + q$$. Negation: $$\exists n \in 2\mathbb N, n > 2\ \forall p, q \in \mathbb P: n \ne p + q$$. Die Reihenfolge verschiedener Quantoren darf man nicht tauschen.

#### Beweistechniken

| Ziel | Technik | Schema |
|---|---|---|
| $$A \Rightarrow B$$ | direkt | $$A$$ annehmen, $$B$$ folgern |
| $$A \Rightarrow B$$ | Kontraposition | $$\neg B$$ annehmen, $$\neg A$$ folgern |
| $$A$$ | Widerspruch | $$\neg A$$ annehmen, Widerspruch herleiten |
| $$A \Leftrightarrow B$$ | zwei Richtungen | beide Implikationen einzeln |
| $$\forall n \ge n_0: A(n)$$ | Induktion | Anfang $$A(n_0)$$, Schritt $$A(n) \Rightarrow A(n+1)$$ |
| $$\exists x: A(x)$$ | Konstruktion | konkretes $$x$$ angeben |
| $$\forall x: A(x)$$ widerlegen | Gegenbeispiel | ein $$x$$ mit $$\neg A(x)$$ |

**Satz (B).** $$\sqrt 2$$ ist irrational.

<details class="beweis" markdown="1">
<summary>Beweis durch Widerspruch</summary>

Angenommen $$\sqrt 2 = \frac pq$$ mit $$p, q \in \mathbb N$$, $$q \ge 1$$ und $$\operatorname{ggT}(p,q) = 1$$ (vollständig gekürzt). Dann ist $$p^2 = 2q^2$$, also $$p^2$$ gerade. Wäre $$p$$ ungerade, wäre auch $$p^2$$ ungerade (Kontraposition), also ist $$p = 2r$$. Einsetzen: $$4r^2 = 2q^2$$, also $$q^2 = 2r^2$$ und $$q$$ ist ebenfalls gerade. Dann ist $$2$$ ein gemeinsamer Teiler von $$p$$ und $$q$$. Widerspruch zu $$\operatorname{ggT}(p,q) = 1$$.

</details>

#### Vollständige Induktion

**Prinzip.** Gilt $$A(n_0)$$ (**Induktionsanfang**) und für alle $$n \ge n_0$$ die Implikation $$A(n) \Rightarrow A(n+1)$$ (**Induktionsschritt**, mit $$A(n)$$ als **Induktionsvoraussetzung**), dann gilt $$A(n)$$ für alle $$n \ge n_0$$.

**Starke Induktion.** Im Schritt darf man $$A(n_0), \dots, A(n)$$ voraussetzen, um $$A(n+1)$$ zu zeigen. Nötig, wenn der Schritt auf weiter zurückliegende Fälle greift (Primfaktorzerlegung, Rekursionen mit zwei Vorgängern).

**Schema für jede Induktionsaufgabe.**

1. Aussage $$A(n)$$ und Startwert $$n_0$$ genau hinschreiben.
2. Induktionsanfang nachrechnen.
3. Im Schritt den Ausdruck für $$n+1$$ so umformen, dass der Ausdruck für $$n$$ sichtbar wird. Die Induktionsvoraussetzung genau dort einsetzen und markieren.
4. Zum Ziel für $$n+1$$ umformen.

**Beispiel 3 (Summenformel).** Für alle $$n \ge 1$$ gilt $$\sum_{k=1}^{n} k \cdot k! = (n+1)! - 1$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Anfang $$n = 1$$: links $$1 \cdot 1! = 1$$, rechts $$2! - 1 = 1$$.

Schritt: Es gelte die Formel für $$n$$. Dann ist

$$
\sum_{k=1}^{n+1} k \cdot k! = \underbrace{\sum_{k=1}^{n} k \cdot k!}_{\text{IV}} + (n+1)(n+1)! = (n+1)! - 1 + (n+1)(n+1)! = (n+2)(n+1)! - 1 = (n+2)! - 1.
$$

</details>

**Beispiel 4 (Teilbarkeit).** Für alle $$n \in \mathbb N$$ gilt $$3 \mid n^3 + 2n$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Anfang $$n = 0$$: $$3 \mid 0$$. Schritt:

$$
(n+1)^3 + 2(n+1) = n^3 + 3n^2 + 3n + 1 + 2n + 2 = (n^3 + 2n) + 3(n^2 + n + 1).
$$

Der erste Summand ist nach IV durch $$3$$ teilbar, der zweite offensichtlich. Ohne Induktion geht es auch: $$n^3 + 2n \equiv n^3 - n = (n-1)n(n+1) \pmod 3$$, und von drei aufeinanderfolgenden Zahlen ist eine durch $$3$$ teilbar.

</details>

**Beispiel 5 (Ungleichung).** Für alle $$n \ge 5$$ gilt $$2^n > n^2$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Anfang $$n = 5$$: $$32 > 25$$. Schritt für $$n \ge 5$$:

$$
2^{n+1} = 2 \cdot 2^n \overset{\text{IV}}{>} 2n^2 = n^2 + n^2 \ge n^2 + 2n + 1 = (n+1)^2.
$$

Die Abschätzung $$n^2 \ge 2n + 1$$ gilt für $$n \ge 3$$, denn $$n^2 - 2n - 1 = (n-1)^2 - 2 \ge 2 > 0$$. Für $$n = 4$$ ist $$16 = 16$$, deshalb startet man bei $$5$$.

</details>

**Beispiel 6 (starke Induktion).** Jedes $$n \ge 8$$ lässt sich als $$n = 3a + 5b$$ mit $$a, b \in \mathbb N_0$$ schreiben.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Anfang mit drei Fällen: $$8 = 3 + 5$$, $$9 = 3 \cdot 3$$, $$10 = 2 \cdot 5$$. Schritt: Sei $$n \ge 11$$ und die Aussage für alle $$8 \le m < n$$ bewiesen. Dann ist $$8 \le n - 3 < n$$, also $$n - 3 = 3a + 5b$$ und $$n = 3(a+1) + 5b$$. Weil der Schritt auf $$n - 3$$ zurückgreift, braucht man drei Startwerte.

</details>

#### Stolperfallen

- Den Induktionsanfang nicht vergessen: Der Schritt $$A(n) \Rightarrow A(n+1)$$ für „$$n = n+1$$“ lässt sich beweisen, die Aussage ist trotzdem falsch.
- Im Schritt nicht das Ziel annehmen und daraus etwas Wahres folgern. Man startet bei der linken Seite für $$n+1$$.
- Der Schritt muss für **alle** $$n \ge n_0$$ funktionieren (siehe das Pferde-Paradoxon im EIMA-Kompendium).
- Negation von $$A \Rightarrow B$$ ist $$A \wedge \neg B$$, nicht $$\neg A \Rightarrow \neg B$$.

**Typische Aufgaben:** Summenformeln, Teilbarkeit, Ungleichungen und rekursiv definierte Folgen per Induktion (ADM 1–24); Tautologien prüfen; Quantorenaussagen formalisieren und negieren (ADM 77–90).

### 3 Mengen, Relationen, Funktionen

Die Grundlagen (Mengenoperationen, Äquivalenzrelation und Partition, Bijektivität und Umkehrfunktion) sind im [EIMA-Kompendium](/tuwien/eima-kompendium/) mit allen Beweisen ausgeführt. Hier liegt der Schwerpunkt auf Rechnen, Ordnungen und Mächtigkeit.

#### Mengen

Operationen: $$A \cup B$$, $$A \cap B$$, $$A \setminus B$$, Komplement $$\overline{A} = U \setminus A$$, symmetrische Differenz $$A \triangle B = (A \setminus B) \cup (B \setminus A)$$, kartesisches Produkt $$A \times B$$, Potenzmenge $$\mathcal P(A)$$ mit $$\#\mathcal P(A) = 2^{\#A}$$.

**Gesetze:** Kommutativ, assoziativ, distributiv ($$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$$ und umgekehrt), De Morgan ($$\overline{A \cup B} = \overline A \cap \overline B$$, $$\overline{A \cap B} = \overline A \cup \overline B$$). Mengengleichheit beweist man über beide Inklusionen oder über eine Kette von Äquivalenzen „$$x \in \dots \Leftrightarrow \dots$$“.

**Beispiel 1.** $$A \setminus (B \cap C) = (A \setminus B) \cup (A \setminus C)$$: $$x \in A \wedge \neg(x \in B \wedge x \in C) \Leftrightarrow x \in A \wedge (x \notin B \vee x \notin C) \Leftrightarrow (x \in A \wedge x \notin B) \vee (x \in A \wedge x \notin C)$$. Dagegen gilt $$A \cup (B \setminus C) = (A \cup B) \setminus C$$ **nicht**: Gegenbeispiel $$A = C = \{1\}$$, $$B = \emptyset$$ ergibt links $$\{1\}$$, rechts $$\emptyset$$.

#### Relationen und ihre Eigenschaften

Eine Relation in $$M$$ ist $$R \subseteq M \times M$$. Eigenschaften:

| Eigenschaft | Definition | Matrix / Graph |
|---|---|---|
| reflexiv | $$\forall x: xRx$$ | Diagonale voller Einsen, Schlinge an jedem Knoten |
| irreflexiv | $$\forall x: \neg xRx$$ | Diagonale null |
| symmetrisch | $$xRy \Rightarrow yRx$$ | Matrix symmetrisch, Kanten in beide Richtungen |
| antisymmetrisch | $$xRy \wedge yRx \Rightarrow x = y$$ | nie zwei Gegenkanten zwischen verschiedenen Knoten |
| transitiv | $$xRy \wedge yRz \Rightarrow xRz$$ | jeder Zwei-Schritt-Weg hat eine Abkürzung |

**Hüllen.** Die **transitive Hülle** $$R^+$$ ist die kleinste transitive Relation, die $$R$$ enthält: $$xR^+y$$, wenn es einen Weg von $$x$$ nach $$y$$ im Graphen von $$R$$ gibt. Die reflexiv-transitive Hülle heißt $$R^*$$.

#### Äquivalenzrelationen

**Definition.** Reflexiv, symmetrisch und transitiv. Die **Äquivalenzklasse** von $$x$$ ist $$[x] = \{y \in M : x \sim y\}$$, die Menge aller Klassen heißt **Faktormenge** $$M/{\sim}$$.

**Satz (B).** Die Äquivalenzklassen bilden eine **Partition** von $$M$$: Jede Klasse ist nicht leer, jedes Element liegt in einer Klasse, und zwei Klassen sind entweder gleich oder disjunkt. Umgekehrt definiert jede Partition durch „liegen im selben Block“ eine Äquivalenzrelation.

<details class="beweis" markdown="1">
<summary>Beweis des Kerns: gleich oder disjunkt</summary>

Wegen Reflexivität ist $$x \in [x]$$, also ist jede Klasse nicht leer und jedes Element liegt in einer Klasse. Angenommen $$z \in [x] \cap [y]$$. Dann gilt $$x \sim z$$ und $$y \sim z$$, mit Symmetrie $$z \sim y$$, mit Transitivität $$x \sim y$$. Für jedes $$w \in [y]$$ folgt aus $$x \sim y$$ und $$y \sim w$$ dann $$x \sim w$$, also $$[y] \subseteq [x]$$. Symmetrisch $$[x] \subseteq [y]$$. Also gilt: gemeinsames Element $$\Rightarrow$$ gleiche Klasse. Ausführlich im EIMA-Kompendium (Satz 2.3.3).

</details>

**Beispiel 2.** Auf $$\mathbb Z$$ sei $$x \sim y :\Leftrightarrow x^2 \equiv y^2 \pmod 5$$. Das ist eine Äquivalenzrelation, weil sie die Form „$$f(x) = f(y)$$“ mit $$f(x) = x^2 \bmod 5$$ hat (jede solche Relation ist reflexiv, symmetrisch und transitiv). Die Quadrate modulo $$5$$ sind $$0^2 = 0$$, $$1^2 = 4^2 \equiv 1$$, $$2^2 = 3^2 \equiv 4$$. Also gibt es drei Klassen:

$$
[0] = 5\mathbb Z, \qquad [1] = \{x : x \equiv \pm 1 \pmod 5\}, \qquad [2] = \{x : x \equiv \pm 2 \pmod 5\}.
$$

**Beispiel 3 (keine Äquivalenzrelation).** Auf $$\mathbb Z$$ sei $$x R y :\Leftrightarrow x - y \le 1$$, d. h. $$x \le y + 1$$. Reflexiv ja; symmetrisch nein ($$0 R 5$$, aber nicht $$5 R 0$$); transitiv nein ($$2 R 1$$ und $$1 R 0$$, aber $$2 - 0 = 2 > 1$$).

#### Ordnungsrelationen und Hasse-Diagramm

**Definition.** Eine **Halbordnung** (partielle Ordnung) ist reflexiv, antisymmetrisch und transitiv. Sind zusätzlich je zwei Elemente vergleichbar ($$x \preceq y$$ oder $$y \preceq x$$), heißt sie **Totalordnung** (lineare Ordnung). Beispiele: $$\le$$ auf $$\mathbb R$$ (total), $$\subseteq$$ auf $$\mathcal P(M)$$ und Teilbarkeit $$\mid$$ auf $$\mathbb N$$ (nur partiell).

**Begriffe** für $$T \subseteq M$$ in einer Halbordnung:

- **minimal**: kein Element ist echt kleiner. **kleinstes Element**: kleiner oder gleich allen anderen. Ein kleinstes Element ist minimal, aber nicht umgekehrt.
- **untere Schranke**: $$s \preceq t$$ für alle $$t \in T$$. **Infimum**: größte untere Schranke. Analog obere Schranke, Supremum.
- Haben je zwei Elemente Infimum und Supremum, heißt $$(M, \preceq)$$ **Verband**.

**Hasse-Diagramm.** Man zeichnet nur die **Nachbarschaften** (Überdeckungen): $$x \prec y$$ und nichts liegt echt dazwischen. Größere Elemente stehen weiter oben, Schlingen und transitive Kanten lässt man weg.

**Beispiel 4.** Die Teiler von $$12$$ unter $$\mid$$. Die Überdeckungen sind $$1 \prec 2$$, $$1 \prec 3$$, $$2 \prec 4$$, $$2 \prec 6$$, $$3 \prec 6$$, $$4 \prec 12$$, $$6 \prec 12$$.

```text
        12
       /  \
      4    6
       \  / \
        2    3
         \  /
          1
```

Kleinstes Element $$1$$, größtes $$12$$. $$4$$ und $$6$$ sind unvergleichbar, ihr Supremum ist $$\operatorname{kgV}(4,6) = 12$$, ihr Infimum $$\operatorname{ggT}(4,6) = 2$$. Allgemein ist $$(\mathbb N, \mid)$$ ein Verband mit $$\inf = \operatorname{ggT}$$ und $$\sup = \operatorname{kgV}$$. Nimmt man die $$12$$ weg, sind $$4$$ und $$6$$ beide maximal, aber es gibt kein größtes Element.

#### Funktionen

$$f: A \to B$$ ordnet jedem $$a \in A$$ genau ein $$f(a) \in B$$ zu. Bild $$f(X) = \{f(x) : x \in X\}$$, Urbild $$f^{-1}(Y) = \{a \in A : f(a) \in Y\}$$ (existiert immer, auch ohne Umkehrfunktion).

| Eigenschaft | Definition | Beweisschema |
|---|---|---|
| injektiv | $$f(a) = f(a') \Rightarrow a = a'$$ | $$f(a) = f(a')$$ annehmen, $$a = a'$$ folgern |
| surjektiv | $$\forall b\, \exists a: f(a) = b$$ | zu beliebigem $$b$$ ein Urbild ausrechnen |
| bijektiv | injektiv und surjektiv | dann existiert $$f^{-1}$$ mit $$f^{-1} \circ f = \mathrm{id}_A$$ und $$f \circ f^{-1} = \mathrm{id}_B$$ |

**Beispiel 5.** $$f: \mathbb Z \to \mathbb Z$$, $$f(x) = 2x + 1$$: injektiv ($$2a + 1 = 2a' + 1 \Rightarrow a = a'$$), nicht surjektiv ($$2$$ hat kein Urbild). Dieselbe Vorschrift auf $$\mathbb Q \to \mathbb Q$$ ist bijektiv mit $$f^{-1}(y) = \frac{y-1}{2}$$. Ob $$f$$ injektiv oder surjektiv ist, hängt also von Definitions- und Zielmenge ab.

**Sätze.** Die Komposition injektiver (surjektiver, bijektiver) Funktionen ist injektiv (surjektiv, bijektiv). Ist $$g \circ f$$ injektiv, dann ist $$f$$ injektiv; ist $$g \circ f$$ surjektiv, dann ist $$g$$ surjektiv. Für endliche Mengen gleicher Größe gilt: injektiv $$\Leftrightarrow$$ surjektiv $$\Leftrightarrow$$ bijektiv.

#### Mächtigkeit, abzählbar und überabzählbar

**Definition.** $$A$$ und $$B$$ heißen **gleichmächtig**, wenn es eine Bijektion $$A \to B$$ gibt. $$A$$ heißt **abzählbar** (abzählbar unendlich), wenn $$A$$ gleichmächtig zu $$\mathbb N$$ ist, **höchstens abzählbar**, wenn endlich oder abzählbar, sonst **überabzählbar**. Man schreibt $$\lvert A\rvert \le \lvert B\rvert$$, wenn es eine Injektion $$A \to B$$ gibt.

**Satz von Schröder-Bernstein.** Gibt es Injektionen $$A \to B$$ und $$B \to A$$, dann sind $$A$$ und $$B$$ gleichmächtig. (Beweis meist nicht prüfungsrelevant; in TUWEL prüfen.)

**Abzählbare Mengen.**

- $$\mathbb Z$$: $$f: \mathbb N_0 \to \mathbb Z$$, $$f(n) = n/2$$ für gerades $$n$$ und $$f(n) = -(n+1)/2$$ für ungerades $$n$$, ergibt $$0, -1, 1, -2, 2, \dots$$ und ist bijektiv.
- $$\mathbb N_0 \times \mathbb N_0$$: Cantorsche Paarungsfunktion $$\pi(a, b) = \frac{(a+b)(a+b+1)}{2} + b$$ nummeriert die Diagonalen durch. Beispiel $$\pi(2, 1) = 6 + 1 = 7$$.
- $$\mathbb Q$$: Injektion $$\mathbb Q \to \mathbb Z \times \mathbb N$$ über die gekürzte Darstellung $$p/q$$, und $$\mathbb Z \times \mathbb N$$ ist abzählbar.
- Abzählbare Vereinigungen abzählbarer Mengen sind abzählbar, ebenso endliche Produkte. Die Menge aller endlichen Wörter über einem endlichen Alphabet ist abzählbar, also auch die Menge aller Programme.

**Satz (B).** $$\mathbb R$$ (sogar das Intervall $$(0,1)$$) ist überabzählbar.

<details class="beweis" markdown="1">
<summary>Beweis mit dem Diagonalargument</summary>

Angenommen $$(0,1)$$ ist abzählbar, also $$(0,1) = \{x_1, x_2, x_3, \dots\}$$. Schreibe jede Zahl als Dezimalbruch $$x_i = 0{,}a_{i1} a_{i2} a_{i3} \dots$$ (ohne Neunerperiode, damit die Darstellung eindeutig ist). Definiere $$y = 0{,}b_1 b_2 b_3 \dots$$ mit

$$
b_i = \begin{cases} 5, & a_{ii} \ne 5,\\ 4, & a_{ii} = 5. \end{cases}
$$

Dann liegt $$y$$ in $$(0,1)$$, hat keine Neunerperiode und unterscheidet sich von jedem $$x_i$$ an der $$i$$-ten Stelle. Also ist $$y$$ in der Liste nicht enthalten. Widerspruch.

</details>

**Satz von Cantor (B).** Für jede Menge $$M$$ gibt es keine Surjektion $$M \to \mathcal P(M)$$. Insbesondere ist $$\lvert M\rvert < \lvert \mathcal P(M)\rvert$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Sei $$f: M \to \mathcal P(M)$$ beliebig. Betrachte $$D = \{x \in M : x \notin f(x)\}$$. Angenommen $$D = f(d)$$ für ein $$d \in M$$. Ist $$d \in D$$, dann nach Definition von $$D$$ auch $$d \notin f(d) = D$$. Ist $$d \notin D = f(d)$$, dann erfüllt $$d$$ die Bedingung und liegt in $$D$$. Beides ist widersprüchlich, also hat $$D$$ kein Urbild und $$f$$ ist nicht surjektiv. Eine Injektion $$M \to \mathcal P(M)$$ gibt es dagegen immer: $$x \mapsto \{x\}$$.

</details>

**Folgerung.** $$\mathcal P(\mathbb N)$$ ist überabzählbar, es gibt also mehr Mengen natürlicher Zahlen (oder Funktionen $$\mathbb N \to \{0,1\}$$) als Programme. Deshalb gibt es nicht berechenbare Funktionen.

#### Stolperfallen

- Kleinstes und minimales Element nicht verwechseln; in Totalordnungen fallen sie zusammen.
- Antisymmetrisch ist nicht das Gegenteil von symmetrisch: Die Gleichheit ist beides, $$\{(1,2),(2,1),(1,3)\}$$ ist keins von beiden.
- Eine leere Relation auf $$M \ne \emptyset$$ ist symmetrisch und transitiv, aber nicht reflexiv.
- Das Urbild $$f^{-1}(Y)$$ ist auch ohne Bijektivität definiert. Die Umkehrfunktion $$f^{-1}$$ nur bei Bijektivität.
- Für die Wohldefiniertheit einer Funktion auf Äquivalenzklassen muss das Ergebnis vom Vertreter unabhängig sein.

**Typische Aufgaben:** Mengenidentitäten beweisen oder widerlegen (ADM 91–106); Eigenschaften einer Relation prüfen, Äquivalenzklassen bestimmen, Hasse-Diagramm zeichnen (ADM 107–135); Injektivität, Surjektivität und Umkehrfunktion nachweisen, Mächtigkeiten vergleichen (ADM 136–158).

### 4 Kombinatorik

Kombinatorik heißt: Mengen zählen, ohne sie aufzulisten. Die meisten Aufgaben lösen sich mit zwei Fragen: **Kommt es auf die Reihenfolge an?** und **Sind Wiederholungen erlaubt?**

#### Summen- und Produktregel

**Summenregel.** Für disjunkte endliche Mengen gilt $$\lvert A \cup B\rvert = \lvert A\rvert + \lvert B\rvert$$. Man benutzt sie bei Fallunterscheidungen: „entweder so oder so“.

**Produktregel.** $$\lvert A \times B\rvert = \lvert A\rvert \cdot \lvert B\rvert$$. Man benutzt sie bei mehrstufigen Entscheidungen: „zuerst …, dann …“, wenn die Anzahl der Möglichkeiten in jeder Stufe nicht von der vorherigen Wahl abhängt.

**Gleichheitsregel.** Gibt es eine Bijektion $$A \to B$$, dann ist $$\lvert A\rvert = \lvert B\rvert$$. Damit übersetzt man ein schwieriges Zählproblem in ein leichtes.

**Komplementregel.** $$\lvert A\rvert = \lvert U\rvert - \lvert U \setminus A\rvert$$. Ideal für „mindestens ein“.

**Beispiel 1.** Passwörter der Länge $$8$$ aus Kleinbuchstaben und Ziffern ($$36$$ Zeichen) mit mindestens einer Ziffer: alle minus die ohne Ziffer,

$$
36^8 - 26^8 = 2\,821\,109\,907\,456 - 208\,827\,064\,576 = 2\,612\,282\,842\,880.
$$

Der typische Fehler wäre „$$10$$ Möglichkeiten für die Ziffer, $$36^7$$ für den Rest, mal $$8$$ Positionen“: Das zählt Passwörter mit mehreren Ziffern mehrfach.

#### Die vier Grundaufgaben

Auswahl von $$k$$ Elementen aus $$n$$:

| | ohne Wiederholung | mit Wiederholung |
|---|:-:|:-:|
| **mit Reihenfolge** (Variation) | $$n^{\underline k} = \dfrac{n!}{(n-k)!}$$ | $$n^k$$ |
| **ohne Reihenfolge** (Kombination) | $$\dbinom nk = \dfrac{n!}{k!\,(n-k)!}$$ | $$\dbinom{n+k-1}{k}$$ |

Sonderfall **Permutationen**: alle $$n$$ Elemente anordnen, $$n!$$ Möglichkeiten. **Permutationen mit Wiederholung** (Multinomialkoeffizient): $$n$$ Objekte, davon $$k_1$$ gleiche der Sorte 1, …, $$k_r$$ der Sorte $$r$$:

$$
\binom{n}{k_1, \dots, k_r} = \frac{n!}{k_1!\, k_2! \cdots k_r!}.
$$

**Modelle.** $$k$$-Variationen mit Wiederholung entsprechen Funktionen $$\{1,\dots,k\} \to \{1,\dots,n\}$$, ohne Wiederholung injektiven Funktionen. $$k$$-Kombinationen ohne Wiederholung entsprechen $$k$$-elementigen Teilmengen.

**Beispiel 2 (alle vier Fälle mit $$n = 10$$, $$k = 3$$).** Dreistellige Ziffernfolge: $$10^3 = 1000$$. Gold, Silber, Bronze unter 10 Läufern: $$10 \cdot 9 \cdot 8 = 720$$. Drei Gewinner gleicher Preise: $$\binom{10}{3} = 120$$. Drei Kugeln Eis im Becher aus 10 Sorten, Sorten dürfen sich wiederholen: $$\binom{12}{3} = 220$$. Anagramme von ANANAS: $$\frac{6!}{3!\, 2!\, 1!} = 60$$.

**Satz (Kombinationen mit Wiederholung) (B).** Die Anzahl der $$k$$-Multimengen aus $$n$$ Sorten ist $$\binom{n+k-1}{k}$$. Gleichwertig: Die Gleichung $$x_1 + \dots + x_n = k$$ hat $$\binom{n+k-1}{n-1}$$ Lösungen in $$\mathbb N_0$$.

<details class="beweis" markdown="1">
<summary>Beweis mit Sternen und Strichen</summary>

Eine Lösung $$(x_1, \dots, x_n)$$ entspricht eindeutig einer Folge aus $$k$$ Sternen und $$n - 1$$ Trennstrichen: erst $$x_1$$ Sterne, ein Strich, $$x_2$$ Sterne, ein Strich, und so weiter. Für $$n = 3$$, $$k = 5$$ entspricht $$(2, 0, 3)$$ der Folge ★★ / / ★★★. Diese Zuordnung ist bijektiv. Eine solche Folge hat $$n + k - 1$$ Positionen, und man wählt die $$n - 1$$ Positionen der Striche: $$\binom{n+k-1}{n-1} = \binom{n+k-1}{k}$$ Möglichkeiten.

</details>

**Beispiel 3.** Wie viele Lösungen hat $$x_1 + x_2 + x_3 = 10$$ in $$\mathbb N_0$$? $$\binom{12}{2} = 66$$. Mit der Bedingung $$x_i \ge 1$$ substituiert man $$y_i = x_i - 1 \ge 0$$: $$y_1 + y_2 + y_3 = 7$$, also $$\binom{9}{2} = 36$$.

#### Binomialkoeffizienten und Pascal

**Eigenschaften.** $$\binom n0 = \binom nn = 1$$, $$\binom nk = \binom{n}{n-k}$$ (Symmetrie), $$k\binom nk = n\binom{n-1}{k-1}$$.

**Satz (Pascalsche Rekursion) (B).** Für $$1 \le k \le n$$ gilt $$\binom{n+1}{k} = \binom nk + \binom n{k-1}$$.

<details class="beweis" markdown="1">
<summary>Kombinatorischer Beweis</summary>

Links stehen die $$k$$-Teilmengen von $$\{1, \dots, n+1\}$$. Sie zerfallen disjunkt in die, die $$n+1$$ nicht enthalten (das sind die $$k$$-Teilmengen von $$\{1, \dots, n\}$$, also $$\binom nk$$), und die, die $$n+1$$ enthalten (der Rest ist eine $$(k-1)$$-Teilmenge von $$\{1, \dots, n\}$$, also $$\binom n{k-1}$$). Summenregel. Rechnerisch geht es auch über den Hauptnenner $$k!\,(n+1-k)!$$.

</details>

Daraus entsteht das **Pascalsche Dreieck**; jede Zahl ist die Summe der zwei darüber:

```text
n=0:          1
n=1:        1   1
n=2:      1   2   1
n=3:    1   3   3   1
n=4:  1   4   6   4   1
n=5: 1  5  10  10   5   1
```

**Binomischer Lehrsatz (B).** Für Elemente $$a, b$$ eines kommutativen Rings und $$n \in \mathbb N_0$$ gilt

$$
(a + b)^n = \sum_{k=0}^{n} \binom nk a^k b^{n-k}.
$$

<details class="beweis" markdown="1">
<summary>Beweis</summary>

**Kombinatorisch.** Beim Ausmultiplizieren von $$(a+b)(a+b)\cdots(a+b)$$ wählt man aus jedem der $$n$$ Faktoren entweder $$a$$ oder $$b$$. Der Term $$a^k b^{n-k}$$ entsteht genau so oft, wie es Möglichkeiten gibt, die $$k$$ Faktoren für $$a$$ zu wählen, also $$\binom nk$$-mal.

**Induktiv.** Für $$n = 0$$ steht $$1 = 1$$. Schritt:

$$
\begin{aligned}
(a+b)^{n+1} &= (a+b)\sum_{k=0}^{n} \binom nk a^k b^{n-k} = \sum_{k=0}^{n} \binom nk a^{k+1} b^{n-k} + \sum_{k=0}^{n} \binom nk a^k b^{n+1-k}\\
&= \sum_{k=1}^{n+1} \binom n{k-1} a^{k} b^{n+1-k} + \sum_{k=0}^{n} \binom nk a^k b^{n+1-k} = \sum_{k=0}^{n+1} \binom{n+1}{k} a^k b^{n+1-k},
\end{aligned}
$$

wobei man im ersten Summanden den Index verschoben und am Ende Pascal benutzt hat (mit $$\binom n{-1} = \binom n{n+1} = 0$$).

</details>

**Folgerungen.** $$a = b = 1$$: $$\sum_k \binom nk = 2^n$$ (Anzahl aller Teilmengen). $$a = -1$$, $$b = 1$$: $$\sum_k (-1)^k \binom nk = 0$$ für $$n \ge 1$$ (gleich viele gerade wie ungerade Teilmengen).

#### Inklusion-Exklusion

**Satz (B).** Für endliche Mengen $$A_1, \dots, A_n$$ gilt

$$
\Bigl\lvert \bigcup_{i=1}^n A_i \Bigr\rvert = \sum_{i} \lvert A_i\rvert - \sum_{i<j} \lvert A_i \cap A_j\rvert + \sum_{i<j<k} \lvert A_i \cap A_j \cap A_k\rvert - \dots + (-1)^{n+1} \lvert A_1 \cap \dots \cap A_n\rvert.
$$

<details class="beweis" markdown="1">
<summary>Beweis durch Zählen jedes Elements</summary>

Sei $$x$$ ein Element der Vereinigung, das in genau $$m \ge 1$$ der Mengen liegt. Links wird $$x$$ einmal gezählt. Rechts wird es in der Summe über die $$j$$-fachen Schnitte genau $$\binom mj$$-mal gezählt, mit Vorzeichen $$(-1)^{j+1}$$. Insgesamt

$$
\sum_{j=1}^{m} (-1)^{j+1}\binom mj = 1 - \sum_{j=0}^{m} (-1)^j \binom mj = 1 - (1 - 1)^m = 1.
$$

Elemente außerhalb der Vereinigung kommen auf keiner Seite vor.

</details>

**Beispiel 4.** Wie viele Zahlen in $$\{1, \dots, 1000\}$$ sind durch $$2$$, $$3$$ oder $$5$$ teilbar? Mit $$\lvert A_d\rvert = \lfloor 1000/d \rfloor$$:

$$
500 + 333 + 200 - 166 - 100 - 66 + 33 = 734.
$$

Also sind $$266$$ Zahlen zu $$30$$ teilerfremd. Das ist (fast) $$1000 \cdot \varphi(30)/30 = 266{,}\overline 6$$, passt zur Phi-Funktion aus Kapitel 1.

**Anwendungen.** Anzahl der surjektiven Funktionen einer $$n$$-Menge auf eine $$k$$-Menge: $$\sum_{j=0}^{k} (-1)^j \binom kj (k-j)^n$$. Beispiel $$n = 5$$, $$k = 3$$: $$243 - 3 \cdot 32 + 3 \cdot 1 - 0 = 150$$. **Fixpunktfreie Permutationen** (Derangements): $$D_n = n! \sum_{j=0}^{n} \frac{(-1)^j}{j!}$$, z. B. $$D_4 = 24 - 24 + 12 - 4 + 1 = 9$$.

#### Schubfachprinzip

**Satz.** Verteilt man $$n$$ Objekte auf $$k < n$$ Schubfächer, liegen in einem Fach mindestens zwei. Allgemein: In einem Fach liegen mindestens $$\lceil n/k \rceil$$ Objekte. Formal: Eine Funktion $$A \to B$$ mit $$\lvert A\rvert > \lvert B\rvert$$ ist nicht injektiv.

**Beispiel 5 (B).** Unter je $$n + 1$$ Zahlen aus $$\{1, \dots, 2n\}$$ gibt es zwei, von denen eine die andere teilt.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Schreibe jede gewählte Zahl als $$2^e \cdot u$$ mit ungeradem $$u$$. Es gibt nur $$n$$ ungerade Zahlen in $$\{1, \dots, 2n\}$$, das sind die Schubfächer. Bei $$n + 1$$ Zahlen haben zwei denselben ungeraden Teil $$u$$: $$2^e u$$ und $$2^f u$$ mit $$e < f$$. Dann teilt die erste die zweite.

</details>

#### Stirling-Zahlen (kurz)

- **Stirling-Zahlen zweiter Art** $$S(n, k)$$: Anzahl der Partitionen einer $$n$$-Menge in genau $$k$$ nichtleere Blöcke. Rekursion $$S(n,k) = S(n-1, k-1) + k\, S(n-1, k)$$ (Element $$n$$ bildet einen eigenen Block oder kommt in einen der $$k$$ Blöcke). Beispiel $$S(4, 2) = 7$$: $$\{1\}\{234\}$$, $$\{2\}\{134\}$$, $$\{3\}\{124\}$$, $$\{4\}\{123\}$$, $$\{12\}\{34\}$$, $$\{13\}\{24\}$$, $$\{14\}\{23\}$$. Die Anzahl der Surjektionen $$n \to k$$ ist $$k!\, S(n,k)$$, z. B. $$3! \cdot S(5,3) = 6 \cdot 25 = 150$$.
- **Stirling-Zahlen erster Art** $$s(n, k)$$ (vorzeichenlos): Anzahl der Permutationen von $$n$$ Elementen mit genau $$k$$ Zyklen. Rekursion $$s(n,k) = s(n-1,k-1) + (n-1)\, s(n-1,k)$$.
- **Bell-Zahl** $$B_n = \sum_k S(n,k)$$: Anzahl aller Partitionen, also aller Äquivalenzrelationen auf einer $$n$$-Menge.

#### Stolperfallen

- Bei „mindestens ein“ fast immer das Komplement zählen.
- Erst entscheiden, ob Reihenfolge und Wiederholung zählen, dann die Formel wählen. Kontrolle mit einem Mini-Beispiel durch Auflisten.
- Kombinationen mit Wiederholung: $$\binom{n+k-1}{k}$$, nicht $$\binom{n+k}{k}$$ und nicht $$n^k / k!$$.
- Inklusion-Exklusion nicht nach dem zweiten Term abbrechen.
- Produktregel nur, wenn die Anzahl der Möglichkeiten in jeder Stufe gleich bleibt.

**Typische Aufgaben:** Anzahl von Wörtern, Passwörtern, Kennzeichen; Verteilen von Kugeln auf Urnen (unterscheidbar oder nicht); Lösungen ganzzahliger Gleichungen; Binomialidentitäten kombinatorisch oder induktiv beweisen; Teilbarkeit mit Inklusion-Exklusion; Schubfachargumente.

### 5 Differenzengleichungen

Eine Differenzengleichung (Rekursion) beschreibt eine Folge $$(x_n)$$ durch frühere Glieder. Ziel ist eine **explizite Formel** für $$x_n$$. Das Verfahren ähnelt linearen Differentialgleichungen: homogene Lösung über die charakteristische Gleichung, dazu eine partikuläre Lösung.

#### Begriffe

Eine **lineare Differenzengleichung $$k$$-ter Ordnung mit konstanten Koeffizienten** hat die Form

$$
x_{n+k} + a_{k-1} x_{n+k-1} + \dots + a_1 x_{n+1} + a_0 x_n = s_n, \qquad a_0 \ne 0.
$$

Sie heißt **homogen**, wenn $$s_n = 0$$ für alle $$n$$, sonst **inhomogen** mit **Störglied** $$s_n$$. Durch $$k$$ Anfangswerte $$x_0, \dots, x_{k-1}$$ ist die Lösung eindeutig bestimmt (Induktion).

**Satz (Struktur der Lösungsmenge) (B).**

1. Die Lösungen der homogenen Gleichung bilden einen Vektorraum der Dimension $$k$$.
2. Ist $$x^{(p)}$$ eine Lösung der inhomogenen Gleichung, dann sind alle Lösungen genau $$x = x^{(p)} + x^{(h)}$$ mit $$x^{(h)}$$ homogen.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

1. Die linke Seite $$L(x)_n = x_{n+k} + a_{k-1}x_{n+k-1} + \dots + a_0 x_n$$ ist linear in $$x$$: $$L(\alpha x + \beta y) = \alpha L(x) + \beta L(y)$$. Die homogenen Lösungen bilden also den Kern von $$L$$, einen Untervektorraum. Die Abbildung „Lösung $$\mapsto$$ Anfangswerte $$(x_0, \dots, x_{k-1})$$“ ist linear und bijektiv (jede Wahl von Anfangswerten liefert genau eine Lösung), also ist die Dimension $$k$$.
2. Ist $$x$$ eine Lösung, dann gilt $$L(x - x^{(p)}) = s - s = 0$$, also ist $$x - x^{(p)}$$ homogen. Umgekehrt ist $$L(x^{(p)} + x^{(h)}) = s + 0 = s$$.

</details>

#### Erste Ordnung

$$x_{n+1} = a x_n + b$$ hat die Lösung

$$
x_n = a^n x_0 + b \cdot \frac{a^n - 1}{a - 1} \quad (a \ne 1), \qquad x_n = x_0 + nb \quad (a = 1).
$$

<details class="beweis" markdown="1">
<summary>Herleitung durch Iteration</summary>

$$x_n = a x_{n-1} + b = a^2 x_{n-2} + ab + b = \dots = a^n x_0 + b(a^{n-1} + \dots + a + 1)$$, und die geometrische Summe ist $$\frac{a^n - 1}{a - 1}$$. Formal per Induktion. Alternativ: Fixpunkt $$x^* = \frac{b}{1-a}$$ als konstante partikuläre Lösung, dann $$x_n = x^* + (x_0 - x^*)a^n$$.

</details>

**Beispiel 1 (Türme von Hanoi).** Um $$n$$ Scheiben umzusetzen, setzt man $$n - 1$$ Scheiben auf den Hilfsstab, die größte Scheibe ans Ziel und die $$n - 1$$ Scheiben darauf: $$x_n = 2x_{n-1} + 1$$, $$x_0 = 0$$. Mit der Formel ($$a = 2$$, $$b = 1$$): $$x_n = 2^n - 1$$.

#### Homogene Gleichungen: charakteristische Gleichung

Ansatz $$x_n = \lambda^n$$ mit $$\lambda \ne 0$$. Einsetzen und durch $$\lambda^n$$ kürzen ergibt die **charakteristische Gleichung**

$$
\lambda^k + a_{k-1}\lambda^{k-1} + \dots + a_1 \lambda + a_0 = 0.
$$

**Satz (B).** Hat die charakteristische Gleichung die Nullstellen $$\lambda_1, \dots, \lambda_r$$ mit Vielfachheiten $$m_1, \dots, m_r$$, dann ist die allgemeine Lösung der homogenen Gleichung

$$
x_n = \sum_{i=1}^{r} \bigl(c_{i,0} + c_{i,1} n + \dots + c_{i,m_i-1} n^{m_i - 1}\bigr)\lambda_i^n.
$$

<details class="beweis" markdown="1">
<summary>Beweis für zweite Ordnung</summary>

Gleichung $$x_{n+2} + p x_{n+1} + q x_n = 0$$, charakteristisches Polynom $$\chi(\lambda) = \lambda^2 + p\lambda + q$$.

**Einfache Nullstelle.** Ist $$\chi(\lambda_1) = 0$$, dann gilt für $$x_n = \lambda_1^n$$: $$\lambda_1^{n+2} + p\lambda_1^{n+1} + q\lambda_1^n = \lambda_1^n \chi(\lambda_1) = 0$$.

**Doppelte Nullstelle.** Dann ist $$\chi(\lambda) = (\lambda - \lambda_1)^2$$, also $$p = -2\lambda_1$$ und $$q = \lambda_1^2$$. Für $$x_n = n\lambda_1^n$$:

$$
(n+2)\lambda_1^{n+2} - 2\lambda_1 (n+1)\lambda_1^{n+1} + \lambda_1^2 n \lambda_1^n = \lambda_1^{n+2}\bigl((n+2) - 2(n+1) + n\bigr) = 0.
$$

**Basis.** In beiden Fällen hat man zwei Lösungen. Sie sind linear unabhängig, weil ihre Anfangswerte $$(1, \lambda_1), (1, \lambda_2)$$ bei $$\lambda_1 \ne \lambda_2$$ bzw. $$(1, \lambda_1), (0, \lambda_1)$$ bei $$\lambda_1 \ne 0$$ linear unabhängig sind. Wegen Dimension $$2$$ (Struktursatz) ist das eine Basis.

</details>

**Beispiel 2 (verschiedene Nullstellen).** $$x_{n+2} = 5x_{n+1} - 6x_n$$, $$x_0 = 1$$, $$x_1 = 4$$. Charakteristische Gleichung $$\lambda^2 - 5\lambda + 6 = (\lambda - 2)(\lambda - 3) = 0$$, also $$x_n = a \cdot 2^n + b \cdot 3^n$$. Anfangswerte:

$$
a + b = 1, \quad 2a + 3b = 4 \quad \Rightarrow \quad b = 2,\ a = -1, \qquad x_n = 2 \cdot 3^n - 2^n.
$$

Probe: $$x_2 = 5 \cdot 4 - 6 \cdot 1 = 14$$ und $$2 \cdot 9 - 4 = 14$$.

**Beispiel 3 (doppelte Nullstelle).** $$x_{n+2} = 4x_{n+1} - 4x_n$$, $$x_0 = 1$$, $$x_1 = 6$$. $$\lambda^2 - 4\lambda + 4 = (\lambda - 2)^2$$, also $$x_n = (a + bn)2^n$$. $$x_0 = a = 1$$, $$x_1 = 2(1 + b) = 6$$, also $$b = 2$$ und $$x_n = (1 + 2n)\, 2^n$$. Probe: $$x_2 = 24 - 4 = 20 = 5 \cdot 4$$.

**Komplexe Nullstellen.** Bei reellen Koeffizienten treten sie paarweise $$\lambda = r e^{\pm i\vartheta}$$ auf. Reelle Basis: $$r^n \cos(n\vartheta)$$ und $$r^n \sin(n\vartheta)$$. Beispiel $$x_{n+2} = -x_n$$: $$\lambda = \pm i$$, $$r = 1$$, $$\vartheta = \pi/2$$, also $$x_n = A\cos\frac{n\pi}{2} + B\sin\frac{n\pi}{2}$$ (periodisch mit Periode $$4$$).

#### Fibonacci explizit

**Satz (Formel von Binet) (B).** Für $$F_0 = 0$$, $$F_1 = 1$$, $$F_{n+2} = F_{n+1} + F_n$$ gilt

$$
F_n = \frac{1}{\sqrt 5}\left(\left(\frac{1 + \sqrt 5}{2}\right)^n - \left(\frac{1 - \sqrt 5}{2}\right)^n\right).
$$

<details class="beweis" markdown="1">
<summary>Herleitung</summary>

Charakteristische Gleichung $$\lambda^2 = \lambda + 1$$, also $$\lambda_{1,2} = \frac{1 \pm \sqrt 5}{2}$$ (goldener Schnitt $$\phi = \lambda_1 \approx 1{,}618$$ und $$\lambda_2 = 1 - \phi \approx -0{,}618$$). Ansatz $$F_n = a\lambda_1^n + b\lambda_2^n$$.

$$
F_0 = a + b = 0, \qquad F_1 = a\lambda_1 + b\lambda_2 = a(\lambda_1 - \lambda_2) = a\sqrt 5 = 1.
$$

Also $$a = \frac{1}{\sqrt 5}$$, $$b = -\frac{1}{\sqrt 5}$$. Weil $$\lvert\lambda_2\rvert < 1$$, ist $$F_n$$ die nächste ganze Zahl zu $$\phi^n / \sqrt 5$$. Fibonacci wächst also exponentiell mit Basis $$\phi$$.

</details>

#### Inhomogene Gleichungen: Ansatz nach dem Störglied

Man sucht eine partikuläre Lösung mit einem Ansatz vom Typ des Störglieds:

| Störglied $$s_n$$ | Ansatz $$x_n^{(p)}$$ |
|---|---|
| Konstante $$c$$ | Konstante $$A$$ |
| Polynom vom Grad $$d$$ | Polynom vom Grad $$d$$ |
| $$c \cdot q^n$$ | $$A \cdot q^n$$ |
| $$P(n) \cdot q^n$$, $$P$$ vom Grad $$d$$ | $$Q(n) \cdot q^n$$, $$Q$$ vom Grad $$d$$ |

**Resonanzfall:** Ist $$q$$ (bei Polynomen: $$q = 1$$) eine $$m$$-fache Nullstelle der charakteristischen Gleichung, multipliziert man den Ansatz mit $$n^m$$.

**Vorgehen:** (1) homogene Lösung mit freien Konstanten, (2) partikuläre Lösung mit Ansatz, Koeffizientenvergleich, (3) Summe bilden, (4) **erst jetzt** die Konstanten aus den Anfangswerten bestimmen.

**Beispiel 4 (Polynom als Störglied).** $$x_{n+1} = 3x_n + 2n$$, $$x_0 = 0$$. Homogen: $$C \cdot 3^n$$. Ansatz $$x_n^{(p)} = An + B$$ ($$1$$ ist keine Nullstelle von $$\lambda - 3$$):

$$
A(n+1) + B = 3(An + B) + 2n \;\Rightarrow\; A = 3A + 2,\ A + B = 3B \;\Rightarrow\; A = -1,\ B = -\tfrac12.
$$

Also $$x_n = C\cdot 3^n - n - \frac12$$ und mit $$x_0 = 0$$: $$C = \frac12$$, $$x_n = \frac{3^n - 2n - 1}{2}$$. Probe: $$x_1 = 0$$, $$x_2 = 2$$, $$x_3 = 10$$ stimmen mit der Rekursion überein.

**Beispiel 5 (Resonanz).** $$x_{n+1} = 2x_n + 2^n$$, $$x_0 = 0$$. Die Basis $$2$$ des Störglieds ist Nullstelle von $$\lambda - 2$$, also Ansatz $$A n 2^n$$:

$$
A(n+1)2^{n+1} = 2An2^n + 2^n \;\Rightarrow\; 2A(n+1) = 2An + 1 \;\Rightarrow\; A = \tfrac12.
$$

Allgemein $$x_n = C 2^n + n 2^{n-1}$$, mit $$x_0 = 0$$ folgt $$C = 0$$, also $$x_n = n \cdot 2^{n-1}$$ (Folge $$0, 1, 4, 12, 32, \dots$$). Der naive Ansatz $$A \cdot 2^n$$ führt auf den Widerspruch $$2A = 2A + 1$$.

#### Erzeugende Funktionen (kurz)

Die **erzeugende Funktion** einer Folge ist die formale Potenzreihe $$X(z) = \sum_{n \ge 0} x_n z^n$$. Eine Rekursion wird zu einer algebraischen Gleichung für $$X(z)$$, die man mit Partialbruchzerlegung zurückübersetzt. Grundbaustein ist die geometrische Reihe

$$
\frac{1}{1 - qz} = \sum_{n \ge 0} q^n z^n.
$$

**Beispiel 6.** $$x_{n+1} = 2x_n + 1$$, $$x_0 = 0$$ (Hanoi). Multipliziere mit $$z^{n+1}$$ und summiere über $$n \ge 0$$:

$$
X(z) - x_0 = 2zX(z) + \frac{z}{1 - z} \;\Rightarrow\; X(z) = \frac{z}{(1-z)(1-2z)} = \frac{1}{1 - 2z} - \frac{1}{1 - z}.
$$

Koeffizientenvergleich: $$x_n = 2^n - 1$$. Für Fibonacci erhält man genauso $$F(z) = \frac{z}{1 - z - z^2}$$.

#### Stolperfallen

- Die Konstanten erst **nach** dem Addieren der partikulären Lösung aus den Anfangswerten bestimmen, nicht schon bei der homogenen Lösung.
- Resonanzfall erkennen, sonst führt der Ansatz auf einen Widerspruch.
- Bei doppelter Nullstelle $$(a + bn)\lambda^n$$ statt $$a\lambda^n + b\lambda^n$$ (das wäre nur eine Konstante).
- Die Indexverschiebung beachten: $$x_n = 2x_{n-1}$$ und $$x_{n+1} = 2x_n$$ sind dieselbe Gleichung.
- Immer zwei, drei Glieder mit der Rekursion nachrechnen und mit der Formel vergleichen.

**Typische Aufgaben:** homogene Gleichung zweiter Ordnung mit Anfangswerten lösen; inhomogene Gleichung mit konstantem, polynomialem oder exponentiellem Störglied; eine Rekursion aus einem Zählproblem aufstellen (Wörter ohne zwei aufeinanderfolgende Einsen, Treppensteigen mit Schritten 1 und 2) und lösen; Lösung per Induktion bestätigen.

### 6 Graphentheorie

Graphen modellieren alles, was aus Objekten und Verbindungen besteht: Straßennetze, Abhängigkeiten, Netzwerke. In ADM kommen Begriffe, ein paar Standardbeweise und die Algorithmen von Kruskal, Prim und Dijkstra.

#### Grundbegriffe

Ein (einfacher, ungerichteter) **Graph** $$G = (V, E)$$ besteht aus einer Knotenmenge $$V$$ und einer Kantenmenge $$E \subseteq \{\{u, v\} : u, v \in V, u \ne v\}$$. Bei **gerichteten** Graphen sind Kanten geordnete Paare $$(u, v)$$, bei **Multigraphen** sind Mehrfachkanten und Schlingen erlaubt.

- **Grad** $$d(v)$$: Anzahl der Kanten an $$v$$ (Schlinge zählt doppelt). Gerichtet: Eingangs- und Ausgangsgrad.
- **Kantenfolge** (Weg im weiten Sinn), **Weg/Pfad** (keine Knoten doppelt), **Kreis** (geschlossen, mindestens 3 Knoten, keine Knoten doppelt außer Start = Ende). Die Begriffe variieren je nach Buch; Notation der Vorlesung prüfen.
- **Teilgraph** $$H \subseteq G$$; **induzierter** Teilgraph: alle Kanten zwischen den gewählten Knoten.
- **vollständiger Graph** $$K_n$$ mit $$\binom n2$$ Kanten; **vollständig bipartit** $$K_{m,n}$$; **Kreis** $$C_n$$; **Weg** $$P_n$$.
- **isomorph**: Es gibt eine Bijektion der Knoten, die Kanten genau auf Kanten abbildet. Invarianten wie Knotenzahl, Kantenzahl und Gradfolge müssen übereinstimmen, reichen aber nicht.

**Handschlaglemma (B).** In jedem Graphen gilt $$\sum_{v \in V} d(v) = 2\lvert E\rvert$$. Folgerung: Die Anzahl der Knoten mit ungeradem Grad ist gerade.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Doppeltes Abzählen der Paare (Knoten, anliegende Kante): Jede Kante $$\{u, v\}$$ wird genau zweimal gezählt, einmal bei $$u$$ und einmal bei $$v$$. Die Summe der Grade zählt dieselben Paare knotenweise. Folgerung: Die Summe der geraden Grade ist gerade, also muss auch die Summe der ungeraden Grade gerade sein, und das geht nur mit einer geraden Anzahl ungerader Summanden.

</details>

**Beispiel 1.** Gibt es einen Graphen mit Gradfolge $$(3, 3, 3, 3, 3)$$? Nein: Die Gradsumme $$15$$ ist ungerade.

#### Zusammenhang

$$G$$ heißt **zusammenhängend**, wenn je zwei Knoten durch einen Weg verbunden sind. „Es gibt einen Weg von $$u$$ nach $$v$$“ ist eine Äquivalenzrelation; ihre Klassen sind die **Zusammenhangskomponenten**. Eine **Brücke** ist eine Kante, deren Entfernen die Anzahl der Komponenten erhöht; eine Kante ist genau dann Brücke, wenn sie auf keinem Kreis liegt. Gerichtete Graphen: **stark zusammenhängend**, wenn es von jedem Knoten zu jedem einen gerichteten Weg gibt.

**Satz.** Ein zusammenhängender Graph mit $$n$$ Knoten hat mindestens $$n - 1$$ Kanten.

#### Bäume

**Definition.** Ein **Baum** ist ein zusammenhängender Graph ohne Kreise. Ein **Wald** ist ein kreisfreier Graph. Knoten vom Grad $$1$$ heißen **Blätter**.

**Satz (Charakterisierung) (B).** Für einen Graphen $$T$$ mit $$n$$ Knoten sind gleichwertig:

1. $$T$$ ist ein Baum.
2. Je zwei Knoten sind durch **genau einen** Weg verbunden.
3. $$T$$ ist zusammenhängend und hat $$n - 1$$ Kanten.
4. $$T$$ ist kreisfrei und hat $$n - 1$$ Kanten.
5. $$T$$ ist minimal zusammenhängend (jede Kante ist eine Brücke).
6. $$T$$ ist maximal kreisfrei (jede neue Kante erzeugt einen Kreis).

<details class="beweis" markdown="1">
<summary>Beweis von „Baum mit n Knoten hat n − 1 Kanten“</summary>

**Lemma:** Jeder Baum mit $$n \ge 2$$ Knoten hat mindestens zwei Blätter. Nimm einen längsten Weg $$v_0 v_1 \dots v_k$$. Hätte $$v_0$$ einen weiteren Nachbarn außer $$v_1$$, dann läge dieser entweder auf dem Weg (dann gäbe es einen Kreis) oder nicht (dann wäre der Weg verlängerbar). Also ist $$d(v_0) = 1$$, genauso $$d(v_k) = 1$$.

**Induktion über $$n$$.** Für $$n = 1$$: $$0$$ Kanten. Schritt: Ein Baum mit $$n + 1 \ge 2$$ Knoten hat ein Blatt $$v$$. Entfernt man $$v$$ und seine einzige Kante, bleibt der Rest zusammenhängend (kein Weg zwischen anderen Knoten läuft durch ein Blatt) und kreisfrei, also ein Baum mit $$n$$ Knoten und nach IV $$n - 1$$ Kanten. Zusammen $$n$$ Kanten.

</details>

**Satz von Cayley.** Es gibt $$n^{n-2}$$ verschiedene (beschriftete) Bäume auf $$n$$ Knoten. Für $$n = 4$$ sind das $$16$$.

**Wurzelbäume.** Zeichnet man einen Knoten als Wurzel aus, erhält man Eltern, Kinder, Tiefe und Höhe. Ein Binärbaum der Höhe $$h$$ hat höchstens $$2^{h+1} - 1$$ Knoten.

#### Spannbäume, Kruskal und Prim

Ein **Spannbaum** von $$G$$ ist ein Teilgraph, der ein Baum ist und alle Knoten enthält. Jeder zusammenhängende Graph hat einen (Kanten auf Kreisen entfernen, bis keine Kreise mehr da sind). Bei Kantengewichten sucht man einen **minimalen Spannbaum** (MST).

**Kruskal:** Kanten aufsteigend nach Gewicht sortieren. Kante nehmen, wenn sie keinen Kreis mit den schon gewählten bildet. Stopp bei $$n - 1$$ Kanten.

**Prim:** Bei einem Startknoten beginnen. Immer die leichteste Kante wählen, die den bisherigen Baum mit einem neuen Knoten verbindet.

**Warum beide korrekt sind (Schnitteigenschaft).** Teilt man die Knoten in zwei Teile, dann liegt eine leichteste Kante über den Schnitt in einem minimalen Spannbaum. Sonst könnte man sie in einen MST einfügen, den entstehenden Kreis betrachten (er kreuzt den Schnitt ein zweites Mal) und die schwerere Kante dort entfernen, ohne das Gewicht zu erhöhen.

**Beispiel-Graph** für diesen Abschnitt und Dijkstra (Kanten mit Gewicht):

| Kante | AB | AC | BC | BD | CD | CE | DE | DF | EF |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Gewicht | 4 | 2 | 1 | 5 | 8 | 10 | 2 | 6 | 3 |

```text
A ---4--- B ---5--- D ---6--- F
 \        |       / |        /
  2       1    8    2      3
   \      | /       |    /
    +-----C         E---+
          |         |
          +---10----+
```

**Beispiel 2 (Kruskal).** Sortiert: BC 1 ✓, AC 2 ✓, DE 2 ✓, EF 3 ✓, AB 4 ✗ (Kreis A-B-C), BD 5 ✓. Jetzt sind $$5 = n - 1$$ Kanten gewählt. MST $$\{BC, AC, DE, EF, BD\}$$ mit Gewicht $$1 + 2 + 2 + 3 + 5 = 13$$.

**Beispiel 3 (Prim ab A).** AC 2, dann CB 1, dann BD 5 (billiger als CD 8 und CE 10), dann DE 2, dann EF 3. Derselbe Baum, Gewicht $$13$$. Bei verschiedenen Gewichten ist der MST eindeutig, sonst nur das Gewicht.

#### Kürzeste Wege: Dijkstra

**Dijkstra** (nur für nichtnegative Gewichte): Setze $$d(s) = 0$$, sonst $$\infty$$. Wiederhole: Wähle den nicht fixierten Knoten $$u$$ mit kleinstem $$d(u)$$ und fixiere ihn. Für jeden Nachbarn $$v$$: $$d(v) \leftarrow \min\bigl(d(v), d(u) + w(u,v)\bigr)$$, bei Verbesserung Vorgänger $$v \mapsto u$$ merken.

**Beispiel 4.** Start $$A$$ im Graphen oben. Fett ist der jeweils fixierte Knoten, in Klammern der Vorgänger.

| Schritt | fixiert | A | B | C | D | E | F |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | – | 0 | ∞ | ∞ | ∞ | ∞ | ∞ |
| 1 | A | **0** | 4 (A) | 2 (A) | ∞ | ∞ | ∞ |
| 2 | C | | 3 (C) | **2** | 10 (C) | 12 (C) | ∞ |
| 3 | B | | **3** | | 8 (B) | 12 (C) | ∞ |
| 4 | D | | | | **8** | 10 (D) | 14 (D) |
| 5 | E | | | | | **10** | 13 (E) |
| 6 | F | | | | | | **13** |

Kürzester Weg nach $$F$$ rückwärts über die Vorgänger: $$F \leftarrow E \leftarrow D \leftarrow B \leftarrow C \leftarrow A$$, also A-C-B-D-E-F mit Länge $$2 + 1 + 5 + 2 + 3 = 13$$.

<details class="beweis" markdown="1">
<summary>Warum Dijkstra stimmt (Beweisskizze)</summary>

Invariante: Für jeden fixierten Knoten ist $$d(u)$$ die echte Distanz. Angenommen, $$u$$ wird mit zu großem $$d(u)$$ fixiert. Ein kürzester Weg von $$s$$ nach $$u$$ verlässt irgendwann die fixierte Menge, über eine Kante $$x \to y$$ mit $$x$$ fixiert, $$y$$ nicht. Dann ist $$d(y) \le \operatorname{dist}(s, x) + w(x, y) \le \operatorname{dist}(s, u) < d(u)$$, weil die restlichen Gewichte nichtnegativ sind. Dann hätte der Algorithmus $$y$$ statt $$u$$ gewählt. Widerspruch. Bei negativen Gewichten bricht genau dieser Schritt.

</details>

#### Euler- und Hamiltonkreise

Ein **Eulerkreis** durchläuft **jede Kante** genau einmal und kehrt zum Start zurück; ein **Eulerweg** muss nicht zurückkehren. Ein **Hamiltonkreis** besucht **jeden Knoten** genau einmal.

**Satz von Euler (B).** Ein zusammenhängender (Multi-)Graph hat genau dann einen Eulerkreis, wenn jeder Knoten geraden Grad hat. Er hat genau dann einen Eulerweg, aber keinen Eulerkreis, wenn genau zwei Knoten ungeraden Grad haben; diese sind Start und Ende.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

„$$\Rightarrow$$“: Jedes Mal, wenn der Kreis durch einen Knoten läuft, verbraucht er eine eingehende und eine ausgehende Kante. Am Start gilt dasselbe, weil man dort auch ankommt. Also ist jeder Grad gerade.

„$$\Leftarrow$$“ (Induktion über die Kantenzahl): Bei allen Graden gerade und mindestens einer Kante findet man einen Kreis: Laufe von einem Knoten los, ohne Kanten zu wiederholen; weil jeder Grad gerade ist, kommt man aus jedem betretenen Knoten außer dem Start wieder heraus, also endet der Lauf am Start. Entfernt man die Kanten dieses Kreises, bleiben alle Grade gerade. Jede Komponente des Restgraphen hat nach IV einen Eulerkreis und berührt den ersten Kreis (Zusammenhang). Die Kreise lassen sich an den Berührknoten zu einem einzigen Eulerkreis zusammenfügen.

Eulerweg: Verbinde die zwei ungeraden Knoten mit einer neuen Kante, nimm einen Eulerkreis und entferne die Kante wieder.

</details>

**Beispiel 5.** Im Beispiel-Graph sind die Grade $$A{:}\,2$$, $$B{:}\,3$$, $$C{:}\,4$$, $$D{:}\,4$$, $$E{:}\,3$$, $$F{:}\,2$$ (Summe $$18 = 2 \cdot 9$$). Genau $$B$$ und $$E$$ sind ungerade: Es gibt einen Eulerweg von $$B$$ nach $$E$$, aber keinen Eulerkreis. Ein Hamiltonkreis existiert: A-B-D-F-E-C-A.

**Hamiltonkreise** sind schwer: Es ist keine einfache Charakterisierung bekannt (NP-vollständig). Hinreichend ist etwa der **Satz von Dirac**: $$n \ge 3$$ und $$d(v) \ge n/2$$ für alle $$v$$.

#### Bipartite Graphen

$$G$$ heißt **bipartit**, wenn sich $$V$$ so in $$V_1 \cup V_2$$ zerlegen lässt, dass jede Kante zwischen $$V_1$$ und $$V_2$$ verläuft.

**Satz (König).** $$G$$ ist genau dann bipartit, wenn $$G$$ keinen Kreis ungerader Länge enthält.

<details class="beweis" markdown="1">
<summary>Beweisidee</summary>

„$$\Rightarrow$$“: Ein Kreis wechselt mit jeder Kante die Seite. Um zum Start zurückzukommen, braucht er eine gerade Anzahl von Wechseln.

„$$\Leftarrow$$“: Für jede Komponente einen Knoten $$s$$ wählen und $$V_1$$ = Knoten mit gerader Distanz zu $$s$$, $$V_2$$ = mit ungerader Distanz. Eine Kante innerhalb einer Seite würde zusammen mit den zwei kürzesten Wegen zu $$s$$ eine geschlossene Kantenfolge ungerader Länge ergeben, und diese enthält einen ungeraden Kreis.

</details>

Praktisch: Mit einer Breitensuche abwechselnd zwei Farben vergeben. Bäume und gerade Kreise $$C_{2k}$$ sind bipartit, $$K_3$$ nicht.

#### Planare Graphen und Eulersche Polyederformel

$$G$$ heißt **planar**, wenn man ihn ohne Kantenkreuzungen in die Ebene zeichnen kann. Die Zeichnung zerlegt die Ebene in **Flächen** (Gebiete), inklusive der äußeren.

**Eulersche Polyederformel (B).** Für einen zusammenhängenden planaren Graphen mit $$v$$ Knoten, $$e$$ Kanten und $$f$$ Flächen gilt

$$
v - e + f = 2.
$$

<details class="beweis" markdown="1">
<summary>Beweis durch Induktion über die Kantenzahl</summary>

Ist $$G$$ ein Baum, dann ist $$e = v - 1$$ und $$f = 1$$, also $$v - (v-1) + 1 = 2$$. Sonst enthält $$G$$ einen Kreis. Entfernt man eine Kante dieses Kreises, bleibt $$G$$ zusammenhängend, und die zwei Flächen auf beiden Seiten der Kante verschmelzen zu einer. Dabei sinken $$e$$ und $$f$$ je um $$1$$, $$v - e + f$$ bleibt gleich und ist nach Induktionsvoraussetzung $$2$$.

</details>

**Folgerung (B).** Für einen einfachen planaren Graphen mit $$v \ge 3$$ gilt $$e \le 3v - 6$$. Ist er zusätzlich ohne Dreiecke (z. B. bipartit), gilt $$e \le 2v - 4$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Jede Fläche wird von mindestens $$3$$ Kanten begrenzt, und jede Kante grenzt an höchstens $$2$$ Flächen. Doppeltes Abzählen: $$3f \le 2e$$. In Euler eingesetzt: $$2 = v - e + f \le v - e + \frac{2e}{3}$$, also $$e \le 3v - 6$$. Ohne Dreiecke mindestens $$4$$ Kanten pro Fläche: $$4f \le 2e$$ ergibt $$e \le 2v - 4$$. (Für nicht zusammenhängende Graphen gilt die Ungleichung erst recht.)

</details>

**Beispiel 6.** $$K_5$$: $$e = 10 > 3 \cdot 5 - 6 = 9$$, also nicht planar. $$K_{3,3}$$: bipartit, $$e = 9 > 2 \cdot 6 - 4 = 8$$, also nicht planar. Der **Satz von Kuratowski** sagt: Genau die Graphen sind nicht planar, die eine Unterteilung von $$K_5$$ oder $$K_{3,3}$$ enthalten. Die Ungleichungen sind nur notwendige Bedingungen: Aus $$e \le 3v - 6$$ folgt nicht, dass der Graph planar ist.

#### Färbungen

Eine **Knotenfärbung** ordnet jedem Knoten eine Farbe zu, sodass benachbarte Knoten verschiedene Farben haben. Die **chromatische Zahl** $$\chi(G)$$ ist die kleinste mögliche Farbanzahl.

- $$\chi(G) \le 2$$ genau dann, wenn $$G$$ bipartit ist. $$\chi(K_n) = n$$, $$\chi(C_n) = 3$$ für ungerades $$n$$.
- Untere Schranke: Enthält $$G$$ ein $$K_r$$ (Clique), ist $$\chi(G) \ge r$$.
- Obere Schranke: **Greedy** (Knoten der Reihe nach mit der kleinsten freien Farbe) braucht höchstens $$\Delta(G) + 1$$ Farben, $$\Delta$$ = Maximalgrad.
- **Vierfarbensatz:** Jeder planare Graph ist 4-färbbar (computergestützter Beweis). Fünf Farben lassen sich mit $$e \le 3v - 6$$ elementar beweisen (es gibt immer einen Knoten vom Grad höchstens $$5$$).

**Beispiel 7.** Im Beispiel-Graph bilden A, B, C ein Dreieck, also $$\chi \ge 3$$. Greedy in der Reihenfolge A, B, C, D, E, F: $$A = 1$$, $$B = 2$$, $$C = 3$$, $$D = 1$$ (Nachbarn B, C), $$E = 2$$ (Nachbarn C, D), $$F = 3$$ (Nachbarn D, E). Also $$\chi = 3$$.

#### Adjazenzmatrix

Für $$V = \{v_1, \dots, v_n\}$$ ist die **Adjazenzmatrix** $$A = (a_{ij})$$ mit $$a_{ij} = 1$$, falls $$\{v_i, v_j\} \in E$$, sonst $$0$$. Für ungerichtete Graphen ist $$A$$ symmetrisch, die Zeilensummen sind die Grade.

**Satz (B).** Der Eintrag $$(A^k)_{ij}$$ ist die Anzahl der Kantenfolgen der Länge $$k$$ von $$v_i$$ nach $$v_j$$.

<details class="beweis" markdown="1">
<summary>Beweis durch Induktion über k</summary>

$$k = 1$$: Definition. Schritt: $$(A^{k+1})_{ij} = \sum_{l} (A^k)_{il}\, a_{lj}$$. Eine Kantenfolge der Länge $$k + 1$$ von $$v_i$$ nach $$v_j$$ besteht aus einer Folge der Länge $$k$$ von $$v_i$$ zu einem vorletzten Knoten $$v_l$$ und der Kante $$v_l v_j$$. Nach IV gibt es $$(A^k)_{il}$$ solche Folgen, und $$a_{lj}$$ ist $$1$$ genau dann, wenn die letzte Kante existiert. Summenregel über $$l$$.

</details>

**Beispiel 8.** Für das Dreieck $$K_3$$ ist

$$
A = \begin{pmatrix} 0 & 1 & 1\\ 1 & 0 & 1\\ 1 & 1 & 0 \end{pmatrix}, \qquad A^2 = \begin{pmatrix} 2 & 1 & 1\\ 1 & 2 & 1\\ 1 & 1 & 2 \end{pmatrix}.
$$

Die $$2$$ auf der Diagonale: zwei geschlossene Kantenfolgen der Länge $$2$$ (hin und zurück zu jedem Nachbarn). Allgemein ist $$(A^2)_{ii} = d(v_i)$$, und $$\operatorname{spur}(A^3)/6$$ ist die Anzahl der Dreiecke (hier $$A^3$$ mit Diagonale $$2$$, also $$6/6 = 1$$).

Alternativ speichert man Graphen als **Adjazenzlisten** (Speicher $$O(\lvert V\rvert + \lvert E\rvert)$$ statt $$O(\lvert V\rvert^2)$$) oder mit einer **Inzidenzmatrix** (Knoten mal Kanten).

#### Stolperfallen

- Euler: Kanten, Hamilton: Knoten. Für Euler gibt es ein einfaches Kriterium, für Hamilton nicht.
- Dijkstra funktioniert nicht mit negativen Kantengewichten.
- Kruskal prüft auf Kreise, Prim wächst immer als ein zusammenhängender Baum.
- $$e \le 3v - 6$$ widerlegt Planarität, beweist sie aber nicht.
- Beim Handschlaglemma zählen Schlingen doppelt.
- Isomorphie: gleiche Gradfolge reicht nicht.

**Typische Aufgaben:** Gradfolgen prüfen; Zusammenhangskomponenten bestimmen; minimalen Spannbaum mit Kruskal oder Prim; Dijkstra-Tabelle; Euler- und Hamiltonkreise suchen oder ausschließen; Bipartitheit, Planarität, chromatische Zahl; Kantenfolgen mit der Adjazenzmatrix zählen; Beweise über Bäume per Induktion.

### 7 Algebraische Strukturen

Algebraische Strukturen abstrahieren das Rechnen: Was gilt in $$\mathbb Z$$, $$\mathbb Z_m$$, bei Permutationen, Matrizen und Polynomen gleichermaßen? Wer die Axiome kennt, beweist Sätze einmal für alle Beispiele.

#### Gruppen

**Definition.** Eine **Gruppe** $$(G, \circ)$$ ist eine Menge mit einer Verknüpfung $$\circ: G \times G \to G$$, sodass gilt:

1. **assoziativ**: $$(a \circ b) \circ c = a \circ (b \circ c)$$,
2. **neutrales Element** $$e$$: $$e \circ a = a \circ e = a$$ für alle $$a$$,
3. **inverse Elemente**: zu jedem $$a$$ ein $$a^{-1}$$ mit $$a \circ a^{-1} = a^{-1} \circ a = e$$.

Gilt zusätzlich $$a \circ b = b \circ a$$, heißt die Gruppe **abelsch** (kommutativ). Nur 1 und 2: **Monoid**; nur 1: **Halbgruppe**. Die **Ordnung** der Gruppe ist $$\lvert G\rvert$$.

**Beispiele.** $$(\mathbb Z, +)$$, $$(\mathbb Q \setminus \{0\}, \cdot)$$, $$(\mathbb Z_m, +)$$, $$(\mathbb Z_m^*, \cdot)$$ mit $$\varphi(m)$$ Elementen, die symmetrische Gruppe $$S_n$$ aller Permutationen (nicht abelsch für $$n \ge 3$$, Ordnung $$n!$$), invertierbare $$n \times n$$-Matrizen $$\mathrm{GL}_n(K)$$. **Keine** Gruppen: $$(\mathbb N, +)$$ (keine Inversen), $$(\mathbb Z, \cdot)$$ ($$2$$ hat kein Inverses), $$(\mathbb Z_6 \setminus \{0\}, \cdot)$$ (nicht abgeschlossen: $$2 \cdot 3 = 0$$).

**Satz (B).** In einer Gruppe ist das neutrale Element eindeutig, jedes Inverse ist eindeutig, es gilt $$(ab)^{-1} = b^{-1}a^{-1}$$, und man darf kürzen: $$ab = ac \Rightarrow b = c$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Sind $$e, e'$$ neutral, dann $$e = e e' = e'$$. Sind $$b, c$$ Inverse von $$a$$, dann $$b = b e = b(ac) = (ba)c = e c = c$$. Es gilt $$(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = aa^{-1} = e$$, also ist $$b^{-1}a^{-1}$$ das (eindeutige) Inverse von $$ab$$. Kürzen: $$ab = ac$$ links mit $$a^{-1}$$ multiplizieren. Folgerung: In der Gruppentafel steht jedes Element in jeder Zeile und Spalte genau einmal (lateinisches Quadrat).

</details>

#### Untergruppen, Ordnung eines Elements, zyklische Gruppen

**Definition.** $$U \subseteq G$$ heißt **Untergruppe**, wenn $$U$$ mit derselben Verknüpfung eine Gruppe ist. **Untergruppenkriterium:** $$U \ne \emptyset$$ und $$a, b \in U \Rightarrow ab^{-1} \in U$$. Für endliches $$U$$ reicht schon die Abgeschlossenheit $$a, b \in U \Rightarrow ab \in U$$.

**Erzeugnis und Ordnung.** $$\langle a\rangle = \{a^k : k \in \mathbb Z\}$$ ist die kleinste Untergruppe, die $$a$$ enthält. Die **Ordnung** $$\operatorname{ord}(a)$$ ist das kleinste $$n \ge 1$$ mit $$a^n = e$$ (oder $$\infty$$), und es gilt $$\operatorname{ord}(a) = \lvert\langle a\rangle\rvert$$. Außerdem $$a^k = e \Leftrightarrow \operatorname{ord}(a) \mid k$$.

**Zyklische Gruppen.** $$G$$ heißt **zyklisch**, wenn $$G = \langle g\rangle$$ für ein $$g$$ (Erzeuger). Jede zyklische Gruppe ist isomorph zu $$(\mathbb Z, +)$$ oder zu $$(\mathbb Z_n, +)$$. In $$\mathbb Z_n$$ ist $$[k]$$ genau dann Erzeuger, wenn $$\operatorname{ggT}(k, n) = 1$$; es gibt also $$\varphi(n)$$ Erzeuger. Untergruppen zyklischer Gruppen sind zyklisch, und $$\mathbb Z_n$$ hat zu jedem Teiler $$d$$ von $$n$$ genau eine Untergruppe der Ordnung $$d$$.

**Beispiel 1.** $$\mathbb Z_7^*$$ hat $$6$$ Elemente. Potenzen von $$3$$: $$3, 2, 6, 4, 5, 1$$. Also $$\operatorname{ord}(3) = 6$$, und $$\mathbb Z_7^* = \langle 3\rangle$$ ist zyklisch ($$3$$ ist **Primitivwurzel** modulo $$7$$). Dagegen $$2^1 = 2$$, $$2^2 = 4$$, $$2^3 = 8 \equiv 1$$: $$\operatorname{ord}(2) = 3$$, $$\langle 2\rangle = \{1, 2, 4\}$$. Und $$\operatorname{ord}(6) = 2$$, $$\langle 6\rangle = \{1, 6\}$$. Alle Ordnungen ($$1, 2, 3, 6$$) teilen $$6$$.

**Beispiel 2.** Untergruppen von $$(\mathbb Z_{12}, +)$$: zu den Teilern $$1, 2, 3, 4, 6, 12$$ genau $$\{0\}$$, $$\langle 6\rangle = \{0, 6\}$$, $$\langle 4\rangle = \{0, 4, 8\}$$, $$\langle 3\rangle = \{0,3,6,9\}$$, $$\langle 2\rangle$$ mit $$6$$ Elementen und $$\mathbb Z_{12}$$. Erzeuger von $$\mathbb Z_{12}$$: $$1, 5, 7, 11$$ ($$\varphi(12) = 4$$).

#### Satz von Lagrange

**Nebenklassen.** Für eine Untergruppe $$U \le G$$ und $$a \in G$$ heißt $$aU = \{au : u \in U\}$$ **Linksnebenklasse**. Die Anzahl der Nebenklassen heißt **Index** $$[G : U]$$.

**Satz von Lagrange (B).** Ist $$G$$ endlich und $$U \le G$$, dann gilt $$\lvert G\rvert = [G : U] \cdot \lvert U\rvert$$. Insbesondere teilt $$\lvert U\rvert$$ die Gruppenordnung.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

1. **Jede Nebenklasse hat $$\lvert U\rvert$$ Elemente:** $$U \to aU$$, $$u \mapsto au$$ ist surjektiv nach Definition und injektiv, weil man kürzen darf ($$au = au' \Rightarrow u = u'$$).
2. **Die Nebenklassen bilden eine Partition von $$G$$:** Die Relation $$a \sim b :\Leftrightarrow a^{-1}b \in U$$ ist eine Äquivalenzrelation (reflexiv: $$a^{-1}a = e \in U$$; symmetrisch: $$(a^{-1}b)^{-1} = b^{-1}a \in U$$; transitiv: $$a^{-1}c = (a^{-1}b)(b^{-1}c) \in U$$), und ihre Klassen sind genau die Nebenklassen: $$b \sim a \Leftrightarrow b \in aU$$.
3. $$G$$ ist also disjunkte Vereinigung von $$[G : U]$$ Mengen mit je $$\lvert U\rvert$$ Elementen.

</details>

**Folgerungen (B).**

- $$\operatorname{ord}(a)$$ teilt $$\lvert G\rvert$$ (wende Lagrange auf $$\langle a\rangle$$ an), also $$a^{\lvert G\rvert} = e$$.
- Mit $$G = \mathbb Z_m^*$$ ist das der **Satz von Euler** $$a^{\varphi(m)} \equiv 1$$ aus Kapitel 1.
- Jede Gruppe von Primzahlordnung $$p$$ ist zyklisch: Jedes $$a \ne e$$ hat Ordnung $$p$$, erzeugt also alles.

Die Umkehrung von Lagrange gilt nicht allgemein: Die alternierende Gruppe $$A_4$$ hat Ordnung $$12$$, aber keine Untergruppe der Ordnung $$6$$.
{: .notice--info}

#### Homomorphismen

**Definition.** $$f: (G, \circ) \to (H, *)$$ heißt **Homomorphismus**, wenn $$f(a \circ b) = f(a) * f(b)$$. Bijektive Homomorphismen heißen **Isomorphismen** ($$G \cong H$$). **Kern** $$\ker f = \{a \in G : f(a) = e_H\}$$, **Bild** $$f(G)$$.

**Satz (B).** Für einen Homomorphismus gilt $$f(e_G) = e_H$$, $$f(a^{-1}) = f(a)^{-1}$$, Kern und Bild sind Untergruppen, und $$f$$ ist genau dann injektiv, wenn $$\ker f = \{e_G\}$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

$$f(e) = f(ee) = f(e)f(e)$$, kürzen ergibt $$f(e) = e_H$$. Dann $$f(a)f(a^{-1}) = f(aa^{-1}) = f(e) = e_H$$. Kern: Für $$a, b \in \ker f$$ ist $$f(ab^{-1}) = f(a)f(b)^{-1} = e_H$$, also $$ab^{-1} \in \ker f$$ (Untergruppenkriterium).

Injektivität: „$$\Rightarrow$$“: $$e_G$$ liegt im Kern, und wegen Injektivität nichts sonst. „$$\Leftarrow$$“: Aus $$f(a) = f(b)$$ folgt $$f(ab^{-1}) = e_H$$, also $$ab^{-1} = e_G$$ und $$a = b$$.

</details>

**Beispiele.** $$\mathbb Z \to \mathbb Z_m$$, $$k \mapsto [k]$$ (Kern $$m\mathbb Z$$). $$(\mathbb R, +) \to (\mathbb R_{>0}, \cdot)$$, $$x \mapsto e^x$$ (Isomorphismus, Umkehrung $$\ln$$). $$\det: \mathrm{GL}_n(K) \to K^*$$ (Kern: Matrizen mit Determinante $$1$$). **Kein** Homomorphismus von $$(\mathbb Z, +)$$ in sich: $$x \mapsto x + 1$$, da $$f(0) = 1 \ne 0$$.

#### Ringe und Körper

**Definition.** Ein **Ring** $$(R, +, \cdot)$$ ist eine abelsche Gruppe $$(R, +)$$ mit einer assoziativen Multiplikation, für die die Distributivgesetze $$a(b + c) = ab + ac$$ und $$(a + b)c = ac + bc$$ gelten. Meist mit Einselement $$1$$ und oft kommutativ.

- **Nullteiler**: $$a \ne 0$$ mit $$ab = 0$$ für ein $$b \ne 0$$. Ein kommutativer Ring mit $$1 \ne 0$$ ohne Nullteiler heißt **Integritätsbereich** (z. B. $$\mathbb Z$$, $$K[x]$$).
- **Einheiten**: invertierbare Elemente, sie bilden die Gruppe $$R^*$$.
- Ein **Körper** ist ein kommutativer Ring mit $$1 \ne 0$$, in dem jedes Element außer $$0$$ invertierbar ist. Beispiele: $$\mathbb Q$$, $$\mathbb R$$, $$\mathbb C$$, $$\mathbb Z_p$$.

**Satz (B).** $$\mathbb Z_m$$ ($$m \ge 2$$) ist genau dann ein Körper, wenn $$m$$ eine Primzahl ist.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Ist $$m = p$$ prim, dann ist jedes $$a \in \{1, \dots, p-1\}$$ zu $$p$$ teilerfremd, also nach Kapitel 1 invertierbar. Ist $$m = ab$$ mit $$1 < a, b < m$$, dann gilt $$[a][b] = [0]$$ mit $$[a], [b] \ne [0]$$. $$[a]$$ ist also ein Nullteiler und kann nicht invertierbar sein: Aus $$[c][a] = [1]$$ folgte $$[b] = [c][a][b] = [0]$$.

</details>

**Beispiel 3.** In $$\mathbb Z_6$$: $$2 \cdot 3 = 0$$, Nullteiler sind $$2, 3, 4$$; Einheiten $$\mathbb Z_6^* = \{1, 5\}$$. Die Gleichung $$x^2 = x$$ hat in $$\mathbb Z_6$$ vier Lösungen $$0, 1, 3, 4$$. In einem Körper hätte sie höchstens zwei.

**Endliche Körper.** Zu jeder Primzahlpotenz $$q = p^n$$ gibt es (bis auf Isomorphie) genau einen Körper $$\mathbb F_q$$ mit $$q$$ Elementen. Für $$n \ge 2$$ ist $$\mathbb F_q$$ **nicht** $$\mathbb Z_q$$, sondern $$\mathbb Z_p[x]$$ modulo eines irreduziblen Polynoms vom Grad $$n$$. Beispiel $$\mathbb F_4 = \mathbb Z_2[x]/(x^2 + x + 1)$$ mit den Elementen $$0, 1, x, x + 1$$ und der Regel $$x^2 = x + 1$$.

#### Polynomringe und Polynomdivision

$$R[x]$$ besteht aus den Polynomen $$a_n x^n + \dots + a_1 x + a_0$$ mit Koeffizienten in $$R$$. Für $$a_n \ne 0$$ ist $$\deg = n$$. Über einem Körper (allgemeiner Integritätsbereich) gilt $$\deg(fg) = \deg f + \deg g$$.

**Satz (Division mit Rest).** Über einem Körper $$K$$ gibt es zu $$f, g \in K[x]$$, $$g \ne 0$$, eindeutige $$q, r$$ mit $$f = qg + r$$ und $$\deg r < \deg g$$ (oder $$r = 0$$). Damit funktionieren ggT, euklidischer Algorithmus und Bézout in $$K[x]$$ genau wie in $$\mathbb Z$$.

**Beispiel 4 (in $$\mathbb Q[x]$$).** $$(x^4 + 3x^3 - 2x + 5) : (x^2 + x - 1)$$:

$$
\begin{aligned}
x^4 + 3x^3 + 0x^2 - 2x + 5 &- x^2(x^2 + x - 1) = 2x^3 + x^2 - 2x + 5,\\
2x^3 + x^2 - 2x + 5 &- 2x(x^2 + x - 1) = -x^2 + 0x + 5,\\
-x^2 + 5 &- (-1)(x^2 + x - 1) = x + 4.
\end{aligned}
$$

Ergebnis: $$x^4 + 3x^3 - 2x + 5 = (x^2 + 2x - 1)(x^2 + x - 1) + (x + 4)$$.

**Beispiel 5 (in $$\mathbb Z_5[x]$$).** $$(x^3 + 2x + 1) : (x + 3)$$. Alle Koeffizienten modulo $$5$$ rechnen: $$x^3 + 2x + 1 = (x^2 + 2x + 1)(x + 3) + 3$$. Probe: $$(x^2 + 2x + 1)(x + 3) = x^3 + 5x^2 + 7x + 3 \equiv x^3 + 2x + 3$$, plus $$3$$ ergibt $$x^3 + 2x + 6 \equiv x^3 + 2x + 1$$. Kontrolle mit dem Satz unten: Der Rest ist $$f(-3) = f(2) = 8 + 4 + 1 = 13 \equiv 3$$.

**Satz (Nullstellen) (B).** $$a$$ ist genau dann Nullstelle von $$f \in K[x]$$, wenn $$(x - a) \mid f$$. Ein Polynom vom Grad $$n \ge 0$$ über einem Körper hat höchstens $$n$$ Nullstellen.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Division durch $$x - a$$ ergibt $$f = q(x - a) + r$$ mit konstantem $$r$$. Einsetzen von $$a$$: $$f(a) = r$$. Also $$f(a) = 0 \Leftrightarrow r = 0 \Leftrightarrow (x - a) \mid f$$. Höchstens $$n$$ Nullstellen per Induktion über den Grad: Jede Nullstelle spaltet einen Linearfaktor ab, und $$q$$ hat Grad $$n - 1$$. Weitere Nullstellen von $$f$$ sind Nullstellen von $$q$$, weil ein Körper keine Nullteiler hat. In $$\mathbb Z_6$$ bricht das, siehe Beispiel 3.

</details>

**Irreduzibel** heißt ein Polynom vom Grad $$\ge 1$$, das kein Produkt zweier Polynome kleineren Grades ist (Analogon zu Primzahlen). Grad 2 oder 3 über einem Körper: irreduzibel genau dann, wenn keine Nullstelle. Beispiel: $$x^2 + x + 1$$ über $$\mathbb Z_2$$ ($$f(0) = f(1) = 1$$).

#### Boolesche Algebra (kurz)

Eine **Boolesche Algebra** $$(B, \vee, \wedge, \overline{\phantom{x}}, 0, 1)$$ erfüllt für alle $$a, b, c$$: Kommutativität, Distributivität in beide Richtungen ($$a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c)$$ und $$a \vee (b \wedge c) = (a \vee b) \wedge (a \vee c)$$), neutrale Elemente $$a \vee 0 = a$$, $$a \wedge 1 = a$$ und Komplemente $$a \vee \overline a = 1$$, $$a \wedge \overline a = 0$$.

- Beispiele: $$(\{0,1\}, \text{oder}, \text{und}, \text{nicht})$$ (Schaltalgebra), $$(\mathcal P(M), \cup, \cap, \text{Komplement}, \emptyset, M)$$, die Teiler von $$30$$ mit $$\operatorname{kgV}$$, $$\operatorname{ggT}$$ und $$a \mapsto 30/a$$.
- Abgeleitete Gesetze: Idempotenz $$a \vee a = a$$, Absorption $$a \vee (a \wedge b) = a$$, De Morgan $$\overline{a \vee b} = \overline a \wedge \overline b$$, $$\overline{\overline a} = a$$.
- **Dualitätsprinzip:** Vertauscht man in einem gültigen Gesetz $$\vee \leftrightarrow \wedge$$ und $$0 \leftrightarrow 1$$, entsteht wieder ein gültiges Gesetz.
- Jede endliche Boolesche Algebra ist isomorph zu $$\mathcal P(M)$$ und hat $$2^n$$ Elemente. Die Teiler von $$12$$ bilden deshalb keine Boolesche Algebra ($$6$$ Elemente; $$2$$ hat kein Komplement).
- Bezug zu GDS: disjunktive und konjunktive Normalform, Vereinfachen von Schaltungen.

#### Stolperfallen

- Bei „Ist das eine Gruppe?“ alle Axiome prüfen, auch die **Abgeschlossenheit** der Verknüpfung.
- $$\mathbb Z_m^*$$ hat $$\varphi(m)$$ Elemente, nicht $$m - 1$$ (außer $$m$$ ist prim).
- $$\mathbb F_4 \ne \mathbb Z_4$$: $$\mathbb Z_4$$ ist kein Körper ($$2 \cdot 2 = 0$$).
- Lagrange sagt: Ordnungen teilen $$\lvert G\rvert$$. Nicht: Zu jedem Teiler gibt es eine Untergruppe.
- Bei Polynomdivision über $$\mathbb Z_p$$ wird durch den Leitkoeffizienten mit dem **Inversen modulo $$p$$** geteilt.

**Typische Aufgaben:** Gruppenaxiome für eine gegebene Verknüpfung prüfen; Gruppentafel aufstellen; Ordnungen von Elementen und alle Untergruppen bestimmen; Erzeuger finden; Homomorphie nachweisen und Kern berechnen; Nullteiler und Einheiten in $$\mathbb Z_m$$; Polynomdivision über $$\mathbb Q$$ oder $$\mathbb Z_p$$; ggT von Polynomen; Irreduzibilität kleiner Polynome.

### 8 Lineare Algebra

Lineare Algebra ist das Rechnen mit Vektoren und Matrizen über einem Körper $$K$$ (meist $$\mathbb R$$, in der Codierungstheorie $$\mathbb Z_2$$). Das zentrale Werkzeug ist der Gauß-Algorithmus: Mit ihm bestimmt man Lösungen, Rang, lineare Unabhängigkeit, Inverse und Determinanten.

#### Vektorräume und Unterräume

**Definition.** Ein **Vektorraum** über $$K$$ ist eine abelsche Gruppe $$(V, +)$$ mit einer Skalarmultiplikation $$K \times V \to V$$, sodass für alle $$\lambda, \mu \in K$$, $$u, v \in V$$ gilt: $$\lambda(u + v) = \lambda u + \lambda v$$, $$(\lambda + \mu)v = \lambda v + \mu v$$, $$(\lambda\mu)v = \lambda(\mu v)$$, $$1v = v$$.

**Beispiele.** $$K^n$$, die Matrizen $$K^{m \times n}$$, Polynome $$K[x]$$, Polynome vom Grad höchstens $$n$$, Folgen, Funktionen $$\mathbb R \to \mathbb R$$, die Lösungen einer homogenen linearen Rekursion (Kapitel 5).

**Unterraum.** $$U \subseteq V$$ ist Unterraum, wenn $$0 \in U$$ und $$U$$ abgeschlossen unter $$+$$ und Skalarmultiplikation ist. Beispiel: $$\{(x, y, z) : x + y + z = 0\}$$ ist ein Unterraum von $$\mathbb R^3$$, $$\{(x, y, z) : x + y + z = 1\}$$ nicht (enthält $$0$$ nicht).

#### Lineare Unabhängigkeit, Basis, Dimension

- **Linearkombination**: $$\lambda_1 v_1 + \dots + \lambda_k v_k$$. **Erzeugnis** (Spann, lineare Hülle) $$\langle v_1, \dots, v_k\rangle$$: Menge aller Linearkombinationen.
- **linear unabhängig**: $$\lambda_1 v_1 + \dots + \lambda_k v_k = 0 \Rightarrow \lambda_1 = \dots = \lambda_k = 0$$. Gleichwertig: Kein $$v_i$$ ist Linearkombination der anderen.
- **Basis**: linear unabhängiges Erzeugendensystem. Jeder Vektor hat dann **eindeutige** Koordinaten.
- **Dimension**: Anzahl der Elemente einer Basis. Wohldefiniert wegen des Austauschsatzes: Alle Basen sind gleich groß.

**Satz (B).** In einem Vektorraum der Dimension $$n$$ gilt: Mehr als $$n$$ Vektoren sind linear abhängig; $$n$$ linear unabhängige Vektoren bilden eine Basis; $$n$$ Vektoren, die $$V$$ erzeugen, bilden eine Basis; jede linear unabhängige Menge lässt sich zu einer Basis ergänzen.

<details class="beweis" markdown="1">
<summary>Beweis der ersten Aussage für K hoch n</summary>

Seien $$v_1, \dots, v_m \in K^n$$ mit $$m > n$$. Die Gleichung $$\lambda_1 v_1 + \dots + \lambda_m v_m = 0$$ ist ein homogenes LGS mit $$n$$ Gleichungen und $$m$$ Unbekannten. Nach dem Gauß-Algorithmus gibt es höchstens $$n$$ Pivotspalten, also mindestens $$m - n \ge 1$$ freie Variablen. Setzt man eine freie Variable auf $$1$$, erhält man eine nichttriviale Lösung, also sind die Vektoren linear abhängig. Allgemein überträgt man das über Koordinaten bezüglich einer Basis.

</details>

**Beispiel 1.** Sind $$(1,2,3)$$, $$(4,5,6)$$, $$(7,8,9)$$ linear unabhängig? Vektoren als Zeilen, Gauß:

$$
\begin{pmatrix} 1 & 2 & 3\\ 4 & 5 & 6\\ 7 & 8 & 9 \end{pmatrix} \to \begin{pmatrix} 1 & 2 & 3\\ 0 & -3 & -6\\ 0 & -6 & -12 \end{pmatrix} \to \begin{pmatrix} 1 & 2 & 3\\ 0 & -3 & -6\\ 0 & 0 & 0 \end{pmatrix}.
$$

Rang $$2$$, also linear abhängig. Konkret: $$(1,2,3) - 2(4,5,6) + (7,8,9) = 0$$. Der Spann ist eine Ebene mit Basis $$(1,2,3)$$, $$(0,1,2)$$.

#### Matrizen und Gauß-Algorithmus

**Matrixprodukt.** Für $$A \in K^{m \times n}$$, $$B \in K^{n \times p}$$ ist $$(AB)_{ij} = \sum_{k} a_{ik} b_{kj}$$ („Zeile mal Spalte“). Es ist assoziativ und distributiv, aber **nicht kommutativ**, und es gibt Nullteiler. Transponierte: $$(AB)^T = B^T A^T$$.

**Elementare Zeilenumformungen:** zwei Zeilen tauschen, eine Zeile mit $$\lambda \ne 0$$ multiplizieren, ein Vielfaches einer Zeile zu einer anderen addieren. Sie ändern die Lösungsmenge eines LGS nicht.

**Gauß-Algorithmus:** Mit diesen Umformungen auf **Zeilenstufenform** bringen (unter jedem Pivot nur Nullen). **Gauß-Jordan**: zusätzlich über den Pivots Nullen und Pivots $$= 1$$ (reduzierte Zeilenstufenform).

**Rang.** $$\operatorname{rg}(A)$$ = Anzahl der Pivots in Zeilenstufenform = maximale Anzahl linear unabhängiger Zeilen = maximale Anzahl linear unabhängiger Spalten (Zeilenrang = Spaltenrang).

#### Lineare Gleichungssysteme

Ein LGS $$Ax = b$$ mit $$A \in K^{m \times n}$$ schreibt man als erweiterte Matrix $$(A \mid b)$$.

**Satz (Lösbarkeit) (B).**

1. $$Ax = b$$ ist genau dann lösbar, wenn $$\operatorname{rg}(A) = \operatorname{rg}(A \mid b)$$.
2. Ist $$x_p$$ eine Lösung, dann ist die Lösungsmenge $$x_p + \ker A$$ mit $$\ker A = \{x : Ax = 0\}$$.
3. $$\dim \ker A = n - \operatorname{rg}(A)$$ (Anzahl der freien Variablen). Die Lösung ist also genau dann eindeutig, wenn $$\operatorname{rg}(A) = n$$.

<details class="beweis" markdown="1">
<summary>Beweis von 1 und 2</summary>

1. $$Ax = b$$ heißt $$x_1 a_1 + \dots + x_n a_n = b$$ für die Spalten $$a_i$$. Lösbar heißt also: $$b$$ liegt im Spaltenraum von $$A$$. Genau dann vergrößert das Anhängen von $$b$$ den Spaltenraum nicht, und der Rang bleibt gleich. In Zeilenstufenform sieht man das direkt: Unlösbar genau dann, wenn eine Zeile $$(0 \dots 0 \mid c)$$ mit $$c \ne 0$$ entsteht.
2. Ist $$Ax = b$$, dann $$A(x - x_p) = b - b = 0$$, also $$x \in x_p + \ker A$$. Umgekehrt $$A(x_p + h) = b + 0 = b$$. Das ist dasselbe Prinzip wie bei inhomogenen Rekursionen in Kapitel 5.

</details>

**Beispiel 2 (eindeutige Lösung).**

$$
\left(\begin{array}{ccc:c} 1 & 1 & 1 & 6\\ 2 & 1 & -1 & 1\\ 1 & -1 & 2 & 5 \end{array}\right)
\xrightarrow[\;Z_3 - Z_1\;]{Z_2 - 2Z_1}
\left(\begin{array}{ccc:c} 1 & 1 & 1 & 6\\ 0 & -1 & -3 & -11\\ 0 & -2 & 1 & -1 \end{array}\right)
\xrightarrow{Z_3 - 2Z_2}
\left(\begin{array}{ccc:c} 1 & 1 & 1 & 6\\ 0 & -1 & -3 & -11\\ 0 & 0 & 7 & 21 \end{array}\right)
$$

Rückwärts einsetzen: $$z = 3$$, $$-y - 9 = -11 \Rightarrow y = 2$$, $$x = 6 - 2 - 3 = 1$$. Lösung $$(1, 2, 3)$$.

**Beispiel 3 (unendlich viele Lösungen).** $$x + 2y - z = 1$$, $$2x + 4y + z = 5$$. $$Z_2 - 2Z_1$$ ergibt $$3z = 3$$, also $$z = 1$$ und $$x + 2y = 2$$. $$y = t$$ ist frei:

$$
\begin{pmatrix} x\\ y\\ z \end{pmatrix} = \begin{pmatrix} 2\\ 0\\ 1 \end{pmatrix} + t \begin{pmatrix} -2\\ 1\\ 0 \end{pmatrix}, \quad t \in \mathbb R.
$$

Rang $$2$$, $$n = 3$$, also ein Parameter: eine Gerade. Kommt die Gleichung $$x + 2y + 2z = 5$$ dazu, entsteht $$0 = 1$$: unlösbar.

#### Inverse Matrix

$$A \in K^{n \times n}$$ heißt **invertierbar** (regulär), wenn es $$A^{-1}$$ mit $$AA^{-1} = A^{-1}A = I$$ gibt. Gleichwertig: $$\operatorname{rg} A = n$$, $$\det A \ne 0$$, $$Ax = 0$$ hat nur die triviale Lösung, die Spalten bilden eine Basis. Es gilt $$(AB)^{-1} = B^{-1}A^{-1}$$.

**Berechnung:** $$(A \mid I)$$ mit Gauß-Jordan zu $$(I \mid A^{-1})$$ umformen. Für $$2 \times 2$$:

$$
\begin{pmatrix} a & b\\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b\\ -c & a \end{pmatrix}, \qquad \text{z. B. } \begin{pmatrix} 2 & 1\\ 5 & 3 \end{pmatrix}^{-1} = \begin{pmatrix} 3 & -1\\ -5 & 2 \end{pmatrix}.
$$

**Beispiel 4.**

$$
\left(\begin{array}{ccc:ccc} 1 & 2 & 0 & 1 & 0 & 0\\ 0 & 1 & 1 & 0 & 1 & 0\\ 1 & 0 & 1 & 0 & 0 & 1 \end{array}\right)
\xrightarrow{Z_3 - Z_1}
\left(\begin{array}{ccc:ccc} 1 & 2 & 0 & 1 & 0 & 0\\ 0 & 1 & 1 & 0 & 1 & 0\\ 0 & -2 & 1 & -1 & 0 & 1 \end{array}\right)
\xrightarrow{Z_3 + 2Z_2}
\left(\begin{array}{ccc:ccc} 1 & 2 & 0 & 1 & 0 & 0\\ 0 & 1 & 1 & 0 & 1 & 0\\ 0 & 0 & 3 & -1 & 2 & 1 \end{array}\right)
$$

Weiter $$Z_3 / 3$$, dann $$Z_2 - Z_3$$, dann $$Z_1 - 2Z_2$$:

$$
A^{-1} = \frac13 \begin{pmatrix} 1 & -2 & 2\\ 1 & 1 & -1\\ -1 & 2 & 1 \end{pmatrix}.
$$

Probe: erste Zeile von $$A$$ mal erste Spalte: $$\frac13(1 + 2 + 0) = 1$$; erste Zeile mal zweite Spalte: $$\frac13(-2 + 2) = 0$$.

#### Determinante

**Berechnung.** $$2 \times 2$$: $$ad - bc$$. $$3 \times 3$$ mit der **Regel von Sarrus** (nur für $$3 \times 3$$!). Allgemein mit dem **Laplace-Entwicklungssatz** nach Zeile $$i$$:

$$
\det A = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} \det A_{ij},
$$

wobei $$A_{ij}$$ durch Streichen von Zeile $$i$$ und Spalte $$j$$ entsteht. Am schnellsten für große Matrizen: mit Gauß auf Dreiecksform, dann ist $$\det$$ das Produkt der Diagonale.

**Eigenschaften.** Zeilentausch ändert das Vorzeichen; Zeile mal $$\lambda$$ multipliziert $$\det$$ mit $$\lambda$$; Vielfaches einer Zeile addieren ändert nichts. $$\det(AB) = \det A \cdot \det B$$, $$\det A^T = \det A$$, $$\det A^{-1} = 1/\det A$$, $$\det(\lambda A) = \lambda^n \det A$$. Geometrisch: $$\lvert\det A\rvert$$ ist der Volumenfaktor der Abbildung $$x \mapsto Ax$$.

**Beispiel 5.**

$$
\det\begin{pmatrix} 2 & 0 & 1\\ 1 & 3 & 2\\ 1 & 1 & 4 \end{pmatrix} = 2 \cdot 3 \cdot 4 + 0 + 1 \cdot 1 \cdot 1 - 1 \cdot 3 \cdot 1 - 2 \cdot 2 \cdot 1 - 0 = 24 + 1 - 3 - 4 = 18.
$$

Kontrolle mit Laplace nach Zeile 1: $$2(12 - 2) - 0 + 1(1 - 3) = 20 - 2 = 18$$. Die Matrix aus Beispiel 1 hat Determinante $$0$$, passend zu den linear abhängigen Zeilen.

#### Lineare Abbildungen

**Definition.** $$f: V \to W$$ heißt **linear**, wenn $$f(u + v) = f(u) + f(v)$$ und $$f(\lambda v) = \lambda f(v)$$. Jede lineare Abbildung $$K^n \to K^m$$ ist $$x \mapsto Ax$$; die **Spalten von $$A$$ sind die Bilder der Einheitsvektoren**. Komposition entspricht dem Matrixprodukt.

**Kern und Bild.** $$\ker f = \{v : f(v) = 0\}$$ und $$\operatorname{im} f = f(V)$$ sind Unterräume. $$f$$ ist injektiv $$\Leftrightarrow$$ $$\ker f = \{0\}$$ (wie bei Gruppenhomomorphismen in Kapitel 7).

**Dimensionsformel (Rangsatz) (B).** Für lineares $$f: V \to W$$ mit $$\dim V = n$$ gilt

$$
\dim \ker f + \dim \operatorname{im} f = n.
$$

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Wähle eine Basis $$u_1, \dots, u_k$$ von $$\ker f$$ und ergänze sie zu einer Basis $$u_1, \dots, u_k, w_1, \dots, w_r$$ von $$V$$ ($$k + r = n$$). Behauptung: $$f(w_1), \dots, f(w_r)$$ ist eine Basis von $$\operatorname{im} f$$.

*Erzeugend:* Für $$v = \sum \alpha_i u_i + \sum \beta_j w_j$$ ist $$f(v) = \sum \beta_j f(w_j)$$, weil $$f(u_i) = 0$$.

*Linear unabhängig:* Aus $$\sum \beta_j f(w_j) = 0$$ folgt $$f(\sum \beta_j w_j) = 0$$, also $$\sum \beta_j w_j \in \ker f$$ und damit $$\sum \beta_j w_j = \sum \alpha_i u_i$$. Weil alle $$u_i, w_j$$ zusammen linear unabhängig sind, sind alle $$\beta_j = 0$$.

Also $$\dim \operatorname{im} f = r = n - k$$. Folgerung: Eine lineare Abbildung $$V \to V$$ ist genau dann injektiv, wenn sie surjektiv ist.

</details>

**Beispiel 6.** Die Drehung um $$90°$$ in $$\mathbb R^2$$ schickt $$e_1 \mapsto (0, 1)$$ und $$e_2 \mapsto (-1, 0)$$, also $$A = \begin{pmatrix} 0 & -1\\ 1 & 0 \end{pmatrix}$$. Die Projektion $$(x, y, z) \mapsto (x, y, 0)$$ hat Kern $$\langle e_3\rangle$$ (Dimension $$1$$) und Bild die $$xy$$-Ebene (Dimension $$2$$), $$1 + 2 = 3$$.

#### Eigenwerte und Eigenvektoren

**Definition.** $$\lambda \in K$$ heißt **Eigenwert** von $$A$$, wenn es $$v \ne 0$$ mit $$Av = \lambda v$$ gibt; $$v$$ heißt **Eigenvektor**. Die Eigenwerte sind die Nullstellen des **charakteristischen Polynoms** $$\chi_A(\lambda) = \det(A - \lambda I)$$, denn $$(A - \lambda I)v = 0$$ hat genau dann eine Lösung $$v \ne 0$$, wenn $$A - \lambda I$$ nicht invertierbar ist. Der **Eigenraum** zu $$\lambda$$ ist $$\ker(A - \lambda I)$$.

**Nützlich:** Summe der Eigenwerte (mit Vielfachheit) = Spur, Produkt = Determinante. Dreiecksmatrizen haben ihre Diagonaleinträge als Eigenwerte.

**Satz (B).** Eigenvektoren zu paarweise verschiedenen Eigenwerten sind linear unabhängig. Hat eine $$n \times n$$-Matrix $$n$$ verschiedene Eigenwerte, ist sie **diagonalisierbar**: $$A = PDP^{-1}$$ mit den Eigenvektoren als Spalten von $$P$$ und den Eigenwerten in $$D$$.

<details class="beweis" markdown="1">
<summary>Beweis für zwei Eigenvektoren (allgemein per Induktion)</summary>

Sei $$Av_1 = \lambda_1 v_1$$, $$Av_2 = \lambda_2 v_2$$, $$\lambda_1 \ne \lambda_2$$, und $$\alpha_1 v_1 + \alpha_2 v_2 = 0$$. Anwenden von $$A$$ ergibt $$\alpha_1\lambda_1 v_1 + \alpha_2\lambda_2 v_2 = 0$$. Die erste Gleichung mal $$\lambda_2$$ abziehen: $$\alpha_1(\lambda_1 - \lambda_2)v_1 = 0$$. Wegen $$\lambda_1 \ne \lambda_2$$ und $$v_1 \ne 0$$ ist $$\alpha_1 = 0$$, dann auch $$\alpha_2 = 0$$. Im Induktionsschritt für $$k$$ Vektoren macht man genau dasselbe und erhält eine Relation zwischen $$k - 1$$ Vektoren.

</details>

**Beispiel 7.** $$A = \begin{pmatrix} 4 & 1\\ 2 & 3 \end{pmatrix}$$. $$\chi_A(\lambda) = (4 - \lambda)(3 - \lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda - 2)(\lambda - 5)$$. Kontrolle: Spur $$7 = 2 + 5$$, Determinante $$10 = 2 \cdot 5$$.

- $$\lambda = 5$$: $$A - 5I = \begin{pmatrix} -1 & 1\\ 2 & -2 \end{pmatrix}$$, Eigenvektor $$(1, 1)$$.
- $$\lambda = 2$$: $$A - 2I = \begin{pmatrix} 2 & 1\\ 2 & 1 \end{pmatrix}$$, Eigenvektor $$(1, -2)$$.

Also $$A = PDP^{-1}$$ mit $$P = \begin{pmatrix} 1 & 1\\ 1 & -2 \end{pmatrix}$$, $$D = \operatorname{diag}(5, 2)$$, und $$A^n = PD^nP^{-1}$$ lässt sich direkt berechnen. Genau so kann man lineare Rekursionen wie Fibonacci in Matrixform $$\binom{F_{n+1}}{F_n} = \begin{pmatrix} 1 & 1\\ 1 & 0 \end{pmatrix}\binom{F_n}{F_{n-1}}$$ lösen: Die Eigenwerte sind die Nullstellen der charakteristischen Gleichung aus Kapitel 5.

**Nicht diagonalisierbar** ist z. B. $$\begin{pmatrix} 1 & 1\\ 0 & 1 \end{pmatrix}$$: doppelter Eigenwert $$1$$, aber nur ein eindimensionaler Eigenraum $$\langle e_1\rangle$$. Reelle Matrizen können komplexe Eigenwerte haben: Die Drehung aus Beispiel 6 hat $$\chi = \lambda^2 + 1$$.

#### Stolperfallen

- $$AB \ne BA$$ im Allgemeinen, und aus $$AB = 0$$ folgt nicht $$A = 0$$ oder $$B = 0$$.
- Sarrus gilt nur für $$3 \times 3$$-Matrizen.
- Beim Gauß die Zeilenoperation immer auf die ganze Zeile anwenden, inklusive rechter Seite.
- Ein Eigenvektor ist nie der Nullvektor; der Eigenwert darf $$0$$ sein (dann ist $$A$$ nicht invertierbar).
- $$\det(A + B) \ne \det A + \det B$$ und $$\det(\lambda A) = \lambda^n \det A$$, nicht $$\lambda \det A$$.
- Freie Variablen ehrlich als Parameter angeben, nicht willkürlich auf $$0$$ setzen.

**Typische Aufgaben:** Unterraum-Kriterium prüfen; lineare Unabhängigkeit, Basis und Dimension bestimmen; LGS mit Gauß lösen, auch mit Parameter in der Matrix (Fallunterscheidung nach dem Rang); Inverse und Determinante; Matrix einer linearen Abbildung, Kern und Bild; Eigenwerte, Eigenvektoren, Diagonalisierung.

### 9 Algebraische Codierungstheorie

**Zusatzstoff:** Laut Gittenberger umfasst ADM die Buchkapitel 1–3 *ohne Linearcodes*. Dieses Kapitel ist also voraussichtlich nicht prüfungsrelevant. Es bleibt hier, weil es Kapitel 7 und 8 an einem Beispiel zusammenbringt und in GDS (Hamming-Codes) gebraucht wird.
{: .notice--info}

Bei der Übertragung über einen gestörten Kanal kippen einzelne Bits. Ein Code fügt gezielt Redundanz hinzu, damit der Empfänger Fehler erkennen oder sogar korrigieren kann. Algebraisch wird das, wenn der Code ein Unterraum von $$\mathbb Z_2^n$$ ist: Dann helfen Kapitel 7 (Körper $$\mathbb Z_2$$) und Kapitel 8 (Matrizen, Kern, Rang). Die Grundbegriffe Hamming-Abstand und Paritätsbit kommen auch im [GDS-Kompendium](/tuwien/gds-kompendium/) (Kodierungstheorie) vor.

#### Grundbegriffe

- Ein **Blockcode** der Länge $$n$$ über $$\mathbb Z_2$$ ist eine Teilmenge $$C \subseteq \mathbb Z_2^n$$, ihre Elemente heißen **Codewörter**.
- **Hamming-Gewicht** $$w(x)$$: Anzahl der Einsen in $$x$$. **Hamming-Abstand** $$d(x, y)$$: Anzahl der Stellen, an denen sich $$x$$ und $$y$$ unterscheiden; über $$\mathbb Z_2$$ ist $$d(x,y) = w(x + y)$$.
- **Minimalabstand** $$d(C) = \min\{d(x, y) : x, y \in C, x \ne y\}$$.
- Der Hamming-Abstand ist eine **Metrik**: $$d(x,y) = 0 \Leftrightarrow x = y$$, symmetrisch, Dreiecksungleichung $$d(x,z) \le d(x,y) + d(y,z)$$.

**Satz (B).** Ein Code mit Minimalabstand $$d$$ erkennt bis zu $$d - 1$$ Fehler und korrigiert bis zu $$t = \lfloor (d-1)/2 \rfloor$$ Fehler (durch Decodieren zum nächstgelegenen Codewort).

<details class="beweis" markdown="1">
<summary>Beweis</summary>

**Erkennen.** Wird $$c$$ gesendet und passieren $$1 \le e \le d - 1$$ Fehler, dann ist $$d(c, y) = e < d$$. Ein anderes Codewort hat von $$c$$ mindestens Abstand $$d$$, also ist $$y$$ kein Codewort, und der Fehler fällt auf.

**Korrigieren.** Passieren höchstens $$t$$ Fehler, ist $$d(c, y) \le t$$. Für jedes andere Codewort $$c'$$ gilt mit der Dreiecksungleichung

$$
d(c', y) \ge d(c', c) - d(c, y) \ge d - t \ge 2t + 1 - t = t + 1 > t.
$$

Also ist $$c$$ das eindeutig nächste Codewort.

</details>

**Beispiele.** **Wiederholungscode** $$\{000, 111\}$$: $$d = 3$$, korrigiert einen Fehler (Mehrheitsentscheid), Rate $$1/3$$. **Paritätscode** (gerade Anzahl von Einsen) der Länge $$n$$: $$d = 2$$, erkennt einen Fehler, korrigiert keinen.

#### Lineare Codes

**Definition.** Ein **linearer $$[n, k]$$-Code** ist ein $$k$$-dimensionaler Unterraum $$C \le \mathbb Z_2^n$$. Er hat $$2^k$$ Codewörter, codiert also $$k$$ Informationsbits in $$n$$ Bits; die **Rate** ist $$k/n$$. Mit Minimalabstand $$d$$ schreibt man $$[n, k, d]$$.

**Satz (B).** Für einen linearen Code ist der Minimalabstand gleich dem minimalen Gewicht eines Codeworts ungleich $$0$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Für $$x \ne y$$ in $$C$$ ist $$x + y \in C$$ (Unterraum), $$x + y \ne 0$$ und $$d(x,y) = w(x + y)$$. Also ist jeder Abstand ein Gewicht eines Codeworts ungleich $$0$$. Umgekehrt ist $$w(c) = d(c, 0)$$ und $$0 \in C$$. Beide Minima stimmen überein. Statt $$\binom{2^k}{2}$$ Paaren muss man also nur $$2^k - 1$$ Gewichte prüfen.

</details>

#### Generator- und Kontrollmatrix

**Generatormatrix.** $$G \in \mathbb Z_2^{k \times n}$$, deren Zeilen eine Basis von $$C$$ bilden. Codieren: Informationswort $$u \in \mathbb Z_2^k$$ (als Zeile) wird zu $$c = uG$$. **Systematische Form:** $$G = (I_k \mid A)$$, dann stehen die Informationsbits unverändert vorne und die Prüfbits hinten.

**Kontrollmatrix.** $$H \in \mathbb Z_2^{(n-k) \times n}$$ mit

$$
C = \{c \in \mathbb Z_2^n : Hc^T = 0\} = \ker H.
$$

Zu $$G = (I_k \mid A)$$ gehört $$H = (A^T \mid I_{n-k})$$ (über $$\mathbb Z_2$$ ist $$-A^T = A^T$$).

**Satz (B).** Für $$G = (I_k \mid A)$$ und $$H = (A^T \mid I_{n-k})$$ gilt $$GH^T = 0$$ und $$\ker H = C$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Blockweise: $$GH^T = (I_k \mid A)\begin{pmatrix} A\\ I_{n-k} \end{pmatrix} = A + A = 0$$ über $$\mathbb Z_2$$. Also liegt jede Zeile von $$G$$ und damit jedes Codewort im Kern von $$H$$: $$C \subseteq \ker H$$. $$H$$ enthält $$I_{n-k}$$, hat also Rang $$n - k$$. Nach dem Rangsatz ist $$\dim \ker H = n - (n - k) = k = \dim C$$. Ein Unterraum mit gleicher Dimension im Oberraum ist gleich, also $$C = \ker H$$.

</details>

**Satz (Minimalabstand aus H).** $$d(C)$$ ist die kleinste Anzahl linear abhängiger Spalten von $$H$$. Insbesondere: Sind alle Spalten von $$H$$ ungleich $$0$$ und paarweise verschieden, dann ist $$d \ge 3$$, und der Code korrigiert einen Fehler. Grund: Ein Codewort vom Gewicht $$w$$ ist genau eine Auswahl von $$w$$ Spalten mit Summe $$0$$.

#### Syndrom-Decodierung

Empfangen wird $$y = c + e$$ mit Fehlervektor $$e$$. Das **Syndrom** ist

$$
s = Hy^T = Hc^T + He^T = He^T.
$$

Es hängt nur vom Fehler ab, nicht vom gesendeten Codewort. $$s = 0$$ heißt: $$y$$ ist ein Codewort (kein erkennbarer Fehler). Bei genau einem Fehler an Stelle $$i$$ ist $$s$$ die **$$i$$-te Spalte von $$H$$**. Allgemein nimmt man als Fehler den **Nebenklassenführer**, den Vektor kleinsten Gewichts mit diesem Syndrom (Nebenklassen $$y + C$$ wie bei Lagrange in Kapitel 7).

#### Hamming-Codes

**Definition.** Für $$r \ge 2$$ hat der **Hamming-Code** $$\mathcal H_r$$ als Kontrollmatrix alle $$2^r - 1$$ von $$0$$ verschiedenen Spalten aus $$\mathbb Z_2^r$$. Er ist ein $$[2^r - 1,\ 2^r - 1 - r,\ 3]$$-Code. Für $$r = 3$$: der $$[7, 4, 3]$$-Hamming-Code.

**Satz (Hamming-Schranke) (B).** Ein Code $$C \subseteq \mathbb Z_2^n$$, der $$t$$ Fehler korrigiert, erfüllt

$$
\lvert C\rvert \cdot \sum_{i=0}^{t} \binom ni \le 2^n.
$$

Gilt Gleichheit, heißt der Code **perfekt**. Hamming-Codes sind perfekt.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Die Kugeln $$B_t(c) = \{y : d(y, c) \le t\}$$ um verschiedene Codewörter sind disjunkt, sonst gäbe es ein $$y$$ mit zwei Codewörtern im Abstand höchstens $$t$$, und dann $$d(c, c') \le 2t < d$$. Jede Kugel enthält $$\sum_{i=0}^t \binom ni$$ Wörter ($$i$$ Stellen kippen). Alle zusammen passen in $$\mathbb Z_2^n$$. Für den $$[7,4]$$-Hamming-Code: $$2^4 \cdot (1 + 7) = 128 = 2^7$$, also perfekt: Jedes Wort hat Abstand höchstens $$1$$ zu genau einem Codewort.

</details>

**Beispiel 1 (der [7,4]-Hamming-Code systematisch).** Wähle

$$
A = \begin{pmatrix} 1 & 1 & 0\\ 1 & 0 & 1\\ 0 & 1 & 1\\ 1 & 1 & 1 \end{pmatrix}, \quad G = (I_4 \mid A), \quad H = (A^T \mid I_3) = \begin{pmatrix} 1 & 1 & 0 & 1 & 1 & 0 & 0\\ 1 & 0 & 1 & 1 & 0 & 1 & 0\\ 0 & 1 & 1 & 1 & 0 & 0 & 1 \end{pmatrix}.
$$

Die sieben Spalten von $$H$$ sind genau die sieben von $$0$$ verschiedenen Vektoren aus $$\mathbb Z_2^3$$, also ist das ein Hamming-Code mit $$d = 3$$.

**Codieren.** $$u = 1011$$: $$c = uG = (1, 0, 1, 1 \mid p)$$ mit $$p$$ = Summe der Zeilen 1, 3, 4 von $$A$$: $$110 + 011 + 111 = 010$$. Also $$c = 1011010$$. Probe: $$Hc^T = 0$$.

**Beispiel 2 (Decodieren).** Empfangen $$y = 1001010$$. Syndrom (Zeilen von $$H$$ mit $$y$$ multiplizieren, modulo 2):

$$
Hy^T = \begin{pmatrix} 1 + 0 + 0 + 1 + 0 + 0 + 0\\ 1 + 0 + 0 + 1 + 0 + 1 + 0\\ 0 + 0 + 0 + 1 + 0 + 0 + 0 \end{pmatrix} = \begin{pmatrix} 0\\ 1\\ 1 \end{pmatrix}.
$$

$$011$$ ist die **dritte** Spalte von $$H$$, also ist Bit 3 gekippt. Korrigiert: $$1011010$$, Informationsbits $$1011$$.

**Beispiel 3 (zwei Fehler).** Kippen Bit 1 und 2 von $$c = 1011010$$, ist $$y = 0111010$$ und das Syndrom die Summe der Spalten 1 und 2: $$110 + 101 = 011$$. Der Decoder „korrigiert“ Bit 3 und liefert das falsche Codewort $$0101010$$. Mit $$d = 3$$ sind zwei Fehler zwar erkennbar, aber nicht gleichzeitig korrigierbar. Abhilfe: ein zusätzliches Gesamtparitätsbit ergibt den erweiterten $$[8, 4, 4]$$-Code (korrigiert 1, erkennt 2 Fehler).

#### Bezug zu GDS und Praxis

- GDS behandelt Hamming-Abstand, Paritätsbits und den Hamming-Code meist ohne lineare Algebra (Prüfbits an den Positionen $$1, 2, 4, \dots$$). Das ist derselbe Code mit umsortierten Spalten: Ordnet man die Spalten von $$H$$ als Binärzahlen $$1$$ bis $$7$$, ist das Syndrom direkt die Fehlerposition.
- Prüfziffern (ISBN, IBAN) arbeiten modulo $$11$$ bzw. $$97$$, also über $$\mathbb Z_p$$ statt $$\mathbb Z_2$$ (Kapitel 1).
- In der Praxis: Reed-Solomon-Codes (QR-Codes, CDs) und LDPC-Codes (WLAN, 5G) sind ebenfalls lineare Codes, über größeren Körpern $$\mathbb F_{2^m}$$ (Kapitel 7).

#### Stolperfallen

- Über $$\mathbb Z_2$$ ist $$1 + 1 = 0$$ und $$-1 = 1$$. Beim Syndrom immer modulo $$2$$ rechnen.
- Codewort als Zeile ($$c = uG$$), Syndrom als Spalte ($$Hy^T$$). Konvention der Vorlesung prüfen.
- $$G = (I \mid A)$$ gehört zu $$H = (A^T \mid I)$$, nicht zu $$(A \mid I)$$.
- Syndrom $$0$$ heißt nicht „fehlerfrei“, sondern „kein Fehler erkennbar“.
- Korrigieren und Erkennen nicht verwechseln: $$d = 3$$ erkennt 2 oder korrigiert 1.

**Typische Aufgaben:** Minimalabstand eines kleinen Codes bestimmen; prüfen, ob ein Code linear ist; aus $$G$$ die Kontrollmatrix $$H$$ bestimmen (und umgekehrt); Wort codieren; Syndrom berechnen und einen Fehler korrigieren; Parameter $$[n, k, d]$$ und Hamming-Schranke.

## Beweisliste

Alle mit (B) markierten Sätze auf einen Blick. Für die Wiederholung: jeden einmal ohne Vorlage aufschreiben.

| Kap. | Aussage | Technik | Kernidee |
|---|---|---|---|
| 1 | Division mit Rest | Wohlordnung, Differenz | kleinstes nichtnegatives $$a - qb$$ |
| 1 | $$\operatorname{ggT}(a,b) = \operatorname{ggT}(b, a \bmod b)$$ | gleiche Teilermengen | Linearkombination |
| 1 | Bézout | Invariante im erweiterten Euklid | $$r_k = s_k a + t_k b$$ |
| 1 | Lemma von Euklid | Bézout | $$b = xmb + y(ab)$$ |
| 1 | Fundamentalsatz | starke Induktion; Euklid-Lemma | gemeinsamen Primfaktor kürzen |
| 1 | unendlich viele Primzahlen | Widerspruch | $$p_1 \cdots p_N + 1$$ |
| 1 | Kongruenz verträglich mit $$+$$, $$\cdot$$ | Mischterm | $$ab - a'b' = (a-a')b + a'(b-b')$$ |
| 1 | Inverses mod $$m$$ existiert genau bei ggT 1 | Bézout | $$xa + ym = 1$$ |
| 1 | lineare Kongruenz: lösbar genau bei $$d \mid b$$, $$d$$ Lösungen | durch $$d$$ kürzen | Inverses modulo $$m/d$$ |
| 1 | Chinesischer Restsatz | Konstruktion | $$\sum a_i M_i y_i$$ |
| 1 | Satz von Euler | Umordnung der primen Reste | Produkt kürzen |
| 1 | RSA-Korrektheit | Fermat + CRT | Fall $$p \mid m$$ extra |
| 2 | $$\sqrt 2$$ irrational | Widerspruch | beide gerade |
| 3 | Äquivalenzklassen bilden Partition | direkt | gemeinsames Element ⇒ gleiche Klasse |
| 3 | $$\mathbb R$$ überabzählbar | Diagonalargument | an der Diagonale ändern |
| 3 | Satz von Cantor | Widerspruch | $$D = \{x : x \notin f(x)\}$$ |
| 4 | Kombinationen mit Wiederholung | Bijektion | Sterne und Striche |
| 4 | Pascal | Fallunterscheidung | enthält $$n+1$$ oder nicht |
| 4 | Binomischer Lehrsatz | kombinatorisch / Induktion | $$\binom nk$$ Wahlen für $$a$$ |
| 4 | Inklusion-Exklusion | jedes Element zählen | $$(1-1)^m = 0$$ |
| 4 | Teilerpaar in $$n+1$$ Zahlen aus $$1..2n$$ | Schubfach | ungerader Anteil |
| 5 | Struktur der Lösungsmenge | Linearität | Kern + partikuläre Lösung |
| 5 | Lösung über charakteristische Gleichung | Einsetzen | doppelte Nullstelle: $$n\lambda^n$$ |
| 5 | Binet-Formel | Ansatz + Anfangswerte | $$a = 1/\sqrt 5$$ |
| 6 | Handschlaglemma | doppeltes Abzählen | jede Kante zweimal |
| 6 | Baum hat $$n - 1$$ Kanten | Induktion | Blatt entfernen |
| 6 | Satz von Euler (Graphen) | Induktion über Kanten | Kreise zusammenfügen |
| 6 | Eulersche Polyederformel | Induktion | Kreiskante entfernen |
| 6 | $$e \le 3v - 6$$ | doppeltes Abzählen | $$3f \le 2e$$ |
| 6 | $$(A^k)_{ij}$$ zählt Kantenfolgen | Induktion | letzter Schritt |
| 7 | Eindeutigkeit von $$e$$ und Inversen | Gleichungskette | $$b = b(ac) = (ba)c = c$$ |
| 7 | Satz von Lagrange | Nebenklassen | Partition in gleich große Teile |
| 7 | Folgerungen aus Lagrange | Lagrange auf $$\langle a\rangle$$ | $$a^{\lvert G\rvert} = e$$ |
| 7 | Homomorphismus: injektiv genau bei trivialem Kern | beide Richtungen | $$f(ab^{-1}) = e$$ |
| 7 | $$\mathbb Z_m$$ Körper genau bei $$m$$ prim | Nullteiler | $$m = ab$$ |
| 7 | Nullstelle ⇔ Linearfaktor | Polynomdivision | $$f(a) = r$$ |
| 8 | mehr als $$n$$ Vektoren sind abhängig | Gauß | freie Variable |
| 8 | Lösbarkeit und Struktur von LGS | Rang, Kern | $$x_p + \ker A$$ |
| 8 | Dimensionsformel | Basisergänzung | Bilder der Ergänzung sind Basis |
| 8 | Eigenvektoren zu verschiedenen Eigenwerten unabhängig | Induktion | $$A$$ anwenden und abziehen |
| 9 | Erkennen $$d - 1$$, korrigieren $$\lfloor (d-1)/2\rfloor$$ | Dreiecksungleichung | Kugeln disjunkt |
| 9 | Minimalabstand = Minimalgewicht | Linearität | $$d(x,y) = w(x+y)$$ |
| 9 | $$GH^T = 0$$, $$C = \ker H$$ | Blockrechnung, Rangsatz | gleiche Dimension |
| 9 | Hamming-Schranke | Kugelpackung | disjunkte Kugeln |

## Selbsttest

<details class="beweis" markdown="1">
<summary>1. Bestimme das Inverse von 11 modulo 26.</summary>

Euklid: $$26 = 2 \cdot 11 + 4$$, $$11 = 2 \cdot 4 + 3$$, $$4 = 1 \cdot 3 + 1$$. Rückwärts: $$1 = 4 - 3 = 4 - (11 - 2 \cdot 4) = 3 \cdot 4 - 11 = 3(26 - 2 \cdot 11) - 11 = 3 \cdot 26 - 7 \cdot 11$$. Also $$11^{-1} \equiv -7 \equiv 19 \pmod{26}$$. Probe: $$11 \cdot 19 = 209 = 8 \cdot 26 + 1$$.

</details>

<details class="beweis" markdown="1">
<summary>2. Wie viele Lösungen hat x1 + x2 + x3 + x4 = 12 mit allen xi ≥ 2?</summary>

Substitution $$y_i = x_i - 2 \ge 0$$: $$y_1 + y_2 + y_3 + y_4 = 4$$. Sterne und Striche: $$\binom{4 + 3}{3} = \binom 73 = 35$$.

</details>

<details class="beweis" markdown="1">
<summary>3. Löse die Rekursion x(n+2) = x(n+1) + 6 x(n) mit x(0) = 0, x(1) = 5.</summary>

$$\lambda^2 - \lambda - 6 = (\lambda - 3)(\lambda + 2)$$, also $$x_n = a 3^n + b(-2)^n$$. $$a + b = 0$$, $$3a - 2b = 5$$, also $$a = 1$$, $$b = -1$$ und $$x_n = 3^n - (-2)^n$$. Probe: $$x_2 = 5 + 0 = 5 = 9 - 4$$.

</details>

<details class="beweis" markdown="1">
<summary>4. Kann ein planarer einfacher Graph 8 Knoten und 19 Kanten haben?</summary>

Nein: $$3v - 6 = 18 < 19$$. Mit 18 Kanten wäre es möglich (maximal planarer Graph, Triangulierung).

</details>

<details class="beweis" markdown="1">
<summary>5. Welche Ordnungen können Elemente einer Gruppe mit 15 Elementen haben?</summary>

Nach Lagrange nur Teiler von $$15$$: $$1, 3, 5, 15$$. Ordnung $$1$$ hat nur das neutrale Element. (Tatsächlich ist jede Gruppe der Ordnung $$15$$ zyklisch, also kommt auch $$15$$ vor; das folgt aber erst aus den Sylow-Sätzen, die nicht zu ADM gehören.)

</details>

## Offene Punkte

- Meine Übungsgruppe (Montag oder Mittwoch) prüfen: Sie bestimmt Testtermine und Prüfungstermin (03.02. oder 04.03.2027).
- Für die Prüfung im Jänner in TISS anmelden.
- Altprüfungen aus „bisherADM.pdf“ für die Prüfungsvorbereitung nutzen.
- Kapitelreihenfolge und Notation mit den Folien 2026W abgleichen (z. B. ob $$0 \in \mathbb N$$, Definitionen von Weg und Kreis, Codewörter als Zeilen oder Spalten).
- Klären, ob Beweise wie Schröder-Bernstein, Kuratowski oder der Austauschsatz prüfungsrelevant sind.

## Quellen

- Aufgabensammlung „ADM.pdf“ zur LVA 104.633
- [TISS: LVA 104.633](https://tiss.tuwien.ac.at/course/courseDetails.xhtml?courseNr=104633&semester=2026W)
- [Serlo *Mathe für Nicht-Freaks*](https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks)
- [EIMA-Kompendium](/tuwien/eima-kompendium/) und [GDS-Kompendium](/tuwien/gds-kompendium/) auf dieser Seite

