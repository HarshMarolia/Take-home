import React from 'react'

const Image = (props) => {
  return (
    <img src={props.src} alt={props.desc} width={"100%"} height={"100%"}/>
  )
}

export default Image