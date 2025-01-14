import { useNavigate } from "react-router-dom"
import { NavStyled, NavContainerIconsStyled, NavContainerAlertIconsStyled } from "./HeaderStyled"
import { HiOutlineMenuAlt2 as MenuIcon } from "react-icons/hi"
import { HiOutlineEnvelope as ContactIcon } from "react-icons/hi2"
import { LuBellRing as MessageIcon } from "react-icons/lu"
import { IoIosLogOut as LogOutIcon } from "react-icons/io"

export const Header = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/')
    }

    return (
        <NavStyled>
            <NavContainerIconsStyled>
                <MenuIcon onClick={() => { }} />
                <h2>Dashboard</h2>
            </NavContainerIconsStyled>
            <NavContainerAlertIconsStyled>
                <ContactIcon />
                <MessageIcon />
                <LogOutIcon />
            </NavContainerAlertIconsStyled>
        </NavStyled>
    )
}