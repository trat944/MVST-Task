import axios from "axios"
import { Repository } from "../interfaces/repository";

const { VITE_BASE_URL } = import.meta.env

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