import { createAsyncThunk } from "@reduxjs/toolkit"
import { ContactInterface } from '../interfaces/ContactInterface'

export const fetchContactsThunk = createAsyncThunk<ContactInterface[]>('contact/fetchContacts', async () => {
    const response = await fetch('/data/contactsData.json')
    if (!response.ok) {
      throw new Error('Error, Contacts not found')
    }
    const data: ContactInterface[] = await response.json()
  return new Promise<ContactInterface[]>((resolve) => {
      setTimeout(() => {
        resolve(data)
      }, 200)
    })
  })
  
  export const fetchContactByIdThunk = createAsyncThunk<ContactInterface, number>('contact/fetchContactById', async (id: number) => {
    const response = await fetch('data/contactsData.json')
    if (!response.ok) {
      throw new Error('Network Error')
    }
    const data: ContactInterface[] = await response.json()
    const contact = data.find(contact => contact.id === id)
    if (!contact) {
      throw new Error('Error, Contact not found')
    }
    return new Promise<ContactInterface>((resolve) => {
      setTimeout(() => {
        resolve(contact)
      }, 200)
    })
  })
  
  export const addContactThunk = createAsyncThunk<ContactInterface, ContactInterface>('contact/addContact', async (newContact) => {
    return new Promise<ContactInterface>((resolve) => {
      setTimeout(() => {
        resolve(newContact)
      }, 200)
    })
  })
  
  export const updateContactThunk = createAsyncThunk<ContactInterface, ContactInterface>('contact/updateContact', async (updatedContact) => {
    return new Promise<ContactInterface>((resolve) => {
      setTimeout(() => {
        resolve(updatedContact)
      }, 200)
    })
  })
  
  export const deleteContactThunk = createAsyncThunk<number, number>('contact/deleteContact', async (id: number) => {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(id)
      }, 200)
    })
  })