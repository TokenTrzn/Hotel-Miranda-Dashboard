import { TableHeaderStyled, TableRowStyled, TableStyled } from "./DefaultTableStyled"


export const DefaultTable = ({ headers, data, itemRow }) => {

    return (
        <TableStyled>
            <thead>
                <TableRowStyled className='menu'>
                    {headers.map((header, index) => (
                        <TableHeaderStyled key={index}>{header}</TableHeaderStyled>
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