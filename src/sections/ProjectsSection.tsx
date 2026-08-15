import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';

const PROJECTS = [
  {
    num: "01",
    category: "Client",
    title: "Nextlevel Studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    num: "02",
    category: "Personal",
    title: "Aura Brand Identity",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    num: "03",
    category: "Client",
    title: "Solaris Digital",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  }
];

function ProjectCard({ project, index, totalCards, progress }: { project: any, index: number, totalCards: number, progress: any }) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);
  const isLast = index === totalCards - 1;
  const topOffset = index * 28;

  return (
    <div className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full">
      <motion.div
        style={{ scale: isLast ? 1 : scale, top: `${topOffset}px` }}
        className="w-full relative flex flex-col gap-6 md:gap-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-0 w-full px-2 sm:px-4">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
            <span className="text-[#D7E2EA] font-black leading-none text-[clamp(3rem,10vw,140px)]">
              {project.num}
            </span>
            <div className="flex flex-col gap-1 sm:gap-2 pb-2 sm:pb-4">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm md:text-base font-light">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.5rem,3vw,2.5rem)] leading-none">
                {project.title}
              </h3>
            </div>
          </div>
          <div className="pb-2 sm:pb-4 self-start md:self-auto">
            <LiveProjectButton />
          </div>
        </div>

        {/* Bottom Row - Images */}
        <div className="flex flex-col md:flex-row gap-4 w-full h-full flex-1">
          {/* Left Column - 40% */}
          <div className="flex flex-col gap-4 w-full md:w-[40%]">
            <div className="w-full h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
              <img src={project.images.col1_1} alt={`${project.title} detail 1`} className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-[clamp(160px,22vw,340px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
              <img src={project.images.col1_2} alt={`${project.title} detail 2`} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column - 60% */}
          <div className="w-full md:w-[60%] h-[306px] md:h-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
            <img src={project.images.col2} alt={`${project.title} main view`} className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-32 pb-32 relative z-30"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-10">
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Project
          </h2>
        </FadeIn>

        <div ref={containerRef} className="relative w-full flex flex-col gap-10 md:gap-20">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
