import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../../../interfaces/user';
import './userItem.css'

interface Props {
  user: User,
  triggerUserDetails: boolean
}

export const UserItem = ({ user, triggerUserDetails }: Props) => {
  const [userImage, setUserImage] = useState<string>('');
  useEffect(() => {
    setUserImage(triggerUserDetails ? user.avatar_url : '/incognito.webp'); 
  }, [triggerUserDetails])


  return (
    <Link to={triggerUserDetails ? `/repositories/${user.login}` : '#'}>
      <div className="user-item">
        <div className="user-image-container">
          <img src={userImage} alt={user.login} className="user-image" />
        </div>
        {triggerUserDetails && <div className="user-name">{user.login}</div>}
      </div>
    </Link>
  );
};