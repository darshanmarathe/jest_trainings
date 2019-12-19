import React, { Component } from "react";
import axios from "axios";

export default class Todo extends Component {
  state = {
    todos: [],
    todo: {
      title: "abc",
      completed: false
    }
  };
  constructor({props}) {
    super();
    //this.saveTodo = this.saveTodo.bind(this)
    this.SaveValue = this.SaveValue.bind(this);
   
   }

async componentDidMount() {
  
    let userId = this.props.userid

    let todo = this.state.todo;
    todo.userId  =userId
    this.setState({todo : todo})
    let items = await axios.get("https://jsonplaceholder.typicode.com/todos/");

    if (items.data) this.setState({ todos: items.data });
  }

  saveTodo = async e => {
    e.preventDefault();
    if (this.state.todo.id != null) {
      await axios.put(
        "https://jsonplaceholder.typicode.com/todos/",
        this.state.todo
      );
    } else {
      await axios.post(
        "https://jsonplaceholder.typicode.com/todos/",
        this.state.todo
      );
    }
  };

  SelectTodo(_todo) {
    this.setState({ todo: _todo });
    this.props.TodoSelected  && this.props.TodoSelected(_todo)
}
  SaveValue(e) {
    var item = e.target;
    var name = item.name;
    var value = item.value;

    let todo = this.state.todo;
    todo[name] = value;
    this.setState({ todo });
  }

  render() {
    return (
      <>
        <div>
          <h2>Todos</h2>
        </div>
        <form onSubmit={this.saveTodo} id="form">
          <input
            type="hidden"
            name="userId"
            onChange={this.SaveValue}
            value={this.state.todo.userId}
          />
          <input
            type="hidden"
            name="id"
            value={this.state.todo.id}
            onChange={this.SaveValue}
          />
          <input
            type="text"
            name="title"
            ref="title"
            id="title"
            value={this.state.todo.title}
            onChange={this.SaveValue}
          />
          <input
            type="checkbox"
            name="completed"
            ref="completed"
            id="completed"
            value={this.state.todo.completed}
            onChange={this.SaveValue}
          />
          <input type="submit" value="SAVE" id="btnSave" />
        </form>
        <ul>
          {this.state.todos &&
            this.state.todos.map(t => {
              return (
                <li
                  className="todoItem"
                  onClick={() => {
                    this.SelectTodo(t)
                  }}
                  key={t.id}
                >
                  {t.title}
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}
