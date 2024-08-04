import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from './constants/sidebar';
import RouterComponent from './router';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Sidebar />
    <RouterComponent />
  </BrowserRouter>
);

