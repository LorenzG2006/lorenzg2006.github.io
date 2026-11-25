---
title: "Analysis für Informatik und Wirtschaftsinformatik – Kompendium"
kuerzel: Analysis
lva_nr: "104.634"
typ: VU
semester: 2026W
ects: 6
sws: 4.0
status: laufend
tiss: "https://tiss.tuwien.ac.at/course/courseDetails.xhtml?courseNr=104634&semester=2026W"
excerpt: "Analysis ausführlich: Lernquellen, Lernplan bis Ende Jänner und die Stoffzusammenfassung von den reellen Zahlen bis zu Differentialgleichungen, mit Standardbeweisen und eigenen Beispielen."
math: true
unlisted: true       # Entwurf, parallel zur kurzen LVA-Seite
---

{% include toc title="Inhalt" %}

## Überblick

Analysis ist die Mathematik des Grenzwerts. Alles baut auf einer Idee auf: Man nähert sich einer Größe beliebig genau an und fragt, was „im Limes“ passiert. Daraus entstehen Folgen und Reihen, Stetigkeit, die Ableitung als Grenzwert von Differenzenquotienten und das Integral als Grenzwert von Summen. Für die Informatik ist das nicht nur Theorie: Konvergenz numerischer Verfahren (Newton, Bisektion, Trapezregel), Rundungsfehler in Gleitkommazahlen und Taylor-Näherungen in Bibliotheksfunktionen hängen alle direkt daran.

Die Stoffzusammenfassung unten ist **nicht mit den Folien oder dem Skript der LVA 2026W abgeglichen**. Reihenfolge und Notation können abweichen. Belegt sind die Organisation oben und der Umfang laut Aufgabensammlung (bis Aufgabe 434, inklusive mehrdimensionaler Analysis, Differentialgleichungen und Numerik). Was nicht belegt ist, steht unter [Offene Punkte](#offene-punkte).
{: .notice--warning}

| **LVA** | VU 104.634 Analysis für Informatik und Wirtschaftsinformatik, 4 SWS, 6 ECTS |
| **Vortragender** | Wallner; [LVA-Seite](https://dmg.tuwien.ac.at/mwallner/lv/WS26/ana/) |
| **Vorlesung** | Mi 8:00–10:00, EI 8 Pötzl HS, bis Mi 27.01.; LectureTube-Livestream und Aufzeichnungen (Link in TUWEL) |
| **Buch** | Drmota, Gittenberger, Karigl, Panholzer: *Mathematik für Informatik*, Heldermann, 4. Aufl. 2014 (dasselbe wie ADM). Vorausgesetzt werden 1.1, 1.3, 1.4, Funktionen sowie 3.2 (lineare Abbildungen) und 3.4 (Gauß) |
| **1. Test (45 min)** | in Übungseinheit 6, Woche 23.–27.11.2026; keine Hilfsmittel, alle Rechenschritte begründen; Probeangabe: Musterübungstest (Kollision mit GDS-Test 1 am Do 26.11. beachten) |
| **2. Test (45 min)** | in Übungseinheit 11, Woche 18.–22.01.2027 |
| **Prüfung** | 29.01.2027, 15–17 Uhr; Wiederholung 30.04.2027. 100 min, meist 3 praktische und 2 theoretische Aufgaben, keine Hilfsmittel |
| **Punkte** | VO 40 + UE max. 12 (Kreuzerl 2, Tafel 2, besserer Test 8) |
| **Zulassung zur Prüfung** | mindestens 60 % angekreuzt, Tafelleistung positiv, UE mindestens 5 Punkte |
| **Genügend** | ab 25 Gesamtpunkten |
| **KI** | als Tutor beim Lernen erlaubt, bei der Prüfung nicht |

### Wofür ich welches Kapitel brauche

| Kapitel | Wofür |
|---|---|
| 1 Reelle und komplexe Zahlen | Supremum und Vollständigkeit tragen alle Existenzsätze; komplexe Zahlen für Differentialgleichungen 2. Ordnung; Gleitkomma für GDS |
| 2 Folgen | Grundlage jedes Grenzwerts; rekursive Folgen sind Algorithmen mit Schleifen |
| 3 Reihen | Konvergenzkriterien, Potenzreihen als Basis für $$e^x$$, $$\sin$$, $$\cos$$ |
| 4 Funktionen und Stetigkeit | Zwischenwertsatz und Bisektion; Existenz von Maximum und Minimum |
| 5 Differentialrechnung | Ableitungsregeln, Kurvendiskussion, Newton-Verfahren |
| 6 Taylorreihen | Näherungen mit garantierter Fehlerschranke |
| 7 Integralrechnung | Flächen, Stammfunktionen, numerische Integration |
| 8 Mehrdimensionale Analysis | Optimierung mit mehreren Variablen, Gradientenverfahren |
| 9 Differentialgleichungen | Wachstums- und Schwingungsmodelle |

### Kapitel im Buch

Abgeglichen mit dem Inhaltsverzeichnis von Drmota, Gittenberger, Karigl, Panholzer: *Mathematik für Informatik*, 4. Auflage 2014.

| Kapitel hier | Buchabschnitte | Aufgabensammlung |
|---|---|---|
| 1 Reelle und komplexe Zahlen | 1.1 Zahlen; Gleitkomma in 9.1 Fehlerproblematik in der Computernumerik | 432 |
| 2 Folgen | 4.1 Folgen reeller Zahlen, 4.3 Asymptotischer Vergleich von Folgen | 1–62, 107 ff. |
| 3 Reihen | 4.2 Unendliche Reihen | 63–106 |
| 4 Funktionen und Stetigkeit | 4.4 Elementare Funktionen, 4.5 Grenzwerte von Funktionen und Stetigkeit | 107–142 |
| 5 Differentialrechnung | 5.1 Die Ableitung, 5.2 Mittelwertsatz | 143–179 |
| 6 Taylorreihen | 5.2 Die Taylorsche Formel | 180–224 |
| 7 Integralrechnung | 5.3 unbestimmtes, 5.4 bestimmtes, 5.5 uneigentliche Integrale; 9.5 Numerische Integration | 225–313 |
| 8 Mehrdimensionale Analysis | 6.1–6.4 Funktionen, Ableitung, Extrema, Integrale in mehreren Variablen | 314–407 |
| 9 Differentialgleichungen | 7.6 Einführung, 7.7 Lineare DGL erster und zweiter Ordnung | 408–430 |
| Numerik | 9.1 Fehlerproblematik, 9.2 Gleichungen (Newton, Bisektion), 9.5 Integration | 431–434 |

## Teil A1 – Kostenlose Lernquellen

Primärquelle sind Vorlesung, Folien und Übungsblätter der LVA selbst. Die externen Quellen unten helfen beim Verstehen (Videos) und beim Üben (Aufgaben mit Lösungen).

### Die Quellen

| Quelle | Sprache | Wofür |
|---|---|---|
| Vorlesungsunterlagen und Übungsblätter in TUWEL | DE | Primärquelle; Notation und Umfang der Tests |
| [Serlo *Mathe für Nicht-Freaks*: Analysis 1](https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Analysis_1) | DE | Beweise ausführlich erklärt: Folgen, Reihen, Stetigkeit, Ableitung, Integral |
| Modler, Kreh: *Tutorium Analysis 1 und Lineare Algebra 1*, 3. Auflage (Springer) | DE | Analysis 1 von Studierenden erklärt, mit vielen durchgerechneten Beispielen |
| Modler, Kreh: *Tutorium Analysis 2 und Lineare Algebra 2* (Springer) | DE | mehrere Variablen (Kapitel 8) |
| Musterübungstest WS 2026/27 (TUWEL) | DE | offizielle Probeangabe für den 45-min-Test: 3 Aufgaben, 8 Punkte (wahr/falsch mit Begründung, Konvergenzradius mit Randpunkten, rekursive Folge) |
| Spickzettel „Folgen, Reihen und Funktionen“ | DE | eine Seite mit Definitionen und Kriterien zum Wiederholen |
| EIMA-Kompendium (diese Website) | DE | Logik, Quantoren negieren, Induktion: Voraussetzung für ε-N-Beweise |

### Thema → Quellen

| Kapitel | Lesen und Üben |
|---|---|
| 1 Reelle und komplexe Zahlen | Serlo (Axiome der reellen Zahlen, Supremum, komplexe Zahlen); GDS-Kompendium (Gleitkomma) |
| 2 Folgen | Serlo (Folgen, Grenzwert, Monotoniekriterium, Bolzano–Weierstraß) |
| 3 Reihen | Serlo (Reihen, Konvergenzkriterien) |
| 4 Stetigkeit | Serlo (Stetigkeit, Zwischenwertsatz) |
| 5 Ableitung | – |
| 6 Taylor | Serlo (Taylorreihen) |
| 7 Integral | – |
| 8 Mehrere Variablen | – |
| 9 Differentialgleichungen | – |

## Teil A2 – Lernplan

Der Plan folgt der Reihenfolge der Aufgabensammlung Analysis WS26 (Nummern in Klammern). Folgen und Grenzwertsätze (Aufgaben 1–62) liegen vor dem 16.11. Ziel ist, jede Woche alle angesagten Aufgaben anzukreuzen. Richtwert: **etwa 1 Stunde pro Werktag** plus ein Probetest am Wochenende.

| Woche | Stoff (Kapitel hier) | Aufgaben | Termin |
|---|---|---|---|
| 16.–22.11. | 3 Reihen und Konvergenzkriterien, Potenzreihen; Probetest 45 min | 63–96, 97–106 | Vorbereitung Test 1 |
| 23.–29.11. | Test; danach Landau-Symbole, exp/ln, 4 Stetigkeit | 107–142 | **Analysis-Test 1** (Übungseinheit 6), GDS-Test 1 Do 26.11. |
| 30.11.–06.12. | 5 Differentialrechnung, Kurvendiskussion | 143–179 | – |
| 07.–13.12. | 6 Taylor, 5 L'Hospital | 180–224 | – |
| 14.–20.12. | 7 Riemann-Integral, Hauptsatz, Substitution, partielle Integration | 225–246 | – |
| 21.12.–06.01. | 7 Integrationsrechnung, uneigentliche Integrale, Integralkriterium | 247–313 | Beweisliste bis Kap. 7 |
| 07.–17.01. | 8 metrische Räume, mehrdimensionale Analysis, Extrema; 9 DGL | 314–407, 408–430 | – |
| 18.–24.01. | Test; Numerik; erste Altprüfung unter 100 min | 431–434 | **Analysis-Test 2** (Übungseinheit 11) |
| 25.–29.01. | 2–3 Altprüfungen unter 100 min, Theorieliste auswendig | Altprüfungen | **Prüfung** Fr 29.01., 15–17 Uhr |

**Wochenroutine**

- Jede Definition einmal formal und einmal in eigenen Worten aufschreiben.
- Jeden mit **(B)** markierten Satz einmal ohne Vorlage beweisen.
- Pro Woche einen Satz Rechenaufgaben **ohne** Taschenrechner, weil im Test die Rechenroutine zählt.
- Fehler in eine Fehlerliste schreiben (Vorzeichen, Kettenregel vergessen, Grenzen bei der Substitution nicht umgerechnet …).

## Teil B – Stoffzusammenfassung

Mit **(B)** markierte Sätze sind die Standardbeweise, die man ohne Vorlage können sollte. Die Beweise sind zum Aufklappen. Alle Zahlenbeispiele sind selbst gerechnet und mit dem Computer nachgeprüft.

Die Kapitelstruktur folgt einem typischen Analysis-1-Aufbau, nicht nachweislich den Folien der LVA. Kapitel 8 und 9 sind Stoff: Die Aufgabensammlung behandelt metrische Räume, mehrdimensionale Analysis und Extrema (314–407) sowie Differentialgleichungen (408–430). Wie tief einzelne Verfahren gehen, zeigen die angesagten Aufgaben.
{: .notice--info}

### 1 Reelle und komplexe Zahlen

#### Die Axiome der reellen Zahlen

$$\mathbb R$$ wird nicht konstruiert, sondern durch drei Gruppen von Axiomen beschrieben:

1. **Körperaxiome:** Addition und Multiplikation sind assoziativ und kommutativ, es gibt neutrale Elemente $$0 \ne 1$$, inverse Elemente $$-a$$ und $$a^{-1}$$ (für $$a \ne 0$$), und es gilt das Distributivgesetz $$a(b + c) = ab + ac$$.
2. **Anordnungsaxiome:** Für je zwei Zahlen gilt genau eines von $$a < b$$, $$a = b$$, $$a > b$$; aus $$a < b$$ folgt $$a + c < b + c$$; aus $$a < b$$ und $$c > 0$$ folgt $$ac < bc$$; die Relation ist transitiv.
3. **Vollständigkeitsaxiom:** Jede nichtleere, nach oben beschränkte Teilmenge von $$\mathbb R$$ hat ein Supremum in $$\mathbb R$$.

Die ersten beiden Gruppen erfüllt auch $$\mathbb Q$$. Erst die Vollständigkeit unterscheidet $$\mathbb R$$ von $$\mathbb Q$$: $$\{x \in \mathbb Q : x^2 < 2\}$$ ist in $$\mathbb Q$$ beschränkt, hat aber dort kein Supremum, weil $$\sqrt 2 \notin \mathbb Q$$.

**Satz ($$\sqrt 2$$ ist irrational, B).**

<details class="beweis" markdown="1">
<summary>Beweis (indirekt)</summary>

Angenommen $$\sqrt 2 = p/q$$ mit $$p, q \in \mathbb N$$, $$q \ge 1$$, vollständig gekürzt. Dann $$p^2 = 2q^2$$, also ist $$p^2$$ gerade und damit $$p$$ gerade (das Quadrat einer ungeraden Zahl ist ungerade). Mit $$p = 2r$$ folgt $$4r^2 = 2q^2$$, also $$q^2 = 2r^2$$, und auch $$q$$ ist gerade. Dann war $$p/q$$ nicht gekürzt. Widerspruch.

</details>

#### Betrag und Dreiecksungleichung

$$\lvert x\rvert = x$$ für $$x \ge 0$$ und $$\lvert x\rvert = -x$$ für $$x < 0$$. Geometrisch ist $$\lvert x - y\rvert$$ der Abstand von $$x$$ und $$y$$. Rechenregeln: $$\lvert xy\rvert = \lvert x\rvert\,\lvert y\rvert$$, $$\lvert x\rvert \le a \Leftrightarrow -a \le x \le a$$.

**Satz (Dreiecksungleichung, B).** Für alle $$x, y \in \mathbb R$$ gilt

$$
\lvert x + y\rvert \le \lvert x\rvert + \lvert y\rvert \qquad\text{und}\qquad \bigl\lvert \lvert x\rvert - \lvert y\rvert \bigr\rvert \le \lvert x - y\rvert .
$$

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Es gilt $$-\lvert x\rvert \le x \le \lvert x\rvert$$ und $$-\lvert y\rvert \le y \le \lvert y\rvert$$. Addieren ergibt $$-(\lvert x\rvert + \lvert y\rvert) \le x + y \le \lvert x\rvert + \lvert y\rvert$$, und das ist genau $$\lvert x + y\rvert \le \lvert x\rvert + \lvert y\rvert$$.

Umgekehrte Dreiecksungleichung: $$\lvert x\rvert = \lvert (x - y) + y\rvert \le \lvert x - y\rvert + \lvert y\rvert$$, also $$\lvert x\rvert - \lvert y\rvert \le \lvert x - y\rvert$$. Mit vertauschten Rollen $$\lvert y\rvert - \lvert x\rvert \le \lvert x - y\rvert$$. Beides zusammen ist die Behauptung.

</details>

**Satz (Bernoulli-Ungleichung, B).** Für $$x \ge -1$$ und $$n \in \mathbb N$$ gilt $$(1 + x)^n \ge 1 + nx$$.

<details class="beweis" markdown="1">
<summary>Beweis (Induktion)</summary>

$$n = 0$$: $$1 \ge 1$$. Schritt: Wegen $$1 + x \ge 0$$ darf man die Induktionsvoraussetzung mit $$1 + x$$ multiplizieren:

$$
(1 + x)^{n+1} \ge (1 + nx)(1 + x) = 1 + (n+1)x + nx^2 \ge 1 + (n+1)x .
$$

</details>

#### Supremum und Infimum

Sei $$M \subseteq \mathbb R$$ nichtleer. $$s$$ ist **obere Schranke**, falls $$x \le s$$ für alle $$x \in M$$. Das **Supremum** $$\sup M$$ ist die kleinste obere Schranke:

$$
s = \sup M \quad\Leftrightarrow\quad \text{(i) } \forall x \in M: x \le s \quad\text{und}\quad \text{(ii) } \forall \varepsilon > 0\ \exists x \in M: x > s - \varepsilon .
$$

Bedingung (ii) sagt: Jede kleinere Zahl $$s - \varepsilon$$ ist keine obere Schranke mehr. Liegt $$\sup M$$ in $$M$$, heißt es **Maximum**. Infimum und Minimum analog mit „größte untere Schranke“.

**Beispiel.** $$M = \{1 - \tfrac1n : n \ge 1\} = \{0, \tfrac12, \tfrac23, \tfrac34, \dots\}$$.

- $$\inf M = \min M = 0$$ (bei $$n = 1$$ angenommen).
- $$\sup M = 1$$: (i) $$1 - \tfrac1n < 1$$ für alle $$n$$. (ii) Zu $$\varepsilon > 0$$ wähle $$n > 1/\varepsilon$$ (Archimedes), dann $$1 - \tfrac1n > 1 - \varepsilon$$.
- Ein Maximum gibt es nicht, weil $$1 \notin M$$.

**Satz (Archimedisches Prinzip, B).** $$\mathbb N$$ ist in $$\mathbb R$$ nicht nach oben beschränkt. Äquivalent: Zu jedem $$\varepsilon > 0$$ gibt es ein $$n \in \mathbb N$$ mit $$1/n < \varepsilon$$.

<details class="beweis" markdown="1">
<summary>Beweis (mit dem Vollständigkeitsaxiom)</summary>

Angenommen $$\mathbb N$$ ist nach oben beschränkt. Nach dem Vollständigkeitsaxiom existiert $$s = \sup \mathbb N$$. Weil $$s - 1$$ keine obere Schranke ist, gibt es ein $$n \in \mathbb N$$ mit $$n > s - 1$$. Dann ist $$n + 1 \in \mathbb N$$ und $$n + 1 > s$$, im Widerspruch dazu, dass $$s$$ obere Schranke ist.

Zweite Form: Zu $$\varepsilon > 0$$ gibt es ein $$n > 1/\varepsilon$$, also $$1/n < \varepsilon$$.

</details>

**Folgerung:** $$\mathbb Q$$ liegt dicht in $$\mathbb R$$. Zwischen zwei reellen Zahlen $$a < b$$ liegt immer eine rationale Zahl (wähle $$n$$ mit $$1/n < b - a$$, dann liegt ein Vielfaches $$m/n$$ in $$(a, b)$$).

#### Komplexe Zahlen

$$\mathbb C = \{a + bi : a, b \in \mathbb R\}$$ mit $$i^2 = -1$$. Für $$z = a + bi$$:

| Begriff | Formel |
|---|---|
| Realteil, Imaginärteil | $$\operatorname{Re} z = a$$, $$\operatorname{Im} z = b$$ |
| konjugiert | $$\bar z = a - bi$$ |
| Betrag | $$\lvert z\rvert = \sqrt{a^2 + b^2} = \sqrt{z \bar z}$$ |
| Kehrwert | $$\dfrac1z = \dfrac{\bar z}{\lvert z\rvert^2}$$ |

**Division:** mit dem Konjugierten des Nenners erweitern.

$$
\frac{1 + i}{1 - i} = \frac{(1 + i)(1 + i)}{(1 - i)(1 + i)} = \frac{1 + 2i + i^2}{1 - i^2} = \frac{2i}{2} = i .
$$

$$\mathbb C$$ ist ein Körper, aber **nicht angeordnet**: Es gibt kein „$$<$$“, das mit den Rechenregeln verträglich ist (sonst wäre $$i^2 = -1 > 0$$ oder $$(-i)^2 > 0$$, beides $$-1$$).

**Polarform.** Jedes $$z \ne 0$$ lässt sich schreiben als

$$
z = r(\cos\varphi + i \sin\varphi) = r e^{i\varphi}, \qquad r = \lvert z\rvert,\ \varphi = \arg z .
$$

Die **Euler-Formel** $$e^{i\varphi} = \cos\varphi + i\sin\varphi$$ folgt aus den Potenzreihen (Kapitel 3 und 6). Spezialfall: $$e^{i\pi} = -1$$.

Beim Bestimmen von $$\varphi$$ aus $$\tan\varphi = b/a$$ auf den Quadranten achten. $$z = -1 - i$$ hat $$\varphi = 5\pi/4$$ (oder $$-3\pi/4$$), nicht $$\pi/4$$, obwohl $$b/a = 1$$.
{: .notice--warning}

**Satz (Multiplikation in Polarform, B).** $$r_1 e^{i\varphi_1} \cdot r_2 e^{i\varphi_2} = r_1 r_2\, e^{i(\varphi_1 + \varphi_2)}$$: Beträge multiplizieren, Winkel addieren. Daraus folgt die **Formel von de Moivre** $$(\cos\varphi + i\sin\varphi)^n = \cos(n\varphi) + i \sin(n\varphi)$$.

<details class="beweis" markdown="1">
<summary>Beweis mit den Additionstheoremen</summary>

$$
\begin{aligned}
(\cos\varphi_1 + i\sin\varphi_1)(\cos\varphi_2 + i\sin\varphi_2) &= (\cos\varphi_1\cos\varphi_2 - \sin\varphi_1\sin\varphi_2) + i(\sin\varphi_1\cos\varphi_2 + \cos\varphi_1\sin\varphi_2)\\
&= \cos(\varphi_1 + \varphi_2) + i\sin(\varphi_1 + \varphi_2).
\end{aligned}
$$

Die Beträge multiplizieren sich dabei als reelle Faktoren. De Moivre folgt per Induktion über $$n$$.

</details>

**Beispiel Potenz.** $$z = 1 + i\sqrt3$$ hat $$r = \sqrt{1 + 3} = 2$$ und $$\varphi = \pi/3$$ (erster Quadrant, $$\tan\varphi = \sqrt3$$). Also

$$
z^6 = 2^6 e^{i \cdot 6\pi/3} = 64\, e^{2\pi i} = 64 .
$$

**n-te Wurzeln.** Die Gleichung $$z^n = w$$ mit $$w = \rho e^{i\psi} \ne 0$$ hat genau $$n$$ Lösungen

$$
z_k = \sqrt[n]{\rho}\; e^{i(\psi + 2k\pi)/n}, \qquad k = 0, 1, \dots, n - 1 .
$$

Sie liegen als regelmäßiges $$n$$-Eck auf dem Kreis mit Radius $$\sqrt[n]{\rho}$$.

**Beispiel.** $$z^4 = -16$$. Es ist $$-16 = 16 e^{i\pi}$$, also $$\sqrt[4]{16} = 2$$ und Winkel $$\pi/4 + k\pi/2$$:

$$
z_0 = 2e^{i\pi/4} = \sqrt2 + i\sqrt2,\quad z_1 = -\sqrt2 + i\sqrt2,\quad z_2 = -\sqrt2 - i\sqrt2,\quad z_3 = \sqrt2 - i\sqrt2 .
$$

Probe für $$z_0$$: $$(\sqrt2 + i\sqrt2)^2 = 2 + 4i - 2 = 4i$$, und $$(4i)^2 = -16$$.

**Fundamentalsatz der Algebra** (ohne Beweis): Jedes Polynom vom Grad $$n \ge 1$$ mit komplexen Koeffizienten hat genau $$n$$ Nullstellen in $$\mathbb C$$ (mit Vielfachheit). Hat ein reelles Polynom die Nullstelle $$z$$, dann auch $$\bar z$$.

#### Zahlen am Computer: Gleitkommasysteme und Rundung

Im Computer gibt es keine reellen Zahlen, sondern ein endliches **Gleitkommasystem** $$F(b, p, e_{\min}, e_{\max})$$: Zahlen der Form $$\pm m_0.m_1 \dots m_{p-1} \cdot b^{e}$$ mit Basis $$b$$, $$p$$ Mantissenstellen und $$e_{\min} \le e \le e_{\max}$$. Normalisiert heißt $$m_0 \ne 0$$. Die Details (Anzahl der Zahlen, denormalisierte Zahlen, IEEE 754) stehen im GDS-Kompendium; eine Analysis-Übungsaufgabe zum Gleitkommasystem behandelt dasselbe Thema.

Analytisch wichtig ist eine einzige Abschätzung. Eine Rundung $$\square: \mathbb R \to F$$ zur nächstgelegenen Zahl hat im normalisierten Bereich den relativen Fehler

$$
\frac{\lvert \square x - x\rvert}{\lvert x\rvert} \le \tfrac12 b^{1-p} =: \mathrm{eps} \qquad(\text{Maschinengenauigkeit}).
$$

Gleichwertig: $$\square x = x(1 + \delta)$$ mit $$\lvert\delta\rvert \le \mathrm{eps}$$. Für IEEE Double ist $$\mathrm{eps} = 2^{-53} \approx 1.1 \cdot 10^{-16}$$.

**Beispiel.** In $$F(10, 4, \dots)$$ wird $$1/3$$ zu $$3.333 \cdot 10^{-1}$$. Relativer Fehler: $$\lvert 0.3333 - 1/3\rvert / (1/3) = 10^{-4} \le \tfrac12 \cdot 10^{-3}$$.

**Auslöschung (Analysis-Bezug).** $$f(x) = \dfrac{1 - \cos x}{x^2}$$ hat für $$x \to 0$$ den Grenzwert $$\tfrac12$$ (Kapitel 6). In Double liefert $$x = 10^{-8}$$ aber $$0$$: $$\cos x$$ wird zu exakt $$1$$ gerundet, weil $$1 - \cos x \approx 5 \cdot 10^{-17}$$ kleiner als eps ist. Die gleichwertige Form $$\dfrac{2\sin^2(x/2)}{x^2}$$ liefert korrekt $$0.5$$. Gleitkomma-Addition ist auch nicht assoziativ: $$(10^{16} + 1) - 10^{16}$$ ergibt $$0$$.

**Stolperfallen**

- Ein Supremum muss nicht zur Menge gehören. „Größtes Element“ ist das Maximum, nicht das Supremum.
- Beim Nachweis von $$s = \sup M$$ braucht man **beide** Teile: obere Schranke **und** keine kleinere obere Schranke.
- $$\lvert x + y\rvert = \lvert x\rvert + \lvert y\rvert$$ gilt nur, wenn $$x, y$$ dasselbe Vorzeichen haben.
- $$\sqrt{x^2} = \lvert x\rvert$$, nicht $$x$$.
- Bei $$z^n = w$$ nicht nur eine Wurzel angeben: es sind immer $$n$$ Stück.
- In $$\mathbb C$$ gibt es keine Ungleichungen zwischen Zahlen, nur zwischen Beträgen.

### 2 Folgen

#### Konvergenz

Eine **Folge** ist eine Abbildung $$\mathbb N \to \mathbb R$$, $$n \mapsto a_n$$, geschrieben $$(a_n)_{n \ge 1}$$. Sie **konvergiert** gegen $$a$$, wenn

$$
\forall \varepsilon > 0\ \exists N \in \mathbb N\ \forall n \ge N: \lvert a_n - a\rvert < \varepsilon .
$$

In Worten: Ab einem Index $$N$$ liegen alle Folgenglieder in der $$\varepsilon$$-Umgebung von $$a$$. Das $$N$$ darf von $$\varepsilon$$ abhängen (je kleiner $$\varepsilon$$, desto größer $$N$$). Schreibweise $$\lim_{n\to\infty} a_n = a$$ oder $$a_n \to a$$. Eine Folge mit Grenzwert $$0$$ heißt **Nullfolge**. Eine Folge, die nicht konvergiert, heißt **divergent**; $$a_n \to \infty$$ (bestimmte Divergenz) heißt: $$\forall K\ \exists N\ \forall n \ge N: a_n > K$$.

**Beispiel (ε-N-Beweis).** Behauptung: $$a_n = \dfrac{2n + 1}{n + 3} \to 2$$.

Nebenrechnung: $$\lvert a_n - 2\rvert = \left\lvert \dfrac{2n + 1 - 2n - 6}{n + 3} \right\rvert = \dfrac{5}{n + 3} < \dfrac5n$$.

Beweis: Sei $$\varepsilon > 0$$. Wähle $$N > 5/\varepsilon$$ (Archimedes). Für $$n \ge N$$ gilt $$\lvert a_n - 2\rvert < 5/n \le 5/N < \varepsilon$$. Für $$\varepsilon = 0.01$$ reicht übrigens schon exakt $$n > 497$$; das grobe $$N = 501$$ ist genauso korrekt, man muss kein optimales $$N$$ finden.

**Satz (Eindeutigkeit des Grenzwerts, B).** Eine Folge hat höchstens einen Grenzwert.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Angenommen $$a_n \to a$$ und $$a_n \to b$$ mit $$a \ne b$$. Setze $$\varepsilon = \lvert a - b\rvert / 2 > 0$$. Es gibt $$N_1$$ mit $$\lvert a_n - a\rvert < \varepsilon$$ für $$n \ge N_1$$ und $$N_2$$ mit $$\lvert a_n - b\rvert < \varepsilon$$ für $$n \ge N_2$$. Für $$n = \max(N_1, N_2)$$:

$$
\lvert a - b\rvert \le \lvert a - a_n\rvert + \lvert a_n - b\rvert < 2\varepsilon = \lvert a - b\rvert ,
$$

Widerspruch.

</details>

**Satz (konvergent ⇒ beschränkt, B).** Jede konvergente Folge ist beschränkt.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Sei $$a_n \to a$$. Zu $$\varepsilon = 1$$ gibt es $$N$$ mit $$\lvert a_n - a\rvert < 1$$ für $$n \ge N$$, also $$\lvert a_n\rvert < \lvert a\rvert + 1$$. Die endlich vielen Glieder davor sind ohnehin beschränkt. Also gilt für alle $$n$$:

$$
\lvert a_n\rvert \le \max\bigl(\lvert a_1\rvert, \dots, \lvert a_{N-1}\rvert, \lvert a\rvert + 1\bigr).
$$

</details>

Die Umkehrung ist falsch: $$a_n = (-1)^n$$ ist beschränkt, aber divergent.
{: .notice--info}

#### Grenzwertsätze

**Satz (B).** Gilt $$a_n \to a$$ und $$b_n \to b$$, dann

$$
a_n + b_n \to a + b, \qquad a_n b_n \to ab, \qquad \frac{a_n}{b_n} \to \frac ab \ (\text{falls } b \ne 0), \qquad \lvert a_n\rvert \to \lvert a\rvert .
$$

Außerdem bleiben Ungleichungen im Limes erhalten, aber nur als „$$\le$$“: Aus $$a_n \le b_n$$ für alle $$n$$ folgt $$a \le b$$.

<details class="beweis" markdown="1">
<summary>Beweis für Summe und Produkt</summary>

**Summe:** Sei $$\varepsilon > 0$$. Wähle $$N$$ so, dass $$\lvert a_n - a\rvert < \varepsilon/2$$ und $$\lvert b_n - b\rvert < \varepsilon/2$$ für $$n \ge N$$ (Maximum der beiden einzelnen $$N$$). Dann

$$
\lvert (a_n + b_n) - (a + b)\rvert \le \lvert a_n - a\rvert + \lvert b_n - b\rvert < \varepsilon .
$$

**Produkt:** Trick „Null addieren“:

$$
\lvert a_n b_n - ab\rvert = \lvert a_n(b_n - b) + b(a_n - a)\rvert \le \lvert a_n\rvert\,\lvert b_n - b\rvert + \lvert b\rvert\,\lvert a_n - a\rvert .
$$

$$(a_n)$$ ist konvergent, also beschränkt: $$\lvert a_n\rvert \le K$$ mit $$K > 0$$. Wähle $$N$$ so, dass $$\lvert b_n - b\rvert < \varepsilon/(2K)$$ und $$\lvert a_n - a\rvert < \varepsilon/(2\lvert b\rvert + 1)$$ für $$n \ge N$$. Dann ist die rechte Seite kleiner als $$\varepsilon/2 + \varepsilon/2$$.

</details>

**Beispiel (rationale Folge).** Höchste Potenz kürzen:

$$
\frac{3n^2 - n}{5n^2 + 2} = \frac{3 - 1/n}{5 + 2/n^2} \to \frac{3 - 0}{5 + 0} = \frac35 .
$$

Allgemein entscheidet der Grad: Zählergrad kleiner als Nennergrad ergibt $$0$$, gleich ergibt den Quotienten der Leitkoeffizienten, größer ergibt bestimmte Divergenz.

**Beispiel (Wurzeldifferenz).** Mit der dritten binomischen Formel erweitern:

$$
\sqrt{n + 1} - \sqrt n = \frac{(n + 1) - n}{\sqrt{n + 1} + \sqrt n} = \frac{1}{\sqrt{n + 1} + \sqrt n} \to 0 .
$$

**Satz (Sandwich-Lemma, B).** Gilt $$a_n \le c_n \le b_n$$ ab einem Index und $$a_n \to L$$, $$b_n \to L$$, dann auch $$c_n \to L$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Sei $$\varepsilon > 0$$. Ab einem $$N$$ gilt $$L - \varepsilon < a_n$$ und $$b_n < L + \varepsilon$$, also $$L - \varepsilon < a_n \le c_n \le b_n < L + \varepsilon$$, d. h. $$\lvert c_n - L\rvert < \varepsilon$$.

</details>

**Beispiel.** $$\dfrac{\sin n}{n} \to 0$$, weil $$-\tfrac1n \le \tfrac{\sin n}{n} \le \tfrac1n$$. Und $$\sqrt[n]{n} \to 1$$ (Standardgrenzwert, ebenso $$\sqrt[n]{a} \to 1$$ für $$a > 0$$ und $$q^n \to 0$$ für $$\lvert q\rvert < 1$$).

#### Monotonie und Vollständigkeit

$$(a_n)$$ heißt **monoton wachsend**, wenn $$a_{n+1} \ge a_n$$ für alle $$n$$ (fallend analog).

**Satz (Monotoniekriterium, B).** Jede monoton wachsende, nach oben beschränkte Folge konvergiert, und zwar gegen $$\sup\{a_n\}$$. (Fallend und nach unten beschränkt analog gegen das Infimum.)

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Die Menge $$\{a_n : n \in \mathbb N\}$$ ist nichtleer und nach oben beschränkt, hat also nach dem Vollständigkeitsaxiom ein Supremum $$s$$. Sei $$\varepsilon > 0$$. Weil $$s - \varepsilon$$ keine obere Schranke ist, gibt es ein $$N$$ mit $$a_N > s - \varepsilon$$. Wegen der Monotonie gilt für alle $$n \ge N$$:

$$
s - \varepsilon < a_N \le a_n \le s ,
$$

also $$\lvert a_n - s\rvert < \varepsilon$$.

</details>

Hier sieht man, wofür das Vollständigkeitsaxiom gebraucht wird: In $$\mathbb Q$$ ist der Satz falsch. Die Folge $$1, 1.4, 1.41, 1.414, \dots$$ ist rational, wachsend und beschränkt, ihr Grenzwert $$\sqrt2$$ liegt aber nicht in $$\mathbb Q$$.
{: .notice--info}

#### Rekursive Folgen

Eine rekursive Folge $$a_{n+1} = f(a_n)$$ ist ein Algorithmus: Startwert, dann immer dieselbe Vorschrift. Das Standardrezept:

1. Grenzwert **kandidieren**: Falls $$a_n \to a$$ und $$f$$ stetig, muss $$a = f(a)$$ gelten (Fixpunktgleichung).
2. **Beschränktheit** per Induktion zeigen.
3. **Monotonie** per Induktion oder direkt zeigen.
4. Monotoniekriterium anwenden, dann ist der Grenzwert eine Lösung aus Schritt 1.

**Beispiel (B-Typ).** $$a_1 = 1$$, $$a_{n+1} = \sqrt{2 + a_n}$$. Werte: $$1,\ 1.732,\ 1.932,\ 1.983,\ 1.996,\ 1.999, \dots$$

1. Fixpunkt: $$a = \sqrt{2 + a} \Rightarrow a^2 - a - 2 = 0 \Rightarrow a \in \{2, -1\}$$. Da alle $$a_n > 0$$, kommt nur $$a = 2$$ in Frage.
2. $$a_n < 2$$ per Induktion: $$a_1 = 1 < 2$$, und aus $$a_n < 2$$ folgt $$a_{n+1} = \sqrt{2 + a_n} < \sqrt 4 = 2$$.
3. Wachsend: $$a_{n+1} > a_n \Leftrightarrow 2 + a_n > a_n^2 \Leftrightarrow (2 - a_n)(1 + a_n) > 0$$, und das stimmt wegen $$0 < a_n < 2$$.
4. Also konvergiert $$(a_n)$$, und der Grenzwert ist $$2$$.

**Heron-Verfahren.** $$a_{n+1} = \tfrac12\bigl(a_n + \tfrac{2}{a_n}\bigr)$$ mit $$a_1 = 1$$ liefert $$1,\ 1.5,\ 1.41667,\ 1.4142157,\ 1.41421356237$$. Der Grenzwert erfüllt $$a = \tfrac12(a + 2/a)$$, also $$a^2 = 2$$. Die Zahl der richtigen Stellen verdoppelt sich ungefähr pro Schritt; das ist das Newton-Verfahren aus Kapitel 5 für $$x^2 - 2$$.

#### Die Eulersche Zahl

**Satz (B).** $$a_n = \left(1 + \tfrac1n\right)^n$$ ist monoton wachsend und durch $$3$$ beschränkt, konvergiert also. Der Grenzwert heißt $$e \approx 2.71828$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

**Monotonie** (mit Bernoulli, für $$n \ge 2$$):

$$
\frac{a_n}{a_{n-1}} = \left(\frac{n+1}{n}\right)^n \left(\frac{n-1}{n}\right)^{n-1} = \frac{n}{n-1}\left(\frac{n^2 - 1}{n^2}\right)^n = \frac{n}{n-1}\left(1 - \frac{1}{n^2}\right)^n \ge \frac{n}{n-1}\left(1 - \frac1n\right) = 1 .
$$

**Beschränktheit** (binomischer Lehrsatz):

$$
a_n = \sum_{k=0}^{n} \binom nk \frac{1}{n^k}, \qquad \binom nk \frac{1}{n^k} = \frac{1}{k!}\cdot\frac{n}{n}\cdot\frac{n-1}{n}\cdots\frac{n-k+1}{n} \le \frac{1}{k!} \le \frac{1}{2^{k-1}} \ (k \ge 1).
$$

Also $$a_n \le 1 + \sum_{k=1}^{n} 2^{-(k-1)} < 1 + 2 = 3$$.

</details>

Die Konvergenz ist langsam: $$a_{10} \approx 2.594$$, $$a_{100} \approx 2.705$$, $$a_{1000} \approx 2.717$$. Die Reihe $$\sum 1/k!$$ aus Kapitel 3 ist viel schneller. Allgemein gilt $$\left(1 + \tfrac xn\right)^n \to e^x$$.

#### Teilfolgen, Häufungspunkte, Bolzano–Weierstraß

Eine **Teilfolge** $$(a_{n_k})$$ entsteht durch Auswahl von Indizes $$n_1 < n_2 < \dots$$. Ist $$a_n \to a$$, konvergiert auch jede Teilfolge gegen $$a$$. **Häufungspunkt** von $$(a_n)$$ ist jeder Grenzwert einer Teilfolge; äquivalent: In jeder $$\varepsilon$$-Umgebung liegen unendlich viele Glieder. Der größte Häufungspunkt heißt $$\limsup$$, der kleinste $$\liminf$$.

**Beispiel.** $$a_n = (-1)^n + \tfrac1n$$: $$0,\ 1.5,\ -0.667,\ 1.25,\ -0.8,\ 1.167, \dots$$ Die geraden Glieder gehen gegen $$1$$, die ungeraden gegen $$-1$$. Häufungspunkte $$\pm1$$, $$\limsup a_n = 1$$, $$\liminf a_n = -1$$. Die Folge divergiert, weil sie zwei verschiedene Häufungspunkte hat. Achtung: $$\sup a_n = 1.5$$ ist nicht der $$\limsup$$.

**Satz (Bolzano–Weierstraß, B).** Jede beschränkte Folge hat eine konvergente Teilfolge.

<details class="beweis" markdown="1">
<summary>Beweis (Intervallhalbierung)</summary>

Alle $$a_n$$ liegen in $$I_0 = [A, B]$$. Halbiere $$I_0$$. Mindestens eine Hälfte enthält unendlich viele Folgenglieder; nenne sie $$I_1$$. So weiter: $$I_k$$ hat Länge $$(B - A)/2^k$$ und enthält unendlich viele Glieder. Wähle $$n_1 < n_2 < \dots$$ mit $$a_{n_k} \in I_k$$ (geht, weil in $$I_k$$ unendlich viele liegen).

Die linken Randpunkte der $$I_k$$ wachsen monoton und sind durch $$B$$ beschränkt, konvergieren also (Monotoniekriterium) gegen ein $$a$$. Weil die Längen gegen $$0$$ gehen, konvergieren die rechten Randpunkte gegen dasselbe $$a$$. Da $$a_{n_k}$$ zwischen den Randpunkten von $$I_k$$ liegt, folgt $$a_{n_k} \to a$$ mit dem Sandwich-Lemma.

</details>

#### Cauchy-Folgen

$$(a_n)$$ heißt **Cauchy-Folge**, wenn

$$
\forall \varepsilon > 0\ \exists N\ \forall m, n \ge N: \lvert a_m - a_n\rvert < \varepsilon .
$$

Der Vorteil: Man braucht den Grenzwert nicht zu kennen, um Konvergenz zu zeigen.

**Satz (Cauchy-Kriterium, B).** In $$\mathbb R$$ gilt: $$(a_n)$$ konvergiert genau dann, wenn $$(a_n)$$ eine Cauchy-Folge ist.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

„$$\Rightarrow$$“: Sei $$a_n \to a$$ und $$\varepsilon > 0$$. Ab einem $$N$$ gilt $$\lvert a_n - a\rvert < \varepsilon/2$$. Für $$m, n \ge N$$: $$\lvert a_m - a_n\rvert \le \lvert a_m - a\rvert + \lvert a - a_n\rvert < \varepsilon$$.

„$$\Leftarrow$$“: Eine Cauchy-Folge ist beschränkt (wie beim Satz „konvergent ⇒ beschränkt“ mit $$\varepsilon = 1$$ und $$m = N$$). Nach Bolzano–Weierstraß hat sie eine Teilfolge $$a_{n_k} \to a$$. Sei $$\varepsilon > 0$$. Wähle $$N$$ mit $$\lvert a_m - a_n\rvert < \varepsilon/2$$ für $$m, n \ge N$$ und ein $$k$$ mit $$n_k \ge N$$ und $$\lvert a_{n_k} - a\rvert < \varepsilon/2$$. Für $$n \ge N$$:

$$
\lvert a_n - a\rvert \le \lvert a_n - a_{n_k}\rvert + \lvert a_{n_k} - a\rvert < \varepsilon .
$$

</details>

**Stolperfallen**

- Im ε-N-Beweis wird $$\varepsilon$$ vorgegeben und $$N$$ abhängig davon gewählt, nicht umgekehrt.
- $$a_{n+1} - a_n \to 0$$ reicht **nicht** für Konvergenz: $$a_n = \sqrt n$$ hat $$a_{n+1} - a_n \to 0$$ und divergiert. Die Cauchy-Bedingung verlangt $$\lvert a_m - a_n\rvert$$ klein für **alle** $$m, n \ge N$$.
- „$$\infty - \infty$$“, „$$0 \cdot \infty$$“, „$$1^\infty$$“ sind unbestimmt: $$\left(1 + \tfrac1n\right)^n \to e$$, nicht $$1$$.
- Aus $$a_n < b_n$$ folgt im Limes nur $$a \le b$$ ($$\tfrac1n > 0$$, aber der Grenzwert ist $$0$$).
- Bei rekursiven Folgen sagt die Fixpunktgleichung nur, was der Grenzwert sein **muss**, falls er existiert. Die Existenz zeigt erst Monotonie und Beschränktheit.

### 3 Reihen

#### Definition

Eine **Reihe** $$\sum_{k=1}^{\infty} a_k$$ ist die Folge ihrer **Partialsummen** $$s_n = \sum_{k=1}^{n} a_k$$. Sie konvergiert, wenn $$(s_n)$$ konvergiert, und ihr Wert ist $$\lim s_n$$. Alles aus Kapitel 2 gilt also auch hier. Konvergente Reihen darf man gliedweise addieren und mit Konstanten multiplizieren.

**Satz (geometrische Reihe, B).** Für $$\lvert q\rvert < 1$$ gilt $$\sum_{k=0}^{\infty} q^k = \dfrac{1}{1 - q}$$. Für $$\lvert q\rvert \ge 1$$ divergiert die Reihe.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

$$s_n = 1 + q + \dots + q^n$$. Dann $$q s_n = q + \dots + q^{n+1}$$, also $$s_n - q s_n = 1 - q^{n+1}$$ und für $$q \ne 1$$

$$
s_n = \frac{1 - q^{n+1}}{1 - q} \to \frac{1}{1 - q}, \quad\text{weil } q^{n+1} \to 0 \text{ für } \lvert q\rvert < 1 .
$$

Für $$\lvert q\rvert \ge 1$$ ist $$(q^k)$$ keine Nullfolge, die Reihe divergiert nach dem Nullfolgenkriterium.

</details>

**Beispiel (Teleskopreihe).** Partialbruchzerlegung $$\dfrac{1}{k(k+1)} = \dfrac1k - \dfrac{1}{k+1}$$. Die Summe fällt zusammen:

$$
s_n = \left(1 - \tfrac12\right) + \left(\tfrac12 - \tfrac13\right) + \dots + \left(\tfrac1n - \tfrac{1}{n+1}\right) = 1 - \frac{1}{n+1} \to 1 .
$$

#### Nullfolgenkriterium und harmonische Reihe

**Satz (Nullfolgenkriterium, B).** Konvergiert $$\sum a_k$$, dann ist $$(a_k)$$ eine Nullfolge. Kontraposition: Ist $$(a_k)$$ keine Nullfolge, divergiert die Reihe.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

$$a_n = s_n - s_{n-1}$$. Wenn $$s_n \to s$$, dann auch $$s_{n-1} \to s$$, also $$a_n \to s - s = 0$$.

</details>

**Satz (harmonische Reihe, B).** $$\sum_{k=1}^{\infty} \dfrac1k$$ divergiert, obwohl $$1/k \to 0$$.

<details class="beweis" markdown="1">
<summary>Beweis (Gruppieren)</summary>

$$
\begin{aligned}
s_{2^m} &= 1 + \tfrac12 + \left(\tfrac13 + \tfrac14\right) + \left(\tfrac15 + \dots + \tfrac18\right) + \dots + \left(\tfrac{1}{2^{m-1}+1} + \dots + \tfrac{1}{2^m}\right)\\
&\ge 1 + \tfrac12 + 2\cdot\tfrac14 + 4\cdot\tfrac18 + \dots + 2^{m-1}\cdot\tfrac{1}{2^m} = 1 + \frac m2 .
\end{aligned}
$$

Jede Klammer hat $$2^{j-1}$$ Summanden, jeder mindestens $$1/2^j$$. Also sind die Partialsummen unbeschränkt.

</details>

Das Nullfolgenkriterium ist nur **notwendig**. Die harmonische Reihe ist das Standard-Gegenbeispiel zur falschen Umkehrung.
{: .notice--warning}

**Merke:** $$\sum \dfrac{1}{k^\alpha}$$ konvergiert genau für $$\alpha > 1$$. Für $$\alpha = 2$$: $$\dfrac{1}{k^2} \le \dfrac{1}{k(k-1)}$$ für $$k \ge 2$$, und die rechte Seite ist eine Teleskopreihe mit Summe $$1$$. Also $$\sum 1/k^2 \le 2$$ (der exakte Wert ist $$\pi^2/6 \approx 1.645$$).

#### Vergleichskriterien

**Satz (Majoranten- und Minorantenkriterium, B).** Sei $$0 \le a_k \le b_k$$ ab einem Index.

- Konvergiert $$\sum b_k$$, dann konvergiert $$\sum a_k$$ (Majorante).
- Divergiert $$\sum a_k$$, dann divergiert $$\sum b_k$$ (Minorante).

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Bei nichtnegativen Gliedern sind die Partialsummen $$s_n = \sum_{k \le n} a_k$$ monoton wachsend. Außerdem $$s_n \le \sum_{k \le n} b_k \le \sum_{k=1}^{\infty} b_k$$, also beschränkt. Das Monotoniekriterium liefert die Konvergenz. Der zweite Teil ist die Kontraposition des ersten.

</details>

**Beispiel.** $$\sum \dfrac{1}{k^2 + k + 1}$$ konvergiert mit Majorante $$\sum 1/k^2$$. $$\sum \dfrac{1}{\sqrt k}$$ divergiert mit Minorante $$\sum 1/k$$, weil $$1/\sqrt k \ge 1/k$$.

#### Quotienten- und Wurzelkriterium

**Satz (Quotientenkriterium, B).** Sei $$a_k \ne 0$$ und $$q = \lim\limits_{k\to\infty} \left\lvert \dfrac{a_{k+1}}{a_k} \right\rvert$$ (falls der Limes existiert).

- $$q < 1$$: $$\sum a_k$$ konvergiert absolut.
- $$q > 1$$: $$\sum a_k$$ divergiert.
- $$q = 1$$: keine Aussage.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Fall $$q < 1$$: Wähle $$\theta$$ mit $$q < \theta < 1$$. Ab einem $$N$$ gilt $$\lvert a_{k+1}\rvert \le \theta \lvert a_k\rvert$$, per Induktion $$\lvert a_k\rvert \le \lvert a_N\rvert\,\theta^{k-N}$$ für $$k \ge N$$. Das ist eine konvergente geometrische Majorante, also konvergiert $$\sum \lvert a_k\rvert$$.

Fall $$q > 1$$: Ab einem $$N$$ gilt $$\lvert a_{k+1}\rvert \ge \lvert a_k\rvert$$, die Beträge wachsen, $$(a_k)$$ ist keine Nullfolge.

Fall $$q = 1$$: $$\sum 1/k$$ divergiert und $$\sum 1/k^2$$ konvergiert, beide haben $$q = 1$$.

</details>

**Wurzelkriterium:** Mit $$q = \limsup \sqrt[k]{\lvert a_k\rvert}$$ dieselben drei Fälle. Es ist stärker als das Quotientenkriterium, das Quotientenkriterium ist meist leichter zu rechnen. Faustregel: Fakultäten → Quotient, $$k$$-te Potenzen → Wurzel.

**Beispiel 1.** $$\sum \dfrac{k}{2^k}$$: $$\left\lvert \dfrac{a_{k+1}}{a_k} \right\rvert = \dfrac{k+1}{2^{k+1}} \cdot \dfrac{2^k}{k} = \dfrac{k+1}{2k} \to \dfrac12 < 1$$, konvergent. (Der Wert ist $$2$$; numerisch bestätigt.)

**Beispiel 2.** $$\sum \dfrac{k!}{k^k}$$:

$$
\frac{a_{k+1}}{a_k} = \frac{(k+1)!}{(k+1)^{k+1}} \cdot \frac{k^k}{k!} = \frac{k^k}{(k+1)^k} = \frac{1}{\left(1 + \frac1k\right)^k} \to \frac1e < 1 ,
$$

also konvergent. Hier taucht der Grenzwert aus Kapitel 2 wieder auf.

**Beispiel 3.** $$\sum \left(\dfrac{k}{2k + 1}\right)^k$$: $$\sqrt[k]{a_k} = \dfrac{k}{2k+1} \to \dfrac12 < 1$$, konvergent nach dem Wurzelkriterium.

#### Alternierende Reihen

**Satz (Leibniz-Kriterium, B).** Ist $$(a_k)$$ eine **monoton fallende Nullfolge**, dann konvergiert $$\sum_{k=1}^{\infty} (-1)^{k+1} a_k$$. Für den Grenzwert $$s$$ gilt die Fehlerschranke $$\lvert s - s_n\rvert \le a_{n+1}$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Die geraden Partialsummen wachsen: $$s_{2m+2} = s_{2m} + (a_{2m+1} - a_{2m+2}) \ge s_{2m}$$. Die ungeraden fallen: $$s_{2m+1} = s_{2m-1} - (a_{2m} - a_{2m+1}) \le s_{2m-1}$$. Außerdem $$s_{2m} = s_{2m-1} - a_{2m} \le s_{2m-1} \le s_1$$ und $$s_{2m+1} = s_{2m} + a_{2m+1} \ge s_{2m} \ge s_2$$. Beide Teilfolgen sind monoton und beschränkt, konvergieren also. Wegen $$s_{2m+1} - s_{2m} = a_{2m+1} \to 0$$ haben sie denselben Grenzwert $$s$$, und damit konvergiert $$(s_n)$$ gegen $$s$$.

Fehlerschranke: $$s$$ liegt immer zwischen zwei aufeinanderfolgenden Partialsummen $$s_n$$ und $$s_{n+1}$$, die sich um $$a_{n+1}$$ unterscheiden.

</details>

**Beispiel.** Die alternierende harmonische Reihe $$1 - \tfrac12 + \tfrac13 - \tfrac14 + \dots$$ konvergiert (gegen $$\ln 2 \approx 0.6931$$). Mit 10 Gliedern: $$s_{10} \approx 0.6456$$, tatsächlicher Fehler $$0.0475 \le a_{11} = 1/11 \approx 0.0909$$.

#### Absolute Konvergenz

$$\sum a_k$$ heißt **absolut konvergent**, wenn $$\sum \lvert a_k\rvert$$ konvergiert.

**Satz (B).** Absolut konvergent ⇒ konvergent, und $$\left\lvert \sum a_k \right\rvert \le \sum \lvert a_k\rvert$$.

<details class="beweis" markdown="1">
<summary>Beweis (Cauchy-Kriterium)</summary>

Für $$m > n$$ gilt mit der Dreiecksungleichung

$$
\lvert s_m - s_n\rvert = \left\lvert \sum_{k=n+1}^{m} a_k \right\rvert \le \sum_{k=n+1}^{m} \lvert a_k\rvert .
$$

Die rechte Seite ist die Differenz zweier Partialsummen von $$\sum \lvert a_k\rvert$$. Da diese Reihe konvergiert, ist ihre Partialsummenfolge Cauchy, also wird die rechte Seite für $$m, n \ge N$$ kleiner als $$\varepsilon$$. Dann ist auch $$(s_n)$$ Cauchy und konvergiert.

</details>

Die alternierende harmonische Reihe konvergiert, aber nicht absolut (**bedingt konvergent**). Bei bedingt konvergenten Reihen kommt es auf die Reihenfolge an: Nach dem Riemannschen Umordnungssatz kann man sie so umordnen, dass jeder beliebige Wert herauskommt. Absolut konvergente Reihen darf man beliebig umordnen.
{: .notice--info}

#### Potenzreihen

Eine **Potenzreihe** um $$x_0$$ ist $$\sum_{k=0}^{\infty} c_k (x - x_0)^k$$. Zu jeder Potenzreihe gibt es einen **Konvergenzradius** $$R \in [0, \infty]$$:

- Für $$\lvert x - x_0\rvert < R$$ konvergiert sie absolut.
- Für $$\lvert x - x_0\rvert > R$$ divergiert sie.
- Auf dem Rand $$\lvert x - x_0\rvert = R$$ ist alles möglich, jeder Randpunkt muss einzeln geprüft werden.

Berechnung (wenn die Limiten existieren):

$$
R = \lim_{k\to\infty} \left\lvert \frac{c_k}{c_{k+1}} \right\rvert \qquad\text{oder}\qquad R = \frac{1}{\limsup \sqrt[k]{\lvert c_k\rvert}} .
$$

Achtung: In der Quotientenformel steht $$c_k$$ **oben**, also umgekehrt wie im Quotientenkriterium. Das kommt daher, dass man das Quotientenkriterium auf $$c_k x^k$$ anwendet: $$\lvert c_{k+1}/c_k\rvert\,\lvert x\rvert < 1$$.
{: .notice--warning}

**Beispiel (mit Randpunkten).** $$\sum_{k=1}^{\infty} \dfrac{x^k}{k\, 3^k}$$. Hier $$c_k = \dfrac{1}{k 3^k}$$ und

$$
\left\lvert \frac{c_k}{c_{k+1}} \right\rvert = \frac{(k+1) 3^{k+1}}{k\, 3^k} = 3\cdot\frac{k+1}{k} \to 3 = R .
$$

- $$x = 3$$: $$\sum \dfrac{3^k}{k 3^k} = \sum \dfrac1k$$, harmonisch, divergent.
- $$x = -3$$: $$\sum \dfrac{(-1)^k}{k}$$, konvergent nach Leibniz.

Konvergenzbereich: $$[-3, 3)$$.

**Die wichtigsten Potenzreihen** (alle mit $$R = \infty$$, außer markiert):

$$
e^x = \sum_{k=0}^{\infty} \frac{x^k}{k!}, \quad \sin x = \sum_{k=0}^{\infty} \frac{(-1)^k x^{2k+1}}{(2k+1)!}, \quad \cos x = \sum_{k=0}^{\infty} \frac{(-1)^k x^{2k}}{(2k)!}, \quad \frac{1}{1-x} = \sum_{k=0}^{\infty} x^k \ (R = 1).
$$

Setzt man $$x = i\varphi$$ in die $$e^x$$-Reihe ein und sortiert nach geraden und ungeraden Potenzen (erlaubt wegen absoluter Konvergenz), erhält man $$e^{i\varphi} = \cos\varphi + i\sin\varphi$$, die Euler-Formel aus Kapitel 1. Mit $$x = 1$$ ergibt die Reihe $$e$$ schon mit 9 Gliedern ($$k \le 8$$) auf 5 Stellen genau: $$2.71828$$, Fehler $$3 \cdot 10^{-6}$$.

**Stolperfallen**

- $$a_k \to 0$$ beweist **keine** Konvergenz der Reihe.
- Quotientenkriterium mit $$q = 1$$ ist unentschieden, nicht „konvergent“. Und es braucht den Grenzwert des Quotienten (oder eine Schranke $$\theta < 1$$), nicht nur $$\lvert a_{k+1}/a_k\rvert < 1$$ für jedes $$k$$: bei $$\sum 1/k$$ ist der Quotient immer kleiner als $$1$$.
- Majorantenkriterium nur mit nichtnegativen Gliedern bzw. mit Beträgen anwenden.
- Leibniz verlangt **monoton fallend**. Nur „alternierend und Nullfolge“ reicht nicht.
- Beim Konvergenzradius die Randpunkte nicht vergessen.
- Der Wert einer Reihe ist nicht die Grenze ihrer Glieder: $$\sum 1/2^k = 2$$ (ab $$k = 0$$), aber $$1/2^k \to 0$$.

### 4 Funktionen und Stetigkeit

#### Grenzwerte von Funktionen

Sei $$f: D \to \mathbb R$$ und $$x_0$$ ein Häufungspunkt von $$D$$. Dann ist $$\lim_{x \to x_0} f(x) = L$$, wenn

$$
\forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in D: 0 < \lvert x - x_0\rvert < \delta \Rightarrow \lvert f(x) - L\rvert < \varepsilon .
$$

Gleichwertig (**Folgenkriterium**): Für jede Folge $$x_n \to x_0$$ mit $$x_n \ne x_0$$ gilt $$f(x_n) \to L$$. Der Wert $$f(x_0)$$ selbst spielt keine Rolle, $$f$$ muss dort nicht einmal definiert sein. **Einseitige** Grenzwerte $$\lim_{x \to x_0^+}$$ und $$\lim_{x \to x_0^-}$$ betrachten nur $$x > x_0$$ bzw. $$x < x_0$$; der Grenzwert existiert genau dann, wenn beide existieren und gleich sind.

**Beispiel.** $$\lim_{x \to 2} \dfrac{x^2 - 4}{x - 2} = \lim_{x \to 2} (x + 2) = 4$$. Kürzen ist erlaubt, weil $$x \ne 2$$ im Grenzprozess.

**Wichtige Grenzwerte:** $$\lim\limits_{x\to0} \dfrac{\sin x}{x} = 1$$, $$\lim\limits_{x\to0} \dfrac{e^x - 1}{x} = 1$$, $$\lim\limits_{x\to\infty} \dfrac{x^n}{e^x} = 0$$, $$\lim\limits_{x\to\infty} \dfrac{\ln x}{x^\alpha} = 0$$ für $$\alpha > 0$$. Die Exponentialfunktion schlägt jede Potenz, jede Potenz schlägt den Logarithmus.

#### Stetigkeit

$$f$$ heißt **stetig in** $$x_0 \in D$$, wenn

$$
\forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in D: \lvert x - x_0\rvert < \delta \Rightarrow \lvert f(x) - f(x_0)\rvert < \varepsilon ,
$$

und **stetig**, wenn sie in jedem Punkt von $$D$$ stetig ist. Anschaulich: Kleine Änderungen von $$x$$ bewirken kleine Änderungen von $$f(x)$$.

**Satz (Folgenstetigkeit, B).** $$f$$ ist genau dann stetig in $$x_0$$, wenn für jede Folge $$x_n \to x_0$$ in $$D$$ gilt: $$f(x_n) \to f(x_0)$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

„$$\Rightarrow$$“: Sei $$x_n \to x_0$$ und $$\varepsilon > 0$$. Zu $$\varepsilon$$ gibt es $$\delta$$ aus der Stetigkeit, zu $$\delta$$ ein $$N$$ mit $$\lvert x_n - x_0\rvert < \delta$$ für $$n \ge N$$. Dann $$\lvert f(x_n) - f(x_0)\rvert < \varepsilon$$ für $$n \ge N$$.

„$$\Leftarrow$$“ (Kontraposition): Ist $$f$$ nicht stetig in $$x_0$$, gibt es ein $$\varepsilon > 0$$, sodass für jedes $$\delta = 1/n$$ ein $$x_n$$ existiert mit $$\lvert x_n - x_0\rvert < 1/n$$ und $$\lvert f(x_n) - f(x_0)\rvert \ge \varepsilon$$. Dann gilt $$x_n \to x_0$$, aber nicht $$f(x_n) \to f(x_0)$$.

</details>

Mit dem Folgenkriterium übertragen sich die Grenzwertsätze aus Kapitel 2: **Summen, Produkte, Quotienten (Nenner $$\ne 0$$) und Verkettungen stetiger Funktionen sind stetig.** Daher sind Polynome, rationale Funktionen, $$e^x$$, $$\sin$$, $$\cos$$ und alle daraus zusammengesetzten Funktionen auf ihrem Definitionsbereich stetig.

**Beispiel (ε-δ-Beweis).** $$f(x) = x^2$$ ist stetig in $$x_0 = 2$$.

Nebenrechnung: $$\lvert x^2 - 4\rvert = \lvert x - 2\rvert\,\lvert x + 2\rvert$$. Für $$\lvert x - 2\rvert < 1$$ ist $$1 < x < 3$$, also $$\lvert x + 2\rvert < 5$$.

Beweis: Sei $$\varepsilon > 0$$ und $$\delta = \min(1, \varepsilon/5)$$. Für $$\lvert x - 2\rvert < \delta$$ gilt $$\lvert x^2 - 4\rvert < 5\lvert x - 2\rvert < 5 \cdot \varepsilon/5 = \varepsilon$$.

**Beispiel (Unstetigkeit mit Folgen).** $$f(x) = \sin(1/x)$$ für $$x \ne 0$$, $$f(0) = 0$$. Mit $$x_n = \dfrac{1}{\pi/2 + 2n\pi} \to 0$$ ist $$f(x_n) = 1$$ für alle $$n$$, also $$f(x_n) \to 1 \ne f(0)$$. $$f$$ ist in $$0$$ unstetig, egal wie man $$f(0)$$ wählt. Dagegen ist $$g(x) = x\sin(1/x)$$, $$g(0) = 0$$, stetig: $$\lvert g(x)\rvert \le \lvert x\rvert$$ (Sandwich).

**Arten von Unstetigkeitsstellen:** hebbar (Grenzwert existiert, aber $$\ne f(x_0)$$ oder $$f(x_0)$$ fehlt), Sprung (einseitige Grenzwerte verschieden, z. B. Signum in $$0$$), Polstelle ($$\to \pm\infty$$), Oszillation ($$\sin(1/x)$$).

#### Der Zwischenwertsatz und Bisektion

**Satz (Zwischenwertsatz, B).** Sei $$f: [a, b] \to \mathbb R$$ stetig und $$f(a) < 0 < f(b)$$ (oder umgekehrt). Dann gibt es ein $$\xi \in (a, b)$$ mit $$f(\xi) = 0$$. Allgemein nimmt $$f$$ jeden Wert zwischen $$f(a)$$ und $$f(b)$$ an.

<details class="beweis" markdown="1">
<summary>Beweis (Bisektion)</summary>

Setze $$a_0 = a$$, $$b_0 = b$$. Im Schritt $$n$$ sei $$m = (a_n + b_n)/2$$. Ist $$f(m) = 0$$, sind wir fertig. Ist $$f(m) < 0$$, setze $$a_{n+1} = m$$, $$b_{n+1} = b_n$$; sonst $$a_{n+1} = a_n$$, $$b_{n+1} = m$$. Dann gilt immer $$f(a_n) < 0 < f(b_n)$$ und $$b_n - a_n = (b - a)/2^n$$.

$$(a_n)$$ ist monoton wachsend und durch $$b$$ beschränkt, konvergiert also gegen ein $$\xi$$. Wegen $$b_n - a_n \to 0$$ gilt auch $$b_n \to \xi$$. Aus der Folgenstetigkeit folgt $$f(a_n) \to f(\xi)$$ und $$f(b_n) \to f(\xi)$$. Weil Ungleichungen im Limes als „$$\le$$“ erhalten bleiben: $$f(\xi) \le 0$$ und $$f(\xi) \ge 0$$, also $$f(\xi) = 0$$.

</details>

Der Beweis ist gleichzeitig ein Algorithmus. Nach $$n$$ Schritten ist die Nullstelle bis auf $$(b - a)/2^{n}$$ eingeschlossen (bzw. bis auf $$(b-a)/2^{n+1}$$, wenn man den Mittelpunkt als Näherung nimmt). Pro Schritt gewinnt man genau ein Bit.

**Beispiel.** $$f(x) = x^3 - x - 1$$ auf $$[1, 2]$$: $$f(1) = -1 < 0$$, $$f(2) = 5 > 0$$, also gibt es eine Nullstelle.

| Schritt | $$[a_n, b_n]$$ | $$m$$ | $$f(m)$$ |
|---|---|---|---|
| 0 | $$[1, 2]$$ | $$1.5$$ | $$0.875 > 0$$ |
| 1 | $$[1, 1.5]$$ | $$1.25$$ | $$-0.297 < 0$$ |
| 2 | $$[1.25, 1.5]$$ | $$1.375$$ | $$0.225 > 0$$ |
| 3 | $$[1.25, 1.375]$$ | $$1.3125$$ | $$-0.052 < 0$$ |
| 4 | $$[1.3125, 1.375]$$ | $$1.34375$$ | $$0.083 > 0$$ |
| 5 | $$[1.3125, 1.34375]$$ | $$1.328125$$ | $$0.015 > 0$$ |

Die Nullstelle ist $$\xi \approx 1.324718$$. Für Genauigkeit $$10^{-6}$$ braucht man $$1/2^n < 10^{-6}$$, also $$n \ge 20$$ Schritte (wegen $$2^{20} \approx 10^6$$).

#### Maximum und Minimum

**Satz (Satz vom Maximum und Minimum, Weierstraß, B).** Eine stetige Funktion $$f: [a, b] \to \mathbb R$$ auf einem **abgeschlossenen, beschränkten** Intervall ist beschränkt und nimmt Maximum und Minimum an.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

**Beschränkt:** Angenommen nicht. Dann gibt es $$x_n \in [a, b]$$ mit $$\lvert f(x_n)\rvert > n$$. Nach Bolzano–Weierstraß hat $$(x_n)$$ eine konvergente Teilfolge $$x_{n_k} \to \xi$$, und $$\xi \in [a, b]$$, weil das Intervall abgeschlossen ist. Wegen Stetigkeit $$f(x_{n_k}) \to f(\xi)$$, eine konvergente Folge ist beschränkt. Aber $$\lvert f(x_{n_k})\rvert > n_k \to \infty$$. Widerspruch.

**Maximum:** Sei $$S = \sup f([a, b])$$ (existiert, weil beschränkt). Es gibt $$x_n$$ mit $$f(x_n) > S - 1/n$$. Wieder eine Teilfolge $$x_{n_k} \to \xi \in [a, b]$$, und $$f(\xi) = \lim f(x_{n_k}) = S$$ (Sandwich zwischen $$S - 1/n_k$$ und $$S$$). Minimum analog.

</details>

Alle Voraussetzungen sind nötig: $$f(x) = 1/x$$ auf $$(0, 1]$$ ist unbeschränkt (Intervall nicht abgeschlossen). $$f(x) = x$$ auf $$[0, \infty)$$ hat kein Maximum (nicht beschränkt). Eine unstetige Funktion auf $$[0, 1]$$ wie $$f(x) = x$$ für $$x < 1$$, $$f(1) = 0$$ hat Supremum $$1$$, nimmt es aber nicht an.
{: .notice--warning}

#### Elementare Funktionen und Umkehrfunktionen

| Funktion | Definitionsbereich | Eigenschaften |
|---|---|---|
| $$e^x$$ | $$\mathbb R$$ | $$e^{x+y} = e^x e^y$$, streng wachsend, Bild $$(0, \infty)$$ |
| $$\ln x$$ | $$(0, \infty)$$ | Umkehrfunktion von $$e^x$$, $$\ln(xy) = \ln x + \ln y$$ |
| $$a^x = e^{x \ln a}$$ | $$\mathbb R$$ ($$a > 0$$) | Definition allgemeiner Potenzen |
| $$\sin, \cos$$ | $$\mathbb R$$ | $$2\pi$$-periodisch, $$\sin^2 + \cos^2 = 1$$ |
| $$\tan = \sin/\cos$$ | $$x \ne \pi/2 + k\pi$$ | $$\pi$$-periodisch |
| $$\arcsin$$ | $$[-1, 1]$$ | Umkehrung von $$\sin$$ auf $$[-\pi/2, \pi/2]$$ |
| $$\arccos$$ | $$[-1, 1]$$ | Umkehrung von $$\cos$$ auf $$[0, \pi]$$ |
| $$\arctan$$ | $$\mathbb R$$ | Umkehrung von $$\tan$$ auf $$(-\pi/2, \pi/2)$$, Bild $$(-\pi/2, \pi/2)$$ |

**Satz (Umkehrfunktion).** Ist $$f: I \to \mathbb R$$ auf einem Intervall $$I$$ stetig und streng monoton, dann ist $$f(I)$$ ein Intervall, und die Umkehrfunktion $$f^{-1}: f(I) \to I$$ ist ebenfalls stetig und streng monoton (in dieselbe Richtung).

Dass $$f(I)$$ ein Intervall ist, folgt aus dem Zwischenwertsatz; Injektivität aus der strengen Monotonie. Der Graph von $$f^{-1}$$ ist der an der Geraden $$y = x$$ gespiegelte Graph von $$f$$. Deshalb muss man $$\sin$$ zuerst auf ein Intervall einschränken, auf dem sie streng monoton ist: $$\arcsin(\sin 3) = \pi - 3 \approx 0.1416$$, nicht $$3$$.

**Stolperfallen**

- Im ε-δ-Beweis hängt $$\delta$$ von $$\varepsilon$$ (und $$x_0$$) ab, nicht von $$x$$.
- Um Unstetigkeit zu zeigen, reicht **eine** Folge $$x_n \to x_0$$ mit $$f(x_n) \not\to f(x_0)$$. Für Stetigkeit muss es für **alle** Folgen gelten.
- Der Zwischenwertsatz garantiert eine Nullstelle, sagt aber nichts über die Anzahl.
- Der Zwischenwertsatz braucht Stetigkeit auf dem **ganzen** Intervall: $$1/x$$ wechselt auf $$[-1, 1]$$ das Vorzeichen, hat aber keine Nullstelle.
- $$\ln(a + b) \ne \ln a + \ln b$$, $$e^{ab} \ne e^a e^b$$.

### 5 Differentialrechnung

#### Definition

$$f: I \to \mathbb R$$ heißt **differenzierbar in** $$x_0$$, wenn der Grenzwert des Differenzenquotienten existiert:

$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h} = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} .
$$

Geometrisch ist $$f'(x_0)$$ die Steigung der Tangente $$t(x) = f(x_0) + f'(x_0)(x - x_0)$$. Gleichwertig: $$f(x_0 + h) = f(x_0) + f'(x_0)h + r(h)$$ mit $$r(h)/h \to 0$$. Die Ableitung ist also die beste **lineare Näherung**. Diese Sicht verallgemeinert sich auf mehrere Variablen (Kapitel 8).

**Beispiel (aus der Definition).** $$f(x) = x^2$$:

$$
\frac{(x + h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h \to 2x .
$$

$$f(x) = \dfrac1x$$:

$$
\frac{1}{h}\left(\frac{1}{x + h} - \frac1x\right) = \frac{1}{h}\cdot\frac{x - (x + h)}{x(x + h)} = \frac{-1}{x(x + h)} \to -\frac{1}{x^2} .
$$

**Satz (differenzierbar ⇒ stetig, B).**

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Für $$x \ne x_0$$ ist $$f(x) - f(x_0) = \dfrac{f(x) - f(x_0)}{x - x_0}\,(x - x_0) \to f'(x_0) \cdot 0 = 0$$ für $$x \to x_0$$. Also $$f(x) \to f(x_0)$$.

</details>

Die Umkehrung ist falsch: $$f(x) = \lvert x\rvert$$ ist in $$0$$ stetig, aber der Differenzenquotient $$\lvert h\rvert/h$$ ist $$+1$$ für $$h > 0$$ und $$-1$$ für $$h < 0$$. Die einseitigen Grenzwerte sind verschieden, es gibt keine Ableitung (ein Knick).
{: .notice--warning}

#### Ableitungsregeln

**Satz (B).** Sind $$f, g$$ in $$x$$ differenzierbar, dann

$$
(f + g)' = f' + g', \qquad (fg)' = f'g + fg', \qquad \left(\frac fg\right)' = \frac{f'g - fg'}{g^2} \ (g(x) \ne 0) .
$$

<details class="beweis" markdown="1">
<summary>Beweis der Produkt- und Quotientenregel</summary>

**Produkt:** Null addieren, wie beim Produkt von Folgen:

$$
\frac{f(x+h)g(x+h) - f(x)g(x)}{h} = \frac{f(x+h) - f(x)}{h}\,g(x+h) + f(x)\,\frac{g(x+h) - g(x)}{h} \to f'(x)g(x) + f(x)g'(x) .
$$

Dabei braucht man $$g(x + h) \to g(x)$$, und das gilt, weil differenzierbare Funktionen stetig sind.

**Quotient:** Zuerst $$(1/g)'$$:

$$
\frac1h\left(\frac{1}{g(x+h)} - \frac{1}{g(x)}\right) = -\frac{g(x+h) - g(x)}{h}\cdot\frac{1}{g(x+h)g(x)} \to -\frac{g'(x)}{g(x)^2} .
$$

Dann Produktregel auf $$f \cdot (1/g)$$: $$\dfrac{f'}{g} - \dfrac{fg'}{g^2} = \dfrac{f'g - fg'}{g^2}$$.

</details>

**Satz (Kettenregel, B).** $$(f \circ g)'(x) = f'(g(x)) \cdot g'(x)$$: äußere Ableitung an der inneren Stelle mal innere Ableitung.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Der naive Beweis $$\dfrac{f(g(x+h)) - f(g(x))}{g(x+h) - g(x)}\cdot\dfrac{g(x+h) - g(x)}{h}$$ scheitert, wenn $$g(x + h) = g(x)$$ für kleine $$h$$ vorkommt. Deshalb mit einer Hilfsfunktion. Sei $$y_0 = g(x)$$ und

$$
\varphi(y) = \begin{cases} \dfrac{f(y) - f(y_0)}{y - y_0} & y \ne y_0 \\ f'(y_0) & y = y_0 \end{cases}
$$

$$\varphi$$ ist stetig in $$y_0$$, und für **alle** $$y$$ gilt $$f(y) - f(y_0) = \varphi(y)(y - y_0)$$. Also

$$
\frac{f(g(x+h)) - f(g(x))}{h} = \varphi(g(x+h))\cdot\frac{g(x+h) - g(x)}{h} \to \varphi(g(x))\,g'(x) = f'(g(x))\,g'(x),
$$

weil $$g$$ stetig in $$x$$ und $$\varphi$$ stetig in $$y_0$$ ist.

</details>

**Ableitung der Umkehrfunktion:** $$(f^{-1})'(y) = \dfrac{1}{f'(f^{-1}(y))}$$, falls $$f'(f^{-1}(y)) \ne 0$$. Herleitung: $$f(f^{-1}(y)) = y$$ mit der Kettenregel ableiten. Beispiel: $$\ln$$ ist die Umkehrung von $$\exp$$, also $$\ln'(y) = \dfrac{1}{e^{\ln y}} = \dfrac1y$$. Und $$\arctan'(y) = \dfrac{1}{1 + \tan^2(\arctan y)} = \dfrac{1}{1 + y^2}$$.

| $$f(x)$$ | $$f'(x)$$ | $$f(x)$$ | $$f'(x)$$ |
|---|---|---|---|
| $$x^a$$ | $$a x^{a-1}$$ | $$e^x$$ | $$e^x$$ |
| $$\ln x$$ | $$1/x$$ | $$a^x$$ | $$a^x \ln a$$ |
| $$\sin x$$ | $$\cos x$$ | $$\cos x$$ | $$-\sin x$$ |
| $$\tan x$$ | $$1 + \tan^2 x = 1/\cos^2 x$$ | $$\arctan x$$ | $$1/(1 + x^2)$$ |
| $$\arcsin x$$ | $$1/\sqrt{1 - x^2}$$ | $$\arccos x$$ | $$-1/\sqrt{1 - x^2}$$ |

**Beispiel 1 (Kette).** $$\dfrac{d}{dx}\sin(x^2) = \cos(x^2)\cdot 2x$$.

**Beispiel 2 (Trick $$e^{\ln}$$).** $$f(x) = x^x = e^{x \ln x}$$ für $$x > 0$$. Kettenregel und Produktregel:

$$
f'(x) = e^{x \ln x}\left(\ln x + x\cdot\frac1x\right) = x^x(\ln x + 1) .
$$

Falsch wäre $$x \cdot x^{x-1}$$ (Potenzregel, Exponent ist aber nicht konstant) und ebenso $$x^x \ln x$$ (Exponentialregel, Basis ist nicht konstant).

#### Mittelwertsatz

Ist $$f$$ in $$x_0$$ differenzierbar und hat dort ein lokales Extremum (im Inneren des Intervalls), dann ist $$f'(x_0) = 0$$ (**Fermat**). Beweis: Bei einem Maximum ist der Differenzenquotient für $$h > 0$$ höchstens $$0$$ und für $$h < 0$$ mindestens $$0$$, der Grenzwert muss also $$0$$ sein.

**Satz (Rolle, B).** Sei $$f$$ stetig auf $$[a, b]$$, differenzierbar auf $$(a, b)$$ und $$f(a) = f(b)$$. Dann gibt es ein $$\xi \in (a, b)$$ mit $$f'(\xi) = 0$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Nach dem Satz vom Maximum und Minimum nimmt $$f$$ auf $$[a, b]$$ Maximum und Minimum an. Liegen beide am Rand, ist $$f$$ wegen $$f(a) = f(b)$$ konstant, und jedes $$\xi$$ tut es. Sonst liegt eines im Inneren bei $$\xi$$, und nach Fermat ist $$f'(\xi) = 0$$.

</details>

**Satz (Mittelwertsatz, B).** Sei $$f$$ stetig auf $$[a, b]$$ und differenzierbar auf $$(a, b)$$. Dann gibt es ein $$\xi \in (a, b)$$ mit

$$
f'(\xi) = \frac{f(b) - f(a)}{b - a} .
$$

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Ziehe die Sekante ab: $$g(x) = f(x) - \dfrac{f(b) - f(a)}{b - a}(x - a)$$. Dann ist $$g(a) = f(a) = g(b)$$, und $$g$$ erfüllt die Voraussetzungen von Rolle. Also gibt es $$\xi$$ mit $$0 = g'(\xi) = f'(\xi) - \dfrac{f(b) - f(a)}{b - a}$$.

</details>

Anschaulich: Irgendwo ist die Tangente parallel zur Sekante. Wer im Schnitt 100 km/h fährt, fährt irgendwann genau 100 km/h.

**Folgerungen (B):**

- $$f' = 0$$ auf einem Intervall ⇒ $$f$$ konstant. (Sonst gäbe es $$a < b$$ mit $$f(a) \ne f(b)$$ und nach dem MWS ein $$\xi$$ mit $$f'(\xi) \ne 0$$.)
- $$f' > 0$$ auf einem Intervall ⇒ $$f$$ streng wachsend. ($$f(b) - f(a) = f'(\xi)(b - a) > 0$$.) Für $$f' \ge 0$$ monoton wachsend.
- **Schrankensatz:** $$\lvert f'\rvert \le L$$ ⇒ $$\lvert f(x) - f(y)\rvert \le L\lvert x - y\rvert$$.

**Beispiel.** $$\lvert \sin x - \sin y\rvert \le \lvert x - y\rvert$$ für alle $$x, y$$, weil $$\lvert \cos\rvert \le 1$$. Und $$e^x \ge 1 + x$$: Für $$x > 0$$ ist $$e^x - 1 = e^\xi x \ge x$$ mit $$\xi \in (0, x)$$; für $$x < 0$$ ist $$e^x - 1 = e^\xi x$$ mit $$e^\xi < 1$$ und $$x < 0$$, also auch $$\ge x$$.

Wichtig: $$f' > 0$$ ist hinreichend, aber nicht notwendig für strenge Monotonie. $$f(x) = x^3$$ ist streng wachsend, hat aber $$f'(0) = 0$$.
{: .notice--info}

#### Regel von L'Hospital

**Satz.** Seien $$f, g$$ differenzierbar nahe $$x_0$$, $$g' \ne 0$$ dort, und $$f(x), g(x) \to 0$$ (oder beide $$\to \pm\infty$$) für $$x \to x_0$$. Existiert $$\lim \dfrac{f'(x)}{g'(x)}$$, dann

$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)} .
$$

Das gilt auch für $$x_0 = \pm\infty$$ und einseitige Grenzwerte. Der Beweis verwendet den verallgemeinerten Mittelwertsatz $$\bigl(f(b) - f(a)\bigr)g'(\xi) = \bigl(g(b) - g(a)\bigr)f'(\xi)$$ (Rolle auf $$f(x)\bigl(g(b) - g(a)\bigr) - g(x)\bigl(f(b) - f(a)\bigr)$$).

**Beispiel 1 (zweimal anwenden).**

$$
\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} \overset{0/0}{=} \lim_{x \to 0} \frac{e^x - 1}{2x} \overset{0/0}{=} \lim_{x \to 0} \frac{e^x}{2} = \frac12 .
$$

Numerische Probe: bei $$x = 0.01$$ ist der Quotient $$0.5017$$.

**Beispiel 2 (Typ $$0 \cdot \infty$$ umformen).**

$$
\lim_{x \to 0^+} x \ln x = \lim_{x \to 0^+} \frac{\ln x}{1/x} \overset{\infty/\infty}{=} \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x) = 0 .
$$

Damit auch $$x^x = e^{x \ln x} \to e^0 = 1$$ für $$x \to 0^+$$ (Typ $$0^0$$). Die Typen $$1^\infty$$, $$0^0$$, $$\infty^0$$ immer über $$e^{\ln(\dots)}$$ auf $$0 \cdot \infty$$ zurückführen.

#### Kurvendiskussion

Rezept: Definitionsbereich, Nullstellen, Symmetrie, Verhalten am Rand, $$f'$$ (Monotonie, Kandidaten für Extrema), $$f''$$ (Krümmung, Wendepunkte).

- $$f'(x_0) = 0$$ und $$f''(x_0) < 0$$ ⇒ lokales Maximum; $$f''(x_0) > 0$$ ⇒ lokales Minimum. Bei $$f''(x_0) = 0$$ keine Aussage, dann Vorzeichenwechsel von $$f'$$ prüfen.
- $$f'' > 0$$: konvex (links gekrümmt), $$f'' < 0$$: konkav. Wendepunkt: Vorzeichenwechsel von $$f''$$.
- Globale Extrema auf $$[a, b]$$: kritische Punkte **und** Randpunkte vergleichen.

**Beispiel.** $$f(x) = x e^{-x}$$ auf $$\mathbb R$$.

- Nullstelle: $$x = 0$$. Rand: $$f(x) \to 0$$ für $$x \to \infty$$ (Exponentialfunktion schlägt Potenz), $$f(x) \to -\infty$$ für $$x \to -\infty$$.
- $$f'(x) = e^{-x} - xe^{-x} = (1 - x)e^{-x}$$. Nullstelle $$x = 1$$, $$f' > 0$$ für $$x < 1$$, $$f' < 0$$ für $$x > 1$$. Also globales Maximum bei $$x = 1$$ mit $$f(1) = 1/e \approx 0.368$$.
- $$f''(x) = -e^{-x} - (1 - x)e^{-x} = (x - 2)e^{-x}$$. $$f''(1) = -1/e < 0$$ bestätigt das Maximum. Wendepunkt bei $$x = 2$$, $$f(2) = 2/e^2 \approx 0.271$$; konkav auf $$(-\infty, 2)$$, konvex auf $$(2, \infty)$$.

#### Newton-Verfahren

Idee: $$f$$ durch die Tangente in $$x_n$$ ersetzen und deren Nullstelle als nächste Näherung nehmen:

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} .
$$

Ist $$\xi$$ eine einfache Nullstelle ($$f'(\xi) \ne 0$$), $$f$$ zweimal stetig differenzierbar und $$x_0$$ nahe genug an $$\xi$$, dann konvergiert das Verfahren **quadratisch**: $$\lvert x_{n+1} - \xi\rvert \le C\lvert x_n - \xi\rvert^2$$. Die Zahl der richtigen Stellen verdoppelt sich etwa pro Schritt.

**Beispiel.** Dieselbe Gleichung wie bei der Bisektion, $$f(x) = x^3 - x - 1$$, $$f'(x) = 3x^2 - 1$$, Start $$x_0 = 1.5$$:

| $$n$$ | $$x_n$$ | $$f(x_n)$$ |
|---|---|---|
| 0 | $$1.5$$ | $$8.8 \cdot 10^{-1}$$ |
| 1 | $$1.347826$$ | $$1.0 \cdot 10^{-1}$$ |
| 2 | $$1.325200$$ | $$2.1 \cdot 10^{-3}$$ |
| 3 | $$1.324718174$$ | $$9.2 \cdot 10^{-7}$$ |
| 4 | $$1.32471795724$$ | $$1.9 \cdot 10^{-13}$$ |

Vier Schritte statt zwanzig bei der Bisektion für $$10^{-6}$$. Dafür ist Newton nicht garantiert: Bei schlechtem Startwert oder $$f'(x_n) \approx 0$$ kann es divergieren oder springen. In der Praxis kombiniert man oft beides (erst Bisektion, dann Newton).

**Stolperfallen**

- Kettenregel bei verschachtelten Funktionen vergessen: $$(e^{3x})' = 3e^{3x}$$.
- L'Hospital nur bei $$0/0$$ oder $$\infty/\infty$$. $$\lim_{x\to0} \frac{\cos x}{x}$$ ist **kein** solcher Fall.
- L'Hospital leitet Zähler und Nenner **getrennt** ab, nicht mit der Quotientenregel.
- $$f'(x_0) = 0$$ heißt nicht Extremum: $$x^3$$ in $$0$$ ist ein Sattelpunkt.
- Bei globalen Extrema auf abgeschlossenen Intervallen die Randpunkte nicht vergessen.

### 6 Taylorreihen

#### Taylorpolynom

Die Tangente ist die beste Näherung ersten Grades. Das **Taylorpolynom** vom Grad $$n$$ um $$x_0$$ ist das Polynom, das in $$x_0$$ mit $$f$$ in Wert und den ersten $$n$$ Ableitungen übereinstimmt:

$$
T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}(x - x_0)^k = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2}(x - x_0)^2 + \dots
$$

Warum $$k!$$: Die $$k$$-te Ableitung von $$(x - x_0)^k$$ ist $$k!$$, der Faktor gleicht das aus, sodass $$T_n^{(k)}(x_0) = f^{(k)}(x_0)$$.

**Satz (Taylor mit Lagrange-Restglied, B).** Ist $$f$$ auf einem Intervall um $$x_0$$ $$(n+1)$$-mal differenzierbar, dann gibt es zu jedem $$x$$ ein $$\xi$$ zwischen $$x_0$$ und $$x$$ mit

$$
f(x) = T_n(x) + R_n(x), \qquad R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1} .
$$

Für $$n = 0$$ ist das genau der Mittelwertsatz.

<details class="beweis" markdown="1">
<summary>Beweis (mit Rolle)</summary>

Halte $$x \ne x_0$$ fest und wähle die Konstante $$M$$ so, dass $$f(x) = T_n(x) + M(x - x_0)^{n+1}$$. Zu zeigen ist $$M = f^{(n+1)}(\xi)/(n+1)!$$. Betrachte

$$
g(t) = f(t) - T_n(t) - M(t - x_0)^{n+1} .
$$

Dann gilt $$g(x) = 0$$ (Wahl von $$M$$) und $$g(x_0) = g'(x_0) = \dots = g^{(n)}(x_0) = 0$$, weil $$T_n$$ in $$x_0$$ dieselben Ableitungen bis Ordnung $$n$$ hat wie $$f$$ und $$(t - x_0)^{n+1}$$ dort bis Ordnung $$n$$ verschwindet.

Rolle auf $$g$$ zwischen $$x_0$$ und $$x$$ gibt $$\xi_1$$ mit $$g'(\xi_1) = 0$$. Rolle auf $$g'$$ zwischen $$x_0$$ und $$\xi_1$$ gibt $$\xi_2$$ mit $$g''(\xi_2) = 0$$. Nach $$n + 1$$ Schritten hat man $$\xi = \xi_{n+1}$$ zwischen $$x_0$$ und $$x$$ mit $$g^{(n+1)}(\xi) = 0$$. Wegen $$T_n^{(n+1)} = 0$$ ist

$$
0 = g^{(n+1)}(\xi) = f^{(n+1)}(\xi) - M(n+1)! ,
$$

also $$M = f^{(n+1)}(\xi)/(n+1)!$$.

</details>

Für die Fehlerschranke schätzt man $$\lvert f^{(n+1)}\rvert$$ zwischen $$x_0$$ und $$x$$ durch eine Konstante $$K$$ ab:

$$
\lvert f(x) - T_n(x)\rvert \le \frac{K}{(n+1)!}\lvert x - x_0\rvert^{n+1} .
$$

#### Standardreihen

Konvergiert $$R_n(x) \to 0$$, wird aus dem Taylorpolynom die **Taylorreihe** $$f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$$. Um $$x_0 = 0$$:

| Funktion | Reihe | gültig für |
|---|---|---|
| $$e^x$$ | $$1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$$ | alle $$x$$ |
| $$\sin x$$ | $$x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$$ | alle $$x$$ |
| $$\cos x$$ | $$1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$$ | alle $$x$$ |
| $$\frac{1}{1 - x}$$ | $$1 + x + x^2 + x^3 + \dots$$ | $$\lvert x\rvert < 1$$ |
| $$\ln(1 + x)$$ | $$x - \frac{x^2}{2} + \frac{x^3}{3} - \dots$$ | $$-1 < x \le 1$$ |
| $$\arctan x$$ | $$x - \frac{x^3}{3} + \frac{x^5}{5} - \dots$$ | $$\lvert x\rvert \le 1$$ |
| $$(1 + x)^a$$ | $$1 + ax + \frac{a(a-1)}{2}x^2 + \dots$$ | $$\lvert x\rvert < 1$$ |

**Herleitung für $$e^x$$ (B).** Alle Ableitungen sind $$e^x$$, in $$0$$ also $$1$$. Das Restglied ist $$R_n(x) = \dfrac{e^\xi}{(n+1)!}x^{n+1}$$ mit $$\lvert e^\xi\rvert \le e^{\lvert x\rvert}$$, und $$\dfrac{\lvert x\rvert^{n+1}}{(n+1)!} \to 0$$ für jedes feste $$x$$ (Glieder der konvergenten Reihe aus Kapitel 3). Also $$R_n(x) \to 0$$.

Die Reihen für $$\ln(1 + x)$$ und $$\arctan x$$ bekommt man ohne Ableitungsrechnung: die geometrische Reihe für $$\frac{1}{1 + t}$$ bzw. $$\frac{1}{1 + t^2}$$ gliedweise von $$0$$ bis $$x$$ integrieren (Kapitel 7). Potenzreihen darf man innerhalb des Konvergenzradius gliedweise ableiten und integrieren.
{: .notice--info}

Nicht jede glatte Funktion ist gleich ihrer Taylorreihe. Das Standardbeispiel $$f(x) = e^{-1/x^2}$$, $$f(0) = 0$$ hat in $$0$$ lauter Ableitungen $$0$$, die Taylorreihe ist also die Nullfunktion, aber $$f(x) > 0$$ für $$x \ne 0$$.
{: .notice--warning}

#### Näherung mit Fehlerschranke

**Beispiel 1: $$\sin(0.5)$$ mit $$T_3$$.** $$T_3(x) = x - x^3/6$$, also $$T_3(0.5) = 0.5 - 0.125/6 = 0.4791\overline{6}$$. Weil der $$x^4$$-Koeffizient der Sinusreihe $$0$$ ist, gilt $$T_3 = T_4$$, und man darf das Restglied $$R_4$$ nehmen: $$\lvert \sin^{(5)}\rvert = \lvert\cos\rvert \le 1$$, also

$$
\lvert \sin(0.5) - T_3(0.5)\rvert \le \frac{0.5^5}{5!} = \frac{0.03125}{120} \approx 2.60 \cdot 10^{-4} .
$$

Tatsächlich: $$\sin(0.5) = 0.479426$$, Fehler $$2.59 \cdot 10^{-4}$$. Die Schranke ist hier fast scharf.

**Beispiel 2: Wie viele Glieder für $$e$$ auf $$10^{-6}$$?** $$e = T_n(1) + R_n(1)$$ mit $$R_n(1) = \dfrac{e^\xi}{(n+1)!}$$, $$0 < \xi < 1$$, also $$R_n(1) < \dfrac{3}{(n+1)!}$$. Gesucht ist $$(n+1)! > 3 \cdot 10^6$$: $$9! = 362880$$ reicht nicht, $$10! = 3628800$$ reicht. Also $$n = 9$$, d. h. die Glieder $$k = 0, \dots, 9$$.

**Beispiel 3: $$\sqrt{1.1}$$ ohne Taschenrechner.** $$f(x) = \sqrt{1 + x}$$, $$f'(x) = \tfrac12(1 + x)^{-1/2}$$, $$f''(x) = -\tfrac14(1 + x)^{-3/2}$$, $$f'''(x) = \tfrac38(1 + x)^{-5/2}$$. In $$0$$: $$T_2(x) = 1 + \tfrac x2 - \tfrac{x^2}{8}$$, also $$T_2(0.1) = 1 + 0.05 - 0.00125 = 1.04875$$. Für $$\xi \in (0, 0.1)$$ ist $$f'''(\xi) \le \tfrac38$$, also

$$
\lvert R_2(0.1)\rvert \le \frac{3/8}{3!}\cdot 0.1^3 = 6.25 \cdot 10^{-5} .
$$

Tatsächlich $$\sqrt{1.1} = 1.0488088$$, Fehler $$5.9 \cdot 10^{-5}$$. Weil $$R_2 > 0$$, liegt der echte Wert sogar sicher über $$1.04875$$.

**Beispiel 4: Grenzwerte mit Taylor.** Statt L'Hospital die Reihen einsetzen:

$$
\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \lim_{x \to 0} \frac{x^2/2 - x^4/24 + \dots}{x^2} = \frac12, \qquad \lim_{x \to 0} \frac{x - \sin x}{x^3} = \lim_{x \to 0} \frac{x^3/6 - \dots}{x^3} = \frac16 .
$$

Das ist auch der Grund für die Auslöschung aus Kapitel 1: $$1 - \cos x \approx x^2/2$$ ist für kleine $$x$$ viel kleiner als die Rundungsgenauigkeit von $$\cos x \approx 1$$.

#### Taylor und Extrema

Ist $$f'(x_0) = \dots = f^{(n-1)}(x_0) = 0$$ und $$f^{(n)}(x_0) \ne 0$$, dann gilt: $$n$$ gerade ⇒ Extremum (Minimum bei $$f^{(n)}(x_0) > 0$$), $$n$$ ungerade ⇒ kein Extremum. Beispiel: $$x^4$$ hat in $$0$$ ein Minimum ($$n = 4$$), $$x^3$$ keines ($$n = 3$$). Das löst den Fall „$$f''(x_0) = 0$$“ aus Kapitel 5.

**Stolperfallen**

- Das $$\xi$$ im Restglied ist unbekannt. Man schätzt das **Maximum** von $$\lvert f^{(n+1)}\rvert$$ auf dem ganzen Intervall zwischen $$x_0$$ und $$x$$ ab, nicht nur den Wert in $$x_0$$.
- $$(n+1)!$$ und $$(x - x_0)^{n+1}$$ im Restglied, nicht $$n!$$ und $$(x - x_0)^n$$.
- Entwicklungspunkt beachten: Um $$x_0 = 1$$ heißt es $$(x - 1)^k$$, nicht $$x^k$$.
- Die Reihe für $$\ln(1 + x)$$ konvergiert nur für $$-1 < x \le 1$$. Für $$\ln 3$$ taugt sie direkt nicht.

### 7 Integralrechnung

#### Das Riemann-Integral

Sei $$f: [a, b] \to \mathbb R$$ beschränkt und $$Z = \{a = x_0 < x_1 < \dots < x_n = b\}$$ eine **Zerlegung**. Mit $$m_i = \inf f$$ und $$M_i = \sup f$$ auf $$[x_{i-1}, x_i]$$ heißen

$$
U(f, Z) = \sum_{i=1}^{n} m_i (x_i - x_{i-1}) \quad\text{(Untersumme)}, \qquad O(f, Z) = \sum_{i=1}^{n} M_i (x_i - x_{i-1}) \quad\text{(Obersumme)} .
$$

$$f$$ heißt **Riemann-integrierbar**, wenn das Supremum aller Untersummen gleich dem Infimum aller Obersummen ist; dieser gemeinsame Wert ist $$\int_a^b f(x)\,dx$$. Gleichwertig: Für jede Folge von Zerlegungen mit Feinheit $$\to 0$$ und beliebigen Zwischenpunkten $$\xi_i$$ konvergieren die **Riemann-Summen** $$\sum f(\xi_i)(x_i - x_{i-1})$$ gegen das Integral.

**Integrierbar sind** alle stetigen Funktionen auf $$[a, b]$$, alle monotonen Funktionen und alle beschränkten Funktionen mit endlich vielen Sprungstellen. **Nicht integrierbar** ist die Dirichlet-Funktion ($$1$$ auf $$\mathbb Q$$, $$0$$ sonst): Jede Untersumme ist $$0$$, jede Obersumme $$1$$.

**Beispiel (Obersumme).** $$f(x) = x^2$$ auf $$[0, 1]$$, äquidistant mit $$x_i = i/n$$. $$f$$ ist wachsend, also $$M_i = (i/n)^2$$:

$$
O_n = \sum_{i=1}^{n} \frac{i^2}{n^2}\cdot\frac1n = \frac{1}{n^3}\cdot\frac{n(n+1)(2n+1)}{6} = \frac{(n+1)(2n+1)}{6n^2} \to \frac{2}{6} = \frac13 .
$$

Werte: $$O_4 = 0.469$$, $$O_{10} = 0.385$$, $$O_{100} = 0.338$$. Die Untersumme geht genauso gegen $$1/3$$.

**Eigenschaften:** Linearität, Monotonie ($$f \le g \Rightarrow \int f \le \int g$$), $$\left\lvert \int f \right\rvert \le \int \lvert f\rvert$$, Additivität $$\int_a^b + \int_b^c = \int_a^c$$, Konvention $$\int_b^a = -\int_a^b$$.

**Mittelwertsatz der Integralrechnung.** Ist $$f$$ stetig auf $$[a, b]$$, gibt es $$\xi \in [a, b]$$ mit $$\int_a^b f(x)\,dx = f(\xi)(b - a)$$. Beweis: Mit $$m = \min f$$, $$M = \max f$$ gilt $$m(b - a) \le \int_a^b f \le M(b - a)$$; der Zwischenwertsatz liefert ein $$\xi$$, an dem $$f$$ den Wert $$\frac{1}{b-a}\int_a^b f$$ annimmt.

#### Hauptsatz der Differential- und Integralrechnung

$$F$$ heißt **Stammfunktion** von $$f$$, wenn $$F' = f$$. Zwei Stammfunktionen unterscheiden sich auf einem Intervall nur um eine Konstante (Folgerung aus dem Mittelwertsatz: $$(F - G)' = 0$$).

**Satz (Hauptsatz, B).** Sei $$f: [a, b] \to \mathbb R$$ stetig.

1. Die Funktion $$F(x) = \int_a^x f(t)\,dt$$ ist differenzierbar mit $$F'(x) = f(x)$$.
2. Für jede Stammfunktion $$G$$ von $$f$$ gilt $$\int_a^b f(x)\,dx = G(b) - G(a) =: \bigl[G(x)\bigr]_a^b$$.

<details class="beweis" markdown="1">
<summary>Beweis</summary>

**Teil 1.** Für $$h \ne 0$$ ist nach Additivität und Mittelwertsatz der Integralrechnung

$$
\frac{F(x + h) - F(x)}{h} = \frac1h \int_x^{x+h} f(t)\,dt = f(\xi_h)
$$

mit einem $$\xi_h$$ zwischen $$x$$ und $$x + h$$. Für $$h \to 0$$ gilt $$\xi_h \to x$$, und wegen der Stetigkeit von $$f$$ folgt $$f(\xi_h) \to f(x)$$. Also $$F'(x) = f(x)$$.

**Teil 2.** $$F$$ aus Teil 1 und $$G$$ sind beide Stammfunktionen, also $$G = F + c$$. Dann

$$
G(b) - G(a) = F(b) - F(a) = \int_a^b f(t)\,dt - 0 .
$$

</details>

Der Hauptsatz verbindet die beiden Hälften der Analysis: Integrieren ist (bis auf Konstanten) die Umkehrung des Differenzierens. Ein Integral rechnet man deshalb aus, indem man eine Stammfunktion sucht. Mit der Kettenregel: $$\dfrac{d}{dx}\int_a^{g(x)} f(t)\,dt = f(g(x))\,g'(x)$$.
{: .notice--info}

#### Partielle Integration

**Satz (B).** Aus der Produktregel $$(uv)' = u'v + uv'$$ folgt durch Integrieren

$$
\int_a^b u'(x)v(x)\,dx = \bigl[u(x)v(x)\bigr]_a^b - \int_a^b u(x)v'(x)\,dx .
$$

Faustregel: $$v$$ ist der Teil, der durch Ableiten einfacher wird (Polynome, $$\ln x$$), $$u'$$ der Teil, den man leicht integrieren kann ($$e^x$$, $$\sin$$, $$\cos$$).

**Beispiel 1.** $$\int x e^x\,dx$$ mit $$v = x$$, $$u' = e^x$$: $$= xe^x - \int e^x\,dx = (x - 1)e^x + C$$.

**Beispiel 2.** $$\int \ln x\,dx = \int 1 \cdot \ln x\,dx$$ mit $$u' = 1$$, $$v = \ln x$$: $$= x\ln x - \int x \cdot \frac1x\,dx = x\ln x - x + C$$.

**Beispiel 3 (bestimmt).** $$\int_0^\pi x\sin x\,dx = \bigl[-x\cos x\bigr]_0^\pi + \int_0^\pi \cos x\,dx = \pi + \bigl[\sin x\bigr]_0^\pi = \pi$$.

#### Substitution

**Satz.** Aus der Kettenregel folgt

$$
\int_a^b f(g(x))\,g'(x)\,dx = \int_{g(a)}^{g(b)} f(u)\,du .
$$

Praktisch: $$u = g(x)$$, $$du = g'(x)\,dx$$, und **die Grenzen mitsubstituieren**.

**Beispiel 1.** $$\int_0^{\sqrt\pi} x\sin(x^2)\,dx$$. Mit $$u = x^2$$, $$du = 2x\,dx$$, Grenzen $$0 \mapsto 0$$, $$\sqrt\pi \mapsto \pi$$:

$$
= \frac12\int_0^\pi \sin u\,du = \frac12\bigl[-\cos u\bigr]_0^\pi = \frac12(1 + 1) = 1 .
$$

**Beispiel 2.** Allgemein $$\int \dfrac{g'(x)}{g(x)}\,dx = \ln\lvert g(x)\rvert + C$$, etwa $$\int_0^1 \dfrac{2x}{1 + x^2}\,dx = \bigl[\ln(1 + x^2)\bigr]_0^1 = \ln 2$$.

#### Partialbruchzerlegung

Rationale Funktionen $$p/q$$ integriert man so:

1. Ist $$\deg p \ge \deg q$$: zuerst Polynomdivision.
2. Nenner in Linearfaktoren (und unzerlegbare quadratische Faktoren) zerlegen.
3. Ansatz: einfache Nullstelle $$a$$ ⇒ $$\frac{A}{x - a}$$; doppelte ⇒ $$\frac{A}{x - a} + \frac{B}{(x - a)^2}$$; Faktor $$x^2 + px + q$$ ohne reelle Nullstelle ⇒ $$\frac{Bx + C}{x^2 + px + q}$$.
4. Koeffizienten durch Einsetzen der Nullstellen oder Koeffizientenvergleich bestimmen.
5. Integrieren: $$\int \frac{dx}{x - a} = \ln\lvert x - a\rvert$$, $$\int \frac{dx}{(x - a)^2} = -\frac{1}{x - a}$$, $$\int \frac{dx}{1 + x^2} = \arctan x$$.

**Beispiel.** $$\displaystyle\int_2^3 \frac{x + 5}{x^2 + x - 2}\,dx$$. Nenner $$x^2 + x - 2 = (x - 1)(x + 2)$$. Ansatz

$$
\frac{x + 5}{(x - 1)(x + 2)} = \frac{A}{x - 1} + \frac{B}{x + 2} \quad\Rightarrow\quad x + 5 = A(x + 2) + B(x - 1) .
$$

$$x = 1$$: $$6 = 3A$$, $$A = 2$$. $$x = -2$$: $$3 = -3B$$, $$B = -1$$. Also

$$
\int_2^3 \left(\frac{2}{x - 1} - \frac{1}{x + 2}\right)dx = \Bigl[2\ln\lvert x - 1\rvert - \ln\lvert x + 2\rvert\Bigr]_2^3 = (2\ln 2 - \ln 5) - (0 - \ln 4) = \ln\frac{16}{5} \approx 1.1632 .
$$

#### Uneigentliche Integrale

Bei unbeschränktem Intervall oder unbeschränkter Funktion definiert man das Integral als Grenzwert:

$$
\int_a^\infty f(x)\,dx = \lim_{R \to \infty} \int_a^R f(x)\,dx, \qquad \int_0^1 f(x)\,dx = \lim_{\varepsilon \to 0^+} \int_\varepsilon^1 f(x)\,dx \ (f \text{ unbeschränkt bei } 0) .
$$

**Satz (B).** $$\displaystyle\int_1^\infty \frac{dx}{x^\alpha}$$ konvergiert genau für $$\alpha > 1$$ (Wert $$\frac{1}{\alpha - 1}$$). $$\displaystyle\int_0^1 \frac{dx}{x^\alpha}$$ konvergiert genau für $$\alpha < 1$$ (Wert $$\frac{1}{1 - \alpha}$$).

<details class="beweis" markdown="1">
<summary>Beweis</summary>

Für $$\alpha \ne 1$$: $$\int_1^R x^{-\alpha}\,dx = \dfrac{R^{1-\alpha} - 1}{1 - \alpha}$$. Für $$\alpha > 1$$ geht $$R^{1-\alpha} \to 0$$, Grenzwert $$\frac{1}{\alpha - 1}$$; für $$\alpha < 1$$ geht $$R^{1-\alpha} \to \infty$$. Für $$\alpha = 1$$: $$\int_1^R \frac{dx}{x} = \ln R \to \infty$$.

Bei $$0$$ genauso: $$\int_\varepsilon^1 x^{-\alpha}\,dx = \dfrac{1 - \varepsilon^{1-\alpha}}{1 - \alpha}$$, und $$\varepsilon^{1-\alpha} \to 0$$ genau für $$\alpha < 1$$; für $$\alpha = 1$$ ist es $$-\ln\varepsilon \to \infty$$.

</details>

**Beispiele.** $$\int_0^1 \frac{dx}{\sqrt x} = \bigl[2\sqrt x\bigr]_0^1 = 2$$. $$\int_0^\infty e^{-x}\,dx = \lim_{R\to\infty}(1 - e^{-R}) = 1$$. Vergleichskriterium wie bei Reihen: $$0 \le f \le g$$ und $$\int g$$ konvergent ⇒ $$\int f$$ konvergent.

**Integralkriterium.** Ist $$f \ge 0$$ monoton fallend, dann konvergiert $$\sum_{k=1}^\infty f(k)$$ genau dann, wenn $$\int_1^\infty f(x)\,dx$$ konvergiert. Damit ist das Ergebnis „$$\sum 1/k^\alpha$$ konvergiert genau für $$\alpha > 1$$“ aus Kapitel 3 bewiesen.

#### Numerische Integration

Teile $$[a, b]$$ in $$n$$ gleiche Teile der Breite $$h = (b - a)/n$$, $$x_i = a + ih$$.

**Trapezregel:** Auf jedem Teilintervall $$f$$ durch die Sehne ersetzen.

$$
T_n = h\left(\frac{f(x_0)}{2} + f(x_1) + \dots + f(x_{n-1}) + \frac{f(x_n)}{2}\right), \qquad \lvert E\rvert \le \frac{(b - a)h^2}{12}\max\lvert f''\rvert .
$$

**Simpsonregel** ($$n$$ gerade): Auf je zwei Teilintervallen durch eine Parabel ersetzen.

$$
S_n = \frac h3\Bigl(f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \dots + 4f(x_{n-1}) + f(x_n)\Bigr), \qquad \lvert E\rvert \le \frac{(b - a)h^4}{180}\max\lvert f^{(4)}\rvert .
$$

Halbiert man $$h$$, wird der Trapezfehler etwa viermal, der Simpsonfehler etwa sechzehnmal kleiner. Simpson ist für Polynome bis Grad 3 exakt.

**Beispiel.** $$\int_0^1 \frac{dx}{1 + x^2} = \arctan 1 = \frac\pi4 \approx 0.785398$$ mit $$n = 4$$, $$h = 0.25$$:

| Verfahren | Ergebnis | tatsächlicher Fehler | Schranke |
|---|---|---|---|
| Trapez $$T_4$$ | $$0.782794$$ | $$2.6 \cdot 10^{-3}$$ | $$\frac{1 \cdot 0.0625}{12}\cdot 2 \approx 1.0 \cdot 10^{-2}$$ |
| Simpson $$S_4$$ | $$0.785392$$ | $$6.0 \cdot 10^{-6}$$ | $$\frac{1 \cdot 0.0039}{180}\cdot 24 \approx 5.2 \cdot 10^{-4}$$ |

Die Schranken verwenden $$\max\lvert f''\rvert = 2$$ und $$\max\lvert f^{(4)}\rvert = 24$$ auf $$[0, 1]$$ (beide bei $$x = 0$$). Die echten Fehler sind deutlich kleiner als die Schranken, das ist normal.

**Stolperfallen**

- Bei der Substitution die Grenzen umrechnen oder am Ende zurücksubstituieren, nicht beides mischen.
- $$\int \frac{1}{x}\,dx = \ln\lvert x\rvert$$, mit Betrag.
- Integral über eine Polstelle hinweg: $$\int_{-1}^1 \frac{dx}{x^2}$$ ist **nicht** $$\bigl[-1/x\bigr]_{-1}^1 = -2$$ (ein positiver Integrand kann kein negatives Integral haben). Das Integral divergiert.
- Das Integral ist die **orientierte** Fläche: $$\int_0^{2\pi}\sin x\,dx = 0$$. Für die geometrische Fläche $$\int \lvert f\rvert$$ nehmen.
- Bei Partialbrüchen zuerst prüfen, ob Polynomdivision nötig ist.

### 8 Mehrdimensionale Analysis

**Stoff laut Aufgabensammlung (Aufgaben 314–407):** metrische Räume, mehrdimensionale Analysis, Extrema. Ob Lagrange-Multiplikatoren vorkommen, zeigen die angesagten Aufgaben. Dieses Kapitel deckt den üblichen Grundumfang ab.
{: .notice--warning}

#### Partielle Ableitungen und Gradient

Für $$f: \mathbb R^n \to \mathbb R$$ ist die **partielle Ableitung** nach $$x_i$$ die gewöhnliche Ableitung, wenn man alle anderen Variablen als Konstanten behandelt:

$$
\frac{\partial f}{\partial x_i}(x) = \lim_{h \to 0} \frac{f(x + h e_i) - f(x)}{h} .
$$

Der **Gradient** ist der Vektor aller partiellen Ableitungen, $$\nabla f = \left(\frac{\partial f}{\partial x_1}, \dots, \frac{\partial f}{\partial x_n}\right)$$.

**Beispiel.** $$f(x, y) = x^2 y + \sin(xy)$$:

$$
f_x = 2xy + y\cos(xy), \qquad f_y = x^2 + x\cos(xy), \qquad \nabla f(1, 0) = (0 + 0,\ 1 + 1) = (0, 2) .
$$

**Totale Differenzierbarkeit.** $$f$$ ist in $$x_0$$ differenzierbar, wenn $$f(x_0 + h) = f(x_0) + \nabla f(x_0) \cdot h + r(h)$$ mit $$r(h)/\lVert h\rVert \to 0$$. Das ist dieselbe Idee wie in Kapitel 5: beste lineare Näherung, hier eine Tangentialebene. Sind alle partiellen Ableitungen **stetig**, ist $$f$$ differenzierbar. Die bloße Existenz der partiellen Ableitungen reicht nicht, nicht einmal für Stetigkeit.

**Richtungsableitung.** Für einen Einheitsvektor $$v$$ ist $$\partial_v f(x_0) = \nabla f(x_0) \cdot v$$. Wegen $$\nabla f \cdot v = \lVert \nabla f\rVert \cos\theta$$ gilt: **Der Gradient zeigt in Richtung des steilsten Anstiegs**, seine Länge ist die Steigung in diese Richtung. Senkrecht zum Gradienten ändert sich $$f$$ nicht (Höhenlinien). Darauf beruht das Gradientenverfahren der Optimierung und des maschinellen Lernens: $$x_{k+1} = x_k - \eta \nabla f(x_k)$$.

**Satz von Schwarz.** Sind die zweiten partiellen Ableitungen stetig, dann ist die Reihenfolge egal: $$f_{xy} = f_{yx}$$.

**Kettenregel.** Für $$g(t) = f(x(t), y(t))$$ gilt $$g'(t) = f_x\,x'(t) + f_y\,y'(t) = \nabla f \cdot (x'(t), y'(t))$$.

#### Lokale Extrema

**Notwendig:** Hat $$f$$ in einem inneren Punkt $$x_0$$ ein lokales Extremum, ist $$\nabla f(x_0) = 0$$ (kritischer Punkt). Grund: Jede Einschränkung auf eine Koordinatenrichtung hat dort ein Extremum, Fermat aus Kapitel 5.

**Hinreichend:** Mit der **Hesse-Matrix** $$H = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{yx} & f_{yy} \end{pmatrix}$$ im kritischen Punkt:

| $$H$$ | Kriterium (für $$2 \times 2$$) | Ergebnis |
|---|---|---|
| positiv definit | $$\det H > 0$$ und $$f_{xx} > 0$$ | lokales Minimum |
| negativ definit | $$\det H > 0$$ und $$f_{xx} < 0$$ | lokales Maximum |
| indefinit | $$\det H < 0$$ | Sattelpunkt |
| semidefinit | $$\det H = 0$$ | keine Aussage |

Allgemein: alle Eigenwerte positiv ⇒ Minimum, alle negativ ⇒ Maximum, gemischte Vorzeichen ⇒ Sattelpunkt. Das ist das Analogon zu $$f'' > 0$$ bzw. $$f'' < 0$$ und folgt aus der Taylorentwicklung zweiter Ordnung $$f(x_0 + h) \approx f(x_0) + \tfrac12 h^T H h$$.

**Beispiel.** $$f(x, y) = x^3 - 3x + y^2$$.

- $$\nabla f = (3x^2 - 3,\ 2y) = 0$$ ⇒ $$x = \pm 1$$, $$y = 0$$. Kritische Punkte $$(1, 0)$$ und $$(-1, 0)$$.
- $$H = \begin{pmatrix} 6x & 0 \\ 0 & 2 \end{pmatrix}$$.
- $$(1, 0)$$: $$H = \operatorname{diag}(6, 2)$$, $$\det H = 12 > 0$$, $$f_{xx} = 6 > 0$$: lokales Minimum, $$f(1, 0) = -2$$.
- $$(-1, 0)$$: $$H = \operatorname{diag}(-6, 2)$$, $$\det H = -12 < 0$$: Sattelpunkt.

Es gibt kein globales Minimum: $$f(x, 0) = x^3 - 3x \to -\infty$$ für $$x \to -\infty$$.

#### Extrema unter Nebenbedingungen (Lagrange)

Gesucht sind Extrema von $$f(x, y)$$ unter der Nebenbedingung $$g(x, y) = 0$$. In einem Extremum (mit $$\nabla g \ne 0$$) sind die Gradienten parallel: Es gibt ein $$\lambda$$ mit

$$
\nabla f = \lambda \nabla g, \qquad g = 0 .
$$

Anschaulich: Wäre $$\nabla f$$ nicht senkrecht zur Kurve $$g = 0$$, könnte man entlang der Kurve noch höher oder tiefer gehen. $$\nabla g$$ steht immer senkrecht auf der Kurve.

**Beispiel.** Maximiere $$f(x, y) = x + y$$ auf dem Einheitskreis $$g(x, y) = x^2 + y^2 - 1 = 0$$.

$$
\begin{aligned}
1 &= 2\lambda x\\
1 &= 2\lambda y\\
x^2 + y^2 &= 1
\end{aligned}
$$

Aus den ersten beiden Gleichungen $$x = y = \frac{1}{2\lambda}$$, eingesetzt $$2x^2 = 1$$, also $$x = y = \pm\frac{1}{\sqrt2}$$. Maximum $$f = \sqrt2$$ bei $$\left(\frac{1}{\sqrt2}, \frac{1}{\sqrt2}\right)$$, Minimum $$-\sqrt2$$ beim Gegenpunkt. (Der Kreis ist abgeschlossen und beschränkt, also werden Maximum und Minimum angenommen, und sie müssen unter den Kandidaten sein.)

**Stolperfallen**

- Beim partiellen Ableiten die anderen Variablen wirklich als Konstanten behandeln: $$\frac{\partial}{\partial x}(x^2 y) = 2xy$$, nicht $$2xy + x^2$$.
- $$\det H > 0$$ allein reicht nicht; erst das Vorzeichen von $$f_{xx}$$ unterscheidet Minimum und Maximum.
- $$\det H = 0$$ heißt „keine Aussage“, nicht „Sattelpunkt“.
- Bei Lagrange erhält man nur Kandidaten. Welche Maxima und Minima sind, durch Einsetzen und Vergleichen entscheiden.

### 9 Differentialgleichungen

**Stoff laut Aufgabensammlung (Aufgaben 408–430).** Welche Typen genau drankommen, zeigen die angesagten Aufgaben.
{: .notice--warning}

Eine **gewöhnliche Differentialgleichung** (DGL) verknüpft eine gesuchte Funktion $$y(x)$$ mit ihren Ableitungen. Ein **Anfangswertproblem** (AWP) gibt zusätzlich $$y(x_0) = y_0$$ vor (bei 2. Ordnung auch $$y'(x_0)$$). Unter milden Voraussetzungen (etwa $$f$$ stetig differenzierbar in $$y' = f(x, y)$$) hat ein AWP genau eine Lösung (Satz von Picard–Lindelöf, hier ohne Beweis).

#### Trennung der Variablen

Für $$y' = g(x)\,h(y)$$: Variablen trennen und beide Seiten integrieren.

$$
\frac{dy}{h(y)} = g(x)\,dx \quad\Rightarrow\quad \int \frac{dy}{h(y)} = \int g(x)\,dx .
$$

Nullstellen von $$h$$ liefern zusätzlich konstante Lösungen $$y \equiv c$$ mit $$h(c) = 0$$.

**Beispiel.** $$y' = xy$$, $$y(0) = 2$$. Für $$y \ne 0$$: $$\int \frac{dy}{y} = \int x\,dx$$, also $$\ln\lvert y\rvert = \frac{x^2}{2} + c$$ und $$y = Ce^{x^2/2}$$ (die Lösung $$y \equiv 0$$ ist mit $$C = 0$$ dabei). Anfangswert: $$C = 2$$, also $$y(x) = 2e^{x^2/2}$$. Probe: $$y' = 2xe^{x^2/2} = xy$$. Numerisch $$y(1) = 2\sqrt e \approx 3.2974$$, bestätigt mit einem Einschrittverfahren.

**Exponentielles Wachstum** ist der einfachste Fall: $$y' = ky$$ hat die Lösungen $$y = y_0 e^{kx}$$. Für $$k < 0$$ ist das radioaktiver Zerfall mit Halbwertszeit $$\ln 2 / \lvert k\rvert$$.

#### Lineare DGL erster Ordnung

Die Gleichung $$y' + a(x)\,y = b(x)$$ heißt linear; für $$b = 0$$ homogen.

**Satz (Lösungsformel, B).** Sei $$A$$ eine Stammfunktion von $$a$$. Dann sind alle Lösungen

$$
y(x) = e^{-A(x)}\left(\int b(x)\,e^{A(x)}\,dx + C\right) .
$$

Struktur: **allgemeine Lösung = allgemeine homogene Lösung $$Ce^{-A(x)}$$ + eine partikuläre Lösung.**

<details class="beweis" markdown="1">
<summary>Herleitung (integrierender Faktor)</summary>

Multipliziere die Gleichung mit $$e^{A(x)} > 0$$. Mit der Produktregel und $$A' = a$$ ist die linke Seite eine Ableitung:

$$
e^{A}y' + a\,e^{A}y = \bigl(e^{A}y\bigr)' = b\,e^{A} .
$$

Integrieren gibt $$e^{A}y = \int b\,e^{A}\,dx + C$$, also die Formel. Umgekehrt erfüllt jede solche Funktion die Gleichung (Rechnung rückwärts). Deshalb sind das **alle** Lösungen.

Alternativ: **Variation der Konstanten.** Ansatz $$y = C(x)e^{-A(x)}$$ in die Gleichung einsetzen, ergibt $$C'(x) = b(x)e^{A(x)}$$, dasselbe Integral.

</details>

**Beispiel.** $$y' + 2y = e^x$$, $$y(0) = 1$$. Hier $$a = 2$$, $$A = 2x$$:

$$
y = e^{-2x}\left(\int e^{x}e^{2x}\,dx + C\right) = e^{-2x}\left(\frac{e^{3x}}{3} + C\right) = \frac{e^x}{3} + Ce^{-2x} .
$$

Anfangswert: $$\frac13 + C = 1$$, $$C = \frac23$$. Lösung $$y(x) = \frac13 e^x + \frac23 e^{-2x}$$. Probe: $$y' + 2y = \frac13 e^x - \frac43 e^{-2x} + \frac23 e^x + \frac43 e^{-2x} = e^x$$.

#### Lineare DGL zweiter Ordnung mit konstanten Koeffizienten

Für $$y'' + py' + qy = 0$$ mit $$p, q \in \mathbb R$$ liefert der Ansatz $$y = e^{\lambda x}$$ die **charakteristische Gleichung**

$$
\lambda^2 + p\lambda + q = 0 .
$$

| Nullstellen | Fundamentalsystem |
|---|---|
| zwei reelle $$\lambda_1 \ne \lambda_2$$ | $$e^{\lambda_1 x},\ e^{\lambda_2 x}$$ |
| doppelt $$\lambda$$ | $$e^{\lambda x},\ x e^{\lambda x}$$ |
| komplex $$\alpha \pm i\beta$$ | $$e^{\alpha x}\cos(\beta x),\ e^{\alpha x}\sin(\beta x)$$ |

Die allgemeine Lösung ist $$y = c_1 y_1 + c_2 y_2$$. Der komplexe Fall folgt aus der Euler-Formel (Kapitel 1): $$e^{(\alpha + i\beta)x} = e^{\alpha x}(\cos\beta x + i\sin\beta x)$$, Real- und Imaginärteil sind reelle Lösungen.

**Beispiel 1 (reell, mit AWP).** $$y'' + 3y' + 2y = 0$$, $$y(0) = 1$$, $$y'(0) = 0$$. $$\lambda^2 + 3\lambda + 2 = (\lambda + 1)(\lambda + 2)$$, also $$y = c_1 e^{-x} + c_2 e^{-2x}$$. Bedingungen: $$c_1 + c_2 = 1$$ und $$-c_1 - 2c_2 = 0$$, also $$c_2 = -1$$, $$c_1 = 2$$:

$$
y(x) = 2e^{-x} - e^{-2x}, \qquad y(1) \approx 0.6004 \ (\text{numerisch bestätigt}).
$$

**Beispiel 2 (komplex, gedämpfte Schwingung).** $$y'' + 2y' + 5y = 0$$: $$\lambda = -1 \pm \sqrt{1 - 5} = -1 \pm 2i$$. Lösung $$y = e^{-x}\bigl(c_1\cos 2x + c_2\sin 2x\bigr)$$. Ohne Dämpfung, $$y'' + 4y = 0$$: $$\lambda = \pm 2i$$, $$y = c_1\cos 2x + c_2\sin 2x$$.

**Beispiel 3 (doppelt).** $$y'' + 2y' + y = 0$$: $$(\lambda + 1)^2 = 0$$, $$y = (c_1 + c_2 x)e^{-x}$$.

Für die inhomogene Gleichung $$y'' + py' + qy = r(x)$$ gilt wieder: homogene Lösung plus eine partikuläre. Die partikuläre findet man oft mit einem Ansatz vom Typ der rechten Seite (Polynom, $$e^{kx}$$, $$\sin$$, $$\cos$$).

**Stolperfallen**

- Nach der Trennung der Variablen die Integrationskonstante nicht vergessen, und zwar **vor** dem Auflösen nach $$y$$: $$\ln\lvert y\rvert = x^2/2 + c$$ gibt $$y = Ce^{x^2/2}$$, nicht $$e^{x^2/2} + c$$.
- Bei der linearen DGL erster Ordnung muss $$y'$$ den Koeffizienten $$1$$ haben. $$2y' + 4y = \dots$$ zuerst durch $$2$$ teilen.
- Konstante Lösungen bei der Trennung der Variablen (Division durch $$h(y)$$) nicht verlieren.
- Bei 2. Ordnung braucht ein AWP **zwei** Bedingungen.

## Beweisliste

Alle mit (B) markierten Sätze auf einen Blick. Jeden einmal ohne Vorlage aufschreiben, die mit Kapitel 1–4 vor Test 1.

| Kap. | Aussage | Technik | Kernidee |
|---|---|---|---|
| 1 | $$\sqrt2$$ irrational | Widerspruch | $$p^2 = 2q^2$$ ⇒ beide gerade |
| 1 | Dreiecksungleichung | Abschätzen | $$-\lvert x\rvert \le x \le \lvert x\rvert$$ addieren |
| 1 | Bernoulli | Induktion | mit $$1 + x \ge 0$$ multiplizieren |
| 1 | Archimedes | Widerspruch, Vollständigkeit | $$n > s - 1$$ ⇒ $$n + 1 > s$$ |
| 1 | Multiplikation in Polarform | Additionstheoreme | Beträge mal, Winkel plus |
| 2 | Eindeutigkeit des Grenzwerts | Widerspruch | $$\varepsilon = \lvert a - b\rvert/2$$ |
| 2 | konvergent ⇒ beschränkt | direkt | $$\varepsilon = 1$$, endlich viele davor |
| 2 | Grenzwertsätze | ε-N | $$\varepsilon/2$$; beim Produkt Null addieren |
| 2 | Sandwich | ε-N | $$L - \varepsilon < a_n \le c_n \le b_n < L + \varepsilon$$ |
| 2 | Monotoniekriterium | Supremum | $$s - \varepsilon$$ ist keine obere Schranke |
| 2 | $$(1 + 1/n)^n$$ konvergiert | Bernoulli, binomischer Satz | Quotient $$\ge 1$$, Schranke $$3$$ |
| 2 | Bolzano–Weierstraß | Intervallhalbierung | eine Hälfte hat unendlich viele Glieder |
| 2 | Cauchy-Kriterium | Bolzano–Weierstraß | Teilfolge plus Cauchy |
| 3 | geometrische Reihe | Partialsumme | $$s_n - qs_n = 1 - q^{n+1}$$ |
| 3 | Nullfolgenkriterium | direkt | $$a_n = s_n - s_{n-1}$$ |
| 3 | harmonische Reihe divergiert | Gruppieren | Blöcke der Länge $$2^{j-1}$$ sind $$\ge 1/2$$ |
| 3 | Majorantenkriterium | Monotoniekriterium | Partialsummen wachsend, beschränkt |
| 3 | Quotientenkriterium | geometrische Majorante | $$\lvert a_k\rvert \le \lvert a_N\rvert\theta^{k-N}$$ |
| 3 | Leibniz | Teilfolgen gerade/ungerade | Intervallschachtelung |
| 3 | absolut ⇒ konvergent | Cauchy | Dreiecksungleichung |
| 4 | Folgenstetigkeit | beide Richtungen | Kontraposition mit $$\delta = 1/n$$ |
| 4 | Zwischenwertsatz | Bisektion | $$f(\xi) \le 0$$ und $$\ge 0$$ |
| 4 | Max/Min auf $$[a, b]$$ | Bolzano–Weierstraß | konvergente Teilfolge im Intervall |
| 5 | differenzierbar ⇒ stetig | direkt | Differenzenquotient mal $$(x - x_0)$$ |
| 5 | Produkt-, Quotientenregel | Null addieren | Stetigkeit von $$g$$ |
| 5 | Kettenregel | Hilfsfunktion $$\varphi$$ | Problem $$g(x+h) = g(x)$$ umgehen |
| 5 | Rolle | Max/Min + Fermat | Extremum im Inneren |
| 5 | Mittelwertsatz | Rolle | Sekante abziehen |
| 5 | Folgerungen MWS | Mittelwertsatz | $$f' = 0$$ ⇒ konstant, $$f' > 0$$ ⇒ wachsend |
| 6 | Taylor mit Lagrange-Restglied | $$(n+1)$$-mal Rolle | Hilfsfunktion mit Konstante $$M$$ |
| 6 | Taylorreihe von $$e^x$$ | Restglied | $$x^{n+1}/(n+1)! \to 0$$ |
| 7 | Hauptsatz | MWS der Integralrechnung | $$\frac1h\int_x^{x+h} f = f(\xi_h)$$ |
| 7 | partielle Integration | Produktregel | integrieren |
| 7 | $$\int 1/x^\alpha$$ | direkt | Stammfunktion, Grenzwert |
| 9 | Lösungsformel linear 1. Ordnung | integrierender Faktor | $$(e^A y)' = b e^A$$ |

## Selbsttest

<details class="beweis" markdown="1">
<summary>1. Konvergiert die Reihe über k² / 2^k? Mit welchem Kriterium?</summary>

Ja, mit dem Quotientenkriterium: $$\dfrac{(k+1)^2}{2^{k+1}}\cdot\dfrac{2^k}{k^2} = \dfrac12\left(1 + \dfrac1k\right)^2 \to \dfrac12 < 1$$. (Der Wert ist $$6$$.)

</details>

<details class="beweis" markdown="1">
<summary>2. Bestimme den Konvergenzbereich der Potenzreihe über x^k / k².</summary>

$$c_k = 1/k^2$$, $$\lvert c_k/c_{k+1}\rvert = (k+1)^2/k^2 \to 1$$, also $$R = 1$$. Bei $$x = 1$$: $$\sum 1/k^2$$ konvergiert. Bei $$x = -1$$: absolut konvergent mit derselben Majorante. Konvergenzbereich $$[-1, 1]$$.

</details>

<details class="beweis" markdown="1">
<summary>3. Zeige, dass x⁵ + x − 1 = 0 genau eine reelle Lösung hat.</summary>

Existenz: $$f(x) = x^5 + x - 1$$ ist stetig, $$f(0) = -1 < 0$$, $$f(1) = 1 > 0$$, nach dem Zwischenwertsatz gibt es eine Nullstelle in $$(0, 1)$$. Eindeutigkeit: $$f'(x) = 5x^4 + 1 > 0$$, also ist $$f$$ streng wachsend und hat höchstens eine Nullstelle.

</details>

<details class="beweis" markdown="1">
<summary>4. Berechne das Integral von x · ln x von 1 bis e.</summary>

Partiell mit $$u' = x$$, $$v = \ln x$$:

$$
\int_1^e x\ln x\,dx = \left[\frac{x^2}{2}\ln x\right]_1^e - \int_1^e \frac{x}{2}\,dx = \frac{e^2}{2} - \frac{e^2 - 1}{4} = \frac{e^2 + 1}{4} \approx 2.097 .
$$

</details>

<details class="beweis" markdown="1">
<summary>5. Wo steckt der Fehler? „Die Folge a(n+1) = 2·a(n) mit a(1) = 1 hat den Grenzwert 0, denn aus a = 2a folgt a = 0.“</summary>

Die Fixpunktgleichung gilt nur, **falls** der Grenzwert existiert. Hier ist $$a_n = 2^{n-1} \to \infty$$, die Folge divergiert. Erst Existenz (Monotonie und Beschränktheit) zeigen, dann den Grenzwert aus der Fixpunktgleichung bestimmen.

</details>

## Offene Punkte

- Genauen Tag von Test 1 und Test 2 in meiner Übungsgruppe nachsehen (Übungseinheit 6 bzw. 11).
- Altprüfungen besorgen (VoWi oder Kolleg:innen).
- Abschnittsnummern im eigenen Buchexemplar abgleichen; Kapitel 4–8 des Buchs sind nicht verifiziert.
- Notation und Reihenfolge mit den Folien abgleichen (z. B. ob $$\mathbb N$$ mit $$0$$ beginnt, Schreibweise für Grenzwerte und Restglied).
- Gleitkomma-Abschnitt mit der Analysis-Übungsaufgabe dazu (Nr. 432) und dem GDS-Stoff abstimmen.

## Quellen

- Unterlagen der LVA 104.634 in TISS/TUWEL (noch nicht abgeglichen)
- [Serlo *Mathe für Nicht-Freaks*: Analysis 1](https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks:_Analysis_1)
- GDS-Kompendium dieser Website (Gleitkommasysteme, IEEE 754)
