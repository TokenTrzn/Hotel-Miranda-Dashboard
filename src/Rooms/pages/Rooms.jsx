import { RoomsFirstRowItemStyled, RoomsFirstRowStyled, RoomsItemRoomProfileContainerStyled, RoomsItemRoomProfileIdStyled, RoomsItemRoomProfileInfoStyled, RoomsItemRoomProfilePhotoStyled, RoomsItemStatusStyled, RoomsItemStyled, RoomsItemTextStyled, RoomsMenuItemStyled, RoomsMenuStyled, RoomsStyled } from "../components/RoomsStyled"
import RoomPhoto from '../../assets/room_photo.jpg'


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
            <RoomsItemStyled>
                <RoomsItemRoomProfileContainerStyled>
                    <RoomsItemRoomProfilePhotoStyled src={RoomPhoto} />
                    <RoomsItemRoomProfileInfoStyled>
                        <RoomsItemRoomProfileIdStyled>#000123456</RoomsItemRoomProfileIdStyled>
                        <RoomsItemTextStyled>Deluxe A - 91234</RoomsItemTextStyled>
                    </RoomsItemRoomProfileInfoStyled>
                </RoomsItemRoomProfileContainerStyled>
                <RoomsItemTextStyled>Double Bed</RoomsItemTextStyled>
                <RoomsItemTextStyled>AC, Shower, Double Bed, Towel,<br/> Bathup, Coffee Set, LED TV, Wifi</RoomsItemTextStyled>
                <RoomsItemTextStyled>$145 <span>/Night</span></RoomsItemTextStyled>
                <RoomsItemTextStyled>$120</RoomsItemTextStyled>
                <RoomsItemStatusStyled type="available">Available</RoomsItemStatusStyled>
            </RoomsItemStyled>
            <RoomsItemStyled>
                <RoomsItemRoomProfileContainerStyled>
                    <RoomsItemRoomProfilePhotoStyled src={RoomPhoto} />
                    <RoomsItemRoomProfileInfoStyled>
                        <RoomsItemRoomProfileIdStyled>#000123456</RoomsItemRoomProfileIdStyled>
                        <RoomsItemTextStyled>Deluxe A - 91234</RoomsItemTextStyled>
                    </RoomsItemRoomProfileInfoStyled>
                </RoomsItemRoomProfileContainerStyled>
                <RoomsItemTextStyled>Double Bed</RoomsItemTextStyled>
                <RoomsItemTextStyled>AC, Shower, Double Bed, Towel,<br/> Bathup, Coffee Set, LED TV, Wifi</RoomsItemTextStyled>
                <RoomsItemTextStyled>$145 <span>/Night</span></RoomsItemTextStyled>
                <RoomsItemTextStyled>$120</RoomsItemTextStyled>
                <RoomsItemStatusStyled type="booked">Booked</RoomsItemStatusStyled>
            </RoomsItemStyled>
            <RoomsItemStyled>
                <RoomsItemRoomProfileContainerStyled>
                    <RoomsItemRoomProfilePhotoStyled src={RoomPhoto} />
                    <RoomsItemRoomProfileInfoStyled>
                        <RoomsItemRoomProfileIdStyled>#000123456</RoomsItemRoomProfileIdStyled>
                        <RoomsItemTextStyled>Deluxe A - 91234</RoomsItemTextStyled>
                    </RoomsItemRoomProfileInfoStyled>
                </RoomsItemRoomProfileContainerStyled>
                <RoomsItemTextStyled>Double Bed</RoomsItemTextStyled>
                <RoomsItemTextStyled>AC, Shower, Double Bed, Towel,<br/> Bathup, Coffee Set, LED TV, Wifi</RoomsItemTextStyled>
                <RoomsItemTextStyled>$145 <span>/Night</span></RoomsItemTextStyled>
                <RoomsItemTextStyled>$120</RoomsItemTextStyled>
                <RoomsItemStatusStyled type="booked">Booked</RoomsItemStatusStyled>
            </RoomsItemStyled>
            <RoomsItemStyled>
                <RoomsItemRoomProfileContainerStyled>
                    <RoomsItemRoomProfilePhotoStyled src={RoomPhoto} />
                    <RoomsItemRoomProfileInfoStyled>
                        <RoomsItemRoomProfileIdStyled>#000123456</RoomsItemRoomProfileIdStyled>
                        <RoomsItemTextStyled>Deluxe A - 91234</RoomsItemTextStyled>
                    </RoomsItemRoomProfileInfoStyled>
                </RoomsItemRoomProfileContainerStyled>
                <RoomsItemTextStyled>Double Bed</RoomsItemTextStyled>
                <RoomsItemTextStyled>AC, Shower, Double Bed, Towel,<br/> Bathup, Coffee Set, LED TV, Wifi</RoomsItemTextStyled>
                <RoomsItemTextStyled>$145 <span>/Night</span></RoomsItemTextStyled>
                <RoomsItemTextStyled>$120</RoomsItemTextStyled>
                <RoomsItemStatusStyled type="available">Available</RoomsItemStatusStyled>
            </RoomsItemStyled>
            <RoomsItemStyled>
                <RoomsItemRoomProfileContainerStyled>
                    <RoomsItemRoomProfilePhotoStyled src={RoomPhoto} />
                    <RoomsItemRoomProfileInfoStyled>
                        <RoomsItemRoomProfileIdStyled>#000123456</RoomsItemRoomProfileIdStyled>
                        <RoomsItemTextStyled>Deluxe A - 91234</RoomsItemTextStyled>
                    </RoomsItemRoomProfileInfoStyled>
                </RoomsItemRoomProfileContainerStyled>
                <RoomsItemTextStyled>Double Bed</RoomsItemTextStyled>
                <RoomsItemTextStyled>AC, Shower, Double Bed, Towel,<br/> Bathup, Coffee Set, LED TV, Wifi</RoomsItemTextStyled>
                <RoomsItemTextStyled>$145 <span>/Night</span></RoomsItemTextStyled>
                <RoomsItemTextStyled>$120</RoomsItemTextStyled>
                <RoomsItemStatusStyled type="booked">Booked</RoomsItemStatusStyled>
            </RoomsItemStyled>
            <RoomsItemStyled>
                <RoomsItemRoomProfileContainerStyled>
                    <RoomsItemRoomProfilePhotoStyled src={RoomPhoto} />
                    <RoomsItemRoomProfileInfoStyled>
                        <RoomsItemRoomProfileIdStyled>#000123456</RoomsItemRoomProfileIdStyled>
                        <RoomsItemTextStyled>Deluxe A - 91234</RoomsItemTextStyled>
                    </RoomsItemRoomProfileInfoStyled>
                </RoomsItemRoomProfileContainerStyled>
                <RoomsItemTextStyled>Double Bed</RoomsItemTextStyled>
                <RoomsItemTextStyled>AC, Shower, Double Bed, Towel,<br/> Bathup, Coffee Set, LED TV, Wifi</RoomsItemTextStyled>
                <RoomsItemTextStyled>$145 <span>/Night</span></RoomsItemTextStyled>
                <RoomsItemTextStyled>$120</RoomsItemTextStyled>
                <RoomsItemStatusStyled type="available">Available</RoomsItemStatusStyled>
            </RoomsItemStyled>
        </RoomsStyled>
    )
}