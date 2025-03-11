import { createAsyncThunk } from "@reduxjs/toolkit"
import { RoomInterface } from "../interfaces/RoomInterface"

export const fetchRoomsThunk = createAsyncThunk<RoomInterface[]>('rooms/fetchRooms', async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
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
    throw new Error('Error, Rooms Not Found')
  }
})

export const fetchRoomByIdThunk = createAsyncThunk<RoomInterface, number>('rooms/fetchRoomById', async (id: number) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
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
    throw new Error('Error, Room Not Found')
  }
})

export const addRoomThunk = createAsyncThunk<RoomInterface, RoomInterface>('rooms/addRoom', async (newRoom: RoomInterface) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
    body: JSON.stringify(newRoom)
  })
  if (response.ok) {
    const json = await response.json()
    return json
  }
  else {
    throw new Error('Error, Room Not Created')
  }
})

export const updateRoomThunk = createAsyncThunk('rooms/updateRoom', async ({ id, updatedRoom } : { id: number, updatedRoom: RoomInterface }) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/edit/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
    body: JSON.stringify(updatedRoom)
  })
  if (response.ok) {
    const json = await response.json()
    return json
  }
  else {
    throw new Error('Error, Room Not Found')
  }
})

export const deleteRoomThunk = createAsyncThunk('rooms/deleteRoom', async (id: number) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
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
    throw new Error('Error, Room Not Found')
  }
})