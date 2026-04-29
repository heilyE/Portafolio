const projects = [
  { iconClass:'fa-solid fa-laptop-code', title:'Portafolio Web', desc:'Aplicación personal desarrollada en HTML, CSS y JS con modo oscuro, animaciones y diseño responsive.', tags:['HTML','CSS','JS'], cat:'web' },
  { iconClass:'fa-solid fa-clipboard-check', title:'Gestión De Actividades', desc:'Panel de control para visualizar actividades realizadas, asistencias y convenios con instituciones.', tags:['Python','HTML','CSS','XAMPP'], cat:'web' },
  { iconClass:'fa-solid fa-book-open-reader', title:'Lectum', desc:'Prototipo de aplicación móvil para personas con dislexia, con IA integrada para facilitar la lectura.', tags:['Flutter','HTML','CSS','Firebase'], cat:'app' },
  { iconClass:'fa-solid fa-microchip', title:'Simulador de Algoritmos de Planificación de CPU', desc:'Calculadora interactiva para simular algoritmos de planificación de CPU.', tags:['Python','matplotlib','streamlit'], cat:'web' },
];

const roles = [
  { text: 'Desarrolladora Web', icon: '💻' },
  { text: 'Estudiante de Sistemas', icon: '🎓' },
  { text: 'Aprendiz de por vida', icon: '🚀' },
  { text: 'Creativa con código', icon: '✨' }
];

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter);

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card fade-up';
    card.style.transitionDelay = `${i * 0.07}s`;

    card.innerHTML = `
      <div class="project-img"><span><i class="${p.iconClass}"></i></span></div>
      <div class="project-body">
        <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
        <div class="project-title">${p.title}</div>
        <p class="project-desc">${p.desc}</p>
      </div>`;

    grid.appendChild(card);
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));
  });
}
renderProjects();

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

let ri = 0, ci = 0, deleting = false;
function typeWriter() {
  const textEl = document.getElementById('typeText');
  const iconEl = document.getElementById('typeIcon');
  const item = roles[ri];
  const word = item.text;

  iconEl.textContent = ' ' + item.icon;

  if (!deleting) {
    textEl.textContent = word.substring(0, ci + 1);
    ci++;
    if (ci === word.length) { deleting = true; setTimeout(typeWriter, 1800); return; }
  } else {
    textEl.textContent = word.substring(0, ci - 1);
    ci--;
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(typeWriter, deleting ? 60 : 100);
}
typeWriter();

function animateCounters() {
  document.querySelectorAll('[data-target]').forEach(el => {
    const target = +el.dataset.target;
    let count = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const interval = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count + '+';
      if (count >= target) clearInterval(interval);
    }, 40);
  });
}

let countersAnimated = false;
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      if (e.target.closest('#home') && !countersAnimated) {
        countersAnimated = true; animateCounters();
      }
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
document.querySelectorAll('#home .fade-up').forEach(el => el.classList.add('visible'));
animateCounters();

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const max = document.body.scrollHeight - window.innerHeight;
  document.getElementById('progressBar').style.width = (scrolled / max * 100) + '%';
  document.getElementById('backTop').classList.toggle('visible', scrolled > 400);

  const sections = ['home','about','projects','contact'];
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && scrolled >= el.offsetTop - 100) current = id;
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

const themeBtn = document.getElementById('themeBtn');
function setTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}
const savedTheme = localStorage.getItem('theme');
if (savedTheme) setTheme(savedTheme);
themeBtn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  setTheme(isDark ? 'light' : 'dark');
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  e.target.reset();
  setTimeout(() => success.style.display = 'none', 5000);
});