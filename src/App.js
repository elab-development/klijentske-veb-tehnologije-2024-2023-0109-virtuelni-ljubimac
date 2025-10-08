import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './api/components/Navbar';
import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Stats from './pages/Stats';
import About from './pages/About';

function App() {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/adopt" element={<Adopt />} />
<Route path="/stats" element={<Stats />} />
<Route path="/about" element={<About />} />
</Routes>
</Router>
);
}

export default App;