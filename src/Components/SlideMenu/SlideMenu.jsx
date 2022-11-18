import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./SlideMenu.css";
import { Link } from "react-router-dom";
function SlideMenu() {
  const [open, setOpen] = useState(false);

  return open ? (
    <div className="slideMenu">
      <div className="slideMenu__blur"></div>
      <div className="slideMenu__box__text">
        <button className="slideMenu__box__close" onClick={() => setOpen(false)}>
          Fermer
        </button>
      </div>
      <div className="slideMenu__content">
        <Link className="slideMenu__content__list__link" to="/">
          Home
        </Link>
        <Link className="slideMenu__content__list__link" to="/Projets">
          Projets
        </Link>
        <Link className="slideMenu__content__list__link" to="/CV">
          Curriculum vitae
        </Link>
        <Link className="slideMenu__content__list__link" to="/Contact">
          Contact
        </Link>
      </div>
    </div>
  ) : (
    <div className="slideMenu">
      <div className="slideMenu__box__icon">
        <button className="slideMenu__box__open" onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
}

export default SlideMenu;
