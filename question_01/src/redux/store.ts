import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import postsReducer from './reducer.ts';


export const store =  createStore(
    postsReducer,
    applyMiddleware(thunk)
);

export type AppDispatch = typeof store['dispatch']