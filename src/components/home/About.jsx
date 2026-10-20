
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  Blocks,
  Compass,
  Lightbulb,
  MoveUpRight,
  Scan,
  Sparkles,
} from "lucide-react";
import "../../css/home/About.css";

const principles = [
  {
    number: "01",
    icon: Compass,
    title: "Think with purpose",
    description:
      "We start by understanding the problem, the people and the opportunity.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Create with intent",
    description:
      "Every design decision has a reason. Every interaction has a role.",
  },
  {
    number: "03",
    icon: Blocks,
    title: "Build for what's next",
    description:
      "We create flexible digital experiences that can grow with your ambitions.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function AboutVisual() {
  return (
    <div className="nova-about-visual">
      <div className="nova-about-visual-grid" />

      <div className="nova-about-visual-top">
        <span>
          <span className="nova-about-status-dot" />
          OUR CREATIVE UNIVERSE
        </span>
        <span>NS — 001</span>
      </div>

      <motion.div
        className="nova-about-orbit nova-about-orbit-one"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="nova-about-orbit nova-about-orbit-two"
        animate={{ rotate: -360 }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="nova-about-core"
        animate={{ y: [0, -9, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="nova-about-core-inner">
          <span className="nova-about-core-symbol">N</span>
          <span className="nova-about-core-label">IDEAS IN MOTION</span>
        </div>
      </motion.div>

      <motion.div
        className="nova-about-float nova-about-float-design"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="nova-about-float-icon">
          <Scan size={17} />
        </span>
        <span>
          <strong>Design</strong>
          <small>Make it meaningful.</small>
        </span>
      </motion.div>

      <motion.div
        className="nova-about-float nova-about-float-build"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <span className="nova-about-float-icon">
          <Blocks size={17} />
        </span>
        <span>
          <strong>Technology</strong>
          <small>Make it work.</small>
        </span>
      </motion.div>

      <motion.div
        className="nova-about-sparkle nova-about-sparkle-one"
        animate={{ rotate: [0, 90, 180], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={23} />
      </motion.div>

      <div className="nova-about-visual-bottom">
        <span>STRATEGY</span>
        <span className="nova-about-bottom-separator" />
        <span>DESIGN</span>
        <span className="nova-about-bottom-separator" />
        <span>DEVELOPMENT</span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="nova-about section-space" id="about">
      <div className="container">
        <motion.div
          className="nova-about-heading"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="nova-section-eyebrow">
            <span className="nova-section-eyebrow-dot" />
            A LITTLE ABOUT US
          </div>

          <h2 className="nova-about-title">
            Not just another
            <br />
            <span>digital agency.</span>
          </h2>

          <div className="nova-about-heading-note">
            <Asterisk size={25} strokeWidth={1.5} />
            <span>Curiosity drives us.<br />Purpose keeps us moving.</span>
          </div>
        </motion.div>

        <div className="row align-items-center nova-about-main">
          <motion.div
            className="col-lg-6 nova-about-visual-column"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <AboutVisual />
          </motion.div>

          <motion.div
            className="col-lg-6 nova-about-copy-column"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
          >
            <span className="nova-about-kicker">
              SMALL DETAILS. BIGGER PICTURE.
            </span>

            <h3>
              We turn complex ideas into
              <span> clear digital experiences.</span>
            </h3>

            <p className="nova-about-description">
              Nova Studio is a creative digital agency concept built around
              one simple belief: good digital work should look thoughtful,
              feel intuitive and solve a real problem.
            </p>

            <p className="nova-about-description">
              We bring strategy, design and technology together to help
              businesses shape their ideas into purposeful online experiences.
              No unnecessary complexity—just considered work made with intent.
            </p>

            <a href="#contact" className="nova-about-cta">
              Let's create something
              <span>
                <ArrowUpRight size={18} />
              </span>
            </a>

            <div className="nova-about-copy-foot">
              <span className="nova-about-copy-foot-line" />
              <span>BUILT ON CURIOSITY, GUIDED BY PURPOSE.</span>
            </div>
          </motion.div>
        </div>

        <div className="nova-about-principles">
          <div className="nova-about-principles-heading">
            <span>HOW WE THINK</span>
            <span>OUR CREATIVE PRINCIPLES <MoveUpRight size={14} /></span>
          </div>

          <div className="row g-0">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  className="col-md-4 nova-about-principle-column"
                  key={principle.number}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <article className="nova-about-principle">
                    <div className="nova-about-principle-top">
                      <span>{principle.number}</span>
                      <Icon size={20} strokeWidth={1.6} />
                    </div>

                    <h4>{principle.title}</h4>
                    <p>{principle.description}</p>

                    <ArrowDownRight
                      className="nova-about-principle-arrow"
                      size={19}
                    />
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
