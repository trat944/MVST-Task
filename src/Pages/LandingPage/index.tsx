import { useEffect, useState } from 'react';
import { UserList } from '../../components/UserList';
import { UnravelButton } from '../../components/UnravelButton';
import { SearchBar } from '../../components/Searchbar';
import { Skeleton } from '../../components/Skeleton';
import { User } from '../../interfaces/user';
import { fetchingAndSettingUsers } from '../../utils/fetchingAndSettingUsers';
import './landingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../services/UserService';

export const LandingPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [triggerUserDetails, setTriggerUserDetails] = useState<boolean>(false);
  const [buttonTrigger, setButtonTrigger] = useState<boolean>(false);

  const ggg = async () => {
    const users = await UserService.getUsers()
    console.log(users)
    const user = await UserService.getSingleUser('mojombo')
    console.log(user)
  }

  useEffect(() => {
    fetchingAndSettingUsers(setLoading, setUsers);
    ggg()
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          {triggerUserDetails && !buttonTrigger && (
          <SearchBar
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