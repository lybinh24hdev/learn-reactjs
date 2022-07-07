import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrModal.module.css";

const ErrModal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrModal;
