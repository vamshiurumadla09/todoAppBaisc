import React from 'react';
import Todolist from './Components/Todolist';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='betterview'>
    <Todolist></Todolist>
    </div>
    </Provider>
  )
}

export default App