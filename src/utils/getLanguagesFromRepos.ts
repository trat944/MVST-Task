import { Repository } from "@interfaces/repository";

/*In this function, we get all the repositories from the user, and then;
  1. We initialise an empty array to store all languages.
  2. We iterate through the repositories.
  3. If the language of the repository is not present already in the array, we include it.
*/
export const getLanguages = (
  repositories: Repository[],
  setLanguagesOfRepos: React.Dispatch<React.SetStateAction<string[]>>
) => {
  try {
    let languages: string[] = [];
    repositories.forEach(repo => {
      if (repo.language && !languages.includes(repo.language)) {
        languages.push(repo.language);
      }
    });
    setLanguagesOfRepos(languages)
  } catch (error) {
    console.log(error, 'Failed to select repository languages')
  }
}