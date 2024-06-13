import React, { useState } from 'react';
import './searchbar.css'

export const SearchBar = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className='users-form' onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter a username"
      />
      <button type="submit">Search</button>
    </form>
  );
};