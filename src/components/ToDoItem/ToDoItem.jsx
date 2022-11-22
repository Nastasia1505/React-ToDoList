import { useState } from 'react';
import { FiTrash2 } from "react-icons/fi";
import { TiTick } from "react-icons/ti";

import styles from './style.module.css';



function ToDoItem({ value, setToDoList, index }) {

const [isCompleted, setISCompleted] = useState(false)

  const done = () => {
    setISCompleted((pre)=>!pre)
  }

  const remove = () => {
    setToDoList((pre) => pre.filter((_, id) => id!== index))
  }

  return (
    <div className={styles.tasksList}>
      <div className={styles.wrapper}>
        <p className={isCompleted?styles.taskDone : styles.task} >{value}</p>
        <div className={styles.icons}>
          <i className={styles.check} onClick={() => done()}><TiTick /></i>
          <i className={styles.trash} onClick={() => remove()}><FiTrash2 /></i>
        </div>
      </div>
    </div>
  );
}


export default ToDoItem