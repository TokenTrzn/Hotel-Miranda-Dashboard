import { createSlice } from "@reduxjs/toolkit"
import { fetchUsersThunk, addUserThunk, deleteUserThunk, fetchUserByIdThunk, updateUserThunk } from '../UsersThunk'

export const usersSlice = createSlice({
    name: 'users',
    initialState: { users: [], user: null },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersThunk.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(fetchUserByIdThunk.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(addUserThunk.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(updateUserThunk.fulfilled, (state, action) => {
                const index = state.users.findIndex(user => user.id === action.payload.id);
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            })
            .addCase(deleteUserThunk.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload);
            });
    },
});
