import HtmlImg from "../../Assets/HTML.png";
import CssImg from "../../Assets/CSS.jpg";
import SassImg from "../../Assets/SASS.jpg";
import JSImg from "../../Assets/Javascript.jpg";
import ReactImg from "../../Assets/React.jpg";
function Compétence() {
  return (
    <div className="Competences">
      <p className="Competences__text">Voici la liste des languages que j'utilise actuellement :</p>
      <div className="Competences__content__img">
        <img src={HtmlImg} alt="LogoHtml"></img>
        <img src={CssImg} alt="LogoCss"></img>
        <img src={SassImg} alt="LogoSass"></img>
        <img src={JSImg} alt="LogoJs"></img>
        <img src={ReactImg} alt="LogoReact"></img>
      </div>
    </div>
  );
}

export default Compétence;
