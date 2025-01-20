import { ImageStyled, TableDataHorizontalContainer, TableDataStyled, TableDataVerticalContainer } from "../../common/components/Table/DefaultTableStyled"
import { UsersItemStatusStyled, UsersItemTextStyled, UsersMenuItemStyled, UsersMenuSearchBarInputStyled, UsersMenuSearchBarStyled, UsersMenuStyled, UsersStyled } from "../components/UsersStyled"
import UserPhoto from '../../assets/dni_cuadrado.jpg'
import { DefaultTable } from "../../common/components/Table/DefaultTable"
import UsersData from '../data/usersData.json'
import { MdPhone as PhoneIcon } from "react-icons/md";
import { IoIosSearch as SearchIcon } from "react-icons/io"




export const Users = () => {

    const headers = ['Name', 'Email', 'Start Date', 'Description', 'Contact', 'Status']

    const itemRow = (user) => (
        <>
            <TableDataStyled>
                <TableDataHorizontalContainer>
                    <ImageStyled src={UserPhoto} />
                    <TableDataVerticalContainer>
                        <UsersItemTextStyled>{user.name}</UsersItemTextStyled>
                        #000{user.id}
                    </TableDataVerticalContainer>
                </TableDataHorizontalContainer>
            </TableDataStyled>
            <TableDataStyled>{user.email}</TableDataStyled>
            <TableDataStyled>{user.startDate}</TableDataStyled>
            <TableDataStyled>{user.description}</TableDataStyled>
            <TableDataStyled><PhoneIcon /> {user.contact}</TableDataStyled>
            <TableDataStyled>
                <UsersItemStatusStyled type={user.status}>{user.status}</UsersItemStatusStyled>
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