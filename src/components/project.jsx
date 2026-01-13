import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "NCCF Ikom Zone",
      description: "Official website for NCCF Ikom Zone, a Christian religious organization.",
      link: "https://nccf-ikom-zone.vercel.app/",
    },
    {
      id: 2,
      title: "Bugetify",
      description: "website for calculating and keeping track of income and expenses.",
      link: "https://budgety-alpha.vercel.app/",
    },
    {
      id: 3,
      title: "Pig Game",
      description: "website Application game",
      link: "https://pigggame.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="project-card"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
