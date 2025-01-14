import { Outlet } from "react-router-dom"
import { Header,  } from "./components/Header"
import { SideBarMenu } from "./components/SideBarMenu"

export const Layout = () => {

    return (
        <>
            <Header />
            <SideBarMenu />
            <Outlet />
        </>
    )
}