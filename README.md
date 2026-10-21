# Dev Stack Builder

Project Description:

Dev Stack Builder is a responsive web application that allows developers to explore different technologies and build their own technology stack. Users can browse technology cards, select their favorite tools, and manage their selected stack easily.

Technologies Used:
- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React
- React Toastify
- JSON

Features:
1.Explore Technologies: Browse technologies with their descriptions, categories, ratings, and difficulty levels.
2.Build Your Stack: Add technologies to a personal stack while preventing duplicate selections.
3.Manage Your Stack: Remove individual technologies, clear the entire stack, and receive toast notifications for actions.


Questions and Answers:

1. What is JSX, and why is it used in React?

-> JSX is a syntax that that allow to write html and css inside javascript which is used by react to render ui and perform js expressions at the same time.

2. What is the difference between props and state?

-> Props are the data that are passed from the parent component and received by the child component to use where a state holds the data that may change overtime so that re-rendering can be done.

3. What does the `useState` hook do, and where did you use it in this project?

-> useState hook hold the data that maybe changed and as soon as the data holded by the hook changes the hook performes re-render on those locations where the changed data are used.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

-> useEffect hook handles side effect like fetching data form the api without affecting the other part from rendering.As soon as the data are ready useEffect hook renders them seamlessly without affecting the ohter rendered data.

5. Why does every item in a `.map()` list need a unique `key` prop?

-> a unique key is needed to distinguish each item in a list separately.

6. What is conditional rendering? Show one place you used it

-> Conditinal rendering used to render something based on a condition like in my project i used conditional rendering to the add to stack button content if the button e pressed once then the content of the button chnaged to added to stack.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
-> Data can be passed from the parent to child using the Props and a child can send data back to parent by  calling a function with parameters that was passed to child as a Prop.