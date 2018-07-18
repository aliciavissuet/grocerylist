import React, { Component } from "react";

export default class GroceryItems extends Component {

  constructor(props) {
    super(props);
    this.test=this.test.bind(this);
    this.handleCheck=this.handleCheck.bind(this);
    this.createTasks=this.createTasks.bind(this);
    this.delete=this.delete.bind(this);
    this.state = {items:this.props.entries};


  }

  componentWillReceiveProps(nextProps) {
    this.setState({items:nextProps.entries})
  }



  createTasks(item) {
    return (
    <li key={item.name}>
      <input onClick={ _ => this.handleCheck(item.name)} type="checkbox" value={item.name} checked={item.checked} id={item.name}/> {item.name}
    </li>
  )
  }

  test(listItems){
    console.log(listItems);
  }

handleCheck(name) {

  let items2 = this.state.items.map(entry =>
    (entry.name === name)? {...entry, checked:(entry.checked)?false:true}: entry);
  this.setState({items:items2})

  }

  delete(){
    var items = this.state.items.filter(entry =>
      (!entry.checked));
      this.setState({items})
      this.props.callbackFromParent(items);
  }


  render() {
    var todoEntries = this.state.items
    var listItems = todoEntries.map(this.createTasks);

    return (
      <div>
        <ul className="theList">
            {listItems}
        </ul>
        <button onClick={_ => this.test(listItems)} > Test </button>
        <button onClick={_ => this.delete()} > DELETE </button>
      </div>
    );
  }
};
