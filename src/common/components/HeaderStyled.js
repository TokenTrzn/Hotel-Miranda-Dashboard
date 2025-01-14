import styled from "styled-components"

export const NavStyled = styled.nav`
    width: 100%;
    background: #ffffff;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    top: 0;
    margin-left: 30%;
`

export const NavContainerIconsStyled = styled.div`
    display: flex;
    align-items: center;

    svg {
        font-size: 3rem;
        color: #000000;
    }

    h2 {
        font-size:  2rem;
        font-family: 'Poppins';
        color: #000000;
        padding-left: 2rem;
    }
`

export const NavContainerAlertIconsStyled = styled.div`

    svg {
        font-size: 3rem;
        color: #000000;
    }
`