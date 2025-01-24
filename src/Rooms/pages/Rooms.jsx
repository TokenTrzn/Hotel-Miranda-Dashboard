import { RoomsItemStatusStyled, RoomsMenuItemStyled, RoomsMenuStyled, RoomsStyled } from "../components/RoomsStyled"
import RoomPhoto from '../../assets/room_photo.jpg'
import { SlOptionsVertical as OptionsIcon } from "react-icons/sl"
import { ImageStyled, TableDataHorizontalContainer, TableDataStyled, TableDataVerticalContainer } from "../../common/components/Table/DefaultTableStyled"
import { DefaultTable } from "../../common/components/Table/DefaultTable"
import { TableIdText, TablePrimaryText } from "../../common/components/Text/TextStyled"
import { DefaultCreateButton } from "../../common/components/defaultCreateButton/DefaultCreateButton"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchRoomsThunk, updateRoomThunk } from "../features/RoomsThunk"
import { ButtonOption, OptionsContainerStyled } from "../../common/components/options/OptionsStyled"

export const Rooms = () => {
    const dispatch = useDispatch()
    const rooms = useSelector((state) => state.rooms.rooms)

    useEffect(() => {
        dispatch(fetchRoomsThunk())
    }, [dispatch])

    useEffect(() => {
        console.log('Rooms state updated:', rooms)
    }, [rooms])

    const [showOptions, setShowOptions] = useState(null)

    const toggleMenuOptions = (itemId) => {
        setShowOptions((prev) => (prev === itemId ? null : itemId))
    }

    const handleUpdate = (room) => {
        dispatch(updateRoomThunk(room))
    }

    const headers = ['Room Name', 'Room Type', 'Amenities', 'Price', 'Offer Price', 'Status', '']

    const itemRow = (room) => (
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
            <TableDataStyled><TablePrimaryText>{room.amenities}</TablePrimaryText></TableDataStyled>
            <TableDataStyled><TablePrimaryText>{room.price}<span>/Night</span></TablePrimaryText></TableDataStyled>
            <TableDataStyled><TablePrimaryText>{room.offerPrice}<span>/Night</span></TablePrimaryText></TableDataStyled>
            <TableDataStyled>
                <RoomsItemStatusStyled type={room.status}>{room.status}</RoomsItemStatusStyled>
            </TableDataStyled>
            <TableDataStyled>
                <OptionsIcon onClick={toggleMenuOptions} />
                {showOptions && (
                    <OptionsContainerStyled>
                        <ButtonOption onClick={handleUpdate}>Update</ButtonOption>
                        <ButtonOption>Delete</ButtonOption>
                    </OptionsContainerStyled>
                )}
            </TableDataStyled>
        </>
    )

    return (
        <RoomsStyled>
            <RoomsMenuStyled>
                <RoomsMenuItemStyled>All Rooms</RoomsMenuItemStyled>
                <Link to='/new-room'>
                    <DefaultCreateButton />
                </Link>
            </RoomsMenuStyled>
            <DefaultTable headers={headers} data={rooms} itemRow={itemRow} />
        </RoomsStyled>
    )
}