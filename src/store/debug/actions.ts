import { ActionCreator } from 'redux';
import {
    APIMOCKSWITCH,
    DATAMOCKSWITCH,
    DISABLETIMECHECKSWITCH,
    ApiMockSwitchAction,
    DataMockSwitchAction,
    DisableTimeCheckSwitchAction
} from './types';

export const switchApiMock: ActionCreator<ApiMockSwitchAction> = () => ({
    type: APIMOCKSWITCH
});

export const switchDataMock: ActionCreator<DataMockSwitchAction> = () => ({
    type: DATAMOCKSWITCH
});

export const disableTimeCheck: ActionCreator<DisableTimeCheckSwitchAction> = () => ({
    type: DISABLETIMECHECKSWITCH
});
