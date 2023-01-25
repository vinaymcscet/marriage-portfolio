import React from 'react';
import Typewriter from 'typewriter-effect';
import './TypeWriterEffect.css';

const TypeWriterEffect = ({ WeddingWishes }) => {
    const weddingmessage = WeddingWishes.map(wishes => (
        wishes.message
    ));

    return (
        <div>
            <Typewriter
                options={{
                    strings: weddingmessage,
                    autoStart: true,
                    loop: true,
                    pauseFor: 2500
                }}
            />
        </div>
    )
};

export default TypeWriterEffect;
