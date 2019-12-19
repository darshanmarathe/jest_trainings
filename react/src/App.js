import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Car';

function App() {
  const TodoSelected = ()=> {
    console.log('wallah todo is selected '+ Todo.title)
  }
  return (
    <div className="App">
     <h1>Car App</h1>
      <hr />
    <Todo userid={2} TodoSelected={TodoSelected} />
    </div>
  );
}

export default App;
