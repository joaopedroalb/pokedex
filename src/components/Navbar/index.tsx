import Image from "next/image";
import { Nav,Items } from "./style";
import Pokeball from '../../../public/pokeballpng.png'

export default function Navbar() {
  return(
    <Nav>
        <Items>
            <h1>Pokemon</h1>
            <h1>Types</h1>
        </Items>

        <Image src={Pokeball} width={70} height={70}/>
        <Items>
            <h1>Search</h1>
        </Items>
    </Nav>
  );
}
