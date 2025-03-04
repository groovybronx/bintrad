import React from 'react';
import './ProfileList.css';
import ProfileItem from '../ProfileItem/ProfileItem';

function ProfileList({ profiles, onLogin, onDelete, onEdit }) {
  return (
    <div className="profile-list">
      <h2>Profiles</h2>
      <ul>
        {profiles.map((profile) => (
          <ProfileItem
            key={profile.name}
            profile={profile}
            onLogin={onLogin}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;
