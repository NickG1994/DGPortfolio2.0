import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../styles/Form.module.css";
import { getNativeSelectUtilityClasses } from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";

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

  useEffect(() => {
    formDataValidation(formData);
  }, [formData]);

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

  function formDataValidation(formData) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const errorsPush = { name: [], email: [], subject: [], message: [] };

    for (let keys in formData) {
      if (formData[keys] === null || formData[keys] === "") {
        errorsPush[keys].push(`${keys} require`);
      }
    }

    if (regex.test(formData.email) === false) {
      errorsPush.email.push("please enter email format");
    }
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
    <>
      <form className={styles.form}>
        <h1> Contact Me </h1>
        <fieldset className={styles.field}>
          <input
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
          <input
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
          />
          <label className={styles.placeholder} htmlFor="txtEmail">
            Email:
            <span className={styles.error}>
              {errors.email ? errors.email[0] : ""}
            </span>
          </label>
        </fieldset>
        <fieldset className={styles.field}>
          <input
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
        <button
          className={styles.button}
          onClick={(e) => {
            handleSubmit(e);
          }}
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
        </button>
      </form>
    </>
  );
}

export default Form;
