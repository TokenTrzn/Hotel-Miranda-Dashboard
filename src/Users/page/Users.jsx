import { ImageStyled, TableDataHorizontalContainer, TableDataStyled, TableDataVerticalContainer } from "../../common/components/Table/DefaultTableStyled"
import { UsersItemStatusStyled, UsersMenuItemStyled, UsersMenuSearchBarInputStyled, UsersMenuSearchBarStyled, UsersMenuStyled, UsersStyled } from "../components/UsersStyled"
import UserPhoto from '../../assets/dni_cuadrado.jpg'
import { SlOptionsVertical as OptionsIcon } from "react-icons/sl"
import { DefaultTable } from "../../common/components/Table/DefaultTable"
import UsersData from '../data/usersData.json'
import { MdPhone as PhoneIcon } from "react-icons/md";
import { IoIosSearch as SearchIcon } from "react-icons/io"
import { TableIdText, TablePrimaryText } from "../../common/components/Text/TextStyled"




export const Users = () => {

    const headers = ['Name', 'Email', 'Start Date', 'Description', 'Contact', 'Status']

    const itemRow = (user) => (
        <>
            <TableDataStyled>
                <TableDataHorizontalContainer>
                    <ImageStyled src={UserPhoto} />
                    <TableDataVerticalContainer>
                        <TablePrimaryText>{user.name}</TablePrimaryText>
                        <TableIdText>#000{user.id}</TableIdText>
                    </TableDataVerticalContainer>
                </TableDataHorizontalContainer>
            </TableDataStyled>
            <TableDataStyled><TablePrimaryText>{user.email}</TablePrimaryText></TableDataStyled>
            <TableDataStyled><TablePrimaryText>{user.startDate}</TablePrimaryText></TableDataStyled>
            <TableDataStyled><TablePrimaryText>{user.description}</TablePrimaryText></TableDataStyled>
            <TableDataStyled>
                <TableDataHorizontalContainer>
                    <PhoneIcon />
                    <TablePrimaryText>{user.contact}</TablePrimaryText>
                </TableDataHorizontalContainer>
            </TableDataStyled>
            <TableDataStyled>
                <UsersItemStatusStyled type={user.status}>{user.status}</UsersItemStatusStyled>
            </TableDataStyled>
            <TableDataStyled>
                <OptionsIcon/>
            </TableDataStyled>
        </>
    )


    return (
        <UsersStyled>
            <UsersMenuStyled>
                <UsersMenuItemStyled>All Employee</UsersMenuItemStyled>
                <UsersMenuItemStyled>Active Employee</UsersMenuItemStyled>
                <UsersMenuItemStyled>Inactive Employee</UsersMenuItemStyled>
                <UsersMenuSearchBarStyled>
                    <UsersMenuSearchBarInputStyled type="text" placeholder="Search..." />
                    <SearchIcon />
                </UsersMenuSearchBarStyled>
            </UsersMenuStyled>
            <DefaultTable headers={headers} data={UsersData} itemRow={itemRow} />
        </UsersStyled>
    )
}