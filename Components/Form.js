import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../styles/Form.module.css";
import Button from "./Button";

function Form() {
  let formFields = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, getFormData] = useState(formFields);
  let [isSubmitted, setIsSubmitted] = useState(false);
  //console.log(formData);
  useEffect(() => {
    let errors = formDataValidation(formData);
    if (
      (isSubmitted && errors.name.length == 0,
      errors.message.length == 0,
      errors.subject.length == 0,
      errors.email.length == 0)
    ) {
      submit();
    }

    return () => {
      //console.log(isSubmitted);
      setTimeout(() => {
        setIsSubmitted((prev) => (prev = false));
      }, 3000);
    };
  }, [isSubmitted]);

  function clearForm(formData) {
    console.log(formData.message);
    for (let key in formData) {
      formData[key] = "";
    }
  }

  function formDataValidation(formData) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const errors = { name: [], email: [], subject: [], message: [] };

    if (formData.name === null || formData.name === "") {
      errors.name.push("name is not entered!!!");
    }
    if (formData.email === null || formData.email === "") {
      errors.email.push("Please Enter EMail!!!");
    }
    if (regex.test(formData.email) === false) {
      errors.email.push("please enter email format");
    }
    if (formData.subject === null || formData.subject === "") {
      errors.subject.push("Subject is not entered!!!");
    }
    if (formData.message === null || formData.message === "") {
      errors.message.push("message is not entered!!!");
    }
    return errors;
  }
  function submit() {
    axios
      .post("http://localhost:4000/sendMail", formData)
      .then((e) => console.log(e))
      .catch((error) => console.log(error.message));
    clearForm(formData);
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
            value={
              formData.name === ""
                ? (e) => {
                    e.target.value = "";
                    getFormData({ ...formData, name: e.target.value });
                  }
                : formData.name
            }
            onChange={(e) => getFormData({ ...formData, name: e.target.value })}
            type="text"
            required
          />
          <label className={styles.placeholder}>Name: </label>
        </fieldset>

        <fieldset className={styles.field}>
          <input
            onChange={(e) =>
              getFormData({ ...formData, email: e.target.value })
            }
            className={
              styles.email +
              " " +
              styles.inputField +
              " " +
              (formData.email.length > 0 ? styles.active : "")
            }
            value={
              formData.email === ""
                ? (e) => {
                    e.target.value;
                    getFormData({ ...formData, email: e.target.value });
                  }
                : formData.email
            }
            type="email"
            required
          />
          <label className={styles.placeholder}>
            Email: <span className={styles.errors}></span>
          </label>
        </fieldset>

        <fieldset className={styles.field}>
          <input
            className={
              styles.subject +
              " " +
              styles.inputField +
              " " +
              (formData.subject.length > 0 ? styles.active : "")
            }
            value={
              formData.subject === ""
                ? (e) => {
                    e.target.value = "";
                    getFormData({ ...formData, subject: e.target.value });
                  }
                : formData.subject
            }
            onChange={(e) =>
              getFormData({ ...formData, subject: e.target.value })
            }
          />
          <label className={styles.placeholder}>subject: </label>
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
            value={
              formData.message === ""
                ? (e) => {
                    e.target.value = "";
                    getFormData({ ...formData, message: e.target.value });
                  }
                : formData.message
            }
            onChange={(e) => {
              getFormData({ ...formData, message: e.target.value });
            }}
          ></textarea>
          <label className={styles.placeholder}>Optional:</label>
        </fieldset>
        {/*        <Button
          string={"Submit"}
        /> */}

        <button
          onClick={(e) => {
            e.preventDefault();
            isSubmitted === false
              ? setIsSubmitted((prev) => (prev = true))
              : console.log("processing");
          }}
        >
          click me{" "}
        </button>
      </form>
    </>
  );
}

export default Form;
