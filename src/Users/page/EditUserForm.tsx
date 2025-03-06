import { useNavigate, useParams } from "react-router-dom"
import { BackButton, FormContainer, FormButton, FormField, FormLabel, FormPhotoInput, FormStatus, FormTextarea, FormTitle, FormInput } from "../components/NewUserFormStyled"
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserByIdThunk, updateUserThunk } from "../features/UsersThunk"
import { UserInterface } from "../interfaces/UserInterface"
import { AppDispatch } from "../../store/store"
import { getUserById, getUserByIdStatus } from "../features/UsersSlice"

export const EditUserForm: React.FC = () => {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const { id } = useParams()
  const idParams = id!
  const user = useSelector(getUserById)
  const userStatus = useSelector(getUserByIdStatus)
  const [formData, setFormData] = useState<UserInterface>({
    _id: '0',
    photo: '',
    name: '',
    email: '',
    startDate: '',
    description: '',
    contact: '',
    status: 'INACTIVE',
    password: ''
  })

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUserByIdThunk(idParams))
    } else if (userStatus === 'fulfilled' && user && user._id === idParams) {
      setFormData({
        _id: user._id,
        photo: user.photo,
        name: user.name,
        email: user.email,
        startDate: user.startDate,
        description: user.description,
        contact: user.contact,
        status: user.status,
        password: user.password
      })
    } else if (userStatus === 'rejected') {
      throw new Error('Error in user update')
    }
  }, [userStatus, user, idParams, dispatch])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch(updateUserThunk({ id: formData._id.toString(), updatedUser: formData }))
    navigate('../')
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Update User</FormTitle>
        <FormField>
          <FormLabel>Photo</FormLabel>
          <FormPhotoInput type="file" name="profilePhoto" />
        </FormField>
        <FormField>
          <FormLabel>Full Name</FormLabel>
          <FormInput type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Job Position</FormLabel>
          <FormInput type="text" name="description" value={formData.description} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Email</FormLabel>
          <FormInput type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Número de teléfono</FormLabel>
          <FormInput type="text" name="contact" value={formData.contact} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Start Date</FormLabel>
          <FormInput type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Descripción de funciones</FormLabel>
          <FormInput type="text" name="description" value={formData.description} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Estado</FormLabel>
          <FormStatus>
            <label>
              <input type="radio" name="status" value="ACTIVE" checked={formData.status === "ACTIVE"} onChange={handleInputChange} />
              Activo
            </label>
            <label>
              <input type="radio" name="status" value="INACTIVE" checked={formData.status === "INACTIVE"} onChange={handleInputChange} />
              Inactivo
            </label>
          </FormStatus>
        </FormField>
        <FormField>
          <FormLabel>Password</FormLabel>
          <FormInput type="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </FormField>
        <FormButton type="submit">Guardar</FormButton>
        <BackButton type="button" onClick={() => navigate(-1)}>Volver</BackButton>
      </FormContainer>
    </>
  )
}