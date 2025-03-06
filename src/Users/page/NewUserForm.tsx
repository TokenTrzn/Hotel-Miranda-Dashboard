import { useNavigate } from "react-router-dom"
import { BackButton, FormContainer, FormButton, FormField, FormInput, FormLabel, FormOption, FormPhotoInput, FormSelect, FormStatus, FormTextarea, FormTitle } from "../components/NewUserFormStyled"
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUserThunk, fetchUsersThunk } from "../features/UsersThunk"
import { UserInterface } from "../interfaces/UserInterface"
import { AppDispatch } from "../../store/store"
import { getAllUsers, getAllUsersStatus } from "../features/UsersSlice"
import { formatDate } from "../../utils/FormatDate"

export const NewUserForm: React.FC = () => {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const users = useSelector(getAllUsers)
  const status = useSelector(getAllUsersStatus)
  const [newUser, setNewUser] = useState<UserInterface>({
    photo: 'http://foto.png',
    name: '',
    email: '',
    startDate: '',
    description: '',
    contact: '',
    status: 'INACTIVE',
    password: ''
  })

  useEffect(() => {
    try {
      if (status === 'idle') {
        dispatch(fetchUsersThunk)
      } else if (status === 'fulfilled') {
        setNewUser(newUser)
      } else if (status === 'pending') {
  
      }
    } catch (error) {
      console.log(error)
    }
  }, [status, users, dispatch, navigate])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setNewUser({ ...newUser, [name]: value })
  }

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    const date = new Date(value)
    const formattedDate = formatDate(date.toISOString())

    setNewUser({
      ...newUser,
      [name]: formattedDate
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!newUser.name || !newUser.email || !newUser.password || !newUser.startDate || !newUser.contact) {
      console.log("Todos los campos obligatorios deben estar llenos.");
      return;
    }

    try {
      await dispatch(addUserThunk(newUser)).unwrap()
      console.log('Usuario creado')
      await dispatch(fetchUsersThunk()).unwrap()
      navigate('/users')
    } catch (error) {
      console.log('Error: ' + error.message)
    }
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Add New User</FormTitle>        
        <FormField>
          <FormLabel>Full Name</FormLabel>
          <FormInput type="text" name="name" value={newUser.name} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Job Position</FormLabel>
          <FormSelect name="job" value={newUser.description} onChange={handleInputChange}>
            <FormOption value="Manager">Manager</FormOption>
            <FormOption value="Director">Director</FormOption>
            <FormOption value="Programmer">Programmer</FormOption>
            <FormOption value="Staff Accountant">Staff Accountant</FormOption>
            <FormOption value="Human Resources Manager">Human Resources Manager</FormOption>
            <FormOption value="Software Test Engineer">Software Test Engineer</FormOption>
          </FormSelect>
        </FormField>
        <FormField>
          <FormLabel>Email</FormLabel>
          <FormInput type="email" name="email" value={newUser.email} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Número de teléfono</FormLabel>
          <FormInput type="text" name="contact" value={newUser.contact} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Start Date</FormLabel>
          <FormInput type="date" name="startDate" onChange={handleDateChange} required />
        </FormField>
        <FormField>
          <FormLabel>Descripción de funciones</FormLabel>
          <FormInput type="text" name="description" value={newUser.description} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Estado</FormLabel>
          <FormStatus>
            <label>
              <input type="radio" name="status" value="ACTIVE" checked={newUser.status === "ACTIVE"} onChange={handleInputChange} />
              Activo
            </label>
            <label>
              <input type="radio" name="status" value="INACTIVE" checked={newUser.status === "INACTIVE"} onChange={handleInputChange} />
              Inactivo
            </label>
          </FormStatus>
        </FormField>
        <FormField>
          <FormLabel>Password</FormLabel>
          <FormInput type="password" name="password" value={newUser.password} onChange={handleInputChange} required />
        </FormField>
        <FormButton type="submit" >Guardar</FormButton>
        <BackButton type="button" onClick={() => navigate('/users')}>Volver</BackButton>
      </FormContainer>
    </>
  )
}