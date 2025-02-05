import { useEffect, useState } from 'react'
import { BookingDetailsAmenitiesContainerStyled, BookingDetailsAmenitiesItemStyled, BookingDetailsFieldBoldInfoStyled, BookingDetailsFieldInfoStyled, BookingDetailsFieldTitleStyled, BookingDetailsHorizontalContainer, BookingDetailsIdStyled, BookingDetailsInfoStyled, BookingDetailsNameStyled, BookingDetailsStyled, BackButton } from '../components/Ui/BookingsDetailsStyled'
import { IoWifi as WifiIcon } from "react-icons/io5"
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBookingByIdThunk } from '../features/BookingsThunk'
import { getAllBookingsStatus } from '../features/BookingsSlice'

export const BookingDetails = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const booking = useSelector((state) => state.bookings.booking)
    const BookingStatus = useSelector(getAllBookingsStatus)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        console.log(BookingStatus)
        if (BookingStatus === 'idle') {
            dispatch(fetchBookingByIdThunk(parseInt(id)))
        } else if (BookingStatus === 'fulfilled') {
            setLoading(false)
            console.log(booking)
        } else if (BookingStatus === 'pending') {
            setLoading(true)
        }
    }, [dispatch, id, BookingStatus])

    console.log(booking)

    return (
        <>
            {loading === true ? <></> :
                <BookingDetailsStyled key={id}>
                    <BookingDetailsInfoStyled>
                        <div>
                            <BookingDetailsNameStyled>{booking.guestName}</BookingDetailsNameStyled>
                            <BookingDetailsIdStyled>#000000{id}</BookingDetailsIdStyled>
                        </div>
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
                        <BookingDetailsFieldInfoStyled className='description'>{booking.description}</BookingDetailsFieldInfoStyled>
                        <BookingDetailsFieldTitleStyled className='amenitiesTitle'>Amenities</BookingDetailsFieldTitleStyled>
                        <BookingDetailsAmenitiesContainerStyled>
                            <BookingDetailsAmenitiesItemStyled>
                                <WifiIcon /> {booking.amenities}
                            </BookingDetailsAmenitiesItemStyled>
                        </BookingDetailsAmenitiesContainerStyled>
                            <BackButton type="button" onClick={() => navigate(-1)}>Volver</BackButton>
                    </BookingDetailsInfoStyled>

                </BookingDetailsStyled>
            }
        </>
    )
}