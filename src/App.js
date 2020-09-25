import React from 'react';
import './index.css';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="allButFooter">
          <Header />
          <Home />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
