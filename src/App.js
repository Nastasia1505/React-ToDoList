import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import ToDoItem from './components/ToDoItem/ToDoItem';

function App() {
  const [toDoList, setToDoList] = useState([]);


  return (
    <div>
      <Header setToDoList={setToDoList} />
      {toDoList.map((item, index) => {
        return <ToDoItem   value={item} setToDoList = {setToDoList} index = {index}/>
      })}
     
    </div>

  );
}

export default App;
