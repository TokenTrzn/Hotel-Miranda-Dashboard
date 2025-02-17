import { BookingItemSpecialRequestStyled, BookingItemStatusStyled, BookingMenuItemStyled, BookingMenuSearchBarInputStyled, BookingMenuSearchBarStyled, BookingMenuSortBy, BookingMenuSortByText, BookingMenuStyled, BookingMenuTextStyled, BookingStyled } from "../components/Ui/BookingsStyled"
import { SlOptionsVertical as OptionsIcon } from "react-icons/sl"
import { IoIosArrowDown as ArrowDownIcon } from "react-icons/io"
import { IoIosSearch as SearchIcon } from "react-icons/io"
import { TableDataStyled } from "../../common/components/Table/DefaultTableStyled"
import { DefaultTable } from "../../common/components/Table/DefaultTable"
import { TableIdText, TablePrimaryText, TableSecundaryText, TableSecundaryTextSmall } from "../../common/components/Text/TextStyled"
import { Link, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { CloseButton, Overlay, Popup } from "../../common/components/PopUp/PopUpStyled"
import { useDispatch, useSelector } from "react-redux"
import { fetchBookingsThunk } from "../features/BookingsThunk"
import { getAllBookings, getAllBookingsError, getAllBookingsStatus } from "../features/BookingsSlice"
import { AppDispatch, RootState } from "../../store/store"
import { BookingInterface } from "../interfaces/BookingInterface"

export const Booking: React.FC = () => {
    const [popUpData, setPopUpData] = useState('')
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(true)
    const bookingsData = useSelector<RootState, BookingInterface[]>(getAllBookings)
    const [bookings, setBookings] = useState<BookingInterface[]>(bookingsData)
    const [selectedStatus, setSelectedStatus] = useState<string>('All Bookings')
    const [searchInput, setSearchInput] = useState<string>('')
    const status = useSelector<RootState, string>(getAllBookingsStatus)
    const error = useSelector<RootState, string | null>(getAllBookingsError)

    const headers: string[] = ['Guest', 'Order Date', 'Check In', 'Check Out', 'Special Request', 'Room Type', 'Status', '']

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchBookingsThunk())
        } else if (status === 'fulfilled') {
            setBookings(bookingsData)
            setLoading(false)
        } else if (status === 'pending') {
            setLoading(true)
        }
    }, [dispatch, status, bookingsData])

    const handleFilterByStatus = (status: string) => {
        let filteredBookings = bookingsData;

        if (status !== 'All Bookings') {
            filteredBookings = bookingsData.filter(booking => booking.status === status);
        }

        if (searchInput.trim() !== '') {
            filteredBookings = filteredBookings.filter(booking =>
                booking.guestName.toLowerCase().includes(searchInput.toLowerCase())
            );
        }

        setBookings(filteredBookings);
        setSelectedStatus(status);
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setSearchInput(value)

        let filteredBookings = bookingsData

        if (selectedStatus !== 'All Bookings') {
            filteredBookings = bookingsData.filter(booking => booking.status === selectedStatus)
        }

        if (value.trim() !== '') {
            filteredBookings = filteredBookings.filter(booking =>
                booking.guestName.toLowerCase().includes(value.toLowerCase())
            )
        }

        setBookings(filteredBookings)
    }

    const itemRow = (booking: BookingInterface) => (
        <>
            {loading === true ? <></> :
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
                        <BookingItemSpecialRequestStyled $type={booking.specialRequest} onClick={() => setPopUpData(booking.description)}>View Notes</BookingItemSpecialRequestStyled>
                    </TableDataStyled>
                    <TableDataStyled>
                        <TablePrimaryText>{booking.type} - {booking.number}</TablePrimaryText>
                    </TableDataStyled>
                    <TableDataStyled>
                        <BookingItemStatusStyled $type={booking.status}>{booking.status}</BookingItemStatusStyled>
                    </TableDataStyled>
                    <TableDataStyled>
                        <Link to={`details/${booking.id}`}>
                            <OptionsIcon />
                        </Link>
                    </TableDataStyled>
                </>
            }
        </>
    )

    return (
        <BookingStyled data-cy='bookings'>
            <BookingMenuStyled>
                <BookingMenuTextStyled>
                    <BookingMenuItemStyled 
                        onClick={() => handleFilterByStatus('All Bookings')}
                        className={selectedStatus === 'All Bookings' ? 'active' : ''}
                    >All Bookings</BookingMenuItemStyled>
                    <BookingMenuItemStyled
                        onClick={() => handleFilterByStatus('Check In')}
                        className={selectedStatus === 'Check In' ? 'active' : ''}
                    >Checking In</BookingMenuItemStyled>
                    <BookingMenuItemStyled
                        onClick={() => handleFilterByStatus('Check Out')}
                        className={selectedStatus === 'Check Out' ? 'active' : ''}
                    >Checking Out</BookingMenuItemStyled>
                    <BookingMenuItemStyled
                        onClick={() => handleFilterByStatus('In Progress')}
                        className={selectedStatus === 'In Progress' ? 'active' : ''}
                    >In Progress</BookingMenuItemStyled>
                </BookingMenuTextStyled>
                <BookingMenuSearchBarStyled>
                    <BookingMenuSearchBarInputStyled 
                    type="text" 
                    placeholder="Search..."
                    value={searchInput}
                    onChange={handleSearch}
                    />
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
                        <CloseButton onClick={() => setPopUpData('')}>Close</CloseButton>
                    </Popup>
                </Overlay>
            )}
        </BookingStyled>
    )
}