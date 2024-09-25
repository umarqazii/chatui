// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import ProfileCard from './components/ProfileCard';
import SplashScreen from './components/SplashScreen';
import Chat from './Chat';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'; // You can add basic styling here.

const App = () => {
  
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<SplashScreen />} />
     <Route path="/chat" element={<Chat />} />
   </Routes>
   </BrowserRouter>
   </>
  );
};

export default App;
