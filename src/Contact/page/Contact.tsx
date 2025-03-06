import { ContactItemActionStyled, ContactKPIContainer, ContactKPIIconItemStyled, ContactKPIIconsStyled, ContactKPIInfoStyled, ContactKPIProfileInfoStyled, ContactKPIProfilePhotoStyled, ContactKPIProfileRowStyled, ContactKPIStyled, ContactKPITextStyled, ContactKPITimeStyled, ContactListContainerStyled, ContactMenuItemStyled, ContactMenuStyled, ContactStyled } from "../components/ContactStyled"
import ReviewPhoto from '../../assets/dni_cuadrado.jpg'
import OkIcon from '../../assets/ok_icon.png'
import DeleteIcon from '../../assets/delete_icon.png'
import { DefaultTable } from "../../common/components/Table/DefaultTable"
import { TableIdText, TableSecundaryText } from "../../common/components/Text/TextStyled"
import { TableDataHorizontalContainer, TableDataStyled } from "../../common/components/Table/DefaultTableStyled"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { fetchContactsThunk, updateContactThunk } from "../features/ContactThunk"
import { AppDispatch, RootState } from "../../store/store"
import { useNavigate } from "react-router-dom"
import { ContactInterface } from "../interfaces/ContactInterface"
import { getAllContacts, getAllContactsError, getAllContactsStatus } from "../features/ContactSlice"
import { PaginationButton, PaginationContainer } from "../../common/components/pagination/PaginationStyled"
import { NoResultPage } from "../../common/components/noResultPage/NoResultPage"
import { formatDate } from '../../utils/FormatDate'

export const Contact: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(true)
    const contactsData = useSelector<RootState, ContactInterface[]>(getAllContacts)
    const [contacts, setContacts] = useState<ContactInterface[]>(contactsData)
    const [selectedIsArchived, setSelectedIsArchived] = useState<boolean>(true)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const contactsPerPage = 8
    const status = useSelector<RootState, string>(getAllContactsStatus)
    const error = useSelector<RootState, string | null>(getAllContactsError)

    const headers: string[] = ['Date', 'Customer', 'Comment', 'Action']

    useEffect(() => {
        console.log(contactsData)
        if (status === 'idle') {
            dispatch(fetchContactsThunk())
        } else if (status === 'fulfilled') {
            setContacts(contactsData)
            setLoading(false)
        } else if (status === 'pending') {
            setLoading(true)
        }
    }, [dispatch, status, contactsData])

    const handleFilterByArchived = (isArchived: boolean) => {
        const filteredContacts = isArchived
            ? contactsData
            : contactsData.filter(contact => contact.isArchived)

        setContacts(filteredContacts)
        setSelectedIsArchived(isArchived)
        setCurrentPage(1)
    }

    const handleToggleArchiveStatus = (contact: ContactInterface) => {
        const updatedContact = {
            ...contact,
            isArchived: !contact.isArchived,
        }
        dispatch(updateContactThunk({ id: updatedContact.id, updatedContact: updatedContact })).then(() => {
            const updatedContacts = contacts.map((contact) =>
                contact.id === updatedContact.id ? updatedContact : contact
            )
            setContacts(updatedContacts)
        })
    }

    const indexOfLastContact: number = currentPage * contactsPerPage
    const indexOfFirstContact: number = indexOfLastContact - contactsPerPage
    const currentContacts: ContactInterface[] = contacts.slice(indexOfFirstContact, indexOfLastContact)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const totalPages: number = contacts.length > 0 ? Math.ceil(contacts.length / contactsPerPage) : 1

    const pageNumbers: number[] = []
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    const itemRow = (contact: ContactInterface) => (
        <>
            <TableDataStyled>
                <TableIdText>#{contact._id}</TableIdText>
                <TableDataHorizontalContainer>
                    <TableSecundaryText>{formatDate(contact.date)} {contact.hour}</TableSecundaryText>

                </TableDataHorizontalContainer>
            </TableDataStyled>
            <TableDataStyled>
                <TableSecundaryText>{contact.name}</TableSecundaryText>
                <TableSecundaryText>{contact.email}</TableSecundaryText>
                <TableSecundaryText>{contact.phone}</TableSecundaryText>
            </TableDataStyled>
            <TableDataStyled><TableSecundaryText>{contact.comment}</TableSecundaryText></TableDataStyled>
            <TableDataStyled>
                <ContactItemActionStyled
                    $isArchived={contact.isArchived}
                    onClick={() => handleToggleArchiveStatus(contact)}
                >
                    {contact.isArchived ? 'Publish' : 'Archive'}
                </ContactItemActionStyled>
            </TableDataStyled>
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
                    <ContactMenuItemStyled
                        onClick={() => handleFilterByArchived(true)}
                        className={selectedIsArchived === true ? 'active' : ''}
                    >All Contacts</ContactMenuItemStyled>
                    <ContactMenuItemStyled
                        onClick={() => handleFilterByArchived(false)}
                        className={selectedIsArchived === false ? 'active' : ''}
                    >Archived</ContactMenuItemStyled>
                </ContactMenuStyled>
                <DefaultTable headers={headers} data={currentContacts} itemRow={itemRow} />
                {currentContacts.length > 1
                    ? <PaginationContainer>
                        {pageNumbers.map(number => (
                            <PaginationButton
                                key={number}
                                onClick={() => paginate(number)}
                                $selected={currentPage === number}
                            >
                                {number}
                            </PaginationButton>
                        ))}
                    </PaginationContainer>
                    : <NoResultPage />
                }
            </ContactListContainerStyled>
        </ContactStyled>
    )
}