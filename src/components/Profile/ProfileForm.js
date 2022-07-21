import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { domain, keyAPI } from "../Auth/AuthForm";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const passwordlRef = useRef();
  const ctx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredPassword = passwordlRef.current.value;
    const url = domain + ":update?key=" + keyAPI;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: ctx.token,
        password: enteredPassword,
        returnSecureToken: false,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMess = "Change password failed!";
            errorMess = data?.error?.message;
            throw new Error(errorMess);
          });
        }
      })
      .then((data) => {
        history.replace("/");
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={passwordlRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
