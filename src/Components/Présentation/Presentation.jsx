import "./Presentation.css";
import HtmlImg from "../../Assets/HTML.jpg";
import CssImg from "../../Assets/CSS.jpg";
import SassImg from "../../Assets/SASS.jpg";
import JSImg from "../../Assets/Javascript.jpg";
import ReactImg from "../../Assets/React.jpg";
function Presentation() {
  return (
    <div className="Presentation">
      <h1 className="Presentation__title">Presentation</h1>
      <p className="Presentation__text">
        Bonjour, je m'appelle Chad Andersson, j'ai été former au sein de l'organisme de formation OpenClassRoom ou j'ai obtenu mon diplôme, vous trouverez sur votre gauche un
        bouton menu qui vous guidera vers les différentes pages de mon portfolio, vous y trouverez notamment mon Curriculum vitae, les différents projets que j'ai pu réalisés
        avec leur language respectif ainsi qu'une partie contact pour pouvoir me contacter en cas de besoin.
      </p>
      <h2 className="Presentation__title">Compétences</h2>
      <p className="Presentation__text">Voici une liste exaustive des languages que j'utilise actuellement :</p>
      <div className="Presentation__content__img">
        <img src={HtmlImg} alt="LogoHtml"></img>
        <img src={CssImg} alt="LogoCss"></img>
        <img src={SassImg} alt="LogoSass"></img>
        <img src={JSImg} alt="LogoJs"></img>
        <img src={ReactImg} alt="LogoReact"></img>
      </div>
    </div>
  );
}

export default Presentation;
