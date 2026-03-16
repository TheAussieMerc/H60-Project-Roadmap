// ── SITE DATA ──────────────────────────────────────────────────────────────
const SITE = {
  name: 'Sikorsky H60 Project',
  subtitle: 'A comprehensive H-60 family mod for Arma Reforger — multiple variants, services & eras',
  framework: 'AUS_CORE',
  status: 'Active Development',
};

const CATEGORIES = [
  { id: 'flight-model',      label: 'Flight Model & Physics',    icon: '⚙️',  file: 'flight-model.html',      done: 2, total: 7  },
  { id: 'cockpit',           label: 'Cockpit / MFCD Systems',    icon: '🖥️', file: 'cockpit.html',            done: 1, total: 8  },
  { id: 'visual-fx',         label: 'Visual & Particle Effects', icon: '✨',  file: 'visual-fx.html',          done: 1, total: 5  },
  { id: 'audio',             label: 'Audio',                     icon: '🔊',  file: 'audio.html',              done: 1, total: 5  },
  { id: 'weapon-platforms',  label: 'Weapon Platforms',          icon: '🎯',  file: 'weapon-platforms.html',   done: 0, total: 6  },
  { id: 'crew-weapons',      label: 'Crew Weapons',              icon: '🔫',  file: 'crew-weapons.html',       done: 0, total: 5  },
  { id: 'camera',            label: 'Camera System',             icon: '📷',  file: 'camera.html',             done: 0, total: 4  },
  { id: 'fuselage',          label: 'Fuselage & Model Upgrades', icon: '🔧',  file: 'fuselage.html',           done: 0, total: 5  },
  { id: 'variants',          label: 'Airframe Variants',         icon: '🚁',  file: 'variants.html',           done: 0, total: 10 },
  { id: 'liveries',          label: 'Liveries',                  icon: '🎨',  file: 'liveries.html',           done: 0, total: 5  },
  { id: 'releases',          label: 'Releases & Versioning',     icon: '🚀',  file: 'releases.html',           done: 1, total: 4  },
];

// ── SIDEBAR ────────────────────────────────────────────────────────────────
function buildSidebar(activePage) {
  const links = CATEGORIES.map(c => {
    const pct = Math.round((c.done / c.total) * 100);
    const active = c.id === activePage ? ' active' : '';
    return `
      <a href="${c.file}" class="nav-link${active}">
        <span class="nav-icon">${c.icon}</span>
        <span class="nav-label">${c.label}</span>
        <span class="nav-pct">${pct}%</span>
      </a>`;
  }).join('');

  return `
    <nav class="sidebar" id="sidebar">
      <a href="index.html" class="sidebar-home">
        <div class="sidebar-logo">H60</div>
        <div class="sidebar-project">Sikorsky<br><span>H60 Project</span></div>
      </a>
      <div class="nav-links">
        ${links}
      </div>
      <div class="sidebar-footer">
        <div>AUS_CORE // ARMA REFORGER</div>
      </div>
    </nav>
    <button class="sidebar-toggle" id="sidebarToggle" onclick="toggleSidebar()">☰</button>`;
}

// ── BOTTOM TIMELINE ────────────────────────────────────────────────────────
function buildTimeline(activePage) {
  const bars = CATEGORIES.map(c => {
    const pct = Math.round((c.done / c.total) * 100);
    const active = c.id === activePage ? ' tl-active' : '';
    return `
      <a href="${c.file}" class="tl-item${active}" title="${c.label}: ${pct}% complete">
        <div class="tl-label">${c.icon} ${c.label}</div>
        <div class="tl-track">
          <div class="tl-fill" style="width:${pct}%"></div>
        </div>
        <div class="tl-pct">${pct}%</div>
      </a>`;
  }).join('');

  return `
    <div class="timeline-bar" id="timelineBar">
      <div class="tl-scroll">
        ${bars}
      </div>
    </div>`;
}

// ── SIDEBAR TOGGLE ─────────────────────────────────────────────────────────
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ── INJECT SHARED ELEMENTS ─────────────────────────────────────────────────
function initPage(activePage) {
  // Sidebar
  const sidebarEl = document.getElementById('sidebar-mount');
  if (sidebarEl) sidebarEl.innerHTML = buildSidebar(activePage);

  // Timeline
  const timelineEl = document.getElementById('timeline-mount');
  if (timelineEl) timelineEl.innerHTML = buildTimeline(activePage);
}
