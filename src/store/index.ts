import { DebugState } from './debug';
import { AdminState } from './admin';
import { configureStore } from './configureStore';

const { store, persistor } = configureStore();

export interface ApplicationState {
    debug: DebugState;
    admin: AdminState;
}

export * from './configureStore';

export { store, persistor };
