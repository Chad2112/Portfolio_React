import Apropos from "../Components/CV/Apropos";
import Experience from "../Components/CV/Experience";
import Formation from "../Components/CV/Formation";
import Compétence from "../Components/CV/Competences";

import "./index.css";
function CV() {
  return (
    <main className="CV__content">
      <h2 className="CV__content__title"> Developpeur Front-end</h2>
      <h3 className="CV__title">A PROPOS DE MOI :</h3>
      <Apropos />
      <h3 className="CV__title">Experience :</h3>
      <Experience />
      <h3 className="CV__title">Formation :</h3>
      <Formation />
      <h3 className="CV__title">Compétences :</h3>
      <Compétence />
    </main>
  );
}

export default CV;
