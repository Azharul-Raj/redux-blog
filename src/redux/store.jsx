import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import readCounter from './middleware/readCounter';
import { contentReducer } from './reducers/contentReducer';

export const store=createStore(contentReducer,composeWithDevTools(applyMiddleware(thunk,readCounter)))