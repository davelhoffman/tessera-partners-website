'use strict';

function e(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderTemplate(c) {
  var nav = c.nav || {};
  var hero = c.hero || {};
  var cred = c.credibilityStrip || {};
  var who = c.whoIWorkWith || {};
  var svc = c.services || {};
  var pmos = c.pmos || {};
  var appr = c.approach || {};
  var about = c.about || {};
  var contact = c.contact || {};
  var footer = c.footer || {};

  function navLinksHtml(links) {
    return (links || []).map(function (l) {
      return '<li><a href="' + e(l.href) + '">' + e(l.text) + '</a></li>';
    }).join('\n          ');
  }

  function paragraphs(arr, cls) {
    var className = cls ? ' class="' + cls + '"' : '';
    return (arr || []).map(function (p) {
      return '<p' + className + '>' + e(p) + '</p>';
    }).join('\n      ');
  }

  function cards(arr, cardClass, inner) {
    return (arr || []).map(function (card) {
      return inner(card);
    }).join('\n');
  }

  function ctaBtn(cta, extra) {
    if (!cta) return '';
    var cls = extra ? ' ' + extra : '';
    return '<a href="' + e(cta.href) + '" class="btn btn-primary' + cls + '">' + e(cta.text) + '</a>';
  }

  function contactItemsHtml(items) {
    return (items || []).map(function (item, i, arr) {
      var sep = i < arr.length - 1 ? '\n          <span class="footer-contact-sep">|</span>' : '';
      return '<a href="' + e(item.href) + '">' + e(item.text) + '</a>' + sep;
    }).join('\n          ');
  }

  var html = '<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'  <meta charset="UTF-8" />\n' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n' +
'  <title>Tessera Partners — Fractional CPO &amp; Product Leadership</title>\n' +
'  <meta name="description" content="Tessera Partners provides fractional CPO and senior product leadership for software companies navigating growth, transformation, and AI strategy." />\n' +
'  <meta name="robots" content="index, follow" />\n' +
'  <link rel="icon" type="image/svg+xml" href="tessera-icon.svg" />\n' +
'  <link rel="preconnect" href="https://fonts.googleapis.com" />\n' +
'  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n' +
'  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;600;700&display=swap" rel="stylesheet" />\n' +
'  <link rel="stylesheet" href="styles.css" />\n' +
'</head>\n' +
'<body>\n' +

'<!-- ── Navigation ────────────────────────────────────────────────────── -->\n' +
'<nav id="nav" role="navigation" aria-label="Main">\n' +
'  <div class="nav-inner">\n' +
'    <a href="#" class="nav-brand" aria-label="' + e(nav.brand) + '"><img src="tessera-logo.svg" alt="' + e(nav.brand) + '" class="nav-logo" /></a>\n' +
'    <ul class="nav-links">\n' +
'      ' + navLinksHtml(nav.links) + '\n' +
'    </ul>\n' +
(nav.cta ? '    <a href="' + e(nav.cta.href) + '" class="btn btn-primary nav-cta">' + e(nav.cta.text) + '</a>\n' : '') +
'    <button class="hamburger" aria-label="Open navigation menu" aria-expanded="false">\n' +
'      <span></span><span></span><span></span>\n' +
'    </button>\n' +
'  </div>\n' +
'  <div class="mobile-menu" role="dialog" aria-label="Mobile navigation">\n' +
'    <ul class="mobile-nav-links">\n' +
'      ' + navLinksHtml(nav.links) + '\n' +
'    </ul>\n' +
(nav.cta ? '    <a href="' + e(nav.cta.href) + '" class="btn btn-primary">' + e(nav.cta.text) + '</a>\n' : '') +
'  </div>\n' +
'</nav>\n\n' +

'<!-- ── Hero ──────────────────────────────────────────────────────────── -->\n' +
'<section id="hero">\n' +
'  <div class="container">\n' +
'    <div class="hero-inner">\n' +
'      <h1>' + e(hero.headline) + '</h1>\n' +
'      <div class="hero-subhead">\n' +
'        ' + paragraphs(hero.subheadParagraphs) + '\n' +
'      </div>\n' +
(hero.cta ? '      <a href="' + e(hero.cta.href) + '" class="btn btn-primary">' + e(hero.cta.text) + '</a>\n' : '') +
'    </div>\n' +
'  </div>\n' +
'</section>\n\n' +

'<!-- ── Credibility Strip ─────────────────────────────────────────────── -->\n' +
'<div id="credibility-strip" role="list" aria-label="Credentials">\n' +
'  <div class="container">\n' +
'    <div class="credibility-grid">\n' +
(cred.items || []).map(function (item) {
  return '      <div class="credibility-item" role="listitem">' + e(item) + '</div>';
}).join('\n') + '\n' +
'    </div>\n' +
'  </div>\n' +
'</div>\n\n' +

'<!-- ── Who I Work With ───────────────────────────────────────────────── -->\n' +
'<section id="who-i-work-with">\n' +
'  <div class="container">\n' +
'    <span class="section-label">' + e(who.sectionLabel) + '</span>\n' +
'    <div class="who-intro">\n' +
'      <h2>' + e(who.headline) + '</h2>\n' +
'      ' + paragraphs(who.bodyParagraphs) + '\n' +
'    </div>\n' +
'    <div class="scenario-cards">\n' +
(who.cards || []).map(function (card) {
  return '      <div class="scenario-card">\n        <h3>' + e(card.title) + '</h3>\n        <p>' + e(card.body) + '</p>\n      </div>';
}).join('\n') + '\n' +
'    </div>\n' +
'    <div class="who-closing">\n' +
'      ' + paragraphs(who.closingParagraphs) + '\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n\n' +

'<!-- ── Services ──────────────────────────────────────────────────────── -->\n' +
'<section id="services">\n' +
'  <div class="container">\n' +
'    <span class="section-label">' + e(svc.sectionLabel) + '</span>\n' +
'    <div class="services-header">\n' +
'      <h2>' + e(svc.headline) + '</h2>\n' +
'    </div>\n' +
'    <div class="services-grid">\n' +
(svc.cards || []).map(function (card) {
  return '      <div class="service-card">\n        <h3>' + e(card.title) + '</h3>\n        <p>' + e(card.body) + '</p>\n      </div>';
}).join('\n') + '\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n\n' +

'<!-- ── PMOS ──────────────────────────────────────────────────────────── -->\n' +
'<section id="pmos">\n' +
'  <div class="container">\n' +
'    <span class="section-label">' + e(pmos.sectionLabel) + '</span>\n' +
'    <h2>' + e(pmos.headline) + '</h2>\n' +
'    <div class="pmos-body">\n' +
(pmos.bodyParagraphs ? (
  '<p>' + e((pmos.bodyParagraphs || [])[0]) + '</p>\n' +
  (pmos.pullQuote ? '      <p class="pmos-pull-quote">' + e(pmos.pullQuote) + '</p>\n' : '') +
  (pmos.bodyParagraphs || []).slice(1).map(function (p) {
    return '      <p>' + e(p) + '</p>';
  }).join('\n')
) : '') + '\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n\n' +

'<!-- ── Approach ──────────────────────────────────────────────────────── -->\n' +
'<section id="approach">\n' +
'  <div class="container">\n' +
'    <span class="section-label">' + e(appr.sectionLabel) + '</span>\n' +
'    <div class="approach-header">\n' +
'      <h2>' + e(appr.headline) + '</h2>\n' +
'    </div>\n' +
'    <div class="approach-steps">\n' +
(appr.steps || []).map(function (step) {
  return '      <div class="approach-step">\n        <span class="approach-step-number">' + e(step.title) + '</span>\n        <p>' + e(step.body) + '</p>\n      </div>';
}).join('\n') + '\n' +
'    </div>\n' +
(appr.closing ? '    <div class="approach-closing"><p>' + e(appr.closing) + '</p></div>\n' : '') +
(appr.cta ? '    <a href="' + e(appr.cta.href) + '" class="btn btn-primary">' + e(appr.cta.text) + '</a>\n' : '') +
'  </div>\n' +
'</section>\n\n' +

'<!-- ── About ─────────────────────────────────────────────────────────── -->\n' +
'<section id="about">\n' +
'  <div class="container">\n' +
'    <span class="section-label">' + e(about.sectionLabel) + '</span>\n' +
'    <div class="about-inner">\n' +
'      <h2>' + e(about.headline) + '</h2>\n' +
'      <div class="about-body">\n' +
'        ' + paragraphs(about.bodyParagraphs) + '\n' +
'      </div>\n' +
'      <div class="about-ctas">\n' +
(about.ctas || []).map(function (cta, i) {
  var cls = i === 0 ? 'btn btn-secondary' : 'btn btn-primary';
  return '        <a href="' + e(cta.href) + '" class="' + cls + '">' + e(cta.text) + '</a>';
}).join('\n') + '\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n\n' +

'<!-- ── Contact ───────────────────────────────────────────────────────── -->\n' +
'<section id="contact">\n' +
'  <div class="container">\n' +
'    <span class="section-label">' + e(contact.sectionLabel) + '</span>\n' +
'    <div class="contact-inner">\n' +
'      <h2>' + e(contact.headline) + '</h2>\n' +
(contact.body ? '      <p>' + e(contact.body) + '</p>\n' : '') +
(contact.cta ? '      <div class="contact-cta"><a href="' + e(contact.cta.href) + '" class="btn btn-primary">' + e(contact.cta.text) + '</a></div>\n' : '') +
'      <div class="contact-details">\n' +
(contact.details || []).map(function (d) {
  return '        <a href="' + e(d.href) + '">' + e(d.text) + '</a>';
}).join('\n') + '\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n\n' +

'<!-- ── Footer ────────────────────────────────────────────────────────── -->\n' +
'<footer>\n' +
'  <div class="container">\n' +
'    <div class="footer-inner">\n' +
'      <span class="footer-brand">' + e(footer.brand) + '</span>\n' +
'      <div class="footer-contact">\n' +
'        ' + contactItemsHtml(footer.contactItems) + '\n' +
'      </div>\n' +
'      <span class="footer-copy">' + e(footer.copyright) + '</span>\n' +
'    </div>\n' +
'  </div>\n' +
'</footer>\n\n' +

'<script src="main.js"></script>\n' +
'</body>\n' +
'</html>\n';

  return html;
}

module.exports = { renderTemplate };
