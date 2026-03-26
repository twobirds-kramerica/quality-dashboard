# Two Birds Quality Dashboard

Automated build health dashboard for Two Birds Innovation repositories.

**Live:** https://twobirds-kramerica.github.io/quality-dashboard/

Checks each repo against 8 quality indicators using the GitHub public API. No authentication required — works entirely in the browser.

## Repos Monitored
- twobirds-kramerica/digital-confidence
- twobirds-kramerica/kevins-apartment-search
- twobirds-kramerica/two-birds-portfolio
- twobirds-kramerica/two-birds-project-template

## Health Score (0–8)
Each repo is scored on:
1. README.md present
2. CLAUDE.md present
3. Committed within last 30 days
4. Open issues < 10
5. sitemap.xml present
6. robots.txt present
7. Has at least 1 star
8. Has a description

**Green (7–8):** Healthy | **Yellow (5–6):** Needs Attention | **Red (0–4):** Action Required
