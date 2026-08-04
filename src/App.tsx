
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { Github } from 'lucide-react';

function App() {
  return (
    <div className="main-wrapper font-sans bg-[#0C0C0C] min-h-screen text-white">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />

      <footer className="py-8 bg-[#0C0C0C] flex justify-center items-center relative z-20">
        <a
          href="https://github.com/sayanthrock"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D7E2EA] hover:text-white transition-colors duration-200"
        >
          <Github size={24} />
        </a>
      </footer>
    </div>
  );
}

export default App;
