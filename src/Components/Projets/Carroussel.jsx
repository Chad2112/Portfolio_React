import "./Carroussel.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { SliderData } from "./Slide";

function Carroussel() {
  const pictures = SliderData.reduce((acc, loc) => (acc.includes(loc.image) ? acc : acc.concat(loc.image)), []);
  console.log(pictures[0]);
  const [count, setcount] = useState(0);
  const picturesIndex = pictures[count];
  console.log(picturesIndex);
  // Creation d'une fonction pour que le clique sur la fleche de gauche a la premiere image, nous ramène a la
  // derniere image du carroussel
  const goToPrevious = () => {
    const isFirstSlide = count === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : count - 1;
    setcount(newIndex);
  };
  // Creation d'une fonction pour que le clique sur la fleche de droite a la derniere image, nous ramène a la
  // premiere image du carroussel
  const goToNext = () => {
    const isLastSlide = count === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : count + 1;
    setcount(newIndex);
  };
  return (
    <div className="carroussel">
      <div className="carroussel__container">
        <button className="carroussel__container__btn__left" onClick={() => goToPrevious()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="carroussel__container__btn__right" onClick={() => goToNext()}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <img className="carroussel__container__img" src={picturesIndex} alt=""></img>
      </div>
    </div>
  );
}

export default Carroussel;
