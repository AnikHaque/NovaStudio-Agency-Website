
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe,
  MoveUpRight,
} from "lucide-react";
import "../../css/home/Footer.css";

const footerLinks = {
  Explore: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "About Us", href: "#about" },
  ],
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "UI / UX Design", href: "#services" },
    { label: "Brand Identity", href: "#services" },
    { label: "Digital Solutions", href: "#services" },
  ],
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: Globe,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Globe,
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: Code2,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="nova-footer" id="footer">
      <div className="container">
        {/* CTA banner */}
        <motion.div
          className="nova-footer-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="nova-footer-cta-glow" />

          <div className="nova-footer-cta-content">
            <span className="nova-footer-cta-eyebrow">
              <span />
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h2>
              Have an idea?
              <br />
              <span>Let's give it life.</span>
            </h2>

            <p>
              Let's turn your next big idea into something people remember.
            </p>
          </div>

          <a href="#contact" className="nova-footer-cta-button">
            Start a Project
            <ArrowUpRight size={19} />
          </a>

          <div
            className="nova-footer-cta-decoration"
            aria-hidden="true"
          >
            <span className="nova-footer-orbit orbit-a" />
            <span className="nova-footer-orbit orbit-b" />
            <span className="nova-footer-orbit orbit-c" />
            <span className="nova-footer-orbit-center">N</span>
          </div>
        </motion.div>

        {/* Main footer */}
        <div className="nova-footer-main row">
          {/* Brand information */}
          <div className="col-lg-4 col-md-12">
            <a href="#home" className="nova-footer-brand">
              <span className="nova-footer-brand-mark">N</span>

              <span className="nova-footer-brand-name">
                NOVA<span>STUDIO</span>
              </span>
            </a>

            <p className="nova-footer-description">
              An independent digital creative agency concept bringing
              thoughtful design, modern technology, and meaningful ideas
              together.
            </p>

            <a href="#contact" className="nova-footer-email">
              Let's talk about your idea
              <ArrowRight size={16} />
            </a>

            <div className="nova-footer-socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  href={href}
                  key={label}
                  aria-label={label}
                  title={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={17} strokeWidth={1.7} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore links */}
          <div className="col-lg-2 col-6 nova-footer-link-column">
            <h3>Explore</h3>

            <ul>
              {footerLinks.Explore.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    {link.label}
                    <MoveUpRight size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className="col-lg-3 col-6 nova-footer-link-column">
            <h3>What We Do</h3>

            <ul>
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    {link.label}
                    <MoveUpRight size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-12 nova-footer-contact-column">
            <h3>Get in Touch</h3>

            <p>
              Have a project in mind? We'd love to hear what you're planning.
            </p>

            <a
              href="mailto:hello@novastudio.com"
              className="nova-footer-contact-link"
            >
              hello@novastudio.com
              <ArrowUpRight size={15} />
            </a>

            <a href="#contact" className="nova-footer-contact-button">
              Tell Us About It
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="nova-footer-bottom">
          <p>
            © {currentYear} <span>NOVA STUDIO</span>. All rights reserved.
          </p>

          <div className="nova-footer-bottom-center">
            <span className="nova-footer-status-dot" />
            <span>MADE WITH INTENTION</span>
          </div>

          <a href="#home" className="nova-footer-back-top">
            Back to top
            <span>
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
