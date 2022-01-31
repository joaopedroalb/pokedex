export const getId = (path:string) =>{
    let id = path.replace('https://pokeapi.co/api/v2/pokemon','')
    id = id.replaceAll('/','')

    return id;
}

export const pokemonImagePathDefault = (url:string) =>{
    const pokemonId = getId(url)

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`
}

export const pokemonImagePathShiny = (url:string) =>{
    const pokemonId = getId(url)

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemonId}.png`
}