import { createAsyncThunk } from "@reduxjs/toolkit"
import { RoomInterface } from "../interfaces/RoomInterface";

export const fetchRoomsThunk = createAsyncThunk<RoomInterface[]>('rooms/fetchRooms', async () => {
  const response = await fetch('/data/roomsData.json')
  if (!response.ok) {
    throw new Error('Error, Rooms not found')
  }
  const data: RoomInterface[] = await response.json()
  return new Promise<RoomInterface[]>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
});

export const fetchRoomByIdThunk = createAsyncThunk<RoomInterface, number>('rooms/fetchRoomById', async (id: number) => {
  const response = await fetch('/data/roomsData.json')
  if (!response.ok) {
    throw new Error('Network Error')
  }
  const data: RoomInterface[] = await response.json()
  const room = data.find(room => room.id === id)
  if (!room) {
    throw new Error('Error, Room not found')
  }
  return new Promise<RoomInterface>((resolve) => {
    setTimeout(() => {
      resolve(room);
    }, 200);
  });
});

export const addRoomThunk = createAsyncThunk<RoomInterface, RoomInterface>('rooms/addRoom', async (newRoom: RoomInterface) => {
  return new Promise<RoomInterface>((resolve) => {
    setTimeout(() => {
      resolve(newRoom);
    }, 200);
  });
});

export const updateRoomThunk = createAsyncThunk<RoomInterface, RoomInterface>('rooms/updateRoom', async (updatedRoom: RoomInterface) => {
  return new Promise<RoomInterface>((resolve) => {
    setTimeout(() => {
      resolve(updatedRoom);
    }, 200);
  });
});

export const deleteRoomThunk = createAsyncThunk<number, number>('rooms/deleteRoom', async (id: number) => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 200);
  });
});