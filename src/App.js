import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <section id="home" className="page-section page-section-home"><Home /></section>
        <section id="about" className="page-section"><About /></section>
        <section id="projects" className="page-section"><Projects /></section>
        <section id="certificates" className="page-section"><Certificates /></section>
        <section id="contact" className="page-section page-section-contact"><Contact /></section>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
