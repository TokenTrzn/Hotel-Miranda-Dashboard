import { createAsyncThunk } from "@reduxjs/toolkit"
import { ContactInterface } from '../interfaces/ContactInterface'

export const fetchContactsThunk = createAsyncThunk('contact/fetchContacts', async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/contacts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    }
  })
  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    throw new Error('Error, Contacts Not Found')
  }
})

export const fetchContactByIdThunk = createAsyncThunk('contact/fetchContactById', async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/contacts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    }
  })
  if (response.ok) {
    const json = await response.json()
    return json
  }
  else {
    throw new Error('Error, Contact Not Found')
  }
})

export const addContactThunk = createAsyncThunk('contact/addContact', async (newContact: ContactInterface) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/contacts/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
    body: JSON.stringify(newContact)
  })
  if (response.ok) {
    const json = await response.json()
    return json
  }
  else {
    throw new Error('Error, Contact Not Created')
  }
})

export const updateContactThunk = createAsyncThunk('contact/updateContact', async ({ id, updatedContact } : { id: string, updatedContact: ContactInterface }) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/contacts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
    body: JSON.stringify(updatedContact)
  })
  if (response.ok) {
    const json = await response.json()
    return json
  }
  else {
    throw new Error('Error, Contact Not Found')
  }
})

export const deleteContactThunk = createAsyncThunk('contact/deleteContact', async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/contacts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    }
  })
  if (response.ok) {
    return id
  }
  else {
    throw new Error('Error, Contact Not Found')
  }
})