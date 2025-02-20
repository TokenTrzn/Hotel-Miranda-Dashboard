import styled from "styled-components"

export const BookingDetailsStyled = styled.div`
    display: flex;
    flex-direction: row;
    background: #ffffff;
`

export const BookingDetailsInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    gap: 1rem;

    .amenitiesTitle {
        padding-left: 3rem;
    }
    
    .description {
        padding: 1rem 3rem;
        max-width: 40%;
    }
`

export const BookingDetailsNameStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1.875rem;
    color: #212121;
    margin: 0;
    padding: 0 3rem;
`

export const BookingDetailsIdStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: .875rem;
    color: #799283;
    margin: 0;
    padding: 0 3rem;
    
`

export const BookingDetailsHorizontalContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const BookingDetailsFieldTitleStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 0.875rem;
    color: #6E6E6E;
    margin: 0;
    padding: 0 2rem;
`

export const BookingDetailsFieldInfoStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1rem;
    color: #393939;
    margin: 0;
    padding: 1rem 2rem;
`

export const BookingDetailsFieldBoldInfoStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.6rem;
    color: #393939;
    margin: 0;
    padding: 0 2rem;

    span {
        font-size: .875rem;
        color: #799283;
        font-weight: 400;
    }
`

export const BookingDetailsAmenitiesContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 0 3rem;
`

export const BookingDetailsAmenitiesItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    background: #E8FFEE;
    border: none;
    border-radius: .5rem;
    color: #125846;
    font-family: 'Poppins';
    font-size: .875rem;
    font-weight: 500;

    svg {
        padding-right: 1rem;
    }

    &:hover {
        background: #125846;
        color: #ffffff
    }
`

export const BookingDetailsAmenitiesTextStyled = styled.p`
    font-family: 'Poppins';
    font-size: .875rem;
    font-weight: 500;
    color: #135846;
`

export const BookingDetailsPhotoContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 1rem;
`

export const BookingDetailsPhotoImageStyled = styled.img`
    height: auto;
    width: 100%;
    border-radius: .2rem;
`

export const BookingDetailsPhotoTagStyled = styled.div`
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

export const BookingDetailsPhotoTitleStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.6rem;
    color: #fff;
`

export const BookingDetailsPhotoDescriptionStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1rem;
    color: #212121;
`

export const BackButton = styled.button`
  padding: .75rem 1.5rem;
  cursor: pointer;
  color: #E23428;
  background: #fff;
  border: 2px solid #E23428;
  border-radius: .5rem;
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  width: 30%;
  margin-top: 2rem;
  margin-left: 3rem;

  &:hover {
    background: #E23428;
    color: #fff;
  }
`