import React from 'react'
import { StyledBookingContainer, StyledBookingContent, StyledBookingDays, StyledBookingDetails, StyledBookingInfo, StyledBookingItem, StyledCustomerName, StyledImage, StyledImageWrapper, StyledLargeImageWrapper, StyledRoomType, StyledTime, StyledViewMore } from './BookingInfoStyled'
import Photo from '../../../assets/dni_cuadrado.jpg'
import { useNavigate } from 'react-router-dom'

export const BookingInfo: React.FC = () => {
    const navigate = useNavigate()

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

    const handleViewMoreClick = () => {
        navigate('/booking')
    }

    return (
        <StyledBookingContainer>
            <StyledBookingDetails>
                {bookings.map((booking, index) => (
                    <StyledBookingItem key={index}>
                        <StyledLargeImageWrapper>
                            <StyledImage src={booking.imageTop} alt="Room Top" />
                        </StyledLargeImageWrapper>
                        <StyledBookingInfo>
                            <StyledRoomType>{booking.roomType}</StyledRoomType>
                            <StyledBookingContent>
                                <StyledImageWrapper>
                                    <StyledImage src={booking.imageBottom} alt="Room Bottom" />
                                    <StyledCustomerName>{booking.customer}</StyledCustomerName>
                                    <StyledTime>12min ago</StyledTime>
                                </StyledImageWrapper>
                                <StyledBookingDays color={booking.color}>
                                    {booking.days.join(', ')}
                                </StyledBookingDays>
                            </StyledBookingContent>
                        </StyledBookingInfo>
                    </StyledBookingItem>
                ))}
            </StyledBookingDetails>
            <StyledViewMore onClick={handleViewMoreClick} >View More</StyledViewMore>
        </StyledBookingContainer>
    )
}