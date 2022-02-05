import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './login.css';

import App from './App';
import UserInterface from './UserInterface';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/host" element={<App/>}/>
      <Route path="/" element={<UserInterface/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
