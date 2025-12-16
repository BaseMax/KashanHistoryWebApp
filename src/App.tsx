import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import HomePage from "./pages/HomePage";
import CitiesListPage from "./pages/CitiesListPage";
import CityDetailPage from "./pages/CityDetailPage";
import CityAttractionsPage from "./pages/CityAttractionsPage";
import AttractionDetailPage from "./pages/AttractionDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import SmartSuggestPage from "./pages/SmartSuggestPage";
import MapPage from "./pages/MapPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const basePath = import.meta.env.BASE_URL;

  const RouterComponent =
    (import.meta.env.DEV !== true || import.meta.env.MODE !== "development") ? HashRouter : BrowserRouter;
  console.log(basePath, import.meta.env);

  return (
    <RouterComponent basename={basePath}>
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
    </RouterComponent>
  );
}
