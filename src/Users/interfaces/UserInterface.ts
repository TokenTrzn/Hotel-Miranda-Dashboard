export interface UserInterface {
    id: number;
    photo: string;
    email: string;
    startDate: Date;
    description: string;
    contact: string;
    status: 'ACTIVE' | 'INACTIVE';
}

export interface UserData {
    users: UserInterface[];
    user: UserInterface | null;
    status: 'idle' | 'fulfilled' | 'pending' | 'rejected';
    error: string | null
}