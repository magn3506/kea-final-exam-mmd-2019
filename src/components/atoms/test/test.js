import React from "react"

const Test = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {props.data &&
          props.data.map(e => {
            return <li>{e}</li>
          })}
      </ul>
    </div>
  )
}

export default Test
