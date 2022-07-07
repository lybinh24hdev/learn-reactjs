import { useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrModal from "../UI/ErrModal/ErrModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);
  const userNameRef = useRef();

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }
    const formValue = { userName, age: +age };
    props.onSubmitForm(formValue);
    setUserName("");
    setAge("");
    userNameRef.current.focus();
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrModal
          title={error.title}
          message={error.message}
          onConfirm={closeModalHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name:</label>
          <input
            id="username"
            value={userName}
            type="text"
            ref={userNameRef}
            placeholder="Tell me your beatiful name"
            onChange={userNameHandler}
          ></input>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            value={age}
            type="number"
            placeholder="How old are you?"
            onChange={ageHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
