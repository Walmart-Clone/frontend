import React from "react";
import { useState } from "react";
import "./auth.css";
import  Login  from "./login";
import  Register  from "./Register";

function Auth() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="Auth">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default Auth;
