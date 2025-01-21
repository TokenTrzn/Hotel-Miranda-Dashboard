import { ContactItemActionStyled, ContactKPIContainer, ContactKPIIconItemStyled, ContactKPIIconsStyled, ContactKPIInfoStyled, ContactKPIProfileInfoStyled, ContactKPIProfilePhotoStyled, ContactKPIProfileRowStyled, ContactKPIStyled, ContactKPITextStyled, ContactKPITimeStyled, ContactListContainerStyled, ContactMenuItemStyled, ContactMenuStyled, ContactStyled } from "../components/ContactStyled"
import ReviewPhoto from '../../assets/dni_cuadrado.jpg'
import OkIcon from '../../assets/ok_icon.png'
import DeleteIcon from '../../assets/delete_icon.png'
import ContactData from '../data/contactData.json'
import { DefaultTable } from "../../common/components/Table/DefaultTable"
import { TableIdText, TableSecundaryText } from "../../common/components/Text/TextStyled"
import { TableDataHorizontalContainer, TableDataStyled } from "../../common/components/Table/DefaultTableStyled"

export const Contact = () => {

    const headers = ['Date', 'Customer', 'Comment', 'Action']

    const itemRow = (contact) => (
        <>
            <TableDataStyled>
                <TableIdText>#000{contact.id}</TableIdText>
                <TableDataHorizontalContainer>
                <TableSecundaryText>{contact.date} {contact.hour}</TableSecundaryText>

                </TableDataHorizontalContainer>
            </TableDataStyled>
            <TableDataStyled>
                <TableSecundaryText>{contact.name}</TableSecundaryText>
                <TableSecundaryText>{contact.email}</TableSecundaryText>
                <TableSecundaryText>{contact.phone}</TableSecundaryText>
            </TableDataStyled>
            <TableDataStyled><TableSecundaryText>{contact.comment}</TableSecundaryText></TableDataStyled>
            <TableDataStyled><ContactItemActionStyled>Archive</ContactItemActionStyled></TableDataStyled>
        </>
    )

    return (
        <ContactStyled>
            <ContactKPIContainer>
                <ContactKPIStyled>
                    <ContactKPIInfoStyled>
                        <ContactKPITextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</ContactKPITextStyled>
                    </ContactKPIInfoStyled>
                    <ContactKPIProfileRowStyled>
                        <ContactKPIProfilePhotoStyled src={ReviewPhoto} />
                        <ContactKPIProfileInfoStyled>
                            <ContactKPITextStyled>Alberto Gil</ContactKPITextStyled>
                            <ContactKPITimeStyled>4m ago</ContactKPITimeStyled>
                        </ContactKPIProfileInfoStyled>
                        <ContactKPIIconsStyled>
                            <ContactKPIIconItemStyled src={OkIcon} />
                            <ContactKPIIconItemStyled src={DeleteIcon} />
                        </ContactKPIIconsStyled>
                    </ContactKPIProfileRowStyled>
                </ContactKPIStyled>
                <ContactKPIStyled>
                    <ContactKPIInfoStyled>
                        <ContactKPITextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</ContactKPITextStyled>
                    </ContactKPIInfoStyled>
                    <ContactKPIProfileRowStyled>
                        <ContactKPIProfilePhotoStyled src={ReviewPhoto} />
                        <ContactKPIProfileInfoStyled>
                            <ContactKPITextStyled>Alberto Gil</ContactKPITextStyled>
                            <ContactKPITimeStyled>4m ago</ContactKPITimeStyled>
                        </ContactKPIProfileInfoStyled>
                        <ContactKPIIconsStyled>
                            <ContactKPIIconItemStyled src={OkIcon} />
                            <ContactKPIIconItemStyled src={DeleteIcon} />
                        </ContactKPIIconsStyled>
                    </ContactKPIProfileRowStyled>
                </ContactKPIStyled>
                <ContactKPIStyled>
                    <ContactKPIInfoStyled>
                        <ContactKPITextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</ContactKPITextStyled>
                    </ContactKPIInfoStyled>
                    <ContactKPIProfileRowStyled>
                        <ContactKPIProfilePhotoStyled src={ReviewPhoto} />
                        <ContactKPIProfileInfoStyled>
                            <ContactKPITextStyled>Alberto Gil</ContactKPITextStyled>
                            <ContactKPITimeStyled>4m ago</ContactKPITimeStyled>
                        </ContactKPIProfileInfoStyled>
                        <ContactKPIIconsStyled>
                            <ContactKPIIconItemStyled src={OkIcon} />
                            <ContactKPIIconItemStyled src={DeleteIcon} />
                        </ContactKPIIconsStyled>
                    </ContactKPIProfileRowStyled>
                </ContactKPIStyled>
            </ContactKPIContainer>
            <ContactListContainerStyled>
                <ContactMenuStyled>
                    <ContactMenuItemStyled>All Contacts</ContactMenuItemStyled>
                    <ContactMenuItemStyled>Archived</ContactMenuItemStyled>
                </ContactMenuStyled>
                <DefaultTable headers={headers}  data={ContactData} itemRow={itemRow} />
            </ContactListContainerStyled>
        </ContactStyled>
    )
}