import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Layers3,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import "../../css/home/BrandStrip.css";

const capabilities = [
  { label: "Web Development", icon: Code2 },
  { label: "Brand Identity", icon: Palette },
  { label: "UI / UX Design", icon: Layers3 },
  { label: "Digital Growth", icon: TrendingUp },
  { label: "Creative Strategy", icon: Sparkles },
];

export default function BrandStrip() {
  return (
    <section className="brand-strip" aria-label="Our capabilities">
      <div className="container">
        <div className="brand-strip-heading">
          <span className="brand-strip-line" />
          <p>CREATIVE THINKING. PRACTICAL EXECUTION.</p>
          <span className="brand-strip-line" />
        </div>

        <div className="brand-strip-window">
          <motion.div
            className="brand-strip-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[0, 1].map((copy) => (
              <div
                className="brand-strip-group"
                key={copy}
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                {capabilities.map(({ label, icon: Icon }) => (
                  <div className="brand-strip-item" key={label}>
                    <span className="brand-strip-icon">
                      <Icon size={17} strokeWidth={1.7} />
                    </span>

                    <span>{label}</span>

                    <span className="brand-strip-star">✳</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="brand-strip-bottom">
          <span>ONE TEAM. MULTIPLE DISCIPLINES.</span>
          <span className="brand-strip-bottom-dot" />
          <span>BUILT AROUND YOUR AMBITION.</span>
        </div>
      </div>
    </section>
  );
}