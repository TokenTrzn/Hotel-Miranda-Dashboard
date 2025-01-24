import { createSlice } from "@reduxjs/toolkit"
import { addBookingThunk, deleteBookingThunk, fetchBookingByIdThunk, fetchBookingsThunk, updateBookingThunk } from "./BookingsThunk"

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: { bookings: [], booking: null },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookingsThunk.fulfilled, (state, action) => {
                state.bookings = action.payload
            })
            .addCase(fetchBookingByIdThunk.fulfilled, (state, action) => {
                state.booking = action.payload
            })
            .addCase(addBookingThunk.fulfilled, (state, action) => {
                state.bookings.push(action.payload)
            })
            .addCase(updateBookingThunk.fulfilled, (state, action) => {
                const index = state.bookings.findIndex(booking => booking.id === action.payload.id)
                if (index !== -1) {
                    state.bookings[index] = action.payload
                }
            })
            .addCase(deleteBookingThunk.fulfilled, (state, action) => {
                state.bookings = state.bookings.filter(booking => booking.id !== action.payload)
            })
    }
})