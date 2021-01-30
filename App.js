import React from 'react';

import Routes from './src/routes';

import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </PersistGate>
    </Provider>
  );
}

export default App;
