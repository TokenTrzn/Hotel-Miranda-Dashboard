export interface RoomInterface {
    id: number;
    photo: string;
    number: number;
    name: string;
    type: string;
    amenities: string[];
    price: string;
    offerPrice: string;
    status: 'Booked' | 'Available'
}

export interface RoomInitialState {
    rooms: RoomInterface[];
    room: RoomInterface | null;
    status: 'idle' | 'fulfilled' | 'pending' | 'rejected';
    roomStatus: 'idle' | 'fulfilled' | 'pending' | 'rejected';
    error: string | null
}