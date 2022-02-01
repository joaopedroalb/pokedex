import {Card,NumberContainer} from './style'
import {pokemonImagePathDefaultByUrl,pokemonImagePathShinyByUrl,getId,formatNumber} from '../../Utils/Functions'
import { useState } from 'react'
import Link from 'next/link'

type PokeCardProps = {
    name:string
    url:string
}

export default function PokeCard(props:PokeCardProps) {
  
  const pathImageDefault = pokemonImagePathDefaultByUrl(props.url)
  const pathImageShiny = pokemonImagePathShinyByUrl(props.url)
  const pokemonNumber = getId(props.url)

  const [pathImage,setPathImage] = useState(pathImageDefault) 

  

  function renderImage(){
    return <img src={pathImage} 
                alt={props.name} 
                onMouseOver={()=>setPathImage(pathImageShiny)}
                onMouseOut={()=>setPathImage(pathImageDefault)}
            />
  }

  return (
    <Link href={`/pokemon/${props.name}`} passHref>
      <Card>
          {renderImage()}
          <NumberContainer>Nº{formatNumber(pokemonNumber)}</NumberContainer>
          <h2 className='Title'>{props.name}</h2>
      </Card>
    </Link>
  );
}
