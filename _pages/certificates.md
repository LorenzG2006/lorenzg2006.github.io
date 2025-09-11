---
layout: single
title: "Certificates"
permalink: /certificates/
author_profile: true
---

{% include base_path %}

Below are my certificates available for download.

<ul>
  {% assign certs = site.static_files | where_exp: "f", "f.path contains '/files/certificates/'" %}
  {% for file in certs %}
  <li>
    <a href="{{ file.path | relative_url }}" target="_blank" rel="noopener">
      {{ file.name }}
    </a>
  </li>
  {% endfor %}
</ul>
