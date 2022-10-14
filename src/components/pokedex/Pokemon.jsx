import React from 'react'

export const Pokemon = (props) => {
    const {pokemon} = props;
    return (
        <div className='pokemon-card'>
            <div className='pokemon-img'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div>
                <div>
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div>
                    <div>
                        {pokemon.types.map((type, idx) => {
                            return (
                                <div key={idx}>{type.type.name}</div>
                            )
                        })}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
