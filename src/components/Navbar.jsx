import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "../css/Navbar.css";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "#work" },
  { label: "About Us", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="nova-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <nav className="navbar navbar-expand-lg nova-navbar">
        <div className="container nova-navbar-container">
          {/* Brand */}
          <a
            href="#home"
            className="navbar-brand nova-logo"
            onClick={closeMenu}
          >
            <span className="nova-logo-icon">N</span>

            <span className="nova-logo-text">
              NOVA<span>STUDIO</span>
            </span>
          </a>

          {/* Mobile Toggle */}
          <button
            className="nova-menu-toggle d-lg-none"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          {/* Navigation */}
          <div className="nova-desktop-links d-none d-lg-flex">
            {navLinks.map((link) => (
              <a className="nova-nav-link" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="nova-nav-cta d-none d-lg-inline-flex"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nova-mobile-menu d-lg-none"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container nova-mobile-menu-inner">
              {navLinks.map((link, index) => (
                <motion.a
                  href={link.href}
                  className="nova-mobile-link"
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={18} />
                </motion.a>
              ))}

              <a
                href="#contact"
                className="nova-nav-cta nova-mobile-cta"
                onClick={closeMenu}
              >
                Start a Project
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}