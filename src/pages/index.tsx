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
  const [loading,setLoading] = useState(false)

  const [limit,setLimit] = useState(0)

  

  async function handleScroll(){
    if(window.innerHeight + document.documentElement.scrollTop + 2 < document.documentElement.offsetHeight || loading || limit > 600)
      return
    
    setLimit((value)=>value+36)
  }

  useEffect(()=>{
    async function handleFetch(){
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
      const data = await resp.json()
      setLstPokemons(data.results)
    }
    handleFetch()
  },[limit])


  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener('scroll',handleScroll)
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
