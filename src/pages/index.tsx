import type { NextPage } from 'next'
import styled from 'styled-components';

const Home: NextPage = () => {
  const Title = styled.h1`
    color:red;
  `;

  return (
    <div>
      <Title>
        Pokedex
      </Title>
    </div>
  )
}

export default Home
