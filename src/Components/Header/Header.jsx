import headerImg from "../../Assets/header.jpg";
import CvImg from "../../Assets/CvBanner.jpg";
import ProfileImg from "../../Assets/Profile.jpg";
import ContactImg from "../../Assets/contact2.jpg";
import { useState, useEffect } from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
function Header() {
  const [HomeActive, setHome] = useState(false);
  const [contactActive, setContact] = useState(false);

  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/") {
      setHome(true);
      setContact(false);
    } else if (location === "/Contact") {
      setContact(true);
      setHome(false);
    } else {
      setHome(false);
      setContact(false);
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
