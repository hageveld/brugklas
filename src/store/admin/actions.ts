import { ActionCreator } from 'redux';
import {
    LOGIN,
    UPDATEDATA,
    REMOVEENTRY,
    LOGOUT,
    UPDATECONTACTED,
    CHANGEPASSWORD,
    LoginAction,
    UpdateDataAction,
    RemoveEntryAction,
    LogOutAction,
    UpdateContactedAction,
    ChangePasswordAction
} from './types';

export const login: ActionCreator<LoginAction> = (
    email: string,
    password: string,
    name: string
) => ({
    type: LOGIN,
    email,
    password,
    name
});

export const updateData: ActionCreator<UpdateDataAction> = (stats: any, entries: any) => ({
    type: UPDATEDATA,
    stats,
    entries
});

export const removeEntry: ActionCreator<RemoveEntryAction> = (id: string) => ({
    type: REMOVEENTRY,
    id
});

export const logout: ActionCreator<LogOutAction> = () => ({
    type: LOGOUT
});

export const updateContacted: ActionCreator<UpdateContactedAction> = (
    id: string,
    contacted: boolean
) => ({
    type: UPDATECONTACTED,
    id,
    contacted
});

export const changePassword: ActionCreator<ChangePasswordAction> = (password: string) => ({
    type: CHANGEPASSWORD,
    password
});
