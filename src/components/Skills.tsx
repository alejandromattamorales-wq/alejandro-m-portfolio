import { FadeIn } from "@/components/FadeIn";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <FadeIn>
        <span className="font-display text-sm text-accent">{"// 03 — skills"}</span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
          Tools I work with
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <FadeIn key={group.category} delay={0.05 * i}>
            <div className="brutal-border h-full bg-surface p-5">
              <h3 className="font-display text-sm text-accent">{group.category}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {group.items.map((skill) => (
                  <li key={skill} className="text-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
