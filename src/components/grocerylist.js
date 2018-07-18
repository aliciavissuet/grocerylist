import React, { Component } from "react";
import GroceryItems from './groceryitems.js';
import '../style/grocerylist.css';

export default class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat({item:newItem,name:newItem.text,checked:false})
        };
      });
      this._inputElement.value = "";

    }
    console.log(this.state.items);
    e.preventDefault();
  }

  myCallback = (dataFromChild) => {
         this.setState({items:dataFromChild})
     }

    render() {
      return (
        <div className="grocerylist">
          <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
            placeholder="enter task">

            </input>
            <button type="submit">Add!</button>
          </form>
          </div>

          <GroceryItems entries={this.state.items} callbackFromParent={this.myCallback}/>


          </div>

    );
  }
}
