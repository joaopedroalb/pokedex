import {SearchContainer,Input} from './style'

type SearchPokemonProps = {
  onChangeEvent: (value:string)=>void
}

export default function SearchPokemon(props:SearchPokemonProps) {
  return (
      <SearchContainer>
          <h1>Search Pokemon</h1>
          <Input type="text" onChange={event=>props.onChangeEvent(event.target.value)}/>
      </SearchContainer>
  );
}
