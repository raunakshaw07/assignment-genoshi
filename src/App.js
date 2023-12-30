// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import MainContent from './components/layouts/MainContent';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Graphs from './components/Graphs';
import Papers from './components/Papers';
import Pricing from './components/Pricing';

function App() {
  const location = useLocation()

  const [pageTitle, setPageTitle] = useState("Dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [component, setComponent] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setComponent(false)
    }
    else {
      setComponent(true)
    }
  }, [])

  useEffect(() => {
    let windowWidth = window.innerWidth
    if (windowWidth < 768) setSidebarOpen(false)
    else setSidebarOpen(true) 
  }, [])

  return (
    <div className={`flex ${component ? 'white-bg' : 'gradiant-bg'}`}>

      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <MainContent pageTitle={pageTitle} toggleSidebar={toggleSidebar} component={component}>
        <Routes>
          <Route exact path='/' element={<Pricing />} />
          <Route exact path='/dashboard' element={<Dashboard setPageTitle={setPageTitle} />} />
          <Route exact path='/graphs' element={<Graphs setPageTitle={setPageTitle} />} />
          <Route exact path='/papers' element={<Papers setPageTitle={setPageTitle} />} />
        </Routes>
      </MainContent>

    </div>
  );
}

export default App;
