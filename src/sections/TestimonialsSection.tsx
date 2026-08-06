import { FadeIn } from '../components/FadeIn';
import { SectionTitle } from '../components/SectionTitle';

const testimonials = [
  {
    quote: "Sayanth transformed our vision into a stunning digital reality. His attention to detail and animations are unmatched.",
    name: "Alex Johnson",
    role: "CEO, TechStart"
  },
  {
    quote: "Working with Sayanth was a breeze. He delivered a high-performance Android app that our users absolutely love.",
    name: "Sarah Williams",
    role: "Product Manager"
  },
  {
    quote: "The level of polish and glassmorphism design he brought to our platform elevated our brand to the next level.",
    name: "Michael Chen",
    role: "Creative Director"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-32 relative z-10 bg-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="bg-glass p-8 rounded-[40px] flex flex-col h-full gap-8 justify-between hover:bg-white/10 transition-colors duration-500">
                <p className="text-text-secondary text-[clamp(1rem,1.5vw,1.25rem)] font-light leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium text-lg uppercase tracking-wider">{t.name}</span>
                  <span className="text-accent text-sm font-medium tracking-widest uppercase">{t.role}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
