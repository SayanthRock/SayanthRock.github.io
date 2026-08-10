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
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 text-[#0C0C0C]">
      <FadeIn y={40} className="w-full mb-16 sm:mb-20 md:mb-28">
        <h2 className="font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none text-[#0C0C0C]">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, index) => (
          <FadeIn
            key={service.num}
            delay={index * 0.1}
            y={20}
            className={`flex flex-col sm:flex-row items-start sm:items-center py-8 sm:py-10 md:py-12 ${index !== services.length - 1 ? 'border-b border-[rgba(12,12,12,0.15)]' : ''}`}
          >
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
              <span className="font-black text-[clamp(3rem,10vw,140px)] leading-none text-[#0C0C0C]">
                {service.num}
              </span>
            </div>
            <div className="w-full sm:w-2/3 flex flex-col gap-2 sm:gap-4">
              <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
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
