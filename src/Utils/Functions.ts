import {PokemonType,PokemonTypeFont} from '../Data/Enum'

export const getId = (path:string) =>{
    let id = path.replace('https://pokeapi.co/api/v2/pokemon','')
    id = id.replaceAll('/','')

    return id;
}

export const pokemonImagePathById = (id:string,isShiny:boolean) =>{
    const shinyBool = isShiny? 'shiny/':''
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${shinyBool}${id}.png`
}

export const pokemonImagePathUrl = (url:string,isShiny:boolean) =>{
    const pokemonId = getId(url)

    return pokemonImagePathById(pokemonId,isShiny)
}

export const formatNumber = (pokemonNumber:string) =>{
    if(pokemonNumber.length>=3)
      return pokemonNumber

    if(pokemonNumber.length==2)
      return "0"+pokemonNumber

    return "00"+pokemonNumber
  }

export const getBgColorType = (type:string) =>{
    const pokeType : PokemonType = PokemonType[type as keyof typeof PokemonType];

    return pokeType
}

export const getFontColorType = (type:string) =>{
    const pokeType : PokemonTypeFont = PokemonTypeFont[type as keyof typeof PokemonTypeFont];

    return pokeType
}