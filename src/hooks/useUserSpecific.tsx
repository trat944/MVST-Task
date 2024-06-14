import { useState, useEffect } from 'react';
import { UserService } from '@services/UserService';
import { UserSpecific } from '@interfaces/userSpecific';

export const useUserSpecific = (username: string) => {
  const [user, setUser] = useState<UserSpecific>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating delay to show skeleton
        const data = await UserService.getSingleUser(username);
        if (data) {
          setUser(data);
        }
      } catch (error) {
        console.log(error, 'Failed to fetch user in custom hook');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, setUser, loading };
};