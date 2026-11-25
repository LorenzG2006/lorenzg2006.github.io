---
title: "Denkweisen der Informatik – Kompendium"
kuerzel: DWI
lva_nr: "187.B12"
typ: VU
semester: 2026W
ects: 5.5
sws: 4.0
status: laufend
tiss: "https://tiss.tuwien.ac.at/course/courseDetails.xhtml?courseNr=187B12&semester=2026W"
excerpt: "DWI ausführlich: Lernquellen, Lernplan und eine Zusammenfassung der Denkweisen der Informatik, vom Beweisen über das Entwerfen bis zum Experiment."
math: true
unlisted: true       # Entwurf, parallel zur kurzen LVA-Seite
---

{% include toc title="Inhalt" %}

## Überblick

DWI gibt einen Überblick über die Informatik aus der Sicht ihrer **Arbeits- und Denkweisen**, eine Art angewandte Wissenschaftstheorie. Ziel ist, verschiedene **Problemlösungsansätze** zu unterscheiden, für ein Problem den passenden auszuwählen und **kritisch über die Gestaltung technischer Systeme** nachzudenken. Anders als in den Mathe-LVAs geht es weniger um Rechnen als um Begriffe, Argumente und Reflexion.

Mir liegt für DWI nur die Kurzbeschreibung der LVA vor. Die Kapitel unten sind meine eigene Gliederung der dort genannten Themen und Standardwissen der Wissenschaftstheorie. Alles mit „mit LVA abgleichen“ markierte muss ich mit Folien, TISS und TUWEL vergleichen.
{: .notice--warning}

| **LVA** | VU 187.B12, 4 SWS, 5.5 ECTS |
| **Inhalt laut LVA-Beschreibung** | Informatik aus Sicht ihrer Arbeits- und Denkweisen, angewandte Wissenschaftstheorie, Problemlösungsansätze unterscheiden und auswählen, kritisches Nachdenken über die Gestaltung technischer Systeme |
| **Vorlesung** | laut Wochenplan Di 14–16 und Do 10–12 Uhr |
| **Abgaben, Beurteilung** | nicht belegt: in TISS/TUWEL prüfen |

### Wofür ich welches Kapitel brauche

| Kapitel | Wofür |
|---|---|
| 1 Informatik als Wissenschaft | Einordnen, wo im Studium welche Denkweise gebraucht wird |
| 2 Wissenschaftstheoretische Grundbegriffe | jedes Argument, jede Studie, später die Bachelorarbeit |
| 3 Formal-mathematische Denkweise | ADM, Analysis, Theoretische Informatik, Verifikation |
| 4 Ingenieurwissenschaftliche Denkweise | Software Engineering, Projekte, Programmieren |
| 5 Empirische Denkweise | Statistik, HCI, Messungen, Benchmarks |
| 6 Modelle und Abstraktion | Datenbanken, Modellierung, Simulation, Machine Learning |
| 7 Problemlösen und Computational Thinking | Algorithmen, Programmieren, jede Übungsaufgabe |
| 8 Informatik und Gesellschaft | Ethik, Datenschutz, Verantwortung im Beruf |

## Teil A1 – Kostenlose Lernquellen

Primärquelle sind die Unterlagen der LVA in TUWEL. Für die Grundbegriffe der Wissenschaftstheorie sind frei verfügbare Nachschlagewerke gut.

### Die Quellen

| Quelle | Sprache | Wofür |
|---|---|---|
| Folien, Aufzeichnungen und Aufgaben der LVA (TUWEL) | DE | Primärquelle, Begriffe und Gewichtung |

### Thema → Quellen

| Thema | Quelle |
|---|---|
| 1 Informatik als Wissenschaft | SEP *Philosophy of Computer Science*; Denning 1989; Tedre |
| 2 Wissenschaftstheorie | SEP *Scientific Method*, *Karl Popper* |
| 3 Formal-mathematisch | SEP *Philosophy of Computer Science* (Korrektheit, Verifikation) |
| 4 Ingenieurwissenschaftlich | Folien; Software-Engineering-Lehrbücher |
| 5 Empirisch | SEP *Scientific Method*; Statistik-Unterlagen |
| 6 Modelle | Folien; Stachowiak (Modellbegriff) |
| 7 Problemlösen | Wing 2006; Polya |
| 8 Gesellschaft | Folien; Ethik-Kodizes von ACM und Gesellschaft für Informatik |

## Teil A2 – Lernplan

Ich weiß nicht, in welcher Reihenfolge die LVA die Themen bringt. Der Plan geht meine Kapitel in Zwei-Wochen-Blöcken durch und lässt Platz für Abgaben, deren Termine ich aus TUWEL nachtrage.

| Woche | Kapitel | Tun |
|---|---|---|
| 16.–22.11. | 1 Informatik als Wissenschaft, 2 Grundbegriffe | Begriffe in eigenen Worten, je ein Beispiel aus der Informatik |
| 23.–29.11. | 3 Formal-mathematisch | ein kleines Programm spezifizieren und eine Eigenschaft begründen |
| 30.11.–06.12. | 4 Ingenieurwissenschaftlich | einen Entwurf mit zwei Alternativen und Trade-offs beschreiben |
| 07.–13.12. | 5 Empirisch | ein Mini-Experiment planen (Hypothese, Variablen, Störgrößen) |
| 14.–20.12. | 6 Modelle und Abstraktion | drei Modelle aus anderen LVAs nach Stachowiak analysieren |
| Weihnachtsferien | Wiederholung 1–6 | [Theoriefragen-Checkliste](#theoriefragen-checkliste) mündlich durchgehen |
| 07.–17.01. | 7 Problemlösen | eine Übungsaufgabe aus EP1 oder ADM bewusst mit den Schritten lösen |
| 18.–31.01. | 8 Informatik und Gesellschaft, Gesamtwiederholung | ein aktuelles System nach Werten und Betroffenen analysieren |

**Wochenroutine**

- Folien der Woche lesen und pro Begriff eine Karteikarte: Definition, Beispiel, Gegenbeispiel.
- Einmal pro Woche ein Beispiel aus einer anderen LVA einer Denkweise zuordnen.
- Abgaben früh beginnen. Argumente immer mit Begründung, nie nur Behauptungen.

## Teil B – Stoffzusammenfassung

Die Kapitel ordnen die Themen der LVA-Beschreibung. Mit **(T)** markiert sind Begriffe und Fragen, die ich als Theoriefrage frei beantworten können will.

Nicht mit den Folien abgeglichen. Begriffe, Autoren und Einteilungen sind Standardwissen, die LVA kann andere Schwerpunkte setzen oder andere Namen verwenden. Prüfungsmodus und Gewichtung unbekannt.
{: .notice--warning}

### 1 Informatik als Wissenschaft

**Leitfrage (T):** Was für eine Wissenschaft ist die Informatik? Die ehrliche Antwort: mehrere zugleich. Informatik verbindet drei Traditionen, die jeweils eigene Fragen, Methoden und Gütekriterien haben.

| Tradition | Fragt | Methode | Ergebnis gilt, wenn … |
|---|---|---|---|
| **formal-mathematisch** | Was ist berechenbar, wie effizient, ist das korrekt? | Definition, Satz, Beweis | der Beweis lückenlos ist |
| **ingenieurwissenschaftlich** | Wie baue ich ein System, das seinen Zweck erfüllt? | Anforderungen, Entwurf, Bau, Test | das System die Anforderungen unter den Randbedingungen erfüllt |
| **empirisch (erfahrungswissenschaftlich)** | Wie verhalten sich Systeme und Menschen tatsächlich? | Hypothese, Experiment, Messung, Statistik | die Daten die Hypothese stützen und die Studie wiederholbar ist |

Diese Dreiteilung ist in der Literatur verbreitet, z. B. bei Denning et al. 1989 als „Theorie, Abstraktion (Modellbildung), Design“ und bei Tedre 2014 als theoretische, ingenieurwissenschaftliche und naturwissenschaftliche Tradition. Welche Einteilung die LVA verwendet: mit LVA abgleichen.
{: .notice--info}

**Beispiel: ein Sortierverfahren aus drei Blickwinkeln.**

- *Formal:* Ich beweise, dass Mergesort korrekt sortiert und im schlechtesten Fall $$O(n \log n)$$ Vergleiche braucht.
- *Ingenieurmäßig:* Ich implementiere es so, dass es mit dem verfügbaren Speicher auskommt, stabil ist und in die Bibliothek passt.
- *Empirisch:* Ich messe die Laufzeit auf echten Daten und stelle fest, dass für kleine Arrays Insertionsort schneller ist. Deshalb kombinieren reale Bibliotheken beide.

Keiner der drei Blickwinkel allein reicht: Der Beweis sagt nichts über Cache-Effekte, die Messung beweist nichts für alle Eingaben, und die Implementierung kann trotz Tests einen Fehler haben.

#### Gegenstand der Informatik

- **Information und ihre Verarbeitung**: Darstellung (Kodierung), Speicherung, Übertragung, Transformation.
- **Algorithmen**: endliche, präzise Verfahren. Sie existieren unabhängig von einer konkreten Maschine.
- **Artefakte**: Programme, Systeme und Netze sind von Menschen gemacht. Das unterscheidet die Informatik von den Naturwissenschaften, deren Gegenstand vorgefunden wird. Deshalb wird sie auch als **Wissenschaft vom Künstlichen** bezeichnet.
- **Schnittstelle zu Menschen und Gesellschaft**: Systeme wirken auf Nutzer, Organisationen und Gesellschaft zurück (Kapitel 8).

#### Stolperfallen

- „Informatik ist Programmieren“: Programmieren ist ein Werkzeug, so wie Rechnen in der Mathematik.
- „Informatik ist Mathematik“: Beweise sind ein Teil, aber Entwurf und Experiment folgen anderen Regeln.
- „Informatik ist die Wissenschaft vom Computer“: Viele Grundbegriffe (Algorithmus, Berechenbarkeit) sind älter als der Computer oder unabhängig von ihm.

### 2 Wissenschaftstheoretische Grundbegriffe

Wissenschaftstheorie fragt: Wie kommen wir zu gesichertem Wissen, und wann ist eine Aussage begründet? Hier die Begriffe, mit denen ich die drei Traditionen beschreiben kann.

#### Schlussweisen (T)

| Schlussweise | Richtung | Sicherheit | Beispiel |
|---|---|---|---|
| **Deduktion** | vom Allgemeinen zum Besonderen | wahrheitserhaltend: wahre Prämissen ergeben sichere Folgerung | „Alle Primzahlen größer 2 sind ungerade. 13 ist Primzahl größer 2. Also ist 13 ungerade.“ |
| **Induktion** (im philosophischen Sinn) | vom Einzelfall zur Regel | nur wahrscheinlich, kann scheitern | „Mein Programm lief bei 1000 Tests fehlerfrei, also ist es korrekt.“ |
| **Abduktion** | vom Befund zur besten Erklärung | Hypothese, muss geprüft werden | „Der Server ist langsam, und die Festplatte ist voll. Vermutlich liegt es an der Festplatte.“ |

Die **vollständige Induktion** der Mathematik ist trotz des Namens eine **Deduktion**: Sie folgt zwingend aus dem Induktionsprinzip. Die philosophische Induktion verallgemeinert dagegen aus Beobachtungen.
{: .notice--warning}

**Debugging als Kreislauf:** Abduktion (Vermutung über die Fehlerursache) → Deduktion (Wenn die Vermutung stimmt, muss bei Eingabe X das Symptom Y auftreten) → Test (Induktion, Beobachtung) → Vermutung bestätigt oder verworfen.

#### Hypothese, Theorie, Modell, Gesetz

- **Hypothese:** eine prüfbare Vermutung. „Caching verkürzt die mittlere Antwortzeit um mehr als 20 %.“
- **Theorie:** ein System zusammenhängender, gut geprüfter Aussagen, das Phänomene erklärt und Vorhersagen erlaubt. Im Alltag heißt „Theorie“ oft „bloße Vermutung“, in der Wissenschaft ist es das Gegenteil.
- **Modell:** vereinfachte Abbildung eines Ausschnitts der Wirklichkeit für einen Zweck (Kapitel 6).
- **Gesetz:** eine allgemeine, regelmäßig bestätigte Beziehung, z. B. die empirische Beobachtung „Moore's Law“, die eigentlich eine Trendbeschreibung ist und kein Naturgesetz.

#### Falsifikation (Popper) (T)

Karl Popper: Allgemeine Aussagen lassen sich durch endlich viele Beobachtungen **nie endgültig verifizieren**, aber durch ein einziges Gegenbeispiel **falsifizieren**. Eine Aussage ist nur dann wissenschaftlich, wenn sie **falsifizierbar** ist, also prinzipiell an der Erfahrung scheitern könnte.

- falsifizierbar: „Algorithmus A ist auf diesen Daten schneller als B.“ (Messung kann das widerlegen)
- nicht falsifizierbar: „Software wird irgendwann besser.“ (kein möglicher Befund widerlegt das)

**Bezug zur Informatik:** Testen ist falsifikatorisch. Edsger Dijkstras bekannter Satz sagt sinngemäß: Tests können die Anwesenheit von Fehlern zeigen, aber nie ihre Abwesenheit. Für die Abwesenheit braucht man einen Beweis (Kapitel 3).

#### Paradigmen (Kuhn)

Thomas Kuhn (*The Structure of Scientific Revolutions*, 1962): Wissenschaft arbeitet lange innerhalb eines **Paradigmas** (gemeinsame Grundannahmen, Methoden, Musterbeispiele). Häufen sich Anomalien, kann es zu einem **Paradigmenwechsel** kommen. In der Informatik spricht man auch von Programmierparadigmen (imperativ, objektorientiert, funktional, logisch). Das ist ein verwandter, aber loserer Wortgebrauch.

#### Gütekriterien (T)

| Kriterium | Frage |
|---|---|
| **Objektivität** | Kommen verschiedene Personen zum selben Ergebnis? |
| **Reliabilität** | Liefert die Messung bei Wiederholung dasselbe? |
| **Validität** | Misst die Methode wirklich das, was sie messen soll? |
| **Reproduzierbarkeit** | Kann eine andere Gruppe mit den beschriebenen Methoden das Ergebnis nachvollziehen? |
| **Nachvollziehbarkeit** | Sind Annahmen, Daten und Schritte offengelegt? |

### 3 Die formal-mathematische Denkweise

Hier ist Informatik Mathematik: Objekte werden exakt definiert, Eigenschaften werden bewiesen. Ein bewiesener Satz gilt für **alle** Fälle, nicht nur für die getesteten.

#### Kernbegriffe

- **Formalisierung:** ein umgangssprachliches Problem in eine exakte Sprache übersetzen (Logik, Mengen, Automaten, Graphen).
- **Spezifikation:** genaue Beschreibung, **was** ein Programm leisten soll, unabhängig vom **Wie**. Oft als Vor- und Nachbedingung.
- **Verifikation:** Beweis, dass ein Programm seine Spezifikation erfüllt.
- **Algorithmus und Komplexität:** Korrektheit plus Aufwand in Abhängigkeit von der Eingabegröße.
- **Berechenbarkeit:** Was kann überhaupt ein Algorithmus lösen?

**Beispiel (Spezifikation).** Eine Funktion `max(a)` für ein nichtleeres Array $$a$$ ganzer Zahlen der Länge $$n$$:

$$
\text{Vorbedingung: } n \ge 1, \qquad \text{Nachbedingung: } \exists i\ (r = a_i) \wedge \forall j\ (a_j \le r).
$$

Die Nachbedingung hat zwei Teile. Fehlt der erste, wäre „gib eine riesige Zahl zurück“ korrekt. Fehlt der zweite, wäre „gib $$a_1$$ zurück“ korrekt. Gute Spezifikationen schließen solche Schlupflöcher.

**Schleifeninvariante.** Für die Schleife „$$r := a_1$$; für $$k = 2, \dots, n$$: falls $$a_k > r$$, setze $$r := a_k$$“ gilt nach dem Durchlauf für $$k$$: $$r$$ ist das Maximum von $$a_1, \dots, a_k$$. Am Anfang stimmt das für $$k = 1$$, jeder Durchlauf erhält es, und am Ende ($$k = n$$) ist es genau die Nachbedingung. Das ist vollständige Induktion über die Schleifendurchläufe.

#### Stärken und Grenzen (T)

| Stärke | Grenze |
|---|---|
| Aussagen gelten für alle Eingaben | nur so gut wie die Spezifikation: ein korrekt bewiesenes Programm zur falschen Spezifikation ist trotzdem falsch |
| deckt Randfälle auf, an die beim Testen niemand denkt | aufwendig, für große Systeme nur mit Werkzeugen (Beweisassistenten, Model Checker) |
| liefert grundsätzliche Grenzen (Unentscheidbarkeit, untere Schranken) | das Modell (z. B. „unendlicher Speicher“, „ideale Arithmetik“) weicht von der echten Maschine ab |

**Grundsätzliche Grenze:** Das **Halteproblem** (Turing, 1936) ist unentscheidbar: Es gibt keinen Algorithmus, der für jedes Programm und jede Eingabe entscheidet, ob das Programm anhält. Folgerung: Es gibt kein allgemeines Werkzeug, das jede interessante Programmeigenschaft automatisch prüft. Verifikation braucht deshalb Einschränkungen oder menschliche Mithilfe.

### 4 Die ingenieurwissenschaftliche Denkweise

Hier geht es ums **Gestalten**: Ein Artefakt soll einen Zweck erfüllen, unter Randbedingungen wie Zeit, Geld, Energie, Sicherheit und Bedienbarkeit. Es gibt selten **die** richtige Lösung, sondern bessere und schlechtere **Kompromisse**.

#### Der Entwurfskreislauf

1. **Problem verstehen:** Wer braucht was, wozu? Anforderungen erheben.
2. **Anforderungen** festhalten: funktional (was das System tut) und nicht-funktional (wie gut: Leistung, Sicherheit, Wartbarkeit, Bedienbarkeit).
3. **Entwurf:** Alternativen entwickeln, Architektur festlegen, zerlegen.
4. **Umsetzung:** bauen, programmieren.
5. **Prüfen:** **Verifikation** (Bauen wir das System richtig, also passend zur Spezifikation?) und **Validierung** (Bauen wir das richtige System, also passend zum Bedarf?).
6. **Betrieb und Wartung**, Rückmeldungen fließen in die nächste Runde.

Bei **sequenziellen** Vorgehensmodellen (Wasserfall) laufen die Schritte einmal nacheinander. Bei **iterativen bzw. agilen** Modellen läuft der Kreislauf in kurzen Runden mit laufendem Feedback. Iterativ ist besser, wenn die Anforderungen unklar sind; sequenziell kann bei stabilen, sicherheitskritischen Anforderungen sinnvoll sein.

#### Prinzipien (T)

| Prinzip | Bedeutung | Beispiel |
|---|---|---|
| **Abstraktion** | Unwichtiges ausblenden | eine Datenbank-Schnittstelle, ohne zu wissen, wie die Daten auf der Platte liegen |
| **Modularisierung** | in Teile mit klaren Schnittstellen zerlegen | Frontend, Backend, Datenbank |
| **Geheimnisprinzip** | Innenleben eines Moduls verbergen | nur Methoden öffentlich, Felder privat |
| **Wiederverwendung** | Bewährtes nicht neu erfinden | Bibliotheken, Entwurfsmuster |
| **Trade-off** | Ziele stehen in Konflikt | Speicher gegen Zeit, Sicherheit gegen Bequemlichkeit |
| **Fehlertoleranz** | mit Ausfällen rechnen | Redundanz, Backups |

**Beispiel Trade-off.** Eine Studien-App soll offline funktionieren. Mehr lokale Daten bedeuten Offline-Fähigkeit und Geschwindigkeit, aber mehr Speicherbedarf und schwierigere Synchronisierung. Die Entscheidung hängt von den Anforderungen ab, nicht von „richtig“ oder „falsch“. Gute Ingenieurarbeit macht solche Abwägungen **explizit** und begründet sie.

#### Vergleich mit der formalen Denkweise

| | formal | ingenieurmäßig |
|---|---|---|
| Ziel | Wahrheit, Allgemeingültigkeit | Brauchbarkeit, Zweckerfüllung |
| Ergebnis | Satz mit Beweis | Artefakt mit Dokumentation |
| Gütekriterium | Korrektheit | Anforderungen erfüllt, wirtschaftlich, sicher |
| Umgang mit Unsicherheit | wird ausgeschlossen | wird gemanagt (Risiken, Puffer, Tests) |

### 5 Die empirische Denkweise

Hier ist Informatik Erfahrungswissenschaft: Ich stelle eine Hypothese auf und prüfe sie an der Wirklichkeit. Gegenstand können technische Systeme sein (Laufzeit, Energie, Fehlerraten) oder Menschen (Bedienbarkeit, Verhalten, Akzeptanz).

#### Der Ablauf eines Experiments

1. **Fragestellung** und **Hypothese** formulieren, falsifizierbar (Kapitel 2).
2. **Variablen** festlegen: unabhängige Variable (was ich verändere), abhängige Variable (was ich messe), Störvariablen (was zusätzlich wirken könnte).
3. **Design**: Vergleichsbedingungen, Stichprobe, Wiederholungen, ggf. Zufallszuteilung.
4. **Durchführen und messen**, alles protokollieren.
5. **Auswerten**: Kennzahlen, Streuung, ggf. statistischer Test.
6. **Interpretieren**: Was zeigen die Daten, was nicht? Grenzen nennen.

**Eigenes Beispiel.** Hypothese: „Die neue Suchfunktion liefert im Median schneller ein Ergebnis als die alte.“

| Element | Umsetzung |
|---|---|
| unabhängige Variable | Version der Suchfunktion (alt, neu) |
| abhängige Variable | Antwortzeit in Millisekunden |
| Störvariablen | Serverlast, Cache-Zustand, Länge der Suchanfrage |
| Kontrolle | dieselben 500 Anfragen in beiden Versionen, abwechselnd, Cache vorher geleert, je 10 Wiederholungen |
| Auswertung | Median und Streuung pro Version, nicht nur ein Mittelwert |

#### Typische Fehler (T)

- **Korrelation ist nicht Kausalität.** Studierende, die mehr Kaffee trinken, haben mehr ECTS. Vielleicht liegt beides an einer dritten Größe (mehr Lernstunden).
- **Zu kleine oder verzerrte Stichprobe.** Eine Umfrage nur unter Informatikstudierenden sagt wenig über die Bedienbarkeit einer App für Senioren.
- **Messung beeinflusst das Ergebnis.** Debug-Ausgaben verlangsamen das Programm, das ich messen will.
- **Nur günstige Ergebnisse berichten.** Wer zehn Varianten misst und nur die beste zeigt, täuscht.
- **Übertragen über den Gültigkeitsbereich hinaus.** Ein Benchmark auf einem Rechner sagt nicht automatisch etwas über einen anderen.

#### Interne und externe Validität

- **interne Validität:** Liegt der gemessene Unterschied wirklich an der unabhängigen Variable und nicht an Störgrößen?
- **externe Validität:** Gilt das Ergebnis auch außerhalb der Versuchssituation?

Beide stehen oft im Konflikt: Ein streng kontrolliertes Labor erhöht die interne, verringert aber die externe Validität.

#### Weitere empirische Methoden

| Methode | Gut für |
|---|---|
| kontrolliertes Experiment | Ursache-Wirkung prüfen |
| Benchmark, Messung, Simulation | Leistung technischer Systeme |
| Umfrage, Fragebogen | Meinungen, Häufigkeiten |
| Interview, Beobachtung | Verstehen, wie Menschen arbeiten (qualitativ) |
| Fallstudie | ein System oder eine Organisation in der Tiefe |
| Log- und Datenanalyse | Verhalten im echten Betrieb |

### 6 Modelle und Abstraktion

Informatikerinnen und Informatiker arbeiten fast nie mit der Wirklichkeit selbst, sondern mit Modellen: Datenmodelle, Klassendiagramme, Automaten, Graphen, Simulationen, trainierte ML-Modelle.

#### Modellbegriff nach Stachowiak (T)

Herbert Stachowiak nennt drei Merkmale eines Modells:

| Merkmal | Bedeutung | Beispiel U-Bahn-Netzplan |
|---|---|---|
| **Abbildungsmerkmal** | Ein Modell ist Modell **von** etwas, einem Original. | bildet das echte Netz ab |
| **Verkürzungsmerkmal** | Es erfasst nicht alle Eigenschaften des Originals, nur die relevanten. | keine echten Entfernungen, keine Kurven |
| **Pragmatisches Merkmal** | Es ist für **jemanden**, für einen **Zweck** und eine **Zeit** gemacht. | Fahrgäste wollen Umstiege finden, nicht Strecken vermessen |

Daraus folgt: Es gibt kein „wahres“ Modell, nur passende und unpassende für einen Zweck. Derselbe Netzplan ist für Fahrgäste ideal und für die Gleisinstandhaltung unbrauchbar.

#### Arten von Modellen

- **deskriptiv** (beschreibend): ein Datenmodell einer bestehenden Bibliothek.
- **präskriptiv** (vorschreibend): ein Bauplan, eine Spezifikation, nach der etwas gebaut wird.
- **prädiktiv** (vorhersagend): ein Wettermodell, ein Lastmodell für Server.

In der Informatik ist die Richtung oft umgekehrt zur Naturwissenschaft: Dort wird ein Modell an die Wirklichkeit angepasst. Bei einem Bauplan wird die Wirklichkeit (das System) an das Modell angepasst.

#### Abstraktion

Abstrahieren heißt, Details wegzulassen, um das Wesentliche zu sehen, und dabei **Ebenen** zu bilden: Transistor, Gatter, Prozessor, Maschinensprache, Hochsprache, Anwendung. Auf jeder Ebene kann ich arbeiten, ohne die darunterliegenden ständig mitzudenken.

**Risiko:** Abstraktionen sind nie perfekt dicht. Fließkommazahlen sind keine reellen Zahlen ($$0.1 + 0.2 \ne 0.3$$ in den meisten Programmiersprachen), Netzwerkaufrufe sind keine lokalen Funktionsaufrufe (sie können ausfallen und dauern). Wer die Grenzen eines Modells vergisst, baut Fehler ein.

### 7 Problemlösen und Computational Thinking

Die LVA-Beschreibung nennt ausdrücklich: **verschiedene Problemlösungsansätze unterscheiden und passende auswählen**. Dazu zwei bekannte Rahmen.

#### Polyas vier Phasen

1. **Verstehen:** Was ist gegeben, was gesucht, welche Bedingungen?
2. **Plan:** Kenne ich ein ähnliches Problem? Kann ich es vereinfachen, zerlegen, rückwärts arbeiten?
3. **Ausführen:** Plan umsetzen, jeden Schritt prüfen.
4. **Rückschau:** Stimmt das Ergebnis? Geht es einfacher? Was kann ich wiederverwenden?

#### Computational Thinking (Wing 2006)

Jeannette Wing beschreibt Computational Thinking als Denkweise, die über das Programmieren hinaus nützlich ist. Häufig genannte Bausteine:

| Baustein | Bedeutung | Beispiel Stundenplan erstellen |
|---|---|---|
| **Zerlegung** | Problem in Teilprobleme teilen | Pflicht-LVAs, Wahl-LVAs, Arbeitszeiten getrennt |
| **Mustererkennung** | Ähnlichkeiten zu bekannten Problemen sehen | Überschneidungen sind ein Graphfärbungsproblem |
| **Abstraktion** | Unwichtiges weglassen | nur Zeitslots zählen, nicht Hörsäle |
| **Algorithmus** | Schrittfolge, die jede Instanz löst | zuerst fixe Termine eintragen, dann den Rest |

#### Lösungsstrategien und wann sie passen (T)

| Strategie | Idee | passt, wenn … | Risiko |
|---|---|---|---|
| **Brute Force** | alle Möglichkeiten probieren | der Suchraum klein ist | explodiert exponentiell |
| **Teile und herrsche** | zerlegen, Teile lösen, zusammensetzen | Teilprobleme unabhängig sind | Zerlegung kann teuer sein |
| **Greedy** | in jedem Schritt die lokal beste Wahl | lokal optimal auch global optimal ist (beweisbar) | sonst nur Näherung |
| **Dynamische Programmierung** | Teilergebnisse speichern und wiederverwenden | sich Teilprobleme überlappen | Speicherbedarf |
| **Heuristik** | Faustregel, gut genug statt optimal | exakte Lösung zu teuer ist | keine Garantie |
| **Rückwärtsarbeiten** | vom Ziel aus denken | das Ziel klarer ist als der Weg | |
| **Analogie** | bekanntes Problem übertragen | Struktur ähnlich ist | oberflächliche Ähnlichkeit täuscht |
| **Versuch und Irrtum, Prototyp** | ausprobieren und lernen | Anforderungen unklar sind | ohne Reflexion planlos |

**Beispiel Greedy.** Münzwechsel mit Euro-Münzen: immer die größte passende Münze nehmen liefert die wenigsten Münzen. Mit den erfundenen Münzwerten $$1, 3, 4$$ und Betrag $$6$$ liefert Greedy $$4 + 1 + 1$$ (drei Münzen), optimal ist $$3 + 3$$ (zwei). Ob Greedy funktioniert, muss man also begründen, nicht annehmen.

**Welche Denkweise wann?** Wenn ich eine Garantie für alle Fälle brauche: formal. Wenn etwas funktionieren muss und Ressourcen knapp sind: ingenieurmäßig. Wenn ich nicht weiß, wie sich das System oder die Nutzer wirklich verhalten: empirisch. In echten Projekten wechselt man ständig.

### 8 Informatik und Gesellschaft: Gestaltung technischer Systeme kritisch betrachten

Die LVA-Beschreibung nennt ausdrücklich, **kritisch über die Gestaltung technischer Systeme nachzudenken**. Technik ist nicht neutral: Wer ein System gestaltet, trifft Entscheidungen, die andere betreffen.

#### Grundgedanken (T)

- **Werte stecken im Design.** Standardeinstellungen, Pflichtfelder, Sortierungen und Formulare legen fest, was leicht und was schwer ist. Ein Formular mit nur zwei Geschlechtsoptionen ist eine Entscheidung, keine technische Notwendigkeit.
- **Betroffene sind mehr als Nutzer.** Eine Videoüberwachung betrifft auch Passanten, die nie zugestimmt haben.
- **Nebenwirkungen und Zweckentfremdung.** Systeme werden anders verwendet als geplant (**Dual Use**: dieselbe Technik für nützliche und schädliche Zwecke).
- **Verzerrung (Bias) in Daten.** Ein Modell, das mit verzerrten Daten trainiert wird, übernimmt die Verzerrung, auch wenn niemand das beabsichtigt.
- **Collingridge-Dilemma.** Früh lässt sich eine Technik leicht ändern, aber ihre Folgen sind noch unklar. Spät sind die Folgen klar, aber die Technik ist schwer zu ändern.

#### Fragen für die Analyse eines Systems

1. Welchen Zweck hat das System, für wen?
2. Wer ist betroffen, direkt und indirekt? Wer wurde gefragt?
3. Welche Werte stehen im Konflikt (Sicherheit, Privatsphäre, Effizienz, Fairness, Zugänglichkeit)?
4. Welche Daten werden erhoben, wie lange gespeichert, wer hat Zugriff?
5. Was passiert bei Fehlern? Kann man widersprechen, gibt es einen Menschen in der Verantwortung?
6. Welche Alternativen gibt es, auch die, das System nicht zu bauen?

**Eigenes Beispiel.** Eine Uni führt automatische Anwesenheitserfassung per Gesichtserkennung ein. Zweck: weniger Verwaltungsaufwand. Betroffene: Studierende, Lehrende, Gäste im Hörsaal. Konflikt: Effizienz gegen Privatsphäre. Risiken: Fehlerkennungen, die bei manchen Gruppen häufiger sind, biometrische Daten als besonders schützenswerte Daten. Alternativen: Unterschriftenliste, Check-in per QR-Code, Anwesenheit gar nicht erfassen. Die technisch beste Lösung ist hier nicht automatisch die beste Gestaltung.

#### Verantwortung

Berufsverbände haben Ethik-Leitlinien, etwa der ACM Code of Ethics and Professional Conduct und die Ethischen Leitlinien der Gesellschaft für Informatik. Gemeinsame Kernpunkte: Schaden vermeiden, ehrlich und vertrauenswürdig sein, Privatsphäre achten, fachlich kompetent arbeiten und Grenzen der eigenen Systeme offenlegen. Ob die LVA diese Kodizes behandelt: mit LVA abgleichen.

## Theoriefragen-Checkliste

Jede Frage sollte ich in zwei bis drei Minuten frei und mit eigenem Beispiel beantworten können.

| Nr. | Frage | Kapitel | Kernpunkte |
|---|---|---|---|
| 1 | Welche drei Traditionen prägen die Informatik? | 1 | formal, ingenieurmäßig, empirisch; je Frage, Methode, Gütekriterium |
| 2 | Warum ist Informatik nicht einfach „Programmieren“ oder „Mathematik“? | 1 | Werkzeug vs. Wissenschaft; Entwurf und Experiment |
| 3 | Unterschied Deduktion, Induktion, Abduktion? | 2 | Richtung, Sicherheit, Beispiel Debugging |
| 4 | Was bedeutet Falsifizierbarkeit, und was hat sie mit Testen zu tun? | 2 | Popper; Tests zeigen Fehler, nicht deren Abwesenheit |
| 5 | Was ist ein Paradigma nach Kuhn? | 2 | Grundannahmen, Anomalien, Wechsel |
| 6 | Objektivität, Reliabilität, Validität? | 2, 5 | gleiche Personen, gleiche Wiederholung, richtige Größe |
| 7 | Was leisten Spezifikation und Verifikation, wo sind ihre Grenzen? | 3 | Was vs. Wie; Beweis gegen Spezifikation; Halteproblem |
| 8 | Unterschied Verifikation und Validierung? | 4 | richtig bauen vs. das Richtige bauen |
| 9 | Welche Prinzipien helfen beim Entwurf, was ist ein Trade-off? | 4 | Abstraktion, Modularisierung, Geheimnisprinzip; Zielkonflikte explizit machen |
| 10 | Wie plane ich ein Experiment? | 5 | Hypothese, unabhängige/abhängige/Störvariablen, Kontrolle |
| 11 | Warum ist Korrelation nicht Kausalität? | 5 | dritte Größe, Zufall, umgekehrte Richtung |
| 12 | Interne vs. externe Validität? | 5 | Störgrößen ausgeschlossen vs. übertragbar |
| 13 | Was ist ein Modell nach Stachowiak? | 6 | Abbildung, Verkürzung, Pragmatik |
| 14 | Wo lecken Abstraktionen? | 6 | Fließkomma, Netzwerk, Speicher |
| 15 | Welche Lösungsstrategie wann? | 7 | Brute Force, Teile und herrsche, Greedy, DP, Heuristik |
| 16 | Was ist Computational Thinking? | 7 | Zerlegung, Muster, Abstraktion, Algorithmus |
| 17 | Warum ist Technik nicht neutral? | 8 | Werte im Design, Betroffene, Dual Use, Bias |
| 18 | Was ist das Collingridge-Dilemma? | 8 | früh änderbar, aber Folgen unklar |

## Selbsttest

<details class="beweis" markdown="1">
<summary>1. Ein Team testet seine App mit 2000 automatischen Tests und erklärt sie für fehlerfrei. Was sagst du?</summary>

Das ist ein induktiver Schluss von Einzelfällen auf alle Fälle. Tests können Fehler zeigen, aber nicht ihre Abwesenheit beweisen. Für eine Garantie bräuchte man eine Spezifikation und einen Beweis, mindestens für die kritischen Teile. Realistisch: „Wir haben in den getesteten Fällen keinen Fehler gefunden.“

</details>

<details class="beweis" markdown="1">
<summary>2. Ist „Unsere KI wird die Welt langfristig verbessern“ eine wissenschaftliche Hypothese?</summary>

Nach Popper nein, weil sie nicht falsifizierbar ist: „langfristig“ und „verbessern“ sind nicht messbar festgelegt. Eine falsifizierbare Version: „Mit dem System sinkt die mittlere Bearbeitungszeit eines Antrags innerhalb von sechs Monaten um mindestens 20 %.“

</details>

<details class="beweis" markdown="1">
<summary>3. Ordne zu: Laufzeitbeweis, Lasttest, Architekturentscheidung.</summary>

Laufzeitbeweis: formal-mathematisch. Lasttest: empirisch (Messung unter kontrollierten Bedingungen). Architekturentscheidung: ingenieurwissenschaftlich (Abwägung unter Randbedingungen).

</details>

<details class="beweis" markdown="1">
<summary>4. Analysiere eine Wetter-App-Karte mit Stachowiaks drei Merkmalen.</summary>

Abbildung: Sie bildet das Wetter in einer Region ab. Verkürzung: nur Temperatur, Niederschlag und Symbole, grobe Rasterung, keine Luftdruckverteilung. Pragmatik: für Laien, die heute entscheiden wollen, ob sie einen Schirm brauchen, für die nächsten Stunden bis Tage.

</details>

<details class="beweis" markdown="1">
<summary>5. Warum ist Greedy für Münzwechsel nicht immer optimal?</summary>

Weil die lokal beste Wahl nicht immer global optimal ist. Mit den Werten 1, 3, 4 und dem Betrag 6 nimmt Greedy 4, 1, 1 (drei Münzen), optimal ist 3, 3 (zwei Münzen). Bei Euro-Münzen funktioniert Greedy, aber das muss man begründen.

</details>

## Offene Punkte

- Vortragende, Termine, Beurteilung (Abgaben, Tests, Prüfung) und Gewichtung in TISS/TUWEL nachtragen.
- Kapitelreihenfolge und Begriffe mit den Folien abgleichen; Kapitel ergänzen, die die LVA behandelt und hier fehlen.
- Prüfen, welche Autoren und Modelle (Popper, Kuhn, Stachowiak, Wing, Denning) die LVA tatsächlich verwendet.
- Falls es Abgaben oder Reflexionen gibt: Format und Bewertungskriterien notieren.
- Quiz und Checkliste anpassen, sobald die echten Themen feststehen.

## Quellen

- LVA-Beschreibung 187.B12 *Denkweisen der Informatik* (Kurzfassung auf der LVA-Seite)
- [*Karl Popper*](https://plato.stanford.edu/entries/popper/)
- P. Denning et al.: *Computing as a Discipline*, Communications of the ACM 32(1), 1989
- M. Tedre: *The Science of Computing: Shaping a Discipline*, CRC Press 2014
- H. Stachowiak: *Allgemeine Modelltheorie*, Springer 1973
- T. Kuhn: *The Structure of Scientific Revolutions*, 1962
- G. Polya: *How to Solve It*, 2nd ed., Princeton University Press 1957
