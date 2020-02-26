import { Action } from 'redux';

export interface AdminState {
    isLoggedIn: boolean;
    email?: string;
    password?: string;
    name?: string;
    entries: any;
    stats: any;
    updated: number;
}

export const LOGIN = 'LOGIN';
export interface LoginAction extends Action {
    type: typeof LOGIN;
    email: string;
    password: string;
    name: string;
}

export const UPDATEDATA = 'UPDATE_DATA';
export interface UpdateDataAction extends Action {
    type: typeof UPDATEDATA;
    entries: any;
    stats: any;
}

export const REMOVEENTRY = 'REMOVE_ENTRY';
export interface RemoveEntryAction extends Action {
    type: typeof REMOVEENTRY;
    id: string;
}

export const LOGOUT = 'LOGOUT';
export interface LogOutAction extends Action {
    type: typeof LOGOUT;
}

export const UPDATECONTACTED = 'UPDATE_CONTACTED';
export interface UpdateContactedAction extends Action {
    type: typeof UPDATECONTACTED;
    id: string;
    contacted: boolean;
}

export const CHANGEPASSWORD = 'CHANGE_PASSWORD';
export interface ChangePasswordAction extends Action {
    type: typeof CHANGEPASSWORD;
    password: string;
}

export type AdminActions =
    | LoginAction
    | UpdateDataAction
    | RemoveEntryAction
    | LogOutAction
    | UpdateContactedAction
    | ChangePasswordAction;
