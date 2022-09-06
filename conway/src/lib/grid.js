import { EMPTY, OCCUPIED, EXPLODED } from '../shared/constants'

const isAlive = (cell) => {
  return (cell == OCCUPIED)
}
const cell = (grid, row, col) => {
  const size = grid.length;

  if (col < 0) col = size-1;
  if (col >= size) col = 0;

  if (row < 0) row = size-1;
  if (row >= size) row = 0;

  return isAlive(grid[row][col]) ? 1 : 0
}

const neighborCount = (grid, row, col) => {
  return  cell(grid, row-1, col-1) +
          cell(grid, row-1, col) +
          cell(grid, row-1, col+1) +
          cell(grid, row,   col-1) +
          cell(grid, row,   col+1) +
          cell(grid, row+1, col-1) +
          cell(grid, row+1, col) +
          cell(grid, row+1, col+1)
}

const newCell = (grid, row, col) => {
  const cell = grid[row][col]
  const count = neighborCount(grid, row, col)

  if (isAlive(cell)) {
    return (count < 2 || count > 3) ? EXPLODED : OCCUPIED
  } else {
    return (count == 3) ? OCCUPIED : EMPTY
  }
}

const nextGrid = (originalGrid) => {
  const grid = []
  const rows = originalGrid.length
  const cols = originalGrid[0].length

  for (var row = 0; row < rows; row++) {
    var fields = []

    for (var col = 0; col < cols; col++) {
      fields.push(newCell(originalGrid, row, col))
    }

    grid.push(fields)
  }

  return grid
}

export default nextGrid