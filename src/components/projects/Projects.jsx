
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  MoveUpRight,
  Plus,
  Minus,
  Sparkles,
} from "lucide-react";
import "../../css/projects/Projects.css";

const projects = [
  {
    number: "01",
    name: "Motors",
    category: "Web Design",
    type: "Automotive / Digital Experience",
    year: "2026",
    description:
      "A digital experience built around movement, precision and the emotion of driving. Bold typography meets a cinematic visual direction.",
    services: ["Art Direction", "UI / UX Design", "Web Experience"],
    theme: "motors",
    size: "featured",
  },
  {
    number: "02",
    name: "Campus Connect",
    category: "Development",
    type: "Education / Digital Platform",
    year: "2026",
    description:
      "A connected campus experience that brings student resources, learning spaces and university life into one intuitive platform.",
    services: ["Product Strategy", "Interface Design", "Development"],
    theme: "campus",
    size: "standard",
  },
  {
    number: "03",
    name: "Orgafe",
    category: "Branding",
    type: "Lifestyle / Brand Identity",
    year: "2026",
    description:
      "A nature-inspired brand direction built on simplicity, honest materials and a visual language that feels fresh and unmistakable.",
    services: ["Brand Strategy", "Visual Identity", "Packaging"],
    theme: "orgafe",
    size: "standard",
  },
  {
    number: "04",
    name: "Nexora",
    category: "Web Design",
    type: "Technology / SaaS",
    year: "2026",
    description:
      "A forward-looking digital presence for a technology product, making complex ideas feel clear, useful and approachable.",
    services: ["Digital Strategy", "Web Design", "Interaction"],
    theme: "nexora",
    size: "standard",
  },
  {
    number: "05",
    name: "Flowboard",
    category: "Development",
    type: "Productivity / Web App",
    year: "2026",
    description:
      "A dashboard concept that brings project activity, team priorities and everyday workflows together in a calmer workspace.",
    services: ["UX Design", "Design System", "Development"],
    theme: "flowboard",
    size: "standard",
  },
];

const categories = ["All Work", "Web Design", "Development", "Branding"];

function MotorsArtwork() {
  return (
    <div className="project-artwork artwork-motors">
      <div className="artwork-grain" />
      <div className="motors-topline">
        <span>M / STUDIO</span>
        <span>ENGINEERED TO MOVE YOU</span>
      </div>

      <div className="motors-display-copy">
        <span>PERFORMANCE, REIMAGINED.</span>
        <h3>
          Built for
          <br />
          <i>the feeling.</i>
        </h3>
      </div>

      <div className="motors-car">
        <div className="motors-car-roof" />
        <div className="motors-car-glass" />
        <div className="motors-car-body">
          <span className="motors-car-highlight" />
          <span className="motors-car-light" />
        </div>
        <div className="motors-wheel motors-wheel-a">
          <span />
        </div>
        <div className="motors-wheel motors-wheel-b">
          <span />
        </div>
      </div>

      <div className="motors-artwork-footer">
        <span>DESIGN IN MOTION</span>
        <span>01 — 05</span>
      </div>
    </div>
  );
}

function CampusArtwork() {
  return (
    <div className="project-artwork artwork-campus">
      <div className="campus-window">
        <div className="campus-sidebar">
          <div className="campus-logo">C.</div>
          <span className="campus-active">⌂</span>
          <span>▤</span>
          <span>◷</span>
          <span>⚙</span>
        </div>

        <div className="campus-main">
          <div className="campus-header">
            <span>STUDENT PORTAL / OVERVIEW</span>
            <div className="campus-avatar">E</div>
          </div>
          <div className="campus-welcome">
            <span>MONDAY, OCTOBER 12</span>
            <h3>Good morning, Alex.</h3>
            <p>Your next chapter starts here.</p>
          </div>

          <div className="campus-stats">
            <div>
              <span>COURSES</span>
              <strong>04</strong>
              <small>Currently enrolled</small>
            </div>
            <div>
              <span>PROGRESS</span>
              <strong>78%</strong>
              <div className="campus-progress">
                <span />
              </div>
            </div>
          </div>

          <div className="campus-course">
            <div className="campus-course-icon">✳</div>
            <div>
              <strong>Digital Design</strong>
              <span>Module 03 · Design systems</span>
            </div>
            <span className="campus-course-arrow">↗</span>
          </div>
        </div>
      </div>
      <span className="artwork-caption">A BETTER WAY TO LEARN</span>
    </div>
  );
}

function OrgafeArtwork() {
  return (
    <div className="project-artwork artwork-orgafe">
      <div className="orgafe-topline">
        <span>O / ORGANIC LIVING</span>
        <span>EST. 2026</span>
      </div>

      <div className="orgafe-composition">
        <div className="orgafe-leaf orgafe-leaf-one" />
        <div className="orgafe-leaf orgafe-leaf-two" />
        <div className="orgafe-leaf orgafe-leaf-three" />
        <div className="orgafe-package">
          <span>ORGAFE</span>
          <div className="orgafe-package-symbol">o</div>
          <small>GROWN WITH CARE</small>
          <i>PURE / NATURAL / SIMPLE</i>
        </div>
        <div className="orgafe-circle" />
      </div>

      <div className="orgafe-bottomline">
        <span>LESS, BUT BETTER.</span>
        <span>ORGANIC COLLECTION № 01</span>
      </div>
    </div>
  );
}

function NexoraArtwork() {
  return (
    <div className="project-artwork artwork-nexora">
      <div className="nexora-topline">
        <span>NEXORA®</span>
        <span>INTELLIGENCE, SIMPLIFIED.</span>
      </div>
      <div className="nexora-content">
        <span className="nexora-badge">A NEW WAY FORWARD</span>
        <h3>
          Make room
          <br />
          for <i>what's next.</i>
        </h3>
        <div className="nexora-orb">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="nexora-bottomline">
        <span>THINK CLEARER.</span>
        <span>BUILD BETTER.</span>
      </div>
    </div>
  );
}

function FlowboardArtwork() {
  return (
    <div className="project-artwork artwork-flowboard">
      <div className="flowboard-topline">
        <span>flowboard.</span>
        <span>WORKSPACE / 01</span>
      </div>
      <div className="flowboard-content">
        <div className="flowboard-greeting">
          <span>YOUR WORKSPACE</span>
          <h3>Make progress visible.</h3>
        </div>
        <div className="flowboard-columns">
          <div>
            <span className="flowboard-column-title">IN PROGRESS <i>03</i></span>
            <div className="flowboard-task task-purple">
              <span>DESIGN</span>
              <strong>Landing page</strong>
              <small>Due Oct 24</small>
            </div>
            <div className="flowboard-task task-blue">
              <span>PRODUCT</span>
              <strong>Prototype v2</strong>
              <small>Due Oct 27</small>
            </div>
          </div>
          <div>
            <span className="flowboard-column-title">COMPLETED <i>02</i></span>
            <div className="flowboard-task task-green">
              <span>RESEARCH</span>
              <strong>User interviews</strong>
              <small>Completed</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const artworkComponents = {
  motors: MotorsArtwork,
  campus: CampusArtwork,
  orgafe: OrgafeArtwork,
  nexora: NexoraArtwork,
  flowboard: FlowboardArtwork,
};

function ProjectVisual({ project }) {
  const Artwork = artworkComponents[project.theme];

  return (
    <div className={`pp-visual pp-visual-${project.theme}`}>
      <Artwork />
      <span className="pp-visual-note">CONCEPT PREVIEW</span>
    </div>
  );
}

function ProjectFeature({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      className={`pp-case pp-case-${project.theme}`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65 }}
    >
      <div className="pp-case-number">
        <span>SELECTED WORK</span>
        <span>{project.number} / 05</span>
      </div>

      <div className={`pp-case-layout ${index % 2 ? "pp-reverse" : ""}`}>
        <div className="pp-case-visual">
          <ProjectVisual project={project} />
        </div>

        <div className="pp-case-info">
          <div className="pp-case-meta">
            <span>{project.type}</span>
            <span>{project.year}</span>
          </div>

          <h3>{project.name}<span>.</span></h3>

          <p className="pp-case-description">{project.description}</p>

          <div className="pp-deliverables-label">SCOPE OF WORK</div>
          <div className="pp-deliverables">
            {project.services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>

          <button
            className="pp-details-toggle"
            onClick={() => setExpanded((current) => !current)}
            aria-expanded={expanded}
          >
            {expanded ? "Hide project notes" : "Explore project"}
            {expanded ? <Minus size={17} /> : <ArrowUpRight size={18} />}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                className="pp-project-notes"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>
                  This is a portfolio concept created to demonstrate the
                  creative direction, interface thinking and possible
                  experience for this type of project. It is not presented as
                  a verified client engagement.
                </p>
                <span>
                  <Sparkles size={14} />
                  Concept study · {project.category}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

export default function Project() {
  const [activeFilter, setActiveFilter] = useState("All Work");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredProjects =
    activeFilter === "All Work"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="projects-page">
      <section className="pp-hero">
        <div className="pp-hero-glow" />
        <div className="container">
          <div className="pp-hero-topline">
            <span><i /> INDEPENDENT DIGITAL CREATIVE AGENCY</span>
            <span>PORTFOLIO — 2026</span>
          </div>

          <motion.div
            className="pp-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="pp-hero-index">A COLLECTION OF IDEAS, MADE VISIBLE.</span>
            <h1>
              Selected work.
              <br />
              <span>Thoughtful by design.</span>
            </h1>
          </motion.div>

          <div className="pp-hero-bottom">
            <p>
              Every project starts with a question. These concepts explore
              how thoughtful design and purposeful technology can create
              something worth remembering.
            </p>
            <a href="#selected-work" className="pp-hero-scroll">
              DISCOVER THE WORK
              <ArrowDownRight size={17} />
            </a>
          </div>

          <div className="pp-hero-rule">
            <span>STRATEGY / DESIGN / DEVELOPMENT</span>
            <span>01 — 05 PROJECTS</span>
          </div>
        </div>
      </section>

      <section className="pp-work-section" id="selected-work">
        <div className="container">
          <div className="pp-work-intro">
            <div>
              <span className="pp-section-kicker">THE PORTFOLIO</span>
              <h2>
                Different challenges.
                <br />
                <span>Considered solutions.</span>
              </h2>
            </div>
            <p>
              A selection of creative concepts spanning digital experiences,
              product interfaces and brand identities.
            </p>
          </div>

          <div className="pp-featured-list">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectFeature
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pp-index-section" id="project-index">
        <div className="container">
          <div className="pp-index-heading">
            <div>
              <span className="pp-section-kicker">THE PROJECT INDEX</span>
              <h2>
                A little more
                <br />
                <span>to explore.</span>
              </h2>
            </div>
            <p>
              Browse the complete concept collection by discipline.
            </p>
          </div>

          <div className="pp-filter-bar" role="group" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeFilter === category ? "active" : ""}
                onClick={() => {
                  setActiveFilter(category);
                  setOpenIndex(null);
                }}
              >
                {category}
                <span>
                  {category === "All Work"
                    ? projects.length
                    : projects.filter((project) => project.category === category).length}
                </span>
              </button>
            ))}
          </div>

          <div className="pp-index-list">
            {filteredProjects.map((project) => {
              const isOpen = openIndex === project.id;

              return (
                <div className={`pp-index-item ${isOpen ? "is-open" : ""}`} key={project.id}>
                  <button
                    type="button"
                    className="pp-index-row"
                    onClick={() => setOpenIndex(isOpen ? null : project.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="pp-index-number">{project.number}</span>
                    <span className="pp-index-name">{project.name}</span>
                    <span className="pp-index-category">{project.category}</span>
                    <span className="pp-index-year">{project.year}</span>
                    <span className="pp-index-action">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="pp-index-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{project.description}</p>
                        <div className="pp-index-tags">
                          {project.services.map((service) => (
                            <span key={service}>{service}</span>
                          ))}
                        </div>
                        <a href="/contact">
                          Discuss a similar project
                          <MoveUpRight size={15} />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="pp-index-footnote">
            <span>END OF INDEX</span>
            <span>MORE IDEAS ARE ALWAYS IN PROGRESS <Sparkles size={13} /></span>
          </div>
        </div>
      </section>

      <section className="pp-closing">
        <div className="container">
          <div className="pp-closing-inner">
            <span className="pp-section-kicker">HAVE SOMETHING IN MIND?</span>
            <h2>
              Your project could
              <br />
              <span>be the next story.</span>
            </h2>
            <p>
              Have a challenge, an idea or just a starting point? Let's explore
              what we can make together.
            </p>
            <a href="/contact" className="pp-closing-link">
              Let's talk about your project
              <ArrowUpRight size={19} />
            </a>
            <div className="pp-closing-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
