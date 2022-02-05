import { useState } from 'react';
import PokeCard from '../Pokecard';
import SearchPokemon from '../SearchPokemon';
import {Container,ContainerBg} from './style';

type ListCardProps = {
    list: Pokemon[]
}

type Pokemon = {
    name:string
    url:string
  }

export default function ListCard({list}:ListCardProps) {
  const [filter,setFilter] = useState('') 

  function handleChange(value:string){
    setFilter(value)
  }

  return (
    <ContainerBg>
      <SearchPokemon onChangeEvent={handleChange}/>
      <Container>
            {
                list.filter(x=>x.name.includes(filter)).map((pokemon,i)=>{
                    return <PokeCard key ={i} name={pokemon.name} url={pokemon.url} />
                })
            }
      </Container>
    </ContainerBg>
  );
}
