# Pseudocode – TabViews

## Project setup 

1. Install dependencies:

   - `yarn add react-redux redux redux-thunk`
   - `yarn add antd axios`
   - `yarn add node-sass` for SCSS support

2. Create Redux structure:

   - `redux/actions/userActions.js`
   - `redux/reducers/userReducer.js`
   - `redux/store.js`

3. Create a reusable tabs UI using AntD's `<Tabs>` component.

---

## 📁 Tab 1 – Google/Wikipedia Iframe

- Create component: `TabOneContent.js`
- Render an `<iframe>` with any site that allows embedding (Google blocks it)
- Use placeholder like: `https://en.wikipedia.org`

---

## 📁 Tab 2 – Button to Navigate + API Fetch

- Create component: `TabTwoContent.js`
- Add a button: "Go to Tab 3 and Load Users"
- On button click:
  1. Dispatch Redux action to fetch users from: `https://reqres.in/api/users?page=1`
  2. Programmatically switch to Tab 3 (update tab key)

---

## 📁 Tab 3 – Recursive Print + Show Fetched Users

- Create component: `TabThreeContent.js`
- Input: Accept a number
- Button: "Print Hello Task"

### On Click:

- Use a **recursive function**:
  - Print "Hello Task" that many times
  - Then print "STOP" once
- Display API user data from Redux store

---

## 📦 Redux Flow

1. `userActions.js`

   - Create `fetchUsers()` function using Axios + Thunk
   - Dispatch: `FETCH_USERS_REQUEST`, `FETCH_USERS_SUCCESS`, `FETCH_USERS_FAILURE`

2. `userReducer.js`

   - Handle loading, success, and error states
   - Store `users` in state

3. `userSelectors.js`
   - Selector: `selectUsers`, `selectIsLoading`, `selectError`

---

## 🎨 SCSS Styling

- Create: `styles/tabs.scss`
- Style each tab view with SCSS classes
- Import SCSS into components

---

## 📋 Output Summary

- ✅ Tab 1: Static iframe view
- ✅ Tab 2: API + Navigation button
- ✅ Tab 3: Dynamic recursive output + fetched user list

---
