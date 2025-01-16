import styled from 'styled-components';
import Calendar from 'react-calendar';

export const CalendarContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #ffffff;
    border-radius: 2rem;
`

export const CalendarTitleStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    color: #393939;
    font-size: 1.25rem;
    font-family: 'Poppins';
`

export const CalendarNavigationContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: .5rem;
    align-items: center;
`



export const StyledCalendar = styled(Calendar)`
  border: none;
  padding: 1.5rem;
  width: 100%;
  border-radius: 2rem;

  .react-calendar__tile {
    background: #fff;
    color: #000;
    border-radius: .5rem;
    padding: 1.5rem;
    transition: 0.3s ease;
    font-size: 1.25rem;

    &:hover {
      background: #f0f0f0;
    }

    &--active {
      background: #e23428;
      color: white;
    }

    &--now {
        background-color: #f5f5f5;
        color: #333333;
    }

    &--disabled {
        color: #cccccc;
    }
  }

  .react-calendar__navigation {
    display: none;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #ccc;
  }

  .react-calendar__month-view__weekdays {
    color: #799283;
    font-size: 1rem;
    
    abbr {
        text-decoration: none;
    }
  }

  .booking-day-3 {
    background-color: #135846;
    border-radius: 10px;
    color: #ffffff;
  }

  .booking-day-16,
  .booking-day-17,
  .booking-day-18 {
    background-color: #e23428;
    color: #ffffff;
  }

  .booking-day-20 {
    background-color: #ff9c3a;
    border-radius: 10px;
    color: #ffffff;
  }
`;