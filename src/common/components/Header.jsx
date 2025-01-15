import { useNavigate } from "react-router-dom"
import { NavStyled, NavContainerIconsStyled } from "./HeaderStyled"
import { HiOutlineMenuAlt2 as MenuIcon } from "react-icons/hi"
import { IoArrowBack as ArrowBackIcon } from "react-icons/io5"
import { HiOutlineEnvelope as ContactIcon } from "react-icons/hi2"
import { LuBellRing as MessageIcon } from "react-icons/lu"
import { IoIosLogOut as LogOutIcon } from "react-icons/io"

export const Header = ({ onToggleSideBarMenu }) => {

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/')
    }

    return (
        <NavStyled>
            <NavContainerIconsStyled>
                {onToggleSideBarMenu ? 
                    <MenuIcon onClick={onToggleSideBarMenu} /> : 
                    <ArrowBackIcon onClick={onToggleSideBarMenu} />
                }                
                <h2>Dashboard</h2>
            </NavContainerIconsStyled>
            <NavContainerIconsStyled className='secondary'>
                <ContactIcon />
                <MessageIcon />
                <LogOutIcon onClick={handleLogout} />
            </NavContainerIconsStyled>
        </NavStyled>
    )
}