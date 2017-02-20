import React, { Component } from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="main_wrapper">
        <div className="inner_wrapper">
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
