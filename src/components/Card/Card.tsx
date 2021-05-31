import React from "react"
import "./Card.scss"

interface Props {
  title: string
  minutes: number
}

function Card(props: Props) {
  return (
    <article className="card">
      <div className="card_info">
        <h2>{props.title}</h2>
        <h3>{props.minutes}</h3>
      </div>
      <div className="card_play">
        <svg xmlns="http://www.w3.org/200/svg" className="svg-triangle">
          <polygon points="20,45 40,28 20,10"/>
        </svg>
      </div>
    </article>
  )
}

export default Card
