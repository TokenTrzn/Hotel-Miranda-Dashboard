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
import { getAllUsers, getAllUsersError, getAllUsersStatus } from "../features/UsersSlice"
import { UserInterface } from "../interfaces/UserInterface"
import { PaginationButton, PaginationContainer } from "../../common/components/pagination/PaginationStyled"

export const Users: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(true)
    const usersData = useSelector<RootState, UserInterface[]>(getAllUsers)
    const [users, setUsers] = useState<UserInterface[]>(usersData)
    const [selectedStatus, setSelectedStatus] = useState<string>('All Employee')
    const [searchInput, setSearchInput] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(1)
    const usersPerPage = 10
    const status = useSelector<RootState, string>(getAllUsersStatus)
    const error = useSelector<RootState, string | null>(getAllUsersError)

    const headers: string[] = ['Name', 'Email', 'Start Date', 'Description', 'Contact', 'Status', '']

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

    const handleFilterByStatus = (status: string) => {
        let filteredUsers = usersData;

        if (status !== 'All Employee') {
            filteredUsers = usersData.filter(User => User.status === status);
        }

        if (searchInput.trim() !== '') {
            filteredUsers = filteredUsers.filter(user =>
                user.name.toLowerCase().includes(searchInput.toLowerCase())
            );
        }

        setUsers(filteredUsers);
        setSelectedStatus(status);
        setCurrentPage(1)
    }


    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setSearchInput(value)

        let filteredUsers = usersData

        if (selectedStatus !== 'All Employee') {
            filteredUsers = usersData.filter(user => user.status === selectedStatus)
        }

        if (value.trim() !== '') {
            filteredUsers = filteredUsers.filter(user =>
                user.name.toLowerCase().includes(value.toLowerCase())
            )
        }

        setUsers(filteredUsers)
        setCurrentPage(1)
    }

    const indexOfLastUser: number = currentPage * usersPerPage
    const indexOfFirstUser: number = indexOfLastUser - usersPerPage
    const currentUsers: UserInterface[] = users.slice(indexOfFirstUser, indexOfLastUser)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const totalPages: number = users.length > 0 ? Math.ceil(users.length / usersPerPage) : 1

    const pageNumbers: number[] = []
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

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
                        <UsersMenuItemStyled
                            onClick={() => handleFilterByStatus('All Employee')}
                            className={selectedStatus === 'All Employee' ? 'active' : ''}
                        >All Employee</UsersMenuItemStyled>
                        <UsersMenuItemStyled
                            onClick={() => handleFilterByStatus('ACTIVE')}
                            className={selectedStatus === 'ACTIVE' ? 'active' : ''}
                        >Active Employee</UsersMenuItemStyled>
                        <UsersMenuItemStyled
                            onClick={() => handleFilterByStatus('INACTIVE')}
                            className={selectedStatus === 'INACTIVE' ? 'active' : ''}
                        >Inactive Employee</UsersMenuItemStyled>
                        <UsersMenuSearchBarStyled>
                            <UsersMenuSearchBarInputStyled
                                type="text"
                                placeholder="Search..."
                                value={searchInput}
                                onChange={handleSearch}
                            />
                            <SearchIcon />
                        </UsersMenuSearchBarStyled>
                        <DefaultCreateButton onClick={handleNewUserClick} />
                    </UsersMenuStyled>
                    <DefaultTable headers={headers} data={currentUsers} itemRow={itemRow} />
                    <PaginationContainer>
                        {pageNumbers.map(number => (
                            <PaginationButton
                                key={number}
                                onClick={() => paginate(number)}
                                $selected={currentPage === number}
                            >
                                {number}
                            </PaginationButton>
                        ))}
                    </PaginationContainer>
                </UsersStyled>
            }
        </>
    )
}