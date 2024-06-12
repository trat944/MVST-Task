import { useEffect } from 'react';
import './landingPage.css'
import { UserService } from '../../services/UserService';
import { RepositoryService } from '../../services/RepositoryService';

export const LandingPage = () => {

  useEffect(() => {
    const callPetitions = async () => {
      await Promise.all([
        UserService.getSingleUser('mojombo'),
        UserService.getUsers(),
        RepositoryService.getRepositoriesFromUser('mojombo')
    ])
    }
    callPetitions()
  }, [])

  return (
    <div>wdwdqd</div>
  )
};