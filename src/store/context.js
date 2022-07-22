import { createContext, useState } from "react";

const Context = createContext({
  isShowModal: false,
  close() {},
  open() {},
});

export const ContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => setIsOpen(false);
  const openHandler = () => setIsOpen(true);

  const value = {
    isShowModal: isOpen,
    close: closeHandler,
    open: openHandler,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Context;
