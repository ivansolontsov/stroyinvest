import React from "react";
import Header from "./components/Header";
import Footer from './components/Footer'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Catalog from './pages/Catalog'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
