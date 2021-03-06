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
  const pokemonNumber = getId(props.url)

  function renderImage(){
    return <img src={pokemonImagePathUrl(props.url,isActive)} 
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
