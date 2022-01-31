import {Card} from './style'
import {pokemonImagePathDefault,pokemonImagePathShiny} from '../../Utils/Functions'
import { useState } from 'react'

type PokeCardProps = {
    name:string
    url:string
}

export default function PokeCard(props:PokeCardProps) {

  const [shiny,setShiny] = useState(false)


  const pathImageDefault = pokemonImagePathDefault(props.url)
  const pathImageShiny = pokemonImagePathShiny(props.url)

  function renderImage(){
    if(shiny){
      return <img src={pathImageShiny} alt={props.name} onMouseOut={()=>setShiny(false)}/>
    }
      
    
    return <img src={pathImageDefault} alt={props.name} onMouseOver={()=>setShiny(true)}/>
  }

  return (
    <Card>
        {renderImage()}
        <h2>{props.name}</h2>
    </Card>
  );
}
