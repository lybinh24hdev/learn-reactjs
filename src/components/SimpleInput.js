import { useRef } from "react";
import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const {
    enteredValue: nameInput,
    hasError: nameIsInvalid,
    valueIsValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: emailInput,
    hasError: emailIsInvalid,
    valueIsValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim().includes("@"));

  const nameInputRef = useRef();

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!nameIsValid || !emailIsValid) {
      return;
    }
    resetName();
    resetEmail();

    nameInputRef.current.focus();
    console.log(nameInput, emailInput);
  };

  const formName = `form-control ${nameIsInvalid ? "invalid" : ""}`;
  const formEmail = `form-control ${emailIsInvalid ? "invalid" : ""}`;

  return (
    <form onSubmit={submitHandler}>
      <div className={formName}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          value={nameInput}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={formEmail}>
        <label htmlFor="email">Your E-mail</label>
        <input
          value={emailInput}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsInvalid && <p className="error-text">Invalid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
