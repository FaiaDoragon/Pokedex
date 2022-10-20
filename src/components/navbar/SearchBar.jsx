import { React, useState, useContext } from 'react'
import { searchPokemon } from '../../../api';
import FavoriteContext from '../context/FavoritesContext';


export const SearchBar = () => {

    const [search, setSearch] = useState();

    const [pokemon, setPokemon] = useState()

    const {favoritePokemons} = useContext(FavoriteContext);

    const onChange = (event) => {
        setSearch(event.target.value);
    }

    const onClick = async (event) => {
        const data = await searchPokemon(search.toLowerCase())
        setPokemon(data);
    }

    return (
        <nav className='searchbar-all'>
            
            <div className='searchbar'>
                <div className='searchbar-top'>
                    <input placeholder='Buscar pokemon'
                        onChange={onChange}

                    />
                </div>
                <div className='searchbar-btn'>
                    <button onClick={onClick}>Buscar</button>
                </div>

            </div>

            
                <div className='resultado'>

                    {pokemon &&
                        <div>
                            <div>Nombre: {pokemon.name}</div>
                            <div>Peso: {pokemon.weight}</div>
                            <div>Altura: {pokemon.height}</div>
                            <img src={pokemon.sprites.front_default} alt="" />
                        </div>
                    }
                </div>
                <div className='fav'>❤️ {favoritePokemons.length} </div>
            
        </nav>
    )

}
