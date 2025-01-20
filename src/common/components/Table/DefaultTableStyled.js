import styled from 'styled-components'

export const TableStyled = styled.table`
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  text-align: left;
  color: #000;
`;

export const TableHeaderStyled = styled.th`
  background-color: #FFFFFF;
  padding: .7rem;
  text-align: center;
  font-weight: bold;
  color: #333;
`;

export const TableRowStyled = styled.tr`
  background-color: #FFFFFF;
  
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableDataStyled = styled.td`
  padding: .5rem;
  vertical-align: middle; 
  text-align: center; 
`;

export const TableDataVerticalContainer = styled.div`
    padding-left: 2rem;
    text-align: start;
`

export const TableDataHorizontalContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
`

export const GuestContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const GuestImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: .5rem;
  margin-right: .625rem;
`;

export const RoomImageStyled = styled.img`
  width: 5rem;
  height: 3rem;
  border-radius: 8px;
  text-align: center; 
`;

export const GuestInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #333;

  small {
    color: #888;
  }
`;

export const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0.2rem 0;
    font-size: 0.9rem;
    color: #555;
  }
`;