import React, {useState} from 'react'
import styles from './AddTodo.styles.js'

export default function AddTodo({addTodo}) {
  let [todo, setTodo] = useState("")
  return (
    <div>
      <input 
        style={styles.inputField} 
        placeholder="Enter task" 
        onChange={(event) => {
          setTodo(event.target.value);
          }}
          value={todo}
        />
      <button 
        style={styles.submitButton} 
        onClick={() => {
          addTodo(todo);
          setTodo("")
          }}>Add</button>
    </div>
  )
}
