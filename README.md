# Project Description

Welcome to GitHub Explorer! This web application is crafted with the purpose of exploring GitHub user repositories in an engaging and interactive manner. Leveraging the Official GitHub API, GitHub Explorer provides a seamless experience for discovering and browsing repositories.

GitHub Explorer has been imbued with a playful and detective-like aura to enhance user interaction. Upon landing on the homepage, users are greeted with a curated list of anonymous profiles. To reveal the hidden identities and explore further details, users must click on a button, adding an element of discovery and intrigue to the browsing experience.


## 🛠️ Installation

To get started with Blend Beyond, follow these steps:

1. Clone the repository:
  git clone https://github.com/your-username/MVST-Task.git

2. Navigate to the project directory:
  cd MVST-Task

3. Install dependencies:
  pnpm install (npm, yarn...)

4. Run the server:
  pnpm dev (npm, yarn...)


## 💻 **Technologies Used**

### Frontend:
- **React.js**: Used for building the user interface with component-based architecture.
- **React Router DOM**: Handles navigation and routing within the React application.
- **React Hook Form**: Manages forms in React with easy-to-use hooks for validation.
- **FontAwesome (react-fontawesome)**: Provides a library of icons used for visual elements.
- **React Confetti**: Adds a fun visual effect like confetti for celebrations or user interactions.

### API Handling:
- **Axios**: Used for making HTTP requests to interact with the GitHub API for fetching data.

### Date Management:
- **date-fns**: Provides date utility functions for manipulating and formatting dates in the application.

### Environment Variables:
- **dotenv**: Manages environment variables to keep sensitive information separate from the codebase.

### Development Tools:
- **TypeScript**: Used to add static types to JavaScript for improved development experience and code reliability.
- **Vite (development server)**: Provides a fast development server that supports modern JavaScript features and quick refresh times during development.


## 🌈 **Future Enhancements**

As GitHub Explorer continues to evolve, potential upgrades include:

- **User Authentication:** Implement secure login and authentication using bcrypt and JWT tokens. Handle user data and authorization through a `userReducer`, supporting functionalities like login/logout and utilizing JWT tokens stored in cookies.

- **User Interaction:** Enable users to follow/unfollow profiles and save preferences. Once logged in, users should have the ability to interact with fetched profiles, follow or unfollow them, and manage their list of followed profiles.


## 📝 Documentation and Good Practices

### Naming Conventions
- **Custom Hooks:** Use camelCase for custom hooks.
- **Component Folders:** Initial capital letter for component folders and names.
- **Action Functions:** Use camelCase for action functions.

### Import Order
- **File Imports:** Organize imports in the following order:
  1. React imports
  2. Libraries imports
  3. Shared components imports
  4. Components imports
  5. Services imports
  6. Hooks imports
  7. Utils imports
  8. Interfaces imports
  9. Icons imports

### Component-Specific Imports
- **Component Imports:** Follow the same import order as above within individual components.

### Clickable Imports
- **Setting Routes:** Configure routes in `ts.config.json` and add aliases in `vite.config.ts` for cleaner imports (`@` instead of `../../../`).

### Clean Code Practices
- **Separation of Concerns:** Separate components, functions in utils, and keep components as small as possible for easier testing and reusability.
- **API Requests:** Keep API requests separated, use custom hooks to handle them, and implement error handling with try/catch blocks.
- **Good Practices:** While not necessary for a small app, these practices demonstrate familiarity with services and custom hooks, ensuring scalability and reusability in larger applications.