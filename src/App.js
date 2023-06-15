import React from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from './Screens/LoginScreen';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route exact path='/home' element={<HomeScreen />} />
          <Route exact path='/' element={<Login />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;

