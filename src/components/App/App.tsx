import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { NotFound } from '../NotFound';
import { Header } from '../Header';
import { Footer } from '../Footer';
import './App.scss';

export const App = () => {
  return (
    <Router basename="/p7.booking_admin">
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
