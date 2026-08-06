import { FadeIn } from '../components/FadeIn';
import { SectionTitle } from '../components/SectionTitle';

const timeline = [
  {
    year: "2023 - Present",
    title: "Freelance Creative Developer",
    desc: "Building premium web applications and Android apps for clients worldwide."
  },
  {
    year: "2021 - 2023",
    title: "Senior Android Engineer",
    desc: "Led development of scalable Android applications using Kotlin and Jetpack Compose."
  },
  {
    year: "2019 - 2021",
    title: "UI/UX Designer",
    desc: "Designed intuitive user interfaces and experiences for mobile and web platforms."
  }
];

export function TimelineSection() {
  return (
    <section className="py-32 relative z-10 bg-dark border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle title="Experience" />

        <div className="flex flex-col gap-12 relative before:absolute before:inset-0 before:ml-[28px] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-white/20 before:to-transparent">
          {timeline.map((item, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-dark bg-accent text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(230,0,35,0.2)] transition-shadow duration-500 group-hover:shadow-[0_0_0_8px_rgba(230,0,35,0.3)] z-10 ml-0 md:ml-auto md:mr-auto">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-glass p-6 sm:p-8 rounded-[30px] transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-accent font-bold tracking-widest text-sm mb-2 block">{item.year}</span>
                  <h3 className="text-white font-medium text-xl sm:text-2xl mb-3">{item.title}</h3>
                  <p className="text-text-secondary font-light text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
