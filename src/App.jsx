
import { useState, useEffect } from "react";
import { NavTop } from './components/navbar/NavTop'
import { SearchBar } from './components/navbar/SearchBar'
import { Pokedex } from './components/pokedex/Pokedex'
import { getPokemons } from '../api'

import './styles/header.css'

function App() {

  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      console.log(data);
    } catch (error){

    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [])
  

  return (
    <>
      <NavTop />
      <SearchBar />
      <div className='App'>
        <Pokedex />
      </div>
    </>
  )
}

export default App
