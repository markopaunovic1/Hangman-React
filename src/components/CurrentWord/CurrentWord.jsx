import React from "react";
import "./index.css";

function CurrentWord(props) {
  return (
    <section className="currentWord">
      <span>{props.word}</span>
    </section>
  );
}

export default CurrentWord;
