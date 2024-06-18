import { useEffect, useState } from 'react';
import { Skeleton } from '../../components/shared/Skeleton';
import { UserList } from './components/UserList';
import { UnravelButton } from './components/UnravelButton';
import { UserSearchbar } from './components/UserSearchbar';
import { fetchAndSetUsers } from '../../utils/fetchAndSetUsers';
import { User } from '../../interfaces/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import './landingPage.css'

export const LandingPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [triggerUserDetails, setTriggerUserDetails] = useState<boolean>(false);
  const [buttonTrigger, setButtonTrigger] = useState<boolean>(false);

  useEffect(() => {
    fetchAndSetUsers(setLoading, setUsers);
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
            <button className='back-button' onClick={() => fetchAndSetUsers(setLoading, setUsers, setButtonTrigger)}>
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