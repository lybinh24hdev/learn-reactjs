import { useRef } from "react";
import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const isEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.trim().includes("@");
  const {
    enteredValue: fnameInput,
    hasError: fnameIsInvalid,
    valueIsValid: fnameIsValid,
    valueChangeHandler: fnameChangeHandler,
    valueBlurHandler: fnameBlurHandler,
    reset: resetFname,
  } = useInput(isEmpty);

  const {
    enteredValue: lnameInput,
    hasError: lnameIsInvalid,
    valueIsValid: lnameIsValid,
    valueChangeHandler: lnameChangeHandler,
    valueBlurHandler: lnameBlurHandler,
    reset: resetLname,
  } = useInput(isEmpty);

  const {
    enteredValue: emailInput,
    hasError: emailIsInvalid,
    valueIsValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const fnameRef = useRef();

  let formIsValid = false;
  if (fnameIsValid && lnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFname();
    resetLname();
    resetEmail();
    fnameRef.current.focus();
  };
  const check = (variable, mess) => {
    if (variable) {
      return <p className="error-text">{mess}</p>;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="fname">First Name</label>
          <input
            ref={fnameRef}
            value={fnameInput}
            type="text"
            id="fname"
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
          />
          {check(fnameIsInvalid, "First Name must not be empty")}
        </div>
        <div className="form-control">
          <label htmlFor="lname">Last Name</label>
          <input
            value={lnameInput}
            type="text"
            id="lname"
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
          />
          {check(lnameIsInvalid, "Last Name must not be empty")}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={emailInput}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {check(emailIsInvalid, "Please enter a valid email")}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
