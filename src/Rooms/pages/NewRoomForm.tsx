import { useNavigate } from "react-router-dom"
import { BackButton, Form, FormButton, FormField, FormInput, FormLabel, FormOption, FormPhotoInput, FormSelect, FormStatus, FormTextarea, FormTitle } from "../components/NewRoomFormStyled"
import React, { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { addRoomThunk } from "../features/RoomsThunk"
import { AppDispatch } from "../../store/store"
import { RoomInterface } from "../interfaces/RoomInterface"


export const NewRoomForm: React.FC = () => {
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()
    const [formData, setFormData] = useState<RoomInterface>({
        id: 0,
        photo: "",
        number: 0,
        name: "",
        type: "",
        amenities: [""],
        price: "",
        offerPrice: "",
        status: 'Booked'
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
        const newUser: RoomInterface = {
            ...formData,
            id: Math.floor(Math.random() * 100000)
        }
        dispatch(addRoomThunk(newUser))
        navigate("/rooms")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormTitle>Add New Room</FormTitle>
            <FormField>
                <FormLabel>Photo</FormLabel>
                <FormPhotoInput type="file" name="profilePhoto" onChange={handlePhotoChange} />
            </FormField>
            <FormField>
                <FormLabel>Room Name</FormLabel>
                <FormInput type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </FormField>
            <FormField>
                <FormLabel>Room Type</FormLabel>
                <FormSelect name="type" value={formData.type} onChange={handleInputChange}>
                    <FormOption value="Single Bed">Single Bed</FormOption>
                    <FormOption value="Double Bed">Double Bed</FormOption>
                    <FormOption value="Double Superior">Huge Bed</FormOption>
                    <FormOption value="Suite">Suite</FormOption>
                </FormSelect>
            </FormField>
            <FormField>
                <FormLabel>Room Number</FormLabel>
                <FormInput type="text" name="number" value={formData.number} onChange={handleInputChange} required />
            </FormField>
            <FormField>
                <FormLabel>Price</FormLabel>
                <FormInput type="text" name="price" value={formData.price} onChange={handleInputChange} required />
            </FormField>
            <FormField>
                <FormLabel>Cancellation Policy</FormLabel>
                <FormTextarea name="cancellation" value='' readOnly />
            </FormField>
            <FormField>
                <FormLabel>Amenities</FormLabel>
                <FormInput type="text" name="amenities" value={formData.amenities} onChange={handleInputChange} required />
            </FormField>
            <FormButton type="submit">Guardar</FormButton>
            <BackButton type="button" onClick={() => navigate(-1)}>Volver</BackButton>
        </Form>
    )
}
