import React from "react";
import "./ProfileList.css";
import ProfileItem from "../ProfileItem/ProfileItem";

function ProfileList({ profiles, onDelete, onEdit }) {
  return (
    <div className="profile-list">
      <ul>
        {profiles.map((profile) => (
          <ProfileItem
            key={profile.id} // Use unique ID as key
            profile={profile}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;
