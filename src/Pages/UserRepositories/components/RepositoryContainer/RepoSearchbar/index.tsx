import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Repository } from '@interfaces/repository';
import './repoSearchbar.css'
import {useRepoFilter} from '@hooks/useRepoFilterByLanguage';
import { RepoItem } from '../RepoItem';

interface Props {
  repos: Repository[]
}

export const RepoSearchbar = ({repos}: Props) => {
  const [searchError, setSearchError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { filteredRepos, selectedLanguage, handleChangeLanguage } = useRepoFilter({ repos });

  // Función para manejar el envío del formulario
  const onSubmit = handleSubmit(async (data) => {
    if (Object.keys(errors).length === 0) {
      // Lógica de búsqueda o redirección
    }
  });

  const allLanguages = [...new Set(repos.flatMap(repo => repo.language))];

  return (
    <div>
      <div className='users-form' onSubmit={onSubmit}>
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
        {errors.repository && typeof errors.repository.message === 'string' && <span className='error-msg'>{errors.repository.message}</span>}
        {searchError && <span className='no-found-user-msg'>{searchError}</span>}
      </div>
      
      {/* Desplegable de lenguajes */}
      <div className="language-dropdown">
        <select
          value={selectedLanguage}
          onChange={(e) => handleChangeLanguage(e.target.value)}
        >
          <option value="All">All Languages</option>
          {allLanguages.map((lang, index) => (
            <option key={index} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      {/* Aquí se mostrarían los repositorios filtrados */}
      {filteredRepos.map(repo => (
        <RepoItem repo={repo} />
      ))}
    </div>
  );
};