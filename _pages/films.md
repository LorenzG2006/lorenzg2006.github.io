---
layout: single
title: "Films"
permalink: /films/
author_profile: true
---

{% include base_path %}

{% assign genres = site.data.films.genres %}
{% assign films = site.data.films.films %}

I collect films less as entertainment and more as reference points for mood, pacing, sound texture and structural tension. These shape how I think about depth, focus and narrative flow when building software or creative systems.

## Genres I gravitate toward

{% for genre in genres %}{% if forloop.first == false %} · {% endif %}{{ genre }}{% endfor %}

## Directors

{% assign dirs = films | map: 'director' | uniq | sort %}
{% for d in dirs %}{% if forloop.first == false %} · {% endif %}{{ d }}{% endfor %}

## Films

<ul>
{% for f in films %}
  <li><strong>{{ f.director }}</strong> – <em>{{ f.title }}</em> ({{ f.year }}){% if f.note %}: {{ f.note }}{% endif %}</li>
{% endfor %}
</ul>

## Why these films

Patterns: atmospheric layering, sustained tension without noise, disciplined color/sound palettes, and structural rhythm that supports deep, uninterrupted focus. They reinforce designing systems with clarity, contrast and intentional pacing.
