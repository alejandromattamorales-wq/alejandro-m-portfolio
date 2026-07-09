import { FadeIn } from "@/components/FadeIn";
import { credentials, profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <FadeIn>
        <span className="font-display text-sm text-accent">{"// 01 — about"}</span>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="mt-4 max-w-2xl font-display text-2xl font-bold text-balance sm:text-3xl">
          I&apos;m a {profile.role.toLowerCase()} who enjoys owning a feature
          end-to-end, schema, API, and the interface people actually touch.
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mt-6 max-w-2xl border-l-2 border-border pl-4 text-muted">
          Over 6 years of experience designing, developing, and delivering
          scalable web applications. I&apos;ve worked across
          e-commerce, internal tooling, and client projects, with a recurring
          focus on performance, SEO, and cloud infrastructure on AWS and GCP.
          Based in {profile.location}.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-8 flex flex-wrap gap-6 font-display text-xs text-muted">
          <span>
            <span className="text-accent">{"education:"}</span>{" "}
            {credentials.education.degree}, {credentials.education.school}
          </span>
          <span>
            <span className="text-accent">{"certs: "}</span>{credentials.certifications}
          </span>
        </div>
      </FadeIn>
    </section>
  );
}
