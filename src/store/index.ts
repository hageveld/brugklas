import { DebugState } from './debug';
import { configureStore } from './configureStore';

const { store, persistor } = configureStore();

export interface ApplicationState {
    debug: DebugState;
}

export * from './configureStore';

export { store, persistor };
