import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark pt-20 pb-10 border-t border-white/10 relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <FadeIn>
            <div className="flex flex-col items-center md:items-start gap-4">
              <a href="#home" className="text-2xl font-black uppercase tracking-widest text-white">
                SAYANTH ROCK
              </a>
              <p className="text-text-secondary text-sm">
                Creative Developer & UI/UX Designer
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex gap-6">
              {[
                { icon: Github, href: "https://github.com/sayanthrock" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Mail, href: "mailto:sayanth@example.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-text-secondary hover:text-white hover:border-accent hover:bg-accent transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary/60">
            <p>© {currentYear} Sayanth Rock. All rights reserved.</p>
            <p>Made with React, TypeScript and ❤️</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
