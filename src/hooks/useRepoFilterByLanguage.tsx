import { useEffect, useState } from 'react';
import { Repository } from '@interfaces/repository';

interface UseRepoFilterProps {
  repos: Repository[];
}

export const useRepoFilter = ({ repos }: UseRepoFilterProps) => {
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>(repos);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');

  const handleChangeLanguage = (language: string, resetSearchTerm: () => void) => {
    setSelectedLanguage(language);
    resetSearchTerm(); // Resetear el término de búsqueda
    filterRepos(language);
  };

  const filterRepos = (language: string) => {
    let filtered = repos;
    if (language !== 'All') {
      filtered = filtered.filter(repo => repo.language === language);
    }
    setFilteredRepos(filtered);
  };

  useEffect(() => {
    filterRepos(selectedLanguage);
  }, [repos, selectedLanguage]);

  return { filteredRepos, selectedLanguage, handleChangeLanguage };
};
/*Here filteredRepos has the initial value of all repos.  
  .1 This function receives a language -> the value of the input that the user selects.
  2. This function is called everytime the select value is changed -> onChange property. 
  Finally, all the repos (initialised in filteredRepos) are iterated and return those which language is the same as the language passed by parameters.
*/  
