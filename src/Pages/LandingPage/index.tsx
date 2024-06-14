import { useEffect, useState } from 'react';
import { UserList } from './UserList';
import { UnravelButton } from './UnravelButton';
import { UserSearchbar } from './UserSearchbar';
import { Skeleton } from '../../components/Skeleton';
import { User } from '../../interfaces/user';
import { fetchingAndSettingUsers } from '../../utils/fetchingAndSettingUsers';
import './landingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

export const LandingPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [triggerUserDetails, setTriggerUserDetails] = useState<boolean>(false);
  const [buttonTrigger, setButtonTrigger] = useState<boolean>(false);

  useEffect(() => {
    fetchingAndSettingUsers(setLoading, setUsers);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          {triggerUserDetails && !buttonTrigger && (
          <UserSearchbar
            setUsers={setUsers}
            users={users}
            setButtonTrigger={setButtonTrigger}
          />)}
          
          {!triggerUserDetails && <UnravelButton
            setTriggerUserDetails={setTriggerUserDetails}
          />
          }
          {buttonTrigger && (
            <button className='go-back-button' onClick={() => fetchingAndSettingUsers(setLoading, setUsers, setButtonTrigger)}>
              <FontAwesomeIcon icon={faRotateLeft} />
            </button>
          )}
          <UserList 
            triggerUserDetails={triggerUserDetails} 
            users={users} />
        </>
      )}
    </>
  );
};