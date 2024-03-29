import UserRole from './user-role';

export interface Person {
    name: string;
    lastname: string;
    age: number;
    email?: string;
}

export interface User extends Person{
    email?: string;
    role?: UserRole;
}

