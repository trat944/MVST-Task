import axios from "axios"

const { VITE_BASE_URL } = import.meta.env

export class RepositoryService {
  static async getRepositoriesFromUser(username: string) {
    try {
      const response = await axios.get(`${VITE_BASE_URL}/users/${username}/repos`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}