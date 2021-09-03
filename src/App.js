import React from "react";
import './App.css';
import Header from "./pages/Header";
import Content from "./pages/Content";
import Sidebar from "./pages/Sidebar";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className="row">
        <Content/>
        <Sidebar/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;