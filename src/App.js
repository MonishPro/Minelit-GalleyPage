import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chapters from './components/Chapters';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import Ancient from './components/Ancient';
import Homepage from './components/Homepage';
import About from './components/About';

function App() {
  return (

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/chapters" element={<Chapters />}></Route>
        <Route path="/ancient" element={<Ancient/>}></Route>
        <Route path="*" element={<Homepage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
