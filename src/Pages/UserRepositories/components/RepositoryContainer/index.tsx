import { useEffect, useState } from 'react';
import { Skeleton } from '@components/shared/Skeleton';
import { RepoHeader } from './RepoHeader';
import { RepoSearchbar } from './RepoSearchbar';
import { useRepos } from '@hooks/useRepositories';
import { getLanguages } from '@utils/getLanguagesFromRepos';
import { Repository } from '@interfaces/repository';
import './repositoryContainer.css'

type Props = {
  name: string | undefined
}

export const RepositoryContainer = ({ name }: Props) => {
  const [languagesOfRepos, setLanguagesOfRepos] = useState<string[]>([]);
  const { repositories, loading } = useRepos(name || '');
  const [repositoriesShown, setRepositoriesShown] = useState<Repository[]>([]);

  useEffect(() => {
    getLanguages(repositories, setLanguagesOfRepos);
    setRepositoriesShown(repositories);
  }, [repositories]);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <RepoHeader repos={repositories} />
          <RepoSearchbar
            repos={repositories}
            setRepositoriesShown={setRepositoriesShown}
            languagesOfRepos={languagesOfRepos}
          />
        </>
      )}
    </>
  );
};