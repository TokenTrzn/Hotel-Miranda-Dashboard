export interface UserInterface {
    photo: string;
    name: string;
    email: string;
    startDate: string;
    description: string;
    contact: string;
    status: 'ACTIVE' | 'INACTIVE';
    password: string;
}

export interface UserData {
    users: UserInterface[];
    user: UserInterface | null;
    status: 'idle' | 'fulfilled' | 'pending' | 'rejected';
    userStatus: 'idle' | 'fulfilled' | 'pending' | 'rejected';
    error: string | null
}