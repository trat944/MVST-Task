import { useState } from 'react';
import './userSearchbar.css'
import { useForm } from 'react-hook-form';
import { User } from '../../../interfaces/user';
import { useNavigate } from 'react-router-dom';

type Props = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  users: User[]
  setButtonTrigger: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserSearchbar = ({setUsers, users, setButtonTrigger}: Props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [searchError, setSearchError] = useState<string | null>(null);
  const navigate = useNavigate();

  //If exact match is found, redirect to the repository page of that person. If several users are found with the input value, show them in the landing page.
  const onSubmit = handleSubmit(async (data) => {
    if (Object.keys(errors).length === 0) {
      const foundUser = users.find(user => data.username === user.login);
      if (foundUser) {
        navigate(`/repositories/${foundUser.login}`);
      } else {
        const filteredUsers = users.filter(user => user.login.includes(data.username));
        if (filteredUsers.length > 0) {
          setButtonTrigger(true)
          setUsers(filteredUsers);
        } else {
          setSearchError('No user match');
        }
      }
      reset()
    }
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