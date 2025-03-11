import { RoomSeeAmenitiesStyled, RoomsItemStatusStyled, RoomsMenuItemStyled, RoomsMenuStyled, RoomsStyled } from "../components/RoomsStyled"
import RoomPhoto from '../../assets/room_photo.jpg'
import { SlOptionsVertical as OptionsIcon } from "react-icons/sl"
import { ImageStyled, TableDataHorizontalContainer, TableDataStyled, TableDataVerticalContainer } from "../../common/components/Table/DefaultTableStyled"
import { DefaultTable } from "../../common/components/Table/DefaultTable"
import { TableIdText, TablePrimaryText } from "../../common/components/Text/TextStyled"
import { DefaultCreateButton } from "../../common/components/defaultCreateButton/DefaultCreateButton"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { fetchRoomsThunk, updateRoomThunk } from "../features/RoomsThunk"
import { ButtonOptionStyled, OptionsContainerStyled } from "../../common/components/options/OptionsStyled"
import { AppDispatch, RootState } from "../../store/store"
import { RoomInterface } from "../interfaces/RoomInterface"
import { getAllRooms, getAllRoomsError, getAllRoomsStatus } from "../features/RoomsSlice"
import { PaginationButton, PaginationContainer } from "../../common/components/pagination/PaginationStyled"
import { NoResultPage } from "../../common/components/noResultPage/NoResultPage"
import { CloseButton, Overlay, Popup } from "../../common/components/PopUp/PopUpStyled"

export const Rooms: React.FC = () => {
    const [popUpData, setPopUpData] = useState('')
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(true)
    const roomsData = useSelector<RootState, RoomInterface[]>(getAllRooms)
    const [rooms, setRooms] = useState<RoomInterface[]>(roomsData)
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const roomsPerPage = 10
    const status = useSelector<RootState, string>(getAllRoomsStatus)
    const error = useSelector<RootState, string | null>(getAllRoomsError)

    const headers: string[] = ['Room Name', 'Room Type', 'Amenities', 'Price', 'Offer Price', 'Status', '']

    const handleUpdate = (room: RoomInterface) => {
        dispatch(updateRoomThunk(room._id))
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchRoomsThunk())
        } else if (status === 'fulfilled') {
            setRooms(roomsData)
            setLoading(false)
        } else if (status === 'pending') {
            setLoading(true)
        }
    }, [dispatch, status, roomsData])

    const handleNewUserClick = (): void => navigate('/new-room')

    const navigateToRoomDetails = (room: RoomInterface) => {
        navigate(`/rooms/details/${room._id}`, {
            state: { room }
        });
    };

    const indexOfLastRoom: number = currentPage * roomsPerPage
    const indexOfFirstRoom: number = indexOfLastRoom - roomsPerPage
    const currentRooms: RoomInterface[] = rooms.slice(indexOfFirstRoom, indexOfLastRoom)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const totalPages: number = rooms.length > 0 ? Math.ceil(rooms.length / roomsPerPage) : 1

    const pageNumbers: number[] = []
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    const itemRow = (room: RoomInterface) => (
        <>
            {loading === true ? <></> :
                <>
                    <TableDataStyled>
                        <TableDataHorizontalContainer>
                            <ImageStyled src={RoomPhoto} />
                            <TableDataVerticalContainer>
                                <TableIdText> #{room._id}</TableIdText>
                                <TablePrimaryText>{room.name} - {room.number}</TablePrimaryText>
                            </TableDataVerticalContainer>
                        </TableDataHorizontalContainer>
                    </TableDataStyled>
                    <TableDataStyled><TablePrimaryText>{room.type}</TablePrimaryText></TableDataStyled>
                    <TableDataStyled>
                        <RoomSeeAmenitiesStyled onClick={() => setPopUpData(room.amenities.join('\t-\t'))}>See Amenities</RoomSeeAmenitiesStyled>
                    </TableDataStyled>
                    <TableDataStyled><TablePrimaryText>{room.price}<span>/Night</span></TablePrimaryText></TableDataStyled>
                    <TableDataStyled><TablePrimaryText>{room.offerPrice}<span>/Night</span></TablePrimaryText></TableDataStyled>
                    <TableDataStyled>
                        <RoomsItemStatusStyled $type={room.status}>{room.status}</RoomsItemStatusStyled>
                    </TableDataStyled>
                    <TableDataStyled>
                        <OptionsIcon onClick={() => navigateToRoomDetails(room)} />
                    </TableDataStyled>
                </>
            }
        </>
    )

    return (
        <RoomsStyled>
            <RoomsMenuStyled>
                <RoomsMenuItemStyled>All Rooms</RoomsMenuItemStyled>
                <DefaultCreateButton onClick={handleNewUserClick} />
            </RoomsMenuStyled>
            <DefaultTable headers={headers} data={currentRooms} itemRow={itemRow} />
            {currentRooms.length > 0
                ? <PaginationContainer>
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
                : <NoResultPage />
            }

            {popUpData && (
                <Overlay>
                    <Popup>
                        <h2>Room Amenities</h2>
                        <p>{popUpData}</p>
                        <CloseButton onClick={() => setPopUpData('')}>Close</CloseButton>
                    </Popup>
                </Overlay>
            )}
        </RoomsStyled>
    )
}