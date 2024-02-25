import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePokemon } from '../hooks/usePokemon'
import { jsPDF } from 'jspdf'

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null)
  const { pokemonId } = useParams()
  const { fetchPokemon, error } = usePokemon()
  const [pdfData, setPdfData] = useState('')

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchPokemon(pokemonId)
      setPokemon(data)
      setPdfData(`Name: ${data.name}
Height: ${data.height} | Weight: ${data.weight}
Types: ${data.types.map(type => type.type.name).join(', ')}
${data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join('\n')}
      `)
    }

    fetch()
  }, [])

  const handleDownloadPdf = () => {
    const doc = new jsPDF()
    doc.setFont('helvetica')
    doc.text('Pokemon Information', 80, 10)
    doc.setFontSize(12)
    doc.addImage(pokemon.sprites.front_default, 'JPEG', 50, 20, 120, 120)
    doc.text(pdfData, 70, 140)
    doc.save('pokemon_info.pdf')
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="container mx-auto">
      {pokemon && (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto" />
          <p className="mt-4">
            Height: {pokemon.height} | Weight: {pokemon.weight}
          </p>
          <div className="flex justify-center mt-8">
            {pokemon.types.map(type => (
              <span
                key={type.type.name}
                className="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-xs mr-2 mb-4"
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <div className="mt-8">
            {pokemon.stats.map(stat => (
              <p key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </p>
            ))}
          </div>
          <button
            onClick={handleDownloadPdf}
            className="bg-blue-500 text-white rounded-lg p-2 px-4 hover:bg-blue-600 transition-all duration-200 ease-in-out"
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  )
}

export default Pokemon
