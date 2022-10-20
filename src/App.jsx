
import { useState, useEffect } from "react";
import { NavTop } from './components/navbar/NavTop'
import { SearchBar } from './components/navbar/SearchBar'
import { Pokedex } from './components/pokedex/Pokedex'
import { getPokemonData, getPokemons } from '../api'
import { FavoriteProvider } from "./components/context/FavoritesContext";

import './styles/header.css'
import './styles/styless.css'



function App() {

  const [pokemons, setPokemons] = useState([]);

  const [page, setPage] = useState(0);

  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);

  const [favorites, setFavorites] = useState(["bulbasaur"]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(15, 15 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 15))
    } catch (err) { }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page])

  const updateFavoritePokemon = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if(isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name)
    }
    setFavorites(updated);
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemon: updateFavoritePokemon
      }}
    >
      <>
        <header>
          <NavTop />
          <SearchBar />
        </header>
        <div className='App'>
          <Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />

        </div>
      </>
    </FavoriteProvider>
  )
}

export default App
