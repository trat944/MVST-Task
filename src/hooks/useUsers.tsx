import { useState, useEffect } from 'react';
import { User } from '../interfaces/user';
import { UserService } from '../services/UserService';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await UserService.getUsers();
        setUsers(data);
      } catch (error) {
        console.log(error, 'Failed to fetch users in custom hook');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, setUsers, loading };
};