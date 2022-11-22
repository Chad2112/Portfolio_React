import "./CV.css";
function Experience() {
  return (
    <div className="experience">
      <div className="experience__date">
        <ul className="experience__date__list">
          <li>2012 - 2013</li>
          <li>2013 - 2014</li>
          <li>2015 - 2017</li>
          <li>2017 - 2022</li>
        </ul>
      </div>
      <div className="experience__content">
        <div className="experience__content__text">
          <h4>Apprentissage</h4>
          <h5>Restaurant Oh terroir</h5>
        </div>
        <div className="experience__content__text">
          <h4>Commis de cuisine</h4>
          <h5>Hotel de l'abbaye, restaurant "La Roma" "Le churrasco" ...</h5>
        </div>
        <div className="experience__content__text">
          <h4>Projectionniste</h4>
          <h5>Alticiné Montargis</h5>
        </div>
        <div className="experience__content__text">
          <h4>Chef de cuisine</h4>
          <h5>Restaurant "Le Grand Bleu" (Corse) / Restaurant A La Place (Montargis)</h5>
        </div>
      </div>
    </div>
  );
}

export default Experience;
