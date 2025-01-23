import { createSlice } from "@reduxjs/toolkit"
import { addRoomThunk, deleteRoomThunk, fetchRoomByIdThunk, fetchRoomsThunk, updateRoomThunk } from "./RoomsThunk"

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: { rooms: [], room: null },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRoomsThunk.fulfilled, (state, action) => {
                state.rooms = action.payload
            })
            .addCase(fetchRoomByIdThunk.fulfilled, (state, action) => {
                state.room = action.payload
            })
            .addCase(addRoomThunk.fulfilled, (state, action) => {
                state.rooms.push(action.payload)
            })
            .addCase(updateRoomThunk.fulfilled, (state, action) => {
                const index = state.rooms.findIndex(room => room.id === action.payload.id)
                if (index !== -1) {
                    state.rooms[index] = action.payload
                }
            })
            .addCase(deleteRoomThunk.fulfilled, (state, action) => {
                state.rooms = state.rooms.filter(room => room.id !== action.payload)
            })
    }
})