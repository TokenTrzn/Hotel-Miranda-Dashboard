import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchUsersThunk, addUserThunk, deleteUserThunk, fetchUserByIdThunk, updateUserThunk } from './UsersThunk'
import { UserData, UserInterface } from '../interfaces/UserInterface'
import { RootState } from '../../store/store'


export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        user: null,
        status: 'idle',
        error: null,
    } as UserData,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersThunk.fulfilled, (state, action: PayloadAction<UserInterface[]>) => {
                state.status = 'fulfilled'
                state.users = action.payload
            })
            .addCase(fetchUsersThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchUsersThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || 'Error'
            })

            .addCase(fetchUserByIdThunk.fulfilled, (state, action: PayloadAction<UserInterface>) => {
                state.status = 'fulfilled'
                state.user = action.payload
            })
            .addCase(fetchUserByIdThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchUserByIdThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || 'Error'
            })

            .addCase(addUserThunk.fulfilled, (state, action: PayloadAction<UserInterface>) => {
                state.status = 'fulfilled'
                state.users.push(action.payload)
            })
            .addCase(addUserThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(addUserThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || 'Error'
            })

            .addCase(updateUserThunk.fulfilled, (state, action: PayloadAction<UserInterface>) => {
                state.status = 'fulfilled'
                const index = state.users.findIndex(user => user.id === action.payload.id)
                if (index !== -1) {
                    state.users[index] = action.payload
                }
            })
            .addCase(updateUserThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(updateUserThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || 'Error'
            })

            .addCase(deleteUserThunk.fulfilled, (state, action: PayloadAction<number>) => {
                state.status = 'fulfilled'
                state.users = state.users.filter(user => user.id !== action.payload)
            })
            .addCase(deleteUserThunk.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(deleteUserThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message || 'Error'
            })
    }
})

export const getAllUsers = (state: RootState): UserInterface[] => state.users.users
export const getAllUsersStatus = (state: RootState) => state.users.status
export const getAllUsersError = (state: RootState) => state.users.error
