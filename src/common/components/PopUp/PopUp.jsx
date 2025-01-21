import { useState } from "react"
import { PopUpOverlayStyled, PopUpStyled } from "./PopUpStyled"

export const PopUp = () => {

    const [isPopUpOpened, setIsPopUpOpened] = useState(false)

    const openPopUp = () => {
        setIsPopUpOpened(true)
    }

    const closePopUp = () => {
        setIsPopUpOpened(false)
    }

    return (
        <>
            {isPopUpOpened && (
                <>
                    <PopUpOverlayStyled></PopUpOverlayStyled>
                    <PopUpStyled></PopUpStyled>
                </>
            )}
        </>
    )
}