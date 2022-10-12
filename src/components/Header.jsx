import React from 'react'

import '../styles/header.css'

export const Header = () => {

  const imagenLogo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  
  return (
    <header>
      <div>
        <img className='logo'
          src={imagenLogo}
          alt="PokeApi" />
      </div>
    </header>
  )
}
