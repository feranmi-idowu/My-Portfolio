import { Github, Linkedin, Mail } from "lucide-react";


function Contact() {
return (
<section id="contact" className="contact">
  <h2 className="contact-title">Contact</h2>

  <div className="contact-links">
    <a href="#" className="contact-link"><Github /></a>
    <a href="#" className="contact-link"><Linkedin /></a>
    <a href="#" className="contact-link"><Mail /></a>
  </div>
</section>
);
}

export default Contact;