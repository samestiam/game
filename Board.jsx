// components/Board.jsx
import useGameStore from '../store/GameStore'

const Board = () => {
  const { board, makeMove, isGameOver } = useGameStore()

  return (
    <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow-lg">
      {board.map((cell, index) => (
        <button
          key={index}
          onClick={() => makeMove(index)}
          disabled={cell !== null || isGameOver}
          className={`
            game-cell btn-hover
            ${cell === null ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white'}
            ${cell === 'X' ? 'text-blue-500' : 'text-red-500'}
          `}
        >
          {cell}
        </button>
      ))}
    </div>
  )
}

export default Board