
import './App.css';
import { Routes,Route } from 'react-router-dom';
import React from "react";
import "./index.css"
import Home from './routes/home';
import RegisterSite from './routes/registerSite';
import Articles from './routes/articles';
import Contacts from './routes/contacts';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Register" element={<RegisterSite />}/>
      <Route path="/Contacts" element={<Contacts />}/>
      <Route path="/Articles" element={<Articles />}/>
    </Routes>
    </>
  );
}

export default App;
