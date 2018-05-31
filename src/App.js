import React, { Component } from 'react';
import './App.css';
import todoList from './todos.json';

function TodoItem (props) {

    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox"/>
          <label>{props.text}</label>
          <button className="destroy"></button>
        </div>
      </li>
    );
 
}

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: todoList
    }
    console.log("todos: ", this.state.todos);
  }

  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.state.todos.map( todo => <TodoItem key={todo.id} text={todo.title} isCompleted={todo.completed} /> )}
        </ul>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus />
        </header>
        <TodoList />
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <button className="clear-completed">Clear completed</button>
        </footer>
		</section>
    );
  }
}

export default App;
