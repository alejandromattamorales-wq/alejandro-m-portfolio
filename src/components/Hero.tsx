"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-2xl flex-col items-center gap-6"
      >
        <motion.span
          variants={item}
          className="brutal-border bg-surface px-4 py-1.5 font-display text-xs text-accent"
        >
          {"// uptime: 6+ years"}
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-4xl leading-tight font-bold tracking-tight sm:text-6xl"
        >
          <span className="text-muted">$ whoami</span>
          <br />
          {profile.name}
          <span className="blink-cursor" />
        </motion.h1>

        <motion.p variants={item} className="max-w-xl text-balance text-lg text-muted">
          <span className="text-accent">{">"}</span> {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="brutal-border brutal-shadow bg-accent px-6 py-3 font-display text-sm font-bold text-accent-contrast"
          >
            view_my_work()
          </a>
          <a
            href="#contact"
            className="brutal-border bg-surface px-6 py-3 font-display text-sm text-foreground transition-colors hover:text-accent"
          >
            get_in_touch()
          </a>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-5 pt-4 text-muted">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="transition-colors hover:text-accent"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-accent"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-muted transition-colors hover:text-accent"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
