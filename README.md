# Template REACT project using REDUX

### To Start The Project
1. RUN npm install
2. RUN npm start (to start in development mode)

it will run in default port 3000

Local:            http://localhost:3000
On Your Network:  http://192.168.1.8:3000

to change name of this project change "name" in package.json and package-lock.json

## Step for Develop in this project

1. all redux related code that you created put it in './src/state' folder
2. create reducer( if needed) in reducer folder and add new reducer to 'store' in './src/state/reducers/index.ts'
3. add new 'action-types-string' into enum in './src/state/action-types/index.ts', no need to add new enum just add in there.
4. add new action types for typescript type in './src/state/actions' and add it to index.ts if in separate file.
5. add new action-creators function for calling dispatch to send it to reducers using.

## Step to use it
1. to start the actions use hooks called useAction in hooks folder

example to use action 'searchRepositories':

```javascript
const allRegisteredActions = useActions();

// for using searchRepositories action
allRegisteredActions.searchRepositories(param1);
```

2. to called state in redux store to use in our component use hooks called 'useTypedSelector' in hooks folder

example to call state repositories :

```javascript
const repositoryState = useTypedSelector(
    (state) => state.repositories
  );
```




