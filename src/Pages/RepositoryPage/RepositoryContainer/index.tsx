import { useRepos } from '../../../hooks/useRepositories';
import './repositoryContainer.css'

type Props = {
  name: string | undefined
}

export const RepositoryContainer = ({name}: Props) => {

  const { repositories, loading } = useRepos(name || '');
  console.log(repositories)

  return (
    <div className="repository-page-container">
      repos
    </div>
  )
}