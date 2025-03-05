import React, { useState, useEffect } from 'react';
import './App.css';
import Login from '../Login/Login';
import ProfileList from '../ProfileList/ProfileList';
import ProfileForm from '../ProfileForm/ProfileForm';
import { loadProfiles, saveProfiles } from '../../utils/storage';
import { v4 as uuidv4 } from 'uuid'; // Import for unique IDs

function App() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [isCreatingProfile, setIsCreatingProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    const storedProfiles = loadProfiles();
    setProfiles(storedProfiles);
  }, []);

  useEffect(() => {
    saveProfiles(profiles);
  }, [profiles]);


  const handleLogout = () => {
    setSelectedProfileId(null);
    setIsLoggedIn(false);
  };

  const handleCreateProfile = () => {
    setIsCreatingProfile(true);
    setSelectedProfileId(null); // Deselect any profile when creating a new one.
  };

  const handleCancelCreateProfile = () => {
    setIsCreatingProfile(false);
    setSelectedProfileId(null);
  };

  const handleProfileCreated = (newProfileData) => {
    const newProfile = { ...newProfileData, id: uuidv4() }; // Generate unique ID
    setProfiles([...profiles, newProfile]);
    setIsCreatingProfile(false);
  };

  const handleEditProfile = (updatedProfileData) => {
    const updatedProfiles = profiles.map((profile) =>
      profile.id === updatedProfileData.id ? { ...profile, ...updatedProfileData } : profile
    );
    setProfiles(updatedProfiles);
    setIsCreatingProfile(false);
  };
  const handleDeleteProfile = (profileName) => {
    const updatedProfiles = profiles.filter((profile) => profile.name !== profileName);
    setProfiles(updatedProfiles);
  };

  const handleEditClick = (profile) => {
    setSelectedProfileId(profile.id);
    setIsCreatingProfile(true);
  };

  

  const selectedProfile = profiles.find((profile) => profile.id === selectedProfileId);

  return (
    <div className="app">
      <h1>connexion</h1>
      {!isLoggedIn && !isCreatingProfile && (
        <>
          <ProfileList
            profiles={profiles}
            onDelete={handleDeleteProfile}
            onEdit={handleEditClick}
          />          {selectedProfile && (
                      <Login profile={selectedProfile} onLogin={() => setIsLoggedIn(true)} />
                    )}
          
          <button onClick={handleCreateProfile}>Create Profile</button>
        </>
      )}

      {isCreatingProfile && (
        <ProfileForm
          onSubmit={selectedProfileId ? handleEditProfile : handleProfileCreated}
          onCancel={handleCancelCreateProfile}
          initialData={selectedProfile}
        />
      )}

      {isLoggedIn && (
        <Login profile={selectedProfile} onLogout={handleLogout} />
      )}
    </div>
  );
  
 
}

export default App;
  
