import React from 'react';
import {Provider} from 'react-redux';
import Application from './navigators/Application';
import {store} from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
};

export default App;
