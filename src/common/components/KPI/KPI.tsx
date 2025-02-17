import React from "react"
import { KPIStyled, KPIInfoStyled, KPITextStyled, KPINumberStyled } from "./KPIStyled"

export const KPI = ({ icon, number, text }) => {

    return (
        <KPIStyled>
            {icon}
            <KPIInfoStyled>
                <KPINumberStyled>{number}</KPINumberStyled>
                <KPITextStyled>{text}</KPITextStyled>
            </KPIInfoStyled>
        </KPIStyled>
    )
}