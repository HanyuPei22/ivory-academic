'use strict';

document.documentElement.classList.add('js');

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (menu && nav) {
  const closeMenu = () => {
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
  if ('IntersectionObserver' in window) {
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => {
          if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-12% 0px -65% 0px', threshold: 0 });
    links.forEach(link => {
      const section = document.getElementById(link.getAttribute('href').slice(1));
      if (section) observer.observe(section);
    });
  }
}

const filters = document.querySelector('.publication-filters');
const papers = [...document.querySelectorAll('.paper')];
const count = document.querySelector('.paper-count');
if (filters && count) {
  filters.hidden = false;
  filters.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const kind = button.dataset.filter;
      filters.querySelectorAll('button').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      papers.forEach(paper => { paper.hidden = kind !== 'all' && paper.dataset.kind !== kind; });
      const visible = papers.filter(paper => !paper.hidden).length;
      count.textContent = `${visible} ${visible === 1 ? 'paper' : 'papers'}`;
    });
  });
}
