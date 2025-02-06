import { createAsyncThunk } from "@reduxjs/toolkit"
import UsersData from '../data/usersData.json'
import { UserInterface } from '../interfaces/UserInterface'

export const fetchUsersThunk = createAsyncThunk<UserInterface[]>('users/fetchUsers', async () => {
  const response = await fetch('/data/usersData.json')
  if (!response.ok) {
    throw new Error('Error, Users not found')
  }
  const data: UserInterface[] = await response.json()
  return new Promise<UserInterface[]>((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 200)
  })
})

export const fetchUserByIdThunk = createAsyncThunk<UserInterface, number>('users/fetchUserById', async (id: number) => {
  const response = await fetch('data/usersData.json')
  if (!response.ok) {
    throw new Error('Network Error')
  }
  const data: UserInterface[] = await response.json()
  const user = data.find(user => user.id === id)
  if (!user) {
    throw new Error('Error, User not found')
  }
  return new Promise<UserInterface>((resolve) => {
    setTimeout(() => {
      resolve(user)
    }, 200)
  })
})

export const addUserThunk = createAsyncThunk<UserInterface, UserInterface>('users/addUser', async (newUser: UserInterface) => {
  return new Promise<UserInterface>((resolve) => {
    setTimeout(() => {
      resolve(newUser)
    }, 200)
  })
})

export const updateUserThunk = createAsyncThunk<UserInterface, UserInterface>('users/updateUser', async (updatedUser: UserInterface) => {
  return new Promise<UserInterface>((resolve) => {
    setTimeout(() => {
      resolve(updatedUser)
    }, 200)
  })
})

export const deleteUserThunk = createAsyncThunk<number, number>('users/deleteUser', async (id: number) => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(id)
    }, 200)
  })
})