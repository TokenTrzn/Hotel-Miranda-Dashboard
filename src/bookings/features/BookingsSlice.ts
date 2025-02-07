import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { addBookingThunk, deleteBookingThunk, fetchBookingByIdThunk, fetchBookingsThunk, updateBookingThunk } from "./BookingsThunk"
import { BookingInitialState, BookingInterface } from "../interfaces/BookingInterface"
import { RootState } from "../../store/store"

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: {
        bookings: [],
        booking: null,
        status: 'idle',
        error: null,
    } as BookingInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookingsThunk.fulfilled, (state, action: PayloadAction<BookingInterface[]>) => {
                state.status = 'fulfilled'
                state.bookings = action.payload
            })
            .addCase(fetchBookingsThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchBookingsThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || null
            })

            .addCase(fetchBookingByIdThunk.fulfilled, (state, action: PayloadAction<BookingInterface>) => {
                state.status = 'fulfilled'
                state.booking = action.payload
            })
            .addCase(fetchBookingByIdThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchBookingByIdThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || null
            })

            .addCase(addBookingThunk.fulfilled, (state, action: PayloadAction<BookingInterface>) => {
                state.status = 'fulfilled'
                state.bookings.push(action.payload)
            })
            .addCase(addBookingThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(addBookingThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || null
            })

            .addCase(updateBookingThunk.fulfilled, (state, action: PayloadAction<BookingInterface>) => {
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
                state.error = action.error.message || null
            })

            .addCase(deleteBookingThunk.fulfilled, (state, action: PayloadAction<number>) => {
                state.status = 'fulfilled'
                state.bookings = state.bookings.filter(booking => booking.id !== action.payload)
            })
            .addCase(deleteBookingThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(deleteBookingThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || null
            })
    }
})

export const getAllBookings = (state: RootState): BookingInterface[] => state.bookings.bookings
export const getBooking = (state: RootState): BookingInterface | null => state.bookings.booking
export const getAllBookingsStatus = (state: RootState) => state.bookings.status
export const getAllBookingsError = (state: RootState) => state.bookings.error