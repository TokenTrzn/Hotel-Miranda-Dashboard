import { configureStore } from '@reduxjs/toolkit'
import { roomsSlice } from '../rooms/features/RoomsSlice'

export const store = configureStore({
    reducer: {
        rooms: roomsSlice.reducer,
    }
})