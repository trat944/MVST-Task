import { useState } from 'react';
import Confetti from 'react-confetti';
import { handleUnravelButtonClick } from '../../../../utils/handleUnravelButtonClick';
import './unravelButton.css'

type Props = {
  setTriggerUserDetails: React.Dispatch<React.SetStateAction<boolean>>
}

export const UnravelButton = ({setTriggerUserDetails}: Props) => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  return (
    <div>
      <button className='unravel-users-button' onClick={() => handleUnravelButtonClick(setTriggerUserDetails, setIsConfettiActive)}>
        Click here to unravel users
      </button>
      {isConfettiActive && <Confetti className='confetti' />}
    </div>
  );
};
