import { ActionCreator } from 'redux';
import { LOGIN, LOGOUT, LoginAction, LogoutAction } from './types';

export const login: ActionCreator<LoginAction> = (payload: any) => ({
    type: LOGIN,
    payload
});

export const logout: ActionCreator<LogoutAction> = () => ({
    type: LOGOUT
});
