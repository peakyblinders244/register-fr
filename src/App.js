import logo from './logo.svg';
import './App.css';

import { Button, Checkbox, Form,message, Input } from 'antd';
import login from './api/loginApi';
import {Link, Navigate,BrowserRouter ,Routes,Route} from "react-router-dom";
import { useState } from 'react';
import {Login} from './page/login/login';
import {Register} from './page/register/register';
import {Home} from './page/home/home';

function App() {
  

    return (
      <BrowserRouter>
        <Routes >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
    );
  
}

export default App;
