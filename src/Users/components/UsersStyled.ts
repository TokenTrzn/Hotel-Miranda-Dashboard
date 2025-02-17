import styled from "styled-components"

export const UsersStyled = styled.div`
    display: flex;
    flex-direction: column;
` 

export const UsersMenuStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: .5% 2%;
`

export const UsersMenuTextStyled = styled.div`
    display: flex;
    gap: 2rem;    
    border-bottom: 1px solid #D4D4D4;
`

export const UsersMenuItemStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1rem;
    color: #6E6E6E;
    padding-right: 3rem;
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

export const UsersItemStyled = styled.div`
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

export const UsersItemTextStyled = styled.p`
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

export const UsersItemStatusStyled = styled.div<{ $status: 'ACTIVE' | 'INACTIVE'}>`
    color: ${props => 
        props.$status === 'ACTIVE' ? '#5AD07A' : 
        props.$status === 'INACTIVE' ? '#E23428' : 'white'
    };
    padding: .8rem 1rem;
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: .5rem;
    text-align: center;
`

export const UsersMenuSearchBarStyled = styled.div`
    width: 30%;
    border: 1px solid #135846;
    border-radius: .5rem;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;
    margin: 0 8%;

    svg {
        color: #000000
    }
`

export const UsersMenuSearchBarInputStyled = styled.input`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1rem;
    width: 90%;
    margin: 0;
    background: #ffffff;
    border: none;
    color: #000000;
`