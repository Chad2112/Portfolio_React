import { useState } from "react";
import "./Formulaire.css";
import { validName, validEmail } from "./Regex";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Link, useNavigate } from "react-router-dom";

function Formulaire() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [nameError, setNameError] = useState(false);
  const navigate = useNavigate();
  const form = useRef();

  // function handleClick() {
  //   navigate("/Portfolio_React/CV");
  // }

  const sendEmail = (e) => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
      e.preventDefault();
    } else if (!validName.test(name)) {
      setNameError(true);
      e.preventDefault();
    }
    try {
      // document.location.href = "https://www.google.com/";
      emailjs.sendForm("service_8q4tss8", "template_w7ni96c", form.current, "hOr4zr0VWjsMH43QZ")(e.target.reset());
    } finally {
      navigate("https://chad2112.github.io/Portfolio_React/Contact");
    }
  };

  return (
    <form className="contact__form" ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" value={name} placeholder="Votre nom / nom de l'entreprise" onChange={(e) => setName(e.target.value)} />
      {nameError && <p>Veuillez renseigner un Nom valide (entre 2-20 caractere)</p>}
      <input type="text" name="email" value={email} placeholder="Votre email" onChange={(e) => setEmail(e.target.value)} />
      {emailErr && <p>Veuillez renseigner un Email valide</p>}
      <textarea name="message" rows="7" placeholder="Votre message"></textarea>
      <button type="submit" className="contact__form__btn">
        Envoyer
      </button>
    </form>
  );
}

export default Formulaire;
