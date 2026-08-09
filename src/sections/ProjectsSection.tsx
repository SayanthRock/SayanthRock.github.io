import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';

const PROJECTS = [
  {
    num: "01",
    client: "Client",
    name: "Nextlevel Studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    num: "02",
    client: "Personal",
    name: "Aura Brand Identity",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    num: "03",
    client: "Client",
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
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 pb-32">
      <div className="pt-20 sm:pt-24 md:pt-32 mb-16 sm:mb-20">
        <FadeIn y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
            Project
          </h2>
        </FadeIn>
      </div>

      <div className="flex flex-col px-4 sm:px-8 md:px-10 gap-0">
        {PROJECTS.map((proj, idx) => (
          <ProjectCard key={proj.num} project={proj} index={idx} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total }: { project: any, index: number, total: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scaleProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Scale down when scrolled past
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scaleProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full max-w-7xl mx-auto">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`
        }}
        className="w-full h-full bg-[#0C0C0C] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 origin-top relative will-change-transform"
      >
        {/* Top Row */}
        <div className="flex justify-between items-center px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="font-black text-[#D7E2EA] leading-none text-[clamp(2.5rem,8vw,100px)]">
              {project.num}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 uppercase text-xs sm:text-sm tracking-wider font-light">
                {project.client}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl leading-none">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="hidden sm:block">
            <LiveProjectButton />
          </div>
        </div>

        {/* Bottom Row (Images) */}
        <div className="flex-1 flex gap-3 sm:gap-4 md:gap-6 overflow-hidden min-h-0">
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-6 h-full">
            <div className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden" style={{ height: 'clamp(130px, 16vw, 230px)' }}>
              <img src={project.images.col1_1} alt="Project detail 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-full flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden" style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}>
              <img src={project.images.col1_2} alt="Project detail 2" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-[60%] h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
            <img src={project.images.col2} alt="Project main" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Mobile Button */}
        <div className="sm:hidden flex justify-center mt-2">
          <LiveProjectButton className="w-full" />
        </div>
      </motion.div>
    </div>
  );
}
