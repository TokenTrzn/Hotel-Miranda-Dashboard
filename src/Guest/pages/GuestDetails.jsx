import { useEffect } from 'react'
import { GuestDetailsAmenitiesContainerStyled, GuestDetailsAmenitiesItemStyled, GuestDetailsAmenitiesTextStyled, GuestDetailsFieldBoldInfoStyled, GuestDetailsFieldInfoStyled, GuestDetailsFieldTitleStyled, GuestDetailsHorizontalContainer, GuestDetailsIdStyled, GuestDetailsInfoStyled, GuestDetailsNameStyled, GuestDetailsPhotoContainerStyled, GuestDetailsPhotoDescriptionStyled, GuestDetailsPhotoImageStyled, GuestDetailsPhotoTagStyled, GuestDetailsPhotoTitleStyled, GuestDetailsStyled } from '../components/Ui/GuestDetailsStyled'
import { IoWifi as WifiIcon } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import BookingsData from '../data/bookingsData.json'
import RoomPhoto from '../../assets/room_photo.jpg'

export const GuestDetails = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { id } = useParams()

    const guestInfo = BookingsData.find(
        (booking) => booking.id === id
    )

    useEffect(() => {
        if (guestInfo) {
            navigate(location.pathname, {
                replace: true,
                state: { guestName: GuestDetails.name }
            })
        }
    }, [id, navigate, location.pathname, guestInfo])

    return (
        <GuestDetailsStyled>
            <GuestDetailsInfoStyled>
                <GuestDetailsNameStyled>{guestInfo.guestName}</GuestDetailsNameStyled>
                <GuestDetailsIdStyled>#000{guestInfo.id}</GuestDetailsIdStyled>
                <GuestDetailsHorizontalContainer>
                    <GuestDetailsInfoStyled>
                        <GuestDetailsFieldTitleStyled>Check In</GuestDetailsFieldTitleStyled>
                        <GuestDetailsFieldInfoStyled>{guestInfo.checkIn} | {guestInfo.checkInHour}</GuestDetailsFieldInfoStyled>
                    </GuestDetailsInfoStyled>
                    <GuestDetailsInfoStyled>
                        <GuestDetailsFieldTitleStyled>Check Out</GuestDetailsFieldTitleStyled>
                        <GuestDetailsFieldInfoStyled>{guestInfo.checkOut} | {guestInfo.checkOutHour}</GuestDetailsFieldInfoStyled>
                    </GuestDetailsInfoStyled>
                </GuestDetailsHorizontalContainer>
                <GuestDetailsHorizontalContainer>
                    <GuestDetailsInfoStyled>
                        <GuestDetailsFieldTitleStyled>Room Info</GuestDetailsFieldTitleStyled>
                        <GuestDetailsFieldBoldInfoStyled>{guestInfo.type} - {guestInfo.number}</GuestDetailsFieldBoldInfoStyled>
                    </GuestDetailsInfoStyled>
                    <GuestDetailsInfoStyled>
                        <GuestDetailsFieldTitleStyled>Price</GuestDetailsFieldTitleStyled>
                        <GuestDetailsFieldBoldInfoStyled>{guestInfo.price} <span>/Night</span></GuestDetailsFieldBoldInfoStyled>
                    </GuestDetailsInfoStyled>
                </GuestDetailsHorizontalContainer>
                <GuestDetailsFieldInfoStyled>{guestInfo.description}</GuestDetailsFieldInfoStyled>
                <GuestDetailsAmenitiesContainerStyled>
                    <GuestDetailsAmenitiesItemStyled>
                        <WifiIcon />
                        <GuestDetailsAmenitiesTextStyled>{guestInfo.amenities}</GuestDetailsAmenitiesTextStyled>
                    </GuestDetailsAmenitiesItemStyled>
                </GuestDetailsAmenitiesContainerStyled>
            </GuestDetailsInfoStyled>
            <GuestDetailsPhotoContainerStyled>
                <GuestDetailsPhotoImageStyled src={RoomPhoto} />
                <GuestDetailsPhotoTagStyled>BOOKED</GuestDetailsPhotoTagStyled>
                <GuestDetailsPhotoTitleStyled>{guestInfo.type}</GuestDetailsPhotoTitleStyled>
                <GuestDetailsPhotoDescriptionStyled>{guestInfo.description}</GuestDetailsPhotoDescriptionStyled>
            </GuestDetailsPhotoContainerStyled>
        </GuestDetailsStyled>
    )
}