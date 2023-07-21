
import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import ViewList from './components/ViewList';
function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route >
          
          <Route index element={<Register />} />
          <Route path="landingPage" element={<LandingPage />} />
          <Route path="Login" element={<Login />} />
          <Route path="viewlist" element={<ViewList />} />
        </Route>
      </Routes>
    </BrowserRouter>
        {/* <Login/> */}
    </div>
  );
}

export default App;
