# GitHub Explorer

Welcome to **GitHub Explorer**! This web application is designed to provide an engaging and interactive way to explore GitHub user repositories. Leveraging the Official GitHub API, GitHub Explorer offers a seamless experience for discovering and browsing repositories with a playful and detective-like aura.

Upon landing on the homepage, users are greeted with a curated list of anonymous profiles. To reveal the hidden identities and explore further details, users must click on a button, adding an element of discovery and intrigue to the browsing experience.

<div style="display: flex; flex-wrap: wrap; justify-content: center; margin-bottom: 2rem;">
    <img src="/src/assets/repo_pictures/repo_picture (1).png" alt="Image 1" style="width: 45%; margin: 5px;">
    <img src="/src/assets/repo_pictures/repo_picture (2).png" alt="Image 2" style="width: 45%; margin: 5px;">
    <img src="/src/assets/repo_pictures/repo_picture (4).png" alt="Image 3" style="width: 45%; margin: 5px;">
    <img src="/src/assets/repo_pictures/repo_picture (3).png" alt="Image 4" style="width: 45%; margin: 5px;">
</div>

## Watch the Videos

- [Click here to watch a demo](https://drive.google.com/file/d/13PSzdFXJ14IiBuW-C7zZA1ZeFDkDxRYW/view?usp=drive_link)
- [Click here to watch an overview of the project's architecture](https://drive.google.com/file/d/14Sbyv2Ztf2crcJPT8H_2frHbPEA-YeS-/view?usp=drive_link)

## 🚀 Getting Started

To get started with GitHub Explorer, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/MVST-Task.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd MVST-Task
    ```
3. **Install dependencies:**
    ```bash
    pnpm install
    ```
4. **Run the development server:**
    ```bash
    pnpm dev
    ```

## 💻 Technologies Used

### Frontend:
- **[React.js](https://reactjs.org/)**: Building user interfaces with component-based architecture.
- **[React Router DOM](https://reactrouter.com/)**: Navigation and routing within the React application.
- **[React Hook Form](https://react-hook-form.com/)**: Managing forms with easy-to-use hooks for validation.
- **[FontAwesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)**: Library of icons for visual elements.
- **[React Confetti](https://www.npmjs.com/package/react-confetti)**: Fun visual effect for celebrations or interactions.
- **[Storybook](https://storybook.js.org/)**: Development environment for UI components to build, test, and document components in isolation.

### API Handling:
- **[Axios](https://axios-http.com/)**: Making HTTP requests to interact with the GitHub API for fetching data.

### Date Management:
- **[date-fns](https://date-fns.org/)**: Utility functions for manipulating and formatting dates.

### Environment Variables:
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Managing environment variables to keep sensitive information separate.

### Development Tools:
- **[TypeScript](https://www.typescriptlang.org/)**: Adding static types to JavaScript for improved development experience and code reliability.
- **[Vite](https://vitejs.dev/)**: Fast development server supporting modern JavaScript features and quick refresh times.

## 🌈 Future Enhancements

As GitHub Explorer continues to evolve, potential upgrades include:

- **User Authentication:** Implement secure login and authentication using bcrypt and JWT tokens. Handle user data and authorization through a `userReducer`, supporting functionalities like login/logout and utilizing JWT tokens stored in cookies.

- **User Interaction:** Enable users to follow/unfollow profiles and save preferences. Logged-in users should be able to interact with profiles, follow/unfollow them, and manage their list of followed profiles.

## 📝 Documentation and Best Practices

### Naming Conventions
- **Custom Hooks:** Use camelCase.
- **Component Folders:** Start with an initial capital letter.
- **Action Functions:** Use camelCase.

### Import Order
1. **React imports**
2. **Library imports**
3. **Shared component imports**
4. **Component imports**
5. **Service imports**
6. **Hook imports**
7. **Util imports**
8. **Interface imports**
9. **Icon imports**

### Component-Specific Imports
- Follow the same import order within individual components.

### Clickable Imports
- Configure routes in `ts.config.json` and add aliases in `vite.config.ts` for cleaner imports (e.g., `@` instead of `../../../`).

### Clean Code Practices
- **Separation of Concerns:** Separate components, functions in utils, and keep components small for easier testing and reusability.
- **API Requests:** Keep API requests separated, use custom hooks to handle them, and implement error handling with try/catch blocks.
- **Best Practices:** Demonstrate familiarity with services and custom hooks, ensuring scalability and reusability in larger applications.
