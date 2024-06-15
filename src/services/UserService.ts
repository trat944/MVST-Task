import axios from "axios"
import { User } from "../interfaces/user";
import { UserSpecific } from "../interfaces/userSpecific";

const  VITE_BASE_URL  = 'https://api.github.com'

export class UserService {
  static async getUsers(): Promise<User[]> {
    try {
      const response = await axios.get(`${VITE_BASE_URL}/users`);
      return response.data;
    } catch (error) {
      console.log(error, 'Failed to fetch users in service');
      return [];
    }
  }
  static async getSingleUser(username: string): Promise<UserSpecific | undefined> {
    try {
      const response = await axios.get(`${VITE_BASE_URL}/users/${username}`);
      return response.data;
    } catch (error) {
      console.log(error, 'Failed to fetch user in service');
    }
  }
}
