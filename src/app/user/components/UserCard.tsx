import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

interface UserCardProps {
    name: string;
    email: string;
    avatarUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
            <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Team member" />
            <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-center mt-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-600">{email}</p>
            </div>
        </div>
    );
};

export default UserCard;