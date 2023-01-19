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

  return <>this is where the form should be</>;
}

export default Form;
