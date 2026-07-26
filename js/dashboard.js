/* ─────────────────────────────────────────────────────────────────────────────
   STATIC DATA — update these blocks manually after each sprint
   Last updated: 2026-03-27
───────────────────────────────────────────────────────────────────────────── */

// Repo stats: file count, contributors, size estimate
// Update these after checking each repo in GitHub
const STATIC_REPO_STATS = {
  'twobirds-kramerica/digital-confidence': {
    fileCount: '~180 files',
    contributors: 1,
    sizeEst: '~4.2 MB'
  },
  'twobirds-kramerica/two-birds-innovation': {
    fileCount: '~25 files',
    contributors: 1,
    sizeEst: '~1.1 MB'
  },
  'twobirds-kramerica/kevins-apartment-search': {
    fileCount: '~40 files',
    contributors: 1,
    sizeEst: '~0.8 MB'
  },
  'twobirds-kramerica/career-coach': {
    fileCount: '~30 files',
    contributors: 1,
    sizeEst: '~0.6 MB'
  },
  'twobirds-kramerica/quality-dashboard': {
    fileCount: '~5 files',
    contributors: 1,
    sizeEst: '~0.1 MB'
  },
  'twobirds-kramerica/two-birds-portfolio': {
    fileCount: '~15 files',
    contributors: 1,
    sizeEst: '~0.3 MB'
  },
  'twobirds-kramerica/two-birds-project-template': {
    fileCount: '~10 files',
    contributors: 1,
    sizeEst: '~0.2 MB'
  },
  'twobirds-kramerica/aaron-kramer': {
    fileCount: '~5 files',
    contributors: 1,
    sizeEst: '~0.1 MB'
  },
  'twobirds-kramerica/clarity': {
    fileCount: '~8 files',
    contributors: 1,
    sizeEst: '~0.2 MB'
  },
  'twobirds-kramerica/aaron-patzalek': {
    fileCount: '~5 files',
    contributors: 1,
    sizeEst: '~0.1 MB'
  }
};

// Build history — last 5 commits per key repo
// ISO date strings so relative time is calculated automatically
// Update this block after each session
const BUILD_HISTORY = {
  'Digital Confidence Centre': [
    { date: '2026-04-01', msg: 'feat: LinkedIn content system — 8 posts ready, profile optimisation guide' },
    { date: '2026-03-31', msg: 'feat: newsletter and sharing system, B2B outreach dashboard' },
    { date: '2026-03-31', msg: 'fix: complete health audit — meta, broken links, service worker, Canadian English' },
    { date: '2026-03-28', msg: 'feat: modules 18-19, B2B emails, GitHub Actions, quiz ecosystem' },
    { date: '2026-03-27', msg: 'feat: AEO 30 pages, scam ecosystem, white label, accessibility AAA' }
  ],
  'Career Coach': [
    { date: '2026-04-02', msg: 'feat: Strengthen My CV — AI analyses CV against job posting' },
    { date: '2026-04-02', msg: 'feat: LLM portability layer — 3 API calls migrated to llm-provider.js' },
    { date: '2026-04-02', msg: 'feat: JSON export, privacy notice, product roadmap' },
    { date: '2026-03-31', msg: 'feat: job stats card, print jobs, mission-driven cover letter' },
    { date: '2026-03-28', msg: 'feat: Career Coach v1.0 — AI job application tool with scoring' }
  ],
  'Clarity': [
    { date: '2026-04-02', msg: 'feat: LLM portability layer — API call migrated to llm-provider.js' },
    { date: '2026-04-01', msg: 'feat: Clarity full build — improved form, SWOT grid, quick wins, CTA' },
    { date: '2026-03-31', msg: 'feat: Clarity AI business diagnostic — initial build' }
  ],
  'Aaron Patzalek': [
    { date: '2026-04-01', msg: 'feat: full personal brand site — story, projects, contact details' },
    { date: '2026-03-31', msg: 'feat: site final — pricing, proof of work, availability, mobile' }
  ],
  'Quality Dashboard': [
    { date: '2026-03-27', msg: 'feat: repo stats, build history, alerts panel, export' },
    { date: '2026-03-20', msg: 'chore: quality dashboard sync — score updated to /15' },
    { date: '2026-03-18', msg: 'feat: add two-birds-innovation to quality dashboard' },
    { date: '2026-03-15', msg: 'feat: internal strategy summary page — PIN protected' },
    { date: '2026-03-10', msg: 'feat: quality dashboard — friendly names, tooltips' }
  ],
  'Two Birds Innovation': [
    { date: '2026-04-02', msg: 'feat: Kevin\'s Apt tool card, Work With Aaron section' },
    { date: '2026-04-01', msg: 'feat: full company site — problem section, 3 tools, Why Two Birds' }
  ],
  'Command Centre': [
    { date: '2026-04-02', msg: 'feat: language bank V2 — Wait For Native, 7 new code words' },
    { date: '2026-04-01', msg: 'feat: journey timeline — visual commit density chart' },
    { date: '2026-04-01', msg: 'feat: prompt library + language bank pages' }
  ],
  'Elite Karate Site': [
    { date: '2026-04-02', msg: 'feat: polished — classes, schedule, contact, mobile nav, Canadian English' }
  ]
};

/* ─────────────────────────────────────────────────────────────────────────────
   RUNTIME STATE — populated after runChecks() completes
───────────────────────────────────────────────────────────────────────────── */
let lastResults = [];

/* ─────────────────────────────────────────────────────────────────────────────
   REPO DEFINITIONS
───────────────────────────────────────────────────────────────────────────── */
// Repos that exist locally only — no GitHub remote yet.
// These are rendered with an orange "Local — awaiting push" badge
// and skip all GitHub API checks.
const LOCAL_ONLY_REPOS = new Set([
  // All repos now pushed to GitHub — none are local-only as of April 2, 2026
]);

const REPOS = [
  'twobirds-kramerica/digital-confidence',
  'twobirds-kramerica/two-birds-innovation',
  'twobirds-kramerica/kevins-apartment-search',
  'twobirds-kramerica/two-birds-portfolio',
  'twobirds-kramerica/two-birds-project-template',
  'twobirds-kramerica/career-coach',
  'twobirds-kramerica/quality-dashboard',
  'twobirds-kramerica/clarity',
  'twobirds-kramerica/aaron-patzalek',
  'twobirds-kramerica/elite-karate-site',
  'twobirds-kramerica/two-birds-command-centre'
];

const REPO_META = {
  'twobirds-kramerica/digital-confidence': {
    name: 'Digital Confidence Centre',
    desc: 'A digital literacy platform for Canadian seniors. Covers scam protection, online banking, video calls, and more across 19 modules.'
  },
  'twobirds-kramerica/two-birds-innovation': {
    name: 'Two Birds Innovation',
    desc: 'Company website for Two Birds Innovation. Single-page deep space design featuring all products, mission, values, and contact.'
  },
  'twobirds-kramerica/kevins-apartment-search': {
    name: 'Apartment Search Tool',
    desc: 'A personalised apartment hunting dashboard with live listings, neighbourhood safety ratings, and AI insights.'
  },
  'twobirds-kramerica/career-coach': {
    name: 'Career Coach',
    desc: 'An AI-powered job application coaching tool. Analyses job postings against your CV, scores fit, and generates customised applications.'
  },
  'twobirds-kramerica/quality-dashboard': {
    name: 'Quality Dashboard',
    desc: 'Internal build health monitor for all Two Birds Innovation products. Not public-facing.'
  },
  'twobirds-kramerica/two-birds-portfolio': {
    name: 'Two Birds Portfolio',
    desc: 'Enterprise backlog, WIP dashboard, and project archive for Two Birds Innovation.'
  },
  'twobirds-kramerica/two-birds-project-template': {
    name: 'Project Template',
    desc: 'Reusable GitHub Pages starter template for new Two Birds Innovation builds.'
  },
  'twobirds-kramerica/aaron-kramer': {
    name: 'Aaron Kramer — Personal Brand',
    desc: 'Personal brand site for Aaron Kramer: senior PM, founder, innovator. The Gap, projects, principles, and contact.'
  },
  'twobirds-kramerica/clarity': {
    name: 'Clarity',
    desc: 'AI-assisted decision reflection tool. Structured prompts, journaling, and AI summaries to help users think through big decisions.'
  },
  'twobirds-kramerica/aaron-patzalek': {
    name: 'Aaron Patzalek Consulting',
    desc: 'Consulting site for Aaron Patzalek: product strategy, discovery, team coaching, advisory. Services and rates.'
  },
  'twobirds-kramerica/elite-karate-site': {
    name: 'Elite Karate Site',
    desc: 'Client project for Kirk\'s Elite Karate Club, St. Thomas. Classes, schedule, contact, mobile nav. Awaiting client review.'
  },
  'twobirds-kramerica/two-birds-command-centre': {
    name: 'Command Centre',
    desc: 'Operations dashboard: vault, inbox, decisions, language bank, prompt library, journey timeline.'
  }
};

const CHECK_TOOLTIPS = {
  'Has README.md':        'A README file explains what the project is. Every repo should have one.',
  'Has CLAUDE.md':        'CLAUDE.md contains guardrails and instructions for Claude Code builds on this project.',
  'Recent commit (30d)':  'A commit within the last 30 days shows the project is actively maintained.',
  'Open issues < 10':     'The number of open GitHub Issues. Issues are used as build reminders and review prompts.',
  'Has sitemap.xml':      'A sitemap helps search engines find all pages on the site.',
  'Has robots.txt':       'robots.txt tells search engines which pages to crawl and which to ignore.',
  'Has stars':            'GitHub stars on this repo. Internal projects show 0 — this is expected and fine.',
  'Has description':      'A GitHub repo description helps anyone landing on the repo understand what it does.',
  'GitHub Pages enabled': 'GitHub Pages hosts this project as a live website. Green means the site is publicly accessible.',
  'Has _strategy/':       'The strategy folder contains competitive analysis, personas, and monetisation plans.',
  'Has viewport meta':    'Ensures the site displays correctly on mobile devices.',
  'Has lang attribute':   'Helps screen readers and accessibility tools understand the page language.',
  'Has /tips/':           'Periodicals system — at least one tip article published under /tips/.',
  'Has /_social/':        'Social content queue — /_social/content-queue.json exists for scheduled posts.',
  'Has /geo-content/':    'GEO intent pages — answer pages targeting top senior search queries.'
};

const SCORE_TOOLTIP = 'Counts how many of 15 build health checks this repo passes. Measures build completeness, not performance.';

const API = 'https://api.github.com';

/* ─────────────────────────────────────────────────────────────────────────────
   UTILITIES
───────────────────────────────────────────────────────────────────────────── */
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function makeTip(text, extraClass) {
  const cls = 'tip-wrap' + (extraClass ? ' ' + extraClass : '');
  return `<span class="${cls}" tabindex="0"><i class="tip-icon" aria-label="More info" role="note">?</i><span class="tip-text">${esc(text)}</span></span>`;
}

// Convert a date string or Date object to a human-readable relative time
function relativeTime(dateInput) {
  const date = (dateInput instanceof Date) ? dateInput : new Date(dateInput);
  if (isNaN(date)) return 'Unknown';
  const diff = Math.floor((Date.now() - date) / 1000); // seconds
  if (diff < 60)          return 'Just now';
  if (diff < 3600)        return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400)       return `${Math.floor(diff / 3600)}h ago`;
  const days = Math.floor(diff / 86400);
  if (days < 30)          return `${days} day${days !== 1 ? 's' : ''} ago`;
  const months = Math.floor(days / 30);
  if (months < 12)        return `${months} month${months !== 1 ? 's' : ''} ago`;
  return `${Math.floor(months / 12)} year${Math.floor(months / 12) !== 1 ? 's' : ''} ago`;
}

/* ─────────────────────────────────────────────────────────────────────────────
   BUILD HISTORY RENDER
───────────────────────────────────────────────────────────────────────────── */
function renderBuildHistory() {
  const grid = document.getElementById('history-grid');
  grid.innerHTML = Object.entries(BUILD_HISTORY).map(([repoName, commits]) => {
    const items = commits.slice(0, 5).map(c => `
      <li class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-msg">${esc(c.msg)}</div>
          <div class="timeline-date">${relativeTime(c.date + 'T12:00:00')}</div>
        </div>
      </li>`).join('');
    return `
      <div class="history-card">
        <div class="history-repo-name">${esc(repoName)}</div>
        <ul class="timeline">${items}</ul>
      </div>`;
  }).join('');
}

/* ─────────────────────────────────────────────────────────────────────────────
   ALERTS PANEL RENDER
───────────────────────────────────────────────────────────────────────────── */
function renderAlerts(results) {
  const panel = document.getElementById('alerts-panel');
  const alerts = [];

  results.forEach(r => {
    if (r.status !== 'fulfilled') return;
    const d = r.value;
    const info = REPO_META[d.repo] || { name: d.repo };
    const scorePct = Math.round((d.score / d.total) * 100);

    if (d.daysSince > 14) {
      alerts.push({
        type: 'stale',
        msg: `${info.name} — no commit in ${d.daysSince} days (last: ${formatDate(d.commitDate)})`
      });
    }
    if (scorePct < 70) {
      alerts.push({
        type: 'score',
        msg: `${info.name} — health score below 70% (${scorePct}%, ${d.score}/${d.total})`
      });
    }
  });

  if (alerts.length === 0) {
    panel.innerHTML = `
      <div class="alerts-box all-clear">
        <div class="alerts-heading ok">All Systems Healthy</div>
        <div class="all-clear-msg">No staleness warnings or low health scores detected across all repos.</div>
      </div>`;
  } else {
    const items = alerts.map(a => `
      <li class="alert-item ${a.type === 'score' ? 'score-alert' : ''}">
        <span class="alert-icon">${a.type === 'score' ? '▼' : '⏰'}</span>
        <span>${esc(a.msg)}</span>
      </li>`).join('');
    panel.innerHTML = `
      <div class="alerts-box has-alerts">
        <div class="alerts-heading warn">⚠ ${alerts.length} Alert${alerts.length !== 1 ? 's' : ''} Detected</div>
        <ul class="alert-list">${items}</ul>
      </div>`;
  }
}

/* ─────────────────────────────────────────────────────────────────────────────
   API HELPERS — with 60s sessionStorage cache to stay under GitHub's
   unauthenticated rate limit (60/hour per IP) on refresh-heavy days.
───────────────────────────────────────────────────────────────────────────── */
const CACHE_TTL_MS = 60_000;
const CACHE_NS     = 'qd-cache:';

function cacheGet(key) {
  try {
    const raw = sessionStorage.getItem(CACHE_NS + key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || Date.now() - parsed.ts > CACHE_TTL_MS) return null;
    return parsed.data;
  } catch { return null; }
}

function cacheSet(key, data) {
  try {
    sessionStorage.setItem(CACHE_NS + key, JSON.stringify({ ts: Date.now(), data }));
  } catch {}  // quota exceeded / private-mode / etc. — silently skip
}

// Returns the sessionStorage cache timestamp for a URL (ms epoch) or null.
// Used to show a "Data fetched: Nm ago" label per repo card.
function cacheTimestamp(key) {
  try {
    const raw = sessionStorage.getItem(CACHE_NS + key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return (parsed && typeof parsed.ts === 'number') ? parsed.ts : null;
  } catch { return null; }
}

async function fetchJSON(url) {
  const hit = cacheGet('json:' + url);
  if (hit !== null) return hit;
  const r = await fetch(url, { headers: { 'Accept': 'application/vnd.github.v3+json' } });
  if (!r.ok) throw Object.assign(new Error(r.statusText), { status: r.status });
  const data = await r.json();
  cacheSet('json:' + url, data);
  return data;
}

async function fileExists(repo, path) {
  const key = 'exists:' + repo + ':' + path;
  const hit = cacheGet(key);
  if (hit !== null) return hit;
  try {
    const r = await fetch(`${API}/repos/${repo}/contents/${path}`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });
    const ok = (r.status === 200);
    cacheSet(key, ok);
    return ok;
  } catch { return false; }
}

async function pagesEnabled(repo) {
  const key = 'pages:' + repo;
  const hit = cacheGet(key);
  if (hit !== null) return hit;
  try {
    const r = await fetch(`${API}/repos/${repo}/pages`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });
    const ok = (r.status === 200);
    cacheSet(key, ok);
    return ok;
  } catch { return false; }
}

async function fetchIndexHead(repo) {
  const key = 'head:' + repo;
  const hit = cacheGet(key);
  if (hit !== null) return hit;
  try {
    const r = await fetch(`https://raw.githubusercontent.com/${repo}/main/index.html`);
    if (!r.ok) { cacheSet(key, ''); return ''; }
    const text = await r.text();
    const snippet = text.slice(0, 3000);
    cacheSet(key, snippet);
    return snippet;
  } catch { return ''; }
}

/* ─────────────────────────────────────────────────────────────────────────────
   REPO CHECK
───────────────────────────────────────────────────────────────────────────── */
async function checkRepo(repo) {
  const [meta, commits, hasReadme, hasClaude, hasSitemap, hasRobots, hasPages, hasStrategy, indexHead, hasTips, hasSocial, hasGeo] = await Promise.all([
    fetchJSON(`${API}/repos/${repo}`),
    fetchJSON(`${API}/repos/${repo}/commits?per_page=1`),
    fileExists(repo, 'README.md'),
    fileExists(repo, 'CLAUDE.md'),
    fileExists(repo, 'sitemap.xml'),
    fileExists(repo, 'robots.txt'),
    pagesEnabled(repo),
    fileExists(repo, '_strategy'),
    fetchIndexHead(repo),
    fileExists(repo, 'tips/index.html'),
    fileExists(repo, '_social/content-queue.json'),
    fileExists(repo, 'geo-content')
  ]);

  const lastCommit   = commits[0] || null;
  const commitDate   = lastCommit ? new Date(lastCommit.commit.committer.date) : null;
  const commitMsg    = lastCommit ? lastCommit.commit.message.split('\n')[0] : 'No commits';
  const daysSince    = commitDate ? Math.floor((Date.now() - commitDate) / 86400000) : 999;
  const recentCommit = daysSince < 30;

  const hasViewport = /meta[^>]+name=["']viewport/i.test(indexHead);
  const hasLang     = /html[^>]+lang=/i.test(indexHead);

  const checks = {
    'Has README.md':        hasReadme,
    'Has CLAUDE.md':        hasClaude,
    'Recent commit (30d)':  recentCommit,
    'Open issues < 10':     meta.open_issues_count < 10,
    'Has sitemap.xml':      hasSitemap,
    'Has robots.txt':       hasRobots,
    'Has stars':            meta.stargazers_count >= 1,
    'Has description':      !!(meta.description && meta.description.trim()),
    'GitHub Pages enabled': hasPages,
    'Has _strategy/':       hasStrategy,
    'Has viewport meta':    hasViewport,
    'Has lang attribute':   hasLang,
    'Has /tips/':           hasTips,
    'Has /_social/':        hasSocial,
    'Has /geo-content/':    hasGeo
  };

  const score = Object.values(checks).filter(Boolean).length;
  const total = Object.keys(checks).length;
  const badge = score >= 14 ? 'teal' : score >= 11 ? 'green' : score >= 8 ? 'yellow' : 'red';
  const label = score >= 14 ? 'Excellent' : score >= 11 ? 'Good' : score >= 8 ? 'Fair' : 'Needs Work';

  return { repo, meta, commitDate, commitMsg, daysSince, checks, score, total, badge, label };
}

/* ─────────────────────────────────────────────────────────────────────────────
   RENDER HELPERS
───────────────────────────────────────────────────────────────────────────── */
function formatDate(d) {
  if (!d) return 'Never';
  return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' });
}

function renderLocalCard(repo) {
  const info  = REPO_META[repo] || { name: repo, desc: '' };
  const stats = STATIC_REPO_STATS[repo] || { fileCount: '—', contributors: '—', sizeEst: '—' };
  const history = BUILD_HISTORY[info.name] || [];
  const lastMsg = history.length ? history[0].msg : 'No build history recorded';
  const lastDate = history.length ? history[0].date : null;
  return `
    <div class="repo-card" style="border-color:var(--orange)">
      <div class="card-header">
        <div class="repo-name-block">
          <div class="repo-name">${esc(info.name)}</div>
          <div class="repo-slug">${esc(repo)}</div>
        </div>
        <div class="health-badge badge-orange">Local — awaiting push</div>
      </div>
      <p class="repo-desc">${esc(info.desc)}</p>
      <div class="repo-stats">
        <div class="stat-item">
          <span class="stat-label">Files</span>
          <span class="stat-value">${esc(stats.fileCount)}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Remote</span>
          <span class="stat-value" style="color:var(--orange)">Not pushed</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Contributors</span>
          <span class="stat-value">${esc(String(stats.contributors))}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Size</span>
          <span class="stat-value">${esc(stats.sizeEst)}</span>
        </div>
      </div>
      <div class="card-meta">
        <span class="last-build-row">
          <strong class="last-build-label">Last build:</strong>
          <em class="commit-msg">${esc(lastMsg)}</em>
        </span>
        ${lastDate ? `<span><strong>Date:</strong> ${lastDate}</span>` : ''}
        <span style="color:var(--orange);font-size:0.82em;">⚠ No GitHub remote — health checks skipped until pushed</span>
      </div>
    </div>`;
}

function renderSkeleton(repo) {
  const info = REPO_META[repo] || { name: repo };
  return `
    <div class="repo-card skeleton">
      <div class="card-header">
        <div class="repo-name-block">
          <div class="repo-name">${esc(info.name)}</div>
          <div class="repo-slug">${esc(repo)}</div>
        </div>
        <div class="health-badge badge-yellow">Checking…</div>
      </div>
      <div class="skel-line" style="width:90%"></div>
      <div class="skel-line" style="width:80%"></div>
      <div class="skel-line" style="width:60%"></div>
      <div class="skel-line" style="width:70%"></div>
    </div>`;
}

function renderCard(data) {
  const { repo, meta, commitDate, commitMsg, daysSince, checks, score, total, badge, label } = data;
  const info      = REPO_META[repo] || { name: repo, desc: '' };
  const stats     = STATIC_REPO_STATS[repo] || { fileCount: '—', contributors: '—', sizeEst: '—' };
  const fillClass = `fill-${badge}`;
  const badgeClass = `badge-${badge}`;
  const pct       = Math.round((score / total) * 100);
  const repoUrl   = `https://github.com/${repo}`;
  const pagesUrl  = `https://${repo.split('/')[0]}.github.io/${repo.split('/')[1]}/`;

  const checkItems = Object.entries(checks).map(([name, pass]) => {
    const tip = CHECK_TOOLTIPS[name] ? makeTip(CHECK_TOOLTIPS[name]) : '';
    return `
    <li>
      <span class="check-icon ${pass ? 'pass' : 'fail'}">${pass ? '✓' : '✗'}</span>
      <span class="check-label-wrap">
        <span class="check-label">${esc(name)}</span>${tip}
      </span>
    </li>`;
  }).join('');

  // When was this repo's primary meta last fetched? (reads the
  // sessionStorage cache timestamp; falls back to 'Just now' if the
  // entry was purged between render and here.)
  const fetchedTs = cacheTimestamp('json:' + API + '/repos/' + repo);
  const fetchedLabel = fetchedTs ? relativeTime(new Date(fetchedTs)) : 'Just now';

  return `
    <div class="repo-card">
      <div class="card-header">
        <div class="repo-name-block">
          <div class="repo-name">
            <a class="repo-link" href="${repoUrl}" target="_blank" rel="noopener">${esc(info.name)}</a>
          </div>
          <div class="repo-slug">${esc(repo)}</div>
        </div>
        <div class="health-badge ${badgeClass}">${label}</div>
      </div>
      <p class="repo-desc">${esc(info.desc)}</p>
      <div class="score-row">
        <div class="score-bar-track">
          <div class="score-bar-fill ${fillClass}" style="width:${pct}%"></div>
        </div>
        <div class="score-label">
          Health Score: ${score}/${total}
          ${makeTip(SCORE_TOOLTIP, 'score-tip')}
        </div>
      </div>
      <div class="score-legend">
        <span class="legend-item"><span class="legend-dot teal"></span>14–15 Excellent</span>
        <span class="legend-item"><span class="legend-dot green"></span>11–13 Good</span>
        <span class="legend-item"><span class="legend-dot yellow"></span>8–10 Fair</span>
        <span class="legend-item"><span class="legend-dot red"></span>&lt;8 Needs Work</span>
      </div>
      <div class="repo-stats">
        <div class="stat-item">
          <span class="stat-label">Files</span>
          <span class="stat-value">${esc(stats.fileCount)}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Last Commit</span>
          <span class="stat-value">${commitDate ? relativeTime(commitDate) : 'Never'}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Contributors</span>
          <span class="stat-value">${esc(String(stats.contributors))}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Size</span>
          <span class="stat-value">${esc(stats.sizeEst)}</span>
        </div>
      </div>
      <ul class="checklist">${checkItems}</ul>
      <div class="card-meta">
        <span class="last-build-row">
          <strong class="last-build-label">Last build:</strong>
          <em class="commit-msg">${esc(commitMsg)}</em>
        </span>
        <span><strong>Date:</strong> ${formatDate(commitDate)} (${daysSince}d ago)</span>
        <span><strong>Issues:</strong> ${meta.open_issues_count} open &nbsp; <strong>Stars:</strong> ${meta.stargazers_count}</span>
        <span><strong>Pages:</strong> <a href="${pagesUrl}" target="_blank" rel="noopener" style="color:var(--teal)">${esc(pagesUrl)}</a></span>
        <span><strong>Data fetched:</strong> ${fetchedLabel}</span>
      </div>
    </div>`;
}

function renderError(repo, err) {
  const info = REPO_META[repo] || { name: repo, desc: '' };
  const isRateLimit = err.status === 403;
  return `
    <div class="repo-card">
      <div class="card-header">
        <div class="repo-name-block">
          <div class="repo-name">${esc(info.name)}</div>
          <div class="repo-slug">${esc(repo)}</div>
        </div>
        <div class="health-badge badge-red">Error</div>
      </div>
      <div class="error-card">
        ${isRateLimit
          ? '⚠️ GitHub API rate limit reached (60 req/hr for unauthenticated requests). Wait a minute and refresh.'
          : `⚠️ Could not fetch data: ${esc(err.message)}`}
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────────────────────────────────────
   DOWNLOAD REPORT
───────────────────────────────────────────────────────────────────────────── */
function downloadReport() {
  const ts = new Date().toISOString();
  const repoSummaries = lastResults
    .filter(r => r.status === 'fulfilled')
    .map(r => {
      const d = r.value;
      const info = REPO_META[d.repo] || { name: d.repo };
      const stats = STATIC_REPO_STATS[d.repo] || {};
      const pct = Math.round((d.score / d.total) * 100);
      const failedChecks = Object.entries(d.checks)
        .filter(([, pass]) => !pass)
        .map(([name]) => name);
      return {
        repo: d.repo,
        name: info.name,
        label: d.label,
        score: `${d.score}/${d.total} (${pct}%)`,
        lastCommit: d.commitDate ? d.commitDate.toISOString() : null,
        daysSinceCommit: d.daysSince,
        lastCommitMsg: d.commitMsg,
        openIssues: d.meta.open_issues_count,
        stars: d.meta.stargazers_count,
        fileCount: stats.fileCount || '—',
        contributors: stats.contributors || '—',
        sizeEst: stats.sizeEst || '—',
        failedChecks
      };
    });

  const errors = lastResults
    .filter(r => r.status === 'rejected')
    .map((r, i) => ({ repo: REPOS[i], error: r.reason.message }));

  const report = {
    generatedAt: ts,
    dashboard: 'Two Birds Innovation — Quality Dashboard',
    totalRepos: REPOS.length,
    successfulChecks: repoSummaries.length,
    errors: errors.length,
    repos: repoSummaries,
    errorDetails: errors
  };

  const json = JSON.stringify(report, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `quality-report-${ts.slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN — RUN CHECKS
───────────────────────────────────────────────────────────────────────────── */
async function runChecks() {
  const grid = document.getElementById('grid');
  const btn  = document.getElementById('refreshBtn');
  const ts   = document.getElementById('ts');
  const alertsPanel = document.getElementById('alerts-panel');

  btn.disabled = true;
  btn.textContent = '↻ Checking…';

  // Show loading state in alerts panel
  alertsPanel.innerHTML = `
    <div class="alerts-box">
      <div class="alerts-heading" style="color:var(--muted)">Checking repos…</div>
    </div>`;

  grid.innerHTML = REPOS.map(renderSkeleton).join('');

  const remoteRepos = REPOS.filter(r => !LOCAL_ONLY_REPOS.has(r));
  const remoteResults = await Promise.allSettled(remoteRepos.map(checkRepo));

  // Build a result map keyed by repo slug for easy lookup
  const resultMap = {};
  remoteRepos.forEach((repo, i) => { resultMap[repo] = remoteResults[i]; });

  lastResults = remoteResults; // used by alerts + download report

  grid.innerHTML = REPOS.map(repo => {
    if (LOCAL_ONLY_REPOS.has(repo)) return renderLocalCard(repo);
    const r = resultMap[repo];
    return r.status === 'fulfilled' ? renderCard(r.value) : renderError(repo, r.reason);
  }).join('');

  ts.textContent = new Date().toLocaleString('en-CA', {
    dateStyle: 'medium', timeStyle: 'short'
  });

  renderAlerts(lastResults);

  btn.disabled = false;
  btn.textContent = '↻ Refresh';
}

/* ─────────────────────────────────────────────────────────────────────────────
   PIN GATE
───────────────────────────────────────────────────────────────────────────── */
(function initPinGate() {
  if (sessionStorage.getItem('pin_authenticated') === 'true') {
    document.getElementById('pin-gate').style.display = 'none';
    return;
  }
  var inp = document.getElementById('pin-input');
  inp.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') checkPin();
  });
})();

function checkPin() {
  var inp = document.getElementById('pin-input');
  var err = document.getElementById('pin-error');
  if (inp.value === 'Welcome1!') {
    sessionStorage.setItem('pin_authenticated', 'true');
    document.getElementById('pin-gate').style.display = 'none';
  } else {
    err.textContent = 'Incorrect password — try again';
    inp.classList.remove('shake');
    void inp.offsetWidth;
    inp.classList.add('shake');
    inp.value = '';
    inp.focus();
    setTimeout(function () {
      inp.classList.remove('shake');
      err.textContent = '';
    }, 1800);
  }
}

/* ─────────────────────────────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────────────────────────── */
renderBuildHistory();
runChecks();
