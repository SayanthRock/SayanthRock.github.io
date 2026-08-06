import { FadeIn } from '../components/FadeIn';
import { SectionTitle } from '../components/SectionTitle';
import { AnimatedButton } from '../components/AnimatedButton';
import { Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative z-10 bg-dark border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle title="Let's Build Something Amazing" className="text-[clamp(2.5rem,6vw,80px)]" />

        <FadeIn delay={0.2}>
          <form className="flex flex-col gap-6 mt-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-glass border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-glass border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-glass border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
            ></textarea>

            <div className="flex justify-center mt-4">
              <AnimatedButton variant="primary" className="w-full md:w-auto">
                Send Message
                <Send size={20} />
              </AnimatedButton>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
