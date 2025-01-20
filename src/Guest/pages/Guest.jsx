import { GuestItemSpecialRequestStyled, GuestItemStatusStyled, GuestItemTextStyled, GuestMenuItemStyled, GuestMenuSearchBarInputStyled, GuestMenuSearchBarStyled, GuestMenuSortBy, GuestMenuSortByText, GuestMenuStyled, GuestMenuTextStyled, GuestStyled } from "../components/Ui/GuestStyled"
import { SlOptionsVertical as OptionsIcon } from "react-icons/sl"
import { IoIosArrowDown as ArrowDownIcon } from "react-icons/io"
import { IoIosSearch as SearchIcon } from "react-icons/io"
import { TableDataStyled } from "../../common/components/Table/DefaultTableStyled"
import RoomPhoto from '../../assets/dni_cuadrado.jpg'
import BookingData from '../data/bookingsData.json'
import { DefaultTable } from "../../common/components/Table/DefaultTable"




export const Guest = () => {

    const headers = ['Guest', 'Order Date', 'Check In', 'Check Out', 'Special Request', 'Room Type', 'Status']

    const itemRow = (booking) => (
        <>
            <TableDataStyled>
                <GuestItemTextStyled>{booking.guestName}</GuestItemTextStyled>
                #000{booking.id}
            </TableDataStyled>
            <TableDataStyled>
                {booking.orderDate} {booking.orderDateHour}
            </TableDataStyled>
            <TableDataStyled>
                <GuestItemTextStyled>{booking.checkIn}</GuestItemTextStyled>
                {booking.checkInHour}
            </TableDataStyled>
            <TableDataStyled>
                <GuestItemTextStyled>{booking.checkOut}</GuestItemTextStyled>
                {booking.checkOutHour}
            </TableDataStyled>
            <TableDataStyled>
                <GuestItemSpecialRequestStyled type={booking.specialRequest}>View Notes</GuestItemSpecialRequestStyled>
            </TableDataStyled>
            <TableDataStyled>
                <GuestItemTextStyled>{booking.type} - {booking.number}</GuestItemTextStyled>
            </TableDataStyled>
            <TableDataStyled>
                <GuestItemStatusStyled type={booking.status}>{booking.status}</GuestItemStatusStyled>
            </TableDataStyled>
        </>
    )

    return (
        <GuestStyled>
            <GuestMenuStyled>
                <GuestMenuTextStyled>
                    <GuestMenuItemStyled>All Bookings</GuestMenuItemStyled>
                    <GuestMenuItemStyled>Checking In</GuestMenuItemStyled>
                    <GuestMenuItemStyled>Checking Out</GuestMenuItemStyled>
                    <GuestMenuItemStyled>In Progress</GuestMenuItemStyled>
                </GuestMenuTextStyled>
                <GuestMenuSearchBarStyled>
                    <GuestMenuSearchBarInputStyled type="text" placeholder="Search..." />
                    <SearchIcon />
                </GuestMenuSearchBarStyled>
                <GuestMenuSortBy>
                    <GuestMenuSortByText>Newest</GuestMenuSortByText>
                    <ArrowDownIcon />
                </GuestMenuSortBy>
            </GuestMenuStyled>
            <DefaultTable headers={headers} data={BookingData} itemRow={itemRow} />
        </GuestStyled>
    )
}