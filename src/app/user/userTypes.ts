export enum UserRole {
    Admin = 'Admin',
    Moderator = 'Moderator',
    User = 'User',
    Guest = 'Guest'
}

export interface User {
    id: number;
    username: string;
    email: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}