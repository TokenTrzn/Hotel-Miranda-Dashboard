import { BookingItemSpecialRequestStyled, BookingItemStatusStyled, BookingMenuItemStyled, BookingMenuSearchBarInputStyled, BookingMenuSearchBarStyled, BookingMenuSortBy, BookingMenuSortByText, BookingMenuStyled, BookingMenuTextStyled, BookingStyled } from "../components/Ui/BookingsStyled"
import { SlOptionsVertical as OptionsIcon } from "react-icons/sl"
import { IoIosArrowDown as ArrowDownIcon } from "react-icons/io"
import { IoIosSearch as SearchIcon } from "react-icons/io"
import { TableDataStyled } from "../../common/components/Table/DefaultTableStyled"
import { DefaultTable } from "../../common/components/Table/DefaultTable"
import { TableIdText, TablePrimaryText, TableSecundaryText, TableSecundaryTextSmall } from "../../common/components/Text/TextStyled"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { CloseButton, Overlay, Popup } from "../../common/components/PopUp/PopUpStyled"
import { useDispatch, useSelector } from "react-redux"
import { fetchBookingsThunk } from "../features/BookingsThunk"
import { getAllBookings } from "../features/BookingsSlice"

export const Booking = () => {
    const dispatch = useDispatch()
    const [popUpData, setPopUpData] = useState(null)
    const bookings = useSelector(getAllBookings)

    const headers = ['Guest', 'Order Date', 'Check In', 'Check Out', 'Special Request', 'Room Type', 'Status', '']

    useEffect(() => {
        dispatch(fetchBookingsThunk())
    }, [dispatch])

    const itemRow = (booking) => (
        <>
            <TableDataStyled>
                <TablePrimaryText>{booking.guestName}</TablePrimaryText>
                <TableIdText>#000{booking.id}</TableIdText>
            </TableDataStyled>
            <TableDataStyled>
                <TableSecundaryText>{booking.orderDate} {booking.orderDateHour}</TableSecundaryText>
            </TableDataStyled>
            <TableDataStyled>
                <TablePrimaryText>{booking.checkIn}</TablePrimaryText>
                <TableSecundaryTextSmall>{booking.checkInHour}</TableSecundaryTextSmall>
            </TableDataStyled>
            <TableDataStyled>
                <TablePrimaryText>{booking.checkOut}</TablePrimaryText>
                <TableSecundaryTextSmall>{booking.checkOutHour}</TableSecundaryTextSmall>
            </TableDataStyled>
            <TableDataStyled>
                <BookingItemSpecialRequestStyled type={booking.specialRequest} onClick={() => setPopUpData(booking.description)}>View Notes</BookingItemSpecialRequestStyled>
            </TableDataStyled>
            <TableDataStyled>
                <TablePrimaryText>{booking.type} - {booking.number}</TablePrimaryText>
            </TableDataStyled>
            <TableDataStyled>
                <BookingItemStatusStyled type={booking.status}>{booking.status}</BookingItemStatusStyled>
            </TableDataStyled>
            <TableDataStyled>
                <Link to={`details/${booking.id}`}>
                    <OptionsIcon />
                </Link>
            </TableDataStyled>
        </>
    )

    return (
        <BookingStyled data-cy='bookings'>
            <BookingMenuStyled>
                <BookingMenuTextStyled>
                    <BookingMenuItemStyled>All Bookings</BookingMenuItemStyled>
                    <BookingMenuItemStyled>Checking In</BookingMenuItemStyled>
                    <BookingMenuItemStyled>Checking Out</BookingMenuItemStyled>
                    <BookingMenuItemStyled>In Progress</BookingMenuItemStyled>
                </BookingMenuTextStyled>
                <BookingMenuSearchBarStyled>
                    <BookingMenuSearchBarInputStyled type="text" placeholder="Search..." />
                    <SearchIcon />
                </BookingMenuSearchBarStyled>
                <BookingMenuSortBy>
                    <BookingMenuSortByText>Newest</BookingMenuSortByText>
                    <ArrowDownIcon />
                </BookingMenuSortBy>
            </BookingMenuStyled>
            <DefaultTable headers={headers} data={bookings} itemRow={itemRow} />

            {popUpData && (
                <Overlay>
                    <Popup>
                        <h2>Special Request</h2>
                        <p>{popUpData}</p>
                        <CloseButton onClick={() => setPopUpData(null)}>Close</CloseButton>
                    </Popup>
                </Overlay>
            )}
        </BookingStyled>
    )
}