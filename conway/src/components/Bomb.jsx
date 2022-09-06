import React, { Component } from 'react'
import { OCCUPIED } from '../shared/constants'

class Bomb extends Component {
  constructor(props) {
    super(props)

    // browser caching breaks the animation, so we break the browser caching
    var randomKey = Math.floor(Math.random() * 1000000).toString();

    this.state = {
      source: '/explode.gif?' + randomKey
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({source: '/grass.gif'})
    }, 1000)
  }

  render() {
    return (
      <img src={this.state.source} className="tile" onClick={() => {this.props.onClick(this.props.row, this.props.col, OCCUPIED)}} />
    )
  }
}

export default Bomb