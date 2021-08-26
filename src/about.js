import React from "react";
import { useHistory } from "react-router-dom";

export default function About() {
  const history = useHistory();
  const handleClick = () => history.push("/login");
  return (
    <>
      <h1>About</h1>
      <button
        onClick={() => {
          handleClick();
          console.log("clicked");
        }}
      >
        click
      </button>
    </>
  );
}
