import { createAsyncThunk } from "@reduxjs/toolkit"
import { ContactInterface } from '../interfaces/ContactInterface'

export const fetchContactsThunk = createAsyncThunk('contact/fetchContacts', async () => {
  const response = await fetch(`http://localhost:3002/#/contacts/get_contacts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_TOKEN}`
    }
  })
  if (response.ok) {
    const json = await response.json()
    let allContacts: ContactInterface[] = []
    for (let i = 0; i < json.length; i++) {
      allContacts.push({
        id: json[i]._id,
        date: json[i].data,
        hour: json[i].hour,
        name: json[i].name,
        email: json[i].email,
        phone: json[i].phone,
        comment: json[i].comment,
        isArchived: json[i].isArchived,
      })
    }
    return allContacts
  } else {
    throw new Error('Error, Contacts Not Found')
  }
})

export const fetchContactByIdThunk = createAsyncThunk('contact/fetchContactById', async (id: string) => {
  const response = await fetch(`${process.env.API_URL}/contacts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_TOKEN}`
    }
  })
  if (response.ok) {
    const json = await response.json()
    let contact: ContactInterface = {
      id: json._id,
      date: json.data,
      hour: json.hour,
      name: json.name,
      email: json.email,
      phone: json.phone,
      comment: json.comment,
      isArchived: json.isArchived,
    }
    return contact
  }
  else {
    throw new Error('Error, Contact Not Found')
  }
})

export const addContactThunk = createAsyncThunk('contact/addContact', async (newContact: ContactInterface) => {
  const response = await fetch(`${process.env.API_URL}/contacts/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_TOKEN}`
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
  const response = await fetch(`${process.env.API_URL}/contacts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_TOKEN}`
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
  const response = await fetch(`${process.env.API_URL}/contacts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_TOKEN}`
    }
  })
  if (response.ok) {
    return id
  }
  else {
    throw new Error('Error, Contact Not Found')
  }
})