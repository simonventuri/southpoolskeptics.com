# South Pool Skeptics CMS

This project is a Content Management System (CMS) for the South Pool Skeptics website. It allows users to manage content related to science, skepticism, and critical thinking.

## Project Structure

The project is organized as follows:

```
southpoolskeptics-cms
├── src
│   ├── components
│   │   ├── Header.tsx        # Renders the site header with logo and title
│   │   ├── Footer.tsx        # Renders the footer with copyright information
│   │   └── MainContent.tsx   # Wrapper for the main content, includes routing logic
│   ├── pages
│   │   ├── Home.tsx          # Displays home page content
│   │   ├── Skepticism.tsx    # Presents information about scientific skepticism
│   │   └── Contact.tsx       # Provides contact information and a form
│   ├── styles
│   │   └── global.css        # Global CSS styles for the application
│   ├── utils
│   │   └── api.ts            # Utility functions for API calls
│   └── index.tsx             # Entry point of the application
├── public
│   └── logo.png              # Logo image used in the header
├── package.json               # Configuration file for npm
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Documentation for the project
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd southpoolskeptics-cms
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.