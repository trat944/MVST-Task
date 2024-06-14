import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCube, faPrint, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { Repository } from '../../../../interfaces/repository';
import { useEffect, useState } from 'react';
import './repoHeader.css'

interface Props {
  repos: Repository[];
}

export const RepoHeader = ({ repos }: Props) => {
  const [reposNumber, setReposNumber] = useState(0)

  useEffect(() => {
    const calculateRepoNumber = () => {
      setReposNumber(repos.length) 
    }
    calculateRepoNumber()
  }, [])

  return (
    <>
    <div className='repo-header-container'>
      <div className="overview-header-container">
        <FontAwesomeIcon icon={faBookOpen} />
        <span>Overview</span>
      </div>
      <div className="repositories-header-container">
        <FontAwesomeIcon icon={faPrint} />
        <span>Repositories</span>
        {reposNumber > 0 && <span className='repos-number'>{reposNumber}</span>}
      </div>
      <div className="projects-header-container">
      <FontAwesomeIcon icon={faTableCellsLarge} />
        <span>Projects</span>
      </div>
      <div className="packages-header-container">
        <FontAwesomeIcon icon={faCube} />
        <span>Packages</span>
      </div>
    </div>
    <hr className='header-divider' />
    </>
  );
};