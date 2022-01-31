import type { NextPage } from 'next'
import { useEffect,useState } from 'react';
import Navbar from '../components/Navbar';
import PokeCard from '../components/Pokecard';

type Pokemon = {
  name:string
  url:string
}

const Home: NextPage = () => {

  const [lstPokemons, setLstPokemons] = useState<Array<Pokemon>|null>(null)

  useEffect(()=>{
    async function handleFetch(){
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      const data = await resp.json()
      console.log(data)
      setLstPokemons(data.results)
    }

    handleFetch()
  },[])
  

  return (
    <>
      <Navbar/>
      <div style={{width:'100%',display:'flex',alignItems:'center',flexDirection:'column'}}>
      {
        lstPokemons&&
          lstPokemons.map((pokemon,i)=>{
           return <PokeCard key ={i} name={pokemon.name} url={pokemon.url} />
          })
      }
      </div>
    </>
  )
}

export default Home
