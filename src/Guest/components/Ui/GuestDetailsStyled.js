import styled from "styled-components"

export const GuestDetailsStyled = styled.div`
    display: flex;
    flex-direction: row;
`

export const GuestDetailsInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
`

export const GuestDetailsNameStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1.875rem;
    color: #212121;

`

export const GuestDetailsIdStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: .875rem;
    color: #799283;
    
`

export const GuestDetailsHorizontalContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const GuestDetailsFieldTitleStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 0.875rem;
    color: #6E6E6E;
`

export const GuestDetailsFieldInfoStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1rem;
    color: #393939;
`

export const GuestDetailsFieldBoldInfoStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.6rem;
    color: #393939;

    span {
        font-size: .875rem;
        color: #799283;
        font-weight: 400;
    }
`

export const GuestDetailsAmenitiesContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`

export const GuestDetailsAmenitiesItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: .5rem 1rem;
    background: #E8FFEE;
    border: none;
    border-radius: .5rem;

    svg {
        color: #125846;
    }
`

export const GuestDetailsAmenitiesTextStyled = styled.p`
    font-family: 'Poppins';
    font-size: .875rem;
    font-weight: 500;
    color: #135846;
`

export const GuestDetailsPhotoContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const GuestDetailsPhotoImageStyled = styled.img`
    height: auto;
    width: 50%;
`

export const GuestDetailsPhotoTagStyled = styled.div`
    position: absolute;
    font-family: 'Poppins';
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    background: #5ad07a;
    padding: .5rem 3rem;
    right: 0;
    transform: rotate(45deg);
`

export const GuestDetailsPhotoTitleStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.6rem;
    color: #fff;
`

export const GuestDetailsPhotoDescriptionStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: .875rem;
    color: #a5a5a5;
`