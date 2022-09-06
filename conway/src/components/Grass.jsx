import React from 'react'
import { OCCUPIED } from '../shared/constants'

const Grass = (props) => {
  return (
    <img src="/grass.gif" className="tile" onClick={() => {props.onClick(props.row, props.col, OCCUPIED)}} />
  )
}

export default Grass