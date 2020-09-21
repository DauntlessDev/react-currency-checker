import React from 'react';
import './index.css';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="allButFooter">
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
