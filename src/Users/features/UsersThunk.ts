import { createAsyncThunk } from "@reduxjs/toolkit"
import { UserInterface } from '../interfaces/UserInterface'

export const fetchUsersThunk = createAsyncThunk<UserInterface[]>('users/fetchUsers', async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
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
    throw new Error('Error, users Not Found')
  }
})

export const fetchUserByIdThunk = createAsyncThunk<UserInterface, number>('users/fetchUserById', async (id: number) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}`, {
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
    throw new Error('Error, User Not Found')
  }
})

export const addUserThunk = createAsyncThunk<UserInterface, UserInterface>('users/addUser', async (newUser: UserInterface) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
    body: JSON.stringify(newUser)
  })
  if (response.ok) {
    const json = await response.json()
    return json
  }
  else {
    throw new Error('Error, User Not Created')
  }
})

export const updateUserThunk = createAsyncThunk('users/updateUser', async ({ id, updatedUser } : { id: number | undefined, updatedUser: UserInterface }) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/edit/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
    body: JSON.stringify(updatedUser)
  })
  if (response.ok) {
    const json = await response.json()
    return json
  }
  else {
    throw new Error('Error, User Not Found')
  }
})

export const deleteUserThunk = createAsyncThunk('users/deleteUser', async (id: number) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}`, {
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
    throw new Error('Error, User Not Found')
  }
})