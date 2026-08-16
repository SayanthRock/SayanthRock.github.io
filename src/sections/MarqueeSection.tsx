import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const gifs = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

const row1Images = [...gifs.slice(0, 11), ...gifs.slice(0, 11), ...gifs.slice(0, 11)];
const row2Images = [...gifs.slice(11), ...gifs.slice(11), ...gifs.slice(11)];

export const MarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  // Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
  // Since we want this relative to scroll across the page, a simpler useTransform works nicely.
  // We approximate the desired calculation by using raw scrollY

  const row1X = useTransform(scrollY, (y) => (y * 0.3) - 200);
  const row2X = useTransform(scrollY, (y) => -(y * 0.3) + 200);

  return (
    <section
      ref={containerRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3"
    >
      <motion.div
        className="flex gap-3 whitespace-nowrap"
        style={{ x: row1X, willChange: 'transform' }}
      >
        {row1Images.map((src, idx) => (
          <img
            key={`row1-${idx}`}
            src={src}
            alt={`Marquee item ${idx}`}
            loading="lazy"
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </motion.div>

      <motion.div
        className="flex gap-3 whitespace-nowrap"
        style={{ x: row2X, willChange: 'transform' }}
      >
        {row2Images.map((src, idx) => (
          <img
            key={`row2-${idx}`}
            src={src}
            alt={`Marquee item ${idx}`}
            loading="lazy"
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </motion.div>
    </section>
  );
};
