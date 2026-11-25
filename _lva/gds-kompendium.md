---
title: "Grundzüge digitaler Systeme – Kompendium"
kuerzel: GDS
lva_nr: "192.134"
typ: VU
semester: 2026W
ects: 6
sws: 4.0
status: laufend
tiss: "https://tiss.tuwien.ac.at/course/courseDetails.xhtml?courseNr=192134&semester=2026W"
excerpt: "GDS ausführlich: Organisation, Lernquellen, Lernplan bis zu den Tests und die komplette Stoffzusammenfassung mit durchgerechneten Beispielen."
math: true
unlisted: true       # Entwurf, parallel zur kurzen LVA-Seite
---

{% include toc title="Inhalt" %}

## Überblick

GDS erklärt, wie Computer Information darstellen und verarbeiten: von Zahlen und Codes über Logik und Schaltungen bis zu Automaten, formalen Sprachen und Petri-Netzen. VU 192.134, 6 ECTS. Organisation laut Vorbesprechung (Dvořák).

**Dringend:** Die Anmeldung zur Kreuzerlübungsgruppe in TISS läuft nur bis **13.11.2026** (first come, first served). Danach ist **Test 1 am Do 26.11.2026 um 18 Uhr** der nächste große Termin.
{: .notice--danger}

| **Vorlesung** | Di 10–12, Do 14–16, Fr 10–12 (c.t.), GM 1 AudiMax; LectureTube-Stream + Aufzeichnung in TUWEL; keine Anwesenheitspflicht |
| **Übungen 1–4** | Großraumübung (nicht bewertet) + TUWEL-Übung (Pflicht, je 9 Pkt., beliebig viele Versuche, der beste zählt) |
| **Einstiegstest** | TUWEL-Übungen 1 + 2 (Zahlendarstellung, Numerik): mindestens 12 von 18 Punkten, Voraussetzung für alles Weitere |
| **Übungen 5–8** | Kreuzerlübungen in Gruppen (~25 Personen, Anwesenheitspflicht); Lösungen als **eine** PDF hochladen und ankreuzen bis Fr 23:59 vor der Übungswoche, je 9 Pkt. Abgaben: UE5 20.11., UE6 04.12., UE7 11.12., UE8 08.01.; Übungstermine 23./25.11., 7./9.12., 14./16.12., 11./13.01. |
| **Test 1** | Do 26.11.2026, 18 Uhr; Ersatztest Do 17.12.2026, 14 Uhr. Stoff: Zahlendarstellung, Numerik, Codierungs- und Informationstheorie, Aussagenlogik, Darstellungen Boolescher Funktionen (UE1–UE4); gesonderte Anmeldung in TISS |
| **Test 2** | Do 21.01.2027, 18 Uhr; Ersatztest Fr 05.02.2027, 12 Uhr. Stoff: Digitalschaltungen, Automaten, Prädikatenlogik, reguläre Sprachen, kontextfreie Grammatiken, Petri-Netze (UE5–UE8); gesonderte Anmeldung in TISS |
| **Testformat** | schriftlich, 90 min, 100 Pkt., keine Hilfsmittel; Theoriefragen + praktische Aufgaben, Fokus auf Verständnis (neue Fragen); alte Tests in TUWEL |

### Mindestanforderungen und Note

Wer eine Mindestanforderung verfehlt, bekommt eine 5:

- Einstiegstest positiv,
- Übungen insgesamt mindestens 48 von 72 Punkten **und** mindestens 18 von 36 Punkten bei Übung 5–8,
- jeder Test mindestens 50 von 100 Punkten (bei Antritt zu Haupt- und Ersatztest zählt der bessere).

Die Note ergibt sich aus $$P = \text{Übungspunkte} + \text{Testpunkte}$$ (maximal $$72 + 2 \cdot 100 = 272$$):

| Note | Punkte |
|---|---|
| Sehr gut | ≥ 240 |
| Gut | ≥ 204 |
| Befriedigend | ≥ 172 |
| Genügend | ≥ 136 |

### Spielregeln der Kreuzerlübung

- Kreuzen nur, wenn **alle Teilaufgaben** gelöst sind, der Lösungsweg im PDF steht und ich ihn präsentieren kann.
- Kann man eine gekreuzte Aufgabe nicht erklären oder ist sie ein Plagiat (auch KI-generiert), sind **alle Kreuze des Blattes** weg.
- Die Tafelleistung selbst wird nicht benotet.
- Pro Aufgabe laut LVA mindestens 1 Stunde einplanen.

Die Folien listen nur die Themen, nicht ihre Aufteilung auf die Tests. Die Zuordnung unten (Test 1 = Zahlen bis Schaltungen, Test 2 = Prädikatenlogik bis Petri-Netze) folgt der Reihenfolge der Themenübersicht in der Vorbesprechung und ist mit TUWEL abzugleichen.
{: .notice--warning}

### Inhalt laut LVA-Beschreibung

| Thema laut TISS | Kapitel hier |
|---|---|
| Zahlendarstellung und Zahlencodierung, Gleitkommaarithmetik | 1 |
| Grundkonzepte der Informations- und Codierungstheorie | 2 |
| Logik in der Informatik; Aussagenlogik, Boolesche Algebra, Minimierungsverfahren | 3, 4, 5 (KV) |
| Prädikatenlogik als Spezifikationssprache | 6 |
| Endliche Automaten, inklusive Moore- und Mealy-Automaten | 7 |
| Reguläre Ausdrücke und kontextfreie Grammatiken | 8 |
| Schaltnetze; Realisierungen von Automaten | 5, 7 (Schaltwerk) |
| Petri-Netze | 9 |

**Lernergebnisse laut TISS:** Zahlendarstellungen unterscheiden und anwenden; Grundkonzepte der Informations- und Codierungstheorie beschreiben und anwenden; Ausdrücke der Booleschen Algebra formulieren, umformen und minimieren; logische Konzepte anwenden; einfache Schaltnetze entwerfen und erklären; ein System mit einer passenden Logik oder einem passenden Automatentyp beschreiben; syntaktische und semantische Fehler in Modellen finden; informell beschriebene Systeme auf das Wesentliche reduzieren und formal modellieren.

## Teil A1 – Kostenlose Lernquellen

**Reihenfolge beim Lernen:** Aufzeichnung + Folien → Großraumübungsblatt → TUWEL-Übung → alte Tests aus TUWEL. Die LVA warnt ausdrücklich vor veralteten Infos aus externen Quellen (Wikis, ältere Jahrgänge): Stoffumfang und Notation immer an den aktuellen Folien prüfen.

### Die Quellen

| Quelle | Sprache | Wofür |
|---|---|---|
| [GDS-TUWEL-Kurs](https://tuwel.tuwien.ac.at/): Folien, LectureTube-Aufzeichnungen, Übungsblätter, alte Testangaben, weiterführende Literatur | DE | Primärquelle für alles |
| Repetitorien vor den Tests | DE | Wiederholung, Fragen; zur VO-Zeit, Ankündigung in TUWEL |
| TUWEL-Forum | DE | Fragen zu Übungen |
| [Serlo *Mathe für Nicht-Freaks*](https://de.wikibooks.org/wiki/Mathe_f%C3%BCr_Nicht-Freaks) – Logik | DE | Aussagenlogik, Quantoren |
| [Jörn Loviscach](https://www.youtube.com/@JoernLoviscach) | DE | Kurzvideos zu Zahlensystemen, Digitaltechnik |
| [Weitz-Skript](https://weitz.de/) | DE | Zahlensysteme, Logik |
| ADM-Aufgabensammlung 77–90 | DE | Wahrheitstafeln, Tautologien, Quantoren |

### Thema → Quellen

| Thema (Test laut TUWEL) | Deutsch / Übung |
|---|---|
| Zahlendarstellung, Zweierkomplement, Gleitkomma IEEE 754, Numerik (T1) | TUWEL-Übung 1–2, Loviscach; Analysis-Aufgabe 432 (Gleitkommasystem) |
| Kodierung, Information, Entropie, Huffman, Fehlererkennung und -korrektur (T1) | Großraumübung |
| Aussagenlogik, Normalformen, Resolution (T1) | Serlo Logik; ADM 77–87 |
| BDDs (T1) | Folien |
| Digitalschaltungen: Gatter, KV-Diagramm, Addierer, Flipflops (T2) | Folien 07, Loviscach |
| Prädikatenlogik: Syntax, Semantik, Modelle (T2) | Serlo Quantoren; ADM 88–89 |
| Endliche Automaten: DEA/NEA, Potenzmenge, Minimierung (T2) | Folien |
| Reguläre Sprachen, reguläre Ausdrücke, kontextfreie Grammatiken (T2) | Folien |
| Petri-Netze (T2) | Folien, alte Tests |

## Teil A2 – Lernplan bis zu den Tests

**Ziel:** jedes Kreuzerlblatt (5–8) fast vollständig kreuzen, weil 36 der 72 Übungspunkte daran hängen und die Übungspunkte direkt in die Note eingehen. Bei mindestens 1 Stunde pro Aufgabe sind das rund 9 Stunden pro Blatt. Die Blätter so planen, dass sie nicht mit den ADM- und Analysis-Abgaben kollidieren.

Die Termine stammen aus TISS und TUWEL, der Teststoff aus der TUWEL-Ankündigung; die Zuordnung der Themen zu den Kreuzerlblättern 6–8 ist geschätzt.
{: .notice--info}

| Woche | GDS-Stoff | Aufgaben | Meilenstein |
|---|---|---|---|
| 07.–13.11. | Wiederholung Zahlendarstellung, Kodierung, Information | TISS-Gruppenanmeldung bis 13.11.; Großraumübungen 3–4 nachrechnen | Gruppe gesichert |
| 14.–20.11. | Aussagenlogik, Normalformen, BDDs | Kreuzerlblatt (Abgabe Fr 23:59 vor der Übungswoche) | – |
| 21.–26.11. | Test-1-Stoff wiederholen; alte Tests 2022W–2025W unter 90 min | Fehlerliste aus den Probetests; Übung 5 (23./25.11.) | **Test 1 Do 26.11., 18 Uhr** (Kollision mit Analysis-Test 1 in derselben Woche beachten) |
| 27.11.–06.12. | Digitalschaltungen, Prädikatenlogik | Kreuzerlblatt 6 (Abgabe Fr 04.12.) | ADM-Test 1 (02./07.12.) |
| 07.–17.12. | Endliche Automaten | Kreuzerlblatt 7 (Abgabe Fr 11.12.); ggf. Ersatztest 1 | Ersatztest 1 Do 17.12., 14 Uhr (nur bei Bedarf) |
| Weihnachtsferien | Reguläre Sprachen, kontextfreie Grammatiken | Kreuzerlblatt 8 (Abgabe Fr 08.01.) | – |
| 07.–20.01. | Petri-Netze; 2–3 alte Tests (Teil 2) | Fehlerliste | Analysis-Test 2 (18.–22.01.) |
| 21.01. | – | – | **Test 2 Do 21.01., 18 Uhr** |
| bis 05.02. | nur bei Bedarf | – | Ersatztest 2 Fr 05.02., 12 Uhr |

**Wochenroutine**

- Vorlesung innerhalb von 48 Stunden nachsehen, Definitionen in eine Theorieliste übertragen.
- Kreuzerlblatt bis Mittwoch fertig, Donnerstag Kontrolle, Freitag Upload (ein PDF, höchstens 10 MB, Aufgaben aufsteigend).
- Nur kreuzen, was ich an der Tafel erklären kann.
- Vor jedem Test: alte Testangaben aus TUWEL unter Zeitdruck rechnen.

## Teil B – Stoffzusammenfassung

Reihenfolge wie in der Themenübersicht der Vorbesprechung. **(B)** markiert typische Begründungs- und Theoriefragen. Die Beispiele sind selbst gerechnet, nicht aus Folien oder Tests übernommen.

Abschnitt 1 ist mit den Foliensätzen *02 Zahlendarstellung* und *03 Numerik* abgeglichen (Notation $$F(b,p,e_{\min},e_{\max},\mathit{denorm})$$, $$\square x$$ für die Rundung, Guard/Round/Sticky). Die Themen der Abschnitte 2–9 sind durch die LVA-Beschreibung gesichert; ihre Ausarbeitung fasst den Standardstoff zusammen, die Folien dazu lagen mir beim Schreiben noch nicht vor. Notation und Bezeichnungen (z. B. DEA/DFA, Belegung/Interpretation) dort bitte mit den Folien abgleichen.
{: .notice--warning}

### 1 Darstellung von Zahlen in Computern

#### Bits, Bytes, Präfixe

Ein Bit hat zwei Zustände, $$n$$ Bits ergeben $$2^n$$ Kombinationen. Für ein Alphabet mit $$x$$ Zeichen braucht man $$\lceil \log_2 x \rceil$$ Bits, etwa 5 Bits für 26 Kleinbuchstaben. 1 Byte = 8 Bit. SI-Präfixe sind Zehnerpotenzen (1 kB = 1000 Byte), Binärpräfixe Zweierpotenzen (1 KiB = 1024 Byte, 1 MiB = $$2^{20}$$ Byte).

**Modulo.** $$a \bmod b$$ ist der Rest bei Division durch $$b$$, immer in $$\{0, \dots, b-1\}$$, auch für negative $$a$$: $$-1 \bmod 16 = 15$$, weil $$-1 = (-1) \cdot 16 + 15$$.

#### Stellenwertsysteme

Zur Basis $$b \ge 2$$ mit Ziffern $$d_i \in \{0, \dots, b-1\}$$:

$$
(d_{n-1} \dots d_1 d_0 . d_{-1} \dots d_{-m})_b = \sum_{i=-m}^{n-1} d_i\, b^{i}
$$

**Umrechnung ins Dezimalsystem** über die Stellenwerte oder schneller mit dem **Horner-Schema** (von links nach rechts: mal Basis, plus nächste Ziffer):

$$
(110101)_2 = ((((1 \cdot 2 + 1) \cdot 2 + 0) \cdot 2 + 1) \cdot 2 + 0) \cdot 2 + 1 = 53
$$

**Umrechnung ins Binärsystem.** Ganzzahliger Teil durch fortgesetzte Division durch $$b$$ (Reste von unten nach oben lesen), Nachkommateil durch fortgesetzte Multiplikation mit $$b$$ (Vorkommastellen von oben nach unten lesen).

| 2026 : 2 | Rest | | 0.8125 · 2 | Vorkommastelle |
|---|:-:|---|---|:-:|
| 1013 | 0 | | 1.625 | 1 |
| 506 | 1 | | 1.25 | 1 |
| 253 | 0 | | 0.5 | 0 |
| 126 | 1 | | 1.0 | 1 |
| 63 | 0 | | | |
| 31 | 1 | | | |
| 15 | 1 | | | |
| 7 | 1 | | | |
| 3 | 1 | | | |
| 1 | 1 | | | |
| 0 | 1 | | | |

Also $$2026 = (111\,1110\,1010)_2$$ und $$0.8125 = (0.1101)_2$$.

**Binär ↔ Hexadezimal/Oktal.** Je 4 Bit ergeben eine Hex-Ziffer, je 3 Bit eine Oktalziffer, jeweils vom Komma aus gruppiert: $$(111\,1110\,1010)_2 = (7EA)_{16}$$, weil $$0111 = 7$$, $$1110 = E$$, $$1010 = A$$.

Nicht jede endliche Dezimalzahl ist endlich binär: $$0.1 = (0.0\overline{0011})_2$$ ist periodisch. Eine Zahl hat genau dann eine endliche Darstellung zur Basis $$b$$, wenn ihr gekürzter Nenner nur Primfaktoren von $$b$$ enthält. Daher kann $$0.1$$ in keinem Binärformat exakt gespeichert werden.
{: .notice--info}

#### Negative ganze Zahlen ($$n$$ Bit)

| Darstellung | Idee | Bereich bei 8 Bit | −45 bei 8 Bit |
|---|---|---|---|
| Vorzeichen + Betrag | erstes Bit = Vorzeichen, Rest = Betrag | −127 … 127, zwei Nullen | `1010 1101` |
| Einerkomplement | alle Bits invertieren | −127 … 127, zwei Nullen | `1101 0010` |
| Zweierkomplement | invertieren, dann +1 | −128 … 127, eine Null | `1101 0011` |
| Exzess-128 | Wert + 128 als vorzeichenlose Zahl | −128 … 127 | `0101 0011` (= 83) |

(Ausgangspunkt: $$45 = (0010\,1101)_2$$.) Bei Exzess $$2^{n-1}$$ unterscheidet sich die Exzessdarstellung vom Zweierkomplement nur im ersten Bit. Exzessdarstellungen haben den Vorteil, dass die Ordnung der Bitmuster der Ordnung der Zahlen entspricht; deshalb werden IEEE-Exponenten so gespeichert.

**Zweierkomplement (B).** Das Bitmuster $$a_{n-1} \dots a_0$$ hat den Wert

$$
x = -a_{n-1} 2^{n-1} + \sum_{i=0}^{n-2} a_i 2^{i}, \qquad x \in [-2^{n-1},\, 2^{n-1} - 1], \qquad -x = \overline{x} + 1
$$

Das erste Bit hat also das Gewicht $$-2^{n-1}$$. Addition funktioniert wie bei vorzeichenlosen Zahlen modulo $$2^n$$ (Übertrag aus dem höchsten Bit wird ignoriert). **Überlauf** genau dann, wenn beide Summanden gleiches Vorzeichen haben und das Ergebnis das andere. Äquivalent: Übertrag in das höchste Bit $$\ne$$ Übertrag aus dem höchsten Bit. Bei verschiedenen Vorzeichen kann kein Überlauf entstehen.

| Rechnung (8 Bit) | Bits | Ergebnis |
|---|---|---|
| $$-45 + 20$$ | `1101 0011` + `0001 0100` = `1110 0111` | $$-128 + 64 + 32 + 7 = -25$$ ✓ |
| $$100 + 50$$ | `0110 0100` + `0011 0010` = `1001 0110` | $$-106$$: Überlauf (positiv + positiv = negativ), richtig wäre $$150 > 127$$ |

**Einerkomplement-Addition:** Ein Übertrag aus dem höchsten Bit muss wieder hinten addiert werden („end-around carry“). Das ist einer der Gründe, warum Hardware das Zweierkomplement verwendet.

**Vorzeichenerweiterung:** Beim Verlängern einer Zweierkomplementzahl das Vorzeichenbit nach links kopieren: $$-3$$ ist `1101` (4 Bit) und `1111 1101` (8 Bit).

#### Festpunktdarstellung

$$N = 1 + g + n$$ Bits: Vorzeichen $$v$$, $$g$$ Vorkomma-, $$n$$ Nachkommastellen. Das Bitmuster $$v\, d_{N-2} \dots d_0$$ steht für

$$
(-1)^{v} \cdot 2^{-n} \sum_{j=0}^{N-2} d_j 2^{j}
$$

Das ist eine ganze Zahl, skaliert um $$2^{-n}$$. Der Abstand zwischen benachbarten Zahlen ist überall gleich, nämlich $$2^{-n}$$. Für sehr große und sehr kleine Zahlen gleichzeitig reicht das nicht, daher Gleitkomma.

#### Gleitkomma-Zahlensysteme

Ein Gleitkomma-Zahlensystem $$F(b, p, e_{\min}, e_{\max}, \mathit{denorm})$$ hat Basis $$b$$, Mantissenlänge $$p$$ (inklusive Vorkommastelle), Exponenten von $$e_{\min}$$ bis $$e_{\max}$$ und mit $$\mathit{denorm} = \text{true}$$ auch denormalisierte Zahlen. Eine Zahl ist $$\pm m_0.m_1 \dots m_{p-1} \cdot b^{e}$$.

- **Normalisiert:** $$m_0 \ne 0$$, genau eine Stelle vor dem Komma. Im Binärsystem ist dann immer $$m_0 = 1$$, das Bit wird nicht gespeichert (**implizites erstes Bit**).
- **Denormalisiert:** Bei $$e = e_{\min}$$ ist auch $$m_0 = 0$$ erlaubt. Das schließt die Lücke zwischen $$0$$ und $$b^{e_{\min}}$$.

| Größe | Formel |
|---|---|
| Anzahl normalisierter Zahlen (mit $$\pm 0$$) | $$2 + 2 (b-1) b^{p-1} (e_{\max} - e_{\min} + 1)$$ |
| Anzahl denormalisierter Zahlen | $$2 (b^{p-1} - 1)$$ |
| größte Zahl | $$x_{\max} = b(1 - b^{-p}) \cdot b^{e_{\max}}$$ |
| kleinste positive normalisierte Zahl | $$x_{\min} = b^{e_{\min}}$$ |
| kleinste positive denormalisierte Zahl | $$b^{e_{\min} - p + 1}$$ |
| ulp (Abstand der Mantissen) | $$b^{1-p}$$ |
| Abstand benachbarter Zahlen in $$[b^{e}, b^{e+1})$$ | $$b^{e - p + 1}$$ |

**Beispiel $$F(2, 3, -1, 1, \text{true})$$.** Positive Zahlen:

| $$e$$ | Mantissen | Werte | Abstand |
|---|---|---|---|
| $$-1$$ (denorm.) | 0.01, 0.10, 0.11 | 0.125, 0.25, 0.375 | 0.125 |
| $$-1$$ | 1.00 … 1.11 | 0.5, 0.625, 0.75, 0.875 | 0.125 |
| $$0$$ | 1.00 … 1.11 | 1, 1.25, 1.5, 1.75 | 0.25 |
| $$1$$ | 1.00 … 1.11 | 2, 2.5, 3, 3.5 | 0.5 |

Die Formeln passen: $$x_{\max} = 2(1 - 2^{-3}) \cdot 2^{1} = 3.5$$; normalisiert $$2 + 2 \cdot 1 \cdot 4 \cdot 3 = 26$$ Zahlen, denormalisiert $$2 \cdot 3 = 6$$. Man sieht das Wesentliche: Der **absolute** Abstand wächst mit dem Betrag, der **relative** bleibt ungefähr gleich.

#### IEEE 754

| | Single (32 Bit) | Double (64 Bit) |
|---|---|---|
| System | $$F(2, 24, -126, 127, \text{true})$$ | $$F(2, 53, -1022, 1023, \text{true})$$ |
| Aufteilung | 1 Vorzeichen, 8 Exponent, 23 Mantisse | 1, 11, 52 |
| Exzess (Bias) | 127 | 1023 |
| $$x_{\max}$$ | $$\approx 3.40 \cdot 10^{38}$$ | $$\approx 1.80 \cdot 10^{308}$$ |
| $$x_{\min}$$ (normalisiert) | $$2^{-126} \approx 1.18 \cdot 10^{-38}$$ | $$2^{-1022}$$ |
| ulp von 1 | $$2^{-23} \approx 1.19 \cdot 10^{-7}$$ | $$2^{-52} \approx 2.22 \cdot 10^{-16}$$ |

Normalisiert ($$1 \le E \le 254$$, $$E$$ = gespeicherter Exponent): $$x = (-1)^{s} \cdot 1.m \cdot 2^{E - 127}$$.

| gespeicherter Exponent $$E$$ | Mantisse $$m$$ | Bedeutung |
|---|---|---|
| 0 | 0 | $$\pm 0$$ |
| 0 | $$\ne 0$$ | denormalisiert: $$(-1)^{s} \cdot 0.m \cdot 2^{-126}$$ |
| 1 … 254 | beliebig | normalisiert: $$(-1)^{s} \cdot 1.m \cdot 2^{E-127}$$ |
| 255 | 0 | $$\pm\infty$$ (Überlauf, $$1/0$$) |
| 255 | $$\ne 0$$ | NaN ($$0/0$$, $$\sqrt{-1}$$, $$\infty - \infty$$) |

Die Werte $$E = 0$$ und $$E = 255$$ sind für Sonderfälle reserviert. Deshalb geht der Exponent nur von $$-126$$ bis $$127$$, obwohl 8 Bit mit Exzess 127 den Bereich $$-127$$ bis $$128$$ hergäben.

**Codieren (B): −13.375 als Single.**

1. Binär: $$13 = (1101)_2$$, $$0.375 = (0.011)_2$$, also $$-13.375 = -(1101.011)_2$$.
2. Normalisieren: $$(1101.011)_2 = (1.101011)_2 \cdot 2^{3}$$.
3. Exponent mit Exzess: $$3 + 127 = 130 = (1000\,0010)_2$$.
4. Vorzeichen $$s = 1$$, Mantisse ohne implizite 1, rechts mit Nullen auf 23 Bit aufgefüllt.

```
1 10000010 10101100000000000000000   = 0xC1560000
```

**Decodieren: `0 01111101 01000000000000000000000`.** $$E = 125$$, also Exponent $$125 - 127 = -2$$. Mantisse $$(1.01)_2 = 1.25$$. Wert $$1.25 \cdot 2^{-2} = 0.3125$$.

**0.1 als Single** ist `0 01111011 10011001100110011001101` (0x3DCCCCCD): Die periodische Mantisse wird abgeschnitten und gerundet, gespeichert ist also nur eine Näherung.

#### Runden

Eine Rundung ist eine Abbildung $$\square: \mathbb R \to F$$ mit $$\square x = x$$ für $$x \in F$$ (Projektivität) und $$x \le y \Rightarrow \square x \le \square y$$ (Monotonie). Liegt $$x$$ zwischen den Nachbarn $$x_1 < x_2$$ in $$F$$:

| Modus | Ergebnis |
|---|---|
| Abschneiden (truncate) | Richtung $$0$$ |
| Aufrunden | $$x_2$$ |
| Abrunden | $$x_1$$ |
| optimale Rundung (round to nearest) | der nähere Nachbar; bei Gleichstand (genau in der Mitte) *round to even* (letzte Mantissenstelle gerade) oder *round away from zero* |

**Beispiel:** $$(1.0010)_2$$ auf zwei Nachkommastellen. Nachbarn $$1.00$$ und $$1.01$$, Mitte $$1.001$$, der Wert liegt genau auf der Mitte. Abschneiden und Abrunden: $$1.00$$; Aufrunden: $$1.01$$; round to even: $$1.00$$; round away from zero: $$1.01$$.

#### Rundungsfehler und Numerik (B)

Absoluter Fehler $$\varepsilon(x) = \lvert \square x - x \rvert$$, relativer Fehler $$\rho(x) = \varepsilon(x) / \lvert x \rvert$$. Bei optimaler Rundung im normalisierten Bereich gilt

$$
\rho(x) \le \tfrac12 b^{1-p} \qquad (\text{Single: } 2^{-24} \approx 6 \cdot 10^{-8},\ \text{Double: } 2^{-53} \approx 1.1 \cdot 10^{-16}).
$$

Eine Gleitkommaoperation ist definiert als $$x \circledast y = \square(x \circ y)$$: exakt rechnen, dann einmal runden. Folgen:

- **Kommutativ ja, assoziativ und distributiv nein.** Beispiel in $$F(10, 3, \dots)$$ mit optimaler Rundung, $$a = 1.00 \cdot 10^{3}$$, $$b = c = 4.00$$: $$(a + b) + c = \square(1004) + 4 = 1.00 \cdot 10^{3} + 4 \to 1.00 \cdot 10^{3}$$, aber $$a + (b + c) = \square(1000 + 8) = 1.01 \cdot 10^{3}$$.
- **Absorption:** Eine kleine Zahl verschwindet neben einer großen (oben: $$1000 + 4 = 1000$$). Summen deshalb von klein nach groß bilden.
- **Auslöschung:** Bei der Subtraktion fast gleich großer Zahlen heben sich die vorderen Stellen auf, und die Rundungsfehler der hinteren Stellen werden relativ groß. Beispiel mit 4 Stellen: $$\square(1.0004) - \square(1.0001) = 1.000 - 1.000 = 0$$, exakt wäre $$0.0003$$ (relativer Fehler 100 %). Gegenmittel: umformen, z. B. $$x^2 - y^2 = (x - y)(x + y)$$ oder $$\sqrt{x+1} - \sqrt{x} = 1 / (\sqrt{x+1} + \sqrt{x})$$.
- **Fehlerfortpflanzung:** Jedes gerundete Zwischenergebnis ist Eingabe der nächsten Operation.
- **Kein exakter Vergleich:** Statt `x == 0` bzw. `x == y` gegen eine Schranke prüfen, z. B. $$\lvert x - y \rvert \le \alpha$$.

#### Gleitkomma-Arithmetik mit Guard, Round, Sticky

**Addition/Subtraktion:** (1) Exponenten angleichen: kleineren Exponenten an den größeren anpassen, die Mantisse dabei nach rechts schieben; (2) Mantissen addieren bzw. subtrahieren; (3) normalisieren; (4) runden (danach eventuell nochmals normalisieren).
**Multiplikation:** Mantissen multiplizieren, Exponenten addieren (gespeichert: $$E_A + E_B - \text{Bias}$$), normalisieren, runden.

Damit das Ergebnis gleich $$\square(\text{exaktes Ergebnis})$$ ist, rechnet man mit **drei Zusatzbits** hinter der Mantisse: **Guard** (G), **Round** (R) und **Sticky** (S). S ist 1, sobald irgendein weiter rechts hinausgeschobenes Bit 1 war. Zwei Zusatzstellen reichen nicht, weil man sonst einen echten Gleichstand nicht von „knapp über der Mitte“ unterscheiden kann.

| G | R | S | optimale Rundung, round to even |
|:-:|:-:|:-:|---|
| 0 | x | x | abrunden (unverändert) |
| 1 | 1 | x | aufrunden |
| 1 | 0 | 1 | aufrunden |
| 1 | 0 | 0 | Gleichstand: aufrunden nur, wenn das letzte Mantissenbit 1 ist |

Kurz: aufrunden genau dann, wenn $$G \wedge (R \vee S \vee \text{lsb})$$.

**Beispiel** mit $$p = 4$$ (1 + 3 Bit): $$A = (1.101)_2 \cdot 2^{1} = 3.25$$, $$B = (1.011)_2 \cdot 2^{-2} = 0.34375$$.

1. $$B$$ um 3 Stellen schieben: $$(0.001\,011)_2 \cdot 2^{1}$$, also Mantisse $$0.001$$ mit $$G = 0$$, $$R = 1$$, $$S = 1$$.
2. Addieren: $$1.101 + 0.001 = 1.110$$.
3. Normalisiert, nichts zu tun.
4. $$G = 0$$, also abrunden: Ergebnis $$(1.110)_2 \cdot 2^{1} = 3.5$$. Kontrolle: exakt $$3.59375$$, die Nachbarn in $$F$$ sind $$3.5$$ und $$3.75$$, $$3.5$$ ist näher.

**Gleichstand:** $$1 + 2^{-4}$$ mit $$p = 4$$ ergibt Mantisse $$1.000$$ mit $$GRS = 100$$. Das letzte Bit ist 0, round to even lässt $$1.000$$ stehen. Exakt $$1.0625$$ liegt genau zwischen $$1$$ und $$1.125$$.

### 2 Kodierungs- und Informationstheorie

**Code:** eine Abbildung $$c: A \to B^{+}$$ von einem Alphabet in nichtleere Wörter. **Eindeutig decodierbar**, wenn die Fortsetzung auf Wörter injektiv ist. **Präfixcode:** kein Codewort ist Präfix eines anderen; dann ist der Code eindeutig und sofort (ohne Vorausschauen) decodierbar. Beispiel: $$\{0, 10, 110, 111\}$$ ist präfixfrei, $$\{0, 01, 11\}$$ nicht ($$0$$ ist Präfix von $$01$$).

**Kraft-Ungleichung (B).** Ein binärer Präfixcode mit Codewortlängen $$l_1, \dots, l_n$$ existiert genau dann, wenn

$$
\sum_{i=1}^{n} 2^{-l_i} \le 1
$$

Für $$\{0, 10, 110, 111\}$$: $$\tfrac12 + \tfrac14 + \tfrac18 + \tfrac18 = 1$$. Längen $$1, 1, 2$$ sind unmöglich: $$\tfrac12 + \tfrac12 + \tfrac14 > 1$$.

**Information und Entropie.** Ein Zeichen mit Wahrscheinlichkeit $$p$$ trägt $$I = -\log_2 p$$ Bit (je seltener, desto mehr Information). Entropie der Quelle:

$$
H = -\sum_{i} p_i \log_2 p_i, \qquad 0 \le H \le \log_2 n
$$

$$H = 0$$, wenn ein Zeichen sicher ist; Maximum $$\log_2 n$$ bei Gleichverteilung.

**Quellcodierungssatz (B).** Für jeden Präfixcode gilt für die mittlere Codewortlänge $$\bar L = \sum p_i l_i \ge H$$, und es gibt einen mit $$\bar L < H + 1$$.

**Huffman-Code:** wiederholt die zwei unwahrscheinlichsten Zeichen zu einem Knoten zusammenfassen (Wahrscheinlichkeiten addieren), bis ein Baum entsteht; links 0, rechts 1. Liefert einen optimalen Präfixcode (minimales $$\bar L$$).

**Beispiel.** $$p(A) = 0.4$$, $$p(B) = p(C) = 0.2$$, $$p(D) = p(E) = 0.1$$.

1. $$D + E = 0.2$$
2. $$B + C = 0.4$$
3. $$DE + BC = 0.6$$
4. $$A + (DE\,BC) = 1$$

Ergebnis z. B. $$A = 0$$, $$B = 100$$, $$C = 101$$, $$D = 110$$, $$E = 111$$ mit $$\bar L = 0.4 \cdot 1 + 0.6 \cdot 3 = 2.2$$ Bit. Die Entropie ist $$H \approx 2.122$$ Bit, also $$H \le \bar L < H + 1$$. (Bei Gleichständen gibt es mehrere Huffman-Bäume, z. B. mit Längen $$2, 2, 2, 3, 3$$; $$\bar L$$ ist bei allen gleich.) Sind alle $$p_i$$ Zweierpotenzen wie $$\tfrac12, \tfrac14, \tfrac18, \tfrac18$$, erreicht Huffman genau $$\bar L = H = 1.75$$.

**Fehlererkennung und -korrektur (B).** **Hamming-Abstand** $$d(x,y)$$ = Anzahl der Stellen, an denen sich $$x$$ und $$y$$ unterscheiden; $$d_{\min}$$ = kleinster Abstand zweier verschiedener Codewörter. Ein Code **erkennt** bis zu $$d_{\min} - 1$$ Fehler und **korrigiert** bis zu $$\lfloor (d_{\min} - 1)/2 \rfloor$$ Fehler.

*Begründung:* Weniger als $$d_{\min}$$ Bitfehler können ein Codewort nie in ein anderes Codewort verwandeln, also fällt der Fehler auf. Bei höchstens $$t = \lfloor (d_{\min}-1)/2 \rfloor$$ Fehlern ist das gesendete Wort das eindeutig nächstgelegene Codewort, weil die Kugeln vom Radius $$t$$ um die Codewörter disjunkt sind.

- **Paritätsbit:** $$d_{\min} = 2$$, erkennt 1 Fehler, korrigiert keinen.
- **Hamming(7,4):** 4 Datenbits, 3 Prüfbits an den Positionen 1, 2, 4; $$d_{\min} = 3$$, korrigiert 1 Fehler. Prüfbit $$p_k$$ ergänzt die Parität aller Positionen, deren Binärdarstellung das Bit $$k$$ enthält.

**Beispiel Hamming(7,4).** Daten $$1011$$ auf die Positionen 3, 5, 6, 7:

| Position | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Rolle | $$p_1$$ | $$p_2$$ | $$d_1$$ | $$p_4$$ | $$d_2$$ | $$d_3$$ | $$d_4$$ |
| gesendet | 0 | 1 | 1 | 0 | 0 | 1 | 1 |
| empfangen | 0 | 1 | 1 | 0 | 0 | **0** | 1 |

$$p_1 = d_1 \oplus d_2 \oplus d_4 = 0$$ (Positionen 3, 5, 7), $$p_2 = d_1 \oplus d_3 \oplus d_4 = 1$$ (3, 6, 7), $$p_4 = d_2 \oplus d_3 \oplus d_4 = 0$$ (5, 6, 7). Beim Empfänger: Prüfung über 1, 3, 5, 7 ergibt $$0$$, über 2, 3, 6, 7 ergibt $$1$$, über 4, 5, 6, 7 ergibt $$1$$. Das Syndrom $$(s_4 s_2 s_1) = (110)_2 = 6$$ zeigt direkt auf die fehlerhafte Position 6.

**Zeichencodes (Ergänzung).** ASCII: 7 Bit, 128 Zeichen. UTF-8 codiert Unicode mit 1–4 Byte und ist selbst präfixfrei: `0xxxxxxx` (1 Byte, ASCII-kompatibel), `110xxxxx 10xxxxxx`, `1110xxxx 10xxxxxx 10xxxxxx`, `11110xxx` + drei Folgebytes. Beispiel: „ä“ = U+00E4 = $$(000\,1110\,0100)_2$$ → `11000011 10100100` = `C3 A4`.

### 3 Aussagenlogik

**Syntax.** Atome $$p, q, \dots$$; Formeln werden induktiv mit $$\neg, \wedge, \vee, \to, \leftrightarrow$$ aufgebaut. **Semantik:** Eine Belegung $$I: \text{Atome} \to \{0, 1\}$$ wird rekursiv auf Formeln fortgesetzt (Wahrheitstafel).

**Begriffe.** $$F$$ ist **gültig** (Tautologie), wenn $$I(F) = 1$$ für alle $$I$$; **erfüllbar**, wenn für mindestens ein $$I$$; sonst **unerfüllbar**. **Folgerung** $$\Gamma \models F$$: Jede Belegung, die alle Formeln in $$\Gamma$$ wahr macht, macht auch $$F$$ wahr. **Äquivalenz** $$F \equiv G :\Leftrightarrow I(F) = I(G)$$ für alle $$I$$.

**Satz (B).**

$$
F \models G \iff F \to G\ \text{gültig} \iff F \wedge \neg G\ \text{unerfüllbar}; \qquad F\ \text{gültig} \iff \neg F\ \text{unerfüllbar}
$$

<details class="beweis" markdown="1">
<summary>Begründung</summary>

$$F \to G$$ ist unter $$I$$ genau dann falsch, wenn $$I(F) = 1$$ und $$I(G) = 0$$, d. h. wenn $$I$$ die Formel $$F \wedge \neg G$$ erfüllt. „$$F \to G$$ gültig“ heißt: Es gibt keine solche Belegung, also „$$F \wedge \neg G$$ unerfüllbar“. Und das heißt genau: Jede Belegung mit $$I(F) = 1$$ hat $$I(G) = 1$$, also $$F \models G$$. Deshalb kann man jede Folgerungsfrage in eine Unerfüllbarkeitsfrage übersetzen; genau darauf baut die Resolution auf.

</details>

**Wichtige Äquivalenzen:** $$p \to q \equiv \neg p \vee q$$; $$p \leftrightarrow q \equiv (p \to q) \wedge (q \to p)$$; De Morgan, Distributivgesetze, Absorption $$p \vee (p \wedge q) \equiv p$$.

**Normalformen.** **NNF:** Negation nur direkt vor Atomen. **KNF:** Konjunktion von Klauseln (Disjunktionen von Literalen). **DNF:** Disjunktion von Konjunktionen von Literalen. Jede Formel hat eine äquivalente KNF und DNF, z. B. aus der Wahrheitstafel: DNF aus den 1-Zeilen (je Zeile ein Minterm), KNF aus den 0-Zeilen (je Zeile eine Klausel, die genau diese Zeile ausschließt). Die Umformung kann exponentiell groß werden.

**Beispiel XOR** $$p \oplus q$$ (wahr in den Zeilen $$p=1,q=0$$ und $$p=0,q=1$$):

$$
\text{DNF: } (p \wedge \neg q) \vee (\neg p \wedge q), \qquad \text{KNF: } (p \vee q) \wedge (\neg p \vee \neg q)
$$

Die KNF kommt aus den 0-Zeilen $$(0,0)$$ und $$(1,1)$$: Die Klausel $$p \vee q$$ ist genau in Zeile $$(0,0)$$ falsch, $$\neg p \vee \neg q$$ genau in $$(1,1)$$.

**Funktionale Vollständigkeit (B).** $$\{\neg, \wedge\}$$, $$\{\neg, \vee\}$$ und $$\{\text{NAND}\}$$ allein können jede Boolesche Funktion darstellen:

$$
\neg p \equiv p \uparrow p, \qquad p \wedge q \equiv (p \uparrow q) \uparrow (p \uparrow q), \qquad p \vee q \equiv (p \uparrow p) \uparrow (q \uparrow q)
$$

($$\uparrow$$ = NAND.) Weil jede Funktion eine DNF hat, also aus $$\neg, \wedge, \vee$$ besteht, reicht es, diese drei durch NAND auszudrücken. Dasselbe gilt für NOR. $$\{\wedge, \vee\}$$ allein ist **nicht** vollständig: Damit lassen sich nur monotone Funktionen bauen, $$\neg$$ also nicht.

**Resolution (B).** Aus Klauseln $$C_1 \cup \{p\}$$ und $$C_2 \cup \{\neg p\}$$ folgt die Resolvente $$C_1 \cup C_2$$. Eine Klauselmenge ist genau dann unerfüllbar, wenn sich die leere Klausel $$\square$$ ableiten lässt (korrekt und widerlegungsvollständig). SAT (Erfüllbarkeit) ist NP-vollständig.

**Beispiel.** Zeige $$\{p \vee q,\ p \to r,\ q \to r\} \models r$$. Dazu $$\{p \vee q,\ \neg p \vee r,\ \neg q \vee r,\ \neg r\}$$ als unerfüllbar nachweisen:

1. $$\{p, q\}$$ und $$\{\neg p, r\}$$ ergeben $$\{q, r\}$$
2. $$\{q, r\}$$ und $$\{\neg q, r\}$$ ergeben $$\{r\}$$
3. $$\{r\}$$ und $$\{\neg r\}$$ ergeben $$\square$$

### 4 Binäre Entscheidungsdiagramme (BDDs)

**Shannon-Zerlegung (B).**

$$
f = (\neg x \wedge f\restriction_{x=0})\ \vee\ (x \wedge f\restriction_{x=1})
$$

Eine Funktion wird an einer Variable aufgespalten in die Fälle $$x = 0$$ und $$x = 1$$. Wiederholt man das für alle Variablen, entsteht ein Entscheidungsbaum.

**Definition.** Ein BDD ist ein gerichteter azyklischer Graph mit den Terminalknoten $$0$$ und $$1$$ und inneren Knoten mit Variable $$x$$, 0-Kante (low) und 1-Kante (high). **Geordnet (OBDD):** Auf jedem Pfad treten die Variablen in einer festen Reihenfolge auf. **Reduziert (ROBDD):** (i) keine Knoten mit low = high (Eliminationsregel), (ii) keine zwei isomorphen Teilgraphen (Verschmelzungsregel).

**Kanonizität (B).** Für eine feste Variablenordnung hat jede Boolesche Funktion genau ein ROBDD. Folgen: Zwei Funktionen sind äquivalent genau dann, wenn ihre ROBDDs gleich sind; $$f$$ ist Tautologie genau dann, wenn das ROBDD nur der Terminal $$1$$ ist; erfüllbar genau dann, wenn es nicht der Terminal $$0$$ ist.

**Beispiel** $$f = (x \wedge y) \vee z$$ mit Ordnung $$x < y < z$$:
$$f\restriction_{x=0} = z$$ und $$f\restriction_{x=1} = y \vee z$$; weiter $$(y \vee z)\restriction_{y=0} = z$$ und $$(y \vee z)\restriction_{y=1} = 1$$. Der $$z$$-Knoten wird geteilt (Verschmelzungsregel):

| Knoten | Variable | low (0-Kante) | high (1-Kante) |
|---|---|---|---|
| $$n_1$$ (Wurzel) | $$x$$ | $$n_3$$ | $$n_2$$ |
| $$n_2$$ | $$y$$ | $$n_3$$ | Terminal 1 |
| $$n_3$$ | $$z$$ | Terminal 0 | Terminal 1 |

Drei innere Knoten statt sieben im vollständigen Entscheidungsbaum.

Die Größe hängt stark von der Ordnung ab: Für $$x_1 y_1 \vee x_2 y_2 \vee \dots \vee x_n y_n$$ ist das ROBDD bei verzahnter Ordnung $$x_1 < y_1 < x_2 < y_2 < \dots$$ linear groß, bei getrennter Ordnung $$x_1 < \dots < x_n < y_1 < \dots < y_n$$ exponentiell (man muss sich alle $$x$$-Werte merken, bevor das erste $$y$$ kommt). Verknüpfungen ($$\wedge$$, $$\vee$$, …) zweier ROBDDs berechnet man per rekursiver Shannon-Zerlegung (Apply-Algorithmus).

### 5 Digitalschaltungen

Eine **Schaltfunktion** $$f: \{0,1\}^n \to \{0,1\}$$ wird durch Gatter (AND, OR, NOT, NAND, NOR, XOR) realisiert. **Minterm** = Konjunktion aller Variablen (negiert oder nicht), entspricht genau einer 1-Zeile; **kanonische DNF** = Disjunktion aller Minterme der 1-Zeilen.

**KV-Diagramm.** Benachbarte Felder (auch über den Rand hinweg) unterscheiden sich in genau einer Variable (Gray-Code-Anordnung). Fasst man rechteckige Blöcke von $$2^k$$ Einsen möglichst groß zusammen, fällt jeweils die Variable weg, die sich im Block ändert; die Blöcke ergeben eine minimale DNF.

**Beispiel** $$f(a,b,c) = \sum m(1, 3, 5, 6, 7)$$:

| $$a$$ / $$bc$$ | 00 | 01 | 11 | 10 |
|---|:-:|:-:|:-:|:-:|
| 0 | 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 1 | 1 |

Die Spalten $$01$$ und $$11$$ bilden einen Viererblock (dort ist $$c = 1$$, $$a$$ und $$b$$ ändern sich) → $$c$$. Die Felder $$a = 1$$, $$bc \in \{11, 10\}$$ bilden einen Zweierblock → $$a \wedge b$$. Minimale DNF: $$f = c \vee (a \wedge b)$$.

**Addierer (B).**

$$
\text{Halbaddierer: } s = a \oplus b,\ c = a \wedge b; \qquad \text{Volladdierer: } s = a \oplus b \oplus c_{in},\ c_{out} = (a \wedge b) \vee \bigl(c_{in} \wedge (a \oplus b)\bigr)
$$

| $$a$$ | $$b$$ | $$c_{in}$$ | $$c_{out}$$ | $$s$$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 |

$$(c_{out}\, s)$$ ist die Binärdarstellung von $$a + b + c_{in}$$. Ein Volladdierer besteht aus zwei Halbaddierern und einem OR. **Ripple-Carry-Addierer** für $$n$$ Bit = $$n$$ Volladdierer in Kette; der Übertrag läuft durch alle Stufen, die Laufzeit ist linear in $$n$$. Subtraktion im Zweierkomplement: $$a - b = a + \overline{b} + 1$$, also $$b$$ invertieren und $$c_{in} = 1$$ setzen.

**Multiplexer:** wählt über $$k$$ Steuerbits einen von $$2^k$$ Eingängen; 2:1-MUX: $$y = (\neg s \wedge a) \vee (s \wedge b)$$.

**Schaltnetz vs. Schaltwerk.** Schaltnetz: Ausgang hängt nur von den aktuellen Eingängen ab (kombinatorisch, keine Rückkopplung). Schaltwerk: mit Speicher (Rückkopplung).

- **RS-Latch** (z. B. aus zwei NOR): $$S = 1$$ setzt, $$R = 1$$ löscht, $$S = R = 0$$ hält den Zustand, $$S = R = 1$$ ist verboten.
- **D-Flipflop:** übernimmt $$D$$ bei der Taktflanke und hält es bis zur nächsten.
- **Register** = mehrere D-Flipflops am selben Takt; **Zähler** = Register plus Addierer, der jeden Takt $$+1$$ rechnet.

Schaltwerke sind endliche Automaten: Der Inhalt der Flipflops ist der Zustand (Bezug zu Abschnitt 7).

### 6 Prädikatenlogik (erster Stufe)

**Syntax.** Eine Signatur besteht aus Konstanten-, Funktions- und Prädikatensymbolen. **Terme:** Variablen, Konstanten, $$f(t_1, \dots, t_n)$$. **Formeln:** $$P(t_1, \dots, t_n)$$, $$t_1 = t_2$$, Junktoren, $$\forall x\, F$$, $$\exists x\, F$$. Eine Variable ist **gebunden**, wenn sie im Bereich eines Quantors über sie steht, sonst **frei**; in $$\forall x\, P(x, y)$$ ist $$x$$ gebunden und $$y$$ frei. **Satz** = Formel ohne freie Variablen.

**Semantik.** Eine Struktur (Interpretation) $$I$$ besteht aus einem nichtleeren Universum $$U$$ und Deutungen aller Symbole. Mit einer Variablenbelegung erhält jede Formel einen Wahrheitswert:

$$
I \models \forall x\, F \iff \text{für alle } u \in U:\ I[x \mapsto u] \models F, \qquad I \models \exists x\, F \iff \text{für ein } u \in U:\ I[x \mapsto u] \models F
$$

Modell, gültig, erfüllbar und Folgerung sind analog zur Aussagenlogik definiert.

**Beispiel.** $$F = \forall x\, \exists y\, (x < y)$$. In der Struktur mit $$U = \mathbb N$$ und $$<$$ als „kleiner“ ist $$F$$ wahr. Mit $$U = \{0, 1, 2\}$$ ist $$F$$ falsch ($$x = 2$$ hat keinen größeren Nachfolger). $$F$$ ist also erfüllbar, aber nicht gültig.

**Übersetzen.** „Jeder Student besucht eine LVA“: $$\forall x\, \bigl(S(x) \to \exists y\, (L(y) \wedge B(x,y))\bigr)$$. Faustregel: $$\forall$$ geht mit $$\to$$, $$\exists$$ mit $$\wedge$$. $$\forall x\, (S(x) \wedge \dots)$$ würde behaupten, dass alles ein Student ist; $$\exists y\, (L(y) \to \dots)$$ wäre schon wahr, sobald es irgendetwas gibt, das keine LVA ist.

**Äquivalenzen (B).**

- $$\neg \forall x\, F \equiv \exists x\, \neg F$$ und $$\neg \exists x\, F \equiv \forall x\, \neg F$$
- $$\forall x (F \wedge G) \equiv \forall x F \wedge \forall x G$$ und $$\exists x (F \vee G) \equiv \exists x F \vee \exists x G$$
- aber $$\forall x (F \vee G) \not\equiv \forall x F \vee \forall x G$$ (jede Zahl ist gerade oder ungerade, aber nicht alle sind gerade oder alle ungerade)
- $$\exists y\, \forall x\, F \models \forall x\, \exists y\, F$$, nicht umgekehrt

Jede Formel hat eine äquivalente **Pränexnormalform** (alle Quantoren vorne), z. B. $$\forall x P(x) \to \exists y Q(y) \equiv \exists x\, \exists y\, (\neg P(x) \vee Q(y))$$. Achtung: Ein $$\forall$$ im Vordersatz einer Implikation wird beim Herausziehen zu $$\exists$$. Gültigkeit ist in der Prädikatenlogik **unentscheidbar** (Church/Turing), anders als in der Aussagenlogik.

### 7 Endliche Automaten

**DEA.** $$A = (Q, \Sigma, \delta, q_0, F)$$ mit $$\delta: Q \times \Sigma \to Q$$. Erweiterte Übergangsfunktion $$\delta^{*}(q, \varepsilon) = q$$, $$\delta^{*}(q, wa) = \delta(\delta^{*}(q, w), a)$$; akzeptierte Sprache

$$
L(A) = \{w \in \Sigma^{*}:\ \delta^{*}(q_0, w) \in F\}
$$

**Beispiel:** Binärzahlen (höchstwertiges Bit zuerst), die durch 3 teilbar sind. Zustand = Rest bisher; ein neues Bit $$b$$ macht aus dem Rest $$r$$ den Rest $$(2r + b) \bmod 3$$.

| Zustand | Eingabe 0 | Eingabe 1 |
|---|:-:|:-:|
| → $$r_0$$ (akzeptierend) | $$r_0$$ | $$r_1$$ |
| $$r_1$$ | $$r_2$$ | $$r_0$$ |
| $$r_2$$ | $$r_1$$ | $$r_2$$ |

Lauf für $$110 = 6$$: $$r_0 \xrightarrow{1} r_1 \xrightarrow{1} r_0 \xrightarrow{0} r_0$$, akzeptiert.

**NEA.** $$\delta: Q \times \Sigma \to \mathcal P(Q)$$ (optional mit $$\varepsilon$$-Übergängen); $$w$$ wird akzeptiert, wenn **mindestens ein** Lauf in $$F$$ endet.

**Potenzmengenkonstruktion (B).** Zu jedem NEA mit $$n$$ Zuständen gibt es einen äquivalenten DEA mit höchstens $$2^n$$ Zuständen: DEA-Zustände sind Mengen von NEA-Zuständen, nur die erreichbaren werden konstruiert. DEA und NEA erkennen also dieselben Sprachen.

**Beispiel:** NEA für „endet auf 01“ über $$\{0,1\}$$: $$q_0$$ mit Schleife auf 0 und 1, $$q_0 \xrightarrow{0} q_1$$, $$q_1 \xrightarrow{1} q_2$$, $$F = \{q_2\}$$.

| DEA-Zustand | 0 | 1 |
|---|---|---|
| → $$\{q_0\}$$ | $$\{q_0, q_1\}$$ | $$\{q_0\}$$ |
| $$\{q_0, q_1\}$$ | $$\{q_0, q_1\}$$ | $$\{q_0, q_2\}$$ |
| $$\{q_0, q_2\}$$ (akzeptierend) | $$\{q_0, q_1\}$$ | $$\{q_0\}$$ |

Nur 3 der $$2^3 = 8$$ möglichen Teilmengen sind erreichbar. Akzeptierend sind alle Teilmengen, die einen NEA-Endzustand enthalten.

**Minimierung.** Zustände $$p, q$$ sind äquivalent, wenn für alle $$w$$ gilt: $$\delta^{*}(p,w) \in F \Leftrightarrow \delta^{*}(q,w) \in F$$. Vorgehen: unerreichbare Zustände streichen; Tabellenverfahren: zuerst alle Paare (End-, Nicht-Endzustand) markieren, dann wiederholt $$(p,q)$$ markieren, wenn ein Zeichen $$a$$ das Paar auf ein bereits markiertes Paar führt; nicht markierte Paare verschmelzen. Ergebnis ist der eindeutige Minimalautomat (Myhill–Nerode).

#### Automaten mit Ausgabe: Moore und Mealy

Laut LVA-Beschreibung sind Moore- und Mealy-Automaten sowie die Realisierung von Automaten Stoff. Statt zu akzeptieren, erzeugen sie zu jedem Eingabewort ein Ausgabewort über einem Ausgabealphabet $$\Delta$$.

- **Moore-Automat** $$(Q, \Sigma, \Delta, \delta, \lambda, q_0)$$ mit $$\lambda: Q \to \Delta$$: Die Ausgabe hängt nur vom **Zustand** ab und steht im Zustandskreis.
- **Mealy-Automat** mit $$\lambda: Q \times \Sigma \to \Delta$$: Die Ausgabe hängt von **Zustand und Eingabe** ab und steht an der Kante (`Eingabe/Ausgabe`).

**Beispiel: „01“ erkennen.** Eingabe ist ein Bitstrom, die Ausgabe soll genau dann 1 sein, wenn die letzten beiden Bits 0 und dann 1 waren.

| Mealy | Eingabe 0 | Eingabe 1 |
|---|---|---|
| → $$A$$ (Start oder letztes Bit 1) | $$B$$ / 0 | $$A$$ / 0 |
| $$B$$ (letztes Bit 0) | $$B$$ / 0 | $$A$$ / **1** |

| Moore | Eingabe 0 | Eingabe 1 | Ausgabe $$\lambda$$ |
|---|---|---|---|
| → $$S$$ (Start oder letztes Bit 1, nicht nach 0) | $$Z$$ | $$S$$ | 0 |
| $$Z$$ (letztes Bit 0) | $$Z$$ | $$E$$ | 0 |
| $$E$$ (gerade „01“ gelesen) | $$Z$$ | $$S$$ | **1** |

Für die Eingabe 0101 liefern beide nach jedem Zeichen 0, 1, 0, 1. Der Moore-Automat braucht einen Zustand mehr, weil „gerade 01 gesehen“ ein eigener Zustand sein muss, während der Mealy-Automat die 1 direkt an die Kante $$B \xrightarrow{1} A$$ schreibt. (Der Moore-Automat gibt außerdem schon im Startzustand $$\lambda(q_0)$$ aus, also ein Zeichen mehr.)

**Umwandlung (B).**

- *Moore → Mealy:* gleiche Zustände, $$\lambda'(q, a) = \lambda(\delta(q, a))$$, also die Ausgabe des Zielzustands an die Kante schreiben.
- *Mealy → Moore:* Jeden Zustand nach der Ausgabe auf seinen eingehenden Kanten aufspalten, Zustände $$(q, o)$$ mit $$\lambda(q, o) = o$$. Das ergibt höchstens $$\lvert Q\rvert \cdot \lvert \Delta\rvert$$ Zustände. Im Beispiel wird $$A$$ zu $$S$$ (über Ausgabe 0 erreicht) und $$E$$ (über Ausgabe 1 erreicht), $$B$$ zu $$Z$$.

#### Realisierung von Automaten als Schaltwerk

Ein endlicher Automat wird zur Hardware, indem man den Zustand in Flipflops speichert und Übergangs- und Ausgabefunktion als Schaltnetze baut (Bezug zu Abschnitt 5):

1. Zustände binär codieren: $$\lceil \log_2 \lvert Q\rvert \rceil$$ Flipflops.
2. Codierte Übergangstabelle aufstellen: aktueller Zustand und Eingabe → nächster Zustand.
3. Für jedes D-Flipflop die Schaltfunktion „nächstes Zustandsbit“ ablesen und minimieren (KV-Diagramm).
4. Ausgabefunktion als Schaltnetz: bei Moore nur aus den Zustandsbits, bei Mealy aus Zustandsbits und Eingabe.

**Beispiel: der Mealy-Automat oben.** Codierung $$A = 0$$, $$B = 1$$, ein Flipflop mit Zustandsbit $$q$$, Eingabe $$x$$:

| $$q$$ | $$x$$ | $$q'$$ | $$y$$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

Abgelesen: $$q' = \neg x$$ und $$y = q \wedge x$$. Die Schaltung ist also ein D-Flipflop, dessen Eingang das invertierte $$x$$ bekommt, und ein UND-Gatter aus gespeichertem Bit und aktuellem Eingang. Das Flipflop „merkt sich, ob das letzte Bit 0 war“.

Wie die Folien Moore- und Mealy-Automaten notieren (Tupel, Kantenbeschriftung), steht in den Folien zum Kapitel. Die Begriffe selbst sind laut LVA-Beschreibung gesichert.
{: .notice--info}

### 8 Formale Sprachen

**Grundbegriffe.** Alphabet $$\Sigma$$, Wörter, leeres Wort $$\varepsilon$$, $$\Sigma^{*}$$ = alle Wörter, Sprache $$L \subseteq \Sigma^{*}$$. Operationen: Vereinigung, Konkatenation $$L_1 L_2$$, Kleene-Stern $$L^{*} = \bigcup_{n \ge 0} L^{n}$$ (mit $$L^0 = \{\varepsilon\}$$).

**Reguläre Ausdrücke:** $$\emptyset$$, $$\varepsilon$$, $$a \in \Sigma$$, und falls $$r, s$$ regulär sind, auch $$r + s$$ (Vereinigung), $$rs$$ (Konkatenation), $$r^{*}$$. Beispiele über $$\{0,1\}$$: „endet auf 01“ $$= (0+1)^{*}01$$; „enthält 11“ $$= (0+1)^{*}11(0+1)^{*}$$; „gerade Länge“ $$= ((0+1)(0+1))^{*}$$.

**Satz von Kleene (B).** Für $$L \subseteq \Sigma^{*}$$ sind äquivalent: $$L$$ wird von einem regulären Ausdruck beschrieben; von einem NEA erkannt; von einem DEA erkannt; von einer rechtslinearen (Typ-3-)Grammatik erzeugt. Reguläre Sprachen sind abgeschlossen unter Vereinigung, Schnitt, Komplement, Konkatenation und Stern. (Komplement: im DEA End- und Nicht-Endzustände tauschen. Schnitt: Produktautomat.)

**Pumping-Lemma (B).** Ist $$L$$ regulär, so gibt es $$n \ge 1$$, sodass jedes $$w \in L$$ mit $$\lvert w \rvert \ge n$$ zerlegbar ist als $$w = xyz$$ mit

$$
\lvert xy \rvert \le n, \qquad \lvert y \rvert \ge 1, \qquad \forall k \ge 0:\ x y^{k} z \in L
$$

Idee: $$n$$ = Zustandszahl eines DEA. Ein Wort der Länge $$\ge n$$ besucht in den ersten $$n$$ Schritten einen Zustand doppelt (Schubfachprinzip); die Schleife dazwischen ist $$y$$ und kann beliebig oft durchlaufen werden.

<details class="beweis" markdown="1">
<summary>Standardbeispiel: {aⁿbⁿ : n ≥ 0} ist nicht regulär</summary>

Angenommen, $$L = \{a^m b^m : m \ge 0\}$$ ist regulär, und $$n$$ ist die Konstante aus dem Pumping-Lemma. Wähle $$w = a^n b^n \in L$$, $$\lvert w \rvert = 2n \ge n$$. Für **jede** Zerlegung $$w = xyz$$ mit $$\lvert xy \rvert \le n$$ und $$\lvert y \rvert \ge 1$$ besteht $$xy$$ nur aus $$a$$, also $$y = a^{j}$$ mit $$j \ge 1$$. Dann ist $$x y^{0} z = a^{n-j} b^{n} \notin L$$. Widerspruch.

Wichtig für die Form: Das Wort $$w$$ darf man wählen, die Zerlegung nicht. Man muss zeigen, dass **jede** zulässige Zerlegung scheitert.

</details>

**Grammatiken.** $$G = (V, \Sigma, P, S)$$ mit Variablen $$V$$, Terminalen $$\Sigma$$, Produktionen $$P$$ und Startsymbol $$S$$; $$L(G) = \{w \in \Sigma^{*} : S \Rightarrow^{*} w\}$$.

**Chomsky-Hierarchie:** Typ 3 (regulär, $$A \to aB \mid a \mid \varepsilon$$) $$\subset$$ Typ 2 (kontextfrei, $$A \to \alpha$$) $$\subset$$ Typ 1 (kontextsensitiv) $$\subset$$ Typ 0 (allgemein).

- $$\{a^n b^n\}$$ ist kontextfrei ($$S \to aSb \mid \varepsilon$$, Ableitung $$S \Rightarrow aSb \Rightarrow aaSbb \Rightarrow aabb$$), aber nicht regulär.
- Typ 3 für „endet auf 01“: $$S \to 0S \mid 1S \mid 0A$$, $$A \to 1$$.
- Korrekt geklammerte Ausdrücke: $$S \to (S)S \mid \varepsilon$$, kontextfrei, nicht regulär.

### 9 Petri-Netze

**Definition.** Ein Petri-Netz $$N = (P, T, F, W, M_0)$$ hat Stellen $$P$$ (Kreise), Transitionen $$T$$ (Balken), Kanten $$F \subseteq (P \times T) \cup (T \times P)$$, Gewichte $$W$$ und eine Anfangsmarkierung $$M_0: P \to \mathbb N$$ (Marken auf den Stellen).

**Schaltregel (B).** $$t$$ ist in $$M$$ aktiviert, wenn $$M(p) \ge W(p,t)$$ für alle Vorstellen $$p$$. Schalten von $$t$$ führt zu

$$
M'(p) = M(p) - W(p,t) + W(t,p) \qquad \text{für alle } p \in P
$$

**Eigenschaften.** Der **Erreichbarkeitsgraph** enthält alle von $$M_0$$ erreichbaren Markierungen. $$N$$ ist **$$k$$-beschränkt**, wenn keine erreichbare Markierung mehr als $$k$$ Marken auf einer Stelle hat (**sicher** = 1-beschränkt); **verklemmungsfrei**, wenn in jeder erreichbaren Markierung eine Transition aktiviert ist; **lebendig**, wenn jede Transition von jeder erreichbaren Markierung aus wieder aktivierbar ist.

**Zustandsgleichung.** Mit der Inzidenzmatrix $$C$$ ($$C_{p,t} = W(t,p) - W(p,t)$$) und dem Schaltvektor $$x$$ (wie oft jede Transition geschaltet hat):

$$
M = M_0 + C x; \qquad y^{T} C = 0 \ \Rightarrow\ y^{T} M = y^{T} M_0 \ \text{für alle erreichbaren } M \quad (\text{S-/Stelleninvariante})
$$

Die Zustandsgleichung ist notwendig, aber nicht hinreichend für Erreichbarkeit (eine Lösung $$x$$ sagt nicht, dass es eine Schaltreihenfolge gibt, in der jede Transition auch aktiviert ist).

**Beispiel: gegenseitiger Ausschluss.** Zwei Prozesse, eine Sperre. Stellen: $$p_1$$ (Prozess 1 wartet), $$p_2$$ (Prozess 1 kritisch), $$p_3$$ (Sperre frei), $$p_4$$ (Prozess 2 wartet), $$p_5$$ (Prozess 2 kritisch). Transitionen: $$t_1$$: $$p_1, p_3 \to p_2$$ (eintreten), $$t_2$$: $$p_2 \to p_1, p_3$$ (verlassen), $$t_3$$, $$t_4$$ analog für Prozess 2. $$M_0 = (1, 0, 1, 1, 0)$$.

$$
C = \begin{pmatrix} -1 & 1 & 0 & 0 \\ 1 & -1 & 0 & 0 \\ -1 & 1 & -1 & 1 \\ 0 & 0 & -1 & 1 \\ 0 & 0 & 1 & -1 \end{pmatrix} \quad (\text{Zeilen } p_1 \dots p_5,\ \text{Spalten } t_1 \dots t_4)
$$

- Schalten von $$t_1$$: $$M_0 + C e_1 = (0, 1, 0, 1, 0)$$. Jetzt ist $$t_3$$ nicht aktiviert ($$p_3$$ leer).
- Erreichbar sind genau $$(1,0,1,1,0)$$, $$(0,1,0,1,0)$$ und $$(1,0,0,0,1)$$: Das Netz ist sicher, verklemmungsfrei und lebendig.
- $$y = (0, 1, 1, 0, 1)$$ erfüllt $$y^{T} C = 0$$ (jede Spalte nachrechnen). Also ist $$M(p_2) + M(p_3) + M(p_5) = y^{T} M_0 = 1$$ für jede erreichbare Markierung, und beide Prozesse können **nie gleichzeitig** kritisch sein. So beweist man Sicherheitseigenschaften mit Invarianten.
- In $$M_0$$ stehen $$t_1$$ und $$t_3$$ in **Konflikt**: Beide sind aktiviert, aber das Schalten der einen deaktiviert die andere (gemeinsame Vorstelle $$p_3$$). **Nebenläufig** wären zwei Transitionen, die gleichzeitig aktiviert sind und sich keine Marken teilen.

Typische Modelle: Erzeuger–Verbraucher (Puffer als Stelle), gegenseitiger Ausschluss, Nebenläufigkeit vs. Konflikt.

## Theoriefragen-Checkliste

Die (B)-Punkte als Liste für die Testvorbereitung: jeden in zwei, drei Sätzen ohne Unterlagen beantworten können.

| Thema | Frage | Kern der Antwort |
|---|---|---|
| 1 | Wann gibt es im Zweierkomplement einen Überlauf? | gleiche Vorzeichen der Summanden, anderes Vorzeichen im Ergebnis |
| 1 | Warum gibt es denormalisierte Zahlen? | schließen die Lücke um 0, sanfter Unterlauf |
| 1 | Warum ist Gleitkomma-Addition nicht assoziativ? | nach jeder Operation wird gerundet, Absorption |
| 1 | Was ist Auslöschung? | Subtraktion fast gleicher Zahlen, Rundungsfehler werden relativ groß |
| 1 | Wozu Guard, Round und Sticky? | korrekt runden wie bei exaktem Rechnen; Sticky unterscheidet Gleichstand von „knapp darüber“ |
| 2 | Kraft-Ungleichung | Präfixcode existiert genau dann, wenn $$\sum 2^{-l_i} \le 1$$ |
| 2 | Quellcodierungssatz | $$H \le \bar L$$, und $$\bar L < H + 1$$ ist erreichbar |
| 2 | Wie viele Fehler erkennt/korrigiert ein Code? | $$d_{\min} - 1$$ bzw. $$\lfloor (d_{\min}-1)/2 \rfloor$$ |
| 3 | Zusammenhang Folgerung, Gültigkeit, Unerfüllbarkeit | $$F \models G$$ gdw. $$F \wedge \neg G$$ unerfüllbar |
| 3 | Warum ist NAND funktional vollständig? | $$\neg$$, $$\wedge$$, $$\vee$$ ausdrückbar, jede Funktion hat eine DNF |
| 3 | Resolution korrekt und widerlegungsvollständig | unerfüllbar gdw. $$\square$$ ableitbar |
| 4 | Kanonizität von ROBDDs | eindeutig bei fester Ordnung; Äquivalenztest = Gleichheit |
| 5 | Volladdierer, Ripple-Carry | Formeln oben; Laufzeit linear in $$n$$ |
| 6 | Quantoren und Junktoren vertauschen | $$\forall$$ mit $$\wedge$$, $$\exists$$ mit $$\vee$$; nicht umgekehrt |
| 7 | Potenzmengenkonstruktion | Teilmengen als Zustände, höchstens $$2^n$$ |
| 8 | Satz von Kleene | RegEx = NEA = DEA = Typ 3 |
| 8 | Pumping-Lemma | Schleife im DEA; Anwendung per Widerspruch |
| 9 | Schaltregel, Zustandsgleichung, Invariante | $$M' = M - W(\cdot,t) + W(t,\cdot)$$; $$y^{T} C = 0$$ |

## Selbsttest

<details class="beweis" markdown="1">
<summary>1. Welchen Wert hat 1000 0000 im 8-Bit-Zweierkomplement, und warum gibt es dazu kein positives Gegenstück?</summary>

$$-128$$. Der Bereich ist $$[-128, 127]$$; $$+128$$ ist nicht darstellbar. Rechnet man $$-x = \overline{x} + 1$$, erhält man wieder `1000 0000`.

</details>

<details class="beweis" markdown="1">
<summary>2. Welche Zahl ist 0x40490000 als IEEE-754-Single?</summary>

Bits `0 10000000 10010010000000000000000`. Exponent $$128 - 127 = 1$$, Mantisse $$(1.1001001)_2 = 1 + 0.5 + 0.0625 + 0.0078125 = 1.5703125$$. Wert $$1.5703125 \cdot 2 = 3.140625$$, eine grobe Näherung an $$\pi$$.

</details>

<details class="beweis" markdown="1">
<summary>3. Ist {0, 01, 011} eindeutig decodierbar? Ist es ein Präfixcode?</summary>

Kein Präfixcode ($$0$$ ist Präfix von $$01$$). Trotzdem eindeutig decodierbar: Jedes Codewort beginnt mit $$0$$, und danach folgen nur Einsen. Man trennt also vor jeder $$0$$. Allerdings erst, wenn man das nächste Zeichen gesehen hat; „sofort decodierbar“ ist der Code nicht.

</details>

<details class="beweis" markdown="1">
<summary>4. Ist p → (q → p) gültig, erfüllbar oder unerfüllbar?</summary>

Gültig. Falsch könnte die Formel nur sein, wenn $$p = 1$$ und $$q \to p$$ falsch, also $$q = 1$$ und $$p = 0$$. Widerspruch zu $$p = 1$$.

</details>

<details class="beweis" markdown="1">
<summary>5. Ist {w ∈ {a,b}* : w hat gleich viele a wie b} regulär?</summary>

Nein. Wäre sie regulär, dann auch der Schnitt mit der regulären Sprache $$a^{*} b^{*}$$. Dieser Schnitt ist $$\{a^n b^n\}$$, und die ist nicht regulär. (Abschlusseigenschaften sparen oft ein eigenes Pumping-Argument.)

</details>

## Offene Punkte

- Kreuzerlübungsgruppe in TISS anmelden (bis 13.11.2026).
- Test 1 und Test 2 in TISS anmelden, Hörsaaleinteilung prüfen.
- Alte Testangaben aus TUWEL herunterladen und die Testaufteilung der Themen prüfen.
- Teil B Abschnitte 2–9 mit den Vorlesungsfolien abgleichen, sobald sie da sind.
- Vorschlag für die Vertiefung: zuerst Aussagenlogik und BDDs, weil beides in Test 1 am 26.11. vorkommt und das Kreuzerlblatt dazu ansteht.

## Quellen

- Vorbesprechung GDS 2026W, Dvořák; Foliensätze *02 Zahlendarstellung* und *03 Numerik* (Neumann)
- GDS-Übergangsbestimmungen (Dvořák)
- [Open Logic Project, *Sets, Logic, Computation*](https://slc.openlogicproject.org/)
