import { configureStore } from '@reduxjs/toolkit'
import { roomsSlice } from '../rooms/features/RoomsSlice'
import { usersSlice } from '../users/features/UsersSlice'

export const store = configureStore({
    reducer: {
        rooms: roomsSlice.reducer,
        users: usersSlice.reducer
    }
})