import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("ALl the txt have been changed to the uppercase","Success")
  };
  const handleDownClick = () => {
    // console.log("clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("clicked");
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  const handleCopyClick = () => {
    var input = document.getElementById("body");
    input.select();
    navigator.clipboard.writeText(input.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div
        className="container"
        style={{
          Color: props.mode === "dark" ? "light" : "white",
         
        }}
      >
        <div className="mb-3  ">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="body"
            rows="9"
            style={{ backgroundColor: props.mode === "dark" ? "grey " : "white"}}
          ></textarea>
          <div/>
          <button className="btn btn btn-primary" onClick={handleUpClick}>
            Conver to UpperCase
          </button>
          <button
            className="btn btn btn-primary mx-3"
            onClick={handleDownClick}
          >
            Conver to Downcase
          </button>
          <button
            className="btn btn btn-primary mx-3"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            className="btn btn btn-primary mx-3"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            className="btn btn btn-primary mx-3"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-3">
        characters:{text.length} Words:{text.split(" ").length - 1}
        <br />
        {/* according to the data , that if you read 125 word in 30 seconds  */}
        Avg time to read the para in seconds:
        {Math.floor(1.24 * text.split(" ").length - 1)}
      </div>
      Preview:
      <br />
      {text.length > 0
        ? text
        : "Enter something in the textbox to preview it here"}
    </>
  );
}
