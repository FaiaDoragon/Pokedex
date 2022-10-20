import React from 'react'
import { Pokemon } from './Pokemon'
import { Pagination } from '../pagination/Pagination';

export const Pokedex = (props) => {

    const { pokemons, page, setPage, total, loading } = props

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage)
    }

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage)
    }



    return (
        <div>

            <div className='subHeader'>
                <h1>pokedex</h1>
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
            {loading ?
                <div>Cargando pokemones ...</div>
                :
                <div className='pokedex-grid'>
                    {
                        pokemons.map((pokemon, idx) => {
                            return (

                                <Pokemon pokemon={pokemon} key={pokemon.name} />

                            )
                        })

                    }
                </div>
            }
        </div>
    )
}