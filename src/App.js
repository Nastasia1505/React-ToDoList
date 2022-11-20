import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import ToDoIteam from './components/ToDoIteam/ToDoIteam';

function App() {
  const [toDoList, setToDoList] = useState([]);


  return (
    <div>
      <Header setToDoList={setToDoList} />
      {toDoList.map((iteam) => {
        return <ToDoIteam   value={iteam}/>
      })}
     
    </div>

  );
}

export default App;
