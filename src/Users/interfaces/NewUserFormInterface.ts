export interface NewUserInterface {
    id: number;
    photo: string;
    name: string;
    email: string;
    startDate: string;
    description: string;
    contact: string;
    status: 'ACTIVE' | 'INACTIVE';
    password: string;
}