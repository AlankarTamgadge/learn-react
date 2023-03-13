import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.split(/[ ]+/);
    newText = newText.join(" ");
    newText = newText.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.split(/[ ]+/);
    newText = newText.join(" ");
    newText = newText.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="20"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert To UPPERCASE
        </button>
        <button className="btn btn-success mx-3" onClick={handleLowClick}>
          Convert To lowercase
        </button>
        <button className="btn btn-danger mx-3" onClick={clearText}>
          Clear Text{" "}
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          Text has {text.split(" ").length} words and has {text.length}{" "}
          alphabets and it takes {0.008 * text.split(" ").length} minutes to
          read it.
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Text Area",
};
