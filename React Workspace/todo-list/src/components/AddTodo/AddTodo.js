import React from 'react'
import styles from './AddTodo.styles.js'

export default function AddTodo() {
  return (
    <div>
      <input style={styles.inputField} placeholder="Enter task"/>
      <button style={styles.submitButton}>Add</button>
    </div>
  )
}
