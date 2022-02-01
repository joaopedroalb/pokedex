import styled from "styled-components";

export const ContainerBg = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
`

export const Content = styled.div`
    width: 80%;
    margin: 1rem;
    padding: 1rem 2rem 4rem 4rem;
    background-color: var(--white);
    border-radius: 20px;
    min-height: 400px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    

    .Title{
        font-size: 5rem;
    }

    img{
        width: 350px;
    }
    
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 2rem;
`

export const TypesInfo = styled.div`
    display: flex;
    gap: 1rem;
`

export const HeaderTitle = styled.div`
    display: flex;
    align-items: baseline;
`