import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Contact from './views/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <main className="page-wrapper">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;