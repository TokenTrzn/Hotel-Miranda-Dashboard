import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: #ffffff;
  border-radius: .5rem;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
  max-width: 600px;
  margin: 2rem auto;
`;

export const FormTitle = styled.p`
  font-family: 'Poppins';
  font-size: 1.5rem;
  font-weight: 600;
  color: #135846;
  margin-bottom: 2rem;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  font-family: 'Poppins';
  font-size: 1rem;
  color: #393939;
  margin-bottom: .5rem;
`;

export const FormInput = styled.input`
  padding: .5rem;
  border: 1px solid #D4D4D4;
  border-radius: .5rem;
  background: #fff;
  font-family: 'Poppins';
  font-size: 1rem;
  outline: none;
  color: #393939;
`;

export const FormSelect = styled.select`
  padding: .5rem;
  border: 1px solid #D4D4D4;
  background: #fff;
  color: #393939;
  border-radius: .5rem;
  font-family: 'Poppins';
  font-size: 1rem;
  outline: none;
`;

export const FormOption = styled.option`
  font-family: 'Poppins';
  font-size: 1rem;
`;

export const FormTextarea = styled.textarea`
  padding: .5rem;
  border: 1px solid #D4D4D4;
  color: #393939;
  border-radius: .5rem;
  font-family: 'Poppins';
  font-size: 1rem;
  background: #fff;
  outline: none;
  resize: none;
`;

export const FormStatus = styled.div`
    color: black;
  display: flex;
  gap: 1rem;
`;

export const FormButton = styled.button`
  padding: .75rem 1.5rem;
  cursor: pointer;
  color: #135846;
  background: #fff;
  border: 2px solid #135846;
  border-radius: .5rem;
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;

  &:hover {
    background: #0E4D3A;
    color: #fff;
  }
`;

export const FormPhotoInput = styled.input`
  padding: .5rem;
  border: 1px solid #D4D4D4;
  border-radius: .5rem;
  font-family: 'Poppins';
  font-size: 1rem;
  outline: none;
  color: #393939;
`;

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
  margin-top: 1rem;

  &:hover {
    background: #E23428;
    color: #fff;
  }
`;