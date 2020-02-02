import { AuthState } from './auth';
import { configureStore } from './configureStore';

const { store, persistor } = configureStore();

export interface ApplicationState {
    auth: AuthState;
}

export * from './configureStore';

export { store, persistor };
