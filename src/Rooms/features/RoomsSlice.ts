import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { addRoomThunk, deleteRoomThunk, fetchRoomByIdThunk, fetchRoomsThunk, updateRoomThunk } from "./RoomsThunk"
import { RoomData, RoomInterface } from '../interfaces/RoomInterface'
import { RootState } from "../../store/store"

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: { 
        rooms: [], 
        room: null,
        status: 'idle',
        error: null
    } as RoomData,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRoomsThunk.fulfilled, (state, action: PayloadAction<RoomInterface[]>) => {
                state.status = 'fulfilled'
                state.rooms = action.payload
            })
            .addCase(fetchRoomsThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchRoomsThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || null
            })

            .addCase(fetchRoomByIdThunk.fulfilled, (state, action: PayloadAction<RoomInterface>) => {
                state.status = 'fulfilled'
                state.room = action.payload
            })
            .addCase(fetchRoomByIdThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchRoomByIdThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || null
            })

            .addCase(addRoomThunk.fulfilled, (state, action: PayloadAction<RoomInterface>) => {
                state. status = 'fulfilled'
                state.rooms.push(action.payload)
            })
            .addCase(addRoomThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(addRoomThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || null
            })

            .addCase(updateRoomThunk.fulfilled, (state, action: PayloadAction<RoomInterface>) => {
                state.status = 'fulfilled'
                const index = state.rooms.findIndex(room => room.id === action.payload.id)
                if (index !== -1) {
                    state.rooms[index] = action.payload
                }
            })
            .addCase(updateRoomThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(updateRoomThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || null
            })

            .addCase(deleteRoomThunk.fulfilled, (state, action: PayloadAction<number>) => {
                state.rooms = state.rooms.filter(room => room.id !== action.payload)
            })
            .addCase(deleteRoomThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(deleteRoomThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || null
            })
    }
})

export const getAllRooms = (state: RootState): RoomInterface[] => state.rooms.rooms
export const getAllRoomsStatus = (state: RootState) => state.rooms.status
export const getAllRoomsError = (state: RootState) => state.rooms.error