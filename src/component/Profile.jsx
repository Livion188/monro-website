import React, { useState, useEffect } from 'react';

export default function ProfileCardEditor() {
  // State variables for inputs
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  // useEffect that logs whenever the name state changes
  useEffect(() => {
    if (name) {
      console.log('Profile updated');
    }
  }, [name]);

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem', fontFamily: 'sans-serif' }}>
      {/* Form Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
        <h2>The Great DOTHRAKI</h2>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="The Great DOTHRAKI"
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Bio:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="We will Bring Death!"
            rows="3"
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Profile Picture URL:</label>
          <input
            type="text"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            placeholder="https://top.com/top.jpg"
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
      </div>

      {/* Live Preview Card */}
      <div style={{ width: '300px' }}>
        <h2>Live Preview</h2>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
          <img
            src={avatarUrl || 'https://www.sciencefriday.com/wp-content/uploads/2015/10/khal-drogo-1920.jpg'}
            alt={name || 'Profile Avatar'}
            style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem' }}
          />
          <h3 style={{ margin: '0 0 0.5rem 0' }}>{name || "KALE'AL"}</h3>
          <p style={{ color: '#666', margin: 0 }}>{bio || 'Great leader of the Red Death!...'}</p>
        </div>
      </div>
    </div>
  );
}