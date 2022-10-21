import { React, useState, useContext } from 'react'
import FavoriteContext from '../context/FavoritesContext';


export const SearchBar = (props) => {

    const { onSearch } = props;

    const [search, setSearch] = useState();

    const [pokemon, setPokemon] = useState()

    const {favoritePokemons} = useContext(FavoriteContext);

    const onChange = (event) => {
        setSearch(event.target.value.toLowerCase());
        if(event.target.value.length === 0) {
            onSearch(null)
        }
    }

    const onClick = async (event) => {
        onSearch(search);
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
