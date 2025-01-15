import { KPI } from "../../common/components/KPI/KPI"
import { DashboardContainerStyled, DashboardKPIsStyled } from "../components/DashboardStyled"
import { IoBedOutline as BedIcon } from "react-icons/io5"
import { LuCalendarCheck as BookingIcon, LuLogIn as CheckInIcon, LuLogOut as CheckOutIcon } from "react-icons/lu";



export const Dashboard = () => {

    return (
        <DashboardContainerStyled>
            <DashboardKPIsStyled>
                <KPI icon={<BedIcon />} number='8.461' text='New Booking' />
                <KPI icon={<BookingIcon />} number='963' text='Scheduled Room' />
                <KPI icon={<CheckInIcon />} number='753' text='Check In' />
                <KPI icon={<CheckOutIcon />} number='516' text='Check Out' />
            </DashboardKPIsStyled>
        </DashboardContainerStyled>
    )
}