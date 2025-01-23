import { createAsyncThunk } from "@reduxjs/toolkit"
import ContactData from '../data/contactData.json'

export const fetchContactsThunk = createAsyncThunk('contact/fetchContacts', async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ContactData)
      }, 200)
    })
  })
  
  export const fetchContactByIdThunk = createAsyncThunk('contact/fetchContactById', async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id })
      }, 200)
    })
  })
  
  export const addContactThunk = createAsyncThunk('contact/addContact', async (newContact) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(newContact)
      }, 200)
    })
  })
  
  export const updateContactThunk = createAsyncThunk('contact/updateContact', async (updatedContact) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(updatedContact)
      }, 200)
    })
  })
  
  export const deleteContactThunk = createAsyncThunk('contact/deleteContact', async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(id)
      }, 200)
    })
  })