import { createAsyncThunk } from "@reduxjs/toolkit"
import { BookingInterface } from '../interfaces/BookingInterface'

export const fetchBookingsThunk = createAsyncThunk('bookings/fetchBookings', async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
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
    throw new Error('Error, Booking Not Found')
  }
})

export const fetchBookingByIdThunk = createAsyncThunk('bookings/fetchBookingById', async (id: number) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, {
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
    throw new Error('Error, Booking Not Found')
  }
})

export const addBookingThunk = createAsyncThunk('bookings/addBooking', async (newBooking: BookingInterface) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
    body: JSON.stringify(newBooking)
  })
  if (response.ok) {
    const json = await response.json()
    return json
  }
  else {
    throw new Error('Error, Booking Not Created')
  }
})

export const updateBookingThunk = createAsyncThunk('bookings/updateBooking', async ({ id, updatedBooking } : { id: string, updatedBooking: BookingInterface }) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
    body: JSON.stringify(updatedBooking)
  })
  if (response.ok) {
    const json = await response.json()
    return json
  }
  else {
    throw new Error('Error, Booking Not Found')
  }
})

export const deleteBookingThunk = createAsyncThunk('bookings/deleteBooking', async (id: number) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, {
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
    throw new Error('Error, Booking Not Found')
  }
})