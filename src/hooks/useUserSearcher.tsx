import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@interfaces/user';

interface UseUserSearchParams {
  users: User[],
  setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  setButtonTrigger: React.Dispatch<React.SetStateAction<boolean>>
}

export const useUserSearch = ({ users, setUsers, setButtonTrigger }: UseUserSearchParams) => {
  const [searchError, setSearchError] = useState<string | null>(null);
  const navigate = useNavigate();

  /*If exact match is found, redirect to the repository page of that person. 
  If several users are found with the input value, show them in the landing page.
  If no user is found, set the searchError to 'No user match'
  */
  const handleUserSearch = async (data: { username: string }, reset: () => void) => {
    const foundUser = users.find(user => data.username.toLowerCase() === user.login.toLowerCase());
    if (foundUser) {
      navigate(`/repositories/${foundUser.login}`);
    } else {
      const filteredUsers = users.filter(user => user.login.includes(data.username.toLowerCase()));
      if (filteredUsers.length > 0) {
        setButtonTrigger(true);
        setUsers(filteredUsers);
      } else {
        setSearchError('No user match');
      }
    }
    reset();
  };

  return { handleUserSearch, searchError };
};