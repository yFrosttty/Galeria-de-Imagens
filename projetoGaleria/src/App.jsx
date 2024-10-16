import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ImageGallery from './ImageGallery';
import ImageDetail from './ImageDetail';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<ImageGallery />} />
                <Route path="/image/:id" element={<ImageDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
