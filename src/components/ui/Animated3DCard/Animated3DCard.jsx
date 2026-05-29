import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, rotateX: -8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export function Animated3DCard({ image, title, price, href }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({
      x: (x / rect.width - 0.5) * 18,
      y: (y / rect.height - 0.5) * -18,
    });
  }, []);

  const handleLeave = useCallback(() => {
    setHovered(false);
    setMousePos({ x: 0, y: 0 });
  }, []);

  const shineAngle = mousePos.x + 135;

  return (
    <Link to={href} className="animated-3d-card-wrap">
      <motion.div
        className="animated-3d-card"
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        animate={{
          rotateX: mousePos.y,
          rotateY: mousePos.x,
          z: hovered ? 16 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="animated-3d-card-media">
          <img src={image} alt={title} loading="lazy" />
        </div>

        <motion.div
          className="animated-3d-card-shine"
          aria-hidden
          animate={{
            opacity: hovered ? 1 : 0,
            background: hovered
              ? `linear-gradient(${shineAngle}deg, transparent 35%, rgba(255,255,255,0.45) 50%, transparent 65%)`
              : "transparent",
          }}
          transition={{ duration: 0.25 }}
        />

        <motion.div
          className="animated-3d-card-edge"
          aria-hidden
          animate={{ opacity: hovered ? 0.35 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <h3 className="animated-3d-card-title">{title}</h3>
      <p className="animated-3d-card-price">{price}</p>
    </Link>
  );
}

export function Animated3DCardGrid({ items }) {
  return (
    <motion.div
      className="product-collections-grid animated-3d-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px", amount: 0.15 }}
      style={{ perspective: "1200px" }}
    >
      {items.map((item) => (
        <motion.div key={item.id} variants={itemVariants} style={{ transformStyle: "preserve-3d" }}>
          <Animated3DCard
            image={item.img}
            title={item.name}
            price={item.price}
            href={`/product/${item.slug}`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
