import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download, Code, CodeXml } from "lucide-react";

/* 👉 Animation configuration */
const mobileMenu = {
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3 }
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

function Navbar() {
  // This controls whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // These are the navigation links
  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="navbar">

      {/* TOP BAR */}
      <div className="navbar-inner">

        {/* LOGO */}
        <span className="logo"><Code size={25} />INTERFERONS<CodeXml size={28}/></span>

        {/* DESKTOP NAVIGATION */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
            >
              {item}
            </a>
          ))}
          <a
            href="/Resume.pdf"
            download="Idowu-Feranmi-Resume.pdf"
            className="nav-link"
          >
            Resume <Download size={16} />
          </a>
        </nav>
        
        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <motion.nav
        className="nav-mobile"
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={mobileMenu}
      >
        {navItems.map((item) => ( //navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <a
            href="/Resume.pdf"
            download="Idowu-Feranmi-Resume.pdf"
            className="nav-mobile-link"
          >
            Resume <Download size={16} />
          </a>
      </motion.nav>

    </header>
  );
}

export default Navbar;