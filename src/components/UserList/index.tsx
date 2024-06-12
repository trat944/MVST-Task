import { User } from '../../interfaces/user';
import { UserItem } from '../UserItem';
import './userList.css'

interface Props {
  users: User[];
}

export const UserList = ({ users }: Props) => {
  return (
    <div>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};