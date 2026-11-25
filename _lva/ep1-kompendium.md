---
title: "Einführung in die Programmierung 1 – Kompendium"
kuerzel: EP1
lva_nr: "185.A91"
typ: VU
semester: 2026W
ects: 5.5
sws: 4.0
status: laufend
tiss: "https://tiss.tuwien.ac.at/course/courseDetails.xhtml?courseNr=185A91&semester=2026W"
excerpt: "EP1 ausführlich: Kompetenzstufen, Lernquellen, Lernplan bis Ende Jänner und der komplette Java-Grundstoff mit geprüften Codebeispielen und eigenen Übungsaufgaben."
math: true
unlisted: true       # Entwurf, parallel zur kurzen LVA-Seite
---

{% include toc title="Inhalt" %}

## Überblick

EP1 ist der Einstieg ins Programmieren an der TU Wien, in Java. Stoff: Variablen, Datentypen, Operatoren, Verzweigungen, Schleifen, Methoden, Strings, Arrays, Ein- und Ausgabe, Rekursion, dazu Suchen und Sortieren, O-Notation und das Handwerk rundherum (Testen, Debuggen, Arbeiten mit IntelliJ). VU 185.A91, 4 SWS, 5.5 ECTS.

### Die drei Kompetenzstufen

EP1 kann auf drei Wegen absolviert werden. Die folgenden Eckdaten stammen aus dem Informationsblatt „EP1-Kompetenzstufen“ der LVA.

| Stufe | Für wen | Ablauf |
|---|---|---|
| **K1** | wenig oder keine Programmiererfahrung | 10 Übungswochen, davon 2 nur zum Üben; in den anderen 8 Wochen Bewertung von Aufgabenblättern, Feedback und Quiz, dazu Zusatzaufgaben. Alle Studierenden sind zunächst K1; Anmeldung zu einer K1-Gruppe nach Semesterbeginn (Datum laut TISS). |
| **K2** | schon Erfahrung, kleine Java-Aufgaben unter Zeitdruck lösbar | überspringt die ersten 4 Übungswochen, nur 6 Übungswochen; Blätter und Ablauf wie die letzten 6 Wochen von K1. Voraussetzung: K2-Einstufungstest bestanden, dann Anmeldung zu einer K2-Gruppe ca. 4 Wochen nach Semesterbeginn. |
| **K3** | beherrscht den gesamten EP1-Stoff | nach bestandenem K2-Test ein zweiter Einstufungstest; positiv heißt: LVA abgeschlossen, Zeugnis innerhalb von 4 Wochen. |

### Eckdaten der Einstufungstests

| | K2-Test | K3-Test |
|---|---|---|
| **Teilnahme** | freiwillig, Anmeldung in TISS | freiwillig, nur nach bestandenem K2-Test, Anmeldung in TISS |
| **Dauer, Ort** | 45 min, Rechner im Inflab | 100 min, Rechner im Inflab |
| **Stoff** | Variablen, Datentypen (auch String), Operatoren, Verzweigungen, Schleifen, Methoden (Aufruf, Parameterübergabe, Rückgabe) | Theorie (40 min, 40 Pkt., in TUWEL, keine IDE): Rekursion, Arrays, O-Notation, Suchen, Sortieren. Praxis (60 min, 60 Pkt.): 3–4 Methoden, eine davon rekursiv, Arrays ein- und zweidimensional, Referenzen und Seiteneffekte |
| **Aufgaben** | 3–4 Methoden in einem vorgegebenen IntelliJ-Projekt, Abgabe in TUWEL | IntelliJ-Projekt, Abgabe in TUWEL |
| **Bewertung** | Teilpunkte je Methode; Compilerfehler in einer Methode ergeben 0 Punkte für diese Methode. Bestanden ab 80 % (aktuell 20 von 25 Punkten) | 100 Punkte; Methoden mit Compilerfehler werden auskommentiert und mit 0 bewertet, auskommentierter Code zählt nicht. Noten: 92–100 Sehr gut, 83–91 Gut, 74–82 Befriedigend, 65–73 Genügend, unter 65 Nicht genügend |
| **Hilfsmittel** | EP1-Unterlagen aus TUWEL (Folien, Java-API); keine Suchmaschinen, keine KI, keine Kommunikation | wie K2, dazu A4-Notizblätter (eigener Stift) |

Bei weniger als 65 Punkten im K3-Test bleibt man in K2 mit dem Ergebnis des K2-Tests. Wer mit der K3-Note unzufrieden ist, kann in K2 weitermachen, dann zählen aber die Punkte aus dem K2-Test.

Der K2-Test fand am 5. Oktober 2026 statt. Ich absolviere EP1 in **Kompetenzstufe K1**, also mit allen 10 Übungswochen. Die Vorlesung liegt laut Wochenplan Di, Do und Fr von 12 bis 14 Uhr. Übungstermine, Abgabefristen, Test- und Prüfungstermine sowie die Notenschlüssel für K1 und K2 kenne ich nicht aus Unterlagen: **in TISS/TUWEL prüfen**.
{: .notice--warning}

### Die Einschränkungen im Teststil

Die Beispieltests in TUWEL arbeiten mit festen Spielregeln. Ich übe alle Aufgaben in diesem Kompendium unter denselben Regeln, weil sie zwingen, Schleifen und Indizes selbst zu beherrschen:

- vorgegebene Methodenköpfe nicht ändern, keine eigenen Hilfsmethoden und keine Klassenvariablen,
- Strings nicht mit `==` vergleichen,
- kein `StringBuilder`/`StringBuffer`, keine Lambdas, Streams oder Methodenreferenzen,
- aus `String` nur `charAt`, `equals`, `length`, `substring`; aus `Math` alles,
- nur `main` und ausdrücklich genannte Methoden geben etwas aus.

### Wofür welches Kapitel

| Kapitel | K2-Test | K3-Theorie | K3-Praxis | Übungsblätter |
|---|:-:|:-:|:-:|:-:|
| 1 Programme, Compiler, JVM, Ein-/Ausgabe | ✓ | | | ✓ |
| 2 Variablen und primitive Datentypen | ✓ | | | ✓ |
| 3 Ausdrücke, Operatoren, Casts | ✓ | | | ✓ |
| 4 Verzweigungen | ✓ | | | ✓ |
| 5 Schleifen | ✓ | | ✓ | ✓ |
| 6 Methoden | ✓ | | ✓ | ✓ |
| 7 Strings und char | ✓ | | ✓ | ✓ |
| 8 Arrays | | ✓ | ✓ | ✓ |
| 9 Suchen und Sortieren | | ✓ | ✓ | ✓ |
| 10 Rekursion | | ✓ | ✓ | ✓ |
| 11 Laufzeit und O-Notation | | ✓ | | ✓ |
| 12 Klassen und Objekte (Grundlagen) | | | | vermutlich EP2 |
| 13 Testen und Debuggen | ✓ | | ✓ | ✓ |

## Teil A1 – Kostenlose Lernquellen

**Reihenfolge beim Lernen:** Vorlesung und Folien aus TUWEL → Aufgabenblatt der Woche selbst lösen → kleine Aufgaben auf CodingBat unter Zeitdruck → Beispieltests aus TUWEL im Teststil (45 min, nur erlaubte String-Methoden). Externe Quellen erklären oft mehr, als EP1 verlangt, oder benutzen Bibliotheksmethoden, die im Test verboten sind.

### Die Quellen

| Quelle | Sprache | Wofür |
|---|---|---|
| [EP1-TUWEL-Kurs](https://tuwel.tuwien.ac.at/): Folien, Aufzeichnungen, Aufgabenblätter, Beispieltests, Forum | DE | Primärquelle für Stoff, Notation und Testformat |

### Thema → Quellen

| Thema | Lesen / Ansehen | Üben |
|---|---|---|
| Datentypen, Operatoren, Casts | Oracle *Nuts and Bolts*; Think Java Kap. 2–3 | CodingBat Warmup-1 |
| Verzweigungen, boolesche Logik | Oracle *Control Flow Statements*; Think Java Kap. 5 | CodingBat Logic-1, Logic-2 |
| Schleifen | Think Java Kap. 6 | CodingBat Warmup-2 |
| Methoden | Think Java Kap. 4 und 7 | Aufgaben in Kapitel 6 hier |
| Strings | Think Java Kap. 6 (Strings), API `String` | CodingBat String-1, String-2 (nur mit `charAt`, `substring`, `length`, `equals` lösen) |
| Arrays | Oracle *Arrays*; Think Java Kap. 7 | CodingBat Array-1, Array-2 |
| Suchen, Sortieren | CS50x Woche 3 (Algorithms); Think Java Kap. 12–13 | eigene Implementierungen aus Kapitel 9 hier |
| Rekursion | Think Java Kap. 8; CS50x Woche 3 | CodingBat Recursion-1 |
| O-Notation | CS50x Woche 3 | Laufzeitfragen in Kapitel 11 hier |

Die Kapitelnummern von *Think Java* beziehen sich auf die 2. Auflage und sind aus dem Gedächtnis zugeordnet. Beim Lesen kurz im Inhaltsverzeichnis gegenprüfen.
{: .notice--info}

## Teil A2 – Lernplan

Der Plan gilt ab 16.11.2026 bis Ende Jänner 2027. Er geht vom Standardstoff in dieser Reihenfolge aus; die tatsächlichen Übungswochen, Abgaben und Tests stehen in TUWEL und TISS und müssen eingetragen werden.
{: .notice--info}

| Woche | Stoff | Aufgaben | Meilenstein |
|---|---|---|---|
| 16.–22.11. | Kapitel 1–4 wiederholen: Typen, Operatoren, Ganzzahldivision, Verzweigungen | Übungsaufgaben aus Kapitel 2–4 ohne IDE auf Papier, dann in IntelliJ prüfen | Aufgabenblatt der Woche (TUWEL) |
| 23.–29.11. | Kapitel 5–6: Schleifen, Methoden, Parameterübergabe | 10 CodingBat-Aufgaben (Warmup-2, Logic-2) | Aufgabenblatt |
| 30.11.–06.12. | Kapitel 7: Strings | Übungen aus Kapitel 7 im Teststil, je 10 min | Aufgabenblatt; ADM-Test 1 in derselben Woche beachten |
| 07.–13.12. | Kapitel 8: Arrays, Referenzen, 2D-Arrays | Array-1, Array-2 auf CodingBat | Aufgabenblatt |
| 14.–20.12. | Kapitel 9: Suchen und Sortieren | alle drei Sortierverfahren aus dem Kopf schreiben, Durchläufe von Hand tabellieren | Aufgabenblatt |
| Weihnachtsferien | Kapitel 10–11: Rekursion, O-Notation; Kapitel 1–9 wiederholen | Recursion-1 komplett, Aufrufbäume zeichnen | – |
| 07.–17.01. | Kapitel 13 (Testen), Wiederholung aller Kapitel | Beispieltests aus TUWEL unter Zeitdruck | Aufgabenblatt; Analysis-Test 2 (18.–22.01.) beachten |
| 18.–31.01. | Schwachstellen aus der Fehlerliste | 2 komplette Probetests, Theoriefragen-Checkliste | Abschluss laut TUWEL (Termine prüfen) |

**Wochenroutine**

- Vorlesung innerhalb von 48 Stunden nachsehen, neue Begriffe in die Theoriefragen-Checkliste übertragen.
- Jeden Tag mindestens eine kleine Methode schreiben, zuerst ohne IDE, dann ausführen.
- Für jede Aufgabe vorher die Beispielaufrufe mit erwarteter Ausgabe hinschreiben, dann erst programmieren.
- Fehler, die öfter als einmal passieren (z. B. `<=` statt `<` in der Schleife), in eine eigene Fehlerliste schreiben.
- Code nie ungetestet abgeben: Compilerfehler kosten im Teststil alle Punkte der Methode.

## Teil B – Stoffzusammenfassung

Die Kapitel folgen dem üblichen Aufbau eines Java-Einführungskurses und den Themen aus der LVA-Beschreibung. Alle Codebeispiele und Übungsaufgaben sind selbst geschrieben und mit Java 21 ausgeführt; die angegebenen Ausgaben stammen aus diesen Läufen. Die Übungsaufgaben imitieren nur die Form der Beispieltests, nicht deren Inhalt.

Die EP1-Folien lagen mir beim Schreiben nicht vor. Begriffe, Reihenfolge und Umfang (vor allem bei Klassen und Objekten, die vermutlich erst in EP2 kommen) mit TUWEL abgleichen.
{: .notice--warning}

### 1 Programme, Compiler und JVM

#### Vom Quelltext zum laufenden Programm

Ein **Algorithmus** ist eine endliche, eindeutige Folge von Schritten, die ein Problem löst. Ein **Programm** ist ein Algorithmus in einer Programmiersprache. Java ist eine Hochsprache: Der Prozessor versteht sie nicht direkt.

1. Ich schreibe Quelltext in `Hallo.java`.
2. Der **Compiler** `javac` prüft Syntax und Typen und übersetzt in **Bytecode** `Hallo.class`.
3. Die **Java Virtual Machine** (JVM, Befehl `java`) führt den Bytecode aus; der JIT-Compiler übersetzt häufig benutzte Teile zur Laufzeit in Maschinencode.

Der Bytecode ist plattformunabhängig („write once, run anywhere“): dieselbe `.class`-Datei läuft auf jeder JVM. IntelliJ ruft Compiler und JVM im Hintergrund auf.

**(B) Compilezeit- vs. Laufzeitfehler.** Ein **Compilerfehler** (Syntaxfehler, Typfehler, fehlende Variable) verhindert, dass überhaupt Bytecode entsteht. Ein **Laufzeitfehler** (Exception, z. B. Division durch 0, Index außerhalb des Arrays) tritt erst beim Ausführen auf. Ein **logischer Fehler** liefert ein falsches Ergebnis ohne jede Meldung und ist am schwersten zu finden.

#### Aufbau eines Java-Programms

```java
public class Hallo {
    public static void main(String[] args) {
        System.out.println("Hallo, EP1!");   // Ausgabe mit Zeilenumbruch
        System.out.print("ohne ");
        System.out.print("Umbruch");
        System.out.println();
    }
}
```

Ausgabe:

```
Hallo, EP1!
ohne Umbruch
```

- Jede Anweisung steht in einer **Klasse**. Eine `public class Hallo` muss in der Datei `Hallo.java` stehen.
- Die JVM startet bei `public static void main(String[] args)`.
- Anweisungen enden mit `;`, Blöcke stehen in `{ }`.
- Kommentare: `// bis Zeilenende`, `/* mehrzeilig */`, `/** Javadoc */`.
- Java unterscheidet Groß- und Kleinschreibung: `Main` und `main` sind verschiedene Namen.

**Namenskonventionen:** Klassen `GrossAmAnfang`, Methoden und Variablen `kleinDannCamelCase`, Konstanten `GROSS_MIT_UNTERSTRICH`.

#### Ausgabe

```java
int a = 7;
double d = 2.5;
System.out.println("a = " + a);          // String + int ergibt String
System.out.println(a + 1 + " Stück");    // links nach rechts: 8 + " Stück"
System.out.println("Stück " + a + 1);    // "Stück 7" + 1 ergibt "Stück 71"
System.out.printf("%d und %.2f%n", a, d);
```

Ausgabe:

```
a = 7
8 Stück
Stück 71
7 und 2.50
```

`printf` nimmt einen Formatstring: `%d` ganze Zahl, `%f` Gleitkomma (`%.2f` mit 2 Nachkommastellen), `%s` String, `%c` Zeichen, `%n` Zeilenumbruch. Achtung: `%.2f` rundet nach der eingestellten Sprache des Systems; auf einem deutschen System kann `2,50` statt `2.50` erscheinen.

#### Eingabe mit Scanner

```java
import java.util.Scanner;

public class Eingabe {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Zahl: ");
        int n = sc.nextInt();        // liest eine ganze Zahl
        String wort = sc.next();     // liest bis zum nächsten Leerraum
        System.out.println(n * 2 + " " + wort);
    }
}
```

Eingabe `21 Hallo` ergibt `42 Hallo`. Nach `nextInt()` bleibt der Zeilenumbruch im Puffer; ein direkt folgendes `nextLine()` liefert dann einen leeren String. In den Tests im K2-Stil gibt es meist keine Eingabe, alles wird in `main` aufgerufen.

#### Typische Fehler

- Dateiname und Klassenname stimmen nicht überein.
- `;` vergessen oder Klammern nicht geschlossen (der Compiler meldet den Fehler oft erst eine Zeile später).
- `System.out.println("Summe: " + a + b)` hängt Ziffern an statt zu addieren. Richtig: `"Summe: " + (a + b)`.
- `String` klein geschrieben (`string`) oder `system.out`.

#### Übungsaufgaben

**Aufgabe 1.1.** Was gibt das Programmstück aus?

```java
int x = 3, y = 4;
System.out.println(x + y + "" + x + y);
System.out.println("" + x * y + x);
```

<details class="beweis" markdown="1">
<summary>Lösung</summary>

```
734
123
```

Erste Zeile: `3 + 4 = 7`, dann `"7"`, dann `"73"`, dann `"734"`. Zweite Zeile: `*` bindet stärker als `+`, also `"" + 12` ergibt `"12"`, dann `"123"`.

</details>

**Aufgabe 1.2.** Welche der Fehler sind Compiler-, welche Laufzeitfehler? (a) `int n = "5";` (b) `int n = 5 / 0;` (c) `System.out.println(x);` ohne Deklaration von `x`. (d) Eine Schleife, die nie endet.

<details class="beweis" markdown="1">
<summary>Lösung</summary>

(a) Compilerfehler (Typfehler). (b) Laufzeitfehler `ArithmeticException: / by zero`; der Compiler übersetzt das trotz konstantem Ausdruck. (c) Compilerfehler „cannot find symbol“. (d) Logischer Fehler, das Programm hängt ohne Meldung.

</details>

### 2 Variablen und primitive Datentypen

#### Variablen

Eine **Variable** ist ein benannter Speicherplatz mit festem **Typ**. Java ist **statisch typisiert**: Der Typ steht zur Compilezeit fest und ändert sich nie.

```java
int alter;              // Deklaration
alter = 20;             // Zuweisung (Initialisierung)
int jahr = 2026;        // beides zugleich
final double PI = 3.14159;   // Konstante, nur einmal zuweisbar
var n = 10;             // Typ wird abgeleitet: int (ab Java 10)
```

Lokale Variablen haben **keinen Standardwert**: Lesen vor der ersten Zuweisung ist ein Compilerfehler („variable might not have been initialized“). Die Zuweisung `=` ist keine Gleichung: `x = x + 1` heißt „neuer Wert von `x` ist alter Wert plus 1“.

#### Die acht primitiven Typen

| Typ | Größe | Wertebereich | Literal-Beispiel |
|---|---|---|---|
| `byte` | 8 Bit | $$-128$$ bis $$127$$ | `(byte) 5` |
| `short` | 16 Bit | $$-32768$$ bis $$32767$$ | `(short) 5` |
| `int` | 32 Bit | $$-2^{31}$$ bis $$2^{31}-1$$, also $$-2147483648$$ bis $$2147483647$$ | `42`, `0x2A`, `0b101010`, `1_000_000` |
| `long` | 64 Bit | $$-2^{63}$$ bis $$2^{63}-1$$ | `42L` |
| `float` | 32 Bit | IEEE 754 single, ca. 7 Dezimalstellen | `3.14f` |
| `double` | 64 Bit | IEEE 754 double, ca. 15–16 Dezimalstellen | `3.14`, `1e-3` |
| `char` | 16 Bit | UTF-16-Codeeinheit, $$0$$ bis $$65535$$ | `'a'`, `'\n'`, `'ä'` |
| `boolean` | – | `true`, `false` | `true` |

Die ganzzahligen Typen `byte`, `short`, `int`, `long` sind vorzeichenbehaftet und im **Zweierkomplement** gespeichert (siehe GDS Kapitel 1). Ein ganzzahliges Literal ohne Suffix ist `int`, ein Gleitkomma-Literal ohne Suffix ist `double`.

`String` ist **kein** primitiver Typ, sondern eine Klasse (Referenztyp, Kapitel 7). Man erkennt das am Großbuchstaben.
{: .notice--info}

#### Überlauf

Ganzzahlarithmetik rechnet modulo $$2^{32}$$ (bei `int`) und meldet keinen Fehler:

```java
int max = Integer.MAX_VALUE;
System.out.println(max);
System.out.println(max + 1);
System.out.println(Integer.MIN_VALUE - 1);
long gross = max + 1;          // Überlauf passiert schon in int!
long richtig = max + 1L;
System.out.println(gross + " " + richtig);
byte b = (byte) 200;
System.out.println(b);
```

Ausgabe:

```
2147483647
-2147483648
2147483647
-2147483648 2147483648
-56
```

**(B) Warum?** $$2147483647 + 1 = 2^{31}$$ ist nicht darstellbar. Im Zweierkomplement ist das Bitmuster `1000…0`, und das ist $$-2^{31}$$. Bei `(byte) 200` bleiben die unteren 8 Bit `1100 1000`, das ist $$200 - 256 = -56$$. Der Ausdruck `max + 1` wird komplett in `int` berechnet, erst danach nach `long` erweitert; deshalb hilft das `long` auf der linken Seite nicht.

#### Gleitkommazahlen

`double` speichert Zahlen binär mit 53 Bit Mantisse. Dezimalbrüche wie $$0.1$$ sind binär periodisch und daher nicht exakt (GDS Kapitel 1).

```java
System.out.println(0.1 + 0.2);
System.out.println(0.1 + 0.2 == 0.3);
System.out.println(1.0 / 0);
System.out.println(0.0 / 0);
System.out.println(Math.abs(0.1 + 0.2 - 0.3) < 1e-9);
System.out.println((float) 0.1);
```

Ausgabe:

```
0.30000000000000004
false
Infinity
NaN
true
0.1
```

- Gleitkommazahlen nie mit `==` vergleichen, sondern mit einer Toleranz: $$\lvert a - b\rvert < \varepsilon$$.
- Division durch 0 ist bei `double` **kein** Fehler: Ergebnis `Infinity` oder `NaN`. Bei `int` wirft sie eine `ArithmeticException`.
- `NaN == NaN` ist `false`; prüfen mit `Double.isNaN(x)`.
- Für Geldbeträge rechnet man in ganzen Cent (`long`), nicht in `double`.

#### char ist eine Zahl

```java
char c = 'A';
System.out.println(c + 1);          // char wird zu int erweitert
System.out.println((char) (c + 1));
char d = 'a';
d++;                                // ++ castet implizit zurück
System.out.println(d);
System.out.println('7' - '0');      // Ziffer zu Zahl
System.out.println((int) 'a');
```

Ausgabe:

```
66
B
b
7
97
```

Merken: `'0'` bis `'9'` sind 48 bis 57, `'A'` bis `'Z'` sind 65 bis 90, `'a'` bis `'z'` sind 97 bis 122. Den Abstand `'a' - 'A'` (32) braucht man zum Umwandeln von Groß- in Kleinbuchstaben; die genauen Codes muss man nicht auswendig wissen, wenn man mit Ausdrücken wie `c - 'a'` rechnet.

#### Typische Fehler

- `int x = 3.5;` ist ein Compilerfehler (möglicher Genauigkeitsverlust). `float f = 3.5;` ebenso, weil `3.5` ein `double` ist.
- `long l = 3000000000;` ist ein Compilerfehler: das Literal ist zu groß für `int`. Richtig `3000000000L`.
- `char c = "a";` ist ein Compilerfehler: `"a"` ist ein `String`, `'a'` ein `char`.
- Überlauf bei Zwischenergebnissen, etwa `int sekunden = tage * 24 * 60 * 60 * 1000;` für Millisekunden.

#### Übungsaufgaben

**Aufgabe 2.1.** Welche Zeilen kompilieren nicht?

```java
short s = 10;
short t = s + 1;
s += 1;
int i = 'x';
char c = 120;
char e = i;
```

<details class="beweis" markdown="1">
<summary>Lösung</summary>

Zeile 2 (`s + 1` ist `int`, Zuweisung an `short` ohne Cast verboten) und Zeile 6 (`int` nach `char` ohne Cast). Zeile 3 kompiliert, weil zusammengesetzte Zuweisungen wie `+=` implizit zurückcasten. Zeile 5 kompiliert, weil `120` eine Konstante im `char`-Bereich ist. Ein ähnlicher Fall kommt im Teststil vor: eine Methode liefert `int`, das Ergebnis soll in eine `short`-Variable. Dann braucht es `short r = (short) methode(...);`.

</details>

**Aufgabe 2.2.** Was gibt der Code aus?

```java
int a = 1_000_000;
System.out.println(a * a);
System.out.println((long) a * a);
System.out.println(0.1f + 0.2f == 0.3f);
```

<details class="beweis" markdown="1">
<summary>Lösung</summary>

```
-727379968
1000000000000
true
```

$$10^{12} \bmod 2^{32}$$ ergibt als vorzeichenbehaftete Zahl $$-727379968$$. Mit dem Cast wird zuerst `a` zu `long`, dann rechnet die Multiplikation in `long`. In der dritten Zeile hat `float` zufällig genug Rundung, dass beide Seiten auf denselben `float` fallen. Das ist Glück und kein Grund, Gleitkommazahlen mit `==` zu vergleichen.

</details>

### 3 Ausdrücke, Operatoren und Casts

#### Arithmetik, Ganzzahldivision und Rest

Sind beide Operanden ganzzahlig, ist `/` die **Ganzzahldivision**: Der Bruch wird **in Richtung 0 abgeschnitten**. Der Rest `%` hat das **Vorzeichen des Dividenden**. Es gilt immer

$$
a = (a / b) \cdot b + (a \,\%\, b)
$$

```java
System.out.println(7 / 2);      // 3
System.out.println(-7 / 2);     // -3, nicht -4
System.out.println(7 % 3);      // 1
System.out.println(-7 % 3);     // -1, nicht 2
System.out.println(7 % -3);     // 1
System.out.println(7 / 2.0);    // 3.5, ein Operand double
System.out.println(1 / 2 * 4.0);   // 0.0: zuerst 1 / 2 = 0
System.out.println(5.5 % 2);    // 1.5, % geht auch mit double
```

Ausgabe: `3`, `-3`, `1`, `-1`, `1`, `3.5`, `0.0`, `1.5` (je eine Zeile).

Achtung: Das ist anders als $$a \bmod b$$ in der Mathematik (GDS, ADM), das immer in $$\{0, \dots, b-1\}$$ liegt. Für einen nicht negativen Rest bei negativem `a`: `((a % b) + b) % b` oder `Math.floorMod(a, b)`.
{: .notice--warning}

**Standardtricks mit `/` und `%`:**

| Ziel | Ausdruck | Beispiel mit `n = 4711` |
|---|---|---|
| letzte Ziffer | `n % 10` | `1` |
| letzte Ziffer abschneiden | `n / 10` | `471` |
| gerade? | `n % 2 == 0` (auch für negative `n` korrekt) | `false` |
| ungerade? | `n % 2 != 0` (nicht `== 1`, das scheitert bei negativen `n`) | `true` |
| teilbar durch `k`? | `n % k == 0` | – |
| Stunden, Minuten aus Sekunden `s` | `s / 3600`, `s % 3600 / 60` | – |

#### Inkrement und zusammengesetzte Zuweisung

`x++` liefert den **alten** Wert und erhöht danach, `++x` erhöht zuerst und liefert den **neuen** Wert. Für sich allein als Anweisung ist beides gleich.

```java
int i = 5;
int a = i++;      // a = 5, i = 6
int b = ++i;      // i = 7, b = 7
int c = i-- + i;  // 7 + 6 = 13, i = 6
System.out.println(a + " " + b + " " + c + " " + i);
int x = 10;
x += 3;           // x = x + 3
x *= 2;           // 26
x %= 7;           // 5
x /= 2;           // 2
System.out.println(x);
```

Ausgabe:

```
5 7 13 6
2
```

#### Vergleiche und logische Operatoren

Vergleiche `==`, `!=`, `<`, `<=`, `>`, `>=` liefern `boolean`. Logische Operatoren: `!` (nicht), `&&` (und), der Oder-Operator aus zwei senkrechten Strichen (im Folgenden „oder“), `^` (exklusives oder).

`&&` und „oder“ werten **kurzschließend** aus: Steht das Ergebnis nach dem linken Operanden fest, wird der rechte nicht mehr ausgewertet. Das schützt vor Fehlern:

```java
int n = 0;
boolean ok = n != 0 && 10 / n > 1;   // kein Fehler, rechte Seite wird übersprungen
System.out.println(ok);               // false
```

Die einfachen Operatoren `&` und das einfache „oder“ (ein Strich) werten bei `boolean` **beide** Seiten aus; mit `&` statt `&&` gäbe es hier eine `ArithmeticException`.

**De Morgan** (wie in GDS Aussagenlogik): `!(a && b)` ist gleichwertig zu „`!a` oder `!b`“, und „nicht (`a` oder `b`)“ zu `!a && !b`. Ein Bereichstest `0 <= x <= 9` existiert in Java nicht und muss als `0 <= x && x <= 9` geschrieben werden; das Gegenteil ist „`x < 0` oder `x > 9`“.

```java
boolean a = true, b = false;
System.out.println(!(a && b) == (!a || !b));   // true
System.out.println(!(a || b) == (!a && !b));   // true
```

#### Präzedenz (von stark nach schwach)

| Stufe | Operatoren |
|---|---|
| 1 | Postfix `x++`, `x--` |
| 2 | Präfix `++x`, `--x`, unäres `+ -`, `!`, Cast `(typ)` |
| 3 | `*`, `/`, `%` |
| 4 | `+`, `-` (auch String-Verkettung) |
| 5 | Vergleiche `<`, `<=`, `>`, `>=` |
| 6 | `==`, `!=` |
| 7 | `&&` |
| 8 | oder-Operator (zwei senkrechte Striche) |
| 9 | Bedingungsoperator `? :` |
| 10 | Zuweisungen `=`, `+=`, … (rechtsassoziativ) |

Ausgelassen sind die Bitoperatoren (Shifts `<<`, `>>`, `>>>` zwischen Stufe 4 und 5; bitweises und, exklusives oder, oder zwischen Stufe 6 und 7). Gleiche Stufe wird von links nach rechts ausgewertet, außer bei Zuweisungen. Im Zweifel Klammern setzen.

```java
System.out.println(2 + 3 * 4 % 5);      // 3 * 4 = 12, 12 % 5 = 2, 2 + 2 = 4
System.out.println(10 - 4 - 3);         // (10 - 4) - 3 = 3
System.out.println(true || false && false);   // && bindet stärker: true
int y = 5;
System.out.println(y > 3 ? "groß" : "klein");
```

Ausgabe: `4`, `3`, `true`, `groß`.

#### Typumwandlung (Casts)

**Erweiternde** Umwandlungen passieren automatisch: `byte → short → int → long → float → double` und `char → int`. **Einschränkende** brauchen einen expliziten Cast `(typ)`, weil Information verloren gehen kann.

**Binäre numerische Promotion:** Vor `+ - * / %` und Vergleichen werden `byte`, `short`, `char` mindestens zu `int`. Ist ein Operand `long`, `float` oder `double`, wird der andere auf diesen „größeren“ Typ gebracht.

```java
double d = 9.99;
int i = (int) d;                 // 9, abgeschnitten, nicht gerundet
int j = (int) -9.99;             // -9
long r = Math.round(9.5);        // 10, Math.round liefert long
int k = (int) Math.round(2.4);   // 2
double q = (double) 7 / 2;       // Cast bindet stärker: 7.0 / 2 = 3.5
double w = (double) (7 / 2);     // zuerst 7 / 2 = 3, dann 3.0
System.out.println(i + " " + j + " " + r + " " + k + " " + q + " " + w);
System.out.println((int) 3.99e10);   // zu groß: wird auf Integer.MAX_VALUE begrenzt
```

Ausgabe:

```
9 -9 10 2 3.5 3.0
2147483647
```

#### Die Klasse Math

`Math.abs`, `Math.max`, `Math.min`, `Math.pow` (liefert `double`), `Math.sqrt` (`double`), `Math.round`, `Math.floor`, `Math.ceil` (beide `double`), `Math.random()` (`double` in $$[0, 1)$$). Eine Zufallszahl von 1 bis 6: `(int) (Math.random() * 6) + 1`.

#### Typische Fehler

- `double avg = sum / n;` mit `int sum, n` ergibt eine abgeschnittene Zahl. Richtig: `(double) sum / n`.
- `x % 2 == 1` als Test auf ungerade scheitert für negative Zahlen.
- `if (a = 5)` ist ein Compilerfehler (`int` ist kein `boolean`); `==` gemeint.
- `(int) Math.pow(10, 2)` ist `100`, aber `Math.pow` liefert `double`; ohne Cast passt es nicht in eine `int`-Variable.
- `Math.round(x)` hat Typ `long`; `int r = Math.round(2.5);` kompiliert nicht.

#### Übungsaufgaben

**Aufgabe 3.1.** Werte von Hand aus: (a) `17 / 5 * 5 + 17 % 5` (b) `-17 / 5` (c) `-17 % 5` (d) `3 + 4 + "x" + 3 + 4` (e) `(char) ('a' + 25)` (f) `5 / 2 + 5 / 2.0`

<details class="beweis" markdown="1">
<summary>Lösung</summary>

(a) `17` (Identität von oben) (b) `-3` (c) `-2` (d) `"7x34"` (e) `'z'` (f) `2 + 2.5 = 4.5`

</details>

**Aufgabe 3.2 (Teststil).** Implementiere `int digitSum(int n)`, die die Quersumme von `n` liefert. Annahme: `n >= 0`. Beispielaufrufe: `digitSum(4711)` liefert `13`, `digitSum(0)` liefert `0`, `digitSum(1000000)` liefert `1`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static int digitSum(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;   // letzte Ziffer addieren
        n /= 10;         // letzte Ziffer abschneiden
    }
    return sum;
}
```

`n` ist ein Parameter und damit eine Kopie (Kapitel 6); ihn zu verändern, hat außerhalb keine Wirkung.

</details>

**Aufgabe 3.3 (Teststil).** Implementiere `boolean isLeapYear(int year)`: Ein Jahr ist Schaltjahr, wenn es durch 4 teilbar ist, aber nicht durch 100, außer es ist durch 400 teilbar. Annahme: `year > 0`. `isLeapYear(2024)` liefert `true`, `isLeapYear(1900)` liefert `false`, `isLeapYear(2000)` liefert `true`, `isLeapYear(2026)` liefert `false`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static boolean isLeapYear(int year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
```

Ein Ausdruck vom Typ `boolean` kann direkt zurückgegeben werden; `if (…) return true; else return false;` ist umständlich.

</details>

### 4 Verzweigungen

#### if, else if, else

```java
int punkte = 74;
String note;
if (punkte >= 90) {
    note = "Sehr gut";
} else if (punkte >= 75) {
    note = "Gut";
} else if (punkte >= 60) {
    note = "Befriedigend";
} else {
    note = "Nicht genügend";
}
System.out.println(note);   // Befriedigend
```

Die Bedingungen werden **von oben nach unten** geprüft, nur der **erste** passende Zweig läuft. Deshalb genügt im zweiten Zweig `punkte >= 75`; dass `punkte < 90` gilt, steht schon fest. Die Grenzen hier sind frei erfunden.

**Ohne geschweifte Klammern** gehört nur die **nächste Anweisung** zum `if`. Ein `else` gehört immer zum **nächsten offenen** `if` („dangling else“):

```java
int x = 5;
if (x > 10)
    if (x > 20)
        System.out.println("A");
else
    System.out.println("B");   // Einrückung täuscht: gehört zu if (x > 20)
System.out.println("Ende");
```

Ausgabe: nur `Ende`. Da `x > 10` falsch ist, wird das ganze innere `if`-`else` übersprungen. Daher: **immer** geschweifte Klammern.

#### Bedingungsoperator

`bedingung ? wertWennWahr : wertWennFalsch` ist ein **Ausdruck** und liefert einen Wert:

```java
int a = -4;
int betrag = a < 0 ? -a : a;          // 4
String s = a % 2 == 0 ? "gerade" : "ungerade";
System.out.println(betrag + " " + s); // 4 gerade
```

#### switch

Klassisches `switch` springt zum passenden `case` und läuft **ohne `break` in die folgenden Fälle weiter** (fall-through):

```java
int tag = 2;
switch (tag) {
    case 1:
        System.out.println("Montag");
    case 2:
        System.out.println("Dienstag");
    case 3:
        System.out.println("Mittwoch");
        break;
    default:
        System.out.println("anderer Tag");
}
```

Ausgabe:

```
Dienstag
Mittwoch
```

Ab Java 14 gibt es die **Pfeilform** ohne fall-through, auch als Ausdruck:

```java
int monat = 2;
int tage = switch (monat) {
    case 4, 6, 9, 11 -> 30;
    case 2 -> 28;
    default -> 31;
};
System.out.println(tage);   // 28
```

`switch` funktioniert mit `int` (und kleineren Ganzzahltypen), `char`, `String` und Aufzählungstypen, **nicht** mit `long`, `double` oder `boolean`. Die `case`-Werte müssen Konstanten sein; Bereiche wie `punkte >= 90` gehen nur mit `if`.

#### Typische Fehler

- `if (x > 0);` mit Strichpunkt: Der leere Befehl ist der `if`-Körper, der Block danach läuft immer.
- Lauter einzelne `if` statt `else if`: Dann können mehrere Zweige laufen.
- `break` im `switch` vergessen.
- `if (s == "ja")` bei Strings: vergleicht Referenzen (Kapitel 7). Richtig `s.equals("ja")`.
- Eine Methode mit Rückgabewert, bei der nicht jeder Zweig ein `return` hat: Compilerfehler „missing return statement“.

#### Übungsaufgaben

**Aufgabe 4.1.** Was gibt der Code für `n = 3`, `n = 4` und `n = 7` aus?

```java
switch (n % 4) {
    case 0: System.out.print("a");
    case 1: System.out.print("b"); break;
    case 3: System.out.print("c");
    default: System.out.print("d");
}
```

<details class="beweis" markdown="1">
<summary>Lösung</summary>

`n = 3`: Rest 3, also `cd`. `n = 4`: Rest 0, also `ab`. `n = 7`: Rest 3, also `cd`.

</details>

**Aufgabe 4.2 (Teststil).** Implementiere `int median3(int a, int b, int c)`, die den mittleren der drei Werte liefert, ohne zu sortieren und ohne Arrays. Beispielaufrufe: `median3(3, 1, 2)` liefert `2`, `median3(5, 5, 1)` liefert `5`, `median3(-1, 4, 9)` liefert `4`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static int median3(int a, int b, int c) {
    if ((a <= b && b <= c) || (c <= b && b <= a)) {
        return b;
    } else if ((b <= a && a <= c) || (c <= a && a <= b)) {
        return a;
    } else {
        return c;
    }
}
```

Alternative ohne Verzweigung: `Math.max(Math.min(a, b), Math.min(Math.max(a, b), c))`.

</details>

**Aufgabe 4.3 (Teststil).** Implementiere `String classify(int x)`: liefert `"null"` für 0, `"klein"` für Beträge von 1 bis 9, sonst `"groß positiv"` bzw. `"groß negativ"`. `classify(0)` liefert `"null"`, `classify(-7)` liefert `"klein"`, `classify(10)` liefert `"groß positiv"`, `classify(-10)` liefert `"groß negativ"`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static String classify(int x) {
    if (x == 0) {
        return "null";
    } else if (Math.abs(x) < 10) {
        return "klein";
    } else if (x > 0) {
        return "groß positiv";
    }
    return "groß negativ";
}
```

</details>

### 5 Schleifen

#### while, do-while, for

```java
int i = 1;
while (i <= 3) {           // Bedingung vor jedem Durchlauf
    System.out.print(i + " ");
    i++;
}
System.out.println();

int j = 10;
do {                       // Körper läuft mindestens einmal
    System.out.print(j + " ");
    j++;
} while (j <= 3);
System.out.println();

for (int k = 0; k < 10; k += 3) {   // Initialisierung; Bedingung; Schritt
    System.out.print(k + " ");
}
System.out.println();
```

Ausgabe:

```
1 2 3 
10 
0 3 6 9 
```

Die `for`-Schleife ist eine kompakte `while`-Schleife: `for (init; bed; schritt) { körper }` entspricht `init; while (bed) { körper; schritt; }` (bis auf den Gültigkeitsbereich der Laufvariable und das Verhalten von `continue`). Faustregel: `for`, wenn die Anzahl der Durchläufe vorher feststeht; `while`, wenn auf ein Ereignis gewartet wird; `do-while`, wenn mindestens ein Durchlauf nötig ist (z. B. Eingabe wiederholen, bis sie gültig ist).

**Durchläufe zählen:** `for (int i = a; i < b; i++)` läuft $$b - a$$ Mal, `for (int i = a; i <= b; i++)` läuft $$b - a + 1$$ Mal. Die meisten Indexfehler sind „off by one“.

#### break und continue

`break` beendet die **innerste** Schleife sofort, `continue` springt zum nächsten Durchlauf (bei `for` wird der Schritt noch ausgeführt).

```java
for (int n = 1; n <= 10; n++) {
    if (n % 3 == 0) {
        continue;          // Vielfache von 3 überspringen
    }
    if (n > 7) {
        break;             // ab 8 aufhören
    }
    System.out.print(n + " ");
}
System.out.println();
```

Ausgabe: `1 2 4 5 7 `

#### Verschachtelte Schleifen und Muster

Muster-Aufgaben sind im Teststil beliebt: Zeilen mit einer äußeren, Zeichen mit einer inneren Schleife.

```java
int n = 4;
for (int zeile = 1; zeile <= n; zeile++) {
    for (int s = 0; s < n - zeile; s++) {
        System.out.print(" ");
    }
    for (int s = 0; s < zeile; s++) {
        System.out.print("*");
    }
    System.out.println();
}
```

Ausgabe:

```
   *
  **
 ***
****
```

Die innere Schleife läuft bei jedem Durchlauf der äußeren komplett. Bei $$n$$ Zeilen und bis zu $$n$$ Zeichen sind das $$\frac{n(n+1)}{2}$$ Sterne, also quadratisch viele Schritte (Kapitel 11).

#### Schleifeninvarianten

Eine **Schleifeninvariante** ist eine Aussage, die vor jedem Durchlauf (bei der Prüfung der Bedingung) gilt. Zusammen mit der Abbruchbedingung beweist sie, dass das Ergebnis stimmt. **(B)**

```java
static int summe(int n) {      // Annahme: n >= 0
    int s = 0;
    int i = 0;
    // Invariante: s == 0 + 1 + ... + i
    while (i < n) {
        i++;
        s += i;
    }
    // Abbruch: i == n, also s == 0 + 1 + ... + n
    return s;
}
```

<details class="beweis" markdown="1">
<summary>Korrektheitsbeweis</summary>

**Initialisierung:** Vor dem ersten Durchlauf ist $$i = 0$$ und $$s = 0$$, die Invariante $$s = \sum_{k=0}^{i} k$$ gilt.

**Erhaltung:** Gilt $$s = \sum_{k=0}^{i} k$$ und läuft der Körper, dann ist danach $$i' = i + 1$$ und $$s' = s + i' = \sum_{k=0}^{i'} k$$.

**Terminierung:** $$n - i$$ ist eine ganze Zahl, die in jedem Durchlauf um 1 sinkt und solange die Schleife läuft positiv ist. Die Schleife endet also, und zwar mit $$i = n$$. Mit der Invariante folgt $$s = \sum_{k=0}^{n} k = \frac{n(n+1)}{2}$$.

</details>

Die Größe $$n - i$$ heißt **Variante** (Terminierungsfunktion): ganzzahlig, nach unten beschränkt, streng fallend.

#### Typische Fehler

- `for (int i = 0; i <= n; i++)` statt `< n` (ein Durchlauf zu viel, bei Arrays `ArrayIndexOutOfBoundsException`).
- Laufvariable im `while` nicht verändern: Endlosschleife.
- `for (…);` mit Strichpunkt: Die Schleife hat einen leeren Körper, der Block danach läuft einmal.
- Die Laufvariable einer `for`-Schleife existiert nach der Schleife nicht mehr; wer sie danach braucht, deklariert sie davor.
- Gleitkomma-Laufvariable `for (double x = 0; x != 1.0; x += 0.1)` endet nie, weil `x` nie exakt `1.0` ist.

#### Übungsaufgaben

**Aufgabe 5.1.** Was gibt der Code aus, und wie oft läuft die innere Schleife insgesamt?

```java
int count = 0;
for (int i = 0; i < 4; i++) {
    for (int j = i; j < 4; j++) {
        count++;
    }
}
System.out.println(count);
```

<details class="beweis" markdown="1">
<summary>Lösung</summary>

`10`. Für `i = 0, 1, 2, 3` läuft die innere Schleife `4, 3, 2, 1` Mal, zusammen $$\frac{4 \cdot 5}{2} = 10$$.

</details>

**Aufgabe 5.2 (Teststil).** Implementiere `int countMultiples(int from, int to)`, die zählt, wie viele Zahlen im Intervall $$[from, to]$$ durch 3 oder durch 5 teilbar sind, aber nicht durch beide. Annahmen: `0 < from <= to`. `countMultiples(1, 15)` liefert `6`, `countMultiples(15, 15)` liefert `0`, `countMultiples(9, 10)` liefert `2`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static int countMultiples(int from, int to) {
    int count = 0;
    for (int i = from; i <= to; i++) {
        boolean by3 = i % 3 == 0;
        boolean by5 = i % 5 == 0;
        if (by3 ^ by5) {       // genau eine der beiden
            count++;
        }
    }
    return count;
}
```

Von 1 bis 15: 3, 5, 6, 9, 10, 12 (die 15 ist durch beide teilbar und fällt weg).

</details>

**Aufgabe 5.3 (Teststil).** Implementiere `void printStairs(int n, char c)`: gibt `n` Zeilen aus. In Zeile `z` (ab 1 gezählt) steht `z`-mal das Zeichen `c`, bei geraden `z` jeweils mit `-` dazwischen, am Ende der Zeile die Zeilennummer in Klammern. Annahme: `n > 0`. Aufruf `printStairs(4, '#')` gibt aus:

```
#(1)
#-#(2)
###(3)
#-#-#-#(4)
```

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static void printStairs(int n, char c) {
    for (int z = 1; z <= n; z++) {
        for (int k = 0; k < z; k++) {
            if (z % 2 == 0 && k > 0) {
                System.out.print('-');
            }
            System.out.print(c);
        }
        System.out.println("(" + z + ")");
    }
}
```

Das Trennzeichen kommt **vor** jedes Zeichen außer dem ersten. So entsteht kein überzähliges `-` am Zeilenende.

</details>

**Aufgabe 5.4 (Teststil).** Implementiere `int gcd(int a, int b)` (größter gemeinsamer Teiler) mit dem euklidischen Algorithmus, iterativ. Annahmen: `a > 0`, `b > 0`. `gcd(12, 18)` liefert `6`, `gcd(17, 5)` liefert `1`, `gcd(100, 75)` liefert `25`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static int gcd(int a, int b) {
    while (b != 0) {
        int r = a % b;
        a = b;
        b = r;
    }
    return a;
}
```

Invariante: Der ggT von `a` und `b` bleibt gleich, weil $$\gcd(a, b) = \gcd(b, a \bmod b)$$. Am Ende ist $$\gcd(a, 0) = a$$.

</details>

### 6 Methoden

#### Aufbau

```java
//   Modifizierer  Rückgabetyp  Name   Parameterliste
public static      int          max3  (int a, int b, int c) {
    int m = Math.max(a, b);
    return Math.max(m, c);     // beendet die Methode und liefert den Wert
}
```

- Der **Methodenkopf** (Signatur plus Rückgabetyp) ist im Test vorgegeben und darf nicht verändert werden.
- `static` heißt: Die Methode gehört zur Klasse, nicht zu einem Objekt; sie kann direkt aus `main` als `max3(1, 2, 3)` aufgerufen werden. In EP1 sind praktisch alle Methoden `static`.
- `void` heißt: kein Rückgabewert. `return;` ohne Wert beendet eine `void`-Methode vorzeitig.
- Bei einem anderen Rückgabetyp muss **jeder** mögliche Weg mit `return wert;` enden, sonst Compilerfehler.
- **Formale Parameter** stehen im Kopf (`int a`), **aktuelle Parameter** (Argumente) beim Aufruf (`max3(4, x, y + 1)`). Anzahl, Reihenfolge und Typen müssen passen; erweiternde Umwandlungen (z. B. `int` nach `double`) passieren automatisch.

**Warum Methoden?** Wiederverwendung, Abstraktion (der Aufrufer muss nur wissen, *was* passiert), Testbarkeit (jede Methode einzeln prüfen). Eine Methode soll eine klar benennbare Aufgabe haben.

#### (B) Parameterübergabe: call by value

Java übergibt **immer eine Kopie des Wertes**. Ändert die Methode ihren Parameter, bleibt die Variable des Aufrufers unverändert:

```java
static void verdopple(int x) {
    x = x * 2;
    System.out.println("innen: " + x);
}

public static void main(String[] args) {
    int a = 5;
    verdopple(a);
    System.out.println("außen: " + a);
}
```

Ausgabe:

```
innen: 10
außen: 5
```

Bei **Referenztypen** (Arrays, Objekte) ist der kopierte Wert die **Referenz**. Methode und Aufrufer zeigen dann auf dasselbe Array. Änderungen am **Inhalt** sind außen sichtbar, eine neue Zuweisung an den Parameter nicht (Kapitel 8). Strings sind unveränderlich, verhalten sich daher wie Werte.

#### Überladen

Mehrere Methoden dürfen gleich heißen, wenn sich ihre **Parameterlisten** (Anzahl oder Typen) unterscheiden. Der Rückgabetyp allein reicht nicht. Der Compiler wählt die am besten passende Variante:

```java
static int f(int x)       { return 1; }
static int f(double x)    { return 2; }
static int f(int x, int y){ return 3; }

System.out.println(f(5));      // 1, exakter Treffer
System.out.println(f(5.0));    // 2
System.out.println(f('a'));    // 1, char wird zu int erweitert
System.out.println(f(5L));     // 2, long passt nur in double
System.out.println(f(1, 2));   // 3
```

#### Gültigkeitsbereich und Lebensdauer

Eine lokale Variable gilt von ihrer Deklaration bis zum Ende des **Blocks** `{ }`, in dem sie steht. Parameter gelten in der ganzen Methode. Zwei Methoden können also beide eine Variable `i` haben, ohne sich zu stören. In einem inneren Block darf man eine lokale Variable des äußeren Blocks nicht neu deklarieren.

```java
int x = 1;
{
    int y = 2;
    // int x = 3;   Compilerfehler: x ist schon definiert
    System.out.println(x + y);   // 3
}
// System.out.println(y);       Compilerfehler: y existiert hier nicht mehr
```

#### (B) Der Aufrufstapel

Jeder Methodenaufruf bekommt einen eigenen **Stack-Frame** mit seinen Parametern, lokalen Variablen und der Rücksprungadresse. Beim Aufruf wird ein Frame auf den Stapel gelegt, bei `return` wieder entfernt. Deshalb sind lokale Variablen verschiedener Aufrufe voneinander unabhängig, und deshalb funktioniert Rekursion (Kapitel 10). Objekte und Arrays liegen dagegen im **Heap**; im Frame steht nur die Referenz.

```java
static int quadrat(int z) { return z * z; }
static int summeQuadrate(int a, int b) { return quadrat(a) + quadrat(b); }

// main ruft summeQuadrate(3, 4):
// Stapel: main → summeQuadrate(a=3, b=4) → quadrat(z=3), liefert 9, Frame weg
//                                        → quadrat(z=4), liefert 16, Frame weg
//         summeQuadrate liefert 25 an main
```

#### Rückgabe statt Ausgabe

Im Teststil dürfen meist nur `main` und ausdrücklich genannte Methoden etwas ausgeben. Eine Methode, die einen Wert **liefern** soll, gibt ihn mit `return` zurück; `main` gibt ihn aus. Ein `System.out.println` in der Methode statt `return` kostet die Punkte.

#### Typische Fehler

- Rückgabewert ignorieren: `digitSum(n);` ohne Zuweisung oder Ausgabe tut nichts Sichtbares.
- `return` in einer Schleife zu früh: Die Methode endet beim ersten Durchlauf.
- Fehlendes `return` am Ende, wenn alle `return`s in `if`-Zweigen stehen.
- Erwarten, dass die Methode eine `int`-Variable des Aufrufers verändert.
- Methodenkopf verändert (anderer Name, zusätzlicher Parameter): Die automatischen Tests finden die Methode nicht.

#### Übungsaufgaben

**Aufgabe 6.1.** Was gibt der Code aus?

```java
static int g(int a, int b) {
    a = a + b;
    b = a - b;
    return a * b;
}

public static void main(String[] args) {
    int a = 2, b = 3;
    int c = g(b, a);
    System.out.println(a + " " + b + " " + c);
}
```

<details class="beweis" markdown="1">
<summary>Lösung</summary>

`2 3 15`. Im Aufruf ist das innere `a = 3`, `b = 2`. Dann `a = 5`, `b = 3`, Rückgabe `15`. Die Variablen in `main` bleiben `2` und `3`, weil nur Kopien übergeben wurden; dass die Namen gleich sind, spielt keine Rolle.

</details>

**Aufgabe 6.2 (Teststil).** Implementiere `boolean isPrime(int n)` und `int countPrimes(int from, int to)`, wobei `countPrimes` die Primzahlen im Intervall $$[from, to]$$ zählt und dafür `isPrime` aufruft (hier ausnahmsweise erlaubt, weil beide Köpfe vorgegeben sind). Annahmen: `n >= 0`, `0 <= from <= to`. `isPrime(1)` liefert `false`, `isPrime(97)` liefert `true`, `countPrimes(1, 20)` liefert `8`, `countPrimes(24, 28)` liefert `0`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static boolean isPrime(int n) {
    if (n < 2) {
        return false;
    }
    for (int d = 2; d * d <= n; d++) {   // Teiler bis zur Wurzel genügen
        if (n % d == 0) {
            return false;
        }
    }
    return true;
}

static int countPrimes(int from, int to) {
    int count = 0;
    for (int i = from; i <= to; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}
```

Hat $$n$$ einen Teiler $$d$$ mit $$d > \sqrt{n}$$, dann ist $$n / d < \sqrt{n}$$ ebenfalls ein Teiler. Daher reicht die Suche bis $$\sqrt{n}$$.

</details>

**Aufgabe 6.3 (Teststil).** Implementiere `double power(double base, int exp)` ohne `Math.pow`. Annahme: `exp` darf negativ sein, `base != 0`. `power(2, 10)` liefert `1024.0`, `power(2, -2)` liefert `0.25`, `power(-3, 3)` liefert `-27.0`, `power(5, 0)` liefert `1.0`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static double power(double base, int exp) {
    double result = 1;
    int n = Math.abs(exp);
    for (int i = 0; i < n; i++) {
        result *= base;
    }
    return exp < 0 ? 1 / result : result;
}
```

</details>

### 7 Strings und char

#### Die vier erlaubten Methoden

Ein `String` ist eine Folge von `char`s mit Indizes `0` bis `length() - 1`.

| Methode | Ergebnis | Beispiel mit `s = "Informatik"` |
|---|---|---|
| `s.length()` | Anzahl der Zeichen (`int`) | `10` |
| `s.charAt(i)` | Zeichen an Index `i` (`char`) | `s.charAt(0)` ist `'I'`, `s.charAt(9)` ist `'k'` |
| `s.substring(a, b)` | Teilstring von Index `a` **bis ausschließlich** `b`, Länge `b - a` | `s.substring(2, 5)` ist `"for"` |
| `s.substring(a)` | ab Index `a` bis zum Ende | `s.substring(7)` ist `"tik"` |
| `s.equals(t)` | inhaltlicher Vergleich (`boolean`) | `s.equals("Informatik")` ist `true` |

Gültige Grenzen: `0 <= a <= b <= length()`. Ein `substring(a, a)` ist der leere String `""`. Ein falscher Index wirft `StringIndexOutOfBoundsException` (bei `charAt(length())` ebenso).

```java
String s = "Informatik";
System.out.println(s.length());
System.out.println(s.charAt(s.length() - 1));
System.out.println(s.substring(2, 5));
System.out.println(s.substring(7));
System.out.println(s.substring(0, 0).length());
System.out.println(s.charAt(0) + s.charAt(1));      // char + char ist int!
System.out.println("" + s.charAt(0) + s.charAt(1));
```

Ausgabe:

```
10
k
for
tik
0
183
In
```

`'I' + 'n'` ist `73 + 110 = 183`, weil zwei `char`s als Zahlen addiert werden. Erst ein String links davon macht daraus eine Verkettung.

#### (B) Immutabilität

Strings sind **unveränderlich**. Keine Methode ändert einen bestehenden String; `+` und `substring` erzeugen **neue** Strings. Deshalb baut man Ergebnisse so auf:

```java
String result = "";
for (int i = 0; i < 3; i++) {
    result = result + i;    // neues Objekt, result zeigt darauf
}
System.out.println(result);  // 012
```

Bei sehr vielen Verkettungen ist das langsam (jedes Mal wird kopiert, insgesamt quadratisch); in der Praxis nimmt man dann `StringBuilder`, im Teststil ist der aber verboten.

#### (B) equals vs. ==

`==` vergleicht bei Referenztypen, ob beide Variablen auf **dasselbe Objekt** zeigen. `equals` vergleicht den **Inhalt**.

```java
String a = "Hallo";
String b = "Hallo";            // gleiches Literal: dasselbe Objekt aus dem String-Pool
String c = new String("Hallo");
String d = "Hal";
d = d + "lo";                  // zur Laufzeit erzeugt: neues Objekt
System.out.println(a == b);
System.out.println(a == c);
System.out.println(a == d);
System.out.println(a.equals(c) + " " + a.equals(d));
```

Ausgabe:

```
true
false
false
true true
```

Dass `a == b` hier `true` liefert, ist ein Nebeneffekt des String-Pools und darf nie die Programmlogik bestimmen. **Strings immer mit `equals` vergleichen.** `char`s dagegen sind primitiv und werden mit `==` verglichen: `s.charAt(i) == 'a'`.

#### Muster für String-Aufgaben

```java
// Rückwärts
static String reverse(String s) {
    String r = "";
    for (int i = s.length() - 1; i >= 0; i--) {
        r += s.charAt(i);
    }
    return r;
}

// Zeichen zählen
static int count(String s, char c) {
    int n = 0;
    for (int i = 0; i < s.length(); i++) {
        if (s.charAt(i) == c) {
            n++;
        }
    }
    return n;
}

// Benachbarte Zeichen: Schleife nur bis length() - 1
static int countPairs(String s) {
    int n = 0;
    for (int i = 0; i < s.length() - 1; i++) {
        if (s.charAt(i) == s.charAt(i + 1)) {
            n++;
        }
    }
    return n;
}

// Teilstring suchen nur mit substring und equals
static boolean containsWord(String s, String w) {
    for (int i = 0; i + w.length() <= s.length(); i++) {
        if (s.substring(i, i + w.length()).equals(w)) {
            return true;
        }
    }
    return false;
}
```

`reverse("Java")` liefert `"avaJ"`, `count("Banane", 'a')` liefert `2`, `countPairs("Kaffee")` liefert `2`, `containsWord("Programmieren", "gram")` liefert `true`.

**Zeichen klassifizieren und umwandeln** ohne weitere Methoden:

```java
char c = 'g';
boolean klein = c >= 'a' && c <= 'z';
boolean ziffer = c >= '0' && c <= '9';
char gross = (char) (c - 'a' + 'A');    // 'G'
char naechster = (char) ((c - 'a' + 1) % 26 + 'a');   // 'h', nach 'z' wieder 'a'
```

#### Typische Fehler

- Schleife bis `i <= s.length()`: `charAt` wirft eine Exception.
- `substring(a, b)` als „Länge `b`“ missverstanden.
- `s.charAt(i) == "a"`: Compilerfehler, `char` mit `String` verglichen.
- `s1 == s2` statt `s1.equals(s2)`.
- `r = s.charAt(i) + r;` funktioniert, aber `r = s.charAt(i) + s.charAt(j) + r;` addiert zuerst zwei `char`s als Zahlen.
- `s.length` ohne Klammern (das ist die Schreibweise für Arrays).

#### Übungsaufgaben

**Aufgabe 7.1 (Teststil).** Implementiere `String interleave(String a, String b)`: abwechselnd ein Zeichen aus `a` und eines aus `b`; ist ein String länger, wird der Rest angehängt. Annahmen: keine. `interleave("abc", "12")` liefert `"a1b2c"`, `interleave("", "xy")` liefert `"xy"`, `interleave("EP", "12345")` liefert `"E1P2345"`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static String interleave(String a, String b) {
    String r = "";
    int n = Math.min(a.length(), b.length());
    for (int i = 0; i < n; i++) {
        r = r + a.charAt(i) + b.charAt(i);
    }
    return r + a.substring(n) + b.substring(n);
}
```

`r + a.charAt(i) + b.charAt(i)` ist sicher, weil links schon ein String steht. Von dem kürzeren String ist `substring(n)` leer.

</details>

**Aufgabe 7.2 (Teststil).** Implementiere `int countRuns(String text, char c)`: zählt, wie viele maximale Blöcke aus mindestens zwei aufeinanderfolgenden `c` vorkommen. Annahme: `text.length() > 0`. `countRuns("xxaxxxbx", 'x')` liefert `2`, `countRuns("abc", 'x')` liefert `0`, `countRuns("oooo", 'o')` liefert `1`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static int countRuns(String text, char c) {
    int runs = 0;
    int len = 0;                       // Länge des aktuellen Blocks
    for (int i = 0; i < text.length(); i++) {
        if (text.charAt(i) == c) {
            len++;
            if (len == 2) {            // genau beim zweiten Zeichen zählen
                runs++;
            }
        } else {
            len = 0;
        }
    }
    return runs;
}
```

</details>

**Aufgabe 7.3 (Teststil).** Implementiere `String mirrorWithSeparator(String text, char sep)`: liefert `text` gefolgt von `sep` und `text` rückwärts. Annahme: `text.length() > 0`. `mirrorWithSeparator("abc", '-')` liefert `"abc-cba"`, `mirrorWithSeparator("x", '+')` liefert `"x+x"`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static String mirrorWithSeparator(String text, char sep) {
    String r = text + sep;
    for (int i = text.length() - 1; i >= 0; i--) {
        r += text.charAt(i);
    }
    return r;
}
```

</details>

**Aufgabe 7.4 (Teststil).** Implementiere `boolean isPalindrome(String s)`, wobei Groß- und Kleinschreibung bei Buchstaben `A` bis `Z` ignoriert wird. Annahme: `s.length() > 0`. `isPalindrome("Anna")` liefert `true`, `isPalindrome("Reittier")` liefert `true`, `isPalindrome("EP1")` liefert `false`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static boolean isPalindrome(String s) {
    int i = 0, j = s.length() - 1;
    while (i < j) {
        char a = s.charAt(i);
        char b = s.charAt(j);
        if (a >= 'A' && a <= 'Z') {
            a = (char) (a - 'A' + 'a');
        }
        if (b >= 'A' && b <= 'Z') {
            b = (char) (b - 'A' + 'a');
        }
        if (a != b) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
```

Hier ist eine Hilfsmethode `toLower(char)` naheliegend, im Teststil aber verboten; deshalb steht die Umwandlung zweimal da.

</details>

### 8 Arrays

#### Erzeugen und Zugreifen

Ein **Array** ist eine Folge fester Länge von Elementen **eines** Typs. Die Länge steht beim Erzeugen fest und ändert sich nie.

```java
int[] a = new int[5];             // fünf Elemente, alle 0
double[] d = new double[3];       // 0.0
boolean[] b = new boolean[2];     // false
String[] s = new String[2];       // null
int[] p = {2, 3, 5, 7, 11};       // Initialisierungsliste
int[] q = new int[] {1, 2, 3};    // geht auch als Ausdruck, z. B. als Argument

a[0] = 10;
a[a.length - 1] = 99;             // letztes Element
System.out.println(a.length);              // 5, Attribut ohne Klammern
System.out.println(p[2] + p[4]);           // 16
System.out.println(java.util.Arrays.toString(a));
```

Ausgabe:

```
5
16
[10, 0, 0, 0, 99]
```

Indizes laufen von `0` bis `length - 1`. Ein Zugriff außerhalb wirft `ArrayIndexOutOfBoundsException`. `System.out.println(a)` gibt **nicht** den Inhalt aus, sondern etwas wie `[I@1b6d3586` (Typ und Hashcode). `Arrays.toString` ist praktisch zum Testen; ob die Klasse `Arrays` im Test erlaubt ist, hängt von der Angabe ab.

#### Durchlaufen

```java
int[] werte = {4, -2, 9, 0, 9};
int summe = 0;
for (int i = 0; i < werte.length; i++) {   // mit Index
    summe += werte[i];
}
int max = werte[0];
for (int w : werte) {                       // for-each, nur lesen
    if (w > max) {
        max = w;
    }
}
System.out.println(summe + " " + max);      // 20 9
```

Das Maximum startet mit `werte[0]`, nicht mit `0`: Bei lauter negativen Werten wäre `0` falsch. Die for-each-Schleife liefert Kopien der Elemente; eine Zuweisung an `w` ändert das Array **nicht**.

#### (B) Referenzsemantik

Eine Array-Variable enthält eine **Referenz** auf das Array im Heap. Zuweisung kopiert nur die Referenz (**Aliasing**):

```java
int[] x = {1, 2, 3};
int[] y = x;            // y zeigt auf dasselbe Array
y[0] = 100;
System.out.println(x[0]);          // 100
int[] z = {100, 2, 3};
System.out.println(x == z);        // false: verschiedene Objekte
System.out.println(java.util.Arrays.equals(x, z));   // true: gleicher Inhalt
```

Ausgabe: `100`, `false`, `true`.

**Arrays als Parameter:** Die Referenz wird kopiert. Die Methode kann den Inhalt ändern (Seiteneffekt), aber nicht die Variable des Aufrufers auf ein anderes Array umbiegen:

```java
static void fuelle(int[] arr) {
    arr[0] = 7;          // wirkt außen
    arr = new int[3];    // nur die lokale Kopie der Referenz zeigt jetzt woanders hin
    arr[1] = 8;          // wirkt außen nicht
}

int[] m = {1, 1, 1};
fuelle(m);
System.out.println(java.util.Arrays.toString(m));   // [7, 1, 1]
```

Im K3-Teil „Referenzen und Seiteneffekte“ wird genau so etwas gefragt: Liefert eine Methode ein neues Array oder verändert sie das übergebene? Das steht in der Angabe und muss genau eingehalten werden.

#### Kopieren

```java
int[] orig = {5, 6, 7};
int[] kopie = new int[orig.length];
for (int i = 0; i < orig.length; i++) {
    kopie[i] = orig[i];                       // Element für Element
}
int[] k2 = orig.clone();                      // dasselbe kürzer
int[] k3 = java.util.Arrays.copyOf(orig, 5);  // [5, 6, 7, 0, 0], neue Länge
kopie[0] = 0;
System.out.println(orig[0]);                  // 5, unabhängig
```

**Vergrößern** geht nur durch ein neues, größeres Array und Umkopieren.

#### Mehrdimensionale Arrays

Ein zweidimensionales Array ist ein **Array von Arrays**. `m[i]` ist Zeile `i` (selbst ein Array), `m[i][j]` das Element.

```java
int[][] m = new int[3][4];             // 3 Zeilen, 4 Spalten, alles 0
int[][] t = { {1, 2, 3}, {4, 5, 6} };
System.out.println(t.length);          // 2 Zeilen
System.out.println(t[0].length);       // 3 Spalten
System.out.println(t[1][2]);           // 6

int[][] dreieck = new int[4][];        // Zeilen noch null
for (int i = 0; i < dreieck.length; i++) {
    dreieck[i] = new int[i + 1];       // unterschiedlich lange Zeilen
}
int[] zeile = t[0];
zeile[0] = 42;                         // ändert t[0][0], gleiche Referenz
System.out.println(t[0][0]);           // 42
```

Durchlaufen mit zwei Schleifen; immer `m[i].length` für die innere Grenze, dann funktioniert es auch bei ungleich langen Zeilen:

```java
int[][] g = { {1, 2}, {3, 4, 5}, {6} };
for (int i = 0; i < g.length; i++) {
    int zs = 0;
    for (int j = 0; j < g[i].length; j++) {
        zs += g[i][j];
    }
    System.out.print(zs + " ");        // Zeilensummen: 3 12 6
}
System.out.println();
```

#### Typische Fehler

- `for (int i = 0; i <= a.length; i++)`: Exception im letzten Durchlauf.
- `a.length()` (Methode) statt `a.length` (Attribut). Bei Strings ist es umgekehrt.
- `int[] b = a;` für eine Kopie halten.
- `a == b` oder `a.equals(b)` für einen Inhaltsvergleich verwenden (beide vergleichen Referenzen).
- Mit `0` als Startwert für das Maximum beginnen.
- Bei 2D-Arrays Zeilen und Spalten vertauschen: `m[zeile][spalte]`.

#### Übungsaufgaben

**Aufgabe 8.1.** Was gibt der Code aus?

```java
int[] a = {1, 2, 3, 4};
int[] b = a;
b[1] = a[2] + a[3];
a = new int[] {9, 9};
b[0] = a.length;
System.out.println(a[0] + " " + b[0] + " " + b[1] + " " + b.length);
```

<details class="beweis" markdown="1">
<summary>Lösung</summary>

`9 2 7 4`. Nach Zeile 3 ist das gemeinsame Array `[1, 7, 3, 4]`. Dann zeigt `a` auf ein neues Array `[9, 9]`, `b` noch auf das alte. `b[0] = 2` (Länge des neuen `a`).

</details>

**Aufgabe 8.2 (Teststil).** Implementiere `int[] prefixSums(int[] arr)`: liefert ein **neues** Array, in dem an Stelle `i` die Summe `arr[0] + … + arr[i]` steht; `arr` bleibt unverändert. Annahme: `arr.length > 0`. `prefixSums(new int[] {3, 1, 4, 1})` liefert `[3, 4, 8, 9]`, `prefixSums(new int[] {-2})` liefert `[-2]`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static int[] prefixSums(int[] arr) {
    int[] r = new int[arr.length];
    r[0] = arr[0];
    for (int i = 1; i < arr.length; i++) {
        r[i] = r[i - 1] + arr[i];
    }
    return r;
}
```

</details>

**Aufgabe 8.3 (Teststil).** Implementiere `void reverseInPlace(int[] arr)`: dreht die Reihenfolge **im übergebenen Array** um, ohne ein zweites Array. Annahme: keine. Nach `int[] v = {1, 2, 3, 4, 5}; reverseInPlace(v);` ist `v` gleich `[5, 4, 3, 2, 1]`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static void reverseInPlace(int[] arr) {
    for (int i = 0; i < arr.length / 2; i++) {
        int tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
    }
}
```

Nur bis zur Hälfte laufen, sonst wird zweimal getauscht und alles steht wieder am Anfang. Ein Tausch braucht eine Hilfsvariable.

</details>

**Aufgabe 8.4 (Teststil).** Implementiere `int[][] transpose(int[][] m)`: liefert die transponierte Matrix als neues Array. Annahme: `m` ist rechteckig, `m.length > 0`, `m[0].length > 0`. Für `{ {1, 2, 3}, {4, 5, 6} }` ist das Ergebnis `{ {1, 4}, {2, 5}, {3, 6} }`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static int[][] transpose(int[][] m) {
    int[][] t = new int[m[0].length][m.length];
    for (int i = 0; i < m.length; i++) {
        for (int j = 0; j < m[i].length; j++) {
            t[j][i] = m[i][j];
        }
    }
    return t;
}
```

</details>

**Aufgabe 8.5 (Teststil).** Implementiere `boolean hasDuplicate(int[] arr)`: `true`, wenn ein Wert mindestens zweimal vorkommt. `hasDuplicate(new int[] {4, 1, 7, 1})` liefert `true`, `hasDuplicate(new int[] {})` liefert `false`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static boolean hasDuplicate(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return true;
            }
        }
    }
    return false;
}
```

Laufzeit quadratisch. Auf einem sortierten Array würde ein Vergleich benachbarter Elemente reichen (linear).

</details>

### 9 Suchen und Sortieren

#### Lineare Suche

```java
static int indexOf(int[] arr, int key) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return i;        // erster Treffer
        }
    }
    return -1;               // Konvention: nicht gefunden
}
```

Funktioniert auf jedem Array. Im schlechtesten Fall (Schlüssel fehlt) werden alle $$n$$ Elemente angesehen: $$O(n)$$.

#### (B) Binäre Suche

Voraussetzung: Das Array ist **sortiert**. Idee: mit dem mittleren Element vergleichen und je nach Ergebnis nur links oder rechts weitersuchen. Der Suchbereich halbiert sich in jedem Schritt.

```java
static int binarySearch(int[] arr, int key) {
    int lo = 0, hi = arr.length - 1;
    // Invariante: wenn key vorkommt, dann in arr[lo..hi]
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (arr[mid] == key) {
            return mid;
        } else if (arr[mid] < key) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
}
```

Ablauf für `arr = {2, 5, 8, 12, 16, 23, 38, 56}` und `key = 23`:

| Schritt | `lo` | `hi` | `mid` | `arr[mid]` | Entscheidung |
|---|---|---|---|---|---|
| 1 | 0 | 7 | 3 | 12 | 12 < 23, rechts weiter |
| 2 | 4 | 7 | 5 | 23 | gefunden, Ergebnis 5 |

Nach $$k$$ Schritten sind höchstens $$n / 2^k$$ Kandidaten übrig. Die Suche endet spätestens nach $$\lfloor \log_2 n \rfloor + 1$$ Vergleichsrunden: $$O(\log n)$$. Bei einer Million Elementen sind das etwa 20 statt bis zu einer Million Vergleiche.

`lo + (hi - lo) / 2` statt `(lo + hi) / 2` vermeidet einen `int`-Überlauf bei sehr großen Arrays. Fehlerquellen sind `lo < hi` statt `lo <= hi` (letztes Element wird nie geprüft) und `lo = mid` statt `mid + 1` (Endlosschleife).
{: .notice--info}

#### (B) Selection Sort

Idee: Suche das Minimum im unsortierten Rest und tausche es an dessen Anfang. Nach Durchlauf `i` stehen die `i + 1` kleinsten Elemente sortiert vorne.

```java
static void selectionSort(int[] a) {
    for (int i = 0; i < a.length - 1; i++) {
        int min = i;
        for (int j = i + 1; j < a.length; j++) {
            if (a[j] < a[min]) {
                min = j;
            }
        }
        int tmp = a[i];
        a[i] = a[min];
        a[min] = tmp;
    }
}
```

Für `{29, 10, 14, 37, 13}`:

| nach Durchlauf | Array | |
|---|---|---|
| `i = 0` | `10 29 14 37 13` | 10 mit 29 getauscht |
| `i = 1` | `10 13 14 37 29` | 13 mit 29 getauscht |
| `i = 2` | `10 13 14 37 29` | 14 bleibt |
| `i = 3` | `10 13 14 29 37` | 29 mit 37 getauscht |

Immer $$\frac{n(n-1)}{2}$$ Vergleiche, egal wie die Eingabe aussieht, aber höchstens $$n - 1$$ Vertauschungen. Laufzeit $$O(n^2)$$. Nicht stabil (gleiche Werte können ihre Reihenfolge wechseln).

#### (B) Bubble Sort

Idee: Benachbarte Paare vergleichen und tauschen, wenn sie falsch herum stehen. Nach Durchlauf `i` ist das größte Element des Rests ganz nach hinten „aufgestiegen“. Gab es in einem Durchlauf keinen Tausch, ist das Array sortiert.

```java
static void bubbleSort(int[] a) {
    for (int i = 0; i < a.length - 1; i++) {
        boolean swapped = false;
        for (int j = 0; j < a.length - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                int tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}
```

Für `{5, 1, 4, 2, 8}`: nach Durchlauf 1 `1 4 2 5 8`, nach Durchlauf 2 `1 2 4 5 8`, Durchlauf 3 ohne Tausch, Ende. Schlechtester Fall (umgekehrt sortiert) $$O(n^2)$$, bester Fall (schon sortiert) mit dem `swapped`-Abbruch $$O(n)$$. Stabil.

#### (B) Insertion Sort

Idee wie beim Kartenspielen: Der linke Teil ist sortiert. Das nächste Element wird herausgenommen, größere Elemente rücken eine Stelle nach rechts, dann wird es in die Lücke gesetzt.

```java
static void insertionSort(int[] a) {
    for (int i = 1; i < a.length; i++) {
        int x = a[i];
        int j = i - 1;
        while (j >= 0 && a[j] > x) {   // Kurzschluss schützt vor a[-1]
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = x;
    }
}
```

Für `{7, 3, 5, 1}`: `i = 1` ergibt `3 7 5 1`, `i = 2` ergibt `3 5 7 1`, `i = 3` ergibt `1 3 5 7`. Bester Fall (sortiert) $$O(n)$$, schlechtester $$O(n^2)$$. Stabil, sehr schnell bei fast sortierten Daten.

#### Vergleich

| Verfahren | bester Fall | schlechtester Fall | Vertauschungen | stabil |
|---|---|---|---|---|
| Selection Sort | $$O(n^2)$$ | $$O(n^2)$$ | höchstens $$n - 1$$ | nein |
| Bubble Sort (mit Abbruch) | $$O(n)$$ | $$O(n^2)$$ | bis $$\frac{n(n-1)}{2}$$ | ja |
| Insertion Sort | $$O(n)$$ | $$O(n^2)$$ | bis $$\frac{n(n-1)}{2}$$ Verschiebungen | ja |
| Merge Sort, Quicksort (Ausblick) | $$O(n \log n)$$ | $$O(n \log n)$$ bzw. $$O(n^2)$$ | – | ja bzw. nein |

**Stabil** heißt: Elemente mit gleichem Schlüssel behalten ihre ursprüngliche Reihenfolge. Wichtig, wenn man nach mehreren Kriterien nacheinander sortiert. Ob Merge Sort und Quicksort in EP1 vorkommen, mit den Folien abgleichen.

#### Typische Fehler

- Binäre Suche auf einem unsortierten Array: liefert falsche Ergebnisse ohne Fehlermeldung.
- Beim Tauschen die Hilfsvariable vergessen: `a[i] = a[j]; a[j] = a[i];` macht beide Elemente gleich.
- Bubble Sort: innere Grenze `a.length - i` statt `a.length - 1 - i` führt zu `a[j + 1]` außerhalb.
- Insertion Sort: Bedingung `a[j] > x && j >= 0` in falscher Reihenfolge prüft `a[-1]`.

#### Übungsaufgaben

**Aufgabe 9.1.** Wende Insertion Sort auf `{4, 2, 6, 1, 3}` an und gib das Array nach jedem Durchlauf der äußeren Schleife an. Wie viele Verschiebungen (`a[j + 1] = a[j]`) gibt es insgesamt?

<details class="beweis" markdown="1">
<summary>Lösung</summary>

| `i` | Array | Verschiebungen |
|---|---|---|
| 1 | `2 4 6 1 3` | 1 |
| 2 | `2 4 6 1 3` | 0 |
| 3 | `1 2 4 6 3` | 3 |
| 4 | `1 2 3 4 6` | 2 |

Insgesamt 6. Das ist genau die Anzahl der **Fehlstände** (Paare, die falsch herum stehen): (4,2), (4,1), (4,3), (2,1), (6,1), (6,3).

</details>

**Aufgabe 9.2.** Welche Indizes `mid` prüft die binäre Suche oben im Array `{1, 3, 5, 7, 9, 11, 13}` bei der Suche nach `4`, und was liefert sie?

<details class="beweis" markdown="1">
<summary>Lösung</summary>

`mid = 3` (Wert 7, links weiter, `hi = 2`), `mid = 1` (Wert 3, rechts weiter, `lo = 2`), `mid = 2` (Wert 5, links weiter, `hi = 1`). Jetzt `lo > hi`, Ergebnis `-1`. An der Stelle `lo = 2` müsste die 4 eingefügt werden.

</details>

**Aufgabe 9.3 (Teststil).** Implementiere `int countGreater(int[] sorted, int x)`: liefert, wie viele Elemente des aufsteigend sortierten Arrays größer als `x` sind, in $$O(\log n)$$. `countGreater(new int[] {1, 3, 3, 5, 8}, 3)` liefert `2`, mit `x = 0` liefert sie `5`, mit `x = 8` liefert sie `0`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static int countGreater(int[] sorted, int x) {
    int lo = 0, hi = sorted.length;    // gesucht: erster Index mit Wert > x
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (sorted[mid] <= x) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return sorted.length - lo;
}
```

Diese Variante sucht eine **Grenze** statt eines Wertes. Invariante: Alle Elemente links von `lo` sind höchstens `x`, alle ab `hi` größer als `x`. Hier ist `lo < hi` und `hi = mid` richtig, weil `hi` selbst nicht mehr geprüft werden muss.

</details>

### 10 Rekursion

#### Idee

Eine Methode ist **rekursiv**, wenn sie sich selbst aufruft. Jede korrekte Rekursion braucht

1. einen **Basisfall** (Abbruch), der ohne Selbstaufruf ein Ergebnis liefert, und
2. einen **Rekursionsschritt**, der das Problem auf ein **kleineres** zurückführt, das sich dem Basisfall nähert.

Das entspricht genau der vollständigen Induktion (EIMA): Basisfall = Induktionsanfang, Rekursionsschritt = Induktionsschritt.

```java
static long fakultaet(int n) {        // Annahme: n >= 0
    if (n == 0) {
        return 1;                     // Basisfall: 0! = 1
    }
    return n * fakultaet(n - 1);      // n! = n * (n-1)!
}
```

`fakultaet(5)` liefert `120`, `fakultaet(20)` liefert `2432902008176640000`. Bei `fakultaet(21)` läuft auch `long` über.

#### (B) Ablauf auf dem Stack

Jeder Aufruf hat seinen eigenen Stack-Frame mit eigenem `n` (Kapitel 6). Die Multiplikationen passieren erst **auf dem Rückweg**:

```
fakultaet(3)
  = 3 * fakultaet(2)
        = 2 * fakultaet(1)
              = 1 * fakultaet(0)
                    = 1          ← Basisfall
              = 1
        = 2
  = 6
```

Fehlt der Basisfall oder wird er nie erreicht (z. B. `fakultaet(-1)`), wachsen die Frames, bis der Stapel voll ist: `StackOverflowError`.

Die Reihenfolge von Ausgaben vor und nach dem Selbstaufruf zeigt den Stapel direkt:

```java
static void zeige(int n) {
    if (n == 0) {
        return;
    }
    System.out.print(n + " ");    // auf dem Hinweg
    zeige(n - 1);
    System.out.print(n + " ");    // auf dem Rückweg
}
// zeige(3) gibt aus: 3 2 1 1 2 3
```

#### Fibonacci und der Aufrufbaum

$$
F_0 = 0,\quad F_1 = 1,\quad F_n = F_{n-1} + F_{n-2}
$$

```java
static int fib(int n) {
    if (n < 2) {
        return n;                     // zwei Basisfälle: fib(0) = 0, fib(1) = 1
    }
    return fib(n - 1) + fib(n - 2);   // baumartige Rekursion
}
```

Der Aufrufbaum von `fib(4)`:

```
                 fib(4)
              /          \
         fib(3)          fib(2)
        /     \          /    \
    fib(2)   fib(1)  fib(1)  fib(0)
    /    \
fib(1) fib(0)
```

Das sind 9 Aufrufe, `fib(2)` wird zweimal berechnet. Die Anzahl der Aufrufe $$A(n) = A(n-1) + A(n-2) + 1$$ wächst exponentiell (ungefähr wie $$1.618^n$$). `fib(40)` braucht schon über 300 Millionen Aufrufe. Iterativ geht es in $$O(n)$$:

```java
static long fibIter(int n) {
    long a = 0, b = 1;        // Invariante: a = F(i), b = F(i+1)
    for (int i = 0; i < n; i++) {
        long t = a + b;
        a = b;
        b = t;
    }
    return a;
}
// fibIter(10) liefert 55, fibIter(50) liefert 12586269025
```

#### Türme von Hanoi

$$n$$ Scheiben von Stab `A` nach `C` bringen, mit `B` als Hilfsstab; nie eine größere auf eine kleinere legen. Rekursive Idee: die obersten $$n - 1$$ Scheiben nach `B`, die größte nach `C`, dann die $$n - 1$$ Scheiben von `B` nach `C`.

```java
static void hanoi(int n, char von, char hilf, char nach) {
    if (n == 0) {
        return;
    }
    hanoi(n - 1, von, nach, hilf);
    System.out.println("Scheibe " + n + ": " + von + " -> " + nach);
    hanoi(n - 1, hilf, von, nach);
}
```

`hanoi(2, 'A', 'B', 'C')` gibt aus:

```
Scheibe 1: A -> B
Scheibe 2: A -> C
Scheibe 1: B -> C
```

Anzahl der Züge: $$Z(n) = 2 Z(n-1) + 1$$ mit $$Z(0) = 0$$, also $$Z(n) = 2^n - 1$$ (per Induktion). Für 3 Scheiben 7 Züge, für 64 Scheiben astronomisch viele.

#### Rekursion auf Strings und Arrays

Typisches Muster: ein Element abarbeiten, Rest rekursiv. Bei Arrays übergibt man einen Index, weil man keine Teilarrays bauen will.

```java
static int countChar(String s, char c) {
    if (s.length() == 0) {
        return 0;
    }
    int first = s.charAt(0) == c ? 1 : 0;
    return first + countChar(s.substring(1), c);
}

static int sum(int[] a, int i) {      // Summe von a[i] bis a[a.length - 1]
    if (i == a.length) {
        return 0;
    }
    return a[i] + sum(a, i + 1);
}

static boolean isPal(String s) {
    if (s.length() <= 1) {
        return true;
    }
    return s.charAt(0) == s.charAt(s.length() - 1)
        && isPal(s.substring(1, s.length() - 1));
}
```

`countChar("Rekursion", 'r')` liefert `1` (nur das kleine r), `sum(new int[] {1, 2, 3}, 0)` liefert `6`, `isPal("rotor")` liefert `true`.

#### (B) Rekursion oder Iteration?

- Jede Rekursion lässt sich iterativ schreiben (notfalls mit einem selbst verwalteten Stapel) und umgekehrt.
- Rekursion ist oft kürzer und näher an der mathematischen Definition (Fakultät, Hanoi, Baumstrukturen, Teile-und-herrsche wie binäre Suche oder Merge Sort).
- Kosten: Jeder Aufruf braucht einen Stack-Frame (Speicher, Zeit), bei großer Tiefe `StackOverflowError`. Mehrfache Rekursion wie bei `fib` kann Teilprobleme mehrfach lösen.
- **Endrekursion** (der Selbstaufruf ist die letzte Aktion) lässt sich direkt in eine Schleife umschreiben; Java optimiert das aber nicht automatisch.

#### Typische Fehler

- Basisfall fehlt oder wird übersprungen (z. B. `n == 0` als Basisfall, aber Schritt `n - 2` bei ungeradem `n`).
- Ergebnis des rekursiven Aufrufs nicht verwenden: `fakultaet(n - 1); return n;`.
- `return` vergessen: `if (…) { rek(…); }` statt `return rek(…);`.
- Das Problem wird nicht kleiner: `f(n)` ruft `f(n)` auf.

#### Übungsaufgaben

**Aufgabe 10.1.** Was liefert `m(13)`?

```java
static String m(int n) {
    if (n < 2) {
        return "" + n;
    }
    return m(n / 2) + (n % 2);
}
```

<details class="beweis" markdown="1">
<summary>Lösung</summary>

`"1101"`, die Binärdarstellung von 13. Aufrufe: `m(13)` → `m(6) + 1` → `m(3) + 0 + 1` → `m(1) + 1 + 0 + 1` → `"1" + "1" + "0" + "1"`. Die Reste entstehen von hinten, werden aber durch die Rekursion in die richtige Reihenfolge gebracht (vergleiche das Divisionsverfahren in GDS).

</details>

**Aufgabe 10.2 (Teststil, rekursiv).** Implementiere `int digitSumRec(int n)` rekursiv, ohne Schleifen. Annahme: `n >= 0`. `digitSumRec(4711)` liefert `13`, `digitSumRec(5)` liefert `5`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static int digitSumRec(int n) {
    if (n < 10) {
        return n;
    }
    return n % 10 + digitSumRec(n / 10);
}
```

</details>

**Aufgabe 10.3 (Teststil, rekursiv).** Implementiere `String removeChar(String s, char c)` rekursiv: liefert `s` ohne alle Vorkommen von `c`. Keine Schleifen. `removeChar("Banane", 'n')` liefert `"Baae"`, `removeChar("", 'x')` liefert `""`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static String removeChar(String s, char c) {
    if (s.length() == 0) {
        return "";
    }
    String rest = removeChar(s.substring(1), c);
    return s.charAt(0) == c ? rest : s.charAt(0) + rest;
}
```

`s.charAt(0) + rest` ist sicher, weil `rest` ein String ist.

</details>

**Aufgabe 10.4 (Teststil, rekursiv).** Implementiere `int maxRec(int[] a, int i)`: liefert das Maximum von `a[i]` bis zum Ende. Annahme: `0 <= i < a.length`. `maxRec(new int[] {3, 9, -1, 4}, 0)` liefert `9`, `maxRec(new int[] {3, 9, -1, 4}, 2)` liefert `4`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static int maxRec(int[] a, int i) {
    if (i == a.length - 1) {
        return a[i];
    }
    return Math.max(a[i], maxRec(a, i + 1));
}
```

Basisfall ist das letzte Element, nicht das leere Restarray, weil das Maximum einer leeren Menge nicht definiert ist.

</details>

**Aufgabe 10.5 (Teststil, rekursiv).** Implementiere `int binom(int n, int k)` rekursiv über das Pascalsche Dreieck: $$\binom{n}{0} = \binom{n}{n} = 1$$ und $$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$$. Annahme: `0 <= k <= n`. `binom(5, 2)` liefert `10`, `binom(6, 3)` liefert `20`.

<details class="beweis" markdown="1">
<summary>Musterlösung</summary>

```java
static int binom(int n, int k) {
    if (k == 0 || k == n) {
        return 1;
    }
    return binom(n - 1, k - 1) + binom(n - 1, k);
}
```

Wie bei `fib` entstehen viele doppelte Aufrufe; die Laufzeit wächst exponentiell.

</details>

### 11 Laufzeit und O-Notation

#### Idee

Statt Sekunden zählt man **elementare Schritte** (Zuweisung, Vergleich, Arithmetik, Arrayzugriff) in Abhängigkeit von der Eingabegröße $$n$$, meist im **schlechtesten Fall**. Konstante Faktoren und kleinere Terme sind uninteressant, es zählt das Wachstum.

**Definition (B).** $$f \in O(g)$$, wenn es Konstanten $$c > 0$$ und $$n_0$$ gibt mit $$f(n) \le c \cdot g(n)$$ für alle $$n \ge n_0$$. Also: $$f$$ wächst höchstens so schnell wie $$g$$. Beispiel: $$3n^2 + 5n + 7 \in O(n^2)$$, denn für $$n \ge 1$$ ist $$3n^2 + 5n + 7 \le 3n^2 + 5n^2 + 7n^2 = 15 n^2$$, also $$c = 15$$, $$n_0 = 1$$.

Verwandt: $$\Omega(g)$$ (mindestens so schnell) und $$\Theta(g)$$ (genau so schnell, beides zugleich). Umgangssprachlich wird oft $$O$$ gesagt, wo $$\Theta$$ gemeint ist.

#### Typische Klassen

| Klasse | Name | Beispiel | $$n = 1000$$, grob |
|---|---|---|---|
| $$O(1)$$ | konstant | Arrayzugriff `a[i]`, `s.length()` | 1 |
| $$O(\log n)$$ | logarithmisch | binäre Suche | 10 |
| $$O(n)$$ | linear | lineare Suche, Maximum, Summe | 1000 |
| $$O(n \log n)$$ | – | Merge Sort | 10 000 |
| $$O(n^2)$$ | quadratisch | Selection, Bubble, Insertion Sort; alle Paare vergleichen | 1 000 000 |
| $$O(2^n)$$ | exponentiell | naive Fibonacci-Rekursion, Hanoi, alle Teilmengen | unvorstellbar |

#### Laufzeit aus Code ablesen

- Hintereinander: Laufzeiten addieren, die größte dominiert. $$O(n) + O(n^2) = O(n^2)$$.
- Schleife: Anzahl der Durchläufe mal Kosten des Körpers.
- Verschachtelte Schleifen bis $$n$$: $$O(n^2)$$; auch wenn die innere bei `i` beginnt, denn $$\frac{n(n-1)}{2} \in O(n^2)$$.
- Schleife, deren Variable sich halbiert oder verdoppelt: $$O(\log n)$$.
- Rekursion: Anzahl der Aufrufe mal Arbeit pro Aufruf (Aufrufbaum zeichnen).

```java
// (a) O(n)
for (int i = 0; i < n; i++) { s += i; }

// (b) O(n^2)
for (int i = 0; i < n; i++)
    for (int j = 0; j < i; j++) { s++; }

// (c) O(log n): i verdoppelt sich
for (int i = 1; i < n; i *= 2) { s++; }

// (d) O(n log n)
for (int i = 0; i < n; i++)
    for (int j = 1; j < n; j *= 2) { s++; }

// (e) O(n): die innere Schleife läuft insgesamt nur 10-mal pro äußerem Durchlauf
for (int i = 0; i < n; i++)
    for (int j = 0; j < 10; j++) { s++; }
```

**Achtung bei Strings:** `result += c` in einer Schleife kopiert jedes Mal den bisherigen String. Für einen Ergebnisstring der Länge $$n$$ sind das $$1 + 2 + \dots + n \in O(n^2)$$ kopierte Zeichen. Ebenso kostet `substring` Zeit proportional zur Länge; die rekursiven String-Lösungen in Kapitel 10 sind daher quadratisch.

#### Übungsaufgaben

**Aufgabe 11.1.** Gib die Laufzeit in O-Notation an.

```java
int c = 0;
for (int i = n; i > 0; i /= 2) {
    for (int j = 0; j < n; j++) {
        c++;
    }
}
```

<details class="beweis" markdown="1">
<summary>Lösung</summary>

Die äußere Schleife läuft etwa $$\log_2 n + 1$$ Mal, die innere jedes Mal $$n$$ Mal: $$O(n \log n)$$.

</details>

**Aufgabe 11.2.** Ein Algorithmus braucht für $$n = 1000$$ eine Sekunde. Wie lange ungefähr für $$n = 2000$$, wenn er in $$\Theta(n)$$, $$\Theta(n^2)$$ bzw. $$\Theta(2^n)$$ liegt?

<details class="beweis" markdown="1">
<summary>Lösung</summary>

$$\Theta(n)$$: etwa 2 s. $$\Theta(n^2)$$: etwa 4 s ($$2^2$$). $$\Theta(2^n)$$: etwa $$2^{1000}$$ s, also praktisch nie fertig.

</details>

**Aufgabe 11.3 (B).** Warum ist $$O(\log_2 n) = O(\log_{10} n)$$?

<details class="beweis" markdown="1">
<summary>Lösung</summary>

$$\log_2 n = \frac{\log_{10} n}{\log_{10} 2}$$. Die Logarithmen unterscheiden sich nur um den konstanten Faktor $$\frac{1}{\log_{10} 2} \approx 3.32$$, und konstante Faktoren verschwinden in der O-Notation. Deshalb schreibt man einfach $$O(\log n)$$.

</details>

### 12 Klassen und Objekte (Grundlagen)

Ob und wie weit Klassen und Objekte in EP1 behandelt werden, weiß ich nicht. Vermutlich kommen sie ausführlich erst in EP2. Dieser Abschnitt erklärt nur, was man zum Verständnis von `String`, Arrays und `Scanner` braucht. Mit der LVA abgleichen.
{: .notice--warning}

Eine **Klasse** ist ein Bauplan, ein **Objekt** eine konkrete Instanz davon, erzeugt mit `new`. Objekte haben **Zustand** (Objektvariablen, Felder) und **Verhalten** (Methoden ohne `static`, die auf dem Objekt arbeiten).

```java
public class Punkt {
    int x, y;                            // Objektvariablen, Standardwert 0

    Punkt(int x, int y) {                // Konstruktor
        this.x = x;                      // this.x ist das Feld, x der Parameter
        this.y = y;
    }

    int abstandQuadrat(Punkt p) {        // Objektmethode, kein static
        int dx = x - p.x, dy = y - p.y;
        return dx * dx + dy * dy;
    }

    public static void main(String[] args) {
        Punkt a = new Punkt(1, 2);
        Punkt b = new Punkt(4, 6);
        Punkt c = a;                     // Referenz kopiert, kein neues Objekt
        c.x = 0;
        System.out.println(a.x + " " + a.abstandQuadrat(b));
        System.out.println(a == c);
    }
}
```

Ausgabe:

```
0 32
true
```

- Variablen von Klassentyp enthalten **Referenzen**, wie bei Arrays. `null` heißt „kein Objekt“; ein Methodenaufruf auf `null` wirft `NullPointerException`.
- `==` vergleicht Referenzen, `equals` den Inhalt, sofern die Klasse `equals` sinnvoll definiert (bei `String` der Fall, bei `Punkt` oben nicht).
- `static`-Methoden gehören zur Klasse und haben kein `this`; Objektmethoden werden auf einem Objekt aufgerufen: `s.length()`, `a.abstandQuadrat(b)`.
- Weiterführend (EP2): Kapselung mit `private`, Getter und Setter, Vererbung, Interfaces.

### 13 Testen und Debuggen

#### Testen

Ein **Testfall** besteht aus Eingabe und erwarteter Ausgabe, festgelegt **bevor** man das Ergebnis des Programms sieht. Im Teststil sind die Beispielaufrufe aus der Angabe die Mindestmenge; eigene Fälle ergänzen:

- **Normalfall:** ein typischer Wert.
- **Randfälle:** kleinste erlaubte Eingabe (Länge 1, `n = 0`, `x == y`), Grenzen von Intervallen, erstes und letztes Element.
- **Sonderfälle:** negative Zahlen, gleiche Werte, gesuchtes Element fehlt, String nur aus dem gesuchten Zeichen.

Testen kann nur die **Anwesenheit** von Fehlern zeigen, nicht ihre Abwesenheit (Dijkstra). Für Korrektheit braucht es eine Begründung, z. B. eine Schleifeninvariante.

Ein einfacher Testrahmen in `main`, ohne Bibliotheken:

```java
static void check(String name, int actual, int expected) {
    String ok = actual == expected ? "OK  " : "FAIL";
    System.out.println(ok + " " + name + ": " + actual + " (erwartet " + expected + ")");
}

public static void main(String[] args) {
    check("digitSum(4711)", digitSum(4711), 13);
    check("digitSum(0)", digitSum(0), 0);
    check("gcd(12, 18)", gcd(12, 18), 6);
}
```

Im Test selbst sind eigene Hilfsmethoden meist verboten; dort die Ausgaben in `main` direkt gegen die Angabe vergleichen. In der Praxis verwendet man **JUnit** mit `assertEquals(erwartet, tatsächlich)`.

#### Debuggen

1. **Fehler reproduzieren:** kleinste Eingabe finden, bei der es schiefgeht.
2. **Fehlermeldung lesen:** Exception-Typ und Zeilennummer im Stack-Trace. Die oberste Zeile mit eigenem Code ist meist die Stelle.
3. **Hypothese bilden** und prüfen: Kontrollausgaben (`System.out.println("i=" + i + " sum=" + sum);`) oder der **Debugger** in IntelliJ.
4. **Debugger:** Breakpoint durch Klick neben die Zeilennummer, Start mit dem Käfer-Symbol. *Step Over* führt die Zeile aus, *Step Into* springt in eine aufgerufene Methode, *Step Out* läuft bis zum Ende der aktuellen Methode. Im Variablenfenster sieht man alle lokalen Variablen und den Aufrufstapel (praktisch bei Rekursion).
5. Kontrollausgaben vor der Abgabe entfernen, wenn die Methode laut Angabe nichts ausgeben darf.

#### Häufige Exceptions

| Exception | Ursache |
|---|---|
| `ArithmeticException: / by zero` | Ganzzahldivision oder `%` durch 0 |
| `ArrayIndexOutOfBoundsException` | Index kleiner 0 oder mindestens `length` |
| `StringIndexOutOfBoundsException` | dasselbe bei `charAt` oder `substring` |
| `NullPointerException` | Methode oder Feldzugriff auf `null`, z. B. Element eines `new String[3]` |
| `StackOverflowError` | Rekursion ohne erreichbaren Basisfall |
| `InputMismatchException` | `Scanner.nextInt()` liest keine Zahl |

#### Übungsaufgabe

**Aufgabe 13.1.** Die Methode soll den Index des letzten Vorkommens von `c` in `s` liefern, oder `-1`. Finde die zwei Fehler und gib Testfälle an, die sie aufdecken.

```java
static int lastIndex(String s, char c) {
    for (int i = s.length(); i > 0; i--) {
        if (s.charAt(i) == c) {
            return i;
        }
    }
    return -1;
}
```

<details class="beweis" markdown="1">
<summary>Lösung</summary>

Start bei `s.length()` wirft sofort `StringIndexOutOfBoundsException` (Test: `lastIndex("abc", 'x')` oder jede nicht leere Eingabe). Die Bedingung `i > 0` prüft Index 0 nie (Test: `lastIndex("abc", 'a')` muss `0` liefern). Richtig: `for (int i = s.length() - 1; i >= 0; i--)`.

</details>

## Theoriefragen-Checkliste

| Frage | Kapitel |
|---|---|
| Was machen Compiler und JVM, was ist Bytecode? | 1 |
| Unterschied Compilerfehler, Laufzeitfehler, logischer Fehler | 1 |
| Die acht primitiven Typen mit Größe; warum ist `String` keiner? | 2 |
| Was passiert bei `Integer.MAX_VALUE + 1` und warum? | 2 |
| Warum ist `0.1 + 0.2 == 0.3` falsch, wie vergleicht man richtig? | 2 |
| Ganzzahldivision und `%` bei negativen Zahlen | 3 |
| Kurzschlussauswertung und wozu sie gut ist | 3 |
| Erweiternde und einschränkende Umwandlung, numerische Promotion | 3 |
| fall-through im `switch` | 4 |
| Schleifeninvariante und Variante; Korrektheitsbeweis einer Schleife | 5 |
| call by value; was ändert sich bei Arrays als Parameter? | 6, 8 |
| Überladen: wann erlaubt, wie wird gewählt? | 6 |
| Stack-Frame, Gültigkeitsbereich, Stack vs. Heap | 6 |
| `equals` vs. `==`; Immutabilität von Strings | 7 |
| Referenzsemantik, Aliasing, flache Kopie | 8 |
| 2D-Arrays als Array von Arrays | 8 |
| Binäre Suche: Voraussetzung, Ablauf, Laufzeit | 9 |
| Selection, Bubble, Insertion Sort: Idee, bester und schlechtester Fall, Stabilität | 9 |
| Basisfall und Rekursionsschritt; `StackOverflowError` | 10 |
| Aufrufbaum von `fib`, warum exponentiell? | 10 |
| Hanoi: Algorithmus und $$2^n - 1$$ Züge | 10 |
| Rekursion vs. Iteration | 10 |
| Definition von $$O(g)$$, Laufzeit aus Code ablesen | 11 |
| Testfälle wählen: Rand- und Sonderfälle | 13 |

## Selbsttest

**1.** Was gibt `System.out.println(1 + 2 + "3" + 4 * 5);` aus?

<details class="beweis" markdown="1">
<summary>Lösung</summary>

`3320`. Zuerst `1 + 2 = 3`, dann `"33"`, dann `4 * 5 = 20` (Punkt vor Strich), angehängt `"3320"`.

</details>

**2.** Warum liefert `-7 % 2 == 1` den Wert `false`, und wie testet man korrekt auf ungerade?

<details class="beweis" markdown="1">
<summary>Lösung</summary>

In Java hat der Rest das Vorzeichen des Dividenden: `-7 % 2` ist `-1`. Korrekt ist `n % 2 != 0`.

</details>

**3.** Nach `int[] a = {1, 2}; int[] b = a; b[0] = 5;` – welchen Wert hat `a[0]`, und warum?

<details class="beweis" markdown="1">
<summary>Lösung</summary>

`5`. `b = a` kopiert nur die Referenz; beide Variablen zeigen auf dasselbe Array.

</details>

**4.** Welche Laufzeit hat Insertion Sort auf einem bereits sortierten Array, welche Selection Sort?

<details class="beweis" markdown="1">
<summary>Lösung</summary>

Insertion Sort $$O(n)$$: Die `while`-Schleife bricht sofort ab. Selection Sort bleibt $$O(n^2)$$, weil es das Minimum immer im ganzen Rest sucht.

</details>

**5.** Wie viele Aufrufe von `fib` (naive Rekursion, Basisfall `n < 2`) entstehen bei `fib(5)`?

<details class="beweis" markdown="1">
<summary>Lösung</summary>

15. Mit $$A(0) = A(1) = 1$$ und $$A(n) = A(n-1) + A(n-2) + 1$$: $$A(2) = 3$$, $$A(3) = 5$$, $$A(4) = 9$$, $$A(5) = 15$$.

</details>

## Offene Punkte

- Übungstermine, Abgabemodus und Fristen der Aufgabenblätter für K1 und K2: in TISS/TUWEL prüfen.
- Beurteilung und Notenschlüssel für K1 und K2 (Gewichtung von Aufgabenblättern, Feedback, Quiz, Tests): in TISS/TUWEL prüfen.
- Termin und Form eventueller Abschlusstests oder Prüfungen: in TISS/TUWEL prüfen.
- Kapitel 2–13 mit den EP1-Folien abgleichen: Begriffe, Reihenfolge, ob Merge Sort, Quicksort und Klassen vorkommen.
- Ob die Klasse `Arrays` (z. B. `Arrays.toString`) in Tests und Aufgaben verwendet werden darf: Angabe prüfen.
- Zuordnung der *Think Java*-Kapitel im Inhaltsverzeichnis gegenprüfen.

## Quellen

- LVA EP1: Informationsblatt „EP1-Kompetenzstufen“ (K1, K2, K3, Einstufungstests); Beispieltests K2 aus TUWEL (nur Form und Einschränkungen übernommen, keine Aufgaben).
- Oracle, *The Java Tutorials – Learning the Java Language*, [docs.oracle.com/javase/tutorial/java/](https://docs.oracle.com/javase/tutorial/java/index.html).
- Oracle, *Java SE 21 API Specification*, [docs.oracle.com/en/java/javase/21/docs/api/](https://docs.oracle.com/en/java/javase/21/docs/api/index.html).
- Allen B. Downey, Chris Mayfield, *Think Java*, 2. Auflage, Green Tea Press, [greenteapress.com/wp/think-java-2e/](https://greenteapress.com/wp/think-java-2e/).
- Nick Parlante, *CodingBat Java*, [codingbat.com/java](https://codingbat.com/java).
- Harvard, *CS50x*, [cs50.harvard.edu/x/](https://cs50.harvard.edu/x/).
- JetBrains, *IntelliJ IDEA – Debug code*, [jetbrains.com/help/idea/debugging-code.html](https://www.jetbrains.com/help/idea/debugging-code.html).
