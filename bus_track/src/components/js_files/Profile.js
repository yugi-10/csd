import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import UserContext from  './UserContext';
function Profile() {
    const { user } = useContext(UserContext);
    // console.log(user)
    if (!user) {
        alert('Oops! Access Denied.Please log in to view your profile details.')
        // return <div><h1>User not exits</h1></div>;
    }
    

    return (
        <div className="profile">
            <h1>{user.name}'s Profile</h1>
            <p>Email: {user.email}</p>
            <p>Mobile: {user.mobile}</p>
            <p>Address: {user.address}</p>
        </div>
    );
}

export default Profile;