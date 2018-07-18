
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GroceryList from "./components/grocerylist.js";
import './components/style/grocerylist.css'

var destination = document.querySelector("#container");

ReactDOM.render(
  <div className="App">

      <h1 className="App-title">Grocery List</h1>
        <GroceryList />
    </div>,
    destination
);
