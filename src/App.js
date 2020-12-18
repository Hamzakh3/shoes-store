import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routers from './Router'
// import {Routes, Route} from 'react-router-dom'
// import Home from './components/Home'
// import Men from './components/Men'
// import Women from './components/Women'
// import Kid from './components/Kid'
// import Contact from './components/Contact'
// import Product from './components/Product'

function App() {
  const [shoes, setShoes] = useState([])





  return (
    <div className="App">
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
