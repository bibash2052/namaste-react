import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * <div id="parent">
 *      <div id='child'>
 *          <h1>Child H1 content</h1>
 *          <div id = "inner-child">
 *              <h3>Inner child h3</h3>
 *              <h4>Inner child hh4</h4>
 *          </div>
 *          <h2>Child H2 content</h2>
 *      </div>
 *      <div id='child1'>
 *          <h1>Child1 H1 content</h1>
 *          <h2>Child1 H2 content</h2>
 *           <div id = "inner-child1">
 *              <h3>Inner child1 h3</h3>
 *              <h4>Inner child1 h4</h4>
 *          </div>
 *      </div>
 * </div>
 *
 *
 *
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { }, "Child h1 content"),
    React.createElement("div", {id: "inner-child"}, [
        React.createElement("h3", {}, "Inner child h3"),
        React.createElement("h4", {}, "Inner child h4")
    ]),
    React.createElement("h2", { }, "Child h2 content"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Child1 h1 content"),
    React.createElement("h2", {}, "Child1 h2 content"),
    React.createElement("div", {id: "inner-child1"}, [
        React.createElement("h3", {}, "Inner child1 h1"),
        React.createElement("h4", {}, "Inner child1 h2")
    ] )
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);// returns an object
root.render(parent);
