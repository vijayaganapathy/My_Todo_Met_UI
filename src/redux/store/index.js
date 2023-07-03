
import { createStore } from "redux";
import rootReducer from "../reducers/todoReducer"
const store = createStore(rootReducer);
export default store;

// import { createStore } from "redux";
// import rootReducer from '../reducers'

// const store = createStore(
//     rootReducer
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//  export default store