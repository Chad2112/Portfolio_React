import headerImg from "../../Assets/header.jpg";
import CvImg from "../../Assets/CvBanner.jpg";
import ProfileImg from "../../Assets/Profile.jpg";
import ContactImg from "../../Assets/contact2.jpg";
import projetsImg from "../../Assets/projets.jpg";
import { useState, useEffect } from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
function Header() {
  const [HomeActive, setHome] = useState(false);
  const [contactActive, setContact] = useState(false);
  const [projetsActive, setProjets] = useState(false);

  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/Portfolio_React") {
      setHome(true);
      setContact(false);
      setProjets(false);
    } else if (location === "/Portfolio_React/Contact") {
      setContact(true);
      setHome(false);
      setProjets(false);
    } else if (location === "/Portfolio_React/Projets") {
      setProjets(true);
      setHome(false);
      setContact(false);
    } else {
      setHome(false);
      setContact(false);
      setProjets(false);
    }
  }, [location]);
  return HomeActive ? (
    <header className="header__home">
      <img className="header__img" src={headerImg} alt="Banner" />
    </header>
  ) : contactActive ? (
    <header className="header">
      <h2 className="header__name--contact">Contact</h2>
      <img className="header__img" src={ContactImg} alt="Banner" />
    </header>
  ) : projetsActive ? (
    <header className="header">
      <h1 className="header__name--projets">Projets</h1>
      <img className="header__img" style={{ objectPosition: "center" }} src={projetsImg} alt="Banner" />
    </header>
  ) : (
    <header className="header">
      <h1 className="header__name">Andersson Chad</h1>
      <img className="header__img" style={{ objectPosition: "center" }} src={CvImg} alt="Banner" />

      <div className="header__content__profile">
        <img className="header__profile" src={ProfileImg} alt="Profile"></img>
      </div>
    </header>
  );
}

export default Header;
