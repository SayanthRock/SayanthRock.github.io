import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { Magnet } from '../components/Magnet';

export function HeroSection() {
  return (
    <section className="h-screen w-full flex flex-col overflow-x-clip">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
          <a href="#price" className="hover:opacity-70 transition-opacity duration-200">Price</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
        </nav>
      </FadeIn>

      {/* Hero Content container */}
      <div className="flex-1 w-full relative flex flex-col justify-between">

        {/* Massive Heading */}
        <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 w-full">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] text-center w-full">
              Hi, i&apos;m jack
            </h1>
          </FadeIn>
        </div>

        {/* Magnet Portrait */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
          <FadeIn delay={0.6} y={30}>
            <Magnet padding={150} strength={3}>
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Jack portrait"
                className="w-full h-auto object-cover pointer-events-none"
              />
            </Magnet>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
