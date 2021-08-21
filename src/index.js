import React from 'react';
import reactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoContextProvider} from './context'

reactDOM.render(
  <TodoContextProvider>
      <App/>
  </TodoContextProvider>
  , document.getElementById('root')
);