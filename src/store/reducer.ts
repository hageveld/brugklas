import { combineReducers } from 'redux';
import { ApplicationState } from './index';
import { authReducer, AuthActions } from './auth';

export type ApplicationActions = AuthActions;

const rootReducer = combineReducers<ApplicationState>({
    auth: authReducer
});

export default rootReducer;
