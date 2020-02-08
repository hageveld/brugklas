import { Reducer } from 'redux';
import {
    APIMOCKSWITCH,
    DATAMOCKSWITCH,
    DISABLETIMECHECKSWITCH,
    DebugActions,
    DebugState
} from './types';

const INITIAL_STATE: DebugState = {
    mockAPI: false,
    mockData: false,
    disableTimeCheck: false
};

export const reducer: Reducer<DebugState, DebugActions> = (
    state = INITIAL_STATE,
    action
): DebugState => {
    switch (action.type) {
        case APIMOCKSWITCH:
            return {
                ...state,
                mockAPI: !state.mockAPI
            };
        case DATAMOCKSWITCH:
            return {
                ...state,
                mockData: !state.mockData
            };
        case DISABLETIMECHECKSWITCH:
            return {
                ...state,
                disableTimeCheck: !state.disableTimeCheck
            };
        default:
            return state;
    }
};
