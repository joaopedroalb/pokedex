import {Card,NumberContainer} from './style'
import {pokemonImagePathDefault,pokemonImagePathShiny,getId} from '../../Utils/Functions'
import { useState } from 'react'

type PokeCardProps = {
    name:string
    url:string
}

export default function PokeCard(props:PokeCardProps) {
  
  const pathImageDefault = pokemonImagePathDefault(props.url)
  const pathImageShiny = pokemonImagePathShiny(props.url)
  const pokemonNumber = getId(props.url)

  const [pathImage,setPathImage] = useState(pathImageDefault) 

  

  function renderImage(){
    return <img src={pathImage} 
                alt={props.name} 
                onMouseOver={()=>setPathImage(pathImageShiny)}
                onMouseOut={()=>setPathImage(pathImageDefault)}
            />
  }

  function formatNumber(){
    if(pokemonNumber.length>=3)
      return pokemonNumber

    if(pokemonNumber.length==2)
      return "0"+pokemonNumber

    return "00"+pokemonNumber
  }

  return (
    <Card>
        {renderImage()}
        <NumberContainer>Nº{formatNumber()}</NumberContainer>
        <h2>{props.name}</h2>
    </Card>
  );
}
