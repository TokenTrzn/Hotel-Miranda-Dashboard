import { GuestFirstRowItemStyled, GuestFirstRowStyled, GuestItemCheckHourStyled, GuestItemCheckStyled, GuestItemGuestIdStyled, GuestItemGuestInfoStyled, GuestItemGuestPhotoStyled, GuestItemGuestStyled, GuestItemOrderDateStyled, GuestItemSpecialRequestStyled, GuestItemStatusStyled, GuestItemStyled, GuestItemTextStyled, GuestMenuItemStyled, GuestMenuSearchBarInputStyled, GuestMenuSearchBarStyled, GuestMenuSortBy, GuestMenuSortByText, GuestMenuStyled, GuestMenuTextStyled, GuestStyled } from "../components/Ui/GuestStyled"
import photo from '../../assets/dni_cuadrado.jpg'
import { SlOptionsVertical as OptionsIcon } from "react-icons/sl"
import { IoIosArrowDown as ArrowDownIcon } from "react-icons/io"
import { IoIosSearch as SearchIcon } from "react-icons/io"




export const Guest = () => {

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
                    <GuestMenuSearchBarInputStyled type="text" placeholder="Search..."/>
                    <SearchIcon />
                </GuestMenuSearchBarStyled>
                <GuestMenuSortBy>
                    <GuestMenuSortByText>Newest</GuestMenuSortByText>
                    <ArrowDownIcon />
                </GuestMenuSortBy>
            </GuestMenuStyled>
            <GuestFirstRowStyled>
                <GuestFirstRowItemStyled>Guest</GuestFirstRowItemStyled>
                <GuestFirstRowItemStyled>Order Date</GuestFirstRowItemStyled>
                <GuestFirstRowItemStyled>Check In</GuestFirstRowItemStyled>
                <GuestFirstRowItemStyled>Check Out</GuestFirstRowItemStyled>
                <GuestFirstRowItemStyled>Special Request</GuestFirstRowItemStyled>
                <GuestFirstRowItemStyled>Room Type</GuestFirstRowItemStyled>
                <GuestFirstRowItemStyled>Status</GuestFirstRowItemStyled>
            </GuestFirstRowStyled>
            <GuestItemStyled>
                <GuestItemGuestStyled>
                    <GuestItemGuestPhotoStyled src={photo} />
                    <GuestItemGuestInfoStyled>
                        <GuestItemTextStyled>Alberto Gil</GuestItemTextStyled>
                        <GuestItemGuestIdStyled>#000000000</GuestItemGuestIdStyled>
                    </GuestItemGuestInfoStyled>
                </GuestItemGuestStyled>
                <GuestItemOrderDateStyled>Oct 30th 2020 09:21 AM</GuestItemOrderDateStyled>
                <GuestItemCheckStyled>
                    <GuestItemTextStyled>Nov 2th, 2020</GuestItemTextStyled>
                    <GuestItemCheckHourStyled>9:45 PM</GuestItemCheckHourStyled>
                </GuestItemCheckStyled>
                <GuestItemCheckStyled>
                    <GuestItemTextStyled>Nov 4th, 2020</GuestItemTextStyled>
                    <GuestItemCheckHourStyled>6:12 PM</GuestItemCheckHourStyled>
                </GuestItemCheckStyled>
                <GuestItemSpecialRequestStyled>View Notes</GuestItemSpecialRequestStyled>
                <GuestItemTextStyled>Deluxe A - 02</GuestItemTextStyled>
                <GuestItemStatusStyled type="refund">Refund</GuestItemStatusStyled>
                <OptionsIcon />
            </GuestItemStyled>

            <GuestItemStyled>
                <GuestItemGuestStyled>
                    <GuestItemGuestPhotoStyled src={photo} />
                    <GuestItemGuestInfoStyled>
                        <GuestItemTextStyled>Alberto Gil</GuestItemTextStyled>
                        <GuestItemGuestIdStyled>#000000000</GuestItemGuestIdStyled>
                    </GuestItemGuestInfoStyled>
                </GuestItemGuestStyled>
                <GuestItemOrderDateStyled>Oct 30th 2020 09:21 AM</GuestItemOrderDateStyled>
                <GuestItemCheckStyled>
                    <GuestItemTextStyled>Nov 2th, 2020</GuestItemTextStyled>
                    <GuestItemCheckHourStyled>9:45 PM</GuestItemCheckHourStyled>
                </GuestItemCheckStyled>
                <GuestItemCheckStyled>
                    <GuestItemTextStyled>Nov 4th, 2020</GuestItemTextStyled>
                    <GuestItemCheckHourStyled>6:12 PM</GuestItemCheckHourStyled>
                </GuestItemCheckStyled>
                <GuestItemSpecialRequestStyled type="booked">View Notes</GuestItemSpecialRequestStyled>
                <GuestItemTextStyled>Deluxe A - 02</GuestItemTextStyled>
                <GuestItemStatusStyled type="booked">Booked</GuestItemStatusStyled>
                <OptionsIcon />
            </GuestItemStyled>

            <GuestItemStyled>
                <GuestItemGuestStyled>
                    <GuestItemGuestPhotoStyled src={photo} />
                    <GuestItemGuestInfoStyled>
                        <GuestItemTextStyled>Alberto Gil</GuestItemTextStyled>
                        <GuestItemGuestIdStyled>#000000000</GuestItemGuestIdStyled>
                    </GuestItemGuestInfoStyled>
                </GuestItemGuestStyled>
                <GuestItemOrderDateStyled>Oct 30th 2020 09:21 AM</GuestItemOrderDateStyled>
                <GuestItemCheckStyled>
                    <GuestItemTextStyled>Nov 2th, 2020</GuestItemTextStyled>
                    <GuestItemCheckHourStyled>9:45 PM</GuestItemCheckHourStyled>
                </GuestItemCheckStyled>
                <GuestItemCheckStyled>
                    <GuestItemTextStyled>Nov 4th, 2020</GuestItemTextStyled>
                    <GuestItemCheckHourStyled>6:12 PM</GuestItemCheckHourStyled>
                </GuestItemCheckStyled>
                <GuestItemSpecialRequestStyled>View Notes</GuestItemSpecialRequestStyled>
                <GuestItemTextStyled>Deluxe A - 02</GuestItemTextStyled>
                <GuestItemStatusStyled type="pending">Pending</GuestItemStatusStyled>
                <OptionsIcon />
            </GuestItemStyled>

            <GuestItemStyled>
                <GuestItemGuestStyled>
                    <GuestItemGuestPhotoStyled src={photo} />
                    <GuestItemGuestInfoStyled>
                        <GuestItemTextStyled>Alberto Gil</GuestItemTextStyled>
                        <GuestItemGuestIdStyled>#000000000</GuestItemGuestIdStyled>
                    </GuestItemGuestInfoStyled>
                </GuestItemGuestStyled>
                <GuestItemOrderDateStyled>Oct 30th 2020 09:21 AM</GuestItemOrderDateStyled>
                <GuestItemCheckStyled>
                    <GuestItemTextStyled>Nov 2th, 2020</GuestItemTextStyled>
                    <GuestItemCheckHourStyled>9:45 PM</GuestItemCheckHourStyled>
                </GuestItemCheckStyled>
                <GuestItemCheckStyled>
                    <GuestItemTextStyled>Nov 4th, 2020</GuestItemTextStyled>
                    <GuestItemCheckHourStyled>6:12 PM</GuestItemCheckHourStyled>
                </GuestItemCheckStyled>
                <GuestItemSpecialRequestStyled>View Notes</GuestItemSpecialRequestStyled>
                <GuestItemTextStyled>Deluxe A - 02</GuestItemTextStyled>
                <GuestItemStatusStyled type="canceled">Canceled</GuestItemStatusStyled>
                <OptionsIcon />
            </GuestItemStyled>

            <GuestItemStyled>
                <GuestItemGuestStyled>
                    <GuestItemGuestPhotoStyled src={photo} />
                    <GuestItemGuestInfoStyled>
                        <GuestItemTextStyled>Alberto Gil</GuestItemTextStyled>
                        <GuestItemGuestIdStyled>#000000000</GuestItemGuestIdStyled>
                    </GuestItemGuestInfoStyled>
                </GuestItemGuestStyled>
                <GuestItemOrderDateStyled>Oct 30th 2020 09:21 AM</GuestItemOrderDateStyled>
                <GuestItemCheckStyled>
                    <GuestItemTextStyled>Nov 2th, 2020</GuestItemTextStyled>
                    <GuestItemCheckHourStyled>9:45 PM</GuestItemCheckHourStyled>
                </GuestItemCheckStyled>
                <GuestItemCheckStyled>
                    <GuestItemTextStyled>Nov 4th, 2020</GuestItemTextStyled>
                    <GuestItemCheckHourStyled>6:12 PM</GuestItemCheckHourStyled>
                </GuestItemCheckStyled>
                <GuestItemSpecialRequestStyled>View Notes</GuestItemSpecialRequestStyled>
                <GuestItemTextStyled>Deluxe A - 02</GuestItemTextStyled>
                <GuestItemStatusStyled type="refund">Refund</GuestItemStatusStyled>
                <OptionsIcon />
            </GuestItemStyled>

            <GuestItemStyled>
                <GuestItemGuestStyled>
                    <GuestItemGuestPhotoStyled src={photo} />
                    <GuestItemGuestInfoStyled>
                        <GuestItemTextStyled>Alberto Gil</GuestItemTextStyled>
                        <GuestItemGuestIdStyled>#000000000</GuestItemGuestIdStyled>
                    </GuestItemGuestInfoStyled>
                </GuestItemGuestStyled>
                <GuestItemOrderDateStyled>Oct 30th 2020 09:21 AM</GuestItemOrderDateStyled>
                <GuestItemCheckStyled>
                    <GuestItemTextStyled>Nov 2th, 2020</GuestItemTextStyled>
                    <GuestItemCheckHourStyled>9:45 PM</GuestItemCheckHourStyled>
                </GuestItemCheckStyled>
                <GuestItemCheckStyled>
                    <GuestItemTextStyled>Nov 4th, 2020</GuestItemTextStyled>
                    <GuestItemCheckHourStyled>6:12 PM</GuestItemCheckHourStyled>
                </GuestItemCheckStyled>
                <GuestItemSpecialRequestStyled>View Notes</GuestItemSpecialRequestStyled>
                <GuestItemTextStyled>Deluxe A - 02</GuestItemTextStyled>
                <GuestItemStatusStyled type="refund">Refund</GuestItemStatusStyled>
                <OptionsIcon />
            </GuestItemStyled>
        </GuestStyled>
    )
}