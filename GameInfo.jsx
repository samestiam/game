import useGameStore from '../store/GameStore';

const GameInfo = () => {
  const { currentPlayer, winner, isGameOver, scores } = useGameStore();

  return (
    <div className="text-center my-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">
        {winner 
          ? `Joueur ${winner} a gagné !`
          : isGameOver 
          ? "Match nul !"
          : `Au tour du joueur ${currentPlayer}`}
      </h2>
      <div className="flex justify-center space-x-8">
        <span className="text-blue-500 font-bold">Score X: {scores.X}</span>
        <span className="text-red-500 font-bold">Score O: {scores.O}</span>
      </div>
    </div>
  );
};

export default GameInfo;
