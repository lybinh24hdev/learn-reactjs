import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/AuthContext";
import FormControl from "../FormControl/FormControl";

const reducerEmail = (state, action) => {
  switch (action.type) {
    case "EMAIL_SUBMIT":
      return {
        value: action.payload,
        isValid: action.payload.includes("@"),
      };
    case "EMAIL_BLUR":
      return {
        ...state,
        isValid: state.value.includes("@"),
      };
    default:
      return { value: "", isValid: false };
  }
};

const reducerPw = (state, action) => {
  switch (action.type) {
    case "PW_SUBMIT":
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 6,
      };
    case "PW_BLUR":
      return {
        ...state,
        isValid: state.value.trim().length > 6,
      };
    default:
      return { value: "", isValid: false };
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();


  const ctx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(reducerEmail, {
    value: "",
    isValid: null,
  });
  const [pwState, dispatchPw] = useReducer(reducerPw, {
    value: "",
    isValid: null,
  });

  const { value: valueEmail, isValid: isValidEmail } = emailState;
  const { value: valuePw, isValid: isValidPw } = pwState;

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Checking");
      setFormIsValid(isValidEmail && isValidPw);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [isValidEmail, isValidPw]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "EMAIL_SUBMIT", payload: event.target.value });
    // setFormIsValid(event.target.value.includes("@") && isValidPw);
  };

  const passwordChangeHandler = (event) => {
    dispatchPw({ type: "PW_SUBMIT", payload: event.target.value });
    // setFormIsValid(isValidEmail && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: "EMAIL_BLUR",
    });
  };

  const validatePasswordHandler = () => {
    dispatchPw({
      type: "PW_BLUR",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(valueEmail, valuePw);
  };


  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <FormControl
          isValid={isValidEmail}
          label="E-mail"
          id="email"
          type="email"
          value={valueEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <FormControl
          isValid={isValidPw}
          label="Password"
          type="password"
          id="password"
          value={valuePw}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabledd={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
