import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IMAGES = [
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

const ROW1_IMAGES = IMAGES.slice(0, 11);
const ROW2_IMAGES = IMAGES.slice(11);

// Triple arrays for seamless scrolling
const ROW1 = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
const ROW2 = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

export function MarqueeSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Custom transform to calculate: (window.scrollY - sectionTop + window.innerHeight) * 0.3
  const offset = useTransform(scrollY, (v) => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const sectionTop = v + rect.top;
    return (v - sectionTop + window.innerHeight) * 0.3;
  });

  const row1X = useTransform(offset, (v) => `${v - 200}px`);
  const row2X = useTransform(offset, (v) => `${-(v - 200)}px`);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3"
    >
      <motion.div
        className="flex gap-3 w-max"
        style={{ x: row1X, willChange: 'transform' }}
      >
        {ROW1.map((src, idx) => (
          <img
            key={`r1-${idx}`}
            src={src}
            loading="lazy"
            alt="Marquee image"
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
          />
        ))}
      </motion.div>

      <motion.div
        className="flex gap-3 w-max"
        style={{ x: row2X, willChange: 'transform' }}
      >
        {ROW2.map((src, idx) => (
          <img
            key={`r2-${idx}`}
            src={src}
            loading="lazy"
            alt="Marquee image"
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
          />
        ))}
      </motion.div>
    </section>
  );
}
