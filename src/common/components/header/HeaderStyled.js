import styled from "styled-components"

export const NavStyled = styled.nav`
    background: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    font-size: 1.5rem;
    color: #000000;
`

export const NavContainerIconsStyled = styled.div`
    color: #262626;
    display: flex;
    flex-direction: row;
    font-family: "Poppins";
    align-items: center;
    gap: 2rem;
    justify-content: flex-end;  
    
    svg {
        font-size: 2rem;
        cursor: pointer;
    }

    h2 {
        font-size:  2rem;
        font-family: 'Poppins';
        padding-left: 2rem;
    }

    &.secondary {
        color: #135846;
        gap: 4rem;
    }
`