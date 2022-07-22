import React, { useContext } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Context from "./store/context";

const App = () => {
  const ctx = useContext(Context)
  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal />
      <Backdrop />
      <button className="Button" onClick={() => ctx.open()}>Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
