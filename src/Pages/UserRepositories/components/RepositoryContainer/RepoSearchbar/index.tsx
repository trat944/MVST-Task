import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RepoList } from '../RepoList';
import { SelectForFilteringLanguages } from './SelectForFilteringLanguages';
import {useRepoFilter} from '@hooks/useRepoFilterByLanguage';
import { Repository } from '@interfaces/repository';
import './repoSearchbar.css'

type Props = {
  repos: Repository[],
  languagesOfRepos: string[],
  setRepositoriesShown: React.Dispatch<React.SetStateAction<Repository[]>>,

}

export const RepoSearchbar: React.FC<Props> = ({ repos, languagesOfRepos, setRepositoriesShown }) => {
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { filteredRepos, selectedLanguage, handleChangeLanguage } = useRepoFilter({ repos });
  const { register, handleSubmit, reset } = useForm();

  /*
  *Once form is submitted, these steps will happen:
    *1. Iteration through repos to find those which match with the input value.
  *No matter if any repo is found:
    *1. The term is stored in the useState.
    *2. The language select is automatically selected as All, since the filter is done through all repos.
    *3. The input is reset (React-fook-form property)
  *If no repo is found, then the error is stored and showed to the user.
  */
  const onSubmit = (data: any) => {
    const term = data.repository.toLowerCase();
    const filtered = repos.filter(repo => repo.name.toLowerCase().includes(data.repository.toLowerCase()));
    setSearchTerm(term);
    handleChangeLanguage('All', () => {});
    reset();
    if (filtered.length > 0) {
      setRepositoriesShown(filtered);
      setSearchError(null);
    } else {
      setSearchError('No repository found');
    }
  };

  //Show all repos when search is initialised again
  const resetSearchTerm = () => {
    setSearchTerm('');
    setRepositoriesShown(repos); 
  };

  const onLanguageChange = (language: string) => {
    setSearchError(null);
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
          {searchError && <span className='no-found-repository-msg'>{searchError}</span>}
        </form>

        <SelectForFilteringLanguages
          languagesOfRepos={languagesOfRepos}
          selectedLanguage={selectedLanguage}
          onChange={onLanguageChange}
        />
      </div>
      
      <RepoList repos={searchTerm ? repos.filter(repo => repo.name.toLowerCase().includes(searchTerm.toLowerCase())) : filteredRepos} /> 
    </>
  );
};
/*
* I had the problem that repositories were either being printed twice or the filter had conflicts between term and language methods. The solution has been to print the repositories from this component, rather than the parent component (Repository Container).
* This way, as long as the user doesn´t search for a term (SearchTerm is undefined) all repos will show. And thanks to the LanguageFilterSelect component and the custom hook that logic is completely separated. (Took me a while to get here...)
*/