import { useDispatch, useSelector } from "react-redux";
import { Params, useLocation, useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { UserInterface } from "../interfaces/UserInterface";
import { getAllUsersError, getAllUsersStatus } from "../features/UsersSlice";
import { fetchUserByIdThunk } from "../features/UsersThunk";

export const UserDetails: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<Params>();
    const [loading, setLoading] = useState<boolean>(true);
    const location = useLocation();
    const user: UserInterface = location.state?.user;
    const status = useSelector<RootState, string>(getAllUsersStatus);
    const error = useSelector<RootState, string | null>(getAllUsersError)

    useEffect(() => {
        if (id) {
            const userId = parseInt(id, 10)
            if (!isNaN(userId)) {
                if (status === 'idle') {
                    dispatch(fetchUserByIdThunk(userId))
                } else if (status === 'fulfilled') {
                    setLoading(false)
                } else if (status === 'pending') {
                    setLoading(true)
                }
            }
        }
    }, [dispatch, id, status, user])

    return (
        <>
            {loading === true || !user ? <></> :
                <UserDetailsStyled key={id}>
                    <UserDetailsInfoStyled>
                        <div>
                            <UserDetailsNameStyled>{User.guestName}</UserDetailsNameStyled>
                            <UserDetailsIdStyled>#{id}</UserDetailsIdStyled>
                        </div>
                        <UserDetailsHorizontalContainer>
                            <UserDetailsInfoStyled>
                                <UserDetailsFieldTitleStyled>Check In</UserDetailsFieldTitleStyled>
                                <UserDetailsFieldInfoStyled>{formatDate(User.checkIn)} | {User.checkInHour}</UserDetailsFieldInfoStyled>
                            </UserDetailsInfoStyled>
                            <UserDetailsInfoStyled>
                                <UserDetailsFieldTitleStyled>Check Out</UserDetailsFieldTitleStyled>
                                <UserDetailsFieldInfoStyled>{formatDate(User.checkOut)} | {User.checkOutHour}</UserDetailsFieldInfoStyled>
                            </UserDetailsInfoStyled>
                        </UserDetailsHorizontalContainer>
                        <UserDetailsHorizontalContainer>
                            <UserDetailsInfoStyled>
                                <UserDetailsFieldTitleStyled>Room Info</UserDetailsFieldTitleStyled>
                                <UserDetailsFieldBoldInfoStyled>{User.type} - {User.number}</UserDetailsFieldBoldInfoStyled>
                            </UserDetailsInfoStyled>
                            <UserDetailsInfoStyled>
                                <UserDetailsFieldTitleStyled>Price</UserDetailsFieldTitleStyled>
                                <UserDetailsFieldBoldInfoStyled>{User.price} <span>/Night</span></UserDetailsFieldBoldInfoStyled>
                            </UserDetailsInfoStyled>
                        </UserDetailsHorizontalContainer>
                        <UserDetailsFieldInfoStyled className='description'>{User.description}</UserDetailsFieldInfoStyled>
                        <UserDetailsFieldTitleStyled className='amenitiesTitle'>Amenities</UserDetailsFieldTitleStyled>
                        <UserDetailsAmenitiesContainerStyled>
                            <UserDetailsAmenitiesItemStyled>
                                <WifiIcon /> {User.amenities}
                            </UserDetailsAmenitiesItemStyled>
                        </UserDetailsAmenitiesContainerStyled>
                        <BackButton type="button" onClick={() => navigate(-1)}>Volver</BackButton>
                    </UserDetailsInfoStyled>
                    <UserDetailsPhotoContainerStyled>
                        <UserDetailsPhotoImageStyled src={RoomPhoto} />
                        <UserDetailsPhotoTitleStyled>{User.type}</UserDetailsPhotoTitleStyled>
                            <UserDetailsPhotoDescriptionStyled>{User.description}</UserDetailsPhotoDescriptionStyled>
                    </UserDetailsPhotoContainerStyled>
                </UserDetailsStyled>
            }
        </>
    )
}