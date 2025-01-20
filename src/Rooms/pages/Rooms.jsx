import { RoomsItemStatusStyled, RoomsItemTextStyled, RoomsMenuItemStyled, RoomsMenuStyled, RoomsStyled } from "../components/RoomsStyled"
import RoomPhoto from '../../assets/room_photo.jpg'
import RoomsData from '../data/roomsData.json'
import { ImageStyled, TableDataHorizontalContainer, TableDataStyled, TableDataVerticalContainer } from "../../common/components/Table/DefaultTableStyled"
import { DefaultTable } from "../../common/components/Table/DefaultTable"

export const Rooms = () => {

    const headers = ['Room Name', 'Room Type', 'Amenities', 'Price', 'Offer Price', 'Status']

    const itemRow = (room) => (
        <>
            <TableDataStyled>
                <TableDataHorizontalContainer>
                    <ImageStyled src={RoomPhoto} />
                    <TableDataVerticalContainer>
                        #000{room.id}
                        <RoomsItemTextStyled>{room.name} - {room.number}</RoomsItemTextStyled>
                    </TableDataVerticalContainer>
                </TableDataHorizontalContainer>
            </TableDataStyled>
            <TableDataStyled>{room.type}</TableDataStyled>
            <TableDataStyled>{room.amenities}</TableDataStyled>
            <TableDataStyled>{room.price}</TableDataStyled>
            <TableDataStyled>{room.offerPrice}</TableDataStyled>
            <TableDataStyled>
                <RoomsItemStatusStyled type={room.status}>{room.status}</RoomsItemStatusStyled>
            </TableDataStyled>
        </>
    )

    return (
        <RoomsStyled>
            <RoomsMenuStyled>
                <RoomsMenuItemStyled>All Rooms</RoomsMenuItemStyled>
            </RoomsMenuStyled>
            <DefaultTable headers={headers} data={RoomsData} itemRow={itemRow} />
        </RoomsStyled>
    )
}