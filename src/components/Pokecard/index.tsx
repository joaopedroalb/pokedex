import {Card} from './style'
import {pokemonImagePathDefault} from '../../Utils/Functions'

type PokeCardProps = {
    name:string
    url:string
}

export default function PokeCard(props:PokeCardProps) {
    const pathImage = pokemonImagePathDefault(props.url)

  return (
    <Card>
        <img src={pathImage} alt={props.name}/>
        <h2>{props.name}</h2>
        <p>{pathImage}</p>
    </Card>
  );
}
