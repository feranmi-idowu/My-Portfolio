import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "NCCF Ikom Zone",
      description: "A responsive informational site for the Nigeria Christian Corpers’ Fellowship (Ikom Zone), built with React to deliver fellowship details, contacts, and community presence.",
      stack: ["React", "JavaScript", "CSS", "HTML5"],
      live: "https://nccf-ikom-zone.vercel.app/",
      github: "https://github.com/feranmi-idowu/NCCF-IkomZone",
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
      live: "https://pigggame.vercel.app/" ,
      github: "https://github.com/feranmi-idowu/budgety",
    },
    {
      id: 4,
      title: "Keeper App",
      description: "KeeperApp is a React-based note-taking application that demonstrates core frontend concepts including component-driven architecture, state management, controlled form inputs, and dynamic list rendering.",
      stack: ["React","JavaScript", "HTML5", "CSS"],
      live: "https://note-keeper-liart-eight.vercel.app/" ,
      github: "https://github.com/feranmi-idowu/NoteKeeper",
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid"
          
        >
          {projects.map((project) => (
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-link">
                <motion.a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }} >Github link <Github size={18}/></motion.a>
              </div>
              <div className="project-link">
              <motion.a href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }} 
              >Click to view live project <ExternalLink size={18}/></motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
