import React from 'react';
import Todo from './Todo'
import Create from './Create'
import rsvg from './react.svg'
import './App.css'

const findInstance = (a, b, c) => {
    let i;
    for (i = 0; i < a.length; i++) {
      if (a[i][b] === c) {
        return i;
      }
    }
    return null;
  }

class App extends React.Component {

  constructor(){
    super()
    this.state = {todos:[{task:'Feed Cats',isDone:true},{task:'Wash Truck',isDone:false},{task:'Slap Dog',isDone:false},{task:'Punch Tree',isDone:false}]}
  }

  onEdit = (e, c) => {
    let index = findInstance(this.state.todos, "task", e)
    let items = this.state.todos
    items.splice(index, 1, {task:c,isDone:items[index].isDone})
    this.setState({todos:items});
    console.log(this.state)
  }

  onUpdate = (data) => {
    if (data) {
      let newStateArray = this.state.todos.slice()
      newStateArray.push(data)
      this.setState({todos: newStateArray})
    }
  }

  onRemove = (where) => {
    let d = this.state.todos
    d.splice(findInstance(this.state.todos, "task", where), 1)
    this.setState(
      {
        todos: d
      }
    )
  }

  setDone = (where, state) => {
    let items = this.state.todos;
    items.splice(findInstance(this.state.todos, "task", where), 1, {task:where,isDone:state})
    this.setState(
      {
        todos: items
      }
    )
  }

  render() {
    let todos = this.state.todos
    return (
      <div
      className="App">
      <img src={rsvg} className="ReactSVG" alt="react-logo" />
        {todos.map(todo =>
          <Todo setDone={this.setDone.bind(this)} isDone={todo.isDone}onEdit={this.onEdit.bind(this)} isEditing={false} onRemove={this.onRemove.bind(this)} key={Math.random()} name={todo.task} />
        )}
          <Create onUpdate={this.onUpdate.bind(this)}/>
      </div>
    )
  }

}

export default App;