import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, fetchContactByIdThunk, fetchContactsThunk, updateContactThunk } from "./ContactThunk";

export const contactSlice = createSlice({
    name: 'contact',
    initialState: { contacts: [], contact: null },
    extraReducers: (builder) => {
      builder
        .addCase(fetchContactsThunk.fulfilled, (state, action) => {
          state.contacts = action.payload;
        })
        .addCase(fetchContactByIdThunk.fulfilled, (state, action) => {
          state.contact = action.payload;
        })
        .addCase(addContactThunk.fulfilled, (state, action) => {
          state.contacts.push(action.payload);
        })
        .addCase(updateContactThunk.fulfilled, (state, action) => {
          const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
          if (index !== -1) {
            state.contacts[index] = { ...state.contacts[index], ...action.payload };
          }
        })
        .addCase(deleteContactThunk.fulfilled, (state, action) => {
          state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        });
    },
  });