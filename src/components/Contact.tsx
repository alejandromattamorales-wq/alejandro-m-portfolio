import { Mail } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { GithubIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="border-t-2 border-border px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <span className="font-display text-sm text-accent">{"// 04 — contact"}</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 font-display text-3xl font-bold text-balance sm:text-4xl">
            Let&apos;s build something together.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-4 text-muted">
            Open to fullstack roles and freelance projects. The fastest way to
            reach me is email.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <a
            href={`mailto:${profile.email}`}
            className="brutal-border brutal-shadow mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3 font-display text-sm font-bold text-accent-contrast"
          >
            <Mail size={16} />
            {profile.email}
          </a>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="mt-8 flex items-center justify-center gap-5 text-muted">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="transition-colors hover:text-accent"
            >
              <GithubIcon size={20} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
