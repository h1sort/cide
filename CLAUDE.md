# cide · Carlos Haro's taller at CIDE (Diplomado Fintech)

Current talk: **¿De qué hablamos cuando hablamos de banca agéntica?** (Nov 11, 2026). Read `PLAN.md` first; it is the source of truth for structure, timing and sources.

The deck shell (`deck/engine.js`, `particles.js`, `styles.css`) is copied from `h1sort/datapub`; `deck/CONTRACT.md` there documents the slide API. Keep the two in sync by hand if the engine changes.

## Working rules
- Slide text is in Spanish with correct accents. Code, file names and commit messages in English.
- Every number on a slide needs a source in `PLAN.md` §3, or it gets cut.
- Few words per slide; the speaker says the rest. Speaker notes: Spanish, first person, Carlos's spoken voice, 60–160 words, end with the bridge to the next slide, stage directions in `<p class="dir">[…]</p>`.
- No network at runtime: no CDNs, web fonts or remote images.
- Projector rules: text ≥ 28px on the 1920×1080 stage, labels ≥ 20px, keep the bottom 140px free.
- The debate is protected. If time runs short, cut from Act 1.

## Run it
- Present: `python3 deck/tools/serve.py`, open http://127.0.0.1:8000/deck/, press `P` for the presenter mirror with notes and clock, `N` for notes inline, `B` for black.
- Screenshot: `deck/tools/shot.sh @<slide-id> <step>` (set `CHROME` if Chrome is elsewhere).

## Publishing to h1sort.com/cide
Same flow as datapub: commit here first; in `h1sort-website`, on a new branch, run `~/Code/cide/deck/tools/public-build.py public/cide` (strips speaker notes, fails if any remain), add `https://h1sort.com/cide/` to `customPages` in `astro.config.mjs` and a line to `public/llms.txt`, `npm ci && npm run build`, smoke test with `npx wrangler dev --port 8799` (`/cide` → 307, `/cide/` → 200), open the PR and merge it the same day.
