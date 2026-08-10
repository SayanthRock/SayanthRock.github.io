import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';

const projects = [
  {
    num: "01",
    category: "Client",
    title: "Nextlevel Studio",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    num: "02",
    category: "Personal",
    title: "Aura Brand Identity",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    num: "03",
    category: "Client",
    title: "Solaris Digital",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  }
];

function ProjectCard({ project, index, progress, range, targetScale }: { project: any, index: number, progress: any, range: number[], targetScale: number }) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full">
      <motion.div
        style={{
          scale,
          top: `calc(-10vh + ${index * 28}px)`
        }}
        className="relative flex flex-col w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 transform-gpu"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-10 gap-4">
          <div className="flex flex-col">
            <span className="font-black text-[clamp(3rem,10vw,140px)] leading-none text-white mb-2">
              {project.num}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm font-medium">
                ({project.category})
              </span>
              <h3 className="text-white font-medium text-2xl sm:text-3xl md:text-4xl uppercase">
                {project.title}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-full">
          <div className="w-full md:w-[40%] flex flex-col gap-4">
            <img
              src={project.images.leftTop}
              alt={`${project.title} detail 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[clamp(130px,16vw,230px)]"
            />
            <img
              src={project.images.leftBottom}
              alt={`${project.title} detail 2`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[clamp(160px,22vw,340px)]"
            />
          </div>
          <div className="w-full md:w-[60%] h-full">
            <img
              src={project.images.right}
              alt={`${project.title} main`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-[300px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 pb-32"
    >
      <div className="pt-20 sm:pt-24 md:pt-32 px-5 sm:px-8 md:px-10">
        <FadeIn y={40} className="w-full mb-16 sm:mb-20 md:mb-28">
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
            Project
          </h2>
        </FadeIn>
      </div>

      <div ref={container} className="relative px-5 sm:px-8 md:px-10 max-w-7xl mx-auto">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <ProjectCard
              key={project.num}
              index={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
