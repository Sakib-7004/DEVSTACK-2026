# Dev Stack 🧱

Dev Stack is a beginner-friendly React website where users can explore popular development technologies and build a personal technology stack.

The project follows the provided Dev Stack assignment UI and requirements. It uses simple React concepts such as components, props, state, `useState`, `useEffect`, event handling, conditional rendering, array methods, JSON data fetching, and React Toastify.

## Live Features

- Browse 12 development technologies loaded from a JSON file.
- Add technologies to a personal stack and remove them individually or all at once.
- Get toast messages for add, duplicate, remove, and remove-all actions.
- Responsive layout for desktop, tablet, and mobile screens.

## Technologies Used

- React.js
- JavaScript (ES6+)
- JSX
- CSS
- JSON
- Vite
- React Toastify
- Simple Icons CDN for technology icons

## How to Run

```bash
npm install
npm run dev
```

Then open the local address shown by Vite in the terminal.

## Project Structure

```text
devstack-2026/
├── public/
│   ├── assets/
│   │   ├── banner-stack.png
│   │   ├── hamburger.png
│   │   ├── logo-text.png
│   │   ├── full(1).png
│   │   ├── YourStack-with.png
│   │   └── YourStack-without.png
│   └── technologies.json
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── StackPanel.jsx
│   │   └── TechnologyCard.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like elements inside JavaScript. React uses JSX to make UI code easier to read and write.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change while the app is running.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` creates state in a React component. I used it for the technology list, selected stack, loading status, and mobile menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to fetch the technology JSON file when the app starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the key to identify each item in a list. A unique key helps React update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. In this project, the stack panel shows an empty message when `selectedStack.length` is zero and shows stack items when it has data.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through props. The parent can also pass a function as a prop, and the child can call that function to send an action or data back to the parent.

## Assignment Notes

- No lorem ipsum text is used.
- Technology data is loaded from `public/technologies.json`, not hardcoded inside the card component.
- The main brand gradient is stored in one CSS variable: `--gradient`.
- The layout is responsive for desktop, tablet, and mobile.
- The implementation intentionally uses simple beginner-level React patterns rather than advanced state libraries or complex abstractions.
