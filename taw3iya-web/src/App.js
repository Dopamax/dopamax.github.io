import { render } from "react-dom";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Accueil from "./pages/accueil/Accueil";
import './assets/css/mystyle.css';
import './assets/css/styleheader.css';
import './assets/css/app.css';
import Conditions from "./pages/conditionsutilisation/Conditions";
import Nouveaudossier from "./pages/Nouveaudossier/Nouveaudossier";
import Apropsdossiermedical from "./pages/Apropsdossiermedical/Aproposdossiermedical";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accueil/>} />
      <Route path="/Conditions" element={<Conditions/>} />
      <Route path="/Nouveaudossier" element={<Nouveaudossier/>} />
      <Route path="/Aproposdossier" element={<Apropsdossiermedical/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
