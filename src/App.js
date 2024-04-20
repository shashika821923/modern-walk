import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navBar";
import Homepage from "./components/HomePage/home.page";
import { MensDressListing } from "./components/lisitngpage/mens-listing";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mens" element={<MensDressListing />} />
          <Route path="/womens" element={<MensDressListing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
