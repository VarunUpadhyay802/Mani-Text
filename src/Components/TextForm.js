import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("clicked");
    let newText = text.toUpperCase();
    setText(newText);
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
  return (
    <>
    <div className="mb-3">
      <h1>{props.heading}</h1>
      <textarea className="form-control" 
      value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9">
      </textarea>
      <button className="btn btn btn-primary" onClick={handleUpClick}>
        Conver to UpperCase
      </button>
      <button className="btn btn btn-primary mx-3" onClick={handleDownClick}>
        Conver to Downcase
      </button>
      <button className="btn btn btn-primary mx-3" onClick={handleClearClick}>
        Clear Text
      </button>
    </div>
    <div className='container my-3'>
    characters:{text.length} Words:{text.split(" ").length-1}
    <br/>
{/* according to the data , that if you read 125 word in 30 seconds  */}
    Avg time to read the para in seconds:{Math.floor(1.24*text.split(" ").length-1)}
    </div>
    Preview:
    <br/>
    {text}
    </>
  );
}
