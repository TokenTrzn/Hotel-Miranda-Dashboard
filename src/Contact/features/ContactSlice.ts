import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { addContactThunk, deleteContactThunk, fetchContactByIdThunk, fetchContactsThunk, updateContactThunk } from "./ContactThunk"
import { ContactInterface, ContactData } from '../interfaces/ContactInterface'
import { RootState } from "../../store/store"

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    contact: null,
    status: 'idle',
    contactStatus: 'idle',
    error: null,
  } as ContactData,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action: PayloadAction<ContactInterface[]>) => {
        state.status = 'fulfilled'
        state.contactStatus = 'fulfilled'
        state.contacts = action.payload
      })
      .addCase(fetchContactsThunk.pending, (state) => {
        state.status = 'pending'
        state.contactStatus = 'pending'
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.status = 'rejected'
        state.contactStatus = 'rejected'
        state.error = action.error.message || 'Error'
      })

      .addCase(fetchContactByIdThunk.fulfilled, (state, action: PayloadAction<ContactInterface>) => {
        state.status = 'fulfilled'
        state.contactStatus = 'fulfilled'
        state.contact = action.payload
      })
      .addCase(fetchContactByIdThunk.pending, (state) => {
        state.status = 'pending'
        state.contactStatus = 'pending'
      })
      .addCase(fetchContactByIdThunk.rejected, (state, action) => {
        state.status = 'rejected'
        state.contactStatus = 'rejected'
        state.error = action.error.message || 'Error'
      })

      .addCase(addContactThunk.fulfilled, (state, action: PayloadAction<ContactInterface>) => {
        state.status = 'fulfilled'
        state.contactStatus = 'fulfilled'
        state.contacts.push(action.payload)
      })
      .addCase(addContactThunk.pending, (state) => {
        state.status = 'pending'
        state.contactStatus = 'pending'
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.status = 'rejected'
        state.contactStatus = 'rejected'
        state.error = action.error.message || null
      })

      .addCase(updateContactThunk.fulfilled, (state, action: PayloadAction<ContactInterface>) => {
        state.status = 'fulfilled'
        state.contactStatus = 'fulfilled'
        const index = state.contacts.findIndex(contact => contact.id === action.payload.id)
        if (index !== -1) {
          state.contacts[index] = action.payload
        }
      })
      .addCase(updateContactThunk.pending, (state) => {
        state.status = 'pending'
        state.contactStatus = 'pending'
      })
      .addCase(updateContactThunk.rejected, (state, action) => {
        state.status = 'rejected'
        state.contactStatus = 'rejected'
        state.error = action.error.message || 'Error'
      })

      .addCase(deleteContactThunk.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'fulfilled'
        state.contactStatus = 'fulfilled'
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
      })
      .addCase(deleteContactThunk.pending, (state) => {
        state.status = 'pending'
        state.contactStatus = 'pending'
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.status = 'rejected'
        state.contactStatus = 'rejected'
        state.error = action.error.message || 'Error'
      })
  },
})

export const getAllContacts = (state: RootState): ContactInterface[] => state.contacts.contacts
export const getContactById = (state: RootState): ContactInterface | null => state.contacts.contact
export const getAllContactsStatus = (state: RootState) => state.contacts.status
export const getContactByIdStatus = (state: RootState) => state.contacts.contactStatus
export const getAllContactsError = (state: RootState) => state.contacts.error