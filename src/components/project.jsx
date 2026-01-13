import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "NCCF Ikom Zone",
      description: "A responsive informational site for the Nigeria Christian Corpers’ Fellowship (Ikom Zone), built with React to deliver fellowship details, contacts, and community presence.",
      stack: ["React", "JavaScript", "CSS", "HTML"],
      live: "https://nccf-ikom-zone.vercel.app/",
    },
    {
    key: 2,
    title: "Budget Tracker",
    description: "A web app for tracking income and expenses with persistent state.",
    stack: ["React", "CSS", "LocalStorage"],
    live: "https://budgety-alpha.vercel.app/",
    github: "https://github.com/feranmi-idowu/budgety",
  },
    {
      id: 3,
      title: "Pig Game",
      description: "A two-player dice game built with vanilla JavaScript, focusing on game logic, state management, and DOM manipulation.",
      stack: ["JavaScript", "HTML", "CSS"],
      live: "https://pigggame.vercel.app/",
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
              <div className="stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <small>Click to view live project →</small>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
