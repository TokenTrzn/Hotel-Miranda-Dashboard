import { createAsyncThunk } from "@reduxjs/toolkit"
import { BookingInterface } from '../interfaces/BookingInterface'

export const fetchBookingsThunk = createAsyncThunk<BookingInterface[]>('bookings/fetchBookings', async () => {
  const response = await fetch('/data/bookingsData.json')
  if (!response.ok) {
    throw new Error('Error, Bookings not found')
  }
  const data: BookingInterface[] = await response.json()
  return new Promise<BookingInterface[]>((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 200)
  })
})

export const fetchBookingByIdThunk = createAsyncThunk<BookingInterface, number>('bookings/fetchBookingById', async (id: number) => {
  const response = await fetch('/data/bookingsData.json')
  if (!response.ok) {
    throw new Error('Network, Error')
  }
  const data: BookingInterface[] = await response.json()
  const booking = data.find(booking => booking.id === id)
  if (!booking) {
    throw new Error('Error, Booking not found')
  }
  return new Promise<BookingInterface>((resolve) => {
    setTimeout(() => {
      resolve(booking)
    }, 200)
  })
})

export const addBookingThunk = createAsyncThunk<BookingInterface, BookingInterface>('bookings/addBooking', async (newBooking: BookingInterface) => {
  return new Promise<BookingInterface>((resolve) => {
    setTimeout(() => {
      resolve(newBooking)
    }, 200)
  })
})

export const updateBookingThunk = createAsyncThunk<BookingInterface, BookingInterface>('bookings/updateBooking', async (updatedBooking: BookingInterface) => {
  return new Promise<BookingInterface>((resolve) => {
    setTimeout(() => {
      resolve(updatedBooking)
    }, 200)
  })
})

export const deleteBookingThunk = createAsyncThunk<number, number>('bookings/deleteBooking', async (id: number) => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(id)
    }, 200)
  })
})