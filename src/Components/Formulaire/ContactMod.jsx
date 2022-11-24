import "./ContactMod.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ContactMods() {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content__contact">
          <FontAwesomeIcon className="card__content__icon" icon={faSquareEnvelope} />
          <div className="card__content__mail">
            <span>AdresseMail : </span>
            <a href="mailto:andersson.chad@gmail.com"> andersson.chad@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="card__content">
        <div className="card__content__contact">
          <FontAwesomeIcon className="card__content__icon" icon={faPhone} />
          <div className="card__content__tel">
            <span>Telephone : </span>
            <a href="tel:+33601756466">06 01 75 64 66</a>
          </div>
        </div>
      </div>
      <div className="card__content">
        <div className="card__content__contact">
          <FontAwesomeIcon className="card__content__icon" icon={faLinkedin} />
          <div className="card__content__tel">
            <span>Linkedin : </span>
            <a href="https://www.linkedin.com/in/chad-andersson-b92185172/">Vers le profil de Chad</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMods;
