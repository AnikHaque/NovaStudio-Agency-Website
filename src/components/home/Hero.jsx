import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  MoveUpRight,
  Play,
} from "lucide-react";
import "../../css/home/Hero.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="nova-hero" id="home">
      {/* Background decoration */}
      <div className="hero-grid-bg" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="container nova-hero-container">
        <div className="row align-items-center g-4 g-xl-5">
          {/* Left content */}
          <div className="col-lg-7">
            <motion.div
              className="hero-copy"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="hero-eyebrow"
                variants={itemVariants}
              >
                <span className="hero-eyebrow-icon">
                  <Sparkles size={14} />
                </span>
                <span>INDEPENDENT DIGITAL CREATIVE AGENCY</span>
                <span className="hero-eyebrow-line" />
              </motion.div>

              <motion.h1
                className="hero-heading"
                variants={itemVariants}
              >
                We make
                <br />
                digital feel
                <br />
                <span className="hero-gradient-word">
                  different<span className="hero-period">.</span>
                </span>
              </motion.h1>

              <motion.p
                className="hero-description"
                variants={itemVariants}
              >
                We combine bold creativity, thoughtful design and smart
                technology to build digital experiences that move brands
                forward.
              </motion.p>

              <motion.div
                className="hero-actions d-flex flex-wrap align-items-center"
                variants={itemVariants}
              >
                <a href="#work" className="hero-primary-btn">
                  Explore our work
                  <span className="hero-btn-icon">
                    <ArrowUpRight size={18} />
                  </span>
                </a>

                <a href="#services" className="hero-secondary-btn">
                  <span className="hero-play-icon">
                    <Play size={13} fill="currentColor" />
                  </span>
                  Discover what we do
                </a>
              </motion.div>

              <motion.div
                className="hero-proof"
                variants={itemVariants}
              >
                <div className="hero-proof-line" />

                <div className="hero-proof-content">
                  <span className="hero-proof-label">
                    OUR APPROACH
                  </span>
                  <p>
                    Strategy first. Creativity always.
                  </p>
                </div>

                <div className="hero-proof-divider" />

                <div className="hero-proof-content">
                  <span className="hero-proof-label">
                    OUR FOCUS
                  </span>
                  <p>
                    Design with a purpose.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right visual */}
          <div className="col-lg-5">
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.88, x: 25 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              <div className="hero-visual-topline">
                <span>CREATIVE LAB / 001</span>
                <span className="hero-live">
                  <span />
                  AVAILABLE FOR PROJECTS
                </span>
              </div>

              {/* Abstract artwork */}
              <div className="hero-artwork">
                <div className="hero-art-halo" />
                <div className="hero-art-ring hero-art-ring-one" />
                <div className="hero-art-ring hero-art-ring-two" />
                <div className="hero-art-ring hero-art-ring-three" />

                <motion.div
                  className="hero-art-object"
                  animate={{
                    rotate: [0, 8, 0, -8, 0],
                    y: [0, -10, 0, 8, 0],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="hero-art-object-inner">
                    <div className="hero-art-reflection" />
                    <div className="hero-art-core" />
                  </div>
                </motion.div>

                <motion.div
                  className="hero-floating-label hero-label-top"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="hero-floating-icon">
                    <Sparkles size={16} />
                  </span>
                  <div>
                    <small>IDEAS INTO REALITY</small>
                    <strong>Think beyond.</strong>
                  </div>
                </motion.div>

                <motion.div
                  className="hero-floating-label hero-label-bottom"
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="hero-mini-bars">
                    {[28, 44, 35, 57, 43, 68, 52].map((height, index) => (
                      <span
                        key={index}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>

                  <div>
                    <small>THE NEXT CHAPTER</small>
                    <strong>Starts with an idea.</strong>
                  </div>

                  <MoveUpRight
                    className="hero-floating-arrow"
                    size={18}
                  />
                </motion.div>

                <span className="hero-art-index">N° 01</span>
                <span className="hero-art-coordinate">
                  23°48' N / 90°24' E
                </span>
              </div>

              <div className="hero-visual-footer">
                <span>DESIGN</span>
                <span className="hero-footer-dot" />
                <span>TECHNOLOGY</span>
                <span className="hero-footer-dot" />
                <span>GROWTH</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.a
          href="#services"
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <span className="hero-scroll-icon">
            <ArrowDown size={15} />
          </span>
          <span>SCROLL TO EXPLORE</span>
          <span className="hero-scroll-line" />
        </motion.a>
      </div>
    </section>
  );
}