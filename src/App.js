import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEvents } from './context/EventContext';
import RegisterPage from './pages/RegisterPage';

function App() {
  const { events } = useEvents();

  return (
    <Router>
      <div>  
        <Header/>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<HomePage events={events}/>} /> 
            <Route path="/events" element={<EventsPage events={events}/>} /> 
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/register" element={<RegisterPage/>} />
            <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
          </div>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
