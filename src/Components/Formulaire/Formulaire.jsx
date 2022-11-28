import { useState } from "react";
import "./Formulaire.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Formulaire() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().max(25).required("Merci de renseigner votre nom"),
      email: yup.string().email("Merci de renseigner une adresse mail valide").max(255).required("Merci de renseigner une adresse mail valide"),
      message: yup.string().max(4000).required("Merci d'ecrire un message"),
    })
    .required();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, r) => {
    alert("Votre message a bien été envoyer !");
    const templateId = "template_w7ni96c";
    const serviceId = "service_8q4tss8";
    sendFeedBack(serviceId, templateId, {
      name: data.name,
      email: data.email,
      message: data.message,
      reply_to: r.target.reset(),
    });
  };
  const sendFeedBack = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "hOr4zr0VWjsMH43QZ")
      .then((res) => {
        console.log("succes");
        navigate("/Portfolio_React");
      })
      .catch((err) => {
        console.error("il y a une erreur");
      });
  };

  return (
    <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" id="name" placeholder="Votre nom / nom de l'entreprise" {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}
      <input type="text" id="email" name="email" placeholder="Votre email" {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}
      <textarea name="message" rows="7" placeholder="Votre message" {...register("message")}></textarea>
      {errors.message && <p>{errors.message.message}</p>}
      <button type="submit" className="contact__form__btn" value="Envoyer">
        Envoyer
      </button>
    </form>
  );
}

export default Formulaire;
