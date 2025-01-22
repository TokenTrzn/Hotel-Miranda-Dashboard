import styled from "styled-components"

export const DefaultCreateButtonStyled = styled.button`
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    border: 1px solid #135846;
    border-radius: .75rem;
    background: #ffffff;
    cursor: pointer;
    text-decoration: none;

    svg {
        color: #135846;
        transform: scale(1.2);
    }
    
    p {
        text-decoration: none;
    }

    &:hover {
        background-color: #135846;

        p,
        svg {
            color: #fff;
        }
        
    }
`

export const DefaultCreateButtonText = styled.p`
    color: #135846;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Poppins';
    margin: 0;
    padding-right: 1rem;
    text-decoration: none;

    &:hover {
        text-decoration: none; /* Sin subrayado en hover */
    }

    &:focus {
        text-decoration: none; /* Sin subrayado al enfocarse */
        outline: none; /* Elimina bordes de enfoque, si no son deseados */
    }

    &:active {
        text-decoration: none; /* Sin subrayado al hacer clic */
    }
`