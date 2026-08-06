import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { SectionTitle } from '../components/SectionTitle';
import { LiveProjectButton } from '../components/LiveProjectButton';

const projects = [
  {
    num: "01",
    title: "GitHub Rock",
    desc: "Open-source GitHub client.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
  },
  {
    num: "02",
    title: "OTA Rock",
    desc: "OTA updater for Android devices.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    tech: ["Android", "Kotlin", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    num: "03",
    title: "Battery Rock",
    desc: "Advanced battery monitoring module.",
    image: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?q=80&w=2070&auto=format&fit=crop",
    tech: ["Android", "Kotlin", "Coroutines"],
    githubUrl: "#",
  },
  {
    num: "04",
    title: "FREE AI Rock",
    desc: "AI utilities and productivity tools.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    tech: ["React", "Node.js", "OpenAI API"],
    demoUrl: "#",
  },
  {
    num: "05",
    title: "Rock QR Code",
    desc: "Modern QR code generator.",
    image: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?q=80&w=2071&auto=format&fit=crop",
    tech: ["React", "TypeScript", "Zxing"],
    demoUrl: "#",
    githubUrl: "#",
  }
];

type Project = typeof projects[number];

const ProjectCard = ({ project, index, totalCards }: { project: Project, index: number, totalCards: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scaleProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.05;
  const scale = useTransform(scaleProgress, [0, 1], [1, index === totalCards - 1 ? 1 : targetScale]);

  return (
    <div className="h-[90vh] flex justify-center sticky top-24 md:top-32" style={{ top: `${index * 30 + 100}px` }}>
      <motion.div
        ref={cardRef}
        style={{ scale }}
        className="w-full max-w-6xl origin-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 bg-dark p-6 sm:p-10 md:p-12 flex flex-col gap-8 shadow-2xl relative overflow-hidden group"
      >
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <span className="font-black text-[clamp(4rem,8vw,100px)] text-white/20 leading-none tracking-tighter">
              {project.num}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-bold uppercase text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-tight">
                {project.title}
              </h3>
              <p className="text-text-secondary text-[clamp(1rem,1.5vw,1.25rem)] font-light max-w-lg">
                {project.desc}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap md:justify-end gap-3">
            {project.demoUrl && <LiveProjectButton href={project.demoUrl} variant="demo" />}
            {project.githubUrl && <LiveProjectButton href={project.githubUrl} variant="github" />}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 relative z-10">
          {project.tech.map((t, i) => (
            <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* Large Image with Parallax Hover */}
        <div className="relative flex-1 rounded-[30px] sm:rounded-[40px] overflow-hidden bg-white/5 border border-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />
        </div>
      </motion.div>
    </div>
  );
};

export function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-dark rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-5 sm:px-8 md:px-10 py-32 pb-40 border-t border-white/5"
    >
      <SectionTitle title="Featured Projects" />

      <div className="flex flex-col relative w-full max-w-6xl mx-auto pb-[10vh]">
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
