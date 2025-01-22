import { DefaultCreateButtonStyled, DefaultCreateButtonText } from "./DefaultCreateButtonStyled"
import { IoAdd as AddIcon } from "react-icons/io5"

export const DefaultCreateButton = () => {

    return (
        <>
            <DefaultCreateButtonStyled>
                <DefaultCreateButtonText>New</DefaultCreateButtonText>
                <AddIcon />
            </DefaultCreateButtonStyled>
        </>

    )
}