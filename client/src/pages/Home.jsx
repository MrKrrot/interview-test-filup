import { useNavigate } from 'react-router-dom'
import trainerImage from '@/assets/trainer.png'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Pokemon API Interview</h1>
      <div className="flex justify-center gap-8">
        <div
          className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out"
          onClick={() => navigate('/trainers')}
        >
          <h2 className="text-xl font-bold mb-2">Trainers</h2>
          <img src={trainerImage} alt="Trainers" className="w-24 mx-auto" />
        </div>
        <div
          className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out"
          onClick={() => navigate('/pokedex')}
        >
          <h2 className="text-xl font-bold mb-2">Pokédex</h2>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            alt="Pokédex"
            className="w-24 mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
