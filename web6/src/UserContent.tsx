import React from 'react';

interface UserContentProps {
    id: number;
    password: string;
}

const UserContent: React.FC<UserContentProps> = ({ id, password }) => {
    return (
        <div>
            <p>ID: {id}</p>
            <p>Password: {password}</p>
        </div>
    );
};

export default UserContent;
