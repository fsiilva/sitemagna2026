import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import EquipmentDetailsPage from './pages/EquipmentDetailsPage';
import QuoteRequestPage from './pages/QuoteRequestPage';
import TalkToUsPage from './pages/TalkToUsPage';
import CategoryEquipmentsPage from './pages/CategoryEquipmentsPage';
import ContactBranchesPage from './pages/ContactBranchesPage';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorias/:categorySlug" element={<CategoryEquipmentsPage />} />
        <Route path="/equipamentos/:slug" element={<EquipmentDetailsPage />} />
        <Route path="/orcamento" element={<QuoteRequestPage />} />
        <Route path="/fale-conosco" element={<TalkToUsPage />} />
        <Route path="/contato" element={<ContactBranchesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
