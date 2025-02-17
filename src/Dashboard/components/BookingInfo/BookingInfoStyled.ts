import styled from "styled-components"

export const StyledBookingContainer = styled.div`
  background: #fff;
  border-radius: 2rem;
  margin: 2rem 1rem;
`;

export const StyledBookingDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  width: 100%; 
`;

export const StyledBookingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 1rem;
`;

export const StyledLargeImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;

  img {
    width: auto;
    height: 4rem;
  }
`;

export const StyledBookingInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: .2rem 2rem;
`;

export const StyledRoomType = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
`;

export const StyledBookingContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 16px;

  img {
    width: auto;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
`;

export const StyledCustomerName = styled.p`
  font-size: 12px;
  color: #666666;
`;

export const StyledTime = styled.p`
  font-size: 12px;
  color: #799283;
  margin-left: 8px;
`;

export const StyledBookingDays = styled.div`
  background-color: ${props => props.color};
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  margin-left: auto;
`;

export const StyledViewMore = styled.div`
  text-align: center;
  font-size: 14px;
  color: #0E7355;
  padding: 1rem;
  cursor: pointer;
`;