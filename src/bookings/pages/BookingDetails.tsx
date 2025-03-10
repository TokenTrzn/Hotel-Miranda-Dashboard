import React, { useEffect, useState } from 'react'
import { BookingDetailsAmenitiesContainerStyled, BookingDetailsAmenitiesItemStyled, BookingDetailsFieldBoldInfoStyled, BookingDetailsFieldInfoStyled, BookingDetailsFieldTitleStyled, BookingDetailsHorizontalContainer, BookingDetailsIdStyled, BookingDetailsInfoStyled, BookingDetailsNameStyled, BookingDetailsStyled, BackButton, BookingDetailsPhotoContainerStyled, BookingDetailsPhotoImageStyled, BookingDetailsPhotoTagStyled, BookingDetailsPhotoTitleStyled, BookingDetailsPhotoDescriptionStyled } from '../components/Ui/BookingsDetailsStyled'
import { IoWifi as WifiIcon } from "react-icons/io5"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBookingByIdThunk } from '../features/BookingsThunk'
import { getAllBookingsError, getAllBookingsStatus, getBooking } from '../features/BookingsSlice'
import { AppDispatch, RootState } from '../../store/store'
import { BookingInterface } from '../interfaces/BookingInterface'
import RoomPhoto from '../../assets/room_photo.jpg'
import { formatDate } from '../../utils/FormatDate'

type Params = {
    id: string;
}

export const BookingDetails: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<Params>();
    const [loading, setLoading] = useState<boolean>(true);
    const location = useLocation();
    const booking: BookingInterface = location.state?.booking;
    //const booking = useSelector<RootState, BookingInterface | null>(getBooking);
    const status = useSelector<RootState, string>(getAllBookingsStatus);
    const error = useSelector<RootState, string | null>(getAllBookingsError)

    useEffect(() => {
        if (id) {
            const bookingId = parseInt(id, 10)
            if (!isNaN(bookingId)) {
                if (status === 'idle') {
                    dispatch(fetchBookingByIdThunk(bookingId))
                } else if (status === 'fulfilled') {
                    setLoading(false)
                } else if (status === 'pending') {
                    setLoading(true)
                }
            }
        }
    }, [dispatch, id, status, booking])

    return (
        <>
            {loading === true || !booking ? <></> :
                <BookingDetailsStyled key={id}>
                    <BookingDetailsInfoStyled>
                        <div>
                            <BookingDetailsNameStyled>{booking.guestName}</BookingDetailsNameStyled>
                            <BookingDetailsIdStyled>#{id}</BookingDetailsIdStyled>
                        </div>
                        <BookingDetailsHorizontalContainer>
                            <BookingDetailsInfoStyled>
                                <BookingDetailsFieldTitleStyled>Check In</BookingDetailsFieldTitleStyled>
                                <BookingDetailsFieldInfoStyled>{formatDate(booking.checkIn)} | {booking.checkInHour}</BookingDetailsFieldInfoStyled>
                            </BookingDetailsInfoStyled>
                            <BookingDetailsInfoStyled>
                                <BookingDetailsFieldTitleStyled>Check Out</BookingDetailsFieldTitleStyled>
                                <BookingDetailsFieldInfoStyled>{formatDate(booking.checkOut)} | {booking.checkOutHour}</BookingDetailsFieldInfoStyled>
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
                        <BookingDetailsFieldInfoStyled className='description'>{booking.description}</BookingDetailsFieldInfoStyled>
                        <BookingDetailsFieldTitleStyled className='amenitiesTitle'>Amenities</BookingDetailsFieldTitleStyled>
                        <BookingDetailsAmenitiesContainerStyled>
                            <BookingDetailsAmenitiesItemStyled>
                                <WifiIcon /> {booking.amenities}
                            </BookingDetailsAmenitiesItemStyled>
                        </BookingDetailsAmenitiesContainerStyled>
                        <BackButton type="button" onClick={() => navigate(-1)}>Volver</BackButton>
                    </BookingDetailsInfoStyled>
                    <BookingDetailsPhotoContainerStyled>
                        <BookingDetailsPhotoImageStyled src={RoomPhoto} />
                        <BookingDetailsPhotoTitleStyled>{booking.type}</BookingDetailsPhotoTitleStyled>
                            <BookingDetailsPhotoDescriptionStyled>{booking.description}</BookingDetailsPhotoDescriptionStyled>
                    </BookingDetailsPhotoContainerStyled>
                </BookingDetailsStyled>
            }
        </>
    )
}