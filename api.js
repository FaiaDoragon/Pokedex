
export const searchPokemon = async (pokemon) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        const data = await response.json()
        return data;
    } catch (error) {
        alert(`${pokemon} no existe`)
    }
}