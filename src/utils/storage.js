const PROFILES_KEY = 'bintrad-profiles';

export const loadProfiles = () => {
  try {
    const serializedProfiles = localStorage.getItem(PROFILES_KEY);
    if (serializedProfiles === null) {
      return [];
    }
    return JSON.parse(serializedProfiles);
  } catch (err) {
    console.error('Error loading profiles:', err);
    return [];
  }
};

export const saveProfiles = (profiles) => {
  try {
    const serializedProfiles = JSON.stringify(profiles);
    localStorage.setItem(PROFILES_KEY, serializedProfiles);
  } catch (err) {
    console.error('Error saving profiles:', err);
  }
};
