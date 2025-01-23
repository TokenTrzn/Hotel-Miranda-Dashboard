import { createAsyncThunk } from "@reduxjs/toolkit"
import UsersData from '../data/usersData.json'

export const fetchUsersThunk = createAsyncThunk('users/fetchUsers', async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(UsersData);
      }, 200);
    });
  });
  
  export const fetchUserByIdThunk = createAsyncThunk('users/fetchUserById', async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id });
      }, 200);
    });
  });
  
  export const addUserThunk = createAsyncThunk('users/addUser', async (newUser) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(newUser);
      }, 200);
    });
  });
  
  export const updateUserThunk = createAsyncThunk('users/updateUser', async (updatedUser) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(updatedUser);
      }, 200);
    });
  });
  
  export const deleteUserThunk = createAsyncThunk('users/deleteUser', async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(id);
      }, 200);
    });
  });