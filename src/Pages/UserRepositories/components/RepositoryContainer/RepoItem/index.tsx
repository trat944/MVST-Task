import { Repository } from '@interfaces/repository';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeFork, faSortDown, faStar } from '@fortawesome/free-solid-svg-icons';
import './repoItem.css'

interface Props {
  repo: Repository;
}
// description , language, visibility, updated_at, forks/forks_count, name
export const RepoItem = ({ repo }: Props) => {
  console.log(repo)
  return (
    <div className='repo-item-container'>
      <div className="repo-specifics">
        <div className="repo-name">
          <span className='repo-title'>{repo.name}</span>
          <span className='repo-visibility'>{repo.visibility}</span>
        </div>
        {repo.description && <p className='repo-description'>{repo.description}</p>}
        <div className="repo-language-forks-update">
          {repo.language && <span>{repo.language}</span>}
          <FontAwesomeIcon icon={faCodeFork} />
          <span>{repo.forks}</span>
          <span>Date updated</span>
        </div>
      </div>

      <div className="star-and-chart">
        <div className="start-container">
          <FontAwesomeIcon icon={faStar} />
          <span>Star</span>
          <FontAwesomeIcon icon={faSortDown} />
        </div>
        <div className="chart-container">

        </div>
      </div>
    </div>
  );
};
//Fill more....