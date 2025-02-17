import React from "react"
import { NoRestultPageImageStyled, NoRestultPageStyled, NoRestultPageTextStyled } from "./NoResultPageStyled"
import NoResultImage from '../../../assets/no_result_image.png'

export const NoResultPage: React.FC = () => {

    return (
        <NoRestultPageStyled>
            <NoRestultPageTextStyled>No Results</NoRestultPageTextStyled>
            <NoRestultPageImageStyled src={NoResultImage} />
        </NoRestultPageStyled>
    )
}