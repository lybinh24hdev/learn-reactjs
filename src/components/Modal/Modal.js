import React, { useContext } from "react";
import Context from "../../store/context";

import "./Modal.css";

const Modal = (props) => {
  const ctx = useContext(Context);

  const classes = "modal " + (ctx.isShowModal ? "modalOpen" : "modalClose");

  return (
    <div className={classes}>
      <h1>A Modal</h1>
      <button className="Button" onClick={() => ctx.close()}>
        Dismiss
      </button>
    </div>
  );
};

export default Modal;
