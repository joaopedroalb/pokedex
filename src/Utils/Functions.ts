export const getId = (path:string) =>{
    let id = path.replace('https://pokeapi.co/api/v2/pokemon','')
    id = id.replaceAll('/','')

    return id;
}
export const pokemonImagePathDefaultById = (id:string) =>{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
}

export const pokemonImagePathShinyById = (id:string) =>{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`
}


export const pokemonImagePathDefaultByUrl = (url:string) =>{
    const pokemonId = getId(url)
    
    return pokemonImagePathDefaultById(pokemonId)
}

export const pokemonImagePathShinyByUrl = (url:string) =>{
    const pokemonId = getId(url)

    return pokemonImagePathShinyById(pokemonId)
}