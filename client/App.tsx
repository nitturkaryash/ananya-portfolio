import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HeroTest from "./pages/HeroTest";
import AnanyaCardDemo from "./pages/AnanyaCardDemo";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/hero" element={<HeroTest />} />
      <Route path="/ananya-card" element={<AnanyaCardDemo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;