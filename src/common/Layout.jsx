import { Outlet } from "react-router-dom"
import { Header, } from "./components/Header"
import { SideBarMenu } from "./components/SideBarMenu"
import { useState } from 'react'
import { LayoutContainerStyled, ContentStyled } from "./LayoutStyled"

export const Layout = () => {
    const [isSideBarMenuOpen, setIsSideBarMenuOpen] = useState(true)

    const toggleSideBarMenu = () => {
        setIsSideBarMenuOpen(!isSideBarMenuOpen)
    }

    return (
        <>
            <LayoutContainerStyled>
                { isSideBarMenuOpen && <SideBarMenu /> }
                <ContentStyled>
                <Header onToggleSideBarMenu={toggleSideBarMenu} />
                <Outlet />
                </ContentStyled>                
            </LayoutContainerStyled>
        </>

    )
}