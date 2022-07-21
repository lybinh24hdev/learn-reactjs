import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";

export const domain = "https://identitytoolkit.googleapis.com/v1/accounts";
export const keyAPI = "AIzaSyArjdvi7UpQCCv7NsyqkFoarOqmYbeNtDI";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordlRef = useRef();
  const ctx = useContext(AuthContext);
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordlRef.current.value;

    if (enteredEmail.trim() === "" || enteredPassword.trim() === "")
      alert("Invalid email or password!");

    setIsLoading(true);

    let url;
    if (isLogin) {
      url = domain + ":signInWithPassword?key=" + keyAPI;
    } else {
      url = domain + ":signUp?key=" + keyAPI;
    }
    fetch(url, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMess = "Authentication failed!";
            errorMess = data?.error?.message;
            throw new Error(errorMess);
          });
        }
      })
      .then((data) => {
        ctx.login(data.idToken, data.expiresIn*1000);
        console.log(data.expiresIn*1000);
        history.replace('/')
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={passwordlRef} type="password" id="password" required />
        </div>
        {isLoading && <p>Loading...</p>}
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
