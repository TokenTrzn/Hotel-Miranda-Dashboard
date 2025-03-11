import styled from "styled-components"

export const OptionsContainerStyled = styled.div`
    z-index: 10;
    position: absolute;
    top: 30%;
    right: 20%;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: .75rem;
    gap: 1rem;
    padding: 1em;
    font-family: 'Poppins';
    background: #135846;
`

export const ButtonOptionStyled = styled.button`
    padding: 0.75em;
    width: 8rem;
    height: auto;
    text-align: center;
    border: 1px solid #135846;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #393939;
    background: #fff;

    &:hover {
        background-color: #135846;
        border: 1px solid #ffffff;

        p,
        svg {
            color: #fff;
        }    
    }
`

export const ButtonOptionStyledTextStyled = styled.p`
    color: #135846;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Poppins';
    margin: 0;
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }

    &:focus {
        text-decoration: none; 
        outline: none;
    }

    &:active {
        text-decoration: none;
    }
`