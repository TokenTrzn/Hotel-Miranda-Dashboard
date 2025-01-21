import { KPI } from "../../common/components/KPI/KPI"
import { DashboardContainerStyled, DashboardKPIsStyled } from "../components/DashboardStyled"
import { ContactKPIContainer, ContactKPIIconItemStyled, ContactKPIIconsStyled, ContactKPIInfoStyled, ContactKPIProfileInfoStyled, ContactKPIProfilePhotoStyled, ContactKPIProfileRowStyled, ContactKPIStyled, ContactKPITextStyled, ContactKPITimeStyled } from '../../Contact/components/ContactStyled'
import { IoBedOutline as BedIcon } from "react-icons/io5"
import { LuCalendarCheck as BookingIcon, LuLogIn as CheckInIcon, LuLogOut as CheckOutIcon } from "react-icons/lu";
import ReviewPhoto from '../../assets/dni_cuadrado.jpg'
import OkIcon from '../../assets/ok_icon.png'
import DeleteIcon from '../../assets/delete_icon.png'
import { BookingInfo } from "../components/BookingInfo/BookingInfo";



export const Dashboard = () => {

    return (
        <DashboardContainerStyled>
            <DashboardKPIsStyled>
                <KPI icon={<BedIcon />} number='8.461' text='New Booking' />
                <KPI icon={<BookingIcon />} number='963' text='Scheduled Room' />
                <KPI icon={<CheckInIcon />} number='753' text='Check In' />
                <KPI icon={<CheckOutIcon />} number='516' text='Check Out' />
            </DashboardKPIsStyled>
            <BookingInfo />
            <ContactKPIContainer>
                <ContactKPIStyled>
                    <ContactKPIInfoStyled>
                        <ContactKPITextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</ContactKPITextStyled>
                    </ContactKPIInfoStyled>
                    <ContactKPIProfileRowStyled>
                        <ContactKPIProfilePhotoStyled src={ReviewPhoto} />
                        <ContactKPIProfileInfoStyled>
                            <ContactKPITextStyled>Alberto Gil</ContactKPITextStyled>
                            <ContactKPITimeStyled>4m ago</ContactKPITimeStyled>
                        </ContactKPIProfileInfoStyled>
                        <ContactKPIIconsStyled>
                            <ContactKPIIconItemStyled src={OkIcon} />
                            <ContactKPIIconItemStyled src={DeleteIcon} />
                        </ContactKPIIconsStyled>
                    </ContactKPIProfileRowStyled>
                </ContactKPIStyled>
                <ContactKPIStyled>
                    <ContactKPIInfoStyled>
                        <ContactKPITextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</ContactKPITextStyled>
                    </ContactKPIInfoStyled>
                    <ContactKPIProfileRowStyled>
                        <ContactKPIProfilePhotoStyled src={ReviewPhoto} />
                        <ContactKPIProfileInfoStyled>
                            <ContactKPITextStyled>Alberto Gil</ContactKPITextStyled>
                            <ContactKPITimeStyled>4m ago</ContactKPITimeStyled>
                        </ContactKPIProfileInfoStyled>
                        <ContactKPIIconsStyled>
                            <ContactKPIIconItemStyled src={OkIcon} />
                            <ContactKPIIconItemStyled src={DeleteIcon} />
                        </ContactKPIIconsStyled>
                    </ContactKPIProfileRowStyled>
                </ContactKPIStyled>
                <ContactKPIStyled>
                    <ContactKPIInfoStyled>
                        <ContactKPITextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</ContactKPITextStyled>
                    </ContactKPIInfoStyled>
                    <ContactKPIProfileRowStyled>
                        <ContactKPIProfilePhotoStyled src={ReviewPhoto} />
                        <ContactKPIProfileInfoStyled>
                            <ContactKPITextStyled>Alberto Gil</ContactKPITextStyled>
                            <ContactKPITimeStyled>4m ago</ContactKPITimeStyled>
                        </ContactKPIProfileInfoStyled>
                        <ContactKPIIconsStyled>
                            <ContactKPIIconItemStyled src={OkIcon} />
                            <ContactKPIIconItemStyled src={DeleteIcon} />
                        </ContactKPIIconsStyled>
                    </ContactKPIProfileRowStyled>
                </ContactKPIStyled>
            </ContactKPIContainer>
        </DashboardContainerStyled>
    )
}