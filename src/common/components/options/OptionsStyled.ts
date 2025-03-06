import styled from "styled-components"

export const OptionsContainerStyled = styled.div`
    z-index: 1;
    position: relative;
    display: flex;
    top: 50%;
    left: 93%;
    transform: translate(-50%, 25%);
    flex-direction: column;
    gap: 0.5rem;
    padding: 1em;
    font-family: 'Poppins';
    background: #a5a5a5;
`

export const ButtonOption = styled.button`
    padding: 0.5em;
    width: 7.5rem;
    height: auto;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #393939;
    background: #fff;
`