import { useEffect, useState } from 'react';
import { Skeleton } from '@components/shared/Skeleton';
import { RepoList } from './RepoList';
import { RepoHeader } from './RepoHeader';
import { RepoSearchbar } from './RepoSearchbar';
import { useRepos } from '@hooks/useRepositories';
import { Repository } from '@interfaces/repository';
import './repositoryContainer.css'

type Props = {
  name: string | undefined
}

export const RepositoryContainer = ({name}: Props) => {

  const [repositoriesShown, setRepositoriesShown] = useState<Repository[]>([])
  const { repositories, loading } = useRepos(name || '');
  //In order to use a customHook for repos (as I did not for users) we need to pass the repos fetched to a useState for a later filtering. I did this to show a different approach, one with customHooks and one with function(utils), which was convenient because it also served for the Go Back Button.

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