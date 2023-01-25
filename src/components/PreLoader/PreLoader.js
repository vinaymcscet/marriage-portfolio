import React from 'react';
import './PreLoader.css';

const PreLoader = () => {
    return (
        <div id="preloader">
            <div id="status"><img src="images/header/preloader.gif" id="preloader_image" alt="loader" />
            </div>
        </div>
    );
};

export default PreLoader;
