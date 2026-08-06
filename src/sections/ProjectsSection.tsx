import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';

const projects = [
  {
    num: "01",
    client: "Client",
    title: "Nextlevel Studio",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    num: "02",
    client: "Personal",
    title: "Aura Brand Identity",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    num: "03",
    client: "Client",
    title: "Solaris Digital",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  }
];

type Project = typeof projects[number];

const ProjectCard = ({ project, index, totalCards }: { project: Project, index: number, totalCards: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] flex justify-center sticky top-24 md:top-32" style={{ top: `${index * 28 + 96}px` }}>
      <motion.div
        ref={cardRef}
        style={{ scale }}
        className="w-full max-w-[1200px] origin-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8"
      >
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="font-black text-[clamp(3rem,10vw,140px)] leading-none text-[#0C0C0C] text-outline">
              {project.num}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-sm opacity-60">
                {project.client}
              </span>
              <h3 className="text-white font-medium uppercase text-[clamp(1.5rem,3vw,2.5rem)] leading-none tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>
          <LiveProjectButton as="button" />
        </div>

        {/* Image Grid */}
        <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 min-h-0">
          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full sm:w-[40%]">
            <div className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden" style={{ height: 'clamp(130px, 16vw, 230px)' }}>
              <img src={project.images.leftTop} alt={`${project.title} top`} className="w-full h-full object-cover" />
            </div>
            <div className="w-full flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden min-h-[160px]" style={{ height: 'clamp(160px, 22vw, 340px)' }}>
              <img src={project.images.leftBottom} alt={`${project.title} bottom`} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full sm:w-[60%] flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden h-[300px] sm:h-auto">
            <img src={project.images.right} alt={`${project.title} main`} className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-5 sm:px-8 md:px-10 py-32 pb-40"
    >
      <FadeIn delay={0}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight">
          Project
        </h2>
      </FadeIn>

      <div className="flex flex-col relative w-full max-w-[1200px] mx-auto pb-[10vh]">
        <style dangerouslySetInnerHTML={{__html: `
          .text-outline {
            color: transparent;
            -webkit-text-stroke: 2px #D7E2EA;
          }
        `}} />

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
}
