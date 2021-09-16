import {createStore,applyMiddleware,combineReducers} from "redux";
import counter_reducer from './reducers/count_reducer'
import person from "./reducers/person";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

const all_reducer=combineReducers({
 count:counter_reducer,
 persons:person
})

 export default createStore(all_reducer,composeWithDevTools(applyMiddleware(thunk)))