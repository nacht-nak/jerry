import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const projectsDir = path.join(publicDir, 'projects');

if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// 1. Avatar SVG
const avatarSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080e1e"/>
      <stop offset="50%" stop-color="#0e172a"/>
      <stop offset="100%" stop-color="#061226"/>
    </linearGradient>
    <linearGradient id="cyberGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="50%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
    <linearGradient id="accentGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0.2"/>
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#6366f1" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#040711" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="600" height="600" rx="32" fill="url(#bgGrad)"/>
  <circle cx="300" cy="260" r="220" fill="url(#halo)"/>

  <!-- Futuristic Tech Grid Lines -->
  <g stroke="#38bdf8" stroke-width="1" opacity="0.15">
    <line x1="50" y1="300" x2="550" y2="300"/>
    <line x1="300" y1="50" x2="300" y2="550"/>
    <circle cx="300" cy="260" r="160" fill="none" stroke-dasharray="6,6"/>
    <circle cx="300" cy="260" r="200" fill="none" stroke-dasharray="3,9"/>
  </g>

  <!-- Silhouette & Tech Headset / Avatar -->
  <g transform="translate(300, 270)">
    <!-- Shoulders / Torso -->
    <path d="M-150 230 C -140 130, -90 90, 0 90 C 90 90, 140 130, 150 230 Z" fill="#15203b" stroke="url(#cyberGlow)" stroke-width="3"/>
    <path d="M-70 110 L0 170 L70 110" fill="none" stroke="#06b6d4" stroke-width="3" opacity="0.6"/>

    <!-- Neck -->
    <rect x="-35" y="40" width="70" height="70" rx="12" fill="#1e293b" opacity="0.9"/>

    <!-- Head & Face -->
    <path d="M-65 -40 C-65 -110, 65 -110, 65 -40 C65 20, 45 65, 0 65 C-45 65, -65 20, -65 -40 Z" fill="#1e293b" stroke="url(#cyberGlow)" stroke-width="2.5"/>

    <!-- Hair / Tech Silhouette -->
    <path d="M-70 -45 C-70 -130, 30 -140, 75 -70 C60 -60, 40 -85, -10 -85 C-50 -85, -65 -60, -70 -45 Z" fill="#0f172a"/>

    <!-- Tech Visor / Glasses Accent -->
    <rect x="-48" y="-35" width="96" height="24" rx="6" fill="#0b1329" stroke="#38bdf8" stroke-width="2"/>
    <line x1="-38" y1="-23" x2="38" y2="-23" stroke="#06b6d4" stroke-width="3"/>
    <circle cx="28" cy="-23" r="3" fill="#38bdf8"/>
    <circle cx="-28" cy="-23" r="3" fill="#6366f1"/>

    <!-- Glowing Tech Core -->
    <circle cx="0" cy="140" r="16" fill="#080c18" stroke="#06b6d4" stroke-width="2.5"/>
    <circle cx="0" cy="140" r="7" fill="#38bdf8"/>
  </g>

  <!-- Corner Tech HUD Accents -->
  <g stroke="#06b6d4" stroke-width="2" fill="none" opacity="0.6">
    <path d="M 40 70 L 40 40 L 70 40"/>
    <path d="M 560 70 L 560 40 L 530 40"/>
    <path d="M 40 530 L 40 560 L 70 560"/>
    <path d="M 560 530 L 560 560 L 530 560"/>
  </g>

  <!-- Monogram & Tag -->
  <text x="300" y="540" text-anchor="middle" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="16" letter-spacing="4" font-weight="600">WELQUIM PANOGALING // DEV</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'avatar.svg'), avatarSvg);
fs.writeFileSync(path.join(publicDir, 'avatar1.svg'), avatarSvg);
fs.writeFileSync(path.join(publicDir, 'avatar.JPG'), avatarSvg);
fs.writeFileSync(path.join(publicDir, 'avatar1.JPG'), avatarSvg);

// Helper to create project SVG
function makeProjectSvg(title, category, subtitle, primaryColor, accentColor, iconSvg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1022"/>
      <stop offset="100%" stop-color="#060914"/>
    </linearGradient>
    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${primaryColor}"/>
      <stop offset="100%" stop-color="${accentColor}"/>
    </linearGradient>
    <radialGradient id="centerGlow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="${primaryColor}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#040711" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="800" height="500" rx="16" fill="url(#cardBg)"/>
  <rect width="800" height="500" rx="16" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
  <circle cx="400" cy="220" r="240" fill="url(#centerGlow)"/>

  <!-- Browser/Window Header -->
  <rect width="800" height="42" rx="16" fill="#0f172a" opacity="0.9"/>
  <circle cx="30" cy="21" r="6" fill="#ef4444" opacity="0.8"/>
  <circle cx="50" cy="21" r="6" fill="#eab308" opacity="0.8"/>
  <circle cx="70" cy="21" r="6" fill="#22c55e" opacity="0.8"/>
  <rect x="110" y="10" width="340" height="22" rx="6" fill="#1e293b" opacity="0.7"/>
  <text x="130" y="25" fill="#94a3b8" font-family="'JetBrains Mono', monospace" font-size="11">https://panogaling.dev/projects/${category.toLowerCase()}</text>

  <!-- Cybernetic Grid in window -->
  <g stroke="rgba(56, 189, 248, 0.08)" stroke-width="1">
    <line x1="0" y1="120" x2="800" y2="120"/>
    <line x1="0" y1="200" x2="800" y2="200"/>
    <line x1="0" y1="280" x2="800" y2="280"/>
    <line x1="0" y1="360" x2="800" y2="360"/>
    <line x1="200" y1="42" x2="200" y2="500"/>
    <line x1="400" y1="42" x2="400" y2="500"/>
    <line x1="600" y1="42" x2="600" y2="500"/>
  </g>

  <!-- App UI Wireframe Mockup -->
  <!-- Sidebar -->
  <rect x="30" y="65" width="130" height="400" rx="8" fill="#0d1529" stroke="rgba(255,255,255,0.06)"/>
  <rect x="50" y="90" width="90" height="12" rx="4" fill="${primaryColor}" opacity="0.6"/>
  <rect x="50" y="125" width="70" height="8" rx="3" fill="#334155"/>
  <rect x="50" y="150" width="80" height="8" rx="3" fill="#334155"/>
  <rect x="50" y="175" width="65" height="8" rx="3" fill="#334155"/>
  <rect x="50" y="200" width="75" height="8" rx="3" fill="#334155"/>

  <!-- Main Display Card -->
  <rect x="180" y="65" width="590" height="230" rx="12" fill="#0e172e" stroke="rgba(56, 189, 248, 0.2)"/>
  <rect x="210" y="95" width="160" height="18" rx="4" fill="url(#headerGrad)"/>
  <rect x="210" y="125" width="320" height="10" rx="4" fill="#64748b" opacity="0.7"/>
  <rect x="210" y="145" width="280" height="10" rx="4" fill="#64748b" opacity="0.5"/>

  <!-- Center Feature Icon Graphics -->
  <g transform="translate(640, 160)">
    <circle cx="0" cy="0" r="45" fill="#13203c" stroke="${primaryColor}" stroke-width="2"/>
    ${iconSvg}
  </g>

  <!-- Secondary Metrics / Data Row -->
  <rect x="180" y="315" width="180" height="150" rx="10" fill="#0d162a" stroke="rgba(255,255,255,0.05)"/>
  <rect x="385" y="315" width="180" height="150" rx="10" fill="#0d162a" stroke="rgba(255,255,255,0.05)"/>
  <rect x="590" y="315" width="180" height="150" rx="10" fill="#0d162a" stroke="rgba(255,255,255,0.05)"/>

  <!-- Title and Badge Overlay at Bottom -->
  <rect x="180" y="220" width="100" height="24" rx="6" fill="#1e293b"/>
  <text x="230" y="236" text-anchor="middle" fill="${primaryColor}" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">${category}</text>
  
  <text x="210" y="275" fill="#f8fafc" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="700">${title}</text>
  <text x="210" y="295" fill="#94a3b8" font-family="'Plus Jakarta Sans', sans-serif" font-size="12">${subtitle}</text>
</svg>`;
}

const projects = [
  {
    name: 'cbrms',
    title: 'Cloud-Based Research Management',
    category: 'Laravel / Cloud',
    subtitle: 'Institutional Document & Research Repository',
    color1: '#06b6d4',
    color2: '#38bdf8',
    icon: `<path d="M-15 -10 L0 -25 L15 -10 L8 -10 L8 15 L-8 15 L-8 -10 Z" fill="#06b6d4"/>`
  },
  {
    name: 'pageant',
    title: 'Pageant Tabulation System',
    category: 'React / Django',
    subtitle: 'Real-Time Score Calculation & Live Rankings',
    color1: '#f59e0b',
    color2: '#fbbf24',
    icon: `<path d="M-15 15 L-20 -15 L-5 0 L0 -20 L5 0 L20 -15 L15 15 Z" fill="#f59e0b"/>`
  },
  {
    name: 'ai-detection',
    title: 'AI Text Detection System',
    category: 'Python / React',
    subtitle: 'NLP Linguistic Heuristics & Perplexity Scoring',
    color1: '#8b5cf6',
    color2: '#6366f1',
    icon: `<circle cx="0" cy="0" r="18" fill="none" stroke="#8b5cf6" stroke-width="3"/><circle cx="0" cy="0" r="6" fill="#6366f1"/>`
  },
  {
    name: 'it-asset',
    title: 'IT Asset & Laboratory Portal',
    category: 'Laravel / System',
    subtitle: 'Hardware Tracking, Lab Stations & QR Audits',
    color1: '#3b82f6',
    color2: '#60a5fa',
    icon: `<rect x="-18" y="-12" width="36" height="24" rx="4" fill="none" stroke="#3b82f6" stroke-width="3"/>`
  },
  {
    name: 'event-portal',
    title: 'Campus Event & Ticketing Portal',
    category: 'React / Web',
    subtitle: 'Digital Passes & Real-Time QR Gate Attendance',
    color1: '#10b981',
    color2: '#34d399',
    icon: `<circle cx="0" cy="0" r="15" fill="none" stroke="#10b981" stroke-width="3"/><path d="M-6 0 L-2 4 L6 -4" stroke="#10b981" stroke-width="3" fill="none"/>`
  },
  {
    name: 'ecommerce',
    title: 'Apex Commerce Digital Store',
    category: 'React / TypeScript',
    subtitle: 'Ultra-Fast Product Catalog & Cart Experience',
    color1: '#ec4899',
    color2: '#f43f5e',
    icon: `<path d="M-14 -10 L14 -10 L10 12 L-10 12 Z" fill="none" stroke="#ec4899" stroke-width="3"/>`
  }
];

for (const p of projects) {
  const svg = makeProjectSvg(p.title, p.category, p.subtitle, p.color1, p.color2, p.icon);
  fs.writeFileSync(path.join(projectsDir, `${p.name}.svg`), svg);
  fs.writeFileSync(path.join(projectsDir, `${p.name}.jpg`), svg);
}

console.log('Successfully generated assets in public/ and public/projects/');
