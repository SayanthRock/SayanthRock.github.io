import { FadeIn } from '../components/FadeIn';
import { SectionTitle } from '../components/SectionTitle';
import { AnimatedButton } from '../components/AnimatedButton';
import { Github, Star, GitFork, Users } from 'lucide-react';

export function GithubSection() {
  const stats = [
    { label: "Followers", value: "1.2k+", icon: Users },
    { label: "Stars", value: "3.5k+", icon: Star },
    { label: "Forks", value: "800+", icon: GitFork },
  ];

  return (
    <section id="github" className="py-32 relative z-10 bg-dark border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="GitHub" />

        <div className="flex flex-col gap-16 items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <FadeIn key={stat.label} delay={i * 0.1} y={20}>
                  <div className="bg-glass rounded-[30px] p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors">
                    <Icon size={40} className="text-accent" />
                    <div className="flex flex-col items-center text-center">
                      <span className="text-[clamp(2rem,4vw,3rem)] font-black text-white leading-none">
                        {stat.value}
                      </span>
                      <span className="text-text-secondary uppercase tracking-widest text-sm font-medium mt-2">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.4}>
            <AnimatedButton href="https://github.com/sayanthrock" variant="primary">
              Visit GitHub Profile
              <Github size={20} />
            </AnimatedButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
