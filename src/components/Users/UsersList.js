import Card from "../UI/Card/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  let content = <p>Sad! Nobody here...</p>;
  if (props.users.length > 0) {
    content = props.users.map((user, index) => (
      <li key={index}>
        {user.userName} ({user.age} years old)
      </li>
    ));
  }

  return (
    <Card className={styles.users}>
      <ul>{content}</ul>
    </Card>
  );
};

export default UsersList;
