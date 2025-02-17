export interface BookingInterface {
    id: number;
    guestName: string;
    orderDate: string;
    orderDateHour: string;
    checkIn: string;
    checkInHour: string;
    checkOut: string;
    checkOutHour: string;
    specialRequest: boolean;
    type: string;
    number: number;
    status: 'Check In' | 'Check Out' | 'In Progress';
    price: string;
    description: string;
    amenities: string[];
}

export interface BookingInitialState {
    bookings: BookingInterface[];
    booking: BookingInterface | null;
    status: 'idle' | 'fulfilled' | 'pending' | 'rejected';
    error: string | null
}