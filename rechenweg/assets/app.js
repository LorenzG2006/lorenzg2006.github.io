/* Rechenweg – Interaktion (läuft über file://, keine Netzwerkzugriffe außer auf Klick „An KI übergeben“) */
(function () {
  'use strict';
  var IDX = window.RW_INDEX || {};
  var B = document.body, root = document.documentElement;
  var UP = B.getAttribute('data-up') || '', LANG = B.getAttribute('data-lang') || 'de', SX = LANG === 'en' ? '.en' : '';
  var EN = LANG === 'en';
  var S = {
    continue_: EN ? 'Continue' : 'Weitermachen', mine0: EN ? 'Mark exercises as “understood” to track your progress.' : 'Markiere Beispiele als „verstanden“, um deinen Fortschritt zu sehen.',
    mine: function (n) { return (EN ? 'Marked as understood by you: ' : 'Davon von dir als verstanden markiert: ') + n; },
    tip: EN ? 'Tip: “171”, “ana 63”, “Dijkstra”, “induction” …' : 'Tipp: „171“, „ana 63“, „Dijkstra“, „Induktion Teilbarkeit“ …',
    none: EN ? 'Nothing found.' : 'Nichts gefunden.',
    aiTitle: EN ? 'Send to AI' : 'An KI übergeben', copy: EN ? 'Copy' : 'Kopieren', copied: EN ? 'Copied ✓' : 'Kopiert ✓',
    long: EN ? 'Text is long – it was copied; paste it into the chat (Ctrl+V).' : 'Der Text ist lang – er wurde kopiert; im Chat einfügen (Strg+V).',
    step: function (a, b) { return (EN ? 'Step ' : 'Schritt ') + a + ' / ' + b; },
    exam: function (m) { return (EN ? 'Exam running – ' : 'Prüfung läuft – ') + m + (EN ? ' left · solutions hidden' : ' übrig · Lösungen verborgen'); },
    examEnd: EN ? 'Time is up!' : 'Zeit abgelaufen!', back: EN ? 'Back to exam' : 'Zurück zur Prüfung',
  };
  var PROMPTS = EN ? [
    ['explain', 'Explain step by step', 'Please explain the following worked solution step by step, as to a first-year student. Point out the key idea and where students typically go wrong.'],
    ['similar', 'Similar exercise', 'Create a similar exercise with different numbers (same difficulty) based on the following task, then give a short worked solution separately at the end.'],
    ['check', 'Check my solution', 'Here is a task and its reference solution. I will paste MY solution below. Check it carefully, point out errors and missing justifications.\n\nMY SOLUTION:\n…'],
    ['translate', 'Translate', 'Translate the following German maths solution into clear English. Keep all LaTeX formulas unchanged and keep the structure.'],
    ['quiz', 'Quiz me', 'Ask me 3 short questions, one at a time, to test whether I understood the ideas in the following solution. Wait for my answer each time.'],
  ] : [
    ['explain', 'Schritt für Schritt erklären', 'Erkläre mir die folgende Lösung Schritt für Schritt wie einem Erstsemestrigen. Hebe die Kernidee hervor und sag, wo typische Fehler passieren.'],
    ['similar', 'Ähnliche Aufgabe', 'Erstelle zu der folgenden Aufgabe eine ähnliche Übungsaufgabe mit anderen Zahlen (gleicher Schwierigkeitsgrad) und gib getrennt am Ende eine kurze Musterlösung.'],
    ['check', 'Meinen Weg prüfen', 'Hier ist eine Aufgabe mit Musterlösung. Unten füge ich MEINEN Lösungsweg ein. Prüfe ihn genau und zeig mir Fehler und fehlende Begründungen.\n\nMEIN LÖSUNGSWEG:\n…'],
    ['quiz', 'Abfragen', 'Stelle mir nacheinander 3 kurze Fragen, mit denen du prüfst, ob ich die Ideen der folgenden Lösung verstanden habe. Warte jeweils auf meine Antwort.'],
  ];

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; } }
  function jget(k, d) { try { return JSON.parse(store(k) || 'null') || d; } catch (e) { return d; } }
  function jset(k, v) { store(k, JSON.stringify(v)); }
  function norm(s) { return String(s || '').toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9.]+/g, ' ').trim(); }
  function href(k, s) { return UP + k + '/beispiel-' + s + SX + '.html'; }
  function escH(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function title(it) { return (EN && it.te) || it.t; }
  function kapName(C, i) { return (EN && C.kapitelEn ? C.kapitelEn[i] : C.kapitel[i]) || ''; }
  function on(sel, ev, fn) { document.addEventListener(ev, function (e) { var t = e.target.closest(sel); if (t) fn(t, e); }); }

  /* ---------- Menü, Stil, Hell/Dunkel ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-menu]'), open = b ? document.getElementById('menu-' + b.getAttribute('data-menu')) : null;
    document.querySelectorAll('.menu').forEach(function (m) { if (m !== open && !m.contains(e.target)) m.hidden = true; });
    if (open) open.hidden = !open.hidden;
  });
  on('[data-set-style]', 'click', function (b) { var m = b.closest('.menu'); setTimeout(function () { if (m) m.hidden = true; }, 120); });
  on('[data-set-style]', 'click', function (b) {
    var v = b.getAttribute('data-set-style');
    if (v === 'modern') { delete root.dataset.style; store('rw-style', null); } else { root.dataset.style = v; store('rw-style', v); }
  });
  on('[data-theme-toggle]', 'click', function () {
    var cur = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var nxt = cur === 'dark' ? 'light' : 'dark'; root.dataset.theme = nxt; store('rw-theme', nxt);
  });

  /* ---------- Fortschritt ---------- */
  var done = new Set(jget('rw-done', []));
  function paintDone() {
    document.querySelectorAll('.tile[data-id]').forEach(function (t) { t.classList.toggle('is-done', done.has(t.getAttribute('data-id'))); });
    document.querySelectorAll('[data-done]').forEach(function (b) { b.classList.toggle('on', done.has(b.getAttribute('data-done'))); });
    document.querySelectorAll('[data-mine]').forEach(function (el) {
      var k = el.getAttribute('data-mine'), n = 0; done.forEach(function (x) { if (x.indexOf(k + '/') === 0) n++; });
      el.textContent = n ? S.mine(n) : S.mine0;
    });
    document.querySelectorAll('.minimap a').forEach(function (a) { a.classList.toggle('is-done', done.has(a.getAttribute('data-id'))); });
  }
  function toggleDone(id) { if (done.has(id)) done.delete(id); else done.add(id); jset('rw-done', Array.from(done)); paintDone(); }
  on('[data-done]', 'click', function (b) { toggleDone(b.getAttribute('data-done')); });

  /* ---------- Lösung verbergen / Schritt für Schritt ---------- */
  function setHide(v) { root.classList.toggle('hide-solutions', v); store('rw-hide', v ? '1' : '0'); B.classList.remove('revealed'); }
  on('[data-toggle-hide]', 'click', function () { setHide(!root.classList.contains('hide-solutions')); });
  on('[data-reveal]', 'click', function () { B.classList.add('revealed'); });
  var stepsEl = Array.prototype.slice.call(document.querySelectorAll('.solution-body > *')), stepI = 0;
  function paintSteps() {
    stepsEl.forEach(function (el, i) { el.classList.toggle('step-hidden', i > stepI); });
    var c = document.querySelector('.stepcount'); if (c) c.textContent = S.step(Math.min(stepI + 1, stepsEl.length), stepsEl.length);
    if (stepI >= stepsEl.length - 1) endSteps();
  }
  function startSteps() { if (!stepsEl.length) return; B.classList.add('stepping', 'revealed'); stepI = 0; document.querySelector('.stepbar').hidden = false; paintSteps(); document.getElementById('loesung').scrollIntoView({ behavior: 'smooth' }); }
  function nextStep() { if (!B.classList.contains('stepping')) return startSteps(); stepI++; paintSteps(); var el = stepsEl[stepI]; if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  function endSteps() { B.classList.remove('stepping'); stepsEl.forEach(function (el) { el.classList.remove('step-hidden'); }); var sb = document.querySelector('.stepbar'); if (sb) sb.hidden = true; }
  on('[data-step-mode]', 'click', function () { if (B.classList.contains('stepping')) endSteps(); else startSteps(); });
  on('[data-step-next]', 'click', nextStep);
  on('[data-step-all]', 'click', endSteps);

  /* ---------- Notizen ---------- */
  var note = document.querySelector('[data-note]');
  if (note) {
    var nk = 'rw-note-' + note.getAttribute('data-note'); note.value = store(nk) || '';
    var nt; note.addEventListener('input', function () { clearTimeout(nt); nt = setTimeout(function () { store(nk, note.value || null); }, 300); });
  }

  /* ---------- An KI übergeben ---------- */
  function srcText(kind) {
    var el = document.getElementById('rw-src'); if (!el) return '';
    var md = el.textContent.replace(/<figure>[\s\S]*?<\/figure>/g, '[Abbildung]').replace(/\n{3,}/g, '\n\n').trim();
    if (kind === 'check') { var m = md.match(/## (Angabe|Task)[\s\S]*?(?=\n## )/); md = m ? m[0] : md; }
    return '# ' + el.getAttribute('data-kurs') + ' – ' + (EN ? 'Exercise ' : 'Beispiel ') + el.getAttribute('data-nr') + '\n\n' + md;
  }
  function copy(t) { if (navigator.clipboard) navigator.clipboard.writeText(t).catch(function () { }); else { var a = document.createElement('textarea'); a.value = t; document.body.appendChild(a); a.select(); document.execCommand('copy'); a.remove(); } }
  function openAI() {
    var m = document.getElementById('ai-modal');
    if (!m) {
      m = document.createElement('div'); m.id = 'ai-modal'; m.className = 'modal';
      m.innerHTML = '<div class="modal-backdrop" data-close-ai></div><div class="modal-panel" role="dialog"><div class="modal-head"><b>' + S.aiTitle + '</b><button class="iconbtn" type="button" data-close-ai>✕</button></div>' +
        '<div class="ai-prompts">' + PROMPTS.map(function (p, i) { return '<button type="button" class="chip' + (i ? '' : ' on') + '" data-prompt="' + i + '">' + p[1] + '</button>'; }).join('') + '</div>' +
        '<textarea id="ai-text" spellcheck="false"></textarea><div class="ai-actions"><button class="btn" type="button" id="ai-copy">' + S.copy + '</button>' +
        '<button class="btn primary" type="button" data-ai-open="claude">Claude</button><button class="btn" type="button" data-ai-open="chatgpt">ChatGPT</button><span class="ai-hint" id="ai-hint"></span></div></div>';
      document.body.appendChild(m);
      var fill = function (i) { var p = PROMPTS[i]; document.getElementById('ai-text').value = p[2] + '\n\n---\n\n' + srcText(p[0]); m.querySelectorAll('[data-prompt]').forEach(function (b) { b.classList.toggle('on', +b.getAttribute('data-prompt') === i); }); };
      m.addEventListener('click', function (e) {
        var t = e.target.closest('[data-prompt],[data-close-ai],#ai-copy,[data-ai-open]'); if (!t) return;
        if (t.hasAttribute('data-prompt')) fill(+t.getAttribute('data-prompt'));
        else if (t.hasAttribute('data-close-ai')) m.hidden = true;
        else if (t.id === 'ai-copy') { copy(document.getElementById('ai-text').value); t.textContent = S.copied; setTimeout(function () { t.textContent = S.copy; }, 1500); }
        else {
          var txt = document.getElementById('ai-text').value, enc = encodeURIComponent(txt);
          var base = t.getAttribute('data-ai-open') === 'claude' ? 'https://claude.ai/new' : 'https://chatgpt.com/';
          copy(txt);
          if (enc.length > 7000) { document.getElementById('ai-hint').textContent = S.long; window.open(base, '_blank', 'noopener'); }
          else window.open(base + '?q=' + enc, '_blank', 'noopener');
        }
      });
      fill(0);
    }
    m.hidden = false;
  }
  on('[data-ai]', 'click', openAI);

  /* ---------- Zufallsbeispiel ---------- */
  on('[data-random]', 'click', function (b) {
    var k = b.getAttribute('data-random'), kap = b.getAttribute('data-kap'), pool = [];
    Object.keys(IDX).forEach(function (c) { if (k && c !== k) return; IDX[c].items.forEach(function (it) { if (kap === null || it.k === +kap) pool.push([c, it]); }); });
    if (pool.length) { var p = pool[Math.floor(Math.random() * pool.length)]; location.href = href(p[0], p[1].s); }
  });

  /* ---------- Beispielseite: Minimap, zuletzt, Scrollspy, Prüfung ---------- */
  var mm = document.querySelector('[data-minimap]'), cur = null;
  if (mm) {
    var kurs = mm.getAttribute('data-minimap'), kap = +mm.getAttribute('data-kap'), curId = mm.getAttribute('data-current'), C = IDX[kurs];
    if (C) {
      mm.innerHTML = C.items.filter(function (i) { return i.k === kap; }).map(function (i) {
        return '<a href="beispiel-' + i.s + SX + '.html" data-id="' + kurs + '/' + i.id + '" title="' + escH(title(i)) + '"' + (i.id === curId ? ' class="cur"' : '') + '>' + escH(i.n) + '</a>';
      }).join('');
      cur = C.items.filter(function (i) { return i.id === curId; })[0];
      if (cur) jset('rw-last', { kurs: kurs, s: cur.s, n: cur.n, t: cur.t, te: cur.te, kurz: C.kurz, farbe: C.farbe });
    }
    var ex = jget('rw-exam', null);
    if (ex && cur && ex.kurs === kurs && ex.items.some(function (i) { return i.s === cur.s; })) {
      root.classList.add('hide-solutions'); B.classList.remove('revealed');
      var ban = document.querySelector('.exam-banner'); ban.hidden = false;
      var tick = function () { var left = ex.start + ex.dur * 60000 - Date.now(); ban.innerHTML = (left > 0 ? S.exam(Math.ceil(left / 60000) + ' min') : S.examEnd) + ' · <a href="' + UP + 'pruefung' + SX + '.html">' + S.back + '</a>'; };
      tick(); setInterval(tick, 15000);
    }
  }
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (ents) { ents.forEach(function (en) { if (en.isIntersecting) tocLinks.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id); }); }); }, { rootMargin: '-15% 0px -70% 0px' });
    tocLinks.forEach(function (a) { var t = document.getElementById(a.getAttribute('href').slice(1)); if (t) obs.observe(t); });
  }

  /* ---------- Startseite: weitermachen ---------- */
  var cont = document.getElementById('continue'), last = jget('rw-last', null);
  if (cont && last) { cont.innerHTML = '<span class="continue-label">' + S.continue_ + '</span><a href="' + href(last.kurs, last.s) + '" style="--c:' + last.farbe + '"><span class="course-badge">' + escH(last.kurz) + '</span><b>' + escH(last.n) + '</b> ' + escH((EN && last.te) || last.t) + ' →</a>'; cont.hidden = false; }

  /* ---------- Kursübersicht: Filter ---------- */
  var tf = document.getElementById('tile-filter'), mode = 'all';
  function applyFilter() {
    var q = norm(tf.value), toks = q ? q.split(' ') : [], any = false;
    document.querySelectorAll('.page-course .chapter').forEach(function (ch) {
      if (ch.id === 'material' || ch.id === 'organisation') { ch.hidden = !!q || mode !== 'all'; return; }
      var vis = 0;
      ch.querySelectorAll('.tile').forEach(function (t) {
        var ok = true, nr = t.getAttribute('data-nr'), hay = norm(t.getAttribute('data-q'));
        if (toks.length) ok = toks.every(function (x) { return /^\d+$/.test(x) ? nr === x || nr.indexOf(x) === 0 : hay.indexOf(x) >= 0; });
        if (ok && mode === 'open') ok = !t.classList.contains('is-done');
        if (ok && mode === 'mine') ok = t.classList.contains('is-done');
        t.hidden = !ok; if (ok) vis++;
      });
      var tr = ch.querySelector('.todo-row'); if (tr) tr.hidden = !!q || mode !== 'all';
      ch.hidden = vis === 0 && (!tr || tr.hidden); if (vis) any = true;
    });
    var em = document.querySelector('.empty-filter'); if (em) em.hidden = any;
  }
  if (tf) {
    tf.addEventListener('input', applyFilter);
    on('[data-show]', 'click', function (b) { mode = b.getAttribute('data-show'); document.querySelectorAll('[data-show]').forEach(function (x) { x.classList.toggle('on', x === b); }); applyFilter(); });
  }

  /* ---------- Suche ---------- */
  var SE = document.getElementById('search'), SI = document.getElementById('search-input'), SR = document.getElementById('search-results'), sel = 0;
  var ALIAS = { adm: 'adm', a: 'adm', algebra: 'adm', ana: 'analysis', analysis: 'analysis', an: 'analysis' };
  function search(q) {
    q = norm(q); if (!q) return [];
    var toks = q.split(' '), kf = null;
    if (ALIAS[toks[0]] && toks.length > 1) { kf = ALIAS[toks[0]]; toks.shift(); }
    var m = toks[0] && toks[0].match(/^([a-z]+)(\d+)$/); if (m && ALIAS[m[1]]) { kf = ALIAS[m[1]]; toks[0] = m[2]; }
    var out = [];
    Object.keys(IDX).forEach(function (k) {
      if (kf && k !== kf) return; var C = IDX[k];
      C.items.forEach(function (it) {
        var nrN = norm(it.n), sc = 0, ok = true, tt = norm(it.t + ' ' + (it.te || '')), hay = tt + ' ' + norm(it.th + ' ' + kapName(C, it.k) + ' ' + C.kapitel[it.k]);
        toks.forEach(function (x) {
          if (/^\d+$/.test(x) || /^e\d/.test(x)) { if (nrN === x) sc += 100; else if (nrN.indexOf(x) === 0) sc += 20; else ok = false; }
          else if (hay.indexOf(x) >= 0) sc += tt.indexOf(x) >= 0 ? 6 : 3; else ok = false;
        });
        if (ok) out.push({ k: k, C: C, it: it, sc: sc });
      });
    });
    out.sort(function (a, b) { return b.sc - a.sc || (parseInt(a.it.n, 10) || 0) - (parseInt(b.it.n, 10) || 0); });
    return out.slice(0, 40);
  }
  function renderResults() {
    var q = SI.value.trim(), r = search(q); sel = 0;
    if (!q) { SR.innerHTML = '<li class="sr-empty">' + S.tip + '</li>'; return; }
    if (!r.length) { SR.innerHTML = '<li class="sr-empty">' + S.none + '</li>'; return; }
    SR.innerHTML = r.map(function (x, i) {
      return '<li><a href="' + href(x.k, x.it.s) + '" class="' + (i ? '' : 'sel') + '" style="--c:' + x.C.farbe + '"><span class="course-badge">' + escH(x.C.kurz) + '</span><span class="sr-nr">' + escH(x.it.n) + '</span><span class="sr-main"><b>' + escH(title(x.it)) + '</b><small>' + escH(kapName(x.C, x.it.k)) + (x.it.th ? ' · ' + escH(x.it.th) : '') + '</small></span></a></li>';
    }).join('');
  }
  function moveSel(d) { var as = SR.querySelectorAll('a'); if (!as.length) return; sel = (sel + d + as.length) % as.length; as.forEach(function (a, i) { a.classList.toggle('sel', i === sel); }); as[sel].scrollIntoView({ block: 'nearest' }); }
  function openSearch() { SE.hidden = false; SI.value = ''; renderResults(); setTimeout(function () { SI.focus(); }, 0); }
  on('[data-open-search]', 'click', openSearch);
  on('[data-close-search]', 'click', function () { SE.hidden = true; });
  SI.addEventListener('input', renderResults);
  SI.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); moveSel(1); } else if (e.key === 'ArrowUp') { e.preventDefault(); moveSel(-1); }
    else if (e.key === 'Enter') { var a = SR.querySelectorAll('a')[sel]; if (a) location.href = a.href; } else if (e.key === 'Escape') SE.hidden = true;
  });

  /* ---------- Karteikarten ---------- */
  var CARDS = window.RW_CARDS;
  if (CARDS && document.getElementById('flashcard')) {
    var cc = document.getElementById('card-course'), ch = document.getElementById('card-chapter'), ct = document.getElementById('card-type');
    var lt = jget('rw-leitner', {}), deck = [], card = null;
    var keyOf = function (c) { return c.k + '|' + c.t.replace(/<[^>]+>/g, ''); };
    var fillCh = function () {
      var k = cc.value; ch.innerHTML = '<option value="">' + (EN ? 'All chapters' : 'Alle Kapitel') + '</option>';
      if (k && IDX[k]) IDX[k].kapitel.forEach(function (n, i) { ch.innerHTML += '<option value="' + i + '">' + escH(kapName(IDX[k], i)) + '</option>'; });
    };
    var build = function () {
      deck = CARDS.filter(function (c) { return (!cc.value || c.k === cc.value) && (ch.value === '' || c.c === +ch.value) && (!ct.value || c.y === ct.value); });
      var box = [0, 0, 0, 0, 0, 0]; deck.forEach(function (c) { box[lt[keyOf(c)] || 1]++; });
      document.getElementById('card-stats').textContent = deck.length + (EN ? ' cards · boxes 1–5: ' : ' Karten · Fächer 1–5: ') + box.slice(1).join(' / ');
      pick();
    };
    var pick = function () {
      if (!deck.length) { document.getElementById('fc-front').innerHTML = '–'; return; }
      var minBox = 6; deck.forEach(function (c) { minBox = Math.min(minBox, lt[keyOf(c)] || 1); });
      var pool = deck.filter(function (c) { return (lt[keyOf(c)] || 1) <= minBox + (Math.random() < 0.25 ? 1 : 0); });
      card = pool[Math.floor(Math.random() * pool.length)];
      var C = IDX[card.k];
      document.getElementById('fc-front').innerHTML = '<span class="fc-type">' + (card.y === 'def' ? (EN ? 'Definition' : 'Definition') : (EN ? 'Theorem' : 'Satz')) + ' · ' + escH(C ? kapName(C, card.c) : '') + '</span><div class="fc-title">' + card.t + '</div>';
      document.getElementById('fc-back').innerHTML = card.b; document.getElementById('fc-back').hidden = true;
      document.getElementById('fc-src').innerHTML = (EN ? 'Used in: ' : 'Vorkommen: ') + card.src.map(function (s) { return '<a href="' + href(card.k, s) + '">' + escH(C ? C.kurz : '') + ' ' + s.replace(/^0+/, '') + '</a>'; }).join(', ');
    };
    var flip = function () { var b = document.getElementById('fc-back'); b.hidden = !b.hidden; };
    var rate = function (good) { if (!card) return; var k = keyOf(card), v = lt[k] || 1; lt[k] = good ? Math.min(5, v + 1) : 1; jset('rw-leitner', lt); build(); };
    cc.addEventListener('change', function () { fillCh(); build(); }); ch.addEventListener('change', build); ct.addEventListener('change', build);
    document.getElementById('fc-flip').addEventListener('click', flip); document.getElementById('flashcard').addEventListener('click', flip);
    document.getElementById('fc-again').addEventListener('click', function () { rate(false); }); document.getElementById('fc-good').addEventListener('click', function () { rate(true); });
    document.addEventListener('keydown', function (e) { if (e.target.tagName === 'SELECT') return; if (e.key === ' ') { e.preventDefault(); flip(); } else if (e.key === 'ArrowLeft') rate(false); else if (e.key === 'ArrowRight') rate(true); });
    fillCh(); build();
  }

  /* ---------- Prüfungsmodus ---------- */
  var setup = document.getElementById('exam-setup');
  if (setup) {
    var ec = document.getElementById('ex-course'), ek = document.getElementById('ex-chapter'), run = document.getElementById('exam-run'), clock = document.getElementById('exam-clock'), timer;
    var fillK = function () { var C = IDX[ec.value]; ek.innerHTML = C ? C.kapitel.map(function (n, i) { return '<option value="' + i + '">' + escH(kapName(C, i)) + '</option>'; }).join('') : ''; };
    var hist = function () {
      var h = jget('rw-exam-hist', []); var el = document.getElementById('exam-history');
      el.innerHTML = h.length ? '<h2>' + (EN ? 'Previous exams' : 'Bisherige Prüfungen') + '</h2><ul>' + h.slice(-10).reverse().map(function (x) { return '<li>' + new Date(x.at).toLocaleString(LANG) + ' · ' + escH(x.kurz) + ' · ' + x.score + '</li>'; }).join('') + '</ul>' : '';
    };
    var show = function () {
      var ex = jget('rw-exam', null); setup.hidden = !!ex; run.hidden = !ex; clearInterval(timer); if (!ex) return hist();
      var C = IDX[ex.kurs];
      document.getElementById('exam-list').innerHTML = ex.items.map(function (i, n) {
        return '<li><a href="' + href(ex.kurs, i.s) + '"><b>' + escH(C.kurz) + ' ' + escH(i.n) + '</b> ' + escH((EN && i.te) || i.t) + '</a><span class="rate" data-i="' + n + '"><button type="button" data-r="2">✓</button><button type="button" data-r="1">~</button><button type="button" data-r="0">✗</button></span></li>';
      }).join('');
      var tick = function () { var left = ex.start + ex.dur * 60000 - Date.now(); clock.textContent = left > 0 ? Math.floor(left / 60000) + ':' + String(Math.floor(left / 1000) % 60).padStart(2, '0') : S.examEnd; clock.classList.toggle('over', left <= 0); };
      tick(); timer = setInterval(tick, 1000);
      run.querySelectorAll('.rate button').forEach(function (b) { if (ex.r && ex.r[b.parentNode.getAttribute('data-i')] === +b.getAttribute('data-r')) b.classList.add('on'); });
    };
    ec.addEventListener('change', fillK);
    document.getElementById('ex-start').addEventListener('click', function () {
      var chs = Array.prototype.map.call(ek.selectedOptions, function (o) { return +o.value; });
      var pool = IDX[ec.value].items.filter(function (i) { return !chs.length || chs.indexOf(i.k) >= 0; }).slice();
      var n = Math.min(+document.getElementById('ex-count').value || 5, pool.length), items = [];
      while (items.length < n) items.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
      jset('rw-exam', { kurs: ec.value, items: items, start: Date.now(), dur: +document.getElementById('ex-min').value || 100, r: {} }); show();
    });
    run.addEventListener('click', function (e) {
      var b = e.target.closest('.rate button'); if (!b) return; var ex = jget('rw-exam', null); ex.r = ex.r || {};
      ex.r[b.parentNode.getAttribute('data-i')] = +b.getAttribute('data-r'); jset('rw-exam', ex);
      b.parentNode.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b); });
    });
    document.getElementById('ex-finish').addEventListener('click', function () {
      var ex = jget('rw-exam', null); if (!ex) return; var pts = 0; Object.keys(ex.r || {}).forEach(function (k) { pts += ex.r[k]; });
      var h = jget('rw-exam-hist', []); h.push({ at: Date.now(), kurz: IDX[ex.kurs].kurz, score: pts + ' / ' + ex.items.length * 2 + (EN ? ' points' : ' Punkte') }); jset('rw-exam-hist', h);
      store('rw-exam', null); show();
    });
    document.getElementById('ex-cancel').addEventListener('click', function () { store('rw-exam', null); show(); });
    fillK(); show();
  }

  /* ---------- Termine (Startseite, Kursseiten, Termin-Seite) ---------- */
  var TER = window.RW_TERMINE || [];
  var DOW = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  function tdate(s) { return new Date(s); }
  function fmt(t) {
    var a = tdate(t.von), b = t.bis ? tdate(t.bis) : null, hm = a.getHours() || a.getMinutes() ? ', ' + String(a.getHours()).padStart(2, '0') + ':' + String(a.getMinutes()).padStart(2, '0') : '';
    var d = function (x) { return DOW[x.getDay()] + ' ' + x.getDate() + '.' + (x.getMonth() + 1) + '.' + x.getFullYear(); };
    return b ? d(a) + ' – ' + d(b) : d(a) + hm;
  }
  function countdown(t, now) {
    var a = tdate(t.von), b = t.bis ? tdate(t.bis) : a;
    if (now >= a && now <= b) return '<span class="cd now">läuft gerade</span>';
    if (now > b) return '<span class="cd past">vorbei</span>';
    var ms = a - now, d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24;
    return '<span class="cd' + (d < 3 ? ' soon' : '') + '">' + (d >= 1 ? 'in ' + d + ' Tag' + (d === 1 ? '' : 'en') : 'in ' + h + ' h') + '</span>';
  }
  function renderTermine() {
    var now = new Date(), past = document.getElementById('t-past'), flt = (document.querySelector('[data-tfilter].on') || {}).getAttribute ? document.querySelector('[data-tfilter].on').getAttribute('data-tfilter') : '';
    document.querySelectorAll('[data-termine]').forEach(function (ol) {
      var k = ol.getAttribute('data-termine') || flt, lim = +ol.getAttribute('data-limit') || 5, showPast = past && past.checked;
      var list = TER.filter(function (t) { return (!k || t.k === k) && (showPast || tdate(t.bis || t.von) >= now || ol.closest('.org')); });
      if (!ol.closest('.org') && !showPast) list = list.filter(function (t) { return tdate(t.bis || t.von) >= now; });
      list = list.slice(0, lim);
      ol.innerHTML = list.length ? list.map(function (t) {
        var C = IDX[t.k] || {}, isPast = tdate(t.bis || t.von) < now;
        var title = t.link ? '<a href="' + UP + t.link + '">' + escH(t.titel) + '</a>' : escH(t.titel);
        return '<li class="t-' + t.art + (isPast ? ' is-past' : '') + '" style="--c:' + (C.farbe || '#334155') + '"><span class="course-badge">' + escH(C.kurz || '') + '</span><span class="t-main"><b>' + title + '</b><small>' + fmt(t) + (t.info ? ' · ' + escH(t.info) : '') + '</small></span>' + countdown(t, now) + '</li>';
      }).join('') : '<li class="t-empty">Keine anstehenden Termine.</li>';
    });
  }
  if (document.querySelector('[data-termine]')) {
    renderTermine(); setInterval(renderTermine, 60000);
    on('[data-tfilter]', 'click', function (b) { document.querySelectorAll('[data-tfilter]').forEach(function (x) { x.classList.toggle('on', x === b); }); renderTermine(); });
    var tp = document.getElementById('t-past'); if (tp) tp.addEventListener('change', renderTermine);
    var ics = document.getElementById('t-ics');
    if (ics) ics.addEventListener('click', function () {
      var z = function (d) { return d.toISOString().replace(/[-:]/g, '').replace(/\.\d+/, ''); };
      var L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Rechenweg//Termine//DE'];
      TER.forEach(function (t, i) {
        var a = tdate(t.von), allDay = !(a.getHours() || a.getMinutes()), b = t.bis ? tdate(t.bis) : new Date(a.getTime() + (allDay ? 864e5 : 90 * 6e4));
        var dd = function (d) { return d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0'); };
        L.push('BEGIN:VEVENT', 'UID:rechenweg-' + i + '-' + dd(a) + '@local', 'DTSTAMP:' + z(new Date()),
          allDay ? 'DTSTART;VALUE=DATE:' + dd(a) : 'DTSTART:' + z(a), allDay ? 'DTEND;VALUE=DATE:' + dd(new Date(b.getTime() + (t.bis ? 864e5 : 0))) : 'DTEND:' + z(b),
          'SUMMARY:' + t.titel, 'DESCRIPTION:' + (t.info || '').replace(/,/g, '\\,'), 'END:VEVENT');
      });
      L.push('END:VCALENDAR');
      var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([L.join('\r\n')], { type: 'text/calendar' })); a.download = 'termine-ws2026.ics'; a.click();
    });
  }

  /* ---------- Tastatur ---------- */
  document.addEventListener('keydown', function (e) {
    var tag = (e.target.tagName || '').toLowerCase(), typing = tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable;
    if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && !typing)) { e.preventDefault(); openSearch(); return; }
    if (e.key === 'Escape') { var m = document.getElementById('ai-modal'); if (m) m.hidden = true; }
    if (typing || e.ctrlKey || e.metaKey || e.altKey || !SE.hidden || !document.querySelector('.page-ex')) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { var p = document.querySelector('.pager.' + (e.key === 'ArrowLeft' ? 'prev' : 'next') + '[href]'); if (p) location.href = p.href; }
    else if (e.key === 'l' || e.key === 'L') setHide(!root.classList.contains('hide-solutions'));
    else if (e.key === 's' || e.key === 'S') nextStep();
    else if (e.key === 'v' || e.key === 'V') { var b = document.querySelector('[data-done]'); if (b) toggleDone(b.getAttribute('data-done')); }
  });

  paintDone();
  if (tf) applyFilter();
})();
