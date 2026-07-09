"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 2, y: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="brutal-border brutal-shadow group flex h-full flex-col bg-surface p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-bold text-foreground">
          {project.title}
        </h3>
        <div className="flex gap-3 text-muted">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} repository`}
              className="transition-colors hover:text-accent"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} live site`}
              className="transition-colors hover:text-accent"
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm text-muted">{project.description}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="border border-border bg-surface-2 px-3 py-1 font-display text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
