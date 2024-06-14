/*once the button is clicked, confetti is activated and sound is played. However, a timeOut is introduced to wait 2 seconds to activate the trigger and show the user's picture and username and hide the confetti. This way, confetti is shown until the end and userDetails are not inmediately shown
*/

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