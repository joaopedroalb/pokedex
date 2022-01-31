import {Card} from './style'
import {pokemonImagePathDefault,pokemonImagePathShiny} from '../../Utils/Functions'
import { useState } from 'react'

type PokeCardProps = {
    name:string
    url:string
}

export default function PokeCard(props:PokeCardProps) {
  
  const pathImageDefault = pokemonImagePathDefault(props.url)
  const pathImageShiny = pokemonImagePathShiny(props.url)

  const [pathImage,setPathImage] = useState(pathImageDefault) 

  

  function renderImage(){
    return <img src={pathImage} 
                alt={props.name} 
                onMouseOver={()=>setPathImage(pathImageShiny)}
                onMouseOut={()=>setPathImage(pathImageDefault)}
            />
  }

  return (
    <Card>
        {renderImage()}
        <h2>{props.name}</h2>
    </Card>
  );
}
