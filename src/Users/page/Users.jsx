import { ImageStyled, TableDataHorizontalContainer, TableDataStyled, TableDataVerticalContainer } from "../../common/components/Table/DefaultTableStyled"
import { UsersItemStatusStyled, UsersMenuItemStyled, UsersMenuSearchBarInputStyled, UsersMenuSearchBarStyled, UsersMenuStyled, UsersStyled } from "../components/UsersStyled"
import UserPhoto from '../../assets/dni_cuadrado.jpg'
import { SlOptionsVertical as OptionsIcon } from "react-icons/sl"
import { DefaultTable } from "../../common/components/Table/DefaultTable"
import { MdPhone as PhoneIcon } from "react-icons/md"
import { IoIosSearch as SearchIcon } from "react-icons/io"
import { TableIdText, TablePrimaryText } from "../../common/components/Text/TextStyled"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { fetchUsersThunk } from "../features/UsersThunk"
import { DefaultCreateButton } from "../../common/components/defaultCreateButton/DefaultCreateButton"

export const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.users)

    useEffect(() => {
            dispatch(fetchUsersThunk())
    }, [dispatch])

    useEffect(() => {
        console.log('Users State Updated: ', users)
    }, [users])


    const headers = ['Name', 'Email', 'Start Date', 'Description', 'Contact', 'Status', '']

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
                <Link to='/new-user'>
                    <DefaultCreateButton />
                </Link>
            </UsersMenuStyled>
            <DefaultTable headers={headers} data={users} itemRow={itemRow} />
        </UsersStyled>
    )
}