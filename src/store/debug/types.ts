import { Action } from 'redux';

export interface DebugState {
    mockAPI: boolean;
    mockData: boolean;
    disableTimeCheck: boolean;
}

export const APIMOCKSWITCH = 'APIMOCKSWITCH';
export interface ApiMockSwitchAction extends Action {
    type: typeof APIMOCKSWITCH;
}

export const DATAMOCKSWITCH = 'DATAMOCKSWITCH';
export interface DataMockSwitchAction extends Action {
    type: typeof DATAMOCKSWITCH;
}

export const DISABLETIMECHECKSWITCH = 'DISABLETIMECHECKSWITCH';
export interface DisableTimeCheckSwitchAction extends Action {
    type: typeof DISABLETIMECHECKSWITCH;
}

export type DebugActions =
    | ApiMockSwitchAction
    | DataMockSwitchAction
    | DisableTimeCheckSwitchAction;
