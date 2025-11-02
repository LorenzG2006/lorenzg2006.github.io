---
layout: single
title: "Music"
permalink: /music/
author_profile: true
---

{% include base_path %}

I lean toward heavy, dynamic guitar-driven music with emotional contrast. Nu-Metal, Metalcore and Alternative/Modern Rock are the main pillars; intensity + melody keeps it interesting.

## Genres I gravitate toward

{% assign g = site.data.music.genres %}
{% for genre in g %}{% if forloop.first == false %} · {% endif %}{{ genre }}{% endfor %}

## Favorite Artists

{% assign a = site.data.music.artists %}
{% for artist in a %}{% if forloop.first == false %} · {% endif %}{{ artist }}{% endfor %}

## Favorite Albums

{% assign albums = site.data.music.albums %}

<ul>
{% for al in albums %}
	<li><strong>{{ al.artist }}</strong> – <em>{{ al.title }}</em>{% if al.note %}: {{ al.note }}{% endif %}</li>
{% endfor %}
</ul>

## Favorite Songs

{% assign songs = site.data.music.songs %}

<ul>
{% for s in songs %}
	<li><strong>{{ s.artist }}</strong> – "{{ s.title }}" – {{ s.note }}</li>
{% endfor %}
</ul>

## Why this sound

Contrast between aggression and melody helps with focus and mood shifts. Layered guitars + vocal dynamics = energy without losing emotional tone.

# My Spotify

<p>
	<a class="btn btn--primary" href="https://open.spotify.com/user/6beufxw5ujl85lvb3uwvbojgc" target="_blank" rel="noopener">
		Open Spotify Profile
	</a>
</p>

<div class="spotify-follow">
	<iframe
		src="https://open.spotify.com/follow/1/?uri=spotify:user:6beufxw5ujl85lvb3uwvbojgc&size=detail&theme=dark&show-count=0"
		width="300"
		height="56"
		scrolling="no"
		frameborder="0"
		style="border:none; overflow:hidden;"
		allowtransparency="true">
	</iframe>
	<noscript>
		<a href="https://open.spotify.com/user/6beufxw5ujl85lvb3uwvbojgc" target="_blank" rel="noopener">Follow on Spotify</a>
	</noscript>
  
</div>