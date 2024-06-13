import { useState } from 'react';
import Confetti from 'react-confetti';
import './unravelButton.css'

type Props = {
  setTriggerUserDetails: React.Dispatch<React.SetStateAction<boolean>>
}

export const UnravelButton = ({setTriggerUserDetails}: Props) => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleClick = () => {
    setIsConfettiActive(true);
    const clickSound = new Audio('/src/assets/detective-sound.mp3');
    clickSound.play();
    setTimeout(() => {
      setIsConfettiActive(false);
      setTriggerUserDetails(true);
    }, 2000);
  };

  return (
    <div>
      <button className='unravel-users-button' onClick={handleClick}>
        Click here to unravel users
      </button>
      {isConfettiActive && <Confetti className='confetti' />}
    </div>
  );
};
