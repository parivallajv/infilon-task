# Tab Views App

This is a React app with a tab layout where each tab shows a different feature. It uses Redux Thunk for state management, Ant Design for UI components, and SCSS for styling. The app includes reusable components, a recursive function example, and user data fetching from an API.

## Tech Stack

- **ReactJS**
- **Redux with Thunk**
- **Ant Design (AntD)**
- **SCSS**
- **JavaScript (ESLint Configured)**

---

## Features

### 🔹 Tab 1 – Google iFrame

_Displays an iframe intended to show Google (Note: Google blocks iframe embedding by default due to security policies)._

### 🔹 Tab 2 – API Integration + Navigation

_Fetches user data from the public API `https://reqres.in/api/users?page=1` and displays users in AntD cards._  
_Includes a button that navigates to Tab 3._

### 🔹 Tab 3 – Recursive Task Runner

_Accepts a number input from the user and recursively prints `Hello Task` that many times followed by `STOP`._  
_Uses a recursive JavaScript function and responsive UI via AntD._

---

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/parivallajv/infilon-task.git
cd infilon-task
yarn install
```
