import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePokemon } from '@hooks'

export const PokemonCard = ({ name }) => {
  const [pokemon, setPokemon] = useState(null)
  const { fetchPokemon } = usePokemon()
  const navigate = useNavigate()

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchPokemon(name)
      setPokemon(data)
    }

    fetch()
  }, [])

  if (!pokemon) {
    return null
  }

  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out"
      onClick={handleNavigate}
    >
      <h2 className="text-xl font-bold mb-2">{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto" />
      <div>
        {pokemon.types.map(type => (
          <span
            key={type.type.name}
            className="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-xs mr-2"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  )
}
