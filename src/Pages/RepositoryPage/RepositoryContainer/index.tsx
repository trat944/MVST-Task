import { useEffect, useState } from 'react';
import { RepoList } from './RepoList';
import { Skeleton } from '../../../components/Skeleton';
import { useRepos } from '../../../hooks/useRepositories';
import './repositoryContainer.css'
import { Repository } from '../../../interfaces/repository';
import { RepoHeader } from './RepoHeader';
import { RepoSearchbar } from './RepoSearchbar';

type Props = {
  name: string | undefined
}

export const RepositoryContainer = ({name}: Props) => {

  const { repositories, loading } = useRepos(name || '');
  //In order to use a customHook for repos (as I did not for users) we need to pass the repos fetched to a useState for a later filtering. I did this to show a different approach, one with customHooks and one with function(utils), which was convenient because it also served for the Go Back Button.
  const [repositoriesShown, setRepositoriesShown] = useState<Repository[]>([])

  useEffect(() => {
    setRepositoriesShown(repositories);
  }, [repositories]);

  return (
    <>
    {loading ? (
        <Skeleton />
      ) : (
        <>
          <RepoHeader repos={repositoriesShown} />
          <RepoSearchbar />
          <RepoList repos={repositoriesShown} />
        </>
      )}
  </>
  )
}