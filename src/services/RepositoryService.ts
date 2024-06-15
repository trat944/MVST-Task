import axios from "axios"
import { Repository } from "../interfaces/repository";

const  VITE_BASE_URL  = 'https://api.github.com'

export class RepositoryService {
  static async getRepositoriesFromUser(username: string): Promise<Repository[]> {
    try {
      const response = await axios.get(`${VITE_BASE_URL}/users/${username}/repos`);
      return response.data;
    } catch (error) {
      console.log(error, 'Failed to fetch repositories in service');
      return [];
    }
  }
}