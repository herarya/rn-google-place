import React from 'react';
import {Provider} from 'react-redux';
import {Provider as AntProvider} from '@ant-design/react-native';
import Application from './navigators/Application';
import {store} from './redux/store';
import theme from './utils/theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AntProvider theme={theme}>
        <Application />
      </AntProvider>
    </Provider>
  );
};

export default App;
