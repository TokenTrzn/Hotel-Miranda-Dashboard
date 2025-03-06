import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import React, { useEffect, useState } from "react";
import { UserInterface } from "../interfaces/UserInterface";
import { getUserById, getUserByIdStatus } from "../features/UsersSlice";
import { fetchUserByIdThunk, fetchUsersThunk } from "../features/UsersThunk";
import { UserDetailsRow, UserDetailsStyled, UserDetailsText, UserDetailsTitle } from "../components/UserDetailsStyled";
import { BackButton } from "../components/NewUserFormStyled";
import { formatDate } from '../../utils/FormatDate'

export const UserDetails: React.FC = () => {
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()
    const { id } = useParams()
    const idParams = id!
    const user = useSelector(getUserById)
    const userStatus = useSelector(getUserByIdStatus)
    const [userData, setUserData] = useState<UserInterface | null>(null)

    useEffect(() => {
        if (userStatus === 'idle') {
            dispatch(fetchUserByIdThunk(idParams))
        } else if (userStatus === 'fulfilled' && user) {
            setUserData({
                photo: user.photo || 'http://photo.png',
                name: user.name,
                email: user.email,
                startDate: formatDate(user.startDate),
                description: user.description,
                contact: user.contact,
                status: user.status,
                password: user.password
            })
        } else if (userStatus === 'rejected') {
            throw new Error('Error in user update')
        }
    }, [userStatus, user, idParams, dispatch])

    const handleBack = () => {
        navigate('/users')
        dispatch(fetchUsersThunk())
    }

    if (!userData) return <p>Cargando usuario...</p>; // 🔹 Evita renderizar el formulario vacío


    return (
        <UserDetailsStyled>
            <UserDetailsTitle>User Details</UserDetailsTitle>
            <UserDetailsRow>
                <UserDetailsText><span>Name: </span>{userData.name}</UserDetailsText>
            </UserDetailsRow>
            <UserDetailsRow>
                <UserDetailsText><span>Email: </span>{userData.email}</UserDetailsText>
            </UserDetailsRow>
            <UserDetailsRow>
                <UserDetailsText><span>Start Date: </span>{userData.startDate}</UserDetailsText>
            </UserDetailsRow>
            <UserDetailsRow>
                <UserDetailsText><span>Job: </span>{userData.description}</UserDetailsText>
            </UserDetailsRow>
            <UserDetailsRow>
                <UserDetailsText><span>Contact: </span>{userData.contact}</UserDetailsText>
            </UserDetailsRow>
            <UserDetailsRow>
                <UserDetailsText><span>Status: </span>{userData.status}</UserDetailsText>
            </UserDetailsRow>
            <BackButton onClick={() => handleBack()} >Back</BackButton>
        </UserDetailsStyled>
    )
}