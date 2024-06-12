import { useState, useEffect } from 'react';
import { RepositoryService } from '../services/RepositoryService';
import { Repository } from '../interfaces/repository';

export const useRepos = (username: string) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const data = await RepositoryService.getRepositoriesFromUser(username);
        setRepositories(data);
      } catch (error) {
        console.log(error, 'Failed to fetch repositories in custom hook');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repositories, setRepositories, loading };
};