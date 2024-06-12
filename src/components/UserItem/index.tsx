import { User } from '../../interfaces/user';
import './userItem.css'

interface Props {
  user: User;
}

export const UserItem = ({ user }: Props) => {
  return (
    <div>
      <h2>{user.login}</h2>
    </div>
  );
  };
//Fill more...