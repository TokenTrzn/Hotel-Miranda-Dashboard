import { useNavigate } from "react-router-dom";
import { BackButton, FormContainer, FormButton, FormField, FormInput, FormLabel, FormOption, FormPhotoInput, FormSelect, FormStatus, FormTextarea, FormTitle } from "../components/NewUserFormStyled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserThunk } from "../features/UsersThunk";


export const NewUserForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: '',
        photo: '',
        name: '',
        email: '',
        startDate: '',
        description: '',
        contact: '',
        status: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({ ...formData, profilePhoto: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        formData.id = `#${Math.floor(Math.random() * 1000000)}`;
        dispatch(addUserThunk(formData));
        navigate("/users");
    };

    return (
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
        <FormSelect name="job" value={formData.job} onChange={handleInputChange}>
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
        <FormInput type="date" name="joinDate" value={formData.joinDate} onChange={handleInputChange} required />
      </FormField>
      <FormField>
        <FormLabel>Descripción de funciones</FormLabel>
        <FormTextarea name="jobDesk" value={formData.jobDesk} onChange={handleInputChange} required />
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
    );
};