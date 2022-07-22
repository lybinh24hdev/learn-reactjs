import React, { useContext } from "react";
import Context from "../../store/context";

import "./Backdrop.css";

const Backdrop = (props) => {
  const ctx = useContext(Context);

  const classes = "backdrop " + (ctx.isShowModal ? "" : "backdropClose");

  return <div className={classes} onClick={() => ctx.close()}></div>;
};
export default Backdrop;
