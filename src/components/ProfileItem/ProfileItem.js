import React from 'react';
import './ProfileItem.css';
import Login from '../Login/Login';

function ProfileItem({ profile, onLogin, onDelete, onEdit }) {
  return (
    <li className="profile-item">
      {profile.name}
      <div className="actions">
        <Login profile={profile} onLogin={onLogin} />
        <button onClick={() => onEdit(profile)}>Edit</button>
        <button onClick={() => onDelete(profile.name)}>Delete</button>
      </div>
    </li>
  );
}

export default ProfileItem;
