// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routers from './Router'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
