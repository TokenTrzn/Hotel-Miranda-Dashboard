import { createAsyncThunk } from "@reduxjs/toolkit"
import BookingsData from '../data/bookingsData.json'

export const fetchBookingsThunk = createAsyncThunk('bookings/fetchBookings', async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(BookingsData)
      }, 200)
    })
  })
  
  export const fetchBookingByIdThunk = createAsyncThunk('bookings/fetchBookingById', async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id })
      }, 200)
    })
  })
  
  export const addBookingThunk = createAsyncThunk('bookings/addBooking', async (newBooking) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(newBooking)
      }, 200)
    })
  })
  
  export const updateBookingThunk = createAsyncThunk('bookings/updateBooking', async (updatedBooking) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(updatedBooking)
      }, 200)
    })
  })
  
  export const deleteBookingThunk = createAsyncThunk('bookings/deleteBooking', async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(id)
      }, 200)
    })
  })