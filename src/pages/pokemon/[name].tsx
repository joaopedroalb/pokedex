import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import {pokemonImagePathDefaultById,pokemonImagePathDefaultByUrl} from '../../Utils/Functions'

type PokemonInfo ={
    name:string,
    types:[string]
    weigth:number
    height:number
    numberId:string
}

export default function PokemonProfile() {
    const [pokemon,setPokemon] = useState<PokemonInfo|null>(null)

    let baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    const router = useRouter();
    const pokemonName = router.query.name

    useEffect(()=>{
        async function handleFetchPokemon(){
            const resp = await fetch(baseUrl+pokemonName)
            const data = await resp.json()

            setPokemon({
                name:data.name,
                types:data.types.map((x:any)=>x.type.name),
                weigth:parseFloat(data.weight),
                height:parseFloat(data.height),
                numberId:data.id
            })
        }

        if(pokemonName){
            handleFetchPokemon()
            console.log('entrei '+pokemonName)
        }

    },[pokemonName])

    return (
        <div>
            <Navbar/>
            {
                pokemon&&(
                    <div>
                        <img src={pokemonImagePathDefaultById(pokemon.numberId)}/>
                        <h1>{pokemon.name}</h1>
                        <p>{pokemon.numberId}</p>
                        {
                            pokemon.types.map((t,i)=>{
                                return <p key={i}>{t}</p>
                            })
                        }
                        <p>{pokemon.weigth}</p>
                        <p>{pokemon.height}</p>
                    </div>
                )
            }
        </div>
    );
}
