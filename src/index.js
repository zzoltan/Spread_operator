import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];
const tropical = ["Banana", ...citrus, "Mango", "Papaya"];
const fruits = [citrus, tropical];
console.log(fruits);
console.log(tropical);

// we can use spread operator in the object as well for eg:

const name = {
  name: "James",
  suarname: "Bond"
};

const id = {
  ...name,
  id: "Cupi"
};

console.log(id);
