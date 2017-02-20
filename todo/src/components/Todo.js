import React, { PropTypes } from 'react'
import '../styles/todo.css';

const Todo = ({ onClick, completed,onDelete, text }) => (
  <div className="todo animated fadeInDown">
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
      className="singletodo"
    >
      {text}
    </li>
    <div className="delete_button">
      <input type="button" onClick={onDelete} value="Delete"/>
    </div>
  </div>

)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
