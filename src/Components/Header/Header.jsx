import headerImg from "../../Assets/header5.jpg";
import CvImg from "../../Assets/CvBanner.jpg";
import ProfileImg from "../../Assets/Profile.jpg";
import { useState, useEffect } from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
function Header() {
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
    <header className="header">
      <h1 className="header__name">Andersson Chad</h1>
      <img className="header__img" style={{ objectPosition: "center" }} src={CvImg} alt="Banner" />

      <div className="header__content__profile">
        <img className="header__profile" src={ProfileImg} alt="Profile"></img>
      </div>
    </header>
  ) : (
    <header className="header__home">
      <img className="header__img" src={headerImg} alt="Banner" />
    </header>
  );
}

export default Header;
