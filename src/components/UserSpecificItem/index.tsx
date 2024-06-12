import { UserSpecific } from '../../interfaces/userSpecific';
import './userItem.css'

interface Props {
  userSpecific: UserSpecific;
}

export const UserSpecificItem = ({ userSpecific }: Props) => {
  return (
    <div>
      <h2>{userSpecific.id}</h2>
    </div>
  );
  };
//Fill more...