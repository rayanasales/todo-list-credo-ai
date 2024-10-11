# Todo List App

A simple Todo List built with **React** (functional components + hooks).

## Features

- **Add Tasks**: Input field to add new tasks to the list.
- **Mark as Complete**: Each task can be marked as complete, which strikes through the text.
- **Undo Completion**: Tasks marked as complete can be toggled back to incomplete.
- **Remove Tasks**: Tasks can be removed from the list.
- **Interactive Buttons**: Hover effects on buttons for better user experience.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rayanasales/todo-react-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-react-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## File Structure

```
/TODO-LIST-CREDO-AI
│
├── /src
│   ├── /components
│   │   └── TodoItem.js  # Renders individual todo items
│   └── App.js           # Manages the app state and todo logic
│
├── index.js             # Main entry point
└── App.css              # Styles for the app
```

## Improving Performance with React-virtual for Large Lists

For handling large lists efficiently in React, **windowing** is a technique that only renders the visible portion of the list, improving performance. This prevents the browser from rendering unnecessary items, reducing memory consumption and improving rendering speed.

**react-virtual** is a library that implements this technique. Here's how it works:

- **Windowing**: Instead of rendering the entire list, only the items currently visible in the viewport are rendered. As the user scrolls, the library renders new items and discards items that are no longer visible.
- **Virtualization**: This approach significantly improves performance, especially when dealing with large datasets, by avoiding the DOM overhead caused by rendering thousands of elements at once.
- **Variable Size Support**: react-virtual can handle lists or grids with varying item heights or widths, adjusting what needs to be rendered dynamically.
- **Grid Support**: Besides lists, react-virtual can also efficiently handle grid-based layouts, virtualizing both rows and columns.

### Real-World Usage:

In a real application, if you are displaying thousands of tasks in your Todo list or working with large datasets (e.g., product catalogs, search results), react-virtual ensures that the app remains fast and responsive, even with heavy data loads. By using this library, the rendering process is optimized for scrolling performance, and memory usage is minimized.

For more complex scenarios, **react-virtual** can be combined with dynamic list heights or responsive grid layouts, providing both performance and flexibility in your app.
