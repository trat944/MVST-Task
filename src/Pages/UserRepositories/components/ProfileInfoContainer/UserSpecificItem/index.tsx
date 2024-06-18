import { UserSpecific } from '../../../../../interfaces/userSpecific';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import './userSpecificItem.css'

interface Props {
  user: UserSpecific | undefined
}

export const UserSpecificItem = ({ user }: Props) => {
  return (
    <div className="user-container">
      <img className='avatar-img' src={user?.avatar_url} alt="User image" />
      <h2 className='userName'>{user?.name}</h2>
      <span className='user-login'>{user?.login}</span>
      {user?.bio !== null && <span>{user?.bio}</span>}
      {user?.company !== null && <span>{user?.company}</span>}
      <button className='follow-button'>Follow</button>
      <div className="follow-container">
        <FontAwesomeIcon icon={faUserGroup} />
        <span className="followers">{user?.followers} followers</span>
        <span className="separator"></span>
        <span className="following">{user?.following} following</span>
      </div>
      <a className='github-link' href={user?.html_url}>Github Profile</a>
      {user?.location && (
        <div className="location-container">
        <FontAwesomeIcon icon={faLocationDot} />
        <span>{user?.location}</span>
      </div>
      )}
      </div>
  );
};