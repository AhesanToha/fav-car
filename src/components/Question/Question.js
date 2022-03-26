import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="questions">
      <div className="question">
        <h4>How react works?</h4>
        <p>
          React, at its heart, essentially maintains a tree for you. On the
          nodes, this tree can perform efficient diff computations. Consider
          your HTML code to be a tree. That is, in fact, how the browser handles
          your DOM (your rendered HTML on the browser). React allows you to
          essentially re-construct your DOM in JavaScript and only push the
          changes that have actually occurred to the DOM.
        </p>
      </div>
      <div className="question">
        <h4>How useState Works?</h4>
        <p>
          useState allows you to add state to function components, as previously
          indicated. I'm dialing React. When you use useState inside a function
          component, it creates a single piece of state for that component.
          Whereas in a class, the state is always an object, Hooks' state can be
          any type. Each state item contains a single value, which can be an
          object, an array, a boolean, or any other kind you can think of.
        </p>
      </div>
    </div>
  );
};

export default Question;
