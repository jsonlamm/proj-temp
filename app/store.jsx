import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))


// ///// pasted here:
// import { createStore, compse} from 'redux';
// import { syncHistoryWithStore} from 'react-router-redux';

// import { browserHistory} from 'react-router';

// // import the root reducers
// import rootReducer from './reducers/rootReducer';

// // getting the dummy data
// import comments from './data/comments';
// import posts from './data/posts';

// // create an object for the default data, initial state?
// const initialState = { // need a reducer for each part of state
//   posts,
//   comments
// }

// const store = createStore(rootReducer, initialState)

// // method 2:
// // export const history = syncHistoryWithStore(browserHistory, store)

// // export default store;


// // method 1:
// const history = syncHistoryWithStore(browserHistory, store)
// export {store, history};
