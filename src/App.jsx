import React from 'react'
import './App.css'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Activity from './pages/Activity'
import About from './pages/About'
import News from './pages/News'
import Residents from './pages/Residents'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ParallaxProvider } from 'react-scroll-parallax';
import './i18n'
import Admin from './pages/Admin'
const App = () => {
  return (
    <ParallaxProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
          <Route path='/residents' element={<Residents />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ParallaxProvider>
  )
}

export default App