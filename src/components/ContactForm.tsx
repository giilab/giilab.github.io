"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";

/**
 * A static export has no server, so submissions go to Web3Forms, which emails
 * them to the inbox the access key was created for. The key is public by
 * design: it can only send to that inbox.
 */
const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "d1f6f160-b878-486a-acc7-b237295fc8d7";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "company" | "phone" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Loose on purpose: formats vary too much worldwide for anything stricter.
const PHONE_RE = /^\+?[\d\s()-]{7,20}$/;

function validate(data: { name: string; email: string; company: string; phone: string; message: string }): Errors {
  const e: Errors = {};
  if (!data.name.trim()) e.name = "Please tell us your name.";
  if (!data.email.trim()) e.email = "We need an email address to reply to.";
  else if (!EMAIL_RE.test(data.email.trim())) e.email = "That does not look like a valid email address.";
  if (data.phone.trim() && !PHONE_RE.test(data.phone.trim()))
    e.phone = "Please use digits and a country code, like +91 98765 43210.";
  if (!data.message.trim()) e.message = "Please describe the problem you are trying to solve.";
  else if (data.message.trim().length < 20)
    e.message = "A little more detail helps — 20 characters or more.";
  return e;
}

const STAGES = [
  "Exploring an idea",
  "Evaluating solutions",
  "Ready to start development",
  "Improving an existing system",
  "Looking for technical consulting",
];

const FIELD =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-[0.95rem] text-text placeholder:text-faint focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);

    // Honeypot: real people leave this empty.
    if ((fd.get("company_website") as string)?.trim()) return;

    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      stage: String(fd.get("stage") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(Object.keys(found)[0]);
      first?.focus();
      return;
    }

    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: ACCESS_KEY,
          subject: `New enquiry from ${data.name}`,
          from_name: `${SITE.name} website`,
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.success) throw new Error(`Request failed with status ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setServerError(
        "We could not send that just now. Please try again, or email us directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-[var(--radius-brand)] border border-line bg-surface p-8"
      >
        <h2 className="text-[1.2rem] font-semibold">Thanks — that reached us.</h2>
        <p className="mt-2.5 text-[0.95rem] text-muted">
          We read everything that comes in and reply within two working days. If it is
          urgent, email {SITE.email} directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-[0.9rem] font-medium text-accent-ink underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form method="post" onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[0.88rem] font-medium">
            Your name <span className="text-accent-ink">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={FIELD}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-[0.82rem] text-accent-ink">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-[0.88rem] font-medium">
            Business email <span className="text-accent-ink">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={FIELD}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-[0.82rem] text-accent-ink">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-[0.88rem] font-medium">
            Company <span className="text-faint">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={FIELD}
            placeholder="Your company"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[0.88rem] font-medium">
            Phone <span className="text-faint">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={FIELD}
            placeholder="+91 98765 43210"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-[0.82rem] text-accent-ink">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="stage" className="mb-1.5 block text-[0.88rem] font-medium">
            Project stage <span className="text-faint">(optional)</span>
          </label>
          <select id="stage" name="stage" className={FIELD} defaultValue="">
            <option value="">Prefer not to say</option>
            {STAGES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-[0.88rem] font-medium">
          What are you trying to solve? <span className="text-accent-ink">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className={FIELD}
          placeholder="Tell us about the business challenge. What process are you trying to improve? What systems do you currently use? What would a successful outcome look like?"
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-[0.82rem] text-accent-ink">
            {errors.message}
          </p>
        ) : (
          <p id="message-hint" className="mt-1.5 text-[0.82rem] text-faint">
            You don&rsquo;t need a technical specification to get started.
          </p>
        )}
      </div>

      {/* honeypot — hidden from people, tempting to bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && serverError && (
        <p role="alert" className="rounded-xl border border-line-strong bg-accent-soft px-4 py-3 text-[0.9rem]">
          {serverError}{" "}
          <a href={`mailto:${SITE.email}`} className="font-medium text-accent-ink underline underline-offset-4">
            {SITE.email}
          </a>
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="brand-gradient inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[0.95rem] font-medium text-on-accent transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? (
            <>
              <span
                aria-hidden="true"
                className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
              />
              Sending…
            </>
          ) : (
            <>
              Send message <span aria-hidden="true">&rarr;</span>
            </>
          )}
        </button>
        <span aria-live="polite" className="sr-only">
          {status === "submitting" ? "Sending your message" : ""}
        </span>
        <p className="text-[0.85rem] text-faint">
          Or email{" "}
          <a href={`mailto:${SITE.email}`} className="text-accent-ink underline underline-offset-4">
            {SITE.email}
          </a>
        </p>
      </div>
    </form>
  );
}
