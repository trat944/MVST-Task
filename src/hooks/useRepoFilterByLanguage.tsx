import { useEffect, useState } from 'react';
import { Repository } from '@interfaces/repository';

interface UseRepoFilterProps {
  repos: Repository[];
}

export const useRepoFilter = ({ repos }: UseRepoFilterProps) => {
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>(repos);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  
  /*
  * Filters the repositories based on the selected language.
  * If the selected language is 'All', all repositories are included.
  * Otherwise, only repositories with the matching language are included.
  * @param {string} language - The selected programming language to filter by.
  */
 const filterRepos = (language: string) => {
   let filtered = repos;
   if (language !== 'All') {
     filtered = filtered.filter(repo => repo.language === language);
    }
    setFilteredRepos(filtered);
  };
  
  /*
  * Handles the change of the selected language for filtering repositories.
  * Resets the search term and filters the repositories based on the selected language.
  * Then, it filters the repos based on the language. 
  */
 const handleChangeLanguage = (language: string, resetSearchTerm: () => void) => {
   setSelectedLanguage(language);
   resetSearchTerm(); // Resetear el término de búsqueda
   filterRepos(language);
 };

  /*
   * useEffect hook to reset the filtered repositories and apply language filtering whenever the list of repositories or the selected language changes.
   * This makes sure that the displayed repositories are always up-to-date with the current filters.
   */
  useEffect(() => {
    setFilteredRepos(repos); 
    filterRepos(selectedLanguage);
  }, [repos, selectedLanguage]);

  return { filteredRepos, selectedLanguage, handleChangeLanguage };
};

