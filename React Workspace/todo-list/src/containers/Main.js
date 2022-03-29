import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo/AddTodo'
import Todoitem from '../components/TodoItem/Todoitem'
import { addTask, completeTask, deleteTask } from '../redux/actions'
import styles from './Main.style.js'


export class Main extends Component {
  render() {
    console.log("redux todos:", + this.props.taskItems)
    return (
      <div style={styles.appContainer}>
        <div style={styles.container}>
          <h1 style={styles.title}>Ello</h1>
          <div style={styles.inputWrapper}>
            <AddTodo addTodo={(task) => {this.props.addTodo(task)}}/>
            <hr style={styles.separator}/>
          </div>
            {this.props.taskItems.map((task) => {
                return (
                  <Todoitem task={task} deleteTodo={(task) => this.props.deleteTodo(task)} completeTodo={(task) => this.props.completeTodo(task)}/>
                )
            })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  taskItems: state.taskItems
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (task) => dispatch(addTask(task)),
    deleteTodo: (task) => dispatch(deleteTask(task)),
    completeTodo: (task) => dispatch(completeTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)