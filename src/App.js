import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";

import "./App.css";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);
  const submitFormHandler = (data) => {
    setUsers((prev) => [...prev, data]);
  };

  return (
    <div>
      <AddUser onSubmitForm={submitFormHandler} />
      <UsersList users={users} />
    </div>
  );
};

export default App;
