import { useEffect, useState } from "react";

const heroFlowStages = [
  {
    title: "Question",
    detail: "What is our revenue?",
  },
  {
    title: "Definition",
    detail: "Use approved Finance revenue, not pipeline or bookings.",
  },
  {
    title: "Policy",
    detail: "Apply IFRS recognition and exclude deferred revenue.",
  },
  {
    title: "Hierarchy",
    detail: "Roll up by the global product and region hierarchy.",
  },
  {
    title: "Permission",
    detail: "Show margin-sensitive detail only to Finance Directors.",
  },
  {
    title: "Reasoning",
    detail: "Reconcile SAP actuals with the certified Finance cube.",
  },
  {
    title: "Trusted Answer",
    detail: "Revenue is returned with definition, source and reasoning.",
  },
];

const understandingSignals = [
  "Approved definition",
  "Policy scope",
  "Role permission",
  "Operating hierarchy",
  "Reasoning trail",
];

const knowledgeFragments = [
  "Definitions",
  "Policies",
  "Exceptions",
  "Owners",
  "Permissions",
  "Hierarchies",
  "Relationships",
  "Regional rules",
  "Approval logic",
];

const journeySteps = [
  "Definition",
  "Policy",
  "Hierarchy",
  "Permission",
  "Reasoning",
  "Evidence",
  "Trusted Answer",
];

const taditDifferentiators = [
  {
    title: "Business Meaning",
    body: "Tadit captures the meaning behind your business in a simple and effective manner, turning definitions, policies and rules into usable enterprise context.",
    proof: "Because you cannot pre-build a report for every question the business will ask.",
    visual: "meaning",
  },
  {
    title: "Fast Deployment",
    body: "Tadit connects with your existing structured data ecosystem in hours, so teams can add a knowledge layer without rebuilding the data stack.",
    proof: "Built for existing systems like Fabric, Databricks, Snowflake, BI and data catalogs.",
    visual: "deployment",
  },
  {
    title: "Conversational Insight",
    body: "Tadit includes a conversational AI layer to help users start exploring business insights immediately, grounded in governed business understanding.",
    proof: "Ask questions like: why is UK margin below plan, or which SKUs are at stock-out risk?",
    visual: "conversation",
  },
  {
    title: "Explainable & Deterministic",
    body: "Tadit shows how an answer was produced and keeps the same question, same data and same business rules returning the same answer.",
    proof: "Every answer can expose source, definition, policy and reasoning instead of behaving like a black box.",
    visual: "deterministic",
  },
];

const whyTaditFacts = [
  {
    value: "55%",
    text: "struggle to get insights from their data",
    source: "Hitachi Vantara · 2023",
  },
  {
    value: "68%",
    text: "abandoned a data lake initiative due to complexity",
    source: "Informatica · 2024",
  },
  {
    value: "<50%",
    text: "of analyst time is spent on actual analysis",
    source: "Fivetran · Dimensional Research",
  },
  {
    value: "$50k",
    text: "to build a single BI dashboard before maintenance",
    source: "Industry benchmarks",
  },
];

const transformations = [
  "Questions grounded in approved definitions",
  "Answers respect policies and permissions",
  "Metrics stay consistent across systems",
  "Agents reason from enterprise context",
];

const platformInputs = [
  "Fabric",
  "Databricks",
  "Snowflake",
  "BI",
  "Data Catalogs",
];

const platformOutputs = [
  "AI Agents",
  "Workflows",
  "Copilots",
  "Executive Q&A",
];

function App() {
  const [journeyProgress, setJourneyProgress] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      setJourneyProgress(1);
      return undefined;
    }

    const duration = 9000;
    const start = performance.now();
    let frame = 0;

    const updateProgress = (time: number) => {
      setJourneyProgress(((time - start) % duration) / duration);
      frame = requestAnimationFrame(updateProgress);
    };

    frame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(frame);
  }, []);

  const activeJourneyStep = Math.min(
    journeySteps.length - 1,
    Math.round(journeyProgress * (journeySteps.length - 1)),
  );

  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Tadit navigation">
        <a className="brand" href="#top" aria-label="Tadit home">
          <span className="brand-mark" aria-hidden="true">T</span>
          <span>Tadit</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#limit">The Limit</a>
          <a href="#journey">The Journey</a>
          <a href="#layer">The Platform Shift</a>
          <a href="#why-tadit">Why Tadit</a>
        </nav>
        <a className="header-cta" href="mailto:hello@tadit.com">
          Request Access
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Enterprise Knowledge Layer</p>
          <h1>Your business knows more than your data.</h1>
          <p className="hero-text">
            AI has learned to understand language.
            <br />
            It still doesn't understand your business.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="mailto:hello@tadit.com">
              Request Access
            </a>
            <a className="button button-secondary" href="#layer">
              See The Layer
            </a>
          </div>
        </div>

        <div className="hero-system" aria-label="Business question travelling through the enterprise knowledge layer">
          <div className="hero-ambient" aria-hidden="true"></div>
          <div className="architecture-card">
            <div className="architecture-label">
              <span>Enterprise Knowledge Layer</span>
              <span>Governed understanding path</span>
            </div>
            <div className="flow-canvas">
              <svg className="flow-line" viewBox="0 0 680 720" aria-hidden="true">
                <path d="M340 42 C178 128 498 200 340 286 C178 372 498 444 340 530 C222 594 292 644 340 678" />
                <circle className="flow-pulse" cx="340" cy="42" r="7" />
              </svg>
              {heroFlowStages.map((stage, index) => (
                <div
                  className={index === heroFlowStages.length - 1 ? "flow-node trusted" : "flow-node"}
                  key={stage.title}
                  style={{ "--node": index } as React.CSSProperties}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{stage.title}</strong>
                  <p>{stage.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="split-section" id="limit">
        <div className="section-copy">
          <p className="eyebrow">The limit</p>
          <h2>Access is not understanding.</h2>
          <p>
            Copilots can find tables, generate queries and summarize results.
            They do not know which definition is approved, which policy applies,
            which hierarchy matters, or why one answer is trusted.
          </p>
        </div>
        <div className="toggle-visual glass-card" aria-label="Data access compared with business understanding">
          <div className="toggle-tabs" aria-hidden="true">
            <span>Data Access</span>
            <span>Business Understanding</span>
          </div>
          <div className="comparison-grid">
            <div className="access-pane">
              <span className="micro-label">Data Access</span>
              <strong>$498.4M</strong>
              <p>Revenue from available dashboard.</p>
            </div>
            <div className="understanding-pane">
              <span className="micro-label">Business Understanding</span>
              {understandingSignals.map((signal) => (
                <div className="signal-row" key={signal}>
                  <span></span>
                  <p>{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="knowledge-section">
        <div className="section-heading">
          <p className="eyebrow">The missing knowledge</p>
          <h2>The most important knowledge in the enterprise is not in the database.</h2>
        </div>
        <div className="orbit-stage" aria-label="Knowledge fragments connecting around a data stack">
          <div className="data-stack glass-card">
            <span>Data Stack</span>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {knowledgeFragments.map((fragment, index) => (
            <span
              className="fragment-pill"
              key={fragment}
              style={{ "--i": index } as React.CSSProperties}
            >
              {fragment}
            </span>
          ))}
          <svg className="orbit-lines" viewBox="0 0 640 360" aria-hidden="true">
            <path d="M90 74 C220 110 300 118 320 180" />
            <path d="M550 82 C436 124 350 132 320 180" />
            <path d="M82 288 C214 246 268 224 320 180" />
            <path d="M560 284 C438 248 374 226 320 180" />
            <path d="M320 34 C312 92 314 126 320 180" />
            <path d="M320 326 C328 262 326 222 320 180" />
          </svg>
        </div>
      </section>

      <section className="journey-section" id="journey">
        <div className="section-heading centered">
          <p className="eyebrow">The question journey</p>
          <h2>Every trusted answer has a journey.</h2>
        </div>
        <div
          className="journey-visual glass-card"
          style={{ "--journey-progress": `${journeyProgress * 100}%` } as React.CSSProperties}
          aria-label="Question journey from definition to trusted answer"
        >
          <div className="journey-question">What is our revenue?</div>
          <div className="journey-rail" aria-hidden="true">
            <span className="journey-traveler">
              <span className="journey-ball"></span>
              <span className="journey-traveler-label">What is our revenue?</span>
            </span>
          </div>
          <div className="journey-track">
            {journeySteps.map((step, index) => (
              <div
                className={index === activeJourneyStep ? "journey-step active" : "journey-step"}
                key={step}
                style={{ "--step": index } as React.CSSProperties}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="platform-section" id="layer">
        <div className="section-heading centered">
          <p className="eyebrow">Platform shift</p>
          <h2>The next enterprise AI stack has a knowledge layer.</h2>
        </div>
        <div className="platform-map glass-card" aria-label="Tadit as the knowledge layer between enterprise systems and AI experiences">
          <svg className="platform-flow-lines" viewBox="0 0 1060 420" aria-hidden="true">
            <defs>
              <linearGradient id="platformFlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.14" />
                <stop offset="48%" stopColor="#2563eb" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.18" />
              </linearGradient>
            </defs>
            <path d="M328 112 C386 112 420 174 462 210" />
            <path d="M328 160 C388 160 424 188 462 210" />
            <path d="M328 208 C390 208 426 208 462 210" />
            <path d="M328 256 C388 256 424 232 462 210" />
            <path d="M328 304 C386 304 420 246 462 210" />
            <path d="M598 210 C648 176 688 126 734 126" />
            <path d="M598 210 C648 194 688 180 734 180" />
            <path d="M598 210 C648 226 688 234 734 234" />
            <path d="M598 210 C648 250 688 288 734 288" />
            <circle cx="328" cy="112" r="4" />
            <circle cx="328" cy="160" r="4" />
            <circle cx="328" cy="208" r="4" />
            <circle cx="328" cy="256" r="4" />
            <circle cx="328" cy="304" r="4" />
            <circle cx="462" cy="210" r="5" />
            <circle cx="598" cy="210" r="5" />
            <circle cx="734" cy="126" r="4" />
            <circle cx="734" cy="180" r="4" />
            <circle cx="734" cy="234" r="4" />
            <circle cx="734" cy="288" r="4" />
          </svg>

          <div className="platform-column">
            <div className="platform-label">
              <span>Existing systems</span>
              <strong>Enterprise data stack</strong>
            </div>
            <div className="platform-stack">
              {platformInputs.map((tile) => (
                <span key={tile}>{tile}</span>
              ))}
            </div>
          </div>

          <div className="platform-layer-card">
            <span>Governed layer</span>
            <strong>Tadit</strong>
            <p>Business definitions, rules, policies, permissions and reasoning assembled as trusted context.</p>
          </div>

          <div className="platform-column">
            <div className="platform-label">
              <span>AI experiences</span>
              <strong>Business-aware outputs</strong>
            </div>
            <div className="platform-stack">
              {platformOutputs.map((tile) => (
                <span key={tile}>{tile}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="objects-section" id="why-tadit">
        <div className="section-heading">
          <p className="eyebrow">Why Tadit is different</p>
          <h2>Why is Tadit different.</h2>
          <p>
            Dashboards only answer yesterday's questions. Analysts drown in ad
            hoc requests. And business teams are still waiting.
          </p>
          <p className="why-proof-line">
            You cannot pre-build a report for every question business will ask.
          </p>
        </div>
        <div className="fact-grid" aria-label="Evidence that pre-built reports cannot keep up with enterprise questions">
          {whyTaditFacts.map((fact) => (
            <article className="fact-card glass-card" key={fact.value}>
              <strong>{fact.value}</strong>
              <div>
                <p>{fact.text}</p>
                <span>{fact.source}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="usp-grid">
          {taditDifferentiators.map((item, index) => (
            <article className="usp-card glass-card" key={item.title}>
              <div className={`usp-visual ${item.visual}`} aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <small>{item.proof}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="changes-section">
        <div className="section-heading centered">
          <p className="eyebrow">What changes</p>
          <h2>AI stops guessing what the business means.</h2>
        </div>
        <div className="change-grid">
          {transformations.map((transformation, index) => (
            <article className="change-card glass-card" key={transformation}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{transformation}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">The shift</p>
        <h2>
          Enterprise AI will not be defined by who has the biggest model.
          <br />
          It will be defined by who understands the business.
        </h2>
        <a className="button button-primary" href="mailto:hello@tadit.com">
          Request Access
        </a>
      </section>
    </main>
  );
}

export default App;
