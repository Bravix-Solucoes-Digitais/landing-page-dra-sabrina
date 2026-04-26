import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import ContactModal from './components/ContactModal'
import ScrollToTop from './components/ScrollToTop'
import ScrollTopButton from './components/ScrollTopButton'

import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home onOpenModal={handleOpenModal} />} />
          <Route path="/servico/:id" element={<ServiceDetail onOpenModal={handleOpenModal} />} />
        </Routes>

        <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
        <ScrollTopButton />
      </div>
    </Router>
  )
}

export default App
