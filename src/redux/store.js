import {createStore, applyMiddleware, combineReducers} from 'redux';
import filmReducer from './films/filmReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    filmReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;