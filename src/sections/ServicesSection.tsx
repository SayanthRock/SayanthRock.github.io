import { FadeIn } from '../components/FadeIn';

const services = [
  {
    num: "01",
    title: "3D Modeling",
    description: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    num: "02",
    title: "Rendering",
    description: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    num: "03",
    title: "Motion Design",
    description: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    num: "04",
    title: "Branding",
    description: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    num: "05",
    title: "Web Design",
    description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-10 text-[#0C0C0C]">
      <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            y={20}
            className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 ${
              i !== services.length - 1 ? 'border-b border-[rgba(12,12,12,0.15)]' : ''
            }`}
          >
            <div className="font-black text-[clamp(3rem,10vw,140px)] leading-none text-[#0C0C0C] shrink-0">
              {service.num}
            </div>

            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 flex-1">
              <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-none">
                {service.title}
              </h3>
              <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
