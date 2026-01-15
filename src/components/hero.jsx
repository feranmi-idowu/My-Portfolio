import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="hero-title">
            Hi, I'm <span className="highlight">Idowu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0}}
          transition={{ delay: 1, duration: 1.2 }}
          className="hero-subtitle">
            Frontend / Full-Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="hero-animated-text">
            I build clean, responsive, production-ready web apps.
        </motion.p>
  </div>
</section>

  );
}

export default Hero;