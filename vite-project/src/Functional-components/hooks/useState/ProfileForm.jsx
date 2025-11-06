import React, { useState } from 'react';

function ProfileForm() {
  const [profile, setProfile] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={profile.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Enter your age"
        value={profile.age}
        onChange={handleChange}
      />
      <p>
        Name: {profile.name || '___'}, Age: {profile.age || '___'}
      </p>
    </div>
  );
}

export default ProfileForm;
