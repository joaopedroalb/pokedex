import Image from "next/image";
import { Nav,Items } from "./style";
import Pokeball from '../../../public/pokeballpng.png'
import Link from "next/link";

export default function Navbar() {
  return(
    <Nav>
        <Items>
          <Link href='/' passHref>
            <h1>Pokemon</h1>
          </Link>
        </Items>

        <a href="https://github.com/joaopedroalb/pokedex">
          <Image src={Pokeball} width={70} height={70} alt="Poke Ball"/>
        </a>

        <Items>
          <h1>Types</h1>
        </Items>
    </Nav>
  );
}
