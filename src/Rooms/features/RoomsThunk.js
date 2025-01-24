import { createAsyncThunk } from "@reduxjs/toolkit"
import RoomsData from '../data/roomsData.json'

export const fetchRoomsThunk = createAsyncThunk('rooms/fetchRooms', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(RoomsData);
    }, 200);
  });
});

export const fetchRoomByIdThunk = createAsyncThunk('rooms/fetchRoomById', async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(RoomsData.filter((room) => room.id === id));
    }, 200);
  });
});

export const addRoomThunk = createAsyncThunk('rooms/addRoom', async (newRoom) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newRoom);
    }, 200);
  });
});

export const updateRoomThunk = createAsyncThunk('rooms/updateRoom', async (updatedRoom) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(updatedRoom);
    }, 200);
  });
});

export const deleteRoomThunk = createAsyncThunk('rooms/deleteRoom', async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 200);
  });
});