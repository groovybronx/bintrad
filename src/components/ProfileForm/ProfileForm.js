import React, { useState, useEffect } from 'react';
import './ProfileForm.css';

function ProfileForm({ onProfileCreated, onCancel, profile, onEditProfile }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [apiKeyTestnet, setApiKeyTestnet] = useState('');
  const [apiSecretKeyTestnet, setApiSecretKeyTestnet] = useState('');
  const [apiKeySpot, setApiKeySpot] = useState('');
  const [apiSecretKeySpot, setApiSecretKeySpot] = useState('');
  const isEditMode = !!profile;
  
  useEffect(() => {
      if (profile) {
        setName(profile.name || '');
        setPassword(profile.password || '');
        setApiKeyTestnet(profile.apiKeyTestnet || '');
        setApiSecretKeyTestnet(profile.apiSecretKeyTestnet || '');
        setApiKeySpot(profile.apiKeySpot || '');
        setApiSecretKeySpot(profile.apiSecretKeySpot || '');
      }
    }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      name,
      password,
      apiKeyTestnet,
      apiSecretKeyTestnet,
      apiKeySpot,
      apiSecretKeySpot,
    };
      if(isEditMode){
          onEditProfile(newProfile);
      }else{
          onProfileCreated(newProfile);
      }
  };

  return (
    <div className="profile-form">
      <h2>{isEditMode ? "Edit Profile" : "Create Profile"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="apiKeyTestnet">API Key Testnet:</label>
          <input
            type="text"
            id="apiKeyTestnet"
            value={apiKeyTestnet}
            onChange={(e) => setApiKeyTestnet(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="apiSecretKeyTestnet">API Secret Key Testnet:</label>
          <input
            type="text"
            id="apiSecretKeyTestnet"
            value={apiSecretKeyTestnet}
            onChange={(e) => setApiSecretKeyTestnet(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="apiKeySpot">API Key Spot:</label>
          <input
            type="text"
            id="apiKeySpot"
            value={apiKeySpot}
            onChange={(e) => setApiKeySpot(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="apiSecretKeySpot">API Secret Key Spot:</label>
          <input
            type="text"
            id="apiSecretKeySpot"
            value={apiSecretKeySpot}
            onChange={(e) => setApiSecretKeySpot(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button type="submit">Save Profile</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
            
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
