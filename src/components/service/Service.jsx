
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Palette,
  Layers3,
  TrendingUp,
  PenTool,
  Blocks,
  Check,
  Sparkles,
} from "lucide-react";

import "../../css/service/Service.css";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Fast, responsive and scalable websites engineered to turn your ideas into powerful digital experiences.",
    icon: Code2,
    tags: ["React", "Frontend", "Backend"],
    color: "purple",
  },
  {
    number: "02",
    title: "UI / UX Design",
    description:
      "Intuitive interfaces and thoughtful user journeys that make every interaction feel effortless.",
    icon: Layers3,
    tags: ["Wireframes", "Prototyping", "Research"],
    color: "blue",
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "Distinctive visual identities that communicate your values and make your business recognizable.",
    icon: Palette,
    tags: ["Logo Systems", "Visual Design", "Guidelines"],
    color: "pink",
  },
  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Data-informed digital campaigns designed to increase visibility, attract audiences and support growth.",
    icon: TrendingUp,
    tags: ["SEO", "Campaigns", "Analytics"],
    color: "orange",
  },
  {
    number: "05",
    title: "Creative Design",
    description:
      "Purposeful creative assets for digital campaigns, social media and compelling brand storytelling.",
    icon: PenTool,
    tags: ["Social Media", "Graphics", "Campaigns"],
    color: "green",
  },
  {
    number: "06",
    title: "Digital Solutions",
    description:
      "Practical digital products and custom tools that simplify workflows and solve real business problems.",
    icon: Blocks,
    tags: ["Web Apps", "Automation", "Integration"],
    color: "cyan",
  },
];

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We learn about your business, audience and goals.",
  },
  {
    number: "02",
    title: "Strategize",
    text: "We create a clear direction and actionable plan.",
  },
  {
    number: "03",
    title: "Create",
    text: "We design, build and refine your solution.",
  },
  {
    number: "04",
    title: "Launch",
    text: "We deliver the result and identify next steps.",
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <section className="sp-hero">
        <div className="sp-hero-grid" aria-hidden="true" />
        <div className="sp-hero-glow sp-glow-one" />
        <div className="sp-hero-glow sp-glow-two" />

        <div className="container sp-container">
          <motion.div
            className="sp-hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="sp-eyebrow">
              <span className="sp-eyebrow-dot" />
              WHAT WE DO
            </div>

            <h1>
              Ideas into impact.
              <br />
              <span>Crafted with purpose.</span>
            </h1>

            <p className="sp-hero-description">
              We combine strategy, design and technology to create digital
              experiences that help ambitious businesses move forward.
            </p>

            <div className="sp-hero-actions">
              <a href="#all-services" className="sp-primary-button">
                Explore our services
                <ArrowUpRight size={18} />
              </a>

              <a href="#sp-process" className="sp-text-button">
                Our approach
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="sp-hero-meta">
              <span>STRATEGY</span>
              <i />
              <span>DESIGN</span>
              <i />
              <span>TECHNOLOGY</span>
              <i />
              <span>GROWTH</span>
            </div>
          </motion.div>

          <motion.div
            className="sp-hero-art"
            initial={{ opacity: 0, scale: 0.88, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="sp-art-orbit sp-orbit-one" />
            <div className="sp-art-orbit sp-orbit-two" />
            <div className="sp-art-orbit sp-orbit-three" />

            <div className="sp-art-core">
              <Sparkles size={45} strokeWidth={1.2} />
            </div>

            <div className="sp-art-chip sp-chip-top">
              <Code2 size={17} />
              <span>Technology</span>
            </div>

            <div className="sp-art-chip sp-chip-left">
              <Palette size={17} />
              <span>Creativity</span>
            </div>

            <div className="sp-art-chip sp-chip-right">
              <TrendingUp size={17} />
              <span>Growth</span>
            </div>

            <span className="sp-art-star sp-star-one">✳</span>
            <span className="sp-art-star sp-star-two">✦</span>
            <span className="sp-art-caption">BUILT AROUND YOUR VISION</span>
          </motion.div>
        </div>

        <a href="#all-services" className="sp-scroll-hint">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} />
        </a>
      </section>

      <section className="sp-services-section" id="all-services">
        <div className="container">
          <motion.div
            className="sp-section-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="sp-eyebrow">
                <span className="sp-eyebrow-dot" />
                OUR EXPERTISE
              </div>
              <h2>
                Everything you need.
                <br />
                <span>Nothing you don't.</span>
              </h2>
            </div>

            <p>
              A connected set of creative and technical services, thoughtfully
              designed to work together around your goals.
            </p>
          </motion.div>

          <div className="row g-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div className="col-lg-4 col-md-6" key={service.number}>
                  <motion.article
                    className={`sp-service-card sp-${service.color}`}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  >
                    <div className="sp-card-top">
                      <div className="sp-service-icon">
                        <Icon size={24} strokeWidth={1.6} />
                      </div>
                      <span className="sp-card-number">
                        / {service.number}
                      </span>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <div className="sp-service-tags">
                      {service.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <a
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="sp-card-link"
                      aria-label={`Discuss ${service.title}`}
                    >
                      Discuss this service
                      <ArrowUpRight size={17} />
                    </a>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sp-process-section" id="sp-process">
        <div className="container">
          <div className="sp-process-heading">
            <div className="sp-eyebrow">
              <span className="sp-eyebrow-dot" />
              HOW WE WORK
            </div>
            <h2>
              Clear thinking.
              <br />
              <span>Better outcomes.</span>
            </h2>
            <p>
              Great work starts with understanding the problem. Our process
              keeps collaboration clear from the first conversation to launch.
            </p>
          </div>

          <div className="sp-process-grid">
            {steps.map((step, index) => (
              <motion.div
                className="sp-process-step"
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <div className="sp-step-number">{step.number}</div>
                <div className="sp-step-line" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-cta-section">
        <div className="container">
          <motion.div
            className="sp-cta-box"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sp-cta-glow" />
            <div className="sp-cta-content">
              <div className="sp-eyebrow">
                <span className="sp-eyebrow-dot" />
                LET'S BUILD SOMETHING
              </div>
              <h2>
                Your next big idea
                <br />
                <span>starts with a conversation.</span>
              </h2>
              <p>
                Tell us what you're working on. We'll help you figure out the
                right next step.
              </p>
            </div>

            <a href="/contact" className="sp-primary-button">
              Start a project
              <ArrowUpRight size={18} />
            </a>

            <div className="sp-cta-decoration" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
