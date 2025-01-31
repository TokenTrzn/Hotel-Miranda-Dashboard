import { createSlice } from "@reduxjs/toolkit"
import { addBookingThunk, deleteBookingThunk, fetchBookingByIdThunk, fetchBookingsThunk, updateBookingThunk } from "./BookingsThunk"

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: {
        bookings: [],
        booking: null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookingsThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.bookings = action.payload
            })
            .addCase(fetchBookingsThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchBookingsThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })

            .addCase(fetchBookingByIdThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.booking = action.payload
            })
            .addCase(fetchBookingByIdThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchBookingByIdThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })

            .addCase(addBookingThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.bookings.push(action.payload)
            })
            .addCase(addBookingThunk.pending, (state) => {
                state.state = 'pending'
            })
            .addCase(addBookingThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })

            .addCase(updateBookingThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                const index = state.bookings.findIndex(booking => booking.id === action.payload.id)
                if (index !== -1) {
                    state.bookings[index] = action.payload
                }
            })
            .addCase(updateBookingThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(updateBookingThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })

            .addCase(deleteBookingThunk.fulfilled, (state, action) => {
                state.bookings = state.bookings.filter(booking => booking.id !== action.payload)
            })
            .addCase(deleteBookingThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(deleteBookingThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
})

export const getAllBookings = (state) => state.bookings.bookings
export const getAllBookingsStatus = (state) => state.bookings.status
export const getAllBookingsError = (state) => state.bookings.error