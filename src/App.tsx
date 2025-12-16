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
import MapPage from "./pages/MapPage";

export default function App() {
  const basePath = import.meta.env.BASE_URL;

  console.log("Base path is:", basePath);

  return (
    <Router basename={basePath}>
      <Routes>
        <Route path="/" element={<LoadingPage />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/cities" element={<CitiesListPage />} />

        <Route path="/city/:cityId" element={<CityDetailPage />} />

        <Route path="/city/:cityId/attractions" element={<CityAttractionsPage />} />

        <Route path="/city/:cityId/attraction/:attractionId" element={<AttractionDetailPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="/smart-suggest" element={<SmartSuggestPage />} />

        <Route path="/map" element={<MapPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
