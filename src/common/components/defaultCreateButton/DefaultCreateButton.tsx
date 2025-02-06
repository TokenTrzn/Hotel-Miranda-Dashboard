import React from "react"
import { DefaultCreateButtonStyled, DefaultCreateButtonText } from "./DefaultCreateButtonStyled"
import { IoAdd as AddIcon } from "react-icons/io5"

interface DefaultCreateButtonProps<T> {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const DefaultCreateButton = <T,>({ onClick }: DefaultCreateButtonProps<T>) => {

    return (
        <>
            <DefaultCreateButtonStyled onClick={onClick} >
                <DefaultCreateButtonText>New</DefaultCreateButtonText>
                <AddIcon />
            </DefaultCreateButtonStyled>
        </>

    )
}