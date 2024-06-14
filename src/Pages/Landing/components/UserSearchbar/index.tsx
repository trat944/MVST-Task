import { useForm } from 'react-hook-form';
import { useUserSearch } from '@hooks/useUserSearcher';
import { User } from '@interfaces/user';
import './userSearchbar.css'

type Props = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  users: User[],
  setButtonTrigger: React.Dispatch<React.SetStateAction<boolean>>
}

interface FormData {
  username: string;
}

export const UserSearchbar = ({setUsers, users, setButtonTrigger}: Props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const { handleUserSearch, searchError } = useUserSearch({ users, setUsers, setButtonTrigger });

  const onSubmit = handleSubmit((data) => {
    handleUserSearch(data, reset);
  });

  return (
    <form className='users-form' onSubmit={onSubmit}>
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter a username"
          {...register('username', { 
            required: 'It cannot be empty' 
          })}
        />
        <button type="submit">Search</button>
      </div>
      {errors.username && typeof errors.username.message === 'string' && <span className='error-msg'>{errors.username.message}</span>}
      {searchError && <span className='no-found-user-msg'>{searchError}</span>}
    </form>
  );
};