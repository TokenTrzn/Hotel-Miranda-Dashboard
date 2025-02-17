import { Outlet } from "react-router-dom"
import { Header, } from "./components/header/Header"
import { SideBarMenu } from "./components/sideBarMenu/SideBarMenu"
import React, { useState } from 'react'
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