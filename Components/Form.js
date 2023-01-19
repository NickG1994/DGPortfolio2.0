import axios from "axios";
import React, { useState, useEffect } from "react";
import formStyles from "../styles/Form.module.css";
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
    formDataValidation(formData);
  }, [formData]);

  useEffect(() => {
    function clearForm() {
      getFormData(formFields);
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

  return (
    <>
      <form className={formStyles.form}>
        <h1> Contact Me </h1>
        <fieldset className={formStyles.field}>
          <input
            className={
              formStyles.name +
              " " +
              formStyles.inputField +
              " " +
              (formData.name.length > 0 ? formStyles.active : "")
            }
            value={formData.name}
            onChange={(e) => {
              getFormData({ ...formData, name: e.target.value });
            }}
            type="text"
            required
            name="txtName"
          />
          <label className={formStyles.placeholder} htmlFor="name">
            NAME:
            <span className={formStyles.error}>
              {errors.name ? errors.name[0] : ""}
            </span>
          </label>
        </fieldset>
        <fieldset className={formStyles.field}>
          <input
            onChange={(e) => {
              getFormData({ ...formData, email: e.target.value });
            }}
            className={
              formStyles.email +
              " " +
              formStyles.inputField +
              " " +
              (formData.email.length > 0 ? formStyles.active : "")
            }
            value={formData.email}
            type="email"
            required
            name="txtEmail"
          />
          <label className={formStyles.placeholder} htmlFor="txtEmail">
            Email:
            <span className={formStyles.error}>
              {errors.email ? errors.email[0] : ""}
            </span>
          </label>
        </fieldset>
        <fieldset className={formStyles.field}>
          <input
            name="txtSubject"
            className={
              formStyles.subject +
              " " +
              formStyles.inputField +
              " " +
              (formData.subject.length > 0 ? formStyles.active : "")
            }
            value={formData.subject}
            onChange={(e) => {
              getFormData({ ...formData, subject: e.target.value });
            }}
          />
          <label className={formStyles.placeholder} htmlFor="txtSubject">
            subject:{" "}
          </label>
        </fieldset>
        <fieldset
          className={formStyles["field"] + " " + formStyles["fieldContainer"]}
        >
          <textarea
            autoComplete="true"
            className={
              formStyles.message +
              " " +
              formStyles.inputField +
              " " +
              (formData.message.length > 0 ? formStyles.active : "")
            }
            value={formData.message}
            onChange={(e) => {
              {
                getFormData({ ...formData, message: e.target.value });
              }
            }}
            name="txtMessage"
          ></textarea>
          <label className={formStyles.placeholder} htmlFor="txtMessage">
            Optional:
          </label>
        </fieldset>
        <button
          className={formStyles.button}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          <span></span>
          <span className={formStyles.buttonText}>
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
