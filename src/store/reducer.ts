import { combineReducers } from 'redux';
import { ApplicationState } from './index';
import { debugReducer, DebugActions } from './debug';

export type ApplicationActions = DebugActions;

const rootReducer = combineReducers<ApplicationState>({
    debug: debugReducer
});

export default rootReducer;
