import {
    SideBarStyled, SideBarHeaderStyled, SideBarTitleStyled, SidebarItemStyled,
    SideBarProfileStyled, SideBarProfilePhotoStyled, SideBarProfileNameStyled, SideBarProfileEmailStyled, SideBarProfileButtonStyled,
    SideBarCopyrightStyled, SideBarCopyrightTitleStyled, SideBarCopyrightTextStyled
} from "./SideBarStyled"
import hotelIcon from '../../../assets/hotel_icon.png'
import photo from '../../../assets/dni_cuadrado.jpg'
import {
    LuLayoutDashboard as DashboardIcon,
    LuCalendarCheck as BookingIcon,
    LuKeyRound as RoomsIcon,
    LuContact as ContactIcon,
    LuUsers as UsersIcon
} from "react-icons/lu"
import { IoIosArrowDown as ArrowDownIcon } from "react-icons/io"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { AuthContext } from "../../../login/AuthContext"



export const SideBarMenu = () => {

    /*
    const { state, dispatch } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState(state.user.name);
    const [email, setEmail] = useState(state.user.email);

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleSave = () => {
        dispatch({
            type: 'updateUser',
            payload: { name, email },
        });
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    */

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
                    <img src={photo} />
                </SideBarProfilePhotoStyled>
                <SideBarProfileNameStyled>Alberto Gil</SideBarProfileNameStyled>
                <SideBarProfileEmailStyled>alberto.gil.sanjuan@gmail.com</SideBarProfileEmailStyled>
                <SideBarProfileButtonStyled>Editar</SideBarProfileButtonStyled>
            </SideBarProfileStyled>
            <SideBarCopyrightStyled>
                <SideBarCopyrightTitleStyled>Travl Hotel Admin Dashboard</SideBarCopyrightTitleStyled>
                <SideBarCopyrightTextStyled>© 2025 All Rights Reserved</SideBarCopyrightTextStyled>
                <SideBarCopyrightTextStyled>Made with ♥ by TokenTrzn</SideBarCopyrightTextStyled>
            </SideBarCopyrightStyled>
        </SideBarStyled>
    )
}