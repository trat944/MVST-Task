import { useState } from 'react';
import { UserList } from '../../components/UserList';
import { useUsers } from '../../hooks/useUsers';
import './landingPage.css'
import { UnravelButton } from '../../components/UnravelButton';
import { SearchBar } from '../../components/Searchbar';
import { Skeleton } from '../../components/Skeleton';

export const LandingPage = () => {
  const {users, loading} = useUsers();
  const [triggerUserDetails, setTriggerUserDetails] = useState<boolean>(false)

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          {triggerUserDetails ? (
            <SearchBar />
          ) : (
            <UnravelButton setTriggerUserDetails={setTriggerUserDetails} />
          )}
          <UserList triggerUserDetails={triggerUserDetails} users={users} />
        </>
      )}
    </>
  );
};