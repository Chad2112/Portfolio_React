import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./SlideMenu.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function SlideMenu() {
  const [open, setOpen] = useState(false);
  const [CVActive, setCV] = useState(false);

  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/CV") {
      setCV(true);
    } else {
      setCV(false);
    }
  }, [location]);

  return CVActive ? (
    open ? (
      <nav className="slideMenu">
        <div className="slideMenu__blur"></div>
        <div className="slideMenu__box__text"></div>
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
        <button className="slideMenu__box__close" onClick={() => setOpen(false)}>
          <FontAwesomeIcon className="Arrow__left" icon={faCircleArrowLeft} />
        </button>
      </nav>
    ) : (
      <div className="slideMenu">
        <div className="slideMenu__box__icon">
          <button className="slideMenu__box__open" onClick={() => setOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    )
  ) : (
    <div className="slideMenu__content--home">
      <Link className="slideMenu__content__list__link--home" to="/">
        Home
      </Link>
      <Link className="slideMenu__content__list__link--home" to="/Projets">
        Projets
      </Link>
      <Link className="slideMenu__content__list__link--home" to="/CV">
        Curriculum vitae
      </Link>
      <Link className="slideMenu__content__list__link--home" to="/Contact">
        Contact
      </Link>
    </div>
  );
}

export default SlideMenu;
