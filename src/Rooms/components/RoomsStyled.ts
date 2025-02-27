import styled from "styled-components"

export const RoomsStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const RoomsMenuStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: .5% 2%;
`

export const RoomsMenuTextStyled = styled.div`
    display: flex;
    gap: 2rem;    
    border-bottom: 1px solid #D4D4D4;
`

export const RoomsMenuSortBy = styled.div`
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    border: 1px solid #135846;
    border-radius: .75rem;
    background: #ffffff;
    cursor: pointer;

    svg {
        color: #CCCCCC;
    }
`

export const RoomsMenuSortByText = styled.p`
    color: #135846;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Poppins';
    margin: 0;
    padding-right: 1rem;
`

export const RoomsMenuItemStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1rem;
    color: #135846;
    padding-right: 1rem;
    cursor: pointer;
    border-bottom: 1px solid #D4D4D4;
    border-color: #135846;

    svg {
        cursor: pointer;
    }
`

export const RoomsFirstRowStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    padding: 1rem;
    margin: 0 1rem;
`

export const RoomsFirstRowItemStyled = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 700;
    color: #393939;
    margin: 0;
`

export const RoomsItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    padding: .5rem 1rem;
    margin: 0 1rem;

    svg {
        color: #000000;
    }

    &:hover {
        box-shadow: 0px 4px 4px #d5d5d5;
    }
`

export const RoomsItemTextStyled = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 600;
    color: #393939;
    margin: 0;

    span {
        font-size: .875rem;
        color: #799283;
        font-weight: 400;
    }
`

export const RoomsItemRoomProfileContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const RoomsItemRoomProfilePhotoStyled = styled.img`
    width: auto;
    height: 4rem;
    margin-right: .5rem;
    border-radius: .5rem;
`

export const RoomsItemRoomProfileInfoStyled = styled.div`
    display:flex;
    flex-direction: column;
    margin: auto 0;
    text-align: start;
`

export const RoomsItemRoomProfileIdStyled = styled.p`
    font-family: 'Poppins';
    font-size: .875rem;
    font-weight: 500;
    color: #799283;
    margin: 0;
`

export const RoomsItemStatusStyled = styled.div<{ $type: 'Available' | 'Booked'}>`
    background: ${props => 
        props.$type === 'Available' ? '#5AD07A' : 
        props.$type === 'Booked' ? '#E23428' : 'white'
    };
    color: #fff;
    padding: .8rem 1rem;
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 600;
    border: none;
    width: 60%;
    border-radius: .5rem;
    text-align: center;
`

export const RoomSeeAmenitiesStyled = styled.div`
    padding: .8rem 1.5rem;
    cursor: pointer;
    color: #799283;    
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 600;
    background: #ffffff;
    border: 1px solid #799283;
    border-radius: .5rem;
    text-align: center;
    width: 60%;
`