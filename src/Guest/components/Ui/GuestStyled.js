import styled from "styled-components"

export const GuestStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const GuestMenuStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    padding: .5% 2%;
`

export const GuestMenuTextStyled = styled.div`
    display: flex;
    gap: 2rem;    
    border-bottom: 1px solid #D4D4D4;
`

export const GuestMenuSearchBarStyled = styled.div`
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

export const GuestMenuSearchBarInputStyled = styled.input`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1rem;
    margin: 0;
    background: #ffffff;
    border: none;
    color: #000000;
`

export const GuestMenuSortBy = styled.div`
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

export const GuestMenuSortByText = styled.p`
    color: #135846;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Poppins';
    margin: 0;
    padding-right: 1rem;
`

export const GuestMenuItemStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1rem;
    color: #6E6E6E;
    padding-right: 1rem;
    cursor: pointer;

    svg {
        cursor: pointer;
    }

    &:hover {
        color: #135846;
        border-bottom: 1px solid #135846;
    }
`

export const GuestFirstRowStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: #ffffff;
    padding: 1rem 0;
`

export const GuestFirstRowItemStyled = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 700;
    color: #393939;
    margin: 0;
`

export const GuestItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    padding: .5rem 1rem;
    margin: .5rem 0;

    svg {
        color: #000000;
    }

    &:hover {
        box-shadow: 0px 4px 4px #d5d5d5;
    }
`

export const GuestItemTextStyled = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 600;
    color: #393939;
    margin: 0;
`

export const GuestItemGuestStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const GuestItemGuestPhotoStyled = styled.img`
    width: auto;
    height: 4rem;
    margin-right: .5rem;
    border-radius: .5rem;
`

export const GuestItemGuestInfoStyled = styled.div`
    display:flex;
    flex-direction: column;
    margin: auto 0;
    text-align: start;
`

export const GuestItemGuestIdStyled = styled.p`
    font-family: 'Poppins';
    font-size: .875rem;
    font-weight: 500;
    color: #799283;
    margin: 0;
`

export const GuestItemOrderDateStyled = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 500;
    color: #393939;
    margin: 0;
`

export const GuestItemCheckStyled = styled.div`
    display:flex;
    flex-direction: column;
    margin: auto 0;
    text-align: start;
`

export const GuestItemCheckHourStyled = styled.p`
    font-family: 'Poppins';
    font-size: .875rem;
    font-weight: 500;
    color: #393939;
    margin: 0; 
`

export const GuestItemSpecialRequestStyled = styled.button`
    padding: .8rem 1.5rem;
    cursor: pointer;
    color: ${props =>
        props.type === 'booked' ? '#799283' : '#000000'
    };
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 600;
    background: ${props =>
        props.type === 'booked' ? '#ffffff' : '#EEF9F2'
    };
    border: ${props =>
        props.type === 'booked' ? '1px solid #799283' : 'none'
    };
    border-radius: .5rem;
    text-align: center;
`

export const GuestItemStatusStyled = styled.button`
    cursor: pointer;
    background: ${props => 
        props.type === 'booked' ? '#E8FFEE' : 
        props.type === 'refund' ? '#FFEDEC' :
        props.type === 'pending' ? '#E2E2E2' :
        props.type === 'canceled' ? '#575757' : 'white'
    };
    color: ${props => 
        props.type === 'booked' ? '#5AD07A' : 
        props.type === 'refund' ? '#E23428' :
        props.type === 'pending' ? '#6D6D6D' :
        props.type === 'canceled' ? '#BEBEBE' : 'white'
    };
    padding: .8rem 1rem;
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: .5rem;
    text-align: center;
`