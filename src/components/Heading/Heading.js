import React from 'react'
import classes from "./Heading.module.css"
const Heading = (props) => {
  return (
    <div className="col">
      <h1>{props.heading}</h1>
    </div>
  )
}

export default Heading
