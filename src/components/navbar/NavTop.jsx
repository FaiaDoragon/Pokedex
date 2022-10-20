import React from 'react'

export const NavTop = () => {

  const imagenLogo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  
  return (
    <div className='logo'>
      <div>
        <img className='image'
          src={imagenLogo}
          alt="PokeApi" />
      </div>
    </div>
  )
}
