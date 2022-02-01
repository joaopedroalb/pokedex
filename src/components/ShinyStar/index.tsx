import {Container} from './style'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { useContext } from 'react'
import { ShinyContext } from '../../Contexts/ShinyContext'

export default function ShinyStar() {
    const {isActive,setIsActive} = useContext(ShinyContext)

    return (
    <Container onClick={()=>setIsActive((value)=>!value)}>
        {
            isActive?<AiFillStar size={70}/> : <AiOutlineStar size={70}/>
        }
    </Container>
    )
}
