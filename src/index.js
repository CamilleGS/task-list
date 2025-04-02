import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './home';
import MyRoutes from  "./routes"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <><MyRoutes/><App /></>);


