import type { NextPage } from 'next'
import { useEffect,useState,useCallback } from 'react';
import ListCard from '../components/ListCard';
import PokeLoading from '../components/Loading/PokeLoading';
import Navbar from '../components/Navbar';
import ShinyStar from '../components/ShinyStar';
import { useFetch } from '../hooks/useFetch';

type Pokemon = {
  name:string
  url:string
}

const Home: NextPage = () => {

  const [limit,setLimit] = useState(0)
  

  const handleScroll = useCallback(
    async() => {
      if(window.innerHeight + document.documentElement.scrollTop + 2 < document.documentElement.offsetHeight || limit > 600)
      return
    
    setLimit(limit+36)
    },

    [limit],
  );

  const {data:lstPokemon, isFetching} = useFetch<Pokemon[]>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)


  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener('scroll',handleScroll)
  },[handleScroll])

  const PageLayout = () => {
    return (
      <>
        <Navbar/>
        <ShinyStar/>
        {
          lstPokemon&&<ListCard list={lstPokemon}/>
        }
      </>
    )
  } 
  

  return (
    <>
      {isFetching?<PokeLoading isLoading={isFetching}/>:PageLayout()}
    </>
  )
}

export default Home
