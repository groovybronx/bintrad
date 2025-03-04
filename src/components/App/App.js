import React, { useState, useEffect } from 'react';
import './App.css';
import Login from '../Login/Login';
import ProfileList from '../ProfileList/ProfileList';
import ProfileForm from '../ProfileForm/ProfileForm';
import { loadProfiles, saveProfiles } from '../../utils/storage';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isCreatingProfile, setIsCreatingProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    const storedProfiles = loadProfiles();
    if (storedProfiles) {
      setProfiles(storedProfiles);
    }
  }, []);

  useEffect(() => {
    saveProfiles(profiles);
  }, [profiles]);

  const handleLogin = (profile) => {
    setSelectedProfile(profile);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setSelectedProfile(null);
    setIsLoggedIn(false);
  };

  const handleCreateProfile = () => {
    setIsCreatingProfile(true);
  };

  const handleCancelCreateProfile = () => {
    setIsCreatingProfile(false);
  };

  const handleProfileCreated = (newProfile) => {
    setProfiles([...profiles, newProfile]);
    setIsCreatingProfile(false);
  };
  
  const handleEditProfile = (profileToEdit) => {
    const updatedProfiles = profiles.map(profile =>
      profile.name === profileToEdit.name ? { ...profile, ...profileToEdit } : profile
    );
    setProfiles(updatedProfiles);
    setIsCreatingProfile(false);
  }

  const handleDeleteProfile = (profileName) => {
    const updatedProfiles = profiles.filter(profile => profile.name !== profileName);
    setProfiles(updatedProfiles);
  };
  
  const handleEditClick = (profile) => {
    setSelectedProfile(profile);
    setIsCreatingProfile(true);
  };


  return (
    <div className="app">
      <h1>BinTrad</h1>
      {!isLoggedIn && !isCreatingProfile && (
        <>
          <ProfileList
            profiles={profiles}
            onDelete={handleDeleteProfile}
            onEdit={handleEditClick}
          />
          <button onClick={handleCreateProfile}>Create Profile</button>
        </>
      )}

      {isCreatingProfile && (
        <ProfileForm
          onProfileCreated={handleProfileCreated}
          onCancel={handleCancelCreateProfile}
          profile={selectedProfile}
          onEditProfile={handleEditProfile}
        />
      )}

      {isLoggedIn && ( 
        <Login
          profiles={selectedProfile}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
      )}

    
    </div>
  );
}

export default App;
