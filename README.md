Absolutely! Here's the README file for your `react-project-management` project, translated into English and formatted with Markdown, ready for your GitHub repository.

---

# react-project-management

## 🧩 React Project Manager

A simple application for managing projects and tasks, built with **React 19**, utilizing `useState` for state management and **Tailwind CSS** for styling.

---

## ⚙️ Tech Stack

- **React 19**
- **Vite** — A fast build tool and dev server.
- **Tailwind CSS** — Utility-first CSS framework for rapid styling.
- **TypeScript (Partial)** — Types are integrated, but the project is primarily written in JavaScript.
- **UUID** — For generating unique identifiers for tasks and projects.

---

## 📂 Structure and Logic

The application consists of the following key components:

- **ProjectSidebar** — Displays the list of projects.
- **NoProjectSelected** — A placeholder screen shown when no project is selected.
- **NewProject** — The form for adding a new project.
- **SelectedProject** — Displays the tasks of the currently selected project.

All state management logic is implemented within a single **ProjectsPage** component using `useState` hooks.

---

## 📦 Installation

To set up and run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/go-doc-web/react-project-management.git
    cd react-project-management
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will typically be available at `http://localhost:5173` (or another port indicated in your console).

---

## 💡 Features

- Adding/removing projects.
- Selecting the current project.
- Adding/removing tasks within the selected project.
- Simple routing via conditional rendering (without React Router).
- Unique identifiers for projects and tasks using UUID.
- State managed entirely with `useState` (no backend involved).

---

## 📄 Scripts

| Script            | Purpose                                   |
| :---------------- | :---------------------------------------- |
| `npm run dev`     | Runs the application in development mode. |
| `npm run build`   | Builds the project for production.        |
| `npm run preview` | Previews the production build.            |
| `npm run lint`    | Runs ESLint for code quality checks.      |

---

## 📌 Notes

- The application uses a `projectState` object to store:
  - The currently selected project.
  - The list of all projects.
  - The list of all tasks.
  - The current view (e.g., adding a project, viewing a project, etc.).
- View management is handled manually via `currentView`, rather than using routing libraries or navigation.

---
