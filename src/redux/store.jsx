import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { contentReducer } from './reducers/contentReducer';

export const store=createStore(contentReducer,composeWithDevTools(applyMiddleware(thunk)))