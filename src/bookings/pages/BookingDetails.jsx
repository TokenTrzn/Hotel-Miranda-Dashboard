import { useEffect, useState } from 'react'
import { BookingDetailsAmenitiesContainerStyled, BookingDetailsAmenitiesItemStyled, BookingDetailsAmenitiesTextStyled, BookingDetailsFieldBoldInfoStyled, BookingDetailsFieldInfoStyled, BookingDetailsFieldTitleStyled, BookingDetailsHorizontalContainer, BookingDetailsIdStyled, BookingDetailsInfoStyled, BookingDetailsNameStyled, BookingDetailsPhotoContainerStyled, BookingDetailsPhotoDescriptionStyled, BookingDetailsPhotoImageStyled, BookingDetailsPhotoTagStyled, BookingDetailsPhotoTitleStyled, BookingDetailsStyled } from '../components/Ui/BookingsDetailsStyled'
import { IoWifi as WifiIcon } from "react-icons/io5"
import BookingsData from '../data/bookingsData.json'
import RoomPhoto from '../../assets/room_photo.jpg'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { BookingItemTextStyled } from '../components/Ui/BookingsStyled'

export const BookingDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams()

    const [booking, setBooking] = useState(null)

    useEffect(() => {
        const selectedBooking = BookingsData.find((booking) => booking.id === id)
        setBooking(selectedBooking)
        if (selectedBooking) {
            navigate(location.pathname, {
                replace: true,
                state: { name: selectedBooking.name }
            })
        }
    }, [id, navigate, location.pathname])

    if (!booking) {
        return <div><BookingItemTextStyled>Loading...</BookingItemTextStyled></div>
    }

    return (
        <BookingDetailsStyled>
            <BookingDetailsInfoStyled>
                <BookingDetailsNameStyled>{booking.guestName}</BookingDetailsNameStyled>
                <BookingDetailsIdStyled>#000{booking.id}</BookingDetailsIdStyled>
                <BookingDetailsHorizontalContainer>
                    <BookingDetailsInfoStyled>
                        <BookingDetailsFieldTitleStyled>Check In</BookingDetailsFieldTitleStyled>
                        <BookingDetailsFieldInfoStyled>{booking.checkIn} | {booking.checkInHour}</BookingDetailsFieldInfoStyled>
                    </BookingDetailsInfoStyled>
                    <BookingDetailsInfoStyled>
                        <BookingDetailsFieldTitleStyled>Check Out</BookingDetailsFieldTitleStyled>
                        <BookingDetailsFieldInfoStyled>{booking.checkOut} | {booking.checkOutHour}</BookingDetailsFieldInfoStyled>
                    </BookingDetailsInfoStyled>
                </BookingDetailsHorizontalContainer>
                <BookingDetailsHorizontalContainer>
                    <BookingDetailsInfoStyled>
                        <BookingDetailsFieldTitleStyled>Room Info</BookingDetailsFieldTitleStyled>
                        <BookingDetailsFieldBoldInfoStyled>{booking.type} - {booking.number}</BookingDetailsFieldBoldInfoStyled>
                    </BookingDetailsInfoStyled>
                    <BookingDetailsInfoStyled>
                        <BookingDetailsFieldTitleStyled>Price</BookingDetailsFieldTitleStyled>
                        <BookingDetailsFieldBoldInfoStyled>{booking.price} <span>/Night</span></BookingDetailsFieldBoldInfoStyled>
                    </BookingDetailsInfoStyled>
                </BookingDetailsHorizontalContainer>
                <BookingDetailsFieldInfoStyled>{booking.description}</BookingDetailsFieldInfoStyled>
                <BookingDetailsAmenitiesContainerStyled>
                    <BookingDetailsAmenitiesItemStyled>
                        <WifiIcon />
                        <BookingDetailsAmenitiesTextStyled>{booking.amenities}</BookingDetailsAmenitiesTextStyled>
                    </BookingDetailsAmenitiesItemStyled>
                </BookingDetailsAmenitiesContainerStyled>
            </BookingDetailsInfoStyled>
            <BookingDetailsPhotoContainerStyled>
                <BookingDetailsPhotoImageStyled src={RoomPhoto} />
                <BookingDetailsPhotoTagStyled>BOOKED</BookingDetailsPhotoTagStyled>
                <BookingDetailsPhotoTitleStyled>{booking.type}</BookingDetailsPhotoTitleStyled>
                <BookingDetailsPhotoDescriptionStyled>{booking.description}</BookingDetailsPhotoDescriptionStyled>
            </BookingDetailsPhotoContainerStyled>
        </BookingDetailsStyled>
    )
}