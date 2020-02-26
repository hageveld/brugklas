import { combineReducers } from 'redux';
import { ApplicationState } from './index';
import { debugReducer, DebugActions } from './debug';
import { adminReducer, AdminActions } from './admin';

export type ApplicationActions = DebugActions | AdminActions;

const rootReducer = combineReducers<ApplicationState>({
    debug: debugReducer,
    admin: adminReducer
});

export default rootReducer;
