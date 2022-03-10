import React from 'react'

export default function ColorScreen(props) {
  return (
    <div style={{ backgroundColor: props.match.params.color, height:"100vh"}}>

    </div>
  )
}
