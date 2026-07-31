import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';

const projects = [
  {
    num: "01",
    label: "Client",
    name: "Nextlevel Studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    num: "02",
    label: "Personal",
    name: "Aura Brand Identity",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    num: "03",
    label: "Client",
    name: "Solaris Digital",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] text-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Project
        </h2>

        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Calculate target scale based on position in stack
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  // Transform scale based on scroll position
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-center justify-center sticky"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full max-h-[800px] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 transform-gpu"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-12">
            <span className="font-black text-[clamp(2.5rem,8vw,100px)] leading-none text-[#D7E2EA]">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-sm sm:text-base opacity-70">
                {project.label}
              </span>
              <h3 className="font-medium uppercase text-[clamp(1.5rem,3vw,2.5rem)] text-white">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="hidden md:block">
             <LiveProjectButton />
          </div>
        </div>

        {/* Bottom Row - Image Grid */}
        <div className="flex-1 flex gap-4 sm:gap-6 overflow-hidden">
          {/* Left Column - 40% */}
          <div className="w-[40%] flex flex-col gap-4 sm:gap-6">
            <div className="w-full h-[clamp(130px,16vw,230px)] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
              <img src={project.images.col1_1} alt={`${project.name} 1`} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="w-full h-[clamp(160px,22vw,340px)] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
              <img src={project.images.col1_2} alt={`${project.name} 2`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          {/* Right Column - 60% */}
          <div className="w-[60%] h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
            <img src={project.images.col2} alt={`${project.name} main`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex justify-center mt-2">
           <LiveProjectButton className="w-full" />
        </div>
      </motion.div>
    </div>
  );
}
