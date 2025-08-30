import { useState } from 'react';
import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/contacts/Contact';

export type Section = 'home' | 'about' | 'projects' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {/* The key prop makes React re-mount the component, re-triggering the animation */}
        <div key={activeSection} className="section-container">
          {renderSection()}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
