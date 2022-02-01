import PokeCard from '../Pokecard';
import {Container} from './style';

type ListCardProps = {
    list: Pokemon[]
}

type Pokemon = {
    name:string
    url:string
  }

export default function ListCard({list}:ListCardProps) {
  return (
    <Container>
            {
                list.map((pokemon,i)=>{
                    return <PokeCard key ={i} name={pokemon.name} url={pokemon.url} />
                })
            }
    </Container>
  );
}
