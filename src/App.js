import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Getir from "./pages/Getir";
import GetirYemek from "./pages/GetirYemek";
import GetirBuyuk from "./pages/GetirBuyuk";
import GetirSu from "./pages/GetirSu";



function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Getir />} />
        <Route path="/getiryemek" element={<GetirYemek />} />
        <Route path="/getirbuyuk" element={<GetirBuyuk />} />
        <Route path="/getirsu" element={<GetirSu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
