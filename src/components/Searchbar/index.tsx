import React, { useState } from 'react';
import './searchbar.css'

//change to React Hook Form

interface Props {
  onSearch: (username: string) => void;
}

export const SearchBar = ({ onSearch }: Props) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button>
    </form>
  );
};