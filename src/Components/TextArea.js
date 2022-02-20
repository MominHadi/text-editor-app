import React from "react";
import { useState } from "react";

export default function TextArea(props) {
  const [texting, setText] = useState("");

  let deleteofTxt = () => {
    setText("");
  };
  let ToUpper = () => {
    let newtxt = texting.toUpperCase();
    console.log("Uppercase is run");
    setText(newtxt);
  };
  let Change = (event) => {
    console.log("Change function");
    setText(event.target.value);
  };


  let toLower=()=>{let newlower=texting.toLowerCase()
  setText(newlower)}

  let trims=()=>{let p=texting.trim()
  setText(p)}
  return (
    <>
      <div>
        <h2
          style={{
            marginLeft: "250px",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          Text Editor - Word Counter,Character Counter,Removes Extra Spaces{" "}
        </h2>
        <div className="mb-3   my-4 container">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3 container">
          <label
            style={{ color: props.mode === "dark" ? "white" : "black" }}
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          >
            Example textarea
          </label>
          <textarea
            className={`form-control bg-${props.green}`}
            value={texting}
            id="exampleFormControlTextarea1"
            rows="3"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#292C6D",
              color: props.mode === "dark" ? "black" : "black",
            }}
            placeholder="Enter your text here"
            onChange={Change}
          ></textarea>
        </div>
        <div style={{marginLeft:'200px'}}>
          <button
            className={`btn btn-${props.green} mx-3 border border-primary border-3 my-1`}
            onClick={ToUpper}
          >
            Upper Case
          </button>
          <button
            onClick={deleteofTxt}
            className={`btn btn-${props.green} mx-3 border-primary border-3 my-2`}
          >
            Clear your text here
          </button>

          <button className={`btn btn-${props.green} mx-3 border-primary border-3 my-2`} onClick={toLower }>Lower case</button>

          <button onClick={trims}>Remove Extra space</button>
        </div>
      </div>
      <div className="container">
        <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {texting.length} characters{" "}
          {
            texting.split(" ").filter((texts) => {
              return texts !== 0;
            }).length
          }{" "}
          words
        </h3> 

        <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {0.08 *
            texting.split(" ").filter((texts) => {
              return texts != 0;
            }).length}{" "}
          minutes to read
        </h3>
        <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Preview Your Text here
        </h3>
        
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {texting}
        </p>
      </div>
    </>
  );
}
