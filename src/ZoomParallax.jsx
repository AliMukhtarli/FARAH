import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ZoomParallax({ images = [], className = "" }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className={`zp-root ${className}`.trim()}>
      <div className="zp-sticky">
        {images.slice(0, 7).map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];
          return (
            <motion.div key={index} style={{ scale }} className={`zp-layer zp-layer--${index}`}>
              <div className="zp-frame">
                <img
                  src={src || "/placeholder.svg"}
                  alt={alt || `Parallax image ${index + 1}`}
                  className="zp-img"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

