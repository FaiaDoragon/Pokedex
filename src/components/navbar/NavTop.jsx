import React from 'react'

export const NavTop = () => {

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
