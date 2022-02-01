import {useRouter} from 'next/router'
import { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import {formatNumber,getBgColorType,pokemonImagePathById} from '../../Utils/Functions'
import {ContainerBg,Content,Info,TypesInfo,HeaderTitle} from './style'
import {PokemonType} from '../../Data/Enum'
import TypeBox from '../../components/TypeBox';
import { ShinyContext } from '../../Contexts/ShinyContext';
import ShinyStar from '../../components/ShinyStar';

type PokemonInfo ={
    name:string,
    types:[string]
    weigth:number
    height:number
    numberId:string
}

export default function PokemonProfile() {
    const [pokemon,setPokemon] = useState<PokemonInfo|null>(null)
    const {isActive} = useContext(ShinyContext)

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
        <ContainerBg>
            <Navbar/>
            <ShinyStar/>
            {
                pokemon&&(
                    <Content>
                        <img src={pokemonImagePathById(pokemon.numberId,isActive)}/>
                        <Info>
                            <HeaderTitle>
                                <h1 className='Title'>{pokemon.name}</h1>
                                <p>Nº{formatNumber(pokemon.numberId)}</p>
                            </HeaderTitle>
                            
                            <TypesInfo>
                            {
                                pokemon.types.map((t,i)=>{
                                    return <TypeBox key={i} name={t} />
                                })
                            }
                            </TypesInfo>
                            <p>Weigth {pokemon.weigth/10} kg</p>
                            <p>Height {pokemon.height/10} m</p>
                        </Info>
                    </Content>
                )
            }
        </ContainerBg>
    );
}
