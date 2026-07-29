import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';

const projects = [
  {
    num: "01",
    label: "Client",
    title: "Nextlevel Studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    num: "02",
    label: "Personal",
    title: "Aura Brand Identity",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    num: "03",
    label: "Client",
    title: "Solaris Digital",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  }
];

const ProjectCard = ({ project, index, totalCards }: { project: any, index: number, totalCards: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Calculate when this card should start scaling down
  // It starts when the NEXT card hits the top
  const { scrollYProgress: scaleProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  // If it's the last card, don't scale it down
  const scale = useTransform(scaleProgress, [0, 1], [1, index === totalCards - 1 ? 1 : targetScale]);

  return (
    <div className="h-[85vh] flex justify-center sticky top-24 md:top-32" style={{ top: `${index * 28 + 96}px` }}>
      <motion.div
        ref={cardRef}
        style={{ scale }}
        className="w-full max-w-6xl origin-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="font-black text-[clamp(3rem,10vw,140px)] text-white leading-none">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm">
                {project.label}
              </span>
              <h3 className="text-white font-medium uppercase text-[clamp(1.5rem,3vw,2.5rem)] leading-none mt-1">
                {project.title}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom Row - Images */}
        <div className="flex flex-col md:flex-row gap-4 h-full min-h-[300px]">
          {/* Left Column (40%) */}
          <div className="w-full md:w-[40%] flex flex-col gap-4">
            <img
              src={project.images.col1_1}
              alt={`${project.title} Detail 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[clamp(130px,16vw,230px)]"
            />
            <img
              src={project.images.col1_2}
              alt={`${project.title} Detail 2`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[clamp(160px,22vw,340px)] flex-1"
            />
          </div>

          {/* Right Column (60%) */}
          <div className="w-full md:w-[60%] h-full">
            <img
              src={project.images.col2}
              alt={`${project.title} Main`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-[300px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-5 sm:px-8 md:px-10 py-20 pb-40"
    >
      <FadeIn delay={0}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Project
        </h2>
      </FadeIn>

      <div className="flex flex-col relative w-full max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
};
