import React from 'react';
import './Todo.css';

const Todo = ({ _id, text, done, onDelete, onComplete}) => {
  return (
    <div className="Todo">
      <div className="Todo-inner">
        {
          text && <div>{text}</div>
        }

        <div>{done ? "This todo is done" : "This todo is not done"}</div>

        <div className="Todo-button-wrapper">
          <div>
            <button type="button" onClick={onDelete({ _id, text, done })}>Delete</button>
          </div>

          {
            !done && (
              <div>
                <button type="button" onClick={onComplete({ _id, text, done })}>Set as done</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
} 

export default Todo;