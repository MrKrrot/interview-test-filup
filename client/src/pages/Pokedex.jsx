import { useState, useEffect } from 'react'
import { usePokemon } from '@hooks'
import { PokemonList } from '@components'
import { Link } from 'react-router-dom'

const Pokedex = () => {
  const { pokemon, fetchAllPokemon, error } = usePokemon()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchAllPokemon()
  }, [])

  const handleSearch = e => {
    e.preventDefault()
    fetchAllPokemon(page, search)
  }

  const handleChangePage = page => {
    setPage(page)
    fetchAllPokemon(page, search)
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 block mb-4">
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-center">Pokédex</h1>
      <form onSubmit={handleSearch} className="text-center mb-8">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for a Pokémon"
          className="p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg p-2 px-4 hover:bg-blue-600 transition-all duration-200 ease-in-out"
        >
          Search
        </button>
      </form>
      {error && <div>{error}</div>}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => handleChangePage(page - 1)}
          disabled={page === 1}
          className="bg-blue-500 text-white rounded-lg p-2 px-4 hover:bg-blue-600 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={() => handleChangePage(page + 1)}
          disabled={page === 8}
          className="bg-blue-500 text-white rounded-lg p-2 px-4 hover:bg-blue-600 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
      <PokemonList data={pokemon} />
    </div>
  )
}

export default Pokedex
