import useGameStore from '../store/GameStore';

const WelcomeScreen = () => {
  const setGameMode = useGameStore(state => state.setGameMode);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">
            Bienvenue au Jeu de Morpion
          </h1>
          <h2 className="text-2xl font-bold mb-8 text-gray-600">
            Choisissez votre mode de jeu
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setGameMode('player')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 
                       text-white rounded-lg hover:from-blue-600 hover:to-blue-700 
                       font-bold shadow-lg transform hover:-translate-y-1 
                       transition-all duration-200"
            >
              Joueur contre Joueur
            </button>
            <button
              onClick={() => setGameMode('cpu')}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 
                       text-white rounded-lg hover:from-green-600 hover:to-green-700 
                       font-bold shadow-lg transform hover:-translate-y-1 
                       transition-all duration-200"
            >
              Joueur contre Ordinateur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;