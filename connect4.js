
const rows = 6
const columns = 7
const currPlayer = 'R'

const board = [
  ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E', 'E', 'E']
]

function checkWinner () {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] !== 'E') {
        if (board[r][c] === board[r][c + 1] && board[r][c + 1] === board[r][c + 2] && board[r][c + 2] === board[r][c + 3]) {
          setWinner(r, c)
          return
        }
      }
    }
  }
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 3; r++) {
      if (board[r][c] !== 'E') {
        if (board[r][c] === board[r + 1][c] && board[r + 1][c] === board[r + 2][c] && board[r + 2][c] === board[r + 3][c]) {
          setWinner(r, c)
          return
        }
      }
    }
  }
  for (let r = 3; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] !== 'E') {
        if (board[r][c] === board[r - 1][c + 1] && board[r - 1][c + 1] === board[r - 2][c + 2] && board[r - 2][c + 2] === board[r - 3][c + 3]) {
          setWinner(r, c)
          return
        }
      }
    }
  }
  for (let r = 0; r < rows - 3; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] !== 'E') {
        if (board[r][c] === board[r + 1][c + 1] && board[r + 1][c + 1] === board[r + 2][c + 2] && board[r + 2][c + 2] === board[r + 3][c + 3]) {
          setWinner(r, c)
          return
        }
      }
    }
  }
}

function setWinner (r, c) {
  if (board[r][c] === currPlayer) {
    console.log('red wins')
  } else {
    console.log('blue wins')
  }
}

checkWinner()
