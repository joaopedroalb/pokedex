import styled from "styled-components"

export const Card = styled.div`
    width: 300px;
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    padding: 1rem;
    cursor: pointer;

    img{
        width: 150px;
    }

    transition: 400ms;

    :hover{
        transform: scale(1.05);
    }
`

export const NumberContainer = styled.span`
    width: 70%;
    text-align: start;
`