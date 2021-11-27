import { render } from "react-dom";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Accueil from "./pages/accueil/Accueil";
import './assets/css/mystyle.css';
import './assets/css/styleheader.css';
import './assets/css/app.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accueil/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
