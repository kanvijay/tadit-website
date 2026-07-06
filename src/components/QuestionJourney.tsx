import { useEffect, useMemo, useRef, useState } from "react";
import JourneyNode from "./JourneyNode";

const journeySteps = [
  {
    label: "Question",
    text: "What is our revenue?",
    subtext: "A simple question with multiple possible meanings.",
  },
  {
    label: "Business Definition",
    text: "Recognised Revenue",
    subtext: "Approved Finance definition, not booked revenue or forecast revenue.",
  },
  {
    label: "Policy",
    text: "IFRS Revenue Recognition",
    subtext: "Applies regional accounting policy and reporting rules.",
  },
  {
    label: "Hierarchy",
    text: "Global Product Hierarchy",
    subtext: "Uses the approved reporting hierarchy for enterprise consolidation.",
  },
  {
    label: "Permission",
    text: "Role-aware Access",
    subtext: "Only returns metrics and dimensions the user is authorised to see.",
  },
  {
    label: "Reasoning",
    text: "Business Logic Applied",
    subtext: "Tadit resolves ambiguity before querying data.",
  },
  {
    label: "Evidence",
    text: "Traceable Sources",
    subtext: "Links answer to systems, definitions and lineage.",
  },
  {
    label: "Trusted Answer",
    text: "£1.08B Recognised Revenue",
    subtext: "Governed, explainable and permission-aware.",
  },
];

const animationDuration = 11000;

function QuestionJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isManual, setIsManual] = useState(false);

  const activeStep = useMemo(
    () => Math.min(journeySteps.length - 1, Math.round(progress * (journeySteps.length - 1))),
    [progress],
  );

  const active = journeySteps[activeStep];
  const finalIsVisible = activeStep === journeySteps.length - 1 && (hasCompleted || isManual);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      setProgress(1);
      setHasCompleted(true);
      setHasStarted(true);
      return undefined;
    }

    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const startAnimation = () => {
      if (hasStarted || isManual) {
        return;
      }

      setHasStarted(true);
      const start = performance.now();

      const animate = (time: number) => {
        const nextProgress = Math.min((time - start) / animationDuration, 1);
        setProgress(nextProgress);

        if (nextProgress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setHasCompleted(true);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [hasStarted, isManual]);

  const selectStep = (index: number) => {
    cancelAnimationFrame(frameRef.current);
    setIsManual(true);
    setHasStarted(true);
    setProgress(index / (journeySteps.length - 1));

    if (index === journeySteps.length - 1) {
      setHasCompleted(true);
    }
  };

  return (
    <section className="question-journey-section" id="journey" ref={sectionRef}>
      <div className="section-heading centered">
        <p className="eyebrow">The question journey</p>
        <h2>Every trusted answer has a journey.</h2>
        <p>
          Before AI can answer the business, it has to understand the meaning behind
          the question. Tadit applies definitions, policies, hierarchies,
          permissions, reasoning and evidence before returning a trusted answer.
        </p>
      </div>

      <div
        className="qj-stage glass-card"
        style={{ "--qj-progress": `${progress * 100}%` } as React.CSSProperties}
        aria-label="Interactive question journey"
      >
        <div className="qj-panel" aria-live="polite">
          <p className="qj-panel-label">Active meaning layer</p>
          <span>{String(activeStep + 1).padStart(2, "0")} / 08</span>
          <h3>{active.text}</h3>
          <p>{active.subtext}</p>
          <div className={finalIsVisible ? "qj-answer revealed" : "qj-answer"}>
            <strong>Trusted Answer</strong>
            <span>£1.08B Recognised Revenue</span>
          </div>
        </div>

        <div className="qj-flow" role="list" aria-label="Meaning layers">
          <svg className="qj-connector" viewBox="0 0 1000 90" preserveAspectRatio="none" aria-hidden="true">
            <path d="M30 45 H970" />
            <path className="active" d="M30 45 H970" />
          </svg>

          <div className="qj-traveler" aria-hidden="true">
            <span className="qj-pulse"></span>
            <span className="qj-question">What is our revenue?</span>
          </div>

          {journeySteps.map((step, index) => (
            <JourneyNode
              index={index}
              isActive={index === activeStep}
              isComplete={index < activeStep || hasCompleted}
              key={step.label}
              label={step.label}
              onSelect={() => selectStep(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuestionJourney;
