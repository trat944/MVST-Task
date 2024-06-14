import { useState, useEffect } from 'react';
import { RepositoryService } from '@services/RepositoryService';
import { Repository } from '@interfaces/repository';

export const useRepos = (username: string) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  /*
  *Data is fetched and stored in the useState, together with the loading active while fetching the data.
  *A timeOut on the promise is established just for showcasing purposes(skeleton)
  */
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating delay to show skeleton
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