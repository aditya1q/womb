import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import WombContext from './Context/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <WombContext>
    <App />
  </WombContext>,
)
