import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initToken = localStorage.getItem("token");
  const [token, setToken] = useState(initToken);
  const userIsLoggedIn = !!token;

  let timer;
  const loginHandler = (token, expiresIn) => {
    setToken(token);
    localStorage.setItem("token", token);
    timer = setTimeout(() => {
      logoutHandler();
      localStorage.removeItem("token");
    }, 10000);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    clearTimeout(timer);
  };

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
