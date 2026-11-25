---
layout: single
title: "Informatik an der TU Wien"
permalink: /tuwien/
author_profile: true
lang: de
excerpt: "Bachelorstudium Informatik an der TU Wien seit Oktober 2026: Aufnahme, Lehrveranstaltungen, Wochenplan."
header:
  og_image: "tuwien/woche.png"
---

{% include base_path %}

Seit Oktober 2026 studiere ich **Informatik (Bachelor, 033 521) an der TU Wien**.

## Aufnahmeverfahren

Für Informatik gibt es an der TU Wien ein Aufnahmeverfahren in drei Schritten:

| Datum | Schritt |
|---|---|
| 01.04.2026 | Anmeldung, Daten vervollständigen |
| 02.04.2026 | Registrierung mit Online-Self-Assessment |
| 13.07.2026 | Reihungstest |

Ergebnis: **Rang 40 von 645**, Studienplatz zugeteilt.

![Ergebnis des Reihungstests: Rang 40 von 645](/images/tuwien/rang.jpg)

## Lehrveranstaltungen

Zu jeder Lehrveranstaltung gibt es eine eigene Seite mit Steckbrief, Inhalt, dem, was ich gelernt habe, und eigenen Übungen. Nur eigene Notizen und eigener Code, keine Folien und keine Prüfungsangaben.

{% assign sem = site.lva | group_by: "semester" | sort: "name" | reverse %}
{% for s in sem %}
{% assign jahr = s.name | slice: 0, 4 %}{% assign art = s.name | slice: 4, 1 %}
### {% if art == "W" %}Wintersemester{% else %}Sommersemester{% endif %} {{ jahr }}

<table>
  <thead><tr><th>Nr.</th><th>Typ</th><th>Lehrveranstaltung</th><th>SWS</th><th>ECTS</th><th>Status</th></tr></thead>
  <tbody>
  {% assign sum_sws = 0 %}{% assign sum_ects = 0 %}
  {% assign items = s.items | sort: "lva_nr" %}{% for l in items %}{% if l.unlisted %}{% continue %}{% endif %}
    {% if l.sws %}{% assign sum_sws = sum_sws | plus: l.sws %}{% endif %}{% if l.ects %}{% assign sum_ects = sum_ects | plus: l.ects %}{% endif %}
    <tr>
      <td>{{ l.lva_nr }}</td>
      <td>{{ l.typ }}</td>
      <td><a href="{{ l.url | relative_url }}">{{ l.title }}</a></td>
      <td>{% if l.sws %}{{ l.sws }}{% else %}–{% endif %}</td>
      <td>{% if l.ects and l.ects != 0 %}{{ l.ects }}{% else %}–{% endif %}</td>
      <td>{{ l.status }}</td>
    </tr>
  {% endfor %}
    <tr><td></td><td></td><th>Summe</th><th>{{ sum_sws }}</th><th>{{ sum_ects }}</th><td></td></tr>
  </tbody>
</table>
{% endfor %}

## Die erste Woche

So sah mein Kalender in der ersten Studienwoche aus (KW 41, 5.–11. Oktober 2026):

![Wochenplan KW 41 mit acht Lehrveranstaltungen](/images/tuwien/woche.png)

[TU Wien im Portfolio](/portfolio/2026-10-01-tuwien/){: .btn .btn--inverse}
