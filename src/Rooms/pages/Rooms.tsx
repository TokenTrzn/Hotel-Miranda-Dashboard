import { RoomsItemStatusStyled, RoomsMenuItemStyled, RoomsMenuStyled, RoomsStyled } from "../components/RoomsStyled"
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
import { ButtonOption, OptionsContainerStyled } from "../../common/components/options/OptionsStyled"
import { AppDispatch, RootState } from "../../store/store"
import { RoomInterface } from "../interfaces/RoomInterface"
import { getAllRooms, getAllRoomsError, getAllRoomsStatus } from "../features/RoomsSlice"

export const Rooms: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(true)
    const roomsData = useSelector<RootState, RoomInterface[]>(getAllRooms)
    const [rooms, setRooms] = useState<RoomInterface[]>(roomsData)
    const status = useSelector<RootState, string>(getAllRoomsStatus)
    const error = useSelector<RootState, string | null>(getAllRoomsError)

    const [showOptions, setShowOptions] = useState(false)

    const toggleMenuOptions = () => {
        setShowOptions(!showOptions)
    }

    const handleUpdate = (room: RoomInterface) => {
        dispatch(updateRoomThunk(room))
    }

    const headers: string[] = ['Room Name', 'Room Type', 'Amenities', 'Price', 'Offer Price', 'Status', '']

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

    const itemRow = (room: RoomInterface) => (
        <>
            <TableDataStyled>
                <TableDataHorizontalContainer>
                    <ImageStyled src={RoomPhoto} />
                    <TableDataVerticalContainer>
                        <TableIdText> #000{room.id}</TableIdText>
                        <TablePrimaryText>{room.name} - {room.number}</TablePrimaryText>
                    </TableDataVerticalContainer>
                </TableDataHorizontalContainer>
            </TableDataStyled>
            <TableDataStyled><TablePrimaryText>{room.type}</TablePrimaryText></TableDataStyled>
            <TableDataStyled>
                {room.amenities.map((amenitie) => (
                    <TablePrimaryText>
                        {amenitie}
                    </TablePrimaryText>
                ))}
            </TableDataStyled>
            <TableDataStyled><TablePrimaryText>{room.price}<span>/Night</span></TablePrimaryText></TableDataStyled>
            <TableDataStyled><TablePrimaryText>{room.offerPrice}<span>/Night</span></TablePrimaryText></TableDataStyled>
            <TableDataStyled>
                <RoomsItemStatusStyled $type={room.status}>{room.status}</RoomsItemStatusStyled>
            </TableDataStyled>
            <TableDataStyled>
                <OptionsIcon onClick={toggleMenuOptions} />
                {showOptions === false ? <></> :
                    <OptionsContainerStyled>
                        <ButtonOption onClick={() => handleUpdate(room)}>Update</ButtonOption>
                        <ButtonOption>Delete</ButtonOption>
                    </OptionsContainerStyled>
                }
            </TableDataStyled>
        </>
    )

    return (
        <>
            {loading === true ? <></> :
                <RoomsStyled>
                    <RoomsMenuStyled>
                        <RoomsMenuItemStyled>All Rooms</RoomsMenuItemStyled>
                        <DefaultCreateButton onClick={handleNewUserClick} />
                    </RoomsMenuStyled>
                    <DefaultTable headers={headers} data={rooms} itemRow={itemRow} />
                </RoomsStyled>
            }
        </>
    )
}