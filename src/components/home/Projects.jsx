
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Layers3,
  MoveUpRight,
} from "lucide-react";
import "../../css/home/Projects.css";

const projects = [
  {
    number: "01",
    name: "Motors",
    category: "Automotive · Web Experience",
    description:
      "A bold digital showroom experience designed to bring performance, precision and modern automotive design together.",
    type: "automotive",
    label: "DIGITAL SHOWROOM",
    tags: ["Web Design", "Development"],
    visual: "motors",
  },
  {
    number: "02",
    name: "Campus Connect",
    category: "Education · Digital Platform",
    description:
      "A cleaner, more engaging digital experience that makes university information easier to explore and navigate.",
    type: "education",
    label: "EDUCATION PLATFORM",
    tags: ["UI / UX", "Web Development"],
    visual: "campus",
  },
  {
    number: "03",
    name: "Orgafe",
    category: "Lifestyle · Brand & Commerce",
    description:
      "A fresh visual direction and product-led digital concept for a brand built around natural living.",
    type: "lifestyle",
    label: "BRAND EXPERIENCE",
    tags: ["Brand Identity", "E-commerce"],
    visual: "orgafe",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function MotorsVisual() {
  return (
    <div className="project-visual project-visual-motors">
      <div className="motors-grid-overlay" />

      <div className="motors-topline">
        <span className="motors-mini-brand">
          <span className="motors-brand-mark">M</span>
          MOTOR / STUDIO
        </span>
        <span className="motors-edition">PERFORMANCE SERIES — 01</span>
      </div>

      <div className="motors-copy">
        <span>ENGINEERED TO MOVE.</span>
        <strong>
          Beyond
          <br />
          the ordinary<span>.</span>
        </strong>
        <div className="motors-specs">
          <span>PRECISION</span>
          <span>·</span>
          <span>POWER</span>
          <span>·</span>
          <span>DESIGN</span>
        </div>
      </div>

      <div className="motors-car">
        <div className="motors-car-light" />
        <div className="motors-car-roof" />
        <div className="motors-car-window" />
        <div className="motors-car-body" />
        <div className="motors-car-hood" />
        <div className="motors-car-front" />
        <div className="motors-car-wheel motors-car-wheel-left">
          <span />
        </div>
        <div className="motors-car-wheel motors-car-wheel-right">
          <span />
        </div>
      </div>

      <div className="motors-bottomline">
        <span>01 / THE ART OF MOTION</span>
        <span className="motors-bottom-circle">
          <ArrowUpRight size={17} />
        </span>
      </div>
    </div>
  );
}

function CampusVisual() {
  return (
    <div className="project-visual project-visual-campus">
      <div className="campus-orbit campus-orbit-one" />
      <div className="campus-orbit campus-orbit-two" />

      <div className="campus-window">
        <div className="campus-window-top">
          <div className="campus-window-brand">
            <span className="campus-brand-icon">
              <Layers3 size={15} />
            </span>
            <span>campus<span>connect</span></span>
          </div>
          <div className="campus-window-menu">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="campus-window-body">
          <div className="campus-welcome">YOUR NEXT CHAPTER STARTS HERE</div>
          <div className="campus-headline">
            Find your
            <br />
            <span>place to grow.</span>
          </div>
          <p>Discover programs, explore campus life and plan your future.</p>

          <div className="campus-search">
            <span>What do you want to study?</span>
            <span className="campus-search-icon">
              <ArrowUpRight size={15} />
            </span>
          </div>

          <div className="campus-bottom-cards">
            <div className="campus-mini-card campus-mini-card-purple">
              <span>01</span>
              <strong>Explore<br />programs</strong>
              <ArrowUpRight size={14} />
            </div>
            <div className="campus-mini-card campus-mini-card-blue">
              <span>02</span>
              <strong>Campus<br />life</strong>
              <ArrowUpRight size={14} />
            </div>
            <div className="campus-mini-card campus-mini-card-dark">
              <span>03</span>
              <strong>Your<br />future</strong>
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </div>

      <div className="campus-floating-note">
        <span className="campus-live-dot" />
        A NEW WAY TO LEARN
      </div>
    </div>
  );
}

function OrgafeVisual() {
  return (
    <div className="project-visual project-visual-orgafe">
      <div className="orgafe-topbar">
        <span>o<span>.</span> orgafe</span>
        <span>LIVE NATURALLY</span>
        <span className="orgafe-menu">
          <span />
          <span />
        </span>
      </div>

      <div className="orgafe-layout">
        <div className="orgafe-copy">
          <span className="orgafe-eyebrow">A LITTLE CLOSER TO NATURE</span>
          <strong>
            Grow into
            <br />
            <em>good living.</em>
          </strong>
          <p>
            Thoughtful essentials for a more natural everyday.
          </p>
          <span className="orgafe-shop-link">
            EXPLORE THE COLLECTION <ArrowUpRight size={14} />
          </span>
        </div>

        <div className="orgafe-art">
          <div className="orgafe-sun" />
          <div className="orgafe-leaf orgafe-leaf-one" />
          <div className="orgafe-leaf orgafe-leaf-two" />
          <div className="orgafe-leaf orgafe-leaf-three" />
          <div className="orgafe-vase">
            <div className="orgafe-vase-neck" />
          </div>
          <div className="orgafe-platform" />
          <span className="orgafe-art-caption">NATURE, REIMAGINED.</span>
        </div>
      </div>

      <div className="orgafe-bottom">
        <span>MADE FOR SLOWER MOMENTS</span>
        <span>EST. FOR EVERYDAY LIVING</span>
      </div>
    </div>
  );
}

const projectVisuals = {
  motors: MotorsVisual,
  campus: CampusVisual,
  orgafe: OrgafeVisual,
};

export default function Projects() {
  return (
    <section className="nova-projects section-space" id="work">
      <div className="container">
        <motion.div
          className="nova-projects-heading row align-items-end"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="col-lg-8">
            <div className="nova-section-eyebrow">
              <span className="nova-section-eyebrow-dot" />
              SELECTED WORK
            </div>

            <h2 className="nova-projects-title">
              Ideas made
              <br />
              <span>real things.</span>
            </h2>
          </div>

          <div className="col-lg-4">
            <p className="nova-projects-intro">
              A closer look at the ideas, experiences and digital concepts
              shaping our creative world.
            </p>
          </div>
        </motion.div>

        <div className="nova-projects-list">
          {projects.map((project, index) => {
            const Visual = projectVisuals[project.visual];

            return (
              <motion.article
                className={`nova-project nova-project-${project.type}`}
                key={project.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="nova-project-visual-wrap">
                  <div className="nova-project-visual-label">
                    <span>{project.label}</span>
                    <span>{project.number} / 03</span>
                  </div>

                  <Visual />

                  <div className="nova-project-visual-index">
                    <span>PROJECT</span>
                    <strong>{project.number}</strong>
                  </div>
                </div>

                <div className="nova-project-info">
                  <div className="nova-project-info-top">
                    <span className="nova-project-category">
                      {project.category}
                    </span>
                    <span className="nova-project-external">
                      <ExternalLink size={16} />
                    </span>
                  </div>

                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="nova-project-footer">
                    <div className="nova-project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <span className="nova-project-explore">
                      CONCEPT PREVIEW <MoveUpRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="nova-projects-bottom"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="nova-projects-bottom-copy">
            <span className="nova-projects-bottom-icon">
              <ArrowDownRight size={20} />
            </span>
            <span>
              <strong>Your project could be next.</strong>
              <small>Let's turn your next big idea into something real.</small>
            </span>
          </div>

          <a href="#contact" className="nova-projects-cta">
            Start a conversation <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
