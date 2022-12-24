import { getValue } from "@mui/system";
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

  useEffect(() => {}, []);

  function formDataValidation(formData) {
    const errors = { name: [], email: [], subject: [], message: [] };
    if (formData.name === null || formData.name === "") {
      errors.name.push("name is not entered!!!");
    }
    if (formData.email === null || formData.email === "") {
      errors.email.push("Please Enter EMail!!!");
    }
    if (formData.subject === null || formData.subject === "") {
      errors.subject.push("Subject is not entered!!!");
    }
    if (formData.message === null || formData.message === "") {
      errors.message.push("message is not entered!!!");
    }
    console.log(errors);
  }
  function submit(e) {
    formDataValidation(formData);
    axios
      .post("/api/hello", formData)
      .then((e) => console.log(e))
      .catch((error) => console.log(error));
    console.log(formData);
  }

  return (
    <>
      <form className={styles.form} action="/api/hello.js" method="post">
        <fieldset className={styles.field}>
          <input
            className={
              styles.name +
              " " +
              styles.inputField +
              " " +
              (formData.name.length > 0 ? styles.active : "")
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
            type="email"
            required
          />
          <label className={styles.placeholder}>Email: </label>
        </fieldset>

        <fieldset className={styles.field}>
          <input
            className={
              styles.subject +
              " " +
              styles.inputField +
              " " +
              " " +
              (formData.subject.length > 0 ? styles.active : "")
            }
            onChange={(e) =>
              getFormData({ ...formData, subject: e.target.value })
            }
          />
          <label className={styles.placeholder}>subject: </label>
        </fieldset>
        <fieldset className={styles.field}>
          <textarea
            className={
              styles.message +
              " " +
              styles.inputField +
              " " +
              (formData.message.length > 0 ? styles.active : "")
            }
            onChange={(e) => {
              getFormData({ ...formData, message: e.target.value });
            }}
          ></textarea>
          <label className={styles.placeholder}>Optional:</label>
        </fieldset>

        <Button string={"Submit"} />
      </form>
    </>
  );
}

export default Form;
