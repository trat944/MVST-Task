import axios from "axios"

const { VITE_BASE_URL } = import.meta.env

export class UserService {
  static async getUsers() {
    try {
      const response = await axios.get(`${VITE_BASE_URL}/users`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async getSingleUser(username: string) {
    try {
      const response = await axios.get(`${VITE_BASE_URL}/users/${username}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
