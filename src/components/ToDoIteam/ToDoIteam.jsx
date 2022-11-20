// import { useState } from 'react';
import styles from './style.module.css';
import { FiTrash2 } from "react-icons/fi";
import { TiTick } from "react-icons/ti";



function ToDoIteam({ value}) {

  const done = (value)=>{
    console.log(value)
    console.log('Done')
  }

  const remove = (value)=>{
    console.log(value)
    console.log('delete')
    

  }

  return (
    <div className={styles.tasksList}>
      <div className={styles.wrapper}>
        <p className={styles.task}>{value}</p>
        <div className={styles.icons}>
          <i className={styles.check} onClick = {()=> done (value)}><TiTick /></i>
          <i className={styles.trash} onClick = {()=> remove(value)}><FiTrash2 /></i>
        </div>
      </div>
    </div>
  );
}


export default ToDoIteam