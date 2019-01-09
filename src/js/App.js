import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        isActive:false,
        text: '',
        key: '',
      },
    }
  }
  deleteItem = key => {
    const filteredItems = (this.state.items || []).filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  handleInput = e => {
    const currentItem = { text: e.target.value}
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' , isActive: false},
      })
    }
  }
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          entries={this.state.items} 
          deleteItem={this.deleteItem}
          strikeItem={this.strikeItem}
        />
      </div>
    )
  }
}

export default App