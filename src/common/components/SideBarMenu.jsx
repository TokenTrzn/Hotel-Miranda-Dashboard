import { useNavigate } from "react-router-dom"
import { 
    SideBarStyled, SideBarHeaderStyled, SideBarTitleStyled, SidebarItemStyled, 
    SideBarProfileStyled, SideBarProfilePhotoStyled, SideBarProfileNameStyled, SideBarProfileEmailStyled, SideBarProfileButtonStyled,
    SideBarCopyrightStyled, SideBarCopyrightTitleStyled, SideBarCopyrightTextStyled
} from "./SideBarStyled"
import hotelIcon from '../../assets/hotel_icon.png'
import photo from '../../assets/dni_cuadrado.jpg'
import { 
    LuLayoutDashboard as DashboardIcon, 
    LuCalendarCheck as BookingIcon, 
    LuKeyRound as RoomsIcon,
    LuContact as ContactIcon,
    LuUsers as UsersIcon
} from "react-icons/lu"
import { IoIosArrowDown as ArrowDownIcon } from "react-icons/io"



export const SideBarMenu = () => {
    const navigate = useNavigate()

    return (
        <SideBarStyled>
            <SideBarHeaderStyled>
                <img src={hotelIcon} />
                <SideBarTitleStyled>
                    <h2>travl</h2>
                    <p>Hotel Admin Dashboard</p>
                </SideBarTitleStyled>
            </SideBarHeaderStyled>
            <SidebarItemStyled>
                <DashboardIcon />
                <p>Dashboard</p>
            </SidebarItemStyled>
            <SidebarItemStyled>
                <BookingIcon />
                <p>Booking</p>
            </SidebarItemStyled>
            <SidebarItemStyled>
                <RoomsIcon />
                <p>Rooms</p>
                <ArrowDownIcon />
            </SidebarItemStyled>
            <SidebarItemStyled>
                <ContactIcon />
                <p>Contact</p>
            </SidebarItemStyled>
            <SidebarItemStyled>
                <UsersIcon />
                <p>Users</p>
            </SidebarItemStyled>
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