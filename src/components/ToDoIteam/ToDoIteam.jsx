// import { useState } from 'react';
import styles from './style.module.css';
import { FiChevronDown, FiTrash2 } from "react-icons/fi";


function ToDoIteam({ value }) {

  return (
    <div className={styles.tasksList}>
      <div className={styles.wrapper}>
        <p className={styles.task}>{value}</p>
        <div className={styles.icons}>
          <i className={styles.check}><FiChevronDown /></i>
          <i className={styles.trash}><FiTrash2 /></i>
        </div>
      </div>
    </div>
  );
}


export default ToDoIteam