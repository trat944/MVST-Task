import { Repository } from '../../../../interfaces/repository';
import './repoItem.css'

interface Props {
  repo: Repository;
}

export const RepoItem = ({ repo }: Props) => {
  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.language}</p>
    </div>
  );
};
//Fill more....