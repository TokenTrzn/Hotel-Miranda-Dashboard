import styled from "styled-components"

export const ContactStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactKPIContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const ContactKPIStyled = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff;
    padding: 1.5rem;
    gap: 1.5rem;
    border-radius: 1rem;
    margin-top: 3rem;
    width: 25%;

    svg {
        font-size: 3rem;
        color: #E23428;
        background: #FFEDEC;
        padding: 1rem;
        border-radius: 1rem;
    }

    &:hover {
        box-shadow: 0px 6px 12px #d5d5d5;

        svg {
            color: #ffffff;
            background: #E23428;
        }
    }
`

export const ContactKPIInfoStyled = styled.div`
    text-align: start;

`

export const ContactKPITextStyled = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 400;
    color: #4E4E4E;
    margin: 0;
`

export const ContactKPIProfileRowStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ContactKPIProfilePhotoStyled = styled.img`
    width: 4rem;
    height: auto;
    padding: .4rem;
    border-radius: 1rem;
`

export const ContactKPIProfileInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: space-evenly;
`

export const ContactKPITimeStyled = styled.p`
    font-family: 'Poppins';
    font-size: .875rem;
    font-weight: 300;
    color: #787878;
    margin: 0;
`

export const ContactKPIIconsStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const ContactKPIIconItemStyled = styled.img`
    width: 1.5rem;
    height: auto;
    margin-right: 15%;
`