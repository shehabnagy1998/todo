import React, { Component } from 'react';
import ToDo from './ToDos';
import AddTodo from './AddTodo';

class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'Buy milk'},
      {id: 2, content: 'Code some react'}
    ]
  };

  addTodo = (obj)=> {
    obj.id = this.state.todos.length+1;
    let todos = [...this.state.todos, obj];
    this.setState({todos: todos});
  }

  deleteTodo = (id)=> {
    let newTodos = this.state.todos.filter(todo=> {return todo.id !== id});
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">ToDo's</h1>
        <ToDo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;
