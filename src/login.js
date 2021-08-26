import React from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const handleClick = () => history.push("/");
  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        click
      </button>
    </>
  );
}
