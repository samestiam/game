import { useEffect } from 'react'
import useGameStore from './store/GameStore'
import Board from './components/Board'
import GameInfo from './components/GameInfo'
import WelcomeScreen from './components/WelcomeScreen'

const App = () => {
  const {
    currentPlayer,
    winner,
    isGameOver,
    gameMode,
    makeCPUMove,
    resetGame,
    resetAll
  } = useGameStore()

  useEffect(() => {
    if (gameMode === 'cpu' && currentPlayer === 'O' && !winner && !isGameOver) {
      const timer = setTimeout(() => {
        makeCPUMove()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentPlayer, gameMode, winner, isGameOver, makeCPUMove])

  if (!gameMode) {
    return <WelcomeScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-pink-400 flex flex-col items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
        <GameInfo />
        <Board />
        <div className="mt-6 space-x-4">
          <button
            onClick={resetGame}
            className="game-button bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-600"
          >
            Nouvelle partie
          </button>
          <button
            onClick={resetAll}
            className="game-button bg-red-500 hover:bg-red-600 focus:ring-red-600"
          >
            Quitte la partie
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
