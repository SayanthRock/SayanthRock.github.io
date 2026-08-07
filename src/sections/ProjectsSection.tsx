import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';

const projects = [
  {
    num: "01",
    type: "Client",
    name: "Nextlevel Studio",
    images: {
      col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    }
  },
  {
    num: "02",
    type: "Personal",
    name: "Aura Brand Identity",
    images: {
      col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    }
  },
  {
    num: "03",
    type: "Client",
    name: "Solaris Digital",
    images: {
      col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    }
  }
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
}

function ProjectCard({ project, index, totalCards, scrollYProgress }: ProjectCardProps) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  // Only scale down when the next cards overlap it
  const scale = useTransform(
    scrollYProgress,
    [index / totalCards, 1],
    [1, targetScale]
  );

  return (
    <div className="h-[85vh] w-full flex items-center justify-center sticky top-24 md:top-32 pb-[5vh]">
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full max-w-6xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 h-full shadow-xl"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <span className="font-black text-[clamp(3rem,6vw,140px)] leading-none text-white">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] font-light uppercase tracking-wider text-sm sm:text-base opacity-70">
                {project.type}
              </span>
              <h3 className="text-white font-medium uppercase text-[clamp(1.2rem,2.5vw,2.5rem)] leading-tight">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton className="shrink-0" />
        </div>

        {/* Bottom Row (Images) */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 h-full overflow-hidden">
          {/* Left Column (40%) */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 h-full">
            <div className="w-full h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden shrink-0">
              <img src={project.images.col1img1} alt={`${project.name} 1`} className="w-full h-full object-cover" />
            </div>
            <div className="w-full flex-1 min-h-[clamp(160px,22vw,340px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
              <img src={project.images.col1img2} alt={`${project.name} 2`} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column (60%) */}
          <div className="w-full md:w-[60%] flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden h-[300px] md:h-auto">
            <img src={project.images.col2img} alt={`${project.name} 3`} className="w-full h-full object-cover" />
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
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative pt-20 sm:pt-24 md:pt-32 pb-32">
      <FadeIn className="text-center w-full mb-10 sm:mb-16 md:mb-20">
        <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none inline-block">
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="px-5 sm:px-8 md:px-10 relative">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            totalCards={projects.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
