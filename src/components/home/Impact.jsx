
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Compass,
  Layers3,
  Code2,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import "./Impact.css";

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, audience, goals, and the problem worth solving.",
    icon: Compass,
    tag: "STRATEGY",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn ideas into thoughtful visuals and experiences with a clear purpose.",
    icon: Layers3,
    tag: "CREATIVITY",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We bring the experience to life with clean code, modern technology, and care.",
    icon: Code2,
    tag: "TECHNOLOGY",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We test, improve, and polish the details so the final product feels right.",
    icon: RefreshCw,
    tag: "QUALITY",
  },
];

export default function Impact() {
  return (
    <section className="nova-impact" id="approach">
      <div className="container">
        <motion.div
          className="nova-impact-heading row align-items-end"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="col-lg-7">
            <div className="nova-impact-eyebrow">
              <span />
              HOW WE MAKE IT HAPPEN
            </div>

            <h2>
              Good work doesn't
              <br />
              happen <span>by accident.</span>
            </h2>
          </div>

          <div className="col-lg-5">
            <p className="nova-impact-intro">
              Great digital experiences are built with intention. We bring
              strategy, design, and technology together in one connected
              process.
            </p>
          </div>
        </motion.div>

        <div className="nova-impact-process">
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="nova-process-card"
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
              >
                <div className="nova-process-card-top">
                  <span className="nova-process-number">
                    / {item.number}
                  </span>

                  <span className="nova-process-icon">
                    <Icon size={21} strokeWidth={1.6} />
                  </span>
                </div>

                <div className="nova-process-card-content">
                  <span className="nova-process-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="nova-process-card-bottom">
                  <span>STEP {item.number}</span>
                  <ArrowDownRight size={19} strokeWidth={1.6} />
                </div>

                <span className="nova-process-card-glow" />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="nova-impact-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className="nova-impact-bottom-message">
            <span className="nova-impact-sparkle">
              <Sparkles size={19} />
            </span>

            <div>
              <span className="nova-impact-bottom-label">
                THE NOVA APPROACH
              </span>
              <p>Thoughtful from the first idea to the final pixel.</p>
            </div>
          </div>

          <a href="#contact" className="nova-impact-cta">
            Let's build something <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
