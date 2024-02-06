import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick} className="center-button">{props.title}</button>
  )
}

export default Button