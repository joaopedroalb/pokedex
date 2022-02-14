import {useRouter} from 'next/router'
import { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import {formatNumber,getBgColorType,pokemonImagePathById} from '../../Utils/Functions'
import {ContainerBg,Content,Info,TypesInfo,HeaderTitle} from './style'
import {PokemonType} from '../../Data/Enum'
import TypeBox from '../../components/TypeBox';
import { ShinyContext } from '../../Contexts/ShinyContext';
import ShinyStar from '../../components/ShinyStar';
import { useFetch } from '../../hooks/useFetch';

type PokemonInfo ={
    name:string,
    types:[PokemonTypeAux]
    weight:number
    height:number
    id:string
}

type PokemonTypeAux = {
    slot:number
    type:Type
}

type Type = {
    name:string
}

export default function PokemonProfile() {

    const [pokemon,setPokemon] = useState<PokemonInfo|null>(null)
    const {isActive} = useContext(ShinyContext)

    let baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    const router = useRouter();
    const pokemonName = router.query.name

    const {fetchData} = useFetch<PokemonInfo>('https://pokeapi.co/api/v2/pokemon/ditto')

    useEffect(()=>{
        async function getPokemon(){
            const result = await fetchData<PokemonInfo>('https://pokeapi.co/api/v2/pokemon/'+pokemonName)
            if(result){
                console.log(result)
                setPokemon({
                    name:result.name,
                    types:result.types,
                    weight:result.weight,
                    height:result.height,
                    id:result.id
                })
            }
        }

        if(pokemonName !== undefined){
            getPokemon()
            console.log('entrei '+pokemonName)
        }

    },[pokemonName,fetchData])

    return (
        <ContainerBg>
            <Navbar/>
            <ShinyStar/>
            {
                pokemon&&(
                    <Content>
                        <img src={pokemonImagePathById(pokemon.id,isActive)}/>
                        <Info>
                            <HeaderTitle>
                                <h1 className='Title'>{pokemon.name}</h1>
                                <p>Nº{formatNumber(pokemon.id)}</p>
                            </HeaderTitle>
                            
                            <TypesInfo>
                            {
                                pokemon.types.map((t,i)=>{
                                    return <TypeBox key={i} name={t.type.name} />
                                })
                            }
                            </TypesInfo>
                            <p>weight {pokemon.weight/10} kg</p>
                            <p>Height {pokemon.height/10} m</p>
                        </Info>
                    </Content>
                )
            }
        </ContainerBg>
    );
}
