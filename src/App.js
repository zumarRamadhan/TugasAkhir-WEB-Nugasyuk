import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Login from "../src/login/login";
import BerandaAdmin from './admin/BerandaAdmin';
import DataGuru from './admin/DataGuru';
import DataMurid from './admin/DataMurid';
import Notfound from './Notfound';


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />  
        <Route path="/berandaadmin" element={<BerandaAdmin/>} />  
        <Route path="/dataguru" element={<DataGuru/>} />  
        <Route path="/datamurid" element={<DataMurid/>} />  
        <Route path="/*" element={<Notfound/>} />  
      </Routes>
    </Router>
  );
}

export default App;
