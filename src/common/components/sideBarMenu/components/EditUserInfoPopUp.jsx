import { useState } from "react";
import { Overlay, Popup } from "../../PopUp/PopUpStyled";
import { EditUserInfoFormButtonStyled, EditUserInfoFormHorizontalContainerStyled, EditUserInfoFormItemStyled, EditUserInfoFormStyled } from "./EditUserInfoPopUpStyled";

export const EditUserPopup = ({ user, onClose, onSave }) => {

    const [userData, setuserData] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSaveClick = () => {
        onSave(userData);
    };

    return (
        <Overlay>
            <Popup>
                <h2>Editar Usuario</h2>
                <EditUserInfoFormStyled>
                    <EditUserInfoFormItemStyled>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                        />

                    </EditUserInfoFormItemStyled>
                    <EditUserInfoFormItemStyled>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                        />
                    </EditUserInfoFormItemStyled>
                    <EditUserInfoFormItemStyled>
                        <label>Imagen:</label>
                        <input
                            type="text"
                            name="image"
                            value={userData.image}
                            onChange={handleChange}
                        />
                    </EditUserInfoFormItemStyled>
                    <EditUserInfoFormHorizontalContainerStyled>
                    <EditUserInfoFormButtonStyled onClick={handleSaveClick}>Guardar</EditUserInfoFormButtonStyled>
                    <EditUserInfoFormButtonStyled onClick={onClose}>Cancelar</EditUserInfoFormButtonStyled>               
                    </EditUserInfoFormHorizontalContainerStyled>
                </EditUserInfoFormStyled>                
            </Popup>
        </Overlay>
    );
};