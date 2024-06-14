import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RepoList } from '../RepoList';
import { LanguageFilterSelect } from './FilterByLanguageSelect';
import {useRepoFilter} from '@hooks/useRepoFilterByLanguage';
import { Repository } from '@interfaces/repository';
import './repoSearchbar.css'

type Props = {
  repos: Repository[],
  languagesOfRepos: string[],
  setRepositoriesShown: React.Dispatch<React.SetStateAction<Repository[]>>,
  repositoriesShown: Repository[]
}

export const RepoSearchbar: React.FC<Props> = ({ repos, languagesOfRepos, setRepositoriesShown }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { filteredRepos, selectedLanguage, handleChangeLanguage } = useRepoFilter({ repos });

  const onSubmit = (data: any) => {
    const term = data.repository.toLowerCase();
    const filtered = repos.filter(repo => repo.name.toLowerCase().includes(term));
    setRepositoriesShown(filtered);
    setSearchTerm(term);

    handleChangeLanguage('All', () => {});
    reset();
  };

  const resetSearchTerm = () => {
    setSearchTerm('');
    setRepositoriesShown(filteredRepos);
  };

  const onLanguageChange = (language: string) => {
    handleChangeLanguage(language, resetSearchTerm);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setRepositoriesShown(filteredRepos);
    }
  }, [filteredRepos, setRepositoriesShown, searchTerm]);

  return (
    <>
      <div className="filter-container">
        <form className='users-form' onSubmit={handleSubmit(onSubmit)}>
          <div className="form-container">
            <input
              type="text"
              placeholder="Enter a repository name"
              {...register('repository', { 
                required: 'It cannot be empty' 
              })}
            />
            <button type="submit">Search</button>
          </div>
          {/* {errors.repository && <span className='error-msg'>{errors.repository.message}</span>} */}
          {searchError && <span className='no-found-repository-msg'>{searchError}</span>}
        </form>

        <LanguageFilterSelect
          languagesOfRepos={languagesOfRepos}
          selectedLanguage={selectedLanguage}
          onChange={onLanguageChange}
        />
      </div>

      <RepoList repos={searchTerm ? repos.filter(repo => repo.name.toLowerCase().includes(searchTerm.toLowerCase())) : filteredRepos} /> 
    </>
  );
};