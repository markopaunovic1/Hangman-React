import React from "react";
import "./index.css";

function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const displayKeyboard = alphabet.split("").map((eachKey, index) => {
    return (
      <button key={index} className="eachKey">
        {eachKey.toUpperCase()}
      </button>
    );
  });

  return <span className="keyboardElements">{displayKeyboard}</span>;
}

export default Keyboard;
