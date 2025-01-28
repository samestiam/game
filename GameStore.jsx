// store/GameStore.js
import { create } from 'zustand'

const useGameStore = create((set, get) => ({
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  gameMode: null,
  isGameOver: false,
  scores: {
    X: 0,
    O: 0,
  },

  setGameMode: (mode) => set({ gameMode: mode }),

  makeMove: (index) => {
    const { board, currentPlayer, isGameOver } = get()
    
    if (board[index] || isGameOver) return false

    const newBoard = [...board]
    newBoard[index] = currentPlayer

    const winner = checkWinner(newBoard)
    const isDraw = !winner && newBoard.every(cell => cell !== null)

    set({
      board: newBoard,
      currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
      winner: winner,
      isGameOver: winner || isDraw,
      ...(winner && {
        scores: {
          ...get().scores,
          [winner]: get().scores[winner] + 1
        }
      })
    })

    return true
  },

  makeCPUMove: () => {
    const { board } = get()
    const emptyCells = board
      .map((cell, index) => cell === null ? index : null)
      .filter(cell => cell !== null)
    
    if (emptyCells.length > 0) {
      const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)]
      get().makeMove(randomIndex)
    }
  },

  resetGame: () => set({
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    isGameOver: false
  }),

  resetAll: () => set({
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    isGameOver: false,
    gameMode: null,
    scores: { X: 0, O: 0 }
  })
}))

const checkWinner = (board) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

  for (let line of lines) {
    const [a, b, c] = line
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export default useGameStore