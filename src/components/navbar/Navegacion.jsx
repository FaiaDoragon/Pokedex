import { React, useState } from 'react'
import { searchPokemon } from '../../../api';

export const Navegacion = () => {

    const [search, setSearch] = useState();

    const [pokemon, setPokemon] = useState()

    const onChange = (event) => {
        setSearch(event.target.value);
    }

    const onClick = async (event) => {
        const data = await searchPokemon(search)
        setPokemon(data);
    }

    return (
        <nav>
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
                
                { pokemon &&
                    <div>
                        <div>Nombre: {pokemon.name}</div>
                        <div>Peso: {pokemon.weight}</div>
                        <div>Altura: {pokemon.height}</div>
                        <img src={pokemon.sprites.front_default} alt="" />
                    </div>
                }
            </div>
        </nav>
    )

}
