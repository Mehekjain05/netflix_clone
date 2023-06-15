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
  const user = null;
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className='app'>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/test' element={<h1>Hello world</h1>} />
          </Routes>
        </div>
      )}

    </Router>
  );
}

export default App;

