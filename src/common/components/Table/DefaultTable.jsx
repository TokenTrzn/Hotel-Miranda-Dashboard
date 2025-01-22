import { useNavigate } from "react-router-dom"
import { TableMenuText } from "../Text/TextStyled"
import { TableHeaderStyled, TableRowStyled, TableStyled } from "./DefaultTableStyled"


export const DefaultTable = ({ headers, data, itemRow }) => {
const navigate = useNavigate()

    return (
        <TableStyled>
            <thead>
                <TableRowStyled>
                    {headers.map((header, index) => (
                        <TableHeaderStyled key={index}><TableMenuText>{header}</TableMenuText></TableHeaderStyled>
                    ))}
                </TableRowStyled>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <TableRowStyled key={index}>{itemRow(item)}</TableRowStyled>
                ))}
            </tbody>
        </TableStyled>
    )
}  