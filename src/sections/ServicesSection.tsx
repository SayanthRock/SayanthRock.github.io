import { FadeIn } from '../components/FadeIn';


const services = [
  {
    num: "01",
    title: "Android Development",
    desc: "Native Android apps with modern architecture."
  },
  {
    num: "02",
    title: "Web Development",
    desc: "Responsive React applications with premium UI."
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Luxury interfaces focused on user experience."
  },
  {
    num: "04",
    title: "AI Integration",
    desc: "AI-powered applications and automation."
  },
  {
    num: "05",
    title: "Open Source",
    desc: "Developer tools and community-driven software."
  }
];

export function ServicesSection() {
  return (
    <section className="bg-white text-dark rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-10">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0}>
          <h2 className="font-black uppercase text-center text-[clamp(3rem,10vw,120px)] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight">
            Services
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 py-8 sm:py-10 md:py-12 border-b border-dark/15 last:border-0 group cursor-default">
                <span className="font-black text-[clamp(3rem,8vw,100px)] leading-none text-dark/20 group-hover:text-accent transition-colors duration-500 md:w-[20%]">
                  {service.num}
                </span>

                <div className="flex flex-col gap-2 md:gap-4 md:w-[80%]">
                  <h3 className="font-medium uppercase text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-dark group-hover:text-accent transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl text-[clamp(1rem,1.8vw,1.25rem)] text-dark/70">
                    {service.desc}
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
