import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../styles/Form.module.css";
import ClipLoader from "react-spinners/ClipLoader";

//import framer motion and config animations
import { m, LazyMotion, domAnimation } from "framer-motion";
import { animateOpacity } from "../data/framer-motion config";

function Form() {
  let formFields = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, getFormData] = useState(formFields);
  let [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: [],
    email: [],
    subject: [],
    message: [],
  });
  //this useEffect will update formdata to reflect validation and format.
  useEffect(() => {
    formDataValidation(formData);
  }, [formData]);
  //This useAffect will check if errors object length is greater then 0
  // Then it will setTimout for 3seconds to clear the form and set the isSubmit to false
  // else
  useEffect(() => {
    if (
      (isSubmitted && errors.name.length === 0,
      errors.subject.length === 0,
      errors.message.length === 0,
      errors.email.length === 0)
    ) {
      setTimeout(() => {
        setIsSubmitted(false);
        clearForm(formData);
      }, 3000);
    } else {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  }, [isSubmitted]);

  function clearForm() {
    getFormData(formFields);
  }
  //This function will pass formdata as paremeter
  //check the inputfield variable for any validation and format.
  //sets the error object with errors. that will return
  function formDataValidation(formData) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const errorsPush = { name: [], email: [], subject: [], message: [] };
    //checking if formdata has no data or is null.
    //push keyname to errors array.
    for (let keys in formData) {
      if (formData[keys] === null || formData[keys] === "") {
        errorsPush[keys].push(`${keys} require`);
        console.log(errorsPush[keys]);
      }
    }
    //test the input from form for email format.
    if (regex.test(formData.email) === false) {
      errorsPush.email.push("please enter email format");
    }
    //sets the errors inside the arrays object
    setErrors({
      ...errors,
      name: errorsPush.name,
      email: errorsPush.email,
      subject: errorsPush.subject,
      message: errorsPush.message,
    });
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let errors = formDataValidation(formData);
    if (e) {
      setIsSubmitted(true);
      if (
        (errors.name.length === 0,
        errors.subject.length === 0,
        errors.message.length === 0,
        errors.email.length === 0)
      ) {
        axios
          .post("http://localhost:4000/submit", formData)
          .then((e) => {
            console.log(e.statusText);
          })
          .catch((error) => {
            console.log("clearing data");
            alert(error.message);
            clearForm(formData);
          });
      }
    }
  }

  return (
    <LazyMotion features={domAnimation}>
      <form className={styles.form}>
        <m.h1
          variants={animateOpacity}
          viewport={{ once: true }}
          whileInView={animateOpacity.animate}
          initial={animateOpacity.initial}
          transition={{ ...animateOpacity.transition, delay: 0.2 }}
        >
          Contact Me
        </m.h1>
        <h3>I love to hear from you. Send me a message!</h3>
        <fieldset className={styles.field}>
          <m.input
            variants={animateOpacity}
            viewport={{ once: true }}
            whileInView={animateOpacity.animate}
            initial={animateOpacity.initial}
            transition={{ ...animateOpacity.transition, delay: 0.4 }}
            className={
              styles.name +
              " " +
              styles.inputField +
              " " +
              (formData.name.length > 0 ? styles.active : "")
            }
            value={formData.name}
            onChange={(e) => {
              getFormData({ ...formData, name: e.target.value });
            }}
            type="text"
            required
            name="txtName"
          />
          <label className={styles.placeholder} htmlFor="name">
            NAME:
            <span className={styles.error}>
              {errors.name ? errors.name[0] : ""}
            </span>
          </label>
        </fieldset>
        <fieldset className={styles.field}>
          <m.input
            onChange={(e) => {
              getFormData({ ...formData, email: e.target.value });
            }}
            className={
              styles.email +
              " " +
              styles.inputField +
              " " +
              (formData.email.length > 0 ? styles.active : "")
            }
            value={formData.email}
            type="email"
            required
            name="txtEmail"
            variants={animateOpacity}
            viewport={{ once: true }}
            whileInView={animateOpacity.animate}
            initial={animateOpacity.initial}
            transition={{ ...animateOpacity.transition, delay: 0.4 }}
          />
          <label className={styles.placeholder} htmlFor="txtEmail">
            Email:
            <span className={styles.error}>
              {errors.email ? errors.email[0] : ""}
            </span>
          </label>
        </fieldset>
        <fieldset className={styles.field}>
          <m.input
            name="txtSubject"
            className={
              styles.subject +
              " " +
              styles.inputField +
              " " +
              (formData.subject.length > 0 ? styles.active : "")
            }
            value={formData.subject}
            onChange={(e) => {
              getFormData({ ...formData, subject: e.target.value });
            }}
            variants={animateOpacity}
            viewport={{ once: true }}
            whileInView={animateOpacity.animate}
            initial={animateOpacity.initial}
            transition={{ ...animateOpacity.transition, delay: 0.4 }}
          />
          <label className={styles.placeholder} htmlFor="txtSubject">
            subject:{" "}
          </label>
        </fieldset>
        <fieldset className={styles["field"] + " " + styles["fieldContainer"]}>
          <textarea
            autoComplete="true"
            className={
              styles.message +
              " " +
              styles.inputField +
              " " +
              (formData.message.length > 0 ? styles.active : "")
            }
            value={formData.message}
            onChange={(e) => {
              {
                getFormData({ ...formData, message: e.target.value });
              }
            }}
            name="txtMessage"
          ></textarea>
          <label className={styles.placeholder} htmlFor="txtMessage">
            Optional:
          </label>
        </fieldset>
        <m.button
          className={styles.button}
          onClick={(e) => {
            handleSubmit(e);
          }}
          variants={animateOpacity}
          viewport={{ once: true }}
          whileInView={animateOpacity.animate}
          initial={animateOpacity.initial}
          transition={{ ...animateOpacity.transition, delay: 0.4 }}
        >
          <span></span>
          <span className={styles.buttonText}>
            {!isSubmitted ? (
              "SEND"
            ) : (
              <ClipLoader
                size={15}
                color={{ color: "white" }}
                loading={isSubmitted}
              />
            )}
          </span>
        </m.button>
      </form>
    </LazyMotion>
  );
}

export default Form;
