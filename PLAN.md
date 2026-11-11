# What We Talk About When We Talk About Agentic Banking

**Taller "IA y Fintech en acción: del algoritmo al negocio financiero"** · Diplomado Innovación, Regulación y Nuevos Modelos de Negocio en Tecnología Financiera (Fintech), 1a edición · CIDE, Auditorio Cuajimalpa, Santa Fe · Wed Nov 11, 2026 · 17:30 · in person only.
Imparte Carlos Haro (AI Engineer, Santander México). Facilita Christian García (student of the Diplomado; SVP Digital Solutions at Banamex, ex Open Banking lead).

Talk in Spanish. ~80 min as timed: ~6 opening, ~40 concepts, ~14 lab and second vote, ~18 debate led with Christian. A 60-min cut list is in §2.

Format copied from `h1sort/datapub` (same engine, particles and look). Published later at h1sort.com/cide.

---

## 1. The idea in one paragraph

A callback to Carver's *What We Talk About When We Talk About Love*: four people at a kitchen table can't agree on what love is. Today everyone says "agentic" and nobody means the same thing. The room is lawyers, regulators and bankers: non-technical, but they read statutes, so definitions are formal, not simplified. **One case runs through the whole talk** (a $148,000 transfer with a same-day SIM swap and a correct SMS code). The room votes on it cold, six concepts each add a layer to it, and the room votes again at the end. Each concept gets **formal definition · what changes in the case · an open question**.

The arc: the opening question ("¿la frenas o la dejas pasar?") turns out to be badly posed. A well-built agent doesn't pick one of two buttons; it has more tools (hold for 30 minutes, reversible), gathers context, and a person approves the irreversible step.

**Closing line:** *Cuando hablamos de banca agéntica, hablamos de tres cosas: quién puede leer, quién puede actuar y quién responde.*

## 2. Run of show (~80 min as timed; see cuts below)

| # | Act | Slide id | Content | Time |
|---|---|---|---|---|
| 1 | Apertura | `title` | Love → Agentic Banking | 0:30 |
| 2 | | `quien` | who_is_this_dude + 4 QRs | 1:00 |
| 3 | | `carver` | Carver → "Agéntico" | 1:30 |
| 4 | | `mapa` | 1 caso, 6 conceptos → laboratorio → debate | 1:00 |
| 5 | | `caso` | The $148,000 transfer; **first vote** | 2:30 |
| 6 | Seis conceptos | `agente` | Definition; propose → validate → execute → observe loop | 3:00 |
| 7 | | `agente-control` | Workflow vs agent: who chooses the next step | 3:30 |
| 8 | | `herramientas` | A tool is a contract; form / meaning / authority | 3:00 |
| 9 | | `compuerta` | allow = in mandate ∧ preconditions ∧ not forbidden | 3:00 |
| 10 | | `contexto` | Weights (training) vs context (inference); injection | 4:00 |
| 11 | | `art-76` | Three data layers; only open data has rules | 3:00 |
| 12 | | `autonomia` | Effect × who approves; thresholds τ₀, τ₁ | 4:30 |
| 13 | | `supervision` | Base rates: 9 in 10 alerts are honest customers | 4:30 |
| 14 | | `supervision-tiempos` | Before (evals, rule of three) / during (automation bias) / after (audit) | 4:00 |
| 15 | | `responsabilidad` | Not reproducible; explanation ≠ cause; the trace | 4:00 |
| 16 | | `responsabilidad-marco` | CCom art. 90-III · SR 26-2 fn. 3 · EU AI Act Annex III 5(b) | 4:00 |
| 17 | Laboratorio | `lab-reglas` | "¿Quién aprueba?" 0–3 scale | 1:00 |
| 18 | | `lab-casos` | 6 cases, one per click | 10:00 |
| 19 | El caso | `revote` | **Second vote**; the question was badly posed | 2:30 |
| 20 | Debate | `debate` | Trejo's 4 questions, with Christian | 18:00 |
| 21 | Cierre | `cierre` | leer / actuar / responder | 1:00 |
| 22 | | `gracias` | QRs | 0:30 |
| 23 | | `fuentes` | Sources (PDF and web only) | — |

**If the slot is 60 min:** drop lab cases 04 and 05 (−3), give `art-76` and `responsabilidad-marco` 2 min each (−3), `supervision-tiempos` step 1 only (−2), debate 12 (−6). Never cut `caso`, `supervision` or `revote`: they are the arc.

## 3. Sources (every number or legal claim on a slide needs one)

Verified 11 Nov 2026. "Secondary" means the primary text was not read directly.

- **Agent definition, propose/validate/execute loop, execution gate (in scope ∧ preconditions ∧ not forbidden), consequence thresholds, base-rate and rule-of-three framing**: adapted from CMU 11-768 *AI Agents* (Daniel Fried & Graham Neubig, Fall 2026), lectures 1, 2 and 13, https://cmu-agents.com, read through the independent study notes at https://github.com/az9713/11-768-ai-agents-notes (the course site itself would not load). The formal notation in those notes is the note author's extension of the lectures; slides cite it as "adaptado de".
- **Workflow vs agent**: Anthropic, "Building effective agents" (19 Dec 2024). https://www.anthropic.com/engineering/building-effective-agents
- **Prompt injection ranked first**: OWASP Top 10 for LLM Applications 2025, LLM01. https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- **Ley Fintech art. 76**: three categories; transactional data only with the client's prior express authorization. https://mley.mx/LRITF/articulo/76/
- **Only open-data rules exist**: Banxico Circular 2/2020 (DOF 10 Mar 2020; SICs and clearing houses only); CNBV API dispositions (DOF 4 Jun 2020). Aggregated and transactional rules unpublished as of Oct 2026 per https://openbankingtracker.com/blog/open-banking-in-mexico-eight-years-of-promise-still-waiting-on-the-regulations . Deadline was 24 months. Two amparos (Ybarra, Jun 2023; Martínez Pérez and Moreno, Dec 2025), no ruling found: say "pending" at most. https://elceo.com/tecnologia/retraso-en-open-finance-llega-a-tribunales-promueven-amparo-contra-cnbv-banxico-y-hacienda/
- **Base rate**: own arithmetic. Per 100,000 transfers at 0.1% prevalence, 99% sensitivity, 1% false-positive rate: 99 true alerts, 999 false, precision 99/1,098 = 9.0%. Illustrative, labelled as such on the slide.
- **Rule of three**: with n clean runs the one-sided 95% upper bound is 1 − 0.05^(1/n) ≈ 3/n; 299 clean runs to support 1%.
- **Automation bias**: Regulation (EU) 2024/1689 art. 14(4)(b), https://artificialintelligenceact.eu/article/14/ ; Parasuraman & Manzey, *Human Factors* 52(3), 2010.
- **Non-determinism at temperature 0**: Thinking Machines Lab, "Defeating Nondeterminism in LLM Inference" (10 Sep 2025). https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/
- **Explanations are not faithful**: Turpin et al., NeurIPS 2023, https://arxiv.org/abs/2305.04388 ; Chen et al. (Anthropic), 2025, https://arxiv.org/abs/2505.05410
- **Código de Comercio art. 90, fracc. III**: a data message is presumed to come from the sender if sent by an information system programmed by the sender or on its behalf to operate automatically. A presumption, not a rule of liability. https://mley.mx/CCom/articulo/90/
- **SR 26-2** (Fed, OCC, FDIC, 17 Apr 2026), footnote 3: generative and agentic AI are not within the scope of the revised model risk guidance; supersedes SR 11-7. https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf
- **EU AI Act Annex III 5(b)**: creditworthiness evaluation of natural persons is high-risk, fraud detection excepted. https://artificialintelligenceact.eu/annex/3/
- **Spoken only, hedged in the notes (secondary sources, not on a slide)**: Mexican court criteria placing the burden on the bank for unrecognised transfers when the operation was unusual; LFPDPPP 2025 art. 26-II right to object to automated processing. Check before asserting.
- **$148,000 case**: Carlos's own illustrative example. **Debate questions and "el modelo se puede replicar"**: Andrés Trejo's LinkedIn post. **Preguntar / actuar / juzgar**: Carlos's framework from "Fantastic Agents" (h1sort.com/slides/fantastic-agents/), here used as task types, not autonomy levels.
- **Cut**: Visa/Plaid (the DOJ theory was debit competition, not the value of data).

## 4. Phases

1. Deck v1 (done).
2. Deck v2: one running case, formal definitions, verified sources (this).
3. Rehearse once; cut per the 60-min list, never from the arc or the debate.
4. Publish at h1sort.com/cide (see CLAUDE.md).
