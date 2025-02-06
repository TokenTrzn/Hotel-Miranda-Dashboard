import styled from "styled-components"

export const EditUserInfoFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;

    label {
        color: #135846;
        margin-bottom: .5rem;
        font-family: 'Poppins';
    }

    input {
        font-family: 'Poppins';
        background-color: #fff;
        color: #393939;
        border: 2px solid #135846;
        border-radius: 1rem;
        padding: .5rem 1rem;
    }
`

export const EditUserInfoFormItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 50%;
`

export const EditUserInfoFormHorizontalContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
`

export const EditUserInfoFormButtonStyled = styled.button`
    padding: .5rem 1rem;
    border: 2px solid #135846;
    border-radius: .5rem;
    background: transparent;
    color: #135846;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #135846;
        color: #fff;
    }
`