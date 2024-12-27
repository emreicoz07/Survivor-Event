import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Races from './pages/Races';
import Information from './pages/Information';
import Media from './pages/Media';
import About from './pages/About';
import Results from './pages/Results';
import Auth from './pages/Auth';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/races" element={<Races />} />
              <Route path="/information" element={<Information />} />
              <Route path="/media" element={<Media />} />
              <Route path="/about" element={<About />} />
              <Route path="/results" element={<Results />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
