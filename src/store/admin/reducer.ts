import { Reducer } from 'redux';
import {
    LOGIN,
    UPDATEDATA,
    REMOVEENTRY,
    LOGOUT,
    UPDATECONTACTED,
    CHANGEPASSWORD,
    AdminActions,
    AdminState
} from './types';

const INITIAL_STATE: AdminState = {
    isLoggedIn: false,
    entries: [],
    stats: {},
    updated: 0
};

export const reducer: Reducer<AdminState, AdminActions> = (
    state = INITIAL_STATE,
    action
): AdminState => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                email: action.email,
                password: action.password,
                name: action.name
            };
        case UPDATEDATA:
            return {
                ...state,
                entries: action.entries,
                stats: action.stats,
                updated: Date.now()
            };
        case REMOVEENTRY:
            return {
                ...state,
                entries: state.entries.filter((entry: any) => entry.id !== action.id)
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                entries: [],
                stats: {},
                updated: 0,
                email: undefined,
                password: undefined,
                name: undefined
            };
        case UPDATECONTACTED:
            return {
                ...state,
                entries: state.entries.map((entry: any) => {
                    if (entry.id.toString() === action.id) {
                        entry.gecontacteerd = action.contacted ? '1' : '0';
                    }
                    return entry;
                })
            };
        case CHANGEPASSWORD:
            return {
                ...state,
                password: action.password
            };
        default:
            return state;
    }
};
