import { useNavigate } from "react-router-dom";
import { BackButton, Form, FormButton, FormField, FormInput, FormLabel, FormOption, FormPhotoInput, FormSelect, FormStatus, FormTextarea, FormTitle } from "../components/NewRoomFormStyled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRoomThunk } from "../features/RoomsThunk";


export const NewRoomForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: "",
        photos: [],
        number: "",
        name: "",
        type: "",
        description: "",
        offer: "NO",
        price: "",
        discount: "",
        offerPrice: "",
        cancellation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        amenities: "",
        status: "Available"
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        if (name === "price" || name === "discount") {
            const newOfferPrice = calculateOfferPrice(formData.price, formData.discount);
            setFormData({ ...formData, offerPrice: newOfferPrice, [name]: value });
        }
    };

    const handlePhotoChange = (event) => {
        const files = Array.from(event.target.files);
        if (files.length < 3 || files.length > 5) {
            alert("Please select between 3 and 5 photos.");
            return;
        }
        const photos = files.map(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setFormData(prevState => ({
                    ...prevState,
                    photos: [...prevState.photos, reader.result]
                }));
            };
            return file;
        });
    };

    const calculateOfferPrice = (price, discount) => {
        const priceValue = parseFloat(price);
        const discountValue = parseFloat(discount);
        if (isNaN(priceValue) || isNaN(discountValue)) {
            return "";
        }
        const offerPriceValue = priceValue - (priceValue * (discountValue / 100));
        return offerPriceValue.toFixed(2);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        formData.id = `#${Math.floor(Math.random() * 1000000)}`;
        dispatch(addRoomThunk(formData));
        navigate("/rooms");
      };

    return (
        <Form onSubmit={handleSubmit}>
            <FormTitle>Add New Room</FormTitle>
            <FormField>
                <FormLabel>Photos (3-5)</FormLabel>
                <FormPhotoInput type="file" name="photos" onChange={handlePhotoChange} multiple />
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
                <FormLabel>Description</FormLabel>
                <FormTextarea name="description" value={formData.description} onChange={handleInputChange} required />
            </FormField>
            <FormField>
                <FormLabel>Offer</FormLabel>
                <FormStatus>
                    <label>
                        <input type="radio" name="offer" value="YES" checked={formData.offer === "YES"} onChange={handleInputChange} />
                        YES
                    </label>
                    <label>
                        <input type="radio" name="offer" value="NO" checked={formData.offer === "NO"} onChange={handleInputChange} />
                        NO
                    </label>
                </FormStatus>
            </FormField>
            {formData.offer === "YES" && (
                <FormField>
                    <FormLabel>Discount (%)</FormLabel>
                    <FormInput type="text" name="discount" value={formData.discount} onChange={handleInputChange} required />
                </FormField>
            )}
            <FormField>
                <FormLabel>Price</FormLabel>
                <FormInput type="text" name="price" value={formData.price} onChange={handleInputChange} required />
            </FormField>
            <FormField>
                <FormLabel>Cancellation Policy</FormLabel>
                <FormTextarea name="cancellation" value={formData.cancellation} readOnly />
            </FormField>
            <FormField>
                <FormLabel>Amenities</FormLabel>
                <FormInput type="text" name="amenities" value={formData.amenities} onChange={handleInputChange} required />
            </FormField>
            <FormButton type="submit">Guardar</FormButton>
            <BackButton type="button" onClick={() => navigate(-1)}>Volver</BackButton>
        </Form>
    );
};
