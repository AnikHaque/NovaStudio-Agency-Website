
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  AtSign,
  CheckCircle2,
  Clock3,
  Globe2,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import "../../css/home/Contact.css";

const projectTypes = [
  "Website Development",
  "UI / UX Design",
  "Brand Identity",
  "Digital Marketing",
  "Custom Digital Solution",
  "Something Else",
];

const budgetOptions = [
  "Not decided yet",
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $3,000",
  "$3,000+",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend demonstration only.
    // Connect this handler to your backend API later.
    console.log("Project inquiry:", formData);
    setSubmitted(true);
  };

  return (
    <section className="nova-contact" id="contact">
      <div className="nova-contact-orb nova-contact-orb-one" />
      <div className="nova-contact-orb nova-contact-orb-two" />

      <div className="container">
        <motion.div
          className="nova-contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="nova-contact-eyebrow">
            <span />
            HAVE SOMETHING IN MIND?
          </div>

          <h2>
            Let's make your
            <br />
            next idea <span>happen.</span>
          </h2>

          <p>
            Have a project, a big idea, or just a question? Tell us a little
            about it. We'd love to hear what you're working on.
          </p>
        </motion.div>

        <div className="row g-4 g-xl-5 nova-contact-layout">
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <div className="nova-contact-info">
              <div className="nova-contact-info-top">
                <span className="nova-contact-info-kicker">
                  <Sparkles size={15} />
                  LET'S CONNECT
                </span>

                <div className="nova-contact-info-art">
                  <div className="nova-contact-art-ring nova-ring-one" />
                  <div className="nova-contact-art-ring nova-ring-two" />
                  <div className="nova-contact-art-ring nova-ring-three" />
                  <div className="nova-contact-art-core">
                    <MessageCircle size={29} strokeWidth={1.4} />
                  </div>
                  <span className="nova-contact-art-star">✳</span>
                  <span className="nova-contact-art-dot" />
                </div>

                <h3>
                  Good things
                  <br />
                  start with a <span>conversation.</span>
                </h3>

                <p>
                  No complicated process. Just a friendly conversation about
                  what you need and how we can help.
                </p>
              </div>

              <div className="nova-contact-details">
                <a
                  className="nova-contact-detail"
                  href="mailto:hello@novastudio.com"
                >
                  <span className="nova-contact-detail-icon">
                    <AtSign size={19} />
                  </span>

                  <span className="nova-contact-detail-copy">
                    <small>EMAIL US</small>
                    <strong>hello@novastudio.com</strong>
                  </span>

                  <ArrowUpRight
                    className="nova-contact-detail-arrow"
                    size={18}
                  />
                </a>

                <div className="nova-contact-detail">
                  <span className="nova-contact-detail-icon">
                    <Clock3 size={19} />
                  </span>

                  <span className="nova-contact-detail-copy">
                    <small>OUR APPROACH</small>
                    <strong>Thoughtful. Clear. Collaborative.</strong>
                  </span>
                </div>

                <div className="nova-contact-detail">
                  <span className="nova-contact-detail-icon">
                    <Globe2 size={19} />
                  </span>

                  <span className="nova-contact-detail-copy">
                    <small>WORKING EVERYWHERE</small>
                    <strong>Ideas have no borders.</strong>
                  </span>
                </div>
              </div>

              <div className="nova-contact-note">
                <span className="nova-contact-note-dot" />
                <span>Every great project starts somewhere.</span>
                <ArrowDownRight size={17} />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="nova-contact-form-card">
              <div className="nova-contact-form-heading">
                <div>
                  <span className="nova-contact-form-step">
                    <span>01</span> / START A PROJECT
                  </span>
                  <h3>Tell us about your idea.</h3>
                </div>

                <span className="nova-contact-form-icon">
                  <Send size={20} />
                </span>
              </div>

              {submitted ? (
                <motion.div
                  className="nova-contact-success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="nova-contact-success-icon">
                    <CheckCircle2 size={34} />
                  </span>

                  <h4>Looking good!</h4>
                  <p>
                    Your form passed the frontend check. The form is not
                    connected to an email service or backend yet, so your
                    inquiry has not actually been sent.
                  </p>

                  <button
                    type="button"
                    className="nova-contact-reset"
                    onClick={() => {
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "",
                        budget: "",
                        message: "",
                      });
                      setSubmitted(false);
                    }}
                  >
                    Start another inquiry <ArrowUpRight size={16} />
                  </button>
                </motion.div>
              ) : (
                <form
                  className="nova-contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="contact-name">
                        Your name <span>*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="contact-email">
                        Email address <span>*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="contact-project">
                        What do you need? <span>*</span>
                      </label>
                      <select
                        id="contact-project"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        {projectTypes.map((type) => (
                          <option value={type} key={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="contact-budget">
                        Estimated budget
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Choose a range
                        </option>
                        {budgetOptions.map((budget) => (
                          <option value={budget} key={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <label htmlFor="contact-message">
                        Tell us a little more <span>*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        placeholder="What's the idea? What would you like to achieve?"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="nova-contact-form-bottom">
                    <p>
                      <span>*</span> Required fields
                    </p>

                    <button type="submit" className="nova-contact-submit">
                      Review inquiry
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                  <div className="nova-contact-privacy">
                    <span />
                    Your project details are used for this inquiry only.
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
