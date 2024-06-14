import { Repository } from '@interfaces/repository';
import { useState } from 'react';

interface UseRepoFilterProps {
  repos: Repository[];
}

interface RepoFilterResult {
  filteredRepos: Repository[];
  selectedLanguage: string;
  handleChangeLanguage: (language: string) => void;
}

export const useRepoFilter = ({ repos }: UseRepoFilterProps): RepoFilterResult => {
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>(repos);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');

  /*Here filteredRepos has the initial value of all repos.  
    .1 This function receives a language -> the value of the input that the user selects.
    2. This function is called everytime the select value is changed -> onChange property. 
    Finally, all the repos (initialised in filteredRepos) are iterated and return those which language is the same as the language passed by parameters.
  */  
  const handleChangeLanguage = (language: string) => {
    setSelectedLanguage(language);
    if (language === 'All') {
      setFilteredRepos(repos);
    } else {
      const filtered = repos.filter(repo => repo.language === language);
      setFilteredRepos(filtered);
    }
  };

  return { filteredRepos, selectedLanguage, handleChangeLanguage };
};
