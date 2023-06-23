import { React, useState } from 'react';
import "../styles/todolist.css";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';


function Todolist(store) {
  const [newTodo, setNewTodo] = useState('')
  function getTodoValue(e) {
    setNewTodo(e.target.value)
    console.log(newTodo)
  }

  return (
    <div className='app-center'>
      <div className='todolist'>
        <div className='title'>
          <h1>{`Todos(${store.todolist.todos.length})`}</h1>
        </div>
        <div className='input-todo'>
          <input type="text" placeholder='enter todo' onChange={getTodoValue} />
          <button className='add-todo' onClick={() => { store.dispatch({ type: 'ADDTODO', payload: newTodo }) }}>Add todo</button>
        </div>
        <div className='list'>
          <ul className='ul-tag'>
            {store.todolist.todos.map((todo, index) => {
              return (
                <li className='todo'>
                  <h3>{`${index + 1}. ${todo}`}</h3>
                  <div>
                    <button className='done-todo' onClick={() => { store.dispatch({ type: 'DONETODO', payload: index }) }}>
                      <FontAwesomeIcon icon={faCheck} />
                       <span> Done</span>
                       </button>
                    <button className='delete-todo' onClick={() => { store.dispatch({ type: 'DELETETODO', payload: index }) }}>
                      <FontAwesomeIcon icon={faTrash} />
                      <span> Remove</span>
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default connect((store) => { return store })(Todolist);