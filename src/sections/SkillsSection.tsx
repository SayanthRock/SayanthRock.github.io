import { FadeIn } from '../components/FadeIn';
import { SectionTitle } from '../components/SectionTitle';

const skills = [
  "Android", "Kotlin", "Jetpack Compose",
  "React", "TypeScript", "Tailwind CSS",
  "Node.js", "GitHub Actions", "Docker",
  "Firebase", "AI", "Figma",
  "Framer Motion", "Three.js"
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative z-10 bg-dark">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="Skills" />

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {skills.map((skill, i) => (
            <FadeIn key={skill} delay={i * 0.05} y={20}>
              <div className="bg-glass hover:bg-accent hover:border-accent hover:-translate-y-2 transition-all duration-300 px-6 py-4 rounded-full">
                <span className="text-white font-medium text-[clamp(1rem,1.5vw,1.25rem)]">
                  {skill}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
