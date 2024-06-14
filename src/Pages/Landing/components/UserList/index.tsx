import { UserItem } from '../UserItem';
import { User } from '@interfaces/user';
import './userList.css'

interface Props {
  users: User[];
  triggerUserDetails: boolean
}

export const UserList = ({ users, triggerUserDetails }: Props) => {
  return (
    <div className='users-container'>
      {users.map(user => (
        <UserItem triggerUserDetails={triggerUserDetails} key={user.id} user={user} />
      ))}
    </div>
  );
};