# question 01

"Describe the process, in a react/redux project, to fetch a set of data from a remote API endpoint, then to store that data into redux and then to present it on the screen.
"

- install redux dependencies like redux, react-redux and redux-thunk
- add action types as constants for loading, error and data
- add actions as function to wrap the action type and payload
- add a reducer to take care of any possible action (default can return state or throw an error)
- define a redux with the reducer and redux-thunk as middleware
- wrap the application in a provider component with the store as prop
- use react-redux hooks to dispatch actions and retrieve the state from the store

to run the example simply run:

```
npm install

npm run dev
```

