import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const ContextProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userAccounts = localStorage.getItem("isLoggedIn");
    if (+userAccounts === 1) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
