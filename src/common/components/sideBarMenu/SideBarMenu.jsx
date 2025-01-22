import {
    SideBarStyled, SideBarHeaderStyled, SideBarTitleStyled, SidebarItemStyled,
    SideBarProfileStyled, SideBarProfilePhotoStyled, SideBarProfileNameStyled, SideBarProfileEmailStyled, SideBarProfileButtonStyled,
    SideBarCopyrightStyled, SideBarCopyrightTitleStyled, SideBarCopyrightTextStyled
} from "./SideBarStyled"
import hotelIcon from '../../../assets/hotel_icon.png'
import {
    LuLayoutDashboard as DashboardIcon,
    LuCalendarCheck as BookingIcon,
    LuKeyRound as RoomsIcon,
    LuContact as ContactIcon,
    LuUsers as UsersIcon
} from "react-icons/lu"
import { IoIosArrowDown as ArrowDownIcon } from "react-icons/io"
import { Link } from "react-router-dom"
import { useState } from "react"
import { EditUserPopup } from "./components/EditUserInfoPopUp"



export const SideBarMenu = () => {

    const [user, setUser] = useState({
        name: 'Alberto Gil',
        email: 'alberto.gil.sanjuan@gmail.com',
        image: 'src/assets/dni_cuadrado.jpg'
    })

    const [isEditing, setIsEditing] = useState(false)

    const handleShowPopUp = () => setIsEditing(true);
    const handleClosePopUp = () => setIsEditing(false);

    const handleSave = (updatedUser) => {
        setUser(updatedUser);
        setIsEditing(false);
    };

    return (
        <SideBarStyled>
            <SideBarHeaderStyled>
                <img src={hotelIcon} />
                <SideBarTitleStyled>
                    <h2>travl</h2>
                    <p>Hotel Admin Dashboard</p>
                </SideBarTitleStyled>
            </SideBarHeaderStyled>
            <Link to={'/dashboard'}>
                <SidebarItemStyled>
                    <DashboardIcon />
                    <p>Dashboard</p>
                </SidebarItemStyled>
            </Link>
            <Link to={'/guest'}>
                <SidebarItemStyled>
                    <BookingIcon />
                    <p>Booking</p>
                </SidebarItemStyled>
            </Link>
            <Link to={'/rooms'}>
                <SidebarItemStyled>
                    <RoomsIcon />
                    <p>Rooms</p>
                    <ArrowDownIcon />
                </SidebarItemStyled>
            </Link>
            <Link to={'/contact'}>
                <SidebarItemStyled>
                    <ContactIcon />
                    <p>Contact</p>
                </SidebarItemStyled>
            </Link>
            <Link to={'/users'}>
                <SidebarItemStyled>
                    <UsersIcon />
                    <p>Users</p>
                </SidebarItemStyled>
            </Link>
            <SideBarProfileStyled>
                <SideBarProfilePhotoStyled>
                    <img src={user.image} />
                </SideBarProfilePhotoStyled>
                <SideBarProfileNameStyled>{user.name}</SideBarProfileNameStyled>
                <SideBarProfileEmailStyled>{user.email}</SideBarProfileEmailStyled>
                <SideBarProfileButtonStyled onClick={handleShowPopUp} >Editar</SideBarProfileButtonStyled>
            </SideBarProfileStyled>
            <SideBarCopyrightStyled>
                <SideBarCopyrightTitleStyled>Travl Hotel Admin Dashboard</SideBarCopyrightTitleStyled>
                <SideBarCopyrightTextStyled>© 2025 All Rights Reserved</SideBarCopyrightTextStyled>
                <SideBarCopyrightTextStyled>Made with ♥ by TokenTrzn</SideBarCopyrightTextStyled>
            </SideBarCopyrightStyled>

            {isEditing && (<EditUserPopup user={user} onClose={handleClosePopUp} onSave={handleSave} />)}
        </SideBarStyled>
    )
}