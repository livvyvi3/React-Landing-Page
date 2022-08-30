import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from './components/pages/landing';
import Login from './components/pages/login';
import Register from './components/pages/register';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/> 
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
