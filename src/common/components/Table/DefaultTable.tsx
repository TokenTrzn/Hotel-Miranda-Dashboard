import { TableMenuText } from "../Text/TextStyled"
import { TableHeaderStyled, TableRowStyled, TableStyled } from "./DefaultTableStyled"
import React from "react"

interface DefaultTableProps<T> {
    headers: string[],
    data: T[],
    itemRow: (item: T) => JSX.Element
}


export const DefaultTable = <T,>({ headers, data, itemRow }: DefaultTableProps<T>) => {

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