import styled from "styled-components"

export const Card = styled.div`
    width: 300px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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