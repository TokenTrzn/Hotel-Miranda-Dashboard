import React, { useEffect, useState } from 'react'
import { RoomDetailsAmenitiesContainerStyled, RoomDetailsAmenitiesItemStyled, RoomDetailsFieldBoldInfoStyled, RoomDetailsFieldInfoStyled, RoomDetailsFieldTitleStyled, RoomDetailsHorizontalContainer, RoomDetailsIdStyled, RoomDetailsInfoStyled, RoomDetailsNameStyled, RoomDetailsStyled, BackButton, RoomDetailsPhotoContainerStyled, RoomDetailsPhotoImageStyled, RoomDetailsPhotoTagStyled, RoomDetailsPhotoTitleStyled, RoomDetailsPhotoDescriptionStyled } from '../components/RoomDetailsStyled'
import { IoWifi as WifiIcon } from "react-icons/io5"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoomByIdThunk } from '../features/RoomsThunk'
import { getAllRoomsError, getAllRoomsStatus, getRoom } from '../features/RoomsSlice'
import { AppDispatch, RootState } from '../../store/store'
import { RoomInterface } from '../interfaces/RoomInterface'
import RoomPhoto from '../../assets/room_photo.jpg'

type Params = {
    id: string;
}

export const RoomDetails: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<Params>();
    const [loading, setLoading] = useState<boolean>(true);
    const location = useLocation();
    const room: RoomInterface = location.state?.room;
    //const room = useSelector<RootState, RoomInterface | null>(getRoom);
    const status = useSelector<RootState, string>(getAllRoomsStatus);
    const error = useSelector<RootState, string | null>(getAllRoomsError)

    useEffect(() => {
        if (id) {
            const roomId = parseInt(id, 10)
            if (!isNaN(roomId)) {
                if (status === 'idle') {
                    dispatch(fetchRoomByIdThunk(roomId))
                } else if (status === 'fulfilled') {
                    setLoading(false)
                } else if (status === 'pending') {
                    setLoading(true)
                }
            }
        }
    }, [dispatch, id, status, room])

    return (
        <>
            {loading === true || !room ? <></> :
                <RoomDetailsStyled key={id}>
                    <RoomDetailsInfoStyled>
                        <div>
                            <RoomDetailsNameStyled>{room.name}</RoomDetailsNameStyled>
                            <RoomDetailsIdStyled>#000000{id}</RoomDetailsIdStyled>
                        </div>
                        <RoomDetailsHorizontalContainer>
                            <RoomDetailsInfoStyled>
                                <RoomDetailsFieldTitleStyled>Price</RoomDetailsFieldTitleStyled>
                                <RoomDetailsFieldInfoStyled>{room.offerPrice}</RoomDetailsFieldInfoStyled>
                            </RoomDetailsInfoStyled>                            
                        </RoomDetailsHorizontalContainer>
                        <RoomDetailsHorizontalContainer>
                            <RoomDetailsInfoStyled>
                                <RoomDetailsFieldTitleStyled>Room Info</RoomDetailsFieldTitleStyled>
                                <RoomDetailsFieldBoldInfoStyled>{room.type} - {room.number}</RoomDetailsFieldBoldInfoStyled>
                            </RoomDetailsInfoStyled>
                            <RoomDetailsInfoStyled>
                                <RoomDetailsFieldTitleStyled>Price</RoomDetailsFieldTitleStyled>
                                <RoomDetailsFieldBoldInfoStyled>{room.price} <span>/Night</span></RoomDetailsFieldBoldInfoStyled>
                            </RoomDetailsInfoStyled>
                        </RoomDetailsHorizontalContainer>
                        <RoomDetailsFieldInfoStyled className='description'>{room.status}</RoomDetailsFieldInfoStyled>
                        <RoomDetailsFieldTitleStyled className='amenitiesTitle'>Amenities</RoomDetailsFieldTitleStyled>
                        <RoomDetailsAmenitiesContainerStyled>
                            <RoomDetailsAmenitiesItemStyled>
                                <WifiIcon /> {room.amenities}
                            </RoomDetailsAmenitiesItemStyled>
                        </RoomDetailsAmenitiesContainerStyled>
                        <BackButton type="button" onClick={() => navigate(-1)}>Volver</BackButton>
                    </RoomDetailsInfoStyled>
                    <RoomDetailsPhotoContainerStyled>
                        <RoomDetailsPhotoImageStyled src={RoomPhoto} />
                        <RoomDetailsPhotoTitleStyled>{room.type}</RoomDetailsPhotoTitleStyled>
                    </RoomDetailsPhotoContainerStyled>
                </RoomDetailsStyled>
            }
        </>
    )
}