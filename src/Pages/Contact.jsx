import "./index.css";
import Formulaire from "../Components/Formulaire/Formulaire";
import ContactMods from "../Components/Formulaire/ContactMod";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__item">
        <Formulaire />
        <ContactMods />
      </div>
    </div>
  );
}

export default Contact;
