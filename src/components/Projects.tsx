import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <FadeIn>
        <span className="font-mono text-sm text-accent">02 · Projects</span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Selected work</h2>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={0.05 * i}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
