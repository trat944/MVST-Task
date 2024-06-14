import { useParams } from "react-router-dom";
import { RepositoryContainer } from "./components/RepositoryContainer";
import { ProfileInfoContainer } from "./components/ProfileInfoContainer";
import './repositoryPage.css'

export const RepositoryPage = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div className="repository-page-container">
      <div className="profile-info-container">
        <ProfileInfoContainer name={name} />
      </div>
      <div className="repository-container">
        <RepositoryContainer name={name} />
      </div>
    </div>
  )
}