import styled from "styled-components"

export const KPIStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.5rem;
    gap: 1.5rem;
    border-radius: 1rem;
    background: #f8f8f8;

    svg {
        font-size: 3rem;
        color: #E23428;
        background: #FFEDEC;
        padding: 1rem;
        border-radius: 1rem;
    }

    &:hover {
        background: #ffffff;
        box-shadow: 0px 6px 12px #d5d5d5;

        svg {
            color: #ffffff;
            background: #E23428;
        }
    }
`

export const KPIInfoStyled = styled.div`
    text-align: start;

`

export const KPINumberStyled = styled.p`
    font-family: 'Poppins';
    font-size: 1.875rem;
    font-weight: 700;
    color: #393939;
    margin: 0;
`

export const KPITextStyled = styled.p`
    font-family: 'Poppins';
    font-size: .875rem;
    font-weight: 300;
    color: #787878;
    margin: 0;
`