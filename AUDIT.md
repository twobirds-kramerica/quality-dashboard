# Build Quality Dashboard — HAL Stack Rigor Audit

> **⚠ PROGRESS UPDATE 2026-04-22** — All 5 §8 Top-5 next-actions have SHIPPED or are covered. Do NOT treat §8 as an open backlog; re-audit before proposing further QD work.
>
> | # | Action | Status |
> |---|---|---|
> | 1 | Add explicit `:focus-visible` styling | **Shipped** in `90ad085` S-QD-FOCUS (3px teal outline on 2px offset, keyboard-only) |
> | 2 | Client-side API response caching (60s TTL via sessionStorage) | **Shipped** in `75da12a` S-QD-CACHE (all 4 GitHub API helpers wrapped) |
> | 3 | Verify post-axe dark-theme contrast | **Covered** — axe-core CI green; no new findings after the :focus-visible + cache work |
> | 4 | Extract inline `<script>` to `js/dashboard.js` | **Shipped** in `7bce8ef` S-QD-EXTRACT+INDICATOR (index.html 1928 to 1173 lines) |
> | 5 | Add "last updated" indicator per card | **Shipped** in `7bce8ef` (same commit as #4; reuses S-QD-CACHE timestamp) |



**Audit date:** 2026-04-21
**Auditor:** Claude Code (Opus 4.7 · max-mode autonomous)
**Sprint:** S-QD-HYGIENE (sixth audit-pattern pass of the day after S-CLARITY, S-KEVIN, S-AARON, S-TBI, S-CC)
**Repo state at audit:** `quality-dashboard` (pre-sprint @ `26f5195`); one inline fix commit shipped during this sprint.

---

## What this is

Internal-only build-quality dashboard (`noindex, nofollow`) for the Two Birds Innovation portfolio. PIN-gated; automated health checks across all active repositories. Shows per-repo status, recent build timeline, GitHub Pages deployment health, and a next-sprint panel. ~1843-line single-page `index.html` + README. No external backend — fetches data via GitHub's public REST + Pages build status APIs at runtime.

Because this site is internal-only and noindex'd, the audit scope is narrower than revenue-adjacent sites: accessibility baseline + CI hygiene matter; positioning / conversion / SEO do not.

---

## TL;DR — shipped this sprint

| Fix | Why | Commit |
|---|---|---|
| `lang="en"` → `lang="en-CA"` | Canadian English internal tool; was mis-declared | pending |
| Added `<meta name="description">` | Was missing; standard hygiene even for noindex'd pages | pending |
| Skip-link + CSS | WCAG 2.4.1 — was missing | pending |
| `<main id="main">` landmark wrapping the post-PIN content | WCAG 1.3.1 — was missing | pending |
| New `.github/workflows/axe-core.yml` | Every-push a11y CI (matches every other active repo) | pending |

---

## 1. Accessibility

### Strengths (pre-existing)
- PIN gate has `aria-label="PIN authentication"` + `aria-live="polite"` on error
- PIN input has `inputmode="numeric"`, `maxlength`, `aria-label`
- `@media (max-width: ...)` responsive breakpoints throughout

### Shipped this sprint
- Skip-link added — was missing entirely
- `<main id="main">` landmark — was missing
- `lang="en-CA"` — was `lang="en"`

### Backlog
- **Dark theme contrast** — the navy + teal palette is visually strong but contrast on `--muted: #8AA0B8` against `--card-bg: #1A2D44` (body text) is borderline. The new axe-core CI will flag concrete numbers.
- **Focus indicators** — dark themes often lose default browser focus rings. Worth explicit `:focus-visible` styling on the PIN input + Unlock button + any dashboard controls.
- **Keyboard nav** — manual test: Tab through after PIN unlock. Does every card + table row support keyboard interaction correctly?

---

## 2. Performance

- Single HTML file, no frameworks, no external fonts (uses system-font stack — already L4 on that vector).
- Runtime fetches: GitHub REST API (`api.github.com/repos/...`) and GitHub Pages build-status API at page-load for ~6 repos in parallel. Subject to GitHub's ~60/h unauthenticated rate limit per IP, but that's rarely hit in practice.
- No build step. First paint near-instant; dashboard data fills in as API responses arrive.

### Backlog
- **GitHub API rate limit handling** — if a visitor hard-refreshes 10× in 5 minutes, they might hit the unauthenticated limit. Graceful degradation with a cached-data fallback would be nicer than a broken card. LOE: 30 min. Low priority.
- **Client-side caching of API responses** with a 60-second TTL via `sessionStorage` would reduce rate-limit exposure and make the page feel faster on repeat checks. LOE: 30 min.

---

## 3. Sovereignty

| Dependency | Status |
|---|---|
| GitHub Pages hosting | L1 (trivially swappable) |
| System fonts | L4 ✓ |
| GitHub REST API | L1 external but the tool's whole purpose is to monitor GitHub, so the dependency is load-bearing and correct |
| No user tracking, no analytics | ✓ |

**Verdict**: L3/L4 on everything except the intentional GitHub API dependency. This is the right posture for a GitHub-health-monitoring tool.

---

## 4. Security & privacy

- **PIN gate is client-side only** — the PIN check happens in JS, which means the underlying dashboard content is technically reachable if someone views source / uses the browser console. This is adequate for a noindex'd internal tool where the threat model is "keep casual visitors out", but anyone with web-dev experience could bypass it in 30 seconds. Flag-only.
- **No API keys in client code**. GitHub REST endpoints used are public / unauthenticated.
- **`.env` is gitignored** (security: 26f5195).

### Backlog
- If stricter access control is ever needed, the dashboard could move behind GitHub-Auth (GitHub OAuth's `repo` scope would let you prove membership in `twobirds-kramerica` org). Substantial rewrite; do only if the threat model changes.

---

## 5. Code quality

- Single-file HTML — substantial (~1840 lines) but linear and readable.
- No `onclick=` inline handlers flagged (checked: 1 instance on the PIN unlock button, which is fine because the button is a `<button>` element, not a `<div>`).
- System-font stack means no FOUC.

### Backlog
- **Consider extracting the `<script>` block to `js/dashboard.js`** — ~1000 lines of inline JS would be cleaner in a separate file. Same CSP-readiness argument as the other audits. LOE: 30 min. Low priority.

---

## 6. CI / CD

### Before this sprint
None. No workflows directory.

### After this sprint
- `axe-core.yml` — every-push a11y CI (matches DCC / Clarity / Kevin / aaron-patzalek / TBI / career-coach patterns). The scan runs against localhost:8080 which means it'll see the PIN gate + the dashboard chrome underneath (since the gate is CSS-hidden, not removed from DOM).

### Backlog
- **Self-health-check**: since this IS the quality dashboard, filing a workflow that uses the dashboard's OWN runChecks() logic as a CI step would be a nicely recursive move. Skip for now; YAGNI.

---

## 7. Positioning

N/A — internal tool, noindex'd, PIN-gated. No positioning concerns.

---

## 8. Top 5 prioritised next actions

Smaller top-5 than revenue-adjacent audits because this is internal:

1. **Add explicit `:focus-visible` styling** (15 min). Dark theme loses default focus rings; keyboard users need visible focus. See §1 backlog.
2. **Client-side API response caching (60s TTL via sessionStorage)** (30 min). Reduces rate-limit exposure + faster repeat loads.
3. **Verify post-axe dark-theme contrast** (post-CI, 15 min review). Act on whatever the first axe run flags.
4. **Extract inline `<script>` to `js/dashboard.js`** (30 min). Code hygiene.
5. **Add a "last updated" indicator per card** showing when each repo's data was fetched (5 min). Small UX polish for a tool whose purpose is freshness.

---

## 9. What this audit did NOT cover

- **Rendered-browser QA** — didn't open the dashboard. Dark-theme contrast, PIN-gate behaviour, and API-data-rendering all unverified.
- **PIN rotation process** — if the PIN has ever been committed in repo history, it's public. Not checked.
- **Cross-browser** — Safari iOS + Firefox desktop not tested.

---

## Confidence (overall)

85%. Internal-tool scope makes the audit tight. Five inline fixes are small and reversible. 15% reserved for: dark-theme contrast may surface issues the static inspection didn't catch (axe-core CI will report).

## Scrappy Pack says
Sovereignty Check — the tool's intentional dependency on GitHub's REST API is correct (the whole point is monitoring GitHub); no concerns on that vector. The PIN gate is security-theater for a noindex'd internal tool and that's fine — threat model is "keep casual visitors out", not "protect secrets". LOE for Top 5: ~1.5 h bundled.
