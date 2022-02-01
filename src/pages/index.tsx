import type { NextPage } from 'next'
import { useEffect,useState } from 'react';
import ListCard from '../components/ListCard';
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
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=493&offset=0')
      const data = await resp.json()
      console.log(data)
      setLstPokemons(data.results)
    }

    handleFetch()
  },[])
  

  return (
    <>
      <Navbar/>
      {
        lstPokemons&&<ListCard list={lstPokemons}/>
      }
    </>
  )
}

export default Home
