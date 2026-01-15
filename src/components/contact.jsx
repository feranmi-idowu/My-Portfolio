import { Github, Linkedin, Mail } from "lucide-react";

const contacts = {
  Github: "https://github.com/feranmi-idowu",
  Linkedin: "https://www.linkedin.com/in/idowu-feranmi",
  Mail: "mailto:idowuferanmi4@gmail.com",
};

function Contact() {
return (
<section id="contact" className="contact">
  <h2 className="contact-title">Contact</h2>

  <div className="contact-links">
    <a  href={contacts.Github}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"><Github /></a>
    <a  href={contacts.Linkedin} 
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"><Linkedin /></a>
    <a  href={contacts.Mail} 
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"><Mail /></a>
  </div>
</section>
);
}

export default Contact;