import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import { Route, Routes } from "react-router-dom";
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
  );
}

export default App;
