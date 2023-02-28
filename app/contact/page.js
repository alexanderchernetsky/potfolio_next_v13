'use client';

import React, { useEffect, useReducer } from "react";
import Head from "next/head";

import InputComponent from "@/components/specific/contact/Input/Input";
import checkForEmptyField from "@/utils/validation/checkForEmptyField";
import validateEmail from "@/utils/validation/validateEmail";
import ButtonComponent from "@/components/common/Button/Button";
import getFieldsErrors from "@/utils/getFieldsErrors";
import BackendManager from "@/services/Manager";
import socIcons from "@/constants/contact";
import SocIconComponent from "@/components/specific/contact/SocIconComponent";
import PageTitle from "@/components/common/PageTitle";
import TextareaComponent from "@/components/specific/contact/Textarea/Textarea";
import ModalComponent from "@/components/specific/contact/Modal/index";

import styles from './styles.module.scss';


const initialState = {
  fullName: "",
  fullNameError: false,
  email: "",
  emailError: false,
  message: "",
  messageError: false,
  isSubmitting: false,
  isSuccessModalVisible: false,
  isErrorModalVisible: false
};

const contactFormReducer = (state, action) => {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    case "trigger_success":
      return {
        ...state,
        isSuccessModalVisible: action.payload
      };
    case "trigger_error":
      return {
        ...state,
        isErrorModalVisible: action.payload
      };
    case "reset_form":
      return initialState;
    default:
      return state;
  }
};

const Contacts = () => {
  const [state, dispatch] = useReducer(contactFormReducer, initialState);
  const {
    fullName,
    fullNameError,
    email,
    emailError,
    message,
    messageError,
    isSubmitting,
    isSuccessModalVisible,
    isErrorModalVisible
  } = state;

  useEffect(() => {
    const fieldErrors = [fullNameError, emailError, messageError];
    const hasError = !!fieldErrors.filter(Boolean).length;
    if (!hasError && isSubmitting) {
      BackendManager.sendContactUsRequest(fullName, email, message)
        .then(() => {
          dispatch({
            type: "trigger_success",
            payload: true
          });
        })
        .catch(error => {
          getFieldsErrors(error).forEach(fieldErrorItem => {
            dispatch({
              type: "field",
              fieldName: `${fieldErrorItem[0]}Error`,
              payload: fieldErrorItem[1]
            });
          });
          dispatch({
            type: "trigger_error",
            payload: true
          });
        })
        .finally(() => {
          dispatch({
            type: "field",
            fieldName: "isSubmitting",
            payload: false
          });
        });
    } else {
      dispatch({
        type: "field",
        fieldName: "isSubmitting",
        payload: false
      });
    }
  }, [isSubmitting]);

  const handleSubmit = event => {
    event.preventDefault();
    // check if fields are filled and values are valid
    dispatch({
      type: "field",
      fieldName: "fullNameError",
      payload: checkForEmptyField(fullName)
    });
    dispatch({
      type: "field",
      fieldName: "emailError",
      payload: checkForEmptyField(email) || validateEmail(email)
    });
    dispatch({
      type: "field",
      fieldName: "messageError",
      payload: checkForEmptyField(message)
    });
    dispatch({
      type: "field",
      fieldName: "isSubmitting",
      payload: true
    });
  };

  const inputChangeHandler = (fieldTitle, event) => {
    dispatch({
      type: "field",
      fieldName: fieldTitle,
      payload: event.target.value
    });
    dispatch({
      type: "field",
      fieldName: `${fieldTitle}Error`,
      payload: false
    });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Contact | Alexander Chernetsky</title>
        <meta
          name="description"
          content="Contact Alex Chernetsky. Ask questions or hire a frontend web developer."
        />
        <meta
          name="google-site-verification"
          content="B_oyNY7Nj-cESbBvN-hrxgz1HsbKpTGLSGL-_YWf-vY"
        />
      </Head>

      <section className={styles.contactPageWrapper} id="contact-page">
        <div className={styles.contentWrapper}>
          <PageTitle title='Contact' />

          <div className={styles.question}>Have a question or want to work together?</div>

          <form className={styles.form}
            onSubmit={handleSubmit}
            method="post"
            encType="multipart/form-data"
          >
            {/* Full Name */}
            <div className={styles.rowWrapper}>
              <InputComponent
                placeholder="Full name"
                errorMessage={fullNameError}
                onChange={event => inputChangeHandler("fullName", event)}
                value={fullName}
                type="fullName"
              />
            </div>
            {/* Email */}
            <div className={styles.rowWrapper}>
              <InputComponent
                placeholder="Email address"
                errorMessage={emailError}
                onChange={event => inputChangeHandler("email", event)}
                value={email}
                type="email"
              />
            </div>
            {/* Message */}
            <div className={styles.rowWrapper}>
              <TextareaComponent
                placeholder="Your message"
                errorMessage={messageError}
                value={message}
                onChange={event => inputChangeHandler("message", event)}
              />
            </div>
            {/* Submit btn */}
            <div className={styles.buttonsWrapper}>
              <ButtonComponent
                text="Submit"
                colorTheme="green"
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
              />
            </div>

            {/* Success modal */}
            <ModalComponent
              onCloseHandler={() => {
                dispatch({
                  type: "trigger_success",
                  payload: false
                });
                dispatch({
                  type: "reset_form"
                });
              }}
              title="Thank you!"
              visible={isSuccessModalVisible}
            >
              <p>Your message was sent successfully.</p>
            </ModalComponent>

            {/* Error modal */}
            <ModalComponent
              onCloseHandler={() =>
                dispatch({
                  type: "trigger_error",
                  payload: false
                })
              }
              title="That's an error!"
              visible={isErrorModalVisible}
            >
              <p>Sorry. Something went wrong.</p>
            </ModalComponent>
          </form>

          {/* Footer */}
          <footer className={styles.footer}>
            <div className={styles.socIconsWrapper}>
              {socIcons.map((item, index) => {
                return (
                  <SocIconComponent
                    iconSrc={item.src}
                    iconName={item.name}
                    linkTo={item.linkTo}
                    key={index}
                  />
                );
              })}
            </div>
            <div className={styles.footnote}>
              <span className={styles.name}>Alexander Chernetsky</span>
              <span className={styles.year}>©2023</span>
            </div>
          </footer>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contacts;
