import React, { Component } from 'react'

export default class TodoList extends Component {
  constructor() {
    super()
    this.state = {
     isActive:false
    }
  }
  createTasks = props => {
    return (
      <li className="list-group-item">
        <input type="checkbox"/>{props.text}
        <button className="close-btn" onClick={() => this.props.deleteItem(props.key)}>X
      </button>
      </li>
    )
  }
  render() {
    const listItems =(this.props.entries || []).map(this.createTasks)
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <h1 className="text-align">My To Do List</h1>
            <input
              placeholder="Title..."
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add</button>
          </form>
        </div>
        <div>
          <ul className="theList">
            {listItems}
          </ul>
        </div>
      </div>
    )
  }
}