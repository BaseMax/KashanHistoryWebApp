import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";


import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";
import CitiesListPage from "./pages/CitiesListPage";
import CityDetailPage from "./pages/CityDetailPage";
import CityAttractionsPage from "./pages/CityAttractionsPage";
import AttractionDetailPage from "./pages/AttractionDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import SmartSuggestPage from "./pages/SmartSuggestPage";
import CulturePage from "./pages/CulturePage";
import EcotourismPage from "./pages/EcotourismPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/cities" element={<CitiesListPage />} />

        <Route path="/city/:cityId" element={<CityDetailPage />} />

        <Route path="/city/:cityId/attractions" element={<CityAttractionsPage />} />

        <Route path="/attraction/:attractionId" element={<AttractionDetailPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="/smart-suggest" element={<SmartSuggestPage />} />

        <Route path="/culture" element={<CulturePage />} />

        <Route path="/ecotourism" element={<EcotourismPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
