import type { NextPage } from 'next'
import { useEffect,useState } from 'react';
import ListCard from '../components/ListCard';
import Navbar from '../components/Navbar';
import ShinyStar from '../components/ShinyStar';

type Pokemon = {
  name:string
  url:string
}

const Home: NextPage = () => {

  const [lstPokemons, setLstPokemons] = useState<Array<Pokemon>|null>(null)

  useEffect(()=>{
    async function handleFetch(){
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=36&offset=0')
      const data = await resp.json()
      console.log(data)
      setLstPokemons(data.results)
    }

    handleFetch()
  },[])
  

  return (
    <>
      <Navbar/>
      <ShinyStar/>
      {
        lstPokemons&&<ListCard list={lstPokemons}/>
      }
    </>
  )
}

export default Home
