import React, { Suspense } from "react";
import Header from "./components/Header";
import Footer from './components/Footer'
import Home from './pages/Home'
import Preloader from "./components/Preloader";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const Contacts = React.lazy(() => import("./pages/Contacts"));
const About = React.lazy(() => import("./pages/About"));
const Catalog = React.lazy(() => import("./pages/Catalog"));

function App() {
  return (
      <Router>
        <Header/>
        <Suspense fallback={<Preloader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/aboutus" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
          </Suspense>
        <Footer/>
      </Router>
  );
}

export default App;
