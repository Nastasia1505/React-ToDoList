import { useState } from 'react';

import styles from './style.module.css';


function Header({ setToDoList }) {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }
  console.log(inputValue)

  const onClick = () => {
    console.log('Work')
    setToDoList((pre) => [...pre, inputValue])
    setInputValue('')
  }

  return (
    <div className={styles.wrapper}>
      <input value={inputValue} onChange={onInputChange} type="text" className={styles.input} placeholder="Enter task" />
      <button className={styles.btn} onClick={onClick}>Add</button>
    </div>
  );
}


export default Header;