import { useState } from 'react';

import styles from './style.module.css';


function Header({ setToDoList }) {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onClick = () => {
    if (inputValue.trim()){
    setToDoList((pre) => [...pre, inputValue])
    setInputValue('')}
  }


  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={inputValue}
        onChange={onInputChange}
        type="text"
        placeholder="Enter task"
      />
      <button
        className={styles.btn}
        onClick={onClick}
      >Add</button>
    </div>
  );
}


export default Header;