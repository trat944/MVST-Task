import { Repository } from '../../../../interfaces/repository';
import { RepoItem } from '../RepoItem';
import './repoList.css'

interface Props {
  repos: Repository[];
}

export const RepoList = ({ repos }: Props) => {
  return (
    <div>
      {repos.map(repo => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};