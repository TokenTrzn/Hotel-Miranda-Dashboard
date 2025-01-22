import styled from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const Popup = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: .75rem; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  max-width: 600px; 
  text-align: center;

  h2 {
    font-family: 'Poppins';
    font-size: 2rem;
    color: #135846;
    margin-bottom: 2rem;
  }

  p {
    font-family: 'Poppins';
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    margin: 1rem 2rem;
    text-align: justify;
  }
`

export const CloseButton = styled.button`
  margin-top: 1rem; 
  padding: 0.5rem 1rem;
  background: #fff;
  color: #125846;
  border: 2px solid #135846;
  border-radius: .5rem; 
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #135846;
    color: #fff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(19, 88, 70, 0.3);
  }
`