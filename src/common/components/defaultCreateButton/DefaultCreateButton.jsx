import { DefaultCreateButtonStyled, DefaultCreateButtonText } from "./DefaultCreateButtonStyled"
import { IoAdd as AddIcon } from "react-icons/io5"

export const DefaultCreateButton = ({ onClick }) => {

    return (
        <>
            <DefaultCreateButtonStyled onClick={onClick} >
                <DefaultCreateButtonText>New</DefaultCreateButtonText>
                <AddIcon />
            </DefaultCreateButtonStyled>
        </>

    )
}