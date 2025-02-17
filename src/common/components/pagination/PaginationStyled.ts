import styled from "styled-components"

export const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: .5rem;
    padding: 1rem;
    padding-top: 4rem;
    background: #ffffff;
`

export const PaginationButton = styled.button<{ $selected: Boolean }>`
    background: ${props => 
        props.$selected === true ? '#ffffff' : '#135846' 
    };
    color: ${props => 
        props.$selected === true ? '#135846' : '#ffffff' 
    };
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Poppins';
    border: ${props => 
        props.$selected === true ? '1px solid #135846' : 'none' 
    };;
    border-radius: .3rem;
    margin: 0;
    padding: .5rem 1rem;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
`