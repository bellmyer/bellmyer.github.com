import React, { Component } from 'react'
import Bunny from './Bunny'
import Grass from './Grass'
import Bomb  from './Bomb'
import { EMPTY, OCCUPIED, EXPLODED } from '../shared/constants'
import { Button } from 'reactstrap'
import nextGrid from '../lib/grid'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grid: this.initialGrid()
    }
  }

  initialGrid = () => {
    return [
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
    ]
  }

  copyGrid = (oldGrid) => {
    var newGrid = []

    for (var row = 0; row < oldGrid.length; row++) {
      var fields = []

      for (var col = 0; col < oldGrid[row].length; col++) {
        fields.push(oldGrid[row][col])
      }

      newGrid.push(fields)
    }

    return newGrid
  }

  updateTile = (row, col, status) => {
    const grid = this.copyGrid(this.state.grid)

    grid[row][col] = status

    this.setState({
      grid: grid
    })
  }

  tile = (row, col, status) => {
    switch(status) {
      case EMPTY:
        return (<Grass row={row} col={col} onClick={this.updateTile} />)
      case OCCUPIED:
        return (<Bunny row={row} col={col} onClick={this.updateTile} />)
      case EXPLODED:
        return (<Bomb row={row} col={col} onClick={this.updateTile} />)
      default:
        return null;
    }
  }

  rowTiles = (row, tiles) => {
    return (
      <div>
        { tiles.map((status, col) => this.tile(row, col, status)) }
      </div>
    )
  }

  gridTiles = (rows) => {
    return rows.map((row, index) => this.rowTiles(index, row))
  }

  nextGeneration = (event) => {
    this.setState({
      grid: nextGrid(this.state.grid)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            { this.gridTiles(this.state.grid) }

            <Button className="button-space" color="primary" onClick={this.nextGeneration}>See What Happens</Button>
            <Button className="button-space" color="secondary" onClick={() => {this.setState({grid: this.initialGrid()})}}>Reset</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Main