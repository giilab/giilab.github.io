import { Container, ButtonLink, Eyebrow } from "./ui";
import { SITE } from "@/lib/site";

export default function CTABand({
  title,
  body = "One free 30-minute call, and an honest answer on what AI can and cannot do about it.",
}: {
  title?: React.ReactNode;
  body?: string;
}) {
  return (
    <section className="relative z-[2] py-[clamp(56px,7vw,88px)]">
      <Container>
        <div className="overflow-hidden rounded-[28px] border border-line bg-[linear-gradient(180deg,var(--bg-card),transparent)] px-[clamp(26px,4vw,56px)] py-[clamp(40px,6vw,76px)] text-center">
          <div className="flex justify-center">
            <Eyebrow>Next step</Eyebrow>
          </div>
          <h2 className="t-h2 mx-auto mt-[22px] max-w-[20ch]">
            {title ?? (
              <>
                Tell us the part that <span className="serif accent">keeps breaking.</span>
              </>
            )}
          </h2>
          <p className="t-lead mx-auto mt-5 text-center">{body}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <ButtonLink href="/contact/">Discuss your project</ButtonLink>
          </div>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-5 inline-block text-[0.9rem] text-muted underline-offset-4 hover:text-accent-ink hover:underline"
          >
            {SITE.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
