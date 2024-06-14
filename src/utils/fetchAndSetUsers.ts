import { UserService } from "../services/UserService";
import { User } from "../interfaces/user";

/*This function is reused for optimisation and used in several cases.
  1. If it receives the setButtonTrigger this function is being called from the onClick function of the go-back-button. It will fetch the users and go back to the landing page with all users, and hiding the button again.
  2. If it does not receive the setButtonTrigger it is being called from the landing page when rendered in order to fetch all users.

  Finally, a setTimeout on the promise is established just for showcasing purposes to show the skeleton when loading and fetching the data.
*/

export const fetchAndSetUsers = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  setButtonTrigger?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating delay to show skeleton
    const data = await UserService.getUsers();
    setUsers(data);
  } catch (error) {
    console.log(error, 'Failed to fetch users');
  } finally {
    setLoading(false);
    if (setButtonTrigger) {
      setButtonTrigger(false)
    }
  }
};