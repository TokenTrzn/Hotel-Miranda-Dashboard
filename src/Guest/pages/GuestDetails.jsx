import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GuestDetailsAmenitiesContainerStyled, GuestDetailsAmenitiesItemStyled, GuestDetailsAmenitiesTextStyled, GuestDetailsFieldBoldInfoStyled, GuestDetailsFieldInfoStyled, GuestDetailsFieldTitleStyled, GuestDetailsHorizontalContainer, GuestDetailsIdStyled, GuestDetailsInfoStyled, GuestDetailsNameStyled, GuestDetailsPhotoContainerStyled, GuestDetailsPhotoDescriptionStyled, GuestDetailsPhotoImageStyled, GuestDetailsPhotoTagStyled, GuestDetailsPhotoTitleStyled, GuestDetailsStyled } from '../components/Ui/GuestDetailsStyled'
import { IoWifi as WifiIcon } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import { StyledBookingDays } from '../../Dashboard/components/BookingInfo/BookingInfoStyled';
import BookingsData from  '../data/bookingsData.json'

export const GuestDetails = () => {

    const [booking, setBooking] = useState()

    const { id } = useParams()

    useEffect(() => {
        const selectedBooking = BookingsData.find((booking) => booking.id == parseInt(id))
        setBooking(selectedBooking)
    }, [id])

    return (
        <GuestDetailsStyled>
            <GuestDetailsInfoStyled>
                <GuestDetailsNameStyled>{booking.guestName}</GuestDetailsNameStyled>
                <GuestDetailsIdStyled>#000{booking.id}</GuestDetailsIdStyled>
                <GuestDetailsHorizontalContainer>
                    <GuestDetailsInfoStyled>
                        <GuestDetailsFieldTitleStyled>Check In</GuestDetailsFieldTitleStyled>
                        <GuestDetailsFieldInfoStyled>{booking.checkIn} | {booking.checkInHour}</GuestDetailsFieldInfoStyled>
                    </GuestDetailsInfoStyled>
                    <GuestDetailsInfoStyled>
                        <GuestDetailsFieldTitleStyled>Check Out</GuestDetailsFieldTitleStyled>
                        <GuestDetailsFieldInfoStyled>{booking.checkOut} | {booking.checkOutHour}</GuestDetailsFieldInfoStyled>
                    </GuestDetailsInfoStyled>
                </GuestDetailsHorizontalContainer>
                <GuestDetailsHorizontalContainer>
                    <GuestDetailsInfoStyled>
                        <GuestDetailsFieldTitleStyled>Room Info</GuestDetailsFieldTitleStyled>
                        <GuestDetailsFieldBoldInfoStyled>{booking.type} - {booking.number}</GuestDetailsFieldBoldInfoStyled>
                    </GuestDetailsInfoStyled>
                    <GuestDetailsInfoStyled>
                        <GuestDetailsFieldTitleStyled>Price</GuestDetailsFieldTitleStyled>
                        <GuestDetailsFieldBoldInfoStyled>{BookingsData.price} <span>/Night</span></GuestDetailsFieldBoldInfoStyled>
                    </GuestDetailsInfoStyled>
                </GuestDetailsHorizontalContainer>
                <GuestDetailsFieldInfoStyled>{booking.description}</GuestDetailsFieldInfoStyled>
            </GuestDetailsInfoStyled>
            <GuestDetailsAmenitiesContainerStyled>
                <GuestDetailsAmenitiesItemStyled>
                    <WifiIcon />
                    <GuestDetailsAmenitiesTextStyled>{booking.amenities}</GuestDetailsAmenitiesTextStyled>
                </GuestDetailsAmenitiesItemStyled>
            </GuestDetailsAmenitiesContainerStyled>
            <GuestDetailsPhotoContainerStyled>
                <GuestDetailsPhotoImageStyled />
                <GuestDetailsPhotoTagStyled>BOOKED</GuestDetailsPhotoTagStyled>
                <GuestDetailsPhotoTitleStyled>{booking.type}</GuestDetailsPhotoTitleStyled>
                <GuestDetailsPhotoDescriptionStyled>{booking.description}</GuestDetailsPhotoDescriptionStyled>
            </GuestDetailsPhotoContainerStyled>
        </GuestDetailsStyled>
    )
}