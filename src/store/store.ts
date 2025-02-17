import { configureStore } from '@reduxjs/toolkit'
import { roomsSlice } from '../rooms/features/RoomsSlice'
import { usersSlice } from '../users/features/UsersSlice'
import { bookingsSlice } from '../bookings/features/BookingsSlice'
import { contactSlice } from '../contact/features/ContactSlice'

export const store = configureStore({
    reducer: {
        rooms: roomsSlice.reducer,
        users: usersSlice.reducer,
        bookings: bookingsSlice.reducer,
        contacts: contactSlice.reducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']