# 🧪 Task 1: Simulate an API Call Using Promises

## 💡 Task Title: Build a Fake Data Fetcher

### 📝 Task Description

Create a simple JavaScript module that simulates fetching user data from an API. This exercise will help you understand how to work with Promises, handle asynchronous operations, and manage errors effectively.

---

### 🔧 Requirements

- Create a function `getUserData(userId)` that returns a Promise.
- Use `setTimeout` to simulate a delay (e.g., 1-2 seconds).
- Resolve with mock user data (e.g., name, email) if `userId` is valid (e.g., greater than 0).
- Reject with an error message if `userId` is invalid (e.g., 0 or negative).

---

### ✅ Implementation Goals

- Demonstrate usage of `.then()` and `.catch()` for handling Promises.
- Also, demonstrate usage of `async/await` syntax.
- Handle both success and error cases gracefully.
- Create a test script that runs `getUserData` with multiple user IDs (some valid, some invalid).

---

### 🔍 Bonus Challenge

- Add a function `getMultipleUsers([ids])` that fetches multiple users in parallel using `Promise.all`.
- Log messages to the console to indicate when each user's data starts fetching and when it finishes.

Example:
```js
console.log('Fetching user 1...');
setTimeout(() => {
  console.log('Finished fetching user 1');
}, 1000);
```

# 🧪 Task 2: Understand the JavaScript Event Loop

## 💡 Task Title: *"Who Runs First?" — Demystifying the Event Loop*

---

### 📝 Task Description

The goal of this task is to explore and understand how JavaScript’s **event loop**, **call stack**, **task queue**, and **microtask queue** work.  
You'll write a script that logs messages in a specific order — and then explain *why* that order happens.

---

### 🔧 Requirements

Create a JavaScript file (`eventLoop.js`) that includes:

- Synchronous `console.log()` statements.
- A `setTimeout()` with `0ms` delay.
- A resolved `Promise` with a `.then()` that logs a message.
- An `async` function that logs a message before and after an `await`.
- A `setTimeout()` with a longer delay (e.g., 100ms).
- A synchronous `for` loop or other blocking operation.

---

### 🧠 Starter Code Example

```js
console.log('1: Sync start');

setTimeout(() => {
  console.log('2: setTimeout 0ms');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Promise.then');
});

(async () => {
  console.log('4: async function start');
  await null;
  console.log('5: async after await');
})();

setTimeout(() => {
  console.log('6: setTimeout 100ms');
}, 100);

console.log('7: Sync end');
```

# 🧪 Task 3: Working with Arrays of Objects

## 💡 Task Title: *"Team Manager" — Add, Modify, and Sort Members*

---

### 📝 Task Description

You are given an array of team members represented as objects. Each object contains information about a person on your team.

Your task is to:

- Add new team members.
- Update existing members.
- Sort the team by specific properties.
- Use JavaScript array methods such as `map`, `filter`, `sort`, `find`, and `push`.

---

### 👤 Initial Data Structure

```js
const team = [
  { id: 1, name: 'Alice', role: 'Developer', age: 25 },
  { id: 2, name: 'Bob', role: 'Designer', age: 30 },
  { id: 3, name: 'Charlie', role: 'Manager', age: 35 },
];
```


# 🔍 Task 4: JavaScript Regular Expressions

## 💡 Task Title: *"Regex Detective" — Validate and Extract Info*

---

### 📝 Task Description

Your mission is to become a **Regex Detective** 👮‍♂️ and write functions that use regular expressions to validate and extract information from strings.

---

### ✅ Tasks

1. **Validate Email Addresses**  
   Write a function `isValidEmail(email)` that returns `true` if the email is valid, `false` otherwise.

2. **Extract Usernames from Emails**  
   Write `extractUsername(email)` that returns the part before the `@` in an email.
   ```js
   extractUsername("john.doe@example.com"); // "john.doe"

3  **Find All Hashtags in a Text**  
   Write `findHashtags(string)` findHashtags("Text with #tags and #regex"); // ["#tags", "#regex"]

# 🔍 Task 5: Work with localStorage and sessionStorage

### 💡 Task Title: *"Data Persistence Playground" — Add, Modify, and Remove Stored Items*

---

### 📝 Task Description

In this task, you will work with the **localStorage** and **sessionStorage** Web APIs to store and manipulate data in the browser. These two storage types allow you to persist data across sessions and pages. You will:

- **Add**, **Modify**, and **Remove** data stored in **localStorage** and **sessionStorage**.
- Implement functionality to interact with the stored data via buttons and input fields in a browser-based task manager.

---

### ✅ Tasks

1. **Store a Task in sessionStorage**  
   Write a function `addTaskToSession(task)` that stores a task in **sessionStorage**.  
   The task should be stored as a key-value pair where the key is `"task"` and the value is the task description.

2. **Store Multiple Tasks in localStorage**  
   Modify the task manager to store multiple tasks in **localStorage**.
	- Each task should be stored as an item in an array.
	- Store the entire array as a JSON string in localStorage under the key `"tasks"`.

3. **Edit a Task**  
   Write a function `editTaskInLocalStorage(taskId, newDescription)` that updates the description of a task stored in **localStorage**.

4. **Remove a Task**  
   Write a function `removeTaskFromLocalStorage(taskId)` that deletes a specific task from **localStorage** by its ID.

5. **Clear All Tasks**  
   Implement a button to clear all tasks from **localStorage**.

---

### 🔍 Bonus Challenge

- Implement a function that **loads tasks from localStorage** when the page is loaded and displays them in the task list.
- Use **sessionStorage** to keep track of the number of tasks added in the current session and display it at the top of the page.
- Add a filter to show either “**All Tasks**”, “**Completed**”, or “**Active**” tasks stored in localStorage.

---

### 💻 Example HTML Layout

```html
<input type="text" id="taskInput" placeholder="Enter task..." />
<button id="addTaskBtn">Add Task</button>
<button id="clearAllBtn">Clear All</button>
<ul id="taskList"></ul>
<p id="taskCount">Tasks in this session: 0</p>
