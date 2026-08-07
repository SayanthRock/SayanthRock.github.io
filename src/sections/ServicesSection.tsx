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
    <section className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col">
        <h2 className="font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Services
        </h2>

        <div className="flex flex-col w-full">
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.1} y={20} duration={0.6}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 last:border-b-0 w-full">
                <span className="font-black text-[clamp(3rem,10vw,140px)] leading-none min-w-[20%] md:min-w-[25%] lg:min-w-[30%]">
                  {service.num}
                </span>

                <div className="flex flex-col gap-2 md:gap-3 flex-1">
                  <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                    {service.title}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
