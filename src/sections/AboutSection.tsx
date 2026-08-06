import { FadeIn } from '../components/FadeIn';
import { SectionTitle } from '../components/SectionTitle';

const stats = [
  { value: "30+", label: "Projects" },
  { value: "5+", label: "Technologies" },
  { value: "Open", label: "Source" },
  { value: "Pro", label: "Freelancer" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative z-10 bg-dark">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="About Me" />

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <FadeIn delay={0.2}>
              <p className="text-[clamp(1.1rem,2vw,1.5rem)] text-text-secondary leading-relaxed font-light">
                I am Sayanth Rock, a freelance developer and designer passionate about creating elegant digital experiences. I specialize in Android development, modern web applications, AI integration, UI/UX design, automation, and open-source software.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-[clamp(1.1rem,2vw,1.5rem)] text-text-secondary leading-relaxed font-light">
                My goal is to build products that are fast, beautiful, and enjoyable to use. I believe that great design is not just about how it looks, but how it works.
              </p>
            </FadeIn>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <FadeIn key={i} delay={0.2 + (i * 0.1)} className="bg-glass rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors duration-300">
                <span className="text-[clamp(2.5rem,5vw,3.5rem)] font-black text-white leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-text-secondary uppercase tracking-widest text-sm font-medium">
                  {stat.label}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
