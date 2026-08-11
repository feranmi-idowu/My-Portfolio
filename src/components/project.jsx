import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Images from "./images";

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
const resentProjects = [
  {
      id: 1,
      image: Images.invoice,
      alt: "invoiceGen",
      title: "InvoiceGen",
      description: "A responsive invoice generation app built with React. Users can fill in client details, add line items with quantities and unit prices, and instantly generate a professional invoice — all in the browser ",
      stack: ["React (components, useState)","JavaScript", "jsPDF" , "HTML5", "CSS"],
      live: "http://invoice-xi-one.vercel.app/" ,
      github: "https://github.com/feranmi-idowu/Invoice",
  },


  {
      id: 2,
      image: Images.chuks,
      alt: "ChucksKitchen",
      title: "Chuks Kitchen",
      description: "Chuks- kitchen is a food ordering web application that allows users to browse meals, add items to their cart, and place orders through a simple user-friendly interface. ",
      stack: ["React","JavaScript", "HTML5", "CSS"],
      live: "https://chuks-truemind-mwht.vercel.app/" ,
      github: "https://github.com/feranmi-idowu/Chuks-truemind",
      note: "Available only on desktop, mobile screen next",
  },
    
]
  return (
    <section id="projects"className="projects">
      <div className="container" >
        <h2>Most resent Projects</h2>
        <div className="projects-grid">
          {resentProjects.map((resentprojects) => (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <h3>{resentprojects.title}</h3>

              <div className="project-layout">

                <div className= "project-img">
                  <img src={resentprojects.image} alt={resentprojects.alt} />
                </div>
                
                <div className="project-content">
                  <p>{resentprojects.description}</p>
                  <div className="stack">
                    {resentprojects.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-link">
                    <motion.a 
                      href={resentprojects.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}> Github link <Github size={18}/>
                    </motion.a>
                  </div>
                  <div className="project-link">
                    <motion.a href={resentprojects.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}> Click to view live project <ExternalLink size={18}/>
                    </motion.a>
                  </div>
                </div>
                </div>

            </motion.div>
          ))}
        </div>
      </div>
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <h3>{project.title}</h3>
              <div className="project-layout">
                <div className= "project-img">
                  <img src={project.image} alt={project.alt} />
                </div>
                <div className="project-content">
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
                      transition={{ type: "spring", stiffness: 300 }}> Github link <Github size={18}/>
                    </motion.a>
                  </div>
                  <div className="project-link">
                    <motion.a href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}> Click to view live project <ExternalLink size={18}/>
                    </motion.a>
                  </div>
                </div>
                </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
