import { User } from "../interfaces/user";
import { UserService } from "../services/UserService";

export const fetchingAndSettingUsers = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  setButtonTrigger?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay
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