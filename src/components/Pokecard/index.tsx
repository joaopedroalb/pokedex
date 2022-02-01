import {Card,NumberContainer} from './style'
import {pokemonImagePathUrl,getId,formatNumber} from '../../Utils/Functions'
import { useContext, useState } from 'react'
import Link from 'next/link'
import { ShinyContext } from '../../Contexts/ShinyContext'

type PokeCardProps = {
    name:string
    url:string
}

export default function PokeCard(props:PokeCardProps) {

  const {isActive} = useContext(ShinyContext)
  
  const pathImageDefault = pokemonImagePathUrl(props.url,isActive)
  const pokemonNumber = getId(props.url)

  const [pathImage,setPathImage] = useState(pathImageDefault) 

  

  function renderImage(){
    return <img src={pathImage} 
                alt={props.name} 
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
