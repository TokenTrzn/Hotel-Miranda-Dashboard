import { GuestItemSpecialRequestStyled, GuestItemStatusStyled, GuestMenuItemStyled, GuestMenuSearchBarInputStyled, GuestMenuSearchBarStyled, GuestMenuSortBy, GuestMenuSortByText, GuestMenuStyled, GuestMenuTextStyled, GuestStyled } from "../components/Ui/GuestStyled"
import { SlOptionsVertical as OptionsIcon } from "react-icons/sl"
import { IoIosArrowDown as ArrowDownIcon } from "react-icons/io"
import { IoIosSearch as SearchIcon } from "react-icons/io"
import { TableDataStyled } from "../../common/components/Table/DefaultTableStyled"
import BookingData from '../data/bookingsData.json'
import { DefaultTable } from "../../common/components/Table/DefaultTable"
import { TableIdText, TablePrimaryText, TableSecundaryText, TableSecundaryTextSmall } from "../../common/components/Text/TextStyled"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { CloseButton, Overlay, Popup } from "../../common/components/PopUp/PopUpStyled"




export const Guest = () => {
    const navigate = useNavigate() 

    const headers = ['Guest', 'Order Date', 'Check In', 'Check Out', 'Special Request', 'Room Type', 'Status']
    const [popUpData, setPopUpData] = useState(null)

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
                <GuestItemSpecialRequestStyled type={booking.specialRequest} onClick={() => setPopUpData(booking.description)}>View Notes</GuestItemSpecialRequestStyled>
            </TableDataStyled>
            <TableDataStyled>
                <TablePrimaryText>{booking.type} - {booking.number}</TablePrimaryText>
            </TableDataStyled>
            <TableDataStyled>
                <GuestItemStatusStyled type={booking.status}>{booking.status}</GuestItemStatusStyled>
            </TableDataStyled>
            <TableDataStyled><OptionsIcon onClick={() => navigate(`/guest/details/${booking.id}`)} /></TableDataStyled>
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

            {popUpData && (
                <Overlay>
                    <Popup>
                        <h2>Special Request</h2>
                        <p>{popUpData}</p>
                        <CloseButton onClick={() => setPopUpData(null)}>Close</CloseButton>
                    </Popup>
                </Overlay>
            )}
        </GuestStyled>
    )
}