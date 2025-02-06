import { ContactItemActionStyled, ContactKPIContainer, ContactKPIIconItemStyled, ContactKPIIconsStyled, ContactKPIInfoStyled, ContactKPIProfileInfoStyled, ContactKPIProfilePhotoStyled, ContactKPIProfileRowStyled, ContactKPIStyled, ContactKPITextStyled, ContactKPITimeStyled, ContactListContainerStyled, ContactMenuItemStyled, ContactMenuStyled, ContactStyled } from "../components/ContactStyled"
import ReviewPhoto from '../../assets/dni_cuadrado.jpg'
import OkIcon from '../../assets/ok_icon.png'
import DeleteIcon from '../../assets/delete_icon.png'
import { DefaultTable } from "../../common/components/Table/DefaultTable"
import { TableIdText, TableSecundaryText } from "../../common/components/Text/TextStyled"
import { TableDataHorizontalContainer, TableDataStyled } from "../../common/components/Table/DefaultTableStyled"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { fetchContactsThunk } from "../features/ContactThunk"
import { AppDispatch, RootState } from "../../store/store"
import { useNavigate } from "react-router-dom"
import { ContactInterface } from "../interfaces/ContactInterface"
import { getAllContacts, getAllContactsError, getAllContactsStatus } from "../features/ContactSlice"

export const Contact: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(true)
    const contactsData = useSelector<RootState, ContactInterface[]>(getAllContacts)
    const [contacts, setContacts] = useState<ContactInterface[]>(contactsData)
    const status = useSelector<RootState, string>(getAllContactsStatus)
    const error = useSelector<RootState, string | null>(getAllContactsError)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchContactsThunk())
        } else if (status === 'fulfilled') {
            setContacts(contactsData)
            setLoading(false)
        } else if (status === 'pending') {
            setLoading(true)
        }
    }, [dispatch, status, contactsData])

    const headers: string[] = ['Date', 'Customer', 'Comment', 'Action']

    const itemRow = (contact: ContactInterface) => (
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
        <>
            {loading === true ? <></> :
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
                        <DefaultTable headers={headers} data={contacts} itemRow={itemRow} />
                    </ContactListContainerStyled>
                </ContactStyled>
            }
        </>
    )
}