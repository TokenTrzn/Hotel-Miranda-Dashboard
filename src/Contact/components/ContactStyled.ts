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
    overflow: hidden;

    .swiper-wrapper {
        margin: .5rem 2rem;
        overflow: hidden;
    }
`

export const ContactKPIStyled = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff;
    padding: 1.5rem;
    gap: 1.5rem;
    border-radius: 1rem;
    margin-top: 1rem;
    height: 15rem;
    width: 90%;
    justify-content: space-between;

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

export const ContactListContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactMenuStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: .5% 2%;

    .active {
        color: #135846;
        border-color: #135846;
    }
`

export const ContactMenuTextStyled = styled.div`
    display: flex;
    gap: 2rem;    
    border-bottom: 1px solid #D4D4D4;
`

export const ContactMenuSortBy = styled.div`
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

export const ContactMenuSortByText = styled.p`
    color: #135846;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Poppins';
    margin: 0;
    padding-right: 1rem;
`

export const ContactMenuItemStyled = styled.p`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1rem;
    color: #6E6E6E;
    padding-right: 1rem;
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

export const ContactFirstRowStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    padding: 1rem;
    margin: 0 1rem;
`

export const ContactFirstRowItemStyled = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 700;
    color: #393939;
    margin: 0;
`

export const ContactItemStyled = styled.div`
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

export const ContactItemTextStyled = styled.p`
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

export const ContactItemCommentStyled = styled.p`
    font-family: 'Poppins';
    font-size: .875rem;
    font-weight: 600;
    color: #393939;
    margin: 0;
`

export const ContactItemActionStyled = styled.p<{ $isArchived: number}>`
    color: ${props =>
        props.$isArchived === 0 ? '#E23428' : 
        props.$isArchived === 1 ? '#135846' : '#000' }  ;
    font-weight: 700;
    font-size: 1.125rem;
    font-family: 'Poppins';
    cursor: pointer;
`