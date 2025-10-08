import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './api/components/Navbar';
import Home from './pages/Home';
import Adopt from './pages/Adopt';

const App = () => {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/adopt" element={<Adopt />} />
</Routes>
</Router>
);
};

export default App;
