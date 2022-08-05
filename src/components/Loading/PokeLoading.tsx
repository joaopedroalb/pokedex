import React from 'react'
import { LoadingBg } from './style'
import LoadingGif from '../../../public/gifPokeBall.gif'
import Image from 'next/image'

type LoadingProps = {
  isLoading: boolean
} 

export default function PokeLoading({isLoading}:LoadingProps) {
  if(!isLoading) return null

  return (
    <LoadingBg>
      <Image src={LoadingGif} alt="Pokeball spinning loading" className='imageContent'/>
    </LoadingBg>
  )
}
