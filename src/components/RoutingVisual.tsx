import { Mark } from "./Logo";

const INPUTS = [
  { label: "Document Processing", meta: "Any document · PDF, image, scan" },
  { label: "Customer Support", meta: "Support request · Email" },
  { label: "Contract Review", meta: "Contract clause · DOCX" },
];

const CONTROLS = [
  { label: "Your documents", detail: "Retrieves relevant information from approved knowledge sources." },
  { label: "Approved actions", detail: "Executes permitted operations using connected business tools." },
  { label: "Quality tests", detail: "Evaluates outputs against defined test cases." },
  { label: "Guardrails", detail: "Blocks unsafe, out-of-scope or policy-breaking outputs before they reach anyone." },
];

const LABEL = "mb-3 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-faint";

function Arrow() {
  return (
    <span aria-hidden="true" className="text-accent-ink">
      <span className="lg:hidden">&darr;</span>
      <span className="hidden lg:inline">&rarr;</span>
    </span>
  );
}

/**
 * A diagram of how we run AI work: the agent handles what is both confident
 * and permitted, everything else routes to a person, and corrections feed back
 * as test cases. Deliberately carries no numbers — it illustrates the delivery
 * model, it is not a product screenshot.
 *
 * `full` (Solutions page) adds the plain-language explanation of each control
 * and the rule that confidence alone never authorises an action.
 */
export default function RoutingVisual({ full = false }: { full?: boolean }) {
  const Heading = full ? "h3" : "h2";
  return (
    <figure className="m-0 w-full">
      <figcaption className="mb-5">
        <Heading className="text-[1.15rem] font-semibold sm:text-[1.25rem]">
          How AI Automation Works at Giilab
        </Heading>
        <p className="mt-1.5 text-[0.92rem] text-muted">
          Every task is evaluated, automated when appropriate, and escalated to a person when
          needed.
        </p>
      </figcaption>

      <div className="rounded-[var(--radius-brand)] border border-line bg-surface p-5 sm:p-6">
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_auto_auto_auto_1fr] lg:gap-5">
          {/* 1. business inputs */}
          <div>
            <p className={LABEL}>Your business inputs</p>
            <ul className="grid gap-2.5">
              {INPUTS.map((item) => (
                <li key={item.label} className="rounded-xl border border-line bg-bg px-3.5 py-2.5">
                  <span className="block text-[0.86rem] font-medium">{item.label}</span>
                  <span className="block text-[0.74rem] text-faint">{item.meta}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="justify-self-center"><Arrow /></div>

          {/* 2. the agent */}
          <div className="flex flex-col items-center gap-2 justify-self-center rounded-2xl border border-accent bg-accent-soft px-5 py-4 lg:max-w-[15rem]">
            <Mark height={30} />
            <span className="text-center text-[0.84rem] font-semibold">AI Agent + Controls + Guardrails</span>
            <span className="flex flex-wrap justify-center gap-1">
              {CONTROLS.map((c) => (
                <span
                  key={c.label}
                  className="rounded-full border border-line-strong px-2 py-0.5 text-[0.72rem] text-muted"
                >
                  {c.label}
                </span>
              ))}
            </span>
          </div>

          <div className="justify-self-center"><Arrow /></div>

          {/* 3. outcomes */}
          <div>
            <p className={LABEL}>Decisions based on confidence</p>
            <div className="grid gap-2.5">
              <div className="rounded-xl border border-line border-l-[3px] border-l-accent bg-bg p-3.5">
                <span className="block text-[0.86rem] font-medium">Automated Processing</span>
                <p className="mt-1 text-[0.76rem] text-muted">
                  Meets your confidence threshold and approved automation rules. Actions are
                  logged for review.
                </p>
              </div>
              <div className="rounded-xl border border-line border-l-[3px] border-l-accent-2 bg-bg p-3.5">
                <span className="block text-[0.86rem] font-medium">Human Review Required</span>
                <p className="mt-1 text-[0.76rem] text-muted">
                  Low confidence, exceptions, or decisions involving money, policy, or judgment.
                </p>
                <p className="mt-2 text-[0.74rem] font-medium text-accent-ink">
                  <span aria-hidden="true">&#8634; </span>Corrections return to the agent as
                  quality tests
                </p>
              </div>
            </div>
          </div>
        </div>

        {full && (
          <dl className="mt-5 grid gap-3 border-t border-line pt-4 sm:grid-cols-2">
            {CONTROLS.map((c) => (
              <div key={c.label}>
                <dt className="text-[0.8rem] font-semibold">{c.label}</dt>
                <dd className="mt-0.5 text-[0.78rem] text-muted">{c.detail}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-5 grid gap-1.5 border-t border-line pt-4 text-[0.78rem]">
          <p className="text-muted">
            Every human correction becomes a test case, helping us measure performance and
            improve automation safely.
          </p>
          {full && (
            <p className="text-faint">
              Confidence alone never authorises an action. Anything sensitive must also pass
              your business rules and permission controls, and confidence scores are an
              estimate, so thresholds are set and adjusted on measured results.
            </p>
          )}
        </div>
      </div>
    </figure>
  );
}
