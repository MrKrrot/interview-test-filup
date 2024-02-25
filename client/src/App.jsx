import { Route, Routes } from 'react-router-dom'

import { Home, Pokedex, Pokemon, Trainers, EditTrainer, NotFound } from '@pages'
import { TrainerContextProvider } from './context/TrainerProvider'

function App() {
  return (
    <TrainerContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:pokemonId" element={<Pokemon />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/trainers/new" element={<EditTrainer />} />
        <Route path="/trainers/:trainerId" element={<EditTrainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TrainerContextProvider>
  )
}

export default App
