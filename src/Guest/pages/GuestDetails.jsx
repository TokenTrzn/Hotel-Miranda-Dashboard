import { useEffect, useState } from 'react'
import { GuestDetailsAmenitiesContainerStyled, GuestDetailsAmenitiesItemStyled, GuestDetailsAmenitiesTextStyled, GuestDetailsFieldBoldInfoStyled, GuestDetailsFieldInfoStyled, GuestDetailsFieldTitleStyled, GuestDetailsHorizontalContainer, GuestDetailsIdStyled, GuestDetailsInfoStyled, GuestDetailsNameStyled, GuestDetailsPhotoContainerStyled, GuestDetailsPhotoDescriptionStyled, GuestDetailsPhotoImageStyled, GuestDetailsPhotoTagStyled, GuestDetailsPhotoTitleStyled, GuestDetailsStyled } from '../components/Ui/GuestDetailsStyled'
import { IoWifi as WifiIcon } from "react-icons/io5"
import BookingsData from '../data/bookingsData.json'
import RoomPhoto from '../../assets/room_photo.jpg'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { GuestItemTextStyled } from '../components/Ui/GuestStyled'

export const GuestDetails = () => {
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
        return <div><GuestItemTextStyled>Loading...</GuestItemTextStyled></div>
    }

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
                        <GuestDetailsFieldBoldInfoStyled>{booking.price} <span>/Night</span></GuestDetailsFieldBoldInfoStyled>
                    </GuestDetailsInfoStyled>
                </GuestDetailsHorizontalContainer>
                <GuestDetailsFieldInfoStyled>{booking.description}</GuestDetailsFieldInfoStyled>
                <GuestDetailsAmenitiesContainerStyled>
                    <GuestDetailsAmenitiesItemStyled>
                        <WifiIcon />
                        <GuestDetailsAmenitiesTextStyled>{booking.amenities}</GuestDetailsAmenitiesTextStyled>
                    </GuestDetailsAmenitiesItemStyled>
                </GuestDetailsAmenitiesContainerStyled>
            </GuestDetailsInfoStyled>
            <GuestDetailsPhotoContainerStyled>
                <GuestDetailsPhotoImageStyled src={RoomPhoto} />
                <GuestDetailsPhotoTagStyled>BOOKED</GuestDetailsPhotoTagStyled>
                <GuestDetailsPhotoTitleStyled>{booking.type}</GuestDetailsPhotoTitleStyled>
                <GuestDetailsPhotoDescriptionStyled>{booking.description}</GuestDetailsPhotoDescriptionStyled>
            </GuestDetailsPhotoContainerStyled>
        </GuestDetailsStyled>
    )
}