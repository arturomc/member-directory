import React from 'react'
import './card.styles.css'

const Card = (props) => (
  <div className="">
    <img alt="profile" src={`https://robohash.org/${props.member.id}?set=set2`}></img>
    <h1>{props.member.name}</h1>
    <h2>{props.member.email}</h2>
  </div>
)

export default Card;