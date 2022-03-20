import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo/AddTodo'
import styles from './Main.style.js'


export class Main extends Component {
  render() {
    return (
      <div style={styles.appContainer}>
        <div style={styles.container}>
          <h1 style={styles.title}>Ello</h1>
          <div style={styles.inputWrapper}>
            <AddTodo />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)