import { RoomsFirstRowItemStyled, RoomsFirstRowStyled, RoomsItemRoomProfileContainerStyled, RoomsItemRoomProfileIdStyled, RoomsItemRoomProfileInfoStyled, RoomsItemRoomProfilePhotoStyled, RoomsItemStatusStyled, RoomsItemStyled, RoomsItemTextStyled, RoomsMenuItemStyled, RoomsMenuStyled, RoomsStyled } from "../components/RoomsStyled"
import RoomPhoto from '../../assets/room_photo.jpg'
import RoomsData from '../data/roomsData.json'


export const Rooms = () => {

    return (
        <RoomsStyled>
            <RoomsMenuStyled>
                <RoomsMenuItemStyled>All Rooms</RoomsMenuItemStyled>
            </RoomsMenuStyled>
            <RoomsFirstRowStyled>
                <RoomsFirstRowItemStyled>Room Name</RoomsFirstRowItemStyled>
                <RoomsFirstRowItemStyled>Room Type</RoomsFirstRowItemStyled>
                <RoomsFirstRowItemStyled>Amenities</RoomsFirstRowItemStyled>
                <RoomsFirstRowItemStyled>Price</RoomsFirstRowItemStyled>
                <RoomsFirstRowItemStyled>Offer Price</RoomsFirstRowItemStyled>
                <RoomsFirstRowItemStyled>Status</RoomsFirstRowItemStyled>
            </RoomsFirstRowStyled>
        {RoomsData.map((room) => (
            <RoomsItemStyled key={room.id}>
                <RoomsItemRoomProfileContainerStyled>
                    <RoomsItemRoomProfilePhotoStyled src={RoomPhoto} />
                    <RoomsItemRoomProfileInfoStyled>
                        <RoomsItemRoomProfileIdStyled>{room.id}</RoomsItemRoomProfileIdStyled>
                        <RoomsItemTextStyled>{room.name} - {room.number}</RoomsItemTextStyled>
                    </RoomsItemRoomProfileInfoStyled>
                </RoomsItemRoomProfileContainerStyled>
                <RoomsItemTextStyled>{room.type}</RoomsItemTextStyled>
                <RoomsItemTextStyled>{room.amenities}</RoomsItemTextStyled>
                <RoomsItemTextStyled>{room.price} <span>/Night</span></RoomsItemTextStyled>
                <RoomsItemTextStyled>{room.offerPrice}</RoomsItemTextStyled>
                <RoomsItemStatusStyled type="available">{room.status}</RoomsItemStatusStyled>
            </RoomsItemStyled>
        ))}
            
            
        </RoomsStyled>
    )
}