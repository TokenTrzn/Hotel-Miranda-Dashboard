import { RoomsItemStatusStyled, RoomsMenuItemStyled, RoomsMenuStyled, RoomsStyled } from "../components/RoomsStyled"
import RoomPhoto from '../../assets/room_photo.jpg'
import RoomsData from '../data/roomsData.json'
import { SlOptionsVertical as OptionsIcon } from "react-icons/sl"
import { ImageStyled, TableDataHorizontalContainer, TableDataStyled, TableDataVerticalContainer } from "../../common/components/Table/DefaultTableStyled"
import { DefaultTable } from "../../common/components/Table/DefaultTable"
import { TableIdText, TablePrimaryText } from "../../common/components/Text/TextStyled"
import { DefaultCreateButton } from "../../common/components/defaultCreateButton/DefaultCreateButton"
import { Link, useNavigate } from "react-router-dom"


export const Rooms = () => {

    const headers = ['Room Name', 'Room Type', 'Amenities', 'Price', 'Offer Price', 'Status']
    const navigate = useNavigate() 

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
            <TableDataStyled><OptionsIcon /></TableDataStyled>
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
            <DefaultTable headers={headers} data={RoomsData} itemRow={itemRow} />
        </RoomsStyled>
    )
}