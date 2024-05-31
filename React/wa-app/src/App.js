
import './App.css';
import { Routes,Route } from 'react-router-dom';
import React from "react";
import "./index.css"
import Home from './routes/home';
import Articles from './routes/articles';
import Contacts from './routes/contacts';
import Login from './routes/Login';
import Register from './routes/Register';
import Secret from './routes/signedInSite';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Contacts" element={<Contacts />}/>
      <Route path="/About" element={<Articles />}/>
      <Route path="/Register" element={<Register />}/>
      <Route path="/SecretSite" element={<Secret />}/>
    </Routes>
    </>
  );
}

export default App;
