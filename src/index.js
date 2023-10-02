import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import stor from './reducers/index';
import { createStore } from 'redux';
import HomePage from './components/HomePage/HomePage';
import './bootstrap/css/bootstrap.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(stor);
root.render(

  <React.StrictMode>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <Provider store={store}>

      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate replace to={'/HomePage'} />} />
          <Route exact path="/HomePage" element={<HomePage />} />

        </Routes>


      </Router>

    </Provider>
  </React.StrictMode>
)