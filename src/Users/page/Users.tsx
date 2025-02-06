import { ImageStyled, TableDataHorizontalContainer, TableDataStyled, TableDataVerticalContainer } from "../../common/components/Table/DefaultTableStyled"
import { UsersItemStatusStyled, UsersMenuItemStyled, UsersMenuSearchBarInputStyled, UsersMenuSearchBarStyled, UsersMenuStyled, UsersStyled } from "../components/UsersStyled"
import { SlOptionsVertical as OptionsIcon } from "react-icons/sl"
import { DefaultTable } from "../../common/components/Table/DefaultTable"
import { MdPhone as PhoneIcon } from "react-icons/md"
import UserPhoto from '../../assets/dni_cuadrado.jpg'
import { IoIosSearch as SearchIcon } from "react-icons/io"
import { TableIdText, TablePrimaryText } from "../../common/components/Text/TextStyled"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { fetchUsersThunk } from "../features/UsersThunk"
import { DefaultCreateButton } from "../../common/components/defaultCreateButton/DefaultCreateButton"
import { AppDispatch, RootState } from "../../store/store"
import { getAllUsers, getAllUsersStatus } from "../features/UsersSlice"
import { UserInterface } from "../interfaces/UserInterface"

export const Users: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(true)
    const usersData = useSelector<RootState, UserInterface[]>(getAllUsers)
    const [users, setUsers] = useState<UserInterface[]>(usersData)
    const status = useSelector<RootState, string>(getAllUsersStatus)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsersThunk())
        } else if (status === 'fulfilled') {
            setUsers(usersData)
            setLoading(false)
        } else if (status === 'pending') {
            setLoading(true)
        }
    }, [dispatch, status, usersData])

    const handleNewUserClick = (): void => {
        navigate('/new-user')
    }


    const headers: string[] = ['Name', 'Email', 'Start Date', 'Description', 'Contact', 'Status', '']

    const itemRow = (user: UserInterface) => (
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
                <UsersItemStatusStyled $status={user.status}>{user.status}</UsersItemStatusStyled>
            </TableDataStyled>
            <TableDataStyled>
                <OptionsIcon />
            </TableDataStyled>
        </>
    )


    return (
        <>
            {loading === true ? <></> :
                <UsersStyled>
                    <UsersMenuStyled>
                        <UsersMenuItemStyled>All Employee</UsersMenuItemStyled>
                        <UsersMenuItemStyled>Active Employee</UsersMenuItemStyled>
                        <UsersMenuItemStyled>Inactive Employee</UsersMenuItemStyled>
                        <UsersMenuSearchBarStyled>
                            <UsersMenuSearchBarInputStyled type="text" placeholder="Search..." />
                            <SearchIcon />
                        </UsersMenuSearchBarStyled>
                        <DefaultCreateButton onClick={handleNewUserClick} />
                    </UsersMenuStyled>
                    <DefaultTable headers={headers} data={users} itemRow={itemRow} />
                </UsersStyled>
            }
        </>
    )
}