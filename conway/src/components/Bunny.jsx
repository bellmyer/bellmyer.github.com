import React from 'react'
import { EMPTY } from '../shared/constants'


const Bunny = (props) => {
  return (
    <img src="/bunny.gif" className="tile" onClick={() => {props.onClick(props.row, props.col, EMPTY)}} />
  )
}

export default Bunny