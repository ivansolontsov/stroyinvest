import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from './components/Footer'

function App() {
  return (
    <Layout>
      <Header/>
      <Home/>
      {/* <Footer/> */}
    </Layout>
  );
}

export default App;
