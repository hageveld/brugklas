import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/store';
import { ConfigProvider } from 'antd';
import MetaData from '../src/components/MetaData';

const wrapRootElement = ({ element }) => {
    return (
        <Fragment>
            <MetaData />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ConfigProvider>{element}</ConfigProvider>
                </PersistGate>
            </Provider>
        </Fragment>
    );
};

export default wrapRootElement;
