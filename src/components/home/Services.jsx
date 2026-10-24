
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Fingerprint,
  Layers3,
  Megaphone,
  MousePointer2,
  Palette,
} from "lucide-react";
import "../../css/home/Services.css";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Fast, responsive and scalable websites built to turn your ideas into meaningful digital experiences.",
    icon: Code2,
    tags: ["React", "Frontend", "Backend"],
    accent: "violet",
  },
  {
    number: "02",
    title: "UI / UX Design",
    description:
      "Thoughtful interfaces and intuitive user journeys that make complex digital products feel effortless.",
    icon: MousePointer2,
    tags: ["Wireframes", "Prototypes", "Research"],
    accent: "blue",
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "A distinctive visual language that communicates your values and makes your business recognizable.",
    icon: Fingerprint,
    tags: ["Visual Identity", "Typography", "Guidelines"],
    accent: "pink",
  },
  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns designed to connect your business with the right audience.",
    icon: Megaphone,
    tags: ["Campaigns", "Content", "Strategy"],
    accent: "orange",
  },
  {
    number: "05",
    title: "Creative Design",
    description:
      "Purposeful digital visuals that bring your message to life across platforms and touchpoints.",
    icon: Palette,
    tags: ["Social Media", "Graphics", "Art Direction"],
    accent: "green",
  },
  {
    number: "06",
    title: "Digital Solutions",
    description:
      "Connected tools, smart workflows and tailored solutions to help your business work better.",
    icon: Layers3,
    tags: ["Automation", "Integration", "Consulting"],
    accent: "cyan",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section className="nova-services section-space" id="services">
      <div className="container">
        <motion.div
          className="nova-services-heading row align-items-end"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="col-lg-7">
            <div className="nova-section-eyebrow">
              <span className="nova-section-eyebrow-dot" />
              WHAT WE DO
            </div>

            <h2 className="nova-services-title">
              Good ideas deserve
              <br />
              <span>great execution.</span>
            </h2>
          </div>

          <div className="col-lg-5">
            <div className="nova-services-intro">
              <p>
                From the first spark of an idea to the final digital
                experience, we bring strategy, design and technology together.
              </p>

              <a href="#contact" className="nova-services-intro-link">
                Have a project in mind?
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="nova-services-grid row g-0">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                className="col-md-6 col-xl-4 nova-service-column"
                key={service.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.09,
                  ease: "easeOut",
                }}
              >
                <article
                  className={`nova-service-card nova-service-${service.accent}`}
                >
                  <div className="nova-service-card-top">
                    <span className="nova-service-number">
                      {service.number}
                    </span>

                    <span className="nova-service-icon">
                      <Icon size={23} strokeWidth={1.6} />
                    </span>

                    <ArrowUpRight
                      className="nova-service-arrow"
                      size={21}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="nova-service-card-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <div className="nova-service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="nova-service-card-glow" />
                </article>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="nova-services-bottom"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <div className="nova-services-bottom-copy">
            <span className="nova-services-bottom-mark">
              <ArrowDownRight size={19} />
            </span>
            <span>
              <strong>Something more specific?</strong>
              <small>Let's build a solution around your needs.</small>
            </span>
          </div>

          <a href="#contact" className="nova-services-bottom-link">
            Discuss your project <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
