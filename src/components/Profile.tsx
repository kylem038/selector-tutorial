import React from "react";
import '../styles/Profile.css';
import { useSelector } from 'react-redux';
import { selectFirstName, selectLastName } from "../selectors/profile";

const Profile = () => {
    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);

    return (
        <div className="Profile">
            <h3>Super Cool User</h3>
            <span>{firstName} {lastName}</span>
        </div>
    );
}

export default Profile;