import {React, useState, useEffect} from 'react';
import "../styles/todolist.css";
import {connect} from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';

function Todolist(store) {
  const [newTodo, setNewTodo] = useState('')
  function getTodoValue (e){
    setNewTodo(e.target.value)
    console.log(newTodo)
  }

  return (
    <div className='container todolist'>
      <h1>{`Todos(${store.todolist.todos.length})`}</h1>
       <ul className='ul-tag'>
        <li className='input-todo'>
          <input type="text" placeholder='enter todo' onChange={getTodoValue}/>
          <button className='add-todo' onClick={()=>{store.dispatch({type:'ADDTODO', payload:newTodo})}}>Add todo</button>
        </li>
        {store.todolist.todos.map((todo, index)=>{
          return (
            <li className='todo'>
              <h3>{`${index+1}. ${todo}`}</h3>
              <div>
              <button className='done-todo' onClick={()=>{store.dispatch({type:'DONETODO', payload:index})}}>Done</button>
              <button className='delete-todo' onClick={()=>{store.dispatch({type:'DELETETODO', payload:index})}}>Delete</button>
              </div>
              </li>
          )
        })}
       </ul>
    </div>
  )
}

export default connect((store)=>{return store})(Todolist);