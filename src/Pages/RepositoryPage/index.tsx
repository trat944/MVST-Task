import { useParams } from "react-router-dom";
import { ProfileInfoContainer } from "./ProfileInfoContainer";
import { RepositoryContainer } from "./RepositoryContainer";
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