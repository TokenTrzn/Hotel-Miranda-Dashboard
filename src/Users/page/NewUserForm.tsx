import { useNavigate } from "react-router-dom"
import { BackButton, FormContainer, FormButton, FormField, FormInput, FormLabel, FormOption, FormPhotoInput, FormSelect, FormStatus, FormTextarea, FormTitle } from "../components/NewUserFormStyled"
import React, { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { addUserThunk } from "../features/UsersThunk"
import { UserInterface } from "../interfaces/UserInterface"
import { AppDispatch } from "../../store/store"


export const NewUserForm: React.FC = () => {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const [formData, setFormData] = useState<UserInterface>({
    id: 0,
    photo: '',
    name: '',
    email: '',
    startDate: '',
    description: '',
    contact: '',
    status: 'ACTIVE',
    password: '1234'
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const newUser: UserInterface = {
      ...formData,
      id: Math.floor(Math.random() * 100000),
      password: '1234'
    }
    dispatch(addUserThunk(newUser))
    navigate("/users")
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Add New User</FormTitle>
        <FormField>
          <FormLabel>Photo</FormLabel>
          <FormPhotoInput type="file" name="profilePhoto" onChange={handlePhotoChange} />
        </FormField>
        <FormField>
          <FormLabel>Full Name</FormLabel>
          <FormInput type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Job Position</FormLabel>
          <FormSelect name="job" value={formData.description} onChange={handleInputChange}>
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
          <FormInput type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Número de teléfono</FormLabel>
          <FormInput type="text" name="contact" value={formData.contact} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Start Date</FormLabel>
          <FormInput type="date" name="joinDate" value={formData.startDate} onChange={handleInputChange} required />
        </FormField>
        <FormField>
          <FormLabel>Descripción de funciones</FormLabel>
          <FormTextarea name="jobDesk" value={formData.description} onChange={handleInputChange} required />
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