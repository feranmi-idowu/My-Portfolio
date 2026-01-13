import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about">
      <motion.h2
    className="about-title"
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}
  >
    About Me
  </motion.h2>
      <p className="about-text">
        I'm a software developer focused on building reliable, scalable, and
        user-friendly applications. I value strong fundamentals, clean code,
        and timeless engineering principles.
      </p>
    </section>
  );
}

export default About;