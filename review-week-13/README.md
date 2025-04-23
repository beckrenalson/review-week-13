# Healthy Eating App

A simple React application for tracking your daily fruit consumption and receiving positive encouragement.

## Features

- Track eating habits with a simple interface
- Get positive messages as you reach your daily goals

### Tips:
- All the above (2 and 3) needs to be done in the in the new component.
- If you get stuck you can check documentation online eg. on https://react.dev


# Tasks

1. Add two new fruits to the list Orange and Banana. (1 Mark)

2. Add a new component in the application to display a positive message. (1 Mark)

3. This new component is a feedback mechanism that provides motivational messages to users based on their progress toward a daily fruit consumption goal. Specifically, it:

Takes two props: (1 Mark)
`goal`: A number representing the target amount of fruits to eat, which is `5`. (1 Mark)
`totalFruits`: A number representing how many fruits the user has eaten so far. (1 Mark)

Manages a message state that changes based on the user's progress:
- Has a useState variable `message` (1 Mark)
- When the user hasn't reached their goal, it shows `"Keep going! X to go!"` where X is the difference between the goal and current `totalFruits`  (1 Mark)
- When the user reaches or exceeds their goal, it displays a congratulatory message: `"🎉 Congratulations! You reached your goal!"`  (1 Mark)
- Initially shows `"Let's start eating healthy!"` as a default message (1 Mark)
- Use the `useEffect` hook to update this message whenever either the totalFruits count or the goal changes (5 Marks)
- Renders a UI section that displays: (1 Mark)
- The daily goal number, the current progress (totalFruits), the motivational message, it serves as a simple but effective way to encourage users to continue healthy eating habits by providing real-time feedback on their progress.

A starting point for some code in the component:

```
return (
    <div style={{ marginTop: '20px' }}>
      <h2>Daily Goal: {goal}</h2>
      <p>Progress: {totalFruits}</p>
      <p><strong>{message}</strong></p>
    </div>
);
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Locally preview the production build.

## Current Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── FruitItem.jsx     # Individual fruit tracking with useState
│   │   └── FruitList.jsx     # Renders list of FruitItem components
│   ├── App.jsx               # Main component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML entry point
└── vite.config.js            # Vite configuration
```