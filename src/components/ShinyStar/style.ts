import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    left: 92%;
    bottom: 5vh;
    margin-right: 1rem;
    z-index: 2;
    -webkit-user-select:none;
    -moz-user-select:none;
    user-select:none;
    color: var(--light-blue);

    svg{
        cursor: pointer;
    }
`