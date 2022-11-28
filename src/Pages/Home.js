import "./index.css";
import "../Components/SlideMenu/SlideMenu.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="Home">
      <div className="slideMenu__content--home">
        <Link className="slideMenu__content__list__link--home" to="/Portfolio_React">
          Acceuil
        </Link>
        <Link className="slideMenu__content__list__link--home" to="/Portfolio_React/Projets">
          Projets
        </Link>
        <Link className="slideMenu__content__list__link--home" to="/Portfolio_React/CV">
          Curriculum vitae
        </Link>
        <Link className="slideMenu__content__list__link--home" to="/Portfolio_React/Contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Home;
