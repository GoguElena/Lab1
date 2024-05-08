import React from 'react';

interface HomeContentProps {
    username: string;
}

const HomeContent: React.FC<HomeContentProps> = ({ username }) => {
    return (
        <div>
            <h1>Welcome, {username}!</h1>
            <p>You are logged in.</p>
        </div>
    );
};

export default HomeContent;
