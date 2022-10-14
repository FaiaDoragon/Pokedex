import React from 'react'
import { Pokemon } from './Pokemon'

export const Pokedex = (props) => {
    
    const {pokemons} = props

    return (
        
        <div>
            <div className='header'>
                <h1>Pokedex</h1>
                <div>Paginacion</div>
            </div>
            <div className='pokedex-grid'>
                {
                
                pokemons.map((pokemon, idx) => {
                    return (
                         
                        <Pokemon pokemon={pokemon} key={pokemon.name} />
                        
                    )
                })

                }
            </div>
        </div>
    )
}