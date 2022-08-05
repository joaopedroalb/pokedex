import styled from "styled-components";

export const LoadingBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;

    .imageContent{
        min-width: 100%;
        min-height: 100%;
    }
`