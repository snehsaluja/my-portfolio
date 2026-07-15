// ============================================
// PORTFOLIO DATA
// ============================================

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  { url: 'https://www.linkedin.com/in/snehsaluja', icon: 'linkedin', label: 'LinkedIn' },
  { url: 'https://github.com/snehsaluja', icon: 'github', label: 'GitHub' },
  { url: 'https://www.instagram.com/sneh.saluja', icon: 'instagram', label: 'Instagram' },
];

const EXPERIENCES = [
  {
    title: 'Software Engineer II',
    company: 'Booking.com India',
    location: 'Bangalore',
    period: 'Feb 2025 — Present',
    current: true,
    bullets: [
      'Designed and delivered backend features for Identity &amp; Individual Verification platforms, including resilient multi-vendor KYC integrations.',
      'Built and maintained Kafka-based event flows to support scalable and reliable verification pipelines.',
      'Owned end-to-end delivery and production readiness for major initiatives such as the Vendor Integration Platform.',
      'Improved platform reliability through monitoring, alerting, RCA ownership, and continuous KTLO/tech-debt reduction.',
    ],
    tags: ['Java', 'Spring Boot', 'AWS', 'MySQL', 'Kubernetes', 'Kafka'],
  },
  {
    title: 'Lead Software Engineer',
    company: 'Freshworks',
    location: 'Bangalore',
    period: 'Apr 2024 — Nov 2024',
    bullets: [
      'Developed the Freshreports Analytics Platform, consumed across multiple Freshworks products.',
      'Contributed to backend and analytics pipelines supporting large-scale data processing and reporting.',
    ],
    tags: ['Java', 'Spring Boot', 'ReactJS', 'Python', 'AWS', 'Redis', 'MySQL'],
  },
  {
    title: 'Lead Engineer',
    company: 'Falabella India',
    location: 'Bangalore',
    period: 'Sept 2020 — Apr 2024',
    bullets: [
      'Designed and built Fulfilment Order, Order Orchestrator, and Inventory Management Systems using microservices architecture.',
      'Played a key role in architectural decision-making and system design.',
      'Led fulfilment and orchestration services, ensuring high product quality through code reviews, design reviews, testing, and integration management.',
    ],
    tags: ['Java', 'Spring Boot', 'GCP', 'Redis', 'PostgreSQL'],
  },
  {
    title: 'Software Engineer',
    company: 'Siemens Industry Software',
    location: 'Pune',
    period: 'Feb 2020 — Sept 2020',
    bullets: [
      'Developed new features for Asset Management on AWS and Azure Cloud platform.',
      'Actively participated in architectural decisions with architects.',
      'Maintained product quality by carrying out reviews and analyzing feedback.',
    ],
    tags: ['Java', 'Spring Boot', 'NodeJS', 'Angular', 'AWS', 'Azure'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Pratiti Technologies (Client: Siemens)',
    location: 'Pune',
    period: 'Aug 2017 — Feb 2020',
    bullets: [
      'Integration of Asset Management and Asset Type Management with RabbitMQ and Spring Cloud Stream Binders.',
      'Implemented services in NodeJS deployed in Azure Function Apps — HTTP Trigger and Timer Trigger functions.',
    ],
    tags: ['Java', 'Spring Boot', 'NodeJS', 'Azure', 'RabbitMQ'],
  },
  {
    title: 'System Engineer',
    company: 'Tata Consultancy Services',
    location: 'Kolkata',
    period: 'Mar 2014 — Apr 2017',
    bullets: [
      'Worked on US Citi Bank Online projects including Account Opening (AVOKA), Segmentation, and Relax-e-Cash.',
      'Built new online account-opening features with revamped UX and backend services.',
      'Developed a hybrid banking application for the TCS &amp; Citi Bank LetzApp Contest.',
    ],
    tags: ['Java', 'Spring', 'JavaScript', 'SQL'],
  },
];

const PROJECTS = [
  {
    category: 'Platform',
    title: 'Identity &amp; Verification Platform',
    company: 'Booking.com',
    description: 'Resilient multi-vendor KYC integration platform with Kafka-based event flows for scalable identity verification pipelines serving millions of users.',
    highlights: ['Multi-vendor KYC', 'Event-driven architecture', 'Production reliability'],
    tags: ['Java', 'Spring Boot', 'AWS', 'Kafka', 'Kubernetes'],
  },
  {
    category: 'E-Commerce',
    title: 'Fulfilment &amp; Order Orchestration',
    company: 'Falabella',
    description: "Complete fulfilment order management and orchestration system with inventory management, powering Latin America's largest e-commerce platform.",
    highlights: ['Microservices architecture', 'Inventory management', 'Order orchestration'],
    tags: ['Java', 'Spring Boot', 'GCP', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'IoT',
    title: 'IoT Asset Management Platform',
    company: 'Siemens',
    description: 'Cloud-native asset management system deployed on AWS and Azure, with event-driven integrations using RabbitMQ and serverless functions.',
    highlights: ['Multi-cloud', 'Serverless', 'IoT integration'],
    tags: ['Java', 'Spring Boot', 'NodeJS', 'Azure Functions', 'RabbitMQ'],
  },
  {
    category: 'Fintech',
    title: 'Citi Bank Online Banking',
    company: 'TCS',
    description: 'Online banking platform for US Citi Bank including account opening with AVOKA, customer segmentation, and digital banking features.',
    highlights: ['Account opening', 'Digital banking', 'Hybrid mobile app'],
    tags: ['Java', 'Spring', 'JavaScript', 'SQL'],
  },
];

const CORE_COMPETENCIES = [
  'OOP',
  'Data Structures &amp; Algorithms',
  'REST APIs',
  'Microservices',
  'Event-Driven Architecture',
  'System Design',
];

const SKILL_CATEGORIES = [
  { icon: 'code-2', title: 'Languages', items: ['Java', 'JavaScript', 'NodeJS', 'Python'] },
  { icon: 'layers', title: 'Frameworks &amp; Tools', items: ['Spring Boot', 'Hibernate/JPA', 'ReactJS', 'Docker', 'Kubernetes', 'Maven', 'Flyway', 'Terraform'] },
  { icon: 'database', title: 'Databases &amp; Cache', items: ['PostgreSQL', 'MySQL', 'Redis'] },
  { icon: 'server', title: 'Messaging &amp; Streaming', items: ['Kafka', 'RabbitMQ', 'GCP Pub/Sub'] },
  { icon: 'cloud', title: 'Cloud Platforms', items: ['AWS', 'GCP', 'Azure'] },
  { icon: 'git-branch', title: 'Version Control', items: ['Git', 'GitHub', 'GitLab'] },
];

const STATS = [
  { value: '12', label: 'Years Experience' },
  { value: '7', label: 'Domains Covered' },
  { value: '3', label: 'Cloud Platforms' },
];

const ACHIEVEMENTS = [
  {
    title: 'Vendor Integration Platform',
    badge: 'E2E Ownership',
    description: "Owned end-to-end delivery and production readiness for Booking.com's Vendor Integration Platform — a critical identity verification infrastructure.",
  },
  {
    title: 'Cross-Product Analytics',
    badge: 'Multi-Product Impact',
    description: 'Built analytics platform consumed across the entire Freshworks product suite, enabling data-driven decisions at scale.',
  },
  {
    title: 'Fulfilment Order Orchestration Lead',
    badge: '3.5 Years Leadership',
    description: "Led architectural decision-making for Falabella's fulfilment and orchestration services across Latin America's e-commerce.",
  },
  {
    title: 'LetzApp Banking Innovation',
    badge: 'Innovation Award',
    description: 'Developed a hybrid banking application for the TCS &amp; Citi Bank LetzApp Contest, showcasing innovative digital banking solutions.',
  },
];

const DOMAIN_TAGS = ['Travel', 'E-commerce/Retail', 'Logistics &amp; Supply Chain', 'IoT', 'Banking', 'Fintech', 'SaaS'];

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderNavLinks() {
  const desktopNav = document.getElementById('desktop-nav');
  const mobileNavContainer = document.querySelector('#mobile-nav nav');

  desktopNav.innerHTML = NAV_LINKS.map(link =>
    `<a href="${link.href}" class="nav-link px-4 py-2 text-[13px] font-medium tracking-wide rounded-full text-[#52525B] hover:text-[#18181B] hover:bg-[#18181B]/5 transition-all duration-300">${link.label}</a>`
  ).join('');

  mobileNavContainer.innerHTML = NAV_LINKS.map(link =>
    `<a href="${link.href}" class="mobile-link block px-4 py-3 text-sm font-medium rounded-lg text-[#52525B] hover:text-[#18181B] hover:bg-[#18181B]/5 transition-all duration-200">${link.label}</a>`
  ).join('');
}

function renderHeroSocials() {
  document.getElementById('hero-socials').innerHTML = SOCIAL_LINKS.map(s =>
    `<a href="${s.url}" target="_blank" rel="noopener noreferrer"
      class="group p-2 rounded-full border-2 border-[#D6D3D1] bg-white shadow-lg text-[#18181B] hover:border-amber hover:shadow-xl hover:bg-amber hover:shadow-amber/15 transition-all duration-300 hover:-translate-y-1"
      aria-label="${s.label}"><i data-lucide="${s.icon}" class="w-4 h-4 text-[#18181B] group-hover:text-white transition-colors"></i></a>`
  ).join('');
}

function renderDomainTags() {
  document.getElementById('domain-tags').innerHTML = DOMAIN_TAGS.map(tag =>
    `<span class="px-3 py-1.5 text-xs font-medium rounded-full bg-[#18181B] text-[#FAFAF9] tracking-wide">${tag}</span>`
  ).join('');
}

function renderExperience() {
  const container = document.getElementById('timeline');
  const total = EXPERIENCES.length;

  container.innerHTML = EXPERIENCES.map((exp, i) => {
    const isLast = i === total - 1;
    const isCurrent = exp.current;

    const line = !isLast
      ? '<div class="absolute left-[11px] lg:left-[19px] top-3 bottom-0 w-px bg-[#E4E4E7]"></div>'
      : '';

    const dot = isCurrent
      ? `<div class="absolute left-0 lg:left-2 top-2 w-[23px] h-[23px] rounded-full border-[3px] border-amber bg-amber/10 flex items-center justify-center">
          <span class="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
        </div>`
      : '<div class="absolute left-0 lg:left-2 top-2 w-[23px] h-[23px] rounded-full border-[3px] border-[#D4D4D8] bg-white"></div>';

    const tagClass = isCurrent
      ? 'px-2 py-1 text-[11px] font-mono text-[#52525B] bg-[#F4F4F5] rounded hover:bg-amber/10 hover:text-amber transition-colors'
      : 'px-2 py-1 text-[11px] font-mono text-[#52525B] bg-[#F4F4F5] rounded';

    return `
      <div class="relative pl-8 lg:pl-12 ${isLast ? '' : 'pb-12'} reveal">
        ${line}
        ${dot}
        <div class="group rounded-xl border border-[#E4E4E7] bg-white p-5 lg:p-6 hover-lift">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 class="text-base font-bold text-[#18181B] group-hover:text-amber transition-colors duration-300">${exp.title}</h3>
              <p class="text-sm font-medium text-[#52525B] mt-0.5">${exp.company}</p>
            </div>
            <div class="flex items-center gap-3 text-xs text-[#A1A1AA] shrink-0">
              <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3"></i>${exp.location}</span>
              <span class="font-mono">${exp.period}</span>
            </div>
          </div>
          <ul class="space-y-2">
            ${exp.bullets.map(b => `<li class="flex gap-2.5 text-sm text-[#52525B] leading-relaxed"><span class="text-amber mt-1.5 shrink-0">&#8226;</span><span>${b}</span></li>`).join('')}
          </ul>
          <div class="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-[#F4F4F5]">
            ${exp.tags.map(t => `<span class="${tagClass}">${t}</span>`).join('')}
          </div>
        </div>
      </div>`;
  }).join('');
}

function renderProjects() {
  document.getElementById('projects-grid').innerHTML = PROJECTS.map(p => `
    <div class="group rounded-xl border border-[#E4E4E7] bg-cream/50 hover-lift overflow-hidden reveal">
      <div class="h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-amber group-hover:to-transparent transition-all duration-500"></div>
      <div class="p-6 lg:p-7">
        <span class="inline-block px-2 py-0.5 text-[10px] font-mono border border-amber/30 text-amber rounded uppercase tracking-wider mb-3">${p.category}</span>
        <h3 class="text-lg font-bold text-[#18181B] group-hover:text-amber transition-colors duration-300">${p.title}</h3>
        <p class="text-xs text-[#A1A1AA] font-medium mt-1 mb-4">${p.company}</p>
        <p class="text-sm text-[#52525B] leading-relaxed mb-5">${p.description}</p>
        <div class="flex flex-wrap gap-2 mb-5">
          ${p.highlights.map(h => `<span class="px-2.5 py-1 text-[11px] font-medium rounded-full bg-amber/[0.08] text-amber border border-amber/15">${h}</span>`).join('')}
        </div>
        <div class="flex flex-wrap gap-1.5 pt-4 border-t border-[#F4F4F5]">
          ${p.tags.map(t => `<span class="px-2 py-1 text-[11px] font-mono text-[#71717A] bg-[#F4F4F5] rounded">${t}</span>`).join('')}
        </div>
      </div>
    </div>`
  ).join('');
}

function renderSkills() {
  document.getElementById('core-competencies').innerHTML = CORE_COMPETENCIES.map(c =>
    `<span class="px-4 py-2 text-sm font-medium rounded-full bg-[#18181B] text-[#FAFAF9] hover:bg-amber transition-colors duration-300 cursor-default">${c}</span>`
  ).join('');

  document.getElementById('skills-grid').innerHTML = SKILL_CATEGORIES.map(cat => `
    <div class="group p-6 rounded-xl border border-[#E4E4E7] bg-white hover-lift reveal">
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2.5 rounded-lg bg-amber/10"><i data-lucide="${cat.icon}" class="w-[18px] h-[18px] text-amber"></i></div>
        <h3 class="text-sm font-bold text-[#18181B]">${cat.title}</h3>
      </div>
      <div class="flex flex-wrap gap-1.5">
        ${cat.items.map(item => `<span class="px-2.5 py-1 text-xs font-mono text-[#52525B] bg-[#F4F4F5] rounded-md hover:bg-amber/10 hover:text-amber transition-colors cursor-default">${item}</span>`).join('')}
      </div>
    </div>`
  ).join('');
}

function renderAchievements() {
  document.getElementById('stats-grid').innerHTML = STATS.map(s => `
    <div class="p-5 rounded-xl border border-[#E4E4E7] bg-cream/50 text-center hover-lift">
      <p class="text-2xl lg:text-3xl font-bold text-amber font-mono">${s.value}</p>
      <p class="text-xs text-[#71717A] mt-1 font-medium">${s.label}</p>
    </div>`
  ).join('');

  document.getElementById('achievements-grid').innerHTML = ACHIEVEMENTS.map(a => `
    <div class="group p-6 rounded-xl border border-[#E4E4E7] bg-cream/50 hover-lift reveal">
      <div class="flex items-start gap-4">
        <div class="p-2.5 rounded-lg bg-amber/10 shrink-0"><i data-lucide="award" class="w-5 h-5 text-amber"></i></div>
        <div class="flex-1">
          <div class="flex items-start justify-between gap-3 mb-2">
            <h3 class="text-base font-bold text-[#18181B] group-hover:text-amber transition-colors duration-300">${a.title}</h3>
            <span class="text-[10px] font-mono font-semibold text-amber bg-amber/10 px-2.5 py-1 rounded-full whitespace-nowrap">${a.badge}</span>
          </div>
          <p class="text-sm text-[#52525B] leading-relaxed">${a.description}</p>
        </div>
      </div>
    </div>`
  ).join('');
}

function renderContactSocials() {
  document.getElementById('contact-socials').innerHTML = SOCIAL_LINKS.map(s =>
    `<a href="${s.url}" target="_blank" rel="noopener noreferrer"
      class="group flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-[#B0B0B5] bg-white shadow-md hover:border-amber hover:shadow-lg hover:shadow-amber/15 hover:-translate-y-1 transition-all duration-300">
      <i data-lucide="${s.icon}" class="w-[18px] h-[18px] text-[#18181B] group-hover:text-amber transition-colors"></i>
      <span class="text-sm font-semibold text-[#18181B] group-hover:text-amber transition-colors hidden sm:inline">${s.label}</span>
      <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-[#71717A] group-hover:text-amber transition-colors"></i>
    </a>`
  ).join('');
}

function renderFooterSocials() {
  const emailLink = `<a href="mailto:snehsaluja@gmail.com"
    class="p-2.5 rounded-full border border-white/5 bg-white/[0.02] text-white/30 hover:text-amber hover:border-amber/20 transition-all duration-300"
    aria-label="Email"><i data-lucide="mail" class="w-4 h-4"></i></a>`;

  document.getElementById('footer-socials').innerHTML = SOCIAL_LINKS.map(s =>
    `<a href="${s.url}" target="_blank" rel="noopener noreferrer"
      class="p-2.5 rounded-full border border-white/5 bg-white/[0.02] text-white/30 hover:text-amber hover:border-amber/20 transition-all duration-300"
      aria-label="${s.label}"><i data-lucide="${s.icon}" class="w-4 h-4"></i></a>`
  ).join('') + emailLink;
}

// ============================================
// EVENT HANDLERS
// ============================================

function initHeaderScroll() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-cream/95', 'backdrop-blur-md', 'shadow-sm');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('bg-cream/95', 'backdrop-blur-md', 'shadow-sm');
      header.classList.add('bg-transparent');
    }
  });
}

function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  let mobileOpen = false;

  mobileToggle.addEventListener('click', () => {
    mobileOpen = !mobileOpen;
    mobileNav.style.maxHeight = mobileOpen ? '400px' : '0';
    mobileNav.style.opacity = mobileOpen ? '1' : '0';
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileOpen = false;
      mobileNav.style.maxHeight = '0';
      mobileNav.style.opacity = '0';
    });
  });
}

function initNavHighlighting() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('text-amber', 'bg-amber/10');
            link.classList.remove('text-[#52525B]');
          } else {
            link.classList.remove('text-amber', 'bg-amber/10');
            link.classList.add('text-[#52525B]');
          }
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

  sections.forEach(s => navObserver.observe(s));
}

function initScrollReveal() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderNavLinks();
  renderHeroSocials();
  renderDomainTags();
  renderExperience();
  renderProjects();
  renderSkills();
  renderAchievements();
  renderContactSocials();
  renderFooterSocials();

  lucide.createIcons();

  initHeaderScroll();
  initMobileMenu();
  initNavHighlighting();
  initScrollReveal();
});
