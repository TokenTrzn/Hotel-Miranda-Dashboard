export interface ContactInterface {
    id?: number;
    date: string;
    hour: string;
    name: string;
    email: string;
    phone: string;
    comment: string;
    isArchived: number;
} 

export interface ContactData {
    contacts: ContactInterface[];
    contact: ContactInterface | null;
    status: 'idle' | 'fulfilled' | 'pending' | 'rejected';
    contactStatus: 'idle' | 'fulfilled' | 'pending' | 'rejected';
    error: string | null
}