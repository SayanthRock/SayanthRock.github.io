import { FadeIn } from '../components/FadeIn';

const SERVICES = [
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
    <section
      id="services"
      className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="text-[#0C0C0C] font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Services
          </h2>
        </FadeIn>

        <div className="flex flex-col w-full">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.num}
              delay={index * 0.1}
              y={30}
              className="flex flex-col sm:flex-row sm:items-center py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 last:border-b-0 gap-6 sm:gap-10 md:gap-16"
            >
              <div className="flex-none">
                <span className="text-[#0C0C0C] font-black leading-none text-[clamp(3rem,10vw,140px)]">
                  {service.num}
                </span>
              </div>

              <div className="flex flex-col flex-1 gap-2 sm:gap-4">
                <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                  {service.title}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
