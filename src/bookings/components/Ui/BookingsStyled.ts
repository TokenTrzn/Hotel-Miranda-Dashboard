import styled from "styled-components"

export const BookingStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const BookingMenuStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: .5% 2%;
`

export const BookingMenuTextStyled = styled.div`
    display: flex;
    padding: 0 1rem;

    .active {
        color: #135846;
        border-color: #135846;
    }
`

export const BookingMenuSearchBarStyled = styled.div`
    width: 20%;
    border: 1px solid #135846;
    border-radius: .5rem;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;

    svg {
        color: #000000
    }
`

export const BookingMenuSearchBarInputStyled = styled.input`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1rem;
    margin: 0;
    background: #ffffff;
    border: none;
    color: #000000;
`

export const BookingMenuSortBy = styled.div`
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

export const BookingMenuSortByText = styled.p`
    color: #135846;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Poppins';
    margin: 0;
    padding-right: 1rem;
`

export const BookingMenuItemStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1rem;
    color: #6E6E6E;
    padding-right: 2rem;
    cursor: pointer;
    border-bottom: 1px solid #D4D4D4;

    svg {
        cursor: pointer;
    }

    &:hover {
        color: #135846;
        border-color: #135846;
    }
`

export const BookingFirstRowStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: #ffffff;
    padding: 1rem 0;
    margin: 0 1rem;
`

export const BookingFirstRowItemStyled = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 700;
    color: #393939;
    margin: 0;
`

export const BookingItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    padding: 1.5rem .5rem;
    margin: 0 1rem;

    svg {
        color: #000000;
    }

    &:hover {
        box-shadow: 0px 4px 4px #d5d5d5;
    }
`

export const BookingItemTextStyled = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 600;
    color: #393939;
    margin: 0;
`

export const BookingItemBookingStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const BookingItemBookingPhotoStyled = styled.img`
    width: auto;
    height: 4rem;
    margin-right: .5rem;
    border-radius: .5rem;
`

export const BookingItemBookingInfoStyled = styled.div`
    display:flex;
    flex-direction: column;
    margin: auto 0;
    text-align: start;
`

export const BookingItemBookingIdStyled = styled.p`
    font-family: 'Poppins';
    font-size: .875rem;
    font-weight: 500;
    color: #799283;
    margin: 0;
`

export const BookingItemOrderDateStyled = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 500;
    color: #393939;
    margin: 0;
`

export const BookingItemCheckStyled = styled.div`
    display:flex;
    flex-direction: column;
    margin: auto 0;
    text-align: start;
`

export const BookingItemCheckHourStyled = styled.p`
    font-family: 'Poppins';
    font-size: .875rem;
    font-weight: 500;
    color: #393939;
    margin: 0; 
`

export const BookingItemSpecialRequestStyled = styled.div<{ $type: Boolean }>`
    padding: .8rem 1.5rem;
    cursor: pointer;
    color: ${props =>
        props.$type === true ? '#799283' : '#000000'
    };
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 600;
    background: ${props =>
        props.$type === true ? '#ffffff' : '#EEF9F2'
    };
    border: ${props =>
        props.$type === true ? '1px solid #799283' : 'none'
    };
    border-radius: .5rem;
    text-align: center;
    width: 60%;
`

export const BookingItemStatusStyled = styled.div<{ $type: 'Check In' | 'Check Out' | 'In Progress' }>`
    background: ${props => 
        props.$type === 'Check In' ? '#E8FFEE' : 
        props.$type === 'Check Out' ? '#FFEDEC' :
        props.$type === 'In Progress' ? '#F3FFC0' : '#ffffff'
    };
    color: ${props => 
        props.$type === 'Check In' ? '#5AD07A' : 
        props.$type === 'Check Out' ? '#E23428' :
        props.$type === 'In Progress' ? '#000000' : '#ffffff'
    };
    padding: .8rem 1rem;
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: .5rem;
    text-align: center;
    width: 80%;
`