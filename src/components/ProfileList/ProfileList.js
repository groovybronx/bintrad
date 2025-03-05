import React from "react";
import "./ProfileList.css";
import ProfileItem from "../ProfileItem/ProfileItem";

function ProfileList({ profiles, onDelete, onEdit, onSelect }) {
  return (
    <div className="profile-list">
      <ul>
        {profiles.map((profile) => (
          <ProfileItem
            key={profile.id} // Use unique ID as key
            profile={profile}
            onDelete={onDelete}
            onEdit={onEdit}
            onSelect={onSelect} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;
