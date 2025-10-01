---
layout: single
title: "Books"
permalink: /books/
author_profile: true
---

{% include base_path %}
{% assign books = site.data.books.books %}
{% assign sorted = books | sort: 'title' %}

I treat books as *tools* for building mental models: systems design, engineering craft, product leverage, focus and behavioral mechanics. Status + notes help me track application, not just consumption.

<div id="book-filters" class="book-filters">
  <strong>Filter:</strong>
  <button data-filter="all" class="active">All</button>
  <button data-filter="completed">Completed</button>
  <button data-filter="reading">Reading</button>
  <button data-filter="planned">Planned</button>
</div>

<ul id="book-list" class="book-list">
{% for b in sorted %}
  <li class="book-item" data-status="{{ b.status }}" data-tags="{% if b.tags %}{{ b.tags | join: ',' }}{% endif %}">
    <div class="book-head">
      <strong>{{ b.title }}</strong>{% if b.year %} <span class="year">({{ b.year }})</span>{% endif %} – <em>{{ b.author }}</em>
      {% if b.rating %}<span class="rating">{% for i in (1..b.rating) %}★{% endfor %}{% assign rem = 5 | minus: b.rating %}{% if rem > 0 %}{% for j in (1..rem) %}☆{% endfor %}{% endif %}</span>{% endif %}
      <span class="status status-{{ b.status }}">{{ b.status }}</span>
    </div>
    {% if b.comment %}<div class="note">{{ b.comment }}</div>{% endif %}
    {% if b.tags %}<div class="tags">{% for t in b.tags %}<span class="tag">{{ t }}</span>{% endfor %}</div>{% endif %}
    {% if b.link %}<div class="ext"><a href="{{ b.link }}" target="_blank" rel="noopener">More</a></div>{% endif %}
  </li>
{% endfor %}
</ul>

<script>
(function(){
  const buttons = document.querySelectorAll('#book-filters button');
  const items = document.querySelectorAll('#book-list .book-item');
  buttons.forEach(btn => btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    items.forEach(it => {
      if(f === 'all' || it.dataset.status === f) {
        it.style.display = '';
      } else {
        it.style.display = 'none';
      }
    });
  }));
})();
</script>

<style>
.book-filters { margin: 0 0 1rem; display:flex; gap:.5rem; flex-wrap:wrap; align-items:center; }
.book-filters button { background:#eee; border:1px solid #ccc; padding:.25rem .6rem; cursor:pointer; font-size:.85rem; border-radius:4px; }
.book-filters button.active { background:#333; color:#fff; }
.book-list { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:1rem; }
.book-item { padding:.75rem .85rem; border:1px solid #ddd; border-radius:6px; background:#fafafa; }
.book-item .book-head { font-size:.95rem; display:flex; flex-wrap:wrap; gap:.4rem; align-items:baseline; }
.book-item .rating { color:#d4a411; font-size:.8rem; letter-spacing:1px; }
.book-item .status { font-size:.65rem; text-transform:uppercase; letter-spacing:.5px; padding:2px 6px; border-radius:10px; background:#e1e1e1; }
.status-completed { background:#d1f5d3; }
.status-reading { background:#d6e9ff; }
.status-planned { background:#f3e3ff; }
.status-paused { background:#ffe6cc; }
.book-item .note { margin-top:.4rem; font-size:.8rem; line-height:1.2rem; }
.book-item .tags { margin-top:.35rem; display:flex; gap:.35rem; flex-wrap:wrap; }
.book-item .tag { background:#222; color:#fff; font-size:.55rem; padding:2px 6px; border-radius:12px; letter-spacing:.5px; }
.book-item .ext { margin-top:.35rem; font-size:.7rem; }
.year { color:#666; }
@media (prefers-color-scheme: dark) {
  .book-item { background:#1e1e1e; border-color:#333; }
  .book-filters button { background:#222; color:#ddd; border-color:#444; }
  .book-filters button.active { background:#555; }
  .book-item .tag { background:#444; }
}
</style>

{% comment %} JSON-LD structured data for the list of books {% endcomment %}
{% assign json_books = sorted | map: 'title' %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Reading List",
  "itemListElement": [
  {% for b in sorted %}{
    "@type": "ListItem",
    "position": {{ forloop.index }},
    "item": {
      "@type": "Book",
      "name": {{ b.title | jsonify }},
      "author": {{ b.author | jsonify }},
      {% if b.year %}"datePublished": "{{ b.year }}",
      {% endif %}"bookEdition": {% if b.status == 'reading' %}"In Progress"{% else %}"{{ b.status | capitalize }}"{% endif %}
    }
  }{% if forloop.last == false %},{% endif %}{% endfor %}
  ]
}
</script>
