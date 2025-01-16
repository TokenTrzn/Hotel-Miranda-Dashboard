import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import { CalendarContainerStyled, CalendarNavigationContainerStyled, CalendarTitleStyled, StyledCalendar } from './CalendarStyled'
import { IoIosArrowBack as ArrowBack } from "react-icons/io";
import { IoIosArrowForward as ArrowForward } from "react-icons/io";
import Photo from '../../../assets/dni_cuadrado.jpg'


export const DashboardCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    const bookings = [
        {
            roomType: "Queen Bed A-12324",
            customer: "James Sukardi",
            days: [3],
            color: "#0E7355",
            imageTop: Photo,
            imageBottom: Photo
        },
        {
            roomType: "Deluxe Room B-1324",
            customer: "Angela Moss",
            days: [16, 17, 18],
            color: "#E23428",
            imageTop: Photo,
            imageBottom: Photo
        },
        {
            roomType: "King Big C-2445",
            customer: "Geovanny",
            days: [20],
            color: "#FF9E0F",
            imageTop: Photo,
            imageBottom: Photo
        },
    ];

    return (
        <CalendarContainerStyled>
            <CalendarTitleStyled>
                <p>Recent Booking Schedule</p>
                <CalendarNavigationContainerStyled>
                    <ArrowBack />
                    <p>{date.toLocaleString('default', { month: 'long' })} </p>
                    <p>{date.getFullYear()}</p>

                    <ArrowForward />
                </CalendarNavigationContainerStyled>
            </CalendarTitleStyled>
            <StyledCalendar 
                onChange={onChange} 
                value={date} 
                tileClassName={({ date, view }) => {
                if (view === "month") {
                    const day = date.getDate();
                    const booking = bookings.find((b) => b.days.includes(day));
                    return booking ? `booking-day-${day}` : null;
                }
            }} />
        </CalendarContainerStyled>
    );
};