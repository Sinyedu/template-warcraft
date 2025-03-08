import React from 'react';

const UserProfile: React.FC = () => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: 'url(https://via.placeholder.com/150)' }}>
            </div>
            <div className="p-4">
                <h1 className="text-gray-900 font-bold text-2xl">John Doe</h1>
                <p className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
                <div className="flex item-center justify-between mt-3">
                    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Message</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;