import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home/Home';
import Events from '../Events/Events';
import Family from '../Family/Family';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';

const WebRoutes = () => {
    return (
        <div className='wrapper'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="events" element={<Events />} />
                    <Route path="family" element={<Family />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default WebRoutes;