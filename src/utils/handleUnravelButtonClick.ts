export const handleUnravelButtonClick = (
  setTriggerUserDetails: React.Dispatch<React.SetStateAction<boolean>>,
  setIsConfettiActive: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsConfettiActive(true);
  const clickSound = new Audio('/src/assets/detective-sound.mp3');
  clickSound.play();
  setTimeout(() => {
    setIsConfettiActive(false);
    setTriggerUserDetails(true);
  }, 2000);
};