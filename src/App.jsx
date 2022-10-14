
import { useState, useEffect } from "react";
import { NavTop } from './components/navbar/NavTop'
import { SearchBar } from './components/navbar/SearchBar'
import { Pokedex } from './components/pokedex/Pokedex'
import { getPokemonData, getPokemons } from '../api'

import './styles/header.css'


function App() {

  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [])
  

  return (
    <>
      <NavTop />
      <SearchBar />
      <div className='App'>
        <Pokedex pokemons={pokemons} />
      </div>
    </>
  )
}

export default App
