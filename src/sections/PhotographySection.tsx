import { FadeIn } from '../components/FadeIn';
import { SectionTitle } from '../components/SectionTitle';

const photos = [
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1682687982501-1e58f813fb24?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1682695796254-bf42042cb06a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1682687981974-c5ef2111640c?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=2070&auto=format&fit=crop",
];

export function PhotographySection() {
  return (
    <section className="py-32 relative z-10 bg-dark border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="Photography" />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((src, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden break-inside-avoid">
                <img
                  src={src}
                  alt={`Photography ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
