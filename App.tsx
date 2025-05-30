import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Extension from './pages/Extension';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-gray-100">
        <Toaster position="top-center" />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/extension" element={<Extension />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;